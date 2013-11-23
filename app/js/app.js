data = {
	"name": "Categories",
	"type": "list",
	"childs": [{
		"name": "Sub-Categories1",
		"type": "list",
		"childs": [{
			"name": "Manchester United",
			"type": "item",
			"content": "Champions"
		}, {
			"name": "Arsenal",
			"type": "item",
			"content": "Table Toppers"
		}, {
			"name": "Manchester City",
			"type": "item",
			"content": "Best Individuals"
		}]
	}, {
		"name": "Sub-Categories2",
		"type": "list",
		"childs": [{
			"name": "Manchester United",
			"type": "item",
			"content": "Champions"
		}, {
			"name": "Arsenal",
			"type": "item",
			"content": "Table Toppers"
		}, {
			"name": "Manchester City",
			"type": "item",
			"content": "Best Individuals"
		}]
	}, {
		"name": "Sub-Categories3",
		"type": "list",
		"childs": [{
			"name": "Manchester United",
			"type": "item",
			"content": "Champions"
		}, {
			"name": "Arsenal",
			"type": "item",
			"content": "Table Toppers"
		}, {
			"name": "Manchester City",
			"type": "item",
			"content": "Best Individuals"
		}]
	}]
};

App = Ember.Application.create();

App.Router.map(function() {
	// put your routes here
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return data;
	}
});

App.MainView = Ember.View.extend({
	templateName: 'main',
	didInsertElement: function(){
		window.onpopstate = $.proxy(this.popstate, this);
	},
	click: function(event) {
		var elem = $(event.target);
		if(elem.hasClass('btn')) {
			var data = this.get('maindata').childs.filterBy('name',elem.text());
			history.pushState(Ember.copy(this.get('maindata'),true),'Test');
			this.set('maindata', data[0]);
		}
	},
	popstate: function(event){
		if(event.state) {
			this.set('maindata',event.state);
		}
	}
});