
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

var qText = "";
runOnStartup(async runtime =>
{
	//document.addEventListener("GameComplite", function(e){alert(e.value)});
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	console.log(runtime);
	var text = runtime.objects.qText.getFirstInstance();
	text.text = "qweqeqweqweqweqw123";
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

