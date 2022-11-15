function Alerting(text)
{
	const event = new CustomEvent('GameComplite', { value: 0 });
	event.value = text;
	document.body.dispatchEvent(event);
}


const scriptsInEvents = {

	async списоксобытий1_Event1_Act1(runtime, localVars)
	{
		Alerting(runtime.globalVars.TargetValue);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

