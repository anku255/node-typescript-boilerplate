const TEST = 'TEST_SUB';

export default {
	Subscription: {
		test: {
			subscribe: (_, args, { pubsub }) => {
				console.log('mar', args);
				return pubsub.asyncIterator(TEST);
			},
		},
	},
	Query: {
		testQ: async () => 'asdasd',
	},
	Mutation: {
		testMutation: (_, { params }, { pubsub }) => {
			pubsub.publish(TEST, {
				test: {
					...params,
				},
			});
			return true;
		},
	},
};
