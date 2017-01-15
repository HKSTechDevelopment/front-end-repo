
var gauges = [];


// var data = '[{"country" : "china"}, {"country" : "United States"}, {"country" : "Ecuador"}]';

 
// <script> type="text/javascript" src="ginivalue.json" </script>


var data = {
    "china": { 
        "gini": 42.16,
        "year": 2012,
        "fullname": "China"
        },


    "us": { 
        "gini": 41.06,
        "year": 2013,
        "fullname": "United States"
        },

    "ecuador": { 
        "gini": 47.29,
        "year": 2013,
        "fullname": "Ecuador"
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
	config.yellowZones = [{ from: config.min + range*0.75, to: config.min + range*0.9 }];
	config.redZones = [{ from: config.min + range*0.9, to: config.max }];
	
	gauges[name] = new Gauge(name + "GaugeContainer", config);
	gauges[name].render();
}

function createGauges()
{
	createGauge("china", "China");
	createGauge("us", "United States");
	createGauge("ecuador", "Ecuador");
	//createGauge("test", "Test", -50, 50 );
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
