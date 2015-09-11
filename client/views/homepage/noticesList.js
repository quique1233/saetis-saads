Template.noticesList.helpers({
	'getPastTime': function(date) {
		return 'Publicado:' + moment(date).fromNow();;
	},
	'getSummary': function(username, summary){
		return username + ':' + summary;
	}
})