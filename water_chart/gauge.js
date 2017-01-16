var data = {
    "marine" : { "past": 5.08, "present": 12.18, "current_state": "past"},
    "terrestial" : { "past": 8.21, "present": 14.81, "current_state": "past" },
    "electricity" : { "past": 75.65, "present": 84.58, "current_state": "past"},
    "fossil_fuel" : { "past": 94.1, "present": 81.2, "current_state": "past" },
    //"CO2" : { "past": 9385792.843, "present": 35848592 , "current_state": "past"}
}


console.log(data)

var gauge1 = loadLiquidFillGauge("marine", data.marine.past);
var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = "#FF7777";
config1.textColor = "#FF4444";
config1.waveTextColor = "#FFAAAA";
config1.waveColor = "#FFDDDD";
config1.circleThickness = 0.2;
config1.textVertPosition = 0.2;
config1.waveAnimateTime = 1000;

var gauge2= loadLiquidFillGauge("terrestial", data.terrestial.past, config1);
var config2 = liquidFillGaugeDefaultSettings();
config2.circleColor = "#D4AB6A";
config2.textColor = "#553300";
config2.waveTextColor = "#805615";
config2.waveColor = "#AA7D39";
config2.circleThickness = 0.1;
config2.circleFillGap = 0.2;
config2.textVertPosition = 0.8;
config2.waveAnimateTime = 2000;
config2.waveHeight = 0.3;
config2.waveCount = 1;

var gauge3 = loadLiquidFillGauge("electricity", data.electricity.past, config2);
var config3 = liquidFillGaugeDefaultSettings();
config3.textVertPosition = 0.8;
config3.waveAnimateTime = 5000;
config3.waveHeight = 0.15;
config3.waveAnimate = false;
config3.waveOffset = 0.25;
config3.valueCountUp = false;


var gauge4 = loadLiquidFillGauge("fossil_fuel", data.fossil_fuel.past, config3);
var config4 = liquidFillGaugeDefaultSettings();
config4.circleThickness = 0.15;
config4.circleColor = "#808015";
config4.textColor = "#555500";
config4.waveTextColor = "#FFFFAA";
config4.waveColor = "#AAAA39";
config4.textVertPosition = 0.8;
config4.waveAnimateTime = 1000;
config4.waveHeight = 0.05;
config4.waveAnimate = true;
config4.waveRise = false;
config4.waveHeightScaling = false;
config4.waveOffset = 0.25;
config4.textSize = 0.75;
config4.waveCount = 3;


// var gauge5 = loadLiquidFillGauge("CO2", 9385792.843, config4);
// var config5 = liquidFillGaugeDefaultSettings();
// config5.circleThickness = 0.4;
// config5.circleColor = "#6DA398";
// config5.textColor = "#0E5144";
// config5.waveTextColor = "#6DA398";
// config5.waveColor = "#246D5F";
// config5.textVertPosition = 0.52;
// config5.waveAnimateTime = 5000;
// config5.waveHeight = 0;
// config5.waveAnimate = false;
// config5.waveCount = 2;
// config5.waveOffset = 0.25;
// config5.textSize = 1.2;
// config5.minValue = 30;
// config5.maxValue = 150
// config5.displayPercent = false;


function NewValue(gauge_name){
    if(data[gauge_name]["current_state"] == "past"){
        data[gauge_name]["current_state"] = "present"
        return data[gauge_name]["present"];
    } else {
        data[gauge_name]["current_state"] = "past"
        return data[gauge_name]["past"];
    }
}
