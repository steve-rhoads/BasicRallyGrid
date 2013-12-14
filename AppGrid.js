Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function(){
	    console.log("Basic Rally Grid");
		this._loadData();
	},
	// Loading the grid with data
	_loadData: function(){
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				scope: this,
				load: function(myStore, myData, success) {
					console.log("Got data", myStore, myData);
					this._loadGrid(myStore);
				}
			},
			fetch: ['FormattedID','Owner','Name', 'ScheduleState']
		});
	},
	// Binding the grid to a dataStore
	_loadGrid: function(myStore){
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
				store: myStore,
				columnCfgs: ['FormattedID','ScheduleState','Name','Owner']					
			});
			this.add(myGrid);
			console.log("GotGrid", myGrid);
			console.log("What is this?", this);
	}
});
