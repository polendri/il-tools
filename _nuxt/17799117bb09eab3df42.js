(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,t,n){"use strict";n.r(t);var m=n(186),r=n.n(m);t.default={id:"bf-110-g-2",type:"Bf 110",variant:"Bf 110 G-2",combatDebut:new Date(1942),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[r()("141 km/h"),r()("168 km/h")],flight:[r()("160 km/h"),r()("190 km/h")]},diveSpeedLimit:r()("740 km/h"),maxLoadFactor:r()("11 gee"),stallAngles:{landing:r()("17.4 deg"),flight:r()("20.3 deg")},takeoffSpeedRange:[r()("190 km/h"),r()("230 km/h")],glideslopeSpeedRange:[r()("210 km/h"),r()("230 km/h")],landingSpeedRange:[r()("150 km/h"),r()("170 km/h")],landingAngle:r()("10.7 deg"),length:r()("12.1 m"),wingspan:r()("16.3 m"),wingSurface:r()("38.4 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:r()("0 m"),engineMode:"Combat",speed:r()("489 km/h")},{altitude:r()("2000 m"),engineMode:"Combat",speed:r()("533 km/h")},{altitude:r()("6500 m"),engineMode:"Combat",speed:r()("581 km/h")}],maxPerformance:{climb:[{altitude:r()("0 m"),engineMode:"Combat",speed:r()("270 km/h"),rate:r()("15.6 m/s")},{altitude:r()("3000 m"),engineMode:"Combat",speed:r()("270 km/h"),rate:r()("14.1 m/s")},{altitude:r()("6000 m"),engineMode:"Combat",speed:r()("270 km/h"),rate:r()("10.7 m/s")}],turn:[{altitude:r()("0 m"),engineMode:"Emergency",speed:r()("270 km/h"),time:r()("23.5 s")},{altitude:r()("3000 m"),engineMode:"Emergency",speed:r()("270 km/h"),time:r()("31.2 s")}]},serviceCeiling:r()("10800 m"),flightEndurance:[{altitude:r()("3000 m"),speed:r()("300 km/h"),time:r()("4.0 h")}]},engine:{model:"DB-605B",maxPowers:[{altitude:r()("0 m"),mode:"Combat",power:r()("1310 hp")},{altitude:r()("5800 m"),mode:"Combat",power:r()("1250 hp")},{altitude:r()("0 m"),mode:"Emergency",power:r()("1480 hp")},{altitude:r()("5600 m"),mode:"Emergency",power:r()("1360 hp")}],modes:[{name:"Nominal",limit:null,rpm:r()("2300 rpm"),manifoldPressure:r()("1.15 atm")},{name:"Combat",limit:r()("30 min"),rpm:r()("2600 rpm"),manifoldPressure:r()("1.3 atm")},{name:"Emergency",limit:r()("1 min"),rpm:r()("2800 rpm"),manifoldPressure:r()("1.42 atm")}],ratedTemps:[{name:"Oil",range:[r()("70 degC"),r()("80 degC")]},{name:"Water",range:[r()("100 degC"),r()("102 degC")]}],maxTemps:[{name:"Oil",value:r()("85 degC")},{name:"Water",value:r()("115 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:r()("5905 kg"),minimumWeight:r()("6335 kg"),standardWeight:r()("7514 kg"),maxTakeoffWeight:r()("8928 kg"),fuelLoad:[r()("1003 kg"),r()("1270 L")]},armament:{forwardFiring:{standard:[{qty:4,name:"MG 17",type:"7.92mm machine gun",count:1e3,details:"nose-mounted"},{qty:1,name:"MG 151/20",type:"20mm gun",count:400,details:"nose-mounted left"},{qty:1,name:"MG 151/20",type:"20mm gun",count:350,details:"nose-mounted right"}],modifications:[{qty:2,name:"MG 151/20",type:"20mm gun",count:200,details:"nose-mounted"},{qty:2,name:"BK37",type:"37mm gun",count:66,details:"nose-mounted"}]},defensive:[{qty:2,name:"MG 81",type:"7.92mm machine gun",count:750,details:"Rear"}],bombs:[{qty:12,name:"SC 50",type:"55kg general purpose bomb"},{qty:2,name:"SC 250",type:"249kg general purpose bomb"},{qty:2,name:"SC 500",type:"500kg general purpose bomb"},{qty:1,name:"SC 1000",type:"1090kg general purpose bomb"}],rockets:[]},features:[{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Mixture control",details:["Automatic"]},{feature:"Supercharger",details:["Automatic"]},{feature:"Oil & water radiator shutters",details:["Automatic / manual control","Has fixed positions (5 for oil, 9 for water)"]},{feature:"Propellers",details:["Have a feathering system which should be activated to reduce the drag of a disabled engine"]},{feature:"Trimmers",details:["Pitch, yaw","Horizontal stabilizer automatically controlled based on flaps extension"]},{feature:"Automatic wing slats",details:["Deploy automatically at high angle of attack, which makes pre-stall softer"]},{feature:"Flaps",details:["Can extend at any angle up to 50°"]},{feature:"Tail wheel",details:["Rotates freely and does not have a lock"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Shows the fuel in one of four fuel tanks (alternates in-game every 10 seconds)","Has emergency warning light (50 L) for each tank"]},{feature:"Canopy",details:["Design does not allow opening during flight, but it has an emergency release for bailouts"]},{feature:"Salvo controller",details:["Bomb modes: central 1, central all, left/right wing 1, left/right wing all"]},{feature:"BK37 gun",details:["Reloading performed by the rear gunner at the pilot's command"]},{feature:"Gunsight",details:["Has sliding sun filter"]}],procedures:{startup:["Throttles: 1”","Water/Oil Radiators: As required","Press E to start"],takeoff:["Trims: Neutral","Water/Oil Radiators: Open","Flaps: 20°","Prop Pitch: Auto or Manual 12OC","190 km/h: Rotate","Climb: 260 km/h"],landing:[{text:"Downwind",steps:["Airspeed: Below 250 km/h","Gear: Extend","Water/Oil Radiators: Open","Prop Pitch: Auto or manual 12OC","Airspeed: Below 220 km/h","Flaps: 15-20°"]},{text:"Base to Final",steps:["Airspeed: 200 km/h","Flaps: Extend fully"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=9s",startup:null,takeoff:"https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=4m33s",landing:"https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=7m14s"}}}}]);