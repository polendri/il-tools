(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{171:function(e,t,n){"use strict";n.r(t);var r=n(186),l=n.n(r);t.default={id:"p-38j-25",type:"P-38",variant:"P-38J-25",combatDebut:new Date(1944),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[l()("93 mi/h"),l()("115 mi/h")],flight:[l()("111 mi/h"),l()("137 mi/h")]},diveSpeedLimit:l()("450 mi/h"),maxLoadFactor:l()("9.0 gee"),stallAngles:{landing:l()("11.5 deg"),flight:l()("14.1 deg")},takeoffSpeedRange:[l()("100 mi/h"),l()("110 mi/h")],glideslopeSpeedRange:[l()("115 mi/h"),l()("130 mi/h")],landingSpeedRange:[l()("95 mi/h"),l()("110 mi/h")],landingAngle:l()("7.0 deg"),length:l()("10.89 m"),wingspan:l()("15.85 m"),wingSurface:l()("30.4 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:l()("0 m"),engineMode:"Combat",speed:l()("336 mi/h")},{altitude:l()("8500 m"),engineMode:"Combat",speed:l()("416 mi/h")},{altitude:l()("0 m"),engineMode:"WEP",speed:l()("346 mi/h")},{altitude:l()("7860 m"),engineMode:"WEP",speed:l()("419 mi/h")}],maxPerformance:{climb:[{altitude:l()("0 m"),engineMode:"Combat",speed:l()("195 mi/h"),rate:l()("20.4 m/s")},{altitude:l()("3000 m"),engineMode:"Combat",speed:l()("200 mi/h"),rate:l()("19.1 m/s")},{altitude:l()("6000 m"),engineMode:"Combat",speed:l()("200 mi/h"),rate:l()("15.0 m/s")}],turn:[{altitude:l()("0 m"),engineMode:"WEP",speed:l()("195 mi/h"),time:l()("20.0 s")},{altitude:l()("3000 m"),engineMode:"WEP",speed:l()("200 mi/h"),time:l()("28.3 s")}]},serviceCeiling:l()("40500 ft"),flightEndurance:[{altitude:l()("3000 m"),speed:l()("350 km/h"),time:l()("5.8 h")}]},engine:{model:"Allisaon V-1710-89 (left) and V-1710-91 (right)",maxPowers:[{altitude:l()("0 ft"),mode:"WEP",power:l()("1550 hp")},{altitude:l()("25800 ft"),mode:"WEP",power:l()("1390 hp")}],modes:[{name:"Cruise",limit:null,rpm:l()("2600 rpm"),manifoldPressure:l()("44 inHg")},{name:"Combat",limit:l()("15 min"),rpm:l()("3000 rpm"),manifoldPressure:l()("54 inHg")},{name:"WEP",limit:l()("5 min"),rpm:l()("3000 rpm"),manifoldPressure:l()("60 inHg")}],ratedTemps:[{name:"Oil",range:[l()("105 degC")]},{name:"Water",range:[l()("85 degC")]}],maxTemps:[{name:"Oil",value:l()("115 degC")},{name:"Water",value:l()("105 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:l()("14013 lb"),minimumWeight:l()("14687 lb"),standardWeight:l()("17395 lb"),maxTakeoffWeight:l()("22295 lb"),fuelLoad:[l()("1132 kg"),l()("1575 L")]},armament:{forwardFiring:{standard:[{qty:1,name:"M2",type:"20mm gun",count:150,details:"nose-mounted"},{qty:4,name:"M2.50",type:"12.7mm machine gun",count:300,details:"nose-mounted"}],modifications:[]},defensive:[],bombs:[{qty:6,name:"M64",type:"500 lb general purpose bomb",details:null},{qty:4,name:"M65",type:"1000 lb general purpose bomb",details:null},{qty:2,name:"M66",type:"2000 lb general purpose bomb",details:null}],rockets:[{qty:6,name:"M8",type:"unguided rockets",details:null}]},features:[{feature:"Supercharger",details:["Automatic","Single-stage"]},{feature:"Turbo-supercharger",details:["Automatic","RPM changes relatively slowly"]},{feature:"Mixture control",details:["Automatic when set to Auto Rich (70%) or Auto Lean (30%)"]},{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM","Can be disabled for manual prop pitch control"]},{feature:"Trimmers",details:["Pitch, yaw"]},{feature:"Flaps",details:["Can extend up to 40°"]},{feature:"Hydraulic aileron actuators",details:["Makes high-performance rolls at high speed possible","Can only operate with sufficient hydraulic pressure (both engines running); turns on/off automatically in-game"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Parking brake",details:[]},{feature:"Landing gear indicator lamp",details:["Lights when the gear is neither extended nor retracted","Nose wheel extension can also be visually checked via its reflection on the engine nacelles"]},{feature:"Fuel gauges",details:["Separate gauges for left and right tank pairs","Has warning lights for low fuel in outer wing (primary) tanks"]},{feature:"Canopy",details:["Has an emergency release for bailouts","Side windows can be lowered during flight, but this can cause excessive shaking of the plane"]},{feature:"Salvo controller",details:["Bomb modes: 1, 2","Rocket modes: 1 / 2 / 3 / All"]}],procedures:{startup:["Propeller: Forward","Mixture: Cutoff","Oil/Intercooler: Auto","Throttle: 1”","Press E to start","As engine starts: Mixture Auto Rich (70%)"],takeoff:["Propeller: Full forward","Mixture: Auto Rich (70%)","Flaps: Up (max 1/2 is allowed)","Oil/Coolant Shutters: Auto","Intercooler: Open","Trims: All set to zero","Brakes: Hold","Throttle: 46” MP, wait a few secs","Brakes: Release","Throttle: 54” MP","100 mph: Rotate","Climb: 160 mph"],landing:[{text:"Downwind",steps:["Mixture: Auto Rich","RPM: 2600","Airspeed: Below 175 mph","Landing Gear: Extend"]},{text:"End Downwind",steps:["Airspeed: 150 mph","Flaps: Extend to full"]},{text:"Base to Final",steps:["Flaps: Extend once landing assured","Airspeed: Slow to 120..130 mph"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=DMC0M6xV3xo&t=9s",startup:"https://www.youtube.com/watch?v=DMC0M6xV3xo&t=4m33s",takeoff:"https://www.youtube.com/watch?v=DMC0M6xV3xo&t=8m06s",landing:"https://www.youtube.com/watch?v=DMC0M6xV3xo&t=10m25s"}}}}]);