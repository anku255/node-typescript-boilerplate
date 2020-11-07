import { mergeResolvers } from '@graphql-tools/merge';

import testResolver from './test.resolver';
// import authResolver from './auth.resolver';
// import badgeResolver from './badge.resolver';
// import blogResolver from './blog.resolver';
// import careersResolver from './careers.resolver';
// import categoryResolver from './category.resolver';
// import chatResolver from './chat.resolver';
// import contactResolver from './contact.resolver';
// import contentAnalyticsResolver from './contentAnalytics.resolver';
// import courseResolver from './course.resolver';
// import faqResolver from './faq.resolver';
// import imageResolver from './image.resolver';
// import instructorResolver from './instructor.resolver';
// import paymentResolver from './payment.resolver';
// import pollResolver from './poll.resolver';
// import profileResolver from './profile.resolver';
// import sessionParticipantResolver from './sessionParticipant.resolver';
// import sessionResolver from './session.resolver';
// import skillsResolver from './skills.resolver';
// import streamResolver from './stream.resolver';
// import userResolver from './user.resolver';
// import subscriptionResolver from './subscription.resolver';
// import locationSearchResolver from './search.resolver';

// export default mergeResolvers([
// 	authResolver,
// 	badgeResolver,
// 	blogResolver,
// 	careersResolver,
// 	categoryResolver,
// 	chatResolver,
// 	contactResolver,
// 	contentAnalyticsResolver,
// 	courseResolver,
// 	faqResolver,
// 	imageResolver,
// 	instructorResolver,
// 	paymentResolver,
// 	pollResolver,
// 	profileResolver,
// 	sessionParticipantResolver,
// 	sessionResolver,
// 	streamResolver,
// 	userResolver,
// 	locationSearchResolver,
// 	skillsResolver,
// 	subscriptionResolver,
// ]);

export default mergeResolvers([testResolver]);
