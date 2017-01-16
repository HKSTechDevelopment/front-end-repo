
var gauges = [];

var data = {
    "china": { 
        "gini": 42.16,
        "year": 2012,
        "fullname": "China-Haiyang"
        },
    "us": { 
        "gini": 41.06,
        "year": 2013,
        "fullname": "US-James"
        },

    "ecuador": { 
        "gini": 47.29,
        "year": 2013,
        "fullname": "Ecuador-Dan"
        },

    "finland": { 
        "gini": 27.1,
        "year": 2012,
        "fullname": "Finland-ideal"
        },

    "brazil": { 
        "gini": 51.5,
        "year": 2014,
        "fullname": "Brazil-sad"
        }
}
function createGauge(name, label, min, max)
{
	var config = 
	{
		size: 120,
		label: label,
		min: undefined != min ? min : 0,
		max: undefined != max ? max : 100,
		minorTicks: 5,
		name: name
	}
	
	var range = config.max - config.min;
	config.yellowZones = [{ from: config.min + range*0.5, to: config.min + range*0.75 }];
	config.redZones = [{ from: config.min + range*0.75, to: config.max }];
	
	gauges[name] = new Gauge(name + "GaugeContainer", config);
	gauges[name].render();
}

function createGauges()
{
	createGauge("china", "China-Haiyang");
	createGauge("us", "US-James");
	createGauge("ecuador", "Ecuador-Dan");
	createGauge("finland", "Finland-ideal");
	createGauge("brazil", "Brazil-sad");

}

function updateGauges()
{
	for (var key in gauges)
	{
		var value = getValue(gauges[key])
		gauges[key].redraw(value);
	}
}

function getValue(gauge)
{
	return data[gauge.config.name]["gini"]
}

function getRandomValue(gauge)
{
	var overflow = 0; //10;
	return gauge.config.min - overflow + (gauge.config.max - gauge.config.min + overflow*2) *  Math.random();
}

function initialize()
{
	createGauges();
	setInterval(updateGauges, 5000);
}
