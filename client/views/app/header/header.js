Template.header.events({
	'click [data-action="toggleMenu"]': function() {
		$('.sidebar').sidebar('toggle');
	}
});