(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,t,n){"use strict";n.r(t);var m=n(254),o=n.n(m);t.default={id:"bf-109-g-14",type:"Bf 109",variant:"Bf 109 G-14",combatDebut:new Date(1943,6),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[o()("156 km/h"),o()("172 km/h")],flight:[o()("164 km/h"),o()("181 km/h")]},diveSpeedLimit:o()("850 km/h"),maxLoadFactor:o()("10.5 gee"),stallAngles:{landing:o()("17 deg"),flight:o()("19.8 deg")},takeoffSpeedRange:[o()("155 km/h"),o()("180 km/h")],glideslopeSpeedRange:[o()("195 km/h"),o()("205 km/h")],landingSpeedRange:[o()("150 km/h"),o()("155 km/h")],landingAngle:o()("13.7 deg"),length:o()("8.94 m"),wingspan:o()("9.97 m"),wingSurface:o()("16.1 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:o()("0 m"),engineMode:"Combat",speed:o()("505 km/h")},{altitude:o()("2000 m"),engineMode:"Combat",speed:o()("547 km/h")},{altitude:o()("7000 m"),engineMode:"Combat",speed:o()("619 km/h")},{altitude:o()("0 m"),engineMode:"Emergency",speed:o()("576 km/h")},{altitude:o()("5500 m"),engineMode:"Emergency",speed:o()("668 km/h")}],maxPerformance:{climb:[{altitude:o()("0 m"),engineMode:"Combat",speed:o()("270 km/h"),rate:o()("19.2 m/s")},{altitude:o()("3000 m"),engineMode:"Combat",speed:o()("270 km/h"),rate:o()("17.5 m/s")},{altitude:o()("6000 m"),engineMode:"Combat",speed:o()("270 km/h"),rate:o()("13.1 m/s")}],turn:[{altitude:o()("0 m"),engineMode:"Combat",speed:o()("270 km/h"),time:o()("23.0 s")},{altitude:o()("3000 m"),engineMode:"Combat",speed:o()("270 km/h"),time:o()("31.5 s")}]},serviceCeiling:o()("11500 m"),flightEndurance:[{altitude:o()("3000 m"),speed:o()("350 km/h"),time:o()("2.15 h")}]},engine:{model:"DB-605AM",maxPowers:[{altitude:o()("0 m"),mode:"Combat",power:o()("1310 hp")},{altitude:o()("5800 m"),mode:"Combat",power:o()("1250 hp")},{altitude:o()("0 m"),mode:"Emergency",power:o()("1800 hp")},{altitude:o()("5600 m"),mode:"Emergency",power:o()("1700 hp")}],modes:[{name:"Nominal",limit:null,rpm:o()("2300 rpm"),manifoldPressure:o()("1.15 atm")},{name:"Combat",limit:o()("30 min"),rpm:o()("2600 rpm"),manifoldPressure:o()("1.3 atm")},{name:"Emergency",limit:o()("10 min"),rpm:o()("2800 rpm"),manifoldPressure:o()("1.7 atm")}],ratedTemps:[{name:"Oil",range:[o()("70 degC"),o()("80 degC")]},{name:"Water",range:[o()("100 degC"),o()("102 degC")]}],maxTemps:[{name:"Oil",value:o()("85 degC")},{name:"Water",value:o()("115 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:o()("2680 kg"),minimumWeight:o()("2899 kg"),standardWeight:o()("3266 kg"),maxTakeoffWeight:o()("3565 kg"),fuelLoad:[o()("304 kg"),o()("400 L")]},armament:{forwardFiring:{standard:[{qty:1,name:"MG 151/20",type:"20mm cannon",count:200,details:"nose-mounted"},{qty:2,name:"MG 131",type:"13mm machine gun",count:300,details:"synchronized"}],modifications:[{qty:2,name:"MG 151/20",type:"20mm cannon",count:135,details:"wing-mounted"},{qty:1,name:"MK 108",type:"30mm gun",count:65,details:"nose-mounted"}]},defensive:[],bombs:[{qty:4,name:"SD 70",type:"66kg fragmentation bomb"},{qty:1,name:"SC 250",type:"249kg general purpose bomb"}],rockets:[{qty:2,name:"WGr.21",type:"rocket",details:null}]},features:[{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Mixture control",details:["Automatic"]},{feature:"Supercharger",details:["Automatic"]},{feature:"MW-50 water-methanol mixture injection system",details:["Prevents engine detonation in Emergency power mode","Engages automatically when throttle is full forward","Has enough mixture for 30 minutes","Has a pressure indicator in left of cockpit: normal pressure is 0.6..0.7, stop using at < 0.4"]},{feature:"Oil & water radiator shutters",details:["Automatic / manual control"]},{feature:"Trimmers",details:["Horizontal stabilizer"]},{feature:"Automatic wing slats",details:["Deploy automatically at high angle of attack, which makes pre-stall softer"]},{feature:"Flaps",details:["Slow to operate; allow time for this on landing approach","Can be extended up to 40°","Black line markings on the flaps measure their extension"]},{feature:"Tail wheel",details:["Has a manual lock"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Has emergency warning light (80 L)"]},{feature:"Canopy",details:["Design does not allow opening during flight, but it has an emergency release for bailouts"]},{feature:"Gunsight",details:["Has sliding sun filter"]}],procedures:{startup:["Canopy: Closed","Flaps: 20°","H-Stab Trim: +1","Throttle: 1”","Prop Pitch: Auto","Radiators: Auto","Press E to start"],takeoff:["Canopy: Closed","Flaps: 20°","H-Stab Trim: +1","Tailwheel: Locked","Prop Pitch: Auto","180 km/h: Rotate","200 km/h: Flaps Up","Climb: 270 km/h to 3000m"],landing:[{text:"Downwind",steps:["Airspeed: Below 300 km/h","Gear: Extend","Tailwheel: Locked","H-Stab Trim: -4 to -5","Prop Pitch: Auto or Manual 12OC"]},{text:"End Downwind",steps:["Airspeed: 220 km/h","Flaps: Extend to full"]},{text:"Base to final",steps:["Airspeed: 180..200 km/h"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=aLM_hQoaqp0&t=5s",startup:null,takeoff:"https://www.youtube.com/watch?v=aLM_hQoaqp0&t=4m14s",landing:"https://www.youtube.com/watch?v=aLM_hQoaqp0&t=6m11s"}}}}]);