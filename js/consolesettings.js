var ConsoleSettings = {
	title: "BIMsie API",
	subtitle: "BIM Service Interface Exchange",
	getStaticServerAddress: function(callback){
		callback("http://[Your BIMsie Compliant Server]");
	},
	getVersion: function(){
		return "1.0";
	}, getServiceInterfaces: function(consoleObject, callback){
		$.getJSON(Global.baseJsDir + "services.json", function(data){
			callback(data.services);
		});
	}
}