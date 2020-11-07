import express from 'express';
import http from 'http';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
// import { RedisPubSub } from 'graphql-redis-subscriptions';

import serverConfig from './config';

import resolvers from './resolvers';
import schema from './schema';
// import upgradeResponse from './utils/responseconstuctor';
// import checkJWT from './utils/jwt';
// import { StringMaybe } from './helpers/commonHelpers';
// import redisConnection from './utils/redis';

import routes from './routes/routes';
// import genericRoutes from './api/generic/routes';

// const redisClient = redisConnection();

// Initialize the Express App
const app = express();

// const whitelist = [
// 	process.env.FE_SERVICE_ENDPOINT,
// 	process.env.BE_SERVICE_ENDPOINT,
// 	'http://localhost:8081',
// 	'http://localhost:3001',
// 	process.env.FE_ADMIN_SERVICE_ENDPOINT,
// 	process.env.ZOOM_SERVICE_ENDPOINT,
// 	'https://www.yellowclasses.com',
// ]; // localhost temporary

// const TOP_LEVEL_DOMAIN = '.yellowclass.com';

// const corsOptions = {
// 	credentials: true,
// 	origin: (origin, cb) => {
// 		const isTLD = StringMaybe(origin).endsWith(TOP_LEVEL_DOMAIN);
// 		if (isTLD || whitelist.indexOf(origin) !== -1 || !origin) {
// 			cb(null, true);
// 		} else {
// 			cb(new Error(`Not allowed by CORS. Origin - ${origin}`));
// 		}
// 	},
// };

// app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser());
// app.use(checkJWT());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	// req.redisClient = redisClient;
	next();
});

// upgradeResponse(app).use(routes);
app.use(routes);

// const pubsub = new RedisPubSub({
// 	publisher: redisConnection(),
// 	subscriber: redisConnection(),
// });

const apolloServer = new ApolloServer({
	typeDefs: schema,
	resolvers,
	engine: {
		// reportSchema: true,
	},
	plugins: [],
	context: ({ req, res, connection }) => {
		const ctx = {
			req,
			res,
			// user: (req || {}).user,
			// redisClient,
			// pubsub,
		};
		if (connection) {
			return {
				...ctx,
				...connection.context,
			};
		}
		return ctx;
	},
	introspection: true,
	playground: true,
	subscriptions: {
		path: '/subscriptions',
		onConnect: () => {
			// console.log('WebSocket Connected');
			// console.log('on connect', context);
		},
		onDisconnect: () => {
			// console.log('WebSocket Disconnected');
		},
	},
	formatError: (err) => {
		// Don't give the specific errors to the client.
		if (err.message.startsWith('Database Error: ')) {
			return new Error('Internal server error');
		}

		// Otherwise return the original error.  The error can also
		// be manipulated in other ways, so long as it's returned.
		return err;
	},
});

apolloServer.applyMiddleware({ app, cors: false });

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
console.log('serverConfig', serverConfig);
httpServer.listen(serverConfig.port, () => {
	console.log(`🚀 Server ready at http://localhost:${serverConfig.port}${apolloServer.graphqlPath}`);
	console.log(`🚀 Subscriptions ready at ws://localhost:${serverConfig.port}${apolloServer.subscriptionsPath}`);
});
