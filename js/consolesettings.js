var ConsoleSettings = {
	title: "BIMsie API",
	subtitle: "BIM Service Interface Exchange",
	getStaticServerAddress: function(callback){
		callback("http://sandbox.bimserver.org");
	},
	getVersion: function(){
		return "2.0";
	}, getServiceInterfaces: function(consoleObject, callback){
		$.getJSON(Global.baseJsDir + "services.json", function(data){
			callback(data.services);
		});
	}
}