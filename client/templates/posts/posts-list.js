var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	},
	{
		title: 'Help Portrait 2014 - Minneapolis, MN',
		url: 'http://julianomoreira.com/notebook/article/help-portrait-2014-minneapolis-mn'
	}
];
Template.postsList.helpers({
	posts: postsData
});