var ConsoleSettings = {
	title: "BIMsie API",
	subtitle: "BIM Service Interface Exchange",
	getStaticServerAddress: function(callback){
		callback("http://bimserver.tno.nl");
	},
	getVersion: function(){
		return "1.1";
	}, getServiceInterfaces: function(consoleObject, callback){
		$.getJSON(Global.baseJsDir + "services.json", function(data){
			callback(data.services);
		});
	}
}