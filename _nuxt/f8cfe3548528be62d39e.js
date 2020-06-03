(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,r){e.exports=function(){"use strict";function e(e){return"string"==typeof e||e instanceof String}var t=Number.isFinite||window.isFinite;function r(e){return t(e)}function n(e){return e}function o(e,t){if(t.length!==e.length)return!1;for(var i=0;i<e.length;i++){if(t[i].compareArray&&!t[i].compareArray(e[i]))return!1;if(t[i]!==e[i])return!1}return!0}function m(e,t){Object.keys(t).forEach((function(r){e[r]=t[r]}))}function c(){for(var e=1,t=0,i=0;i<arguments.length;i++){var r=arguments[i];t+=d(r),e*=r}return 0!==t?h(e,t):e}function l(e,t){if(0===t)throw new Error("Divide by zero");var r=Math.pow(10,d(t));return c(e,r/(r*t))}function h(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function d(e){if(!isFinite(e))return 0;for(var t=0;e%1!=0;)e*=10,t++;return t}function f(){var e;if(!this)return e=Object.create(f.prototype),f.apply(e,arguments),e;e=Error.apply(this,arguments),this.name="QtyError",this.message=e.message,this.stack=e.stack}function v(e,t){throw new f("Incompatible units: "+e+" and "+t)}f.prototype=Object.create(Error.prototype,{constructor:{value:f}});var w={"<googol>":[["googol"],1e100,"prefix"],"<kibi>":[["Ki","Kibi","kibi"],Math.pow(2,10),"prefix"],"<mebi>":[["Mi","Mebi","mebi"],Math.pow(2,20),"prefix"],"<gibi>":[["Gi","Gibi","gibi"],Math.pow(2,30),"prefix"],"<tebi>":[["Ti","Tebi","tebi"],Math.pow(2,40),"prefix"],"<pebi>":[["Pi","Pebi","pebi"],Math.pow(2,50),"prefix"],"<exi>":[["Ei","Exi","exi"],Math.pow(2,60),"prefix"],"<zebi>":[["Zi","Zebi","zebi"],Math.pow(2,70),"prefix"],"<yebi>":[["Yi","Yebi","yebi"],Math.pow(2,80),"prefix"],"<yotta>":[["Y","Yotta","yotta"],1e24,"prefix"],"<zetta>":[["Z","Zetta","zetta"],1e21,"prefix"],"<exa>":[["E","Exa","exa"],1e18,"prefix"],"<peta>":[["P","Peta","peta"],1e15,"prefix"],"<tera>":[["T","Tera","tera"],1e12,"prefix"],"<giga>":[["G","Giga","giga"],1e9,"prefix"],"<mega>":[["M","Mega","mega"],1e6,"prefix"],"<kilo>":[["k","kilo"],1e3,"prefix"],"<hecto>":[["h","Hecto","hecto"],100,"prefix"],"<deca>":[["da","Deca","deca","deka"],10,"prefix"],"<deci>":[["d","Deci","deci"],.1,"prefix"],"<centi>":[["c","Centi","centi"],.01,"prefix"],"<milli>":[["m","Milli","milli"],.001,"prefix"],"<micro>":[["u","μ","µ","Micro","mc","micro"],1e-6,"prefix"],"<nano>":[["n","Nano","nano"],1e-9,"prefix"],"<pico>":[["p","Pico","pico"],1e-12,"prefix"],"<femto>":[["f","Femto","femto"],1e-15,"prefix"],"<atto>":[["a","Atto","atto"],1e-18,"prefix"],"<zepto>":[["z","Zepto","zepto"],1e-21,"prefix"],"<yocto>":[["y","Yocto","yocto"],1e-24,"prefix"],"<1>":[["1","<1>"],1,""],"<meter>":[["m","meter","meters","metre","metres"],1,"length",["<meter>"]],"<inch>":[["in","inch","inches",'"'],.0254,"length",["<meter>"]],"<foot>":[["ft","foot","feet","'"],.3048,"length",["<meter>"]],"<yard>":[["yd","yard","yards"],.9144,"length",["<meter>"]],"<mile>":[["mi","mile","miles"],1609.344,"length",["<meter>"]],"<naut-mile>":[["nmi","naut-mile"],1852,"length",["<meter>"]],"<league>":[["league","leagues"],4828,"length",["<meter>"]],"<furlong>":[["furlong","furlongs"],201.2,"length",["<meter>"]],"<rod>":[["rd","rod","rods"],5.029,"length",["<meter>"]],"<mil>":[["mil","mils"],254e-7,"length",["<meter>"]],"<angstrom>":[["ang","angstrom","angstroms"],1e-10,"length",["<meter>"]],"<fathom>":[["fathom","fathoms"],1.829,"length",["<meter>"]],"<pica>":[["pica","picas"],.00423333333,"length",["<meter>"]],"<point>":[["pt","point","points"],.000352777778,"length",["<meter>"]],"<redshift>":[["z","red-shift","redshift"],1302773e20,"length",["<meter>"]],"<AU>":[["AU","astronomical-unit"],1495979e5,"length",["<meter>"]],"<light-second>":[["ls","light-second"],299792500,"length",["<meter>"]],"<light-minute>":[["lmin","light-minute"],1798755e4,"length",["<meter>"]],"<light-year>":[["ly","light-year"],9460528e9,"length",["<meter>"]],"<parsec>":[["pc","parsec","parsecs"],3085678e10,"length",["<meter>"]],"<datamile>":[["DM","datamile"],1828.8,"length",["<meter>"]],"<kilogram>":[["kg","kilogram","kilograms"],1,"mass",["<kilogram>"]],"<AMU>":[["u","AMU","amu"],1660538921e-36,"mass",["<kilogram>"]],"<dalton>":[["Da","Dalton","Daltons","dalton","daltons"],1660538921e-36,"mass",["<kilogram>"]],"<slug>":[["slug","slugs"],14.5939029,"mass",["<kilogram>"]],"<short-ton>":[["tn","ton","short-ton"],907.18474,"mass",["<kilogram>"]],"<metric-ton>":[["tonne","metric-ton"],1e3,"mass",["<kilogram>"]],"<carat>":[["ct","carat","carats"],2e-4,"mass",["<kilogram>"]],"<pound>":[["lbs","lb","pound","pounds","#"],.45359237,"mass",["<kilogram>"]],"<ounce>":[["oz","ounce","ounces"],.0283495231,"mass",["<kilogram>"]],"<gram>":[["g","gram","grams","gramme","grammes"],.001,"mass",["<kilogram>"]],"<grain>":[["grain","grains","gr"],6479891e-11,"mass",["<kilogram>"]],"<dram>":[["dram","drams","dr"],.0017718452,"mass",["<kilogram>"]],"<stone>":[["stone","stones","st"],6.35029318,"mass",["<kilogram>"]],"<hectare>":[["hectare"],1e4,"area",["<meter>","<meter>"]],"<acre>":[["acre","acres"],4046.85642,"area",["<meter>","<meter>"]],"<sqft>":[["sqft"],1,"area",["<foot>","<foot>"]],"<liter>":[["l","L","liter","liters","litre","litres"],.001,"volume",["<meter>","<meter>","<meter>"]],"<gallon>":[["gal","gallon","gallons"],.0037854118,"volume",["<meter>","<meter>","<meter>"]],"<gallon-imp>":[["galimp","gallon-imp","gallons-imp"],.00454609,"volume",["<meter>","<meter>","<meter>"]],"<quart>":[["qt","quart","quarts"],.00094635295,"volume",["<meter>","<meter>","<meter>"]],"<pint>":[["pt","pint","pints"],.000473176475,"volume",["<meter>","<meter>","<meter>"]],"<pint-imp>":[["ptimp","pint-imp","pints-imp"],.00056826125,"volume",["<meter>","<meter>","<meter>"]],"<cup>":[["cu","cup","cups"],.000236588238,"volume",["<meter>","<meter>","<meter>"]],"<fluid-ounce>":[["floz","fluid-ounce","fluid-ounces"],295735297e-13,"volume",["<meter>","<meter>","<meter>"]],"<fluid-ounce-imp>":[["flozimp","floz-imp","fluid-ounce-imp","fluid-ounces-imp"],284130625e-13,"volume",["<meter>","<meter>","<meter>"]],"<tablespoon>":[["tb","tbsp","tbs","tablespoon","tablespoons"],147867648e-13,"volume",["<meter>","<meter>","<meter>"]],"<teaspoon>":[["tsp","teaspoon","teaspoons"],492892161e-14,"volume",["<meter>","<meter>","<meter>"]],"<bushel>":[["bu","bsh","bushel","bushels"],.035239072,"volume",["<meter>","<meter>","<meter>"]],"<oilbarrel>":[["bbl","oil-barrel","oil-barrels"],.158987294928,"volume",["<meter>","<meter>","<meter>"]],"<beerbarrel>":[["bl","bl-us","beer-barrel","beer-barrels"],.1173477658,"volume",["<meter>","<meter>","<meter>"]],"<beerbarrel-imp>":[["blimp","bl-imp","beer-barrel-imp","beer-barrels-imp"],.16365924,"volume",["<meter>","<meter>","<meter>"]],"<kph>":[["kph"],.277777778,"speed",["<meter>"],["<second>"]],"<mph>":[["mph"],.44704,"speed",["<meter>"],["<second>"]],"<knot>":[["kt","kn","kts","knot","knots"],.514444444,"speed",["<meter>"],["<second>"]],"<fps>":[["fps"],.3048,"speed",["<meter>"],["<second>"]],"<gee>":[["gee"],9.80665,"acceleration",["<meter>"],["<second>","<second>"]],"<kelvin>":[["degK","kelvin"],1,"temperature",["<kelvin>"]],"<celsius>":[["degC","celsius","celsius","centigrade"],1,"temperature",["<kelvin>"]],"<fahrenheit>":[["degF","fahrenheit"],5/9,"temperature",["<kelvin>"]],"<rankine>":[["degR","rankine"],5/9,"temperature",["<kelvin>"]],"<temp-K>":[["tempK","temp-K"],1,"temperature",["<temp-K>"]],"<temp-C>":[["tempC","temp-C"],1,"temperature",["<temp-K>"]],"<temp-F>":[["tempF","temp-F"],5/9,"temperature",["<temp-K>"]],"<temp-R>":[["tempR","temp-R"],5/9,"temperature",["<temp-K>"]],"<second>":[["s","sec","secs","second","seconds"],1,"time",["<second>"]],"<minute>":[["min","mins","minute","minutes"],60,"time",["<second>"]],"<hour>":[["h","hr","hrs","hour","hours"],3600,"time",["<second>"]],"<day>":[["d","day","days"],86400,"time",["<second>"]],"<week>":[["wk","week","weeks"],604800,"time",["<second>"]],"<fortnight>":[["fortnight","fortnights"],1209600,"time",["<second>"]],"<year>":[["y","yr","year","years","annum"],31556926,"time",["<second>"]],"<decade>":[["decade","decades"],315569260,"time",["<second>"]],"<century>":[["century","centuries"],3155692600,"time",["<second>"]],"<pascal>":[["Pa","pascal","Pascal"],1,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<bar>":[["bar","bars"],1e5,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<mmHg>":[["mmHg"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inHg>":[["inHg"],3386.3881472,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<torr>":[["torr"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<atm>":[["atm","ATM","atmosphere","atmospheres"],101325,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<psi>":[["psi"],6894.76,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<cmh2o>":[["cmH2O","cmh2o"],98.0638,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inh2o>":[["inH2O","inh2o"],249.082052,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<poise>":[["P","poise"],.1,"viscosity",["<kilogram>"],["<meter>","<second>"]],"<stokes>":[["St","stokes"],1e-4,"viscosity",["<meter>","<meter>"],["<second>"]],"<mole>":[["mol","mole"],1,"substance",["<mole>"]],"<molar>":[["M","molar"],1e3,"concentration",["<mole>"],["<meter>","<meter>","<meter>"]],"<wtpercent>":[["wt%","wtpercent"],10,"concentration",["<kilogram>"],["<meter>","<meter>","<meter>"]],"<katal>":[["kat","katal","Katal"],1,"activity",["<mole>"],["<second>"]],"<unit>":[["U","enzUnit","unit"],16667e-19,"activity",["<mole>"],["<second>"]],"<farad>":[["F","farad","Farad"],1,"capacitance",["<second>","<second>","<second>","<second>","<ampere>","<ampere>"],["<meter>","<meter>","<kilogram>"]],"<coulomb>":[["C","coulomb","Coulomb"],1,"charge",["<ampere>","<second>"]],"<Ah>":[["Ah"],3600,"charge",["<ampere>","<second>"]],"<ampere>":[["A","Ampere","ampere","amp","amps"],1,"current",["<ampere>"]],"<siemens>":[["S","Siemens","siemens"],1,"conductance",["<second>","<second>","<second>","<ampere>","<ampere>"],["<kilogram>","<meter>","<meter>"]],"<henry>":[["H","Henry","henry"],1,"inductance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>","<ampere>"]],"<volt>":[["V","Volt","volt","volts"],1,"potential",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>"]],"<ohm>":[["Ohm","ohm","Ω","Ω"],1,"resistance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>","<ampere>"]],"<weber>":[["Wb","weber","webers"],1,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<tesla>":[["T","tesla","teslas"],1,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<gauss>":[["G","gauss"],1e-4,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<maxwell>":[["Mx","maxwell","maxwells"],1e-8,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<oersted>":[["Oe","oersted","oersteds"],250/Math.PI,"magnetism",["<ampere>"],["<meter>"]],"<joule>":[["J","joule","Joule","joules"],1,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<erg>":[["erg","ergs"],1e-7,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<btu>":[["BTU","btu","BTUs"],1055.056,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<calorie>":[["cal","calorie","calories"],4.184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<Calorie>":[["Cal","Calorie","Calories"],4184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<therm-US>":[["th","therm","therms","Therm","therm-US"],105480400,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<Wh>":[["Wh"],3600,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<newton>":[["N","Newton","newton"],1,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<dyne>":[["dyn","dyne"],1e-5,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<pound-force>":[["lbf","pound-force"],4.448222,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<hertz>":[["Hz","hertz","Hertz"],1,"frequency",["<1>"],["<second>"]],"<radian>":[["rad","radian","radians"],1,"angle",["<radian>"]],"<degree>":[["deg","degree","degrees"],Math.PI/180,"angle",["<radian>"]],"<gradian>":[["gon","grad","gradian","grads"],Math.PI/200,"angle",["<radian>"]],"<steradian>":[["sr","steradian","steradians"],1,"solid_angle",["<steradian>"]],"<rotation>":[["rotation"],2*Math.PI,"angle",["<radian>"]],"<rpm>":[["rpm"],2*Math.PI/60,"angular_velocity",["<radian>"],["<second>"]],"<byte>":[["B","byte","bytes"],1,"information",["<byte>"]],"<bit>":[["b","bit","bits"],.125,"information",["<byte>"]],"<Bps>":[["Bps"],1,"information_rate",["<byte>"],["<second>"]],"<bps>":[["bps"],.125,"information_rate",["<byte>"],["<second>"]],"<dollar>":[["USD","dollar"],1,"currency",["<dollar>"]],"<cents>":[["cents"],.01,"currency",["<dollar>"]],"<candela>":[["cd","candela"],1,"luminosity",["<candela>"]],"<lumen>":[["lm","lumen"],1,"luminous_power",["<candela>","<steradian>"]],"<lux>":[["lux"],1,"illuminance",["<candela>","<steradian>"],["<meter>","<meter>"]],"<watt>":[["W","watt","watts"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<volt-ampere>":[["VA","volt-ampere"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<volt-ampere-reactive>":[["var","Var","VAr","VAR","volt-ampere-reactive"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<horsepower>":[["hp","horsepower"],745.699872,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<gray>":[["Gy","gray","grays"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<roentgen>":[["R","roentgen"],.00933,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<sievert>":[["Sv","sievert","sieverts"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<becquerel>":[["Bq","becquerel","becquerels"],1,"radiation",["<1>"],["<second>"]],"<curie>":[["Ci","curie","curies"],37e9,"radiation",["<1>"],["<second>"]],"<cpm>":[["cpm"],1/60,"rate",["<count>"],["<second>"]],"<dpm>":[["dpm"],1/60,"rate",["<count>"],["<second>"]],"<bpm>":[["bpm"],1/60,"rate",["<count>"],["<second>"]],"<dot>":[["dot","dots"],1,"resolution",["<each>"]],"<pixel>":[["pixel","px"],1,"resolution",["<each>"]],"<ppi>":[["ppi"],1,"resolution",["<pixel>"],["<inch>"]],"<dpi>":[["dpi"],1,"typography",["<dot>"],["<inch>"]],"<cell>":[["cells","cell"],1,"counting",["<each>"]],"<each>":[["each"],1,"counting",["<each>"]],"<count>":[["count"],1,"counting",["<each>"]],"<base-pair>":[["bp","base-pair"],1,"counting",["<each>"]],"<nucleotide>":[["nt","nucleotide"],1,"counting",["<each>"]],"<molecule>":[["molecule","molecules"],1,"counting",["<1>"]],"<dozen>":[["doz","dz","dozen"],12,"prefix_only",["<each>"]],"<percent>":[["%","percent"],.01,"prefix_only",["<1>"]],"<ppm>":[["ppm"],1e-6,"prefix_only",["<1>"]],"<ppt>":[["ppt"],1e-9,"prefix_only",["<1>"]],"<gross>":[["gr","gross"],144,"prefix_only",["<dozen>","<dozen>"]],"<decibel>":[["dB","decibel","decibels"],1,"logarithmic",["<decibel>"]]},y=["<meter>","<kilogram>","<second>","<mole>","<ampere>","<radian>","<kelvin>","<temp-K>","<byte>","<dollar>","<candela>","<each>","<steradian>","<decibel>"],k=["<1>"];function x(e,t){var n=t[1],o=t[3]||[],m=t[4]||[];if(!r(n))throw new f(e+": Invalid unit definition. 'scalar' must be a number");o.forEach((function(t){if(void 0===w[t])throw new f(e+": Invalid unit definition. Unit "+t+" in 'numerator' is not recognized")})),m.forEach((function(t){if(void 0===w[t])throw new f(e+": Invalid unit definition. Unit "+t+" in 'denominator' is not recognized")}))}var C={},z={},S={},_={},U={};for(var T in w)if(w.hasOwnProperty(T)){var M=w[T];if("prefix"===M[2]){C[T]=M[1];for(var i=0;i<M[0].length;i++)z[M[0][i]]=T}else{x(T,M),S[T]={scalar:M[1],numerator:M[3],denominator:M[4]};for(var K=0;K<M[0].length;K++)_[M[0][K]]=T}U[T]=M[0][0]}var F=["length","time","temperature","mass","current","substance","luminosity","currency","information","angle"];function A(){if(this.signature)return this.signature;for(var e=O.call(this),i=0;i<e.length;i++)e[i]*=Math.pow(20,i);return e.reduce((function(e,t){return e+t}),0)}function O(){if(!this.isBase())return O.call(this.toBase());for(var e,t,r=new Array(F.length),i=0;i<r.length;i++)r[i]=0;for(var n=0;n<this.numerator.length;n++)(e=w[this.numerator[n]])&&(t=F.indexOf(e[2]))>=0&&(r[t]=r[t]+1);for(var o=0;o<this.denominator.length;o++)(e=w[this.denominator[o]])&&(t=F.indexOf(e[2]))>=0&&(r[t]=r[t]-1);return r}var B=new RegExp("^([+-]?\\s*(?:(?:\\d+(?:\\.\\d+)?)|(?:\\.\\d+))(?:[Ee][+-]?\\d+)?)?\\s*([^/]*)(?:/(.+))?$"),R=new RegExp("([^ \\*\\d]+?)(?:\\^|\\*{2})?(-?[01234](?![a-zA-Z]))"),E=new RegExp("([^ \\*\\d]+?)(?:\\^|\\*{2})?([01234](?![a-zA-Z]))");function P(t){e(t)||(t=t.toString()),t=t.trim();var r=B.exec(t);if(!r)throw new f(t+": Quantity not recognized");var n=r[1];n?(n=n.replace(/\s/g,""),this.scalar=parseFloat(n)):this.scalar=1;for(var o,m,c,l=r[2],h=r[3];r=R.exec(l);){if(o=parseFloat(r[2]),isNaN(o))throw new f("Unit exponent is not a number");if(0===o&&!I.test(r[1]))throw new f("Unit not recognized");m=r[1]+" ",c="";for(var i=0;i<Math.abs(o);i++)c+=m;o>=0?l=l.replace(r[0],c):(h=h?h+c:c,l=l.replace(r[0],""))}for(;r=E.exec(h);){if(o=parseFloat(r[2]),isNaN(o))throw new f("Unit exponent is not a number");if(0===o&&!I.test(r[1]))throw new f("Unit not recognized");m=r[1]+" ",c="";for(var d=0;d<o;d++)c+=m;h=h.replace(r[0],c)}l&&(this.numerator=Z(l.trim())),h&&(this.denominator=Z(h.trim()))}var j=Object.keys(z).sort((function(a,b){return b.length-a.length})).join("|"),D=Object.keys(_).sort((function(a,b){return b.length-a.length})).join("|"),H="("+j+")??("+D+")(?:\\b|$)",I=new RegExp("^\\s*("+H+"[\\s\\*]*)+$"),N=new RegExp(H,"g"),V={};function Z(e){var t=V[e];if(t)return t;var r,n=[];if(!I.test(e))throw new f("Unit not recognized");for(;r=N.exec(e);)n.push(r.slice(1));return n=(n=(n=n.map((function(e){return z[e[0]]?[z[e[0]],_[e[1]]]:[_[e[1]]]}))).reduce((function(a,b){return a.concat(b)}),[])).filter((function(e){return e})),V[e]=n,n}function G(e){return e instanceof L}function L(e,t){if(Y.apply(null,arguments),!G(this))return new L(e,t);if(this.scalar=null,this.baseScalar=null,this.signature=null,this._conversionCache={},this.numerator=k,this.denominator=k,J(e)?(this.scalar=e.scalar,this.numerator=e.numerator&&0!==e.numerator.length?e.numerator:k,this.denominator=e.denominator&&0!==e.denominator.length?e.denominator:k):t?(P.call(this,t),this.scalar=e):P.call(this,e),this.denominator.join("*").indexOf("temp")>=0)throw new f("Cannot divide with temperatures");if(this.numerator.join("*").indexOf("temp")>=0){if(this.numerator.length>1)throw new f("Cannot multiply by temperatures");if(!o(this.denominator,k))throw new f("Cannot divide with temperatures")}if(this.initValue=e,W.call(this),this.isTemperature()&&this.baseScalar<0)throw new f("Temperatures must not be less than absolute zero")}function Y(t,n){if(n){if(!r(t)||!e(n))throw new f("Only number accepted as initialization value when units are explicitly provided")}else if(!(e(t)||r(t)||G(t)||J(t)))throw new f("Only string, number or quantity accepted as single initialization value")}function J(e){return e&&"object"==typeof e&&e.hasOwnProperty("scalar")}function W(){if(this.baseScalar)return this.baseScalar;if(this.isBase())this.baseScalar=this.scalar,this.signature=A.call(this);else{var base=this.toBase();this.baseScalar=base.scalar,this.signature=base.signature}}L.prototype={constructor:L};var $={"-312078":"elastance","-312058":"resistance","-312038":"inductance","-152058":"potential","-152040":"magnetism","-152038":"magnetism","-7997":"specific_volume","-79":"snap","-59":"jolt","-39":"acceleration","-38":"radiation","-20":"frequency","-19":"speed","-18":"viscosity","-17":"volumetric_flow","-1":"wavenumber",0:"unitless",1:"length",2:"area",3:"volume",20:"time",400:"temperature",7941:"yank",7942:"power",7959:"pressure",7961:"force",7962:"energy",7979:"viscosity",7981:"momentum",7982:"angular_momentum",7997:"density",7998:"area_density",8e3:"mass",152020:"radiation_exposure",159999:"magnetism",16e4:"current",160020:"charge",312058:"conductance",312078:"capacitance",3199980:"activity",3199997:"molar_concentration",32e5:"substance",63999998:"illuminance",64e6:"luminous_power",128e7:"currency",25599999980:"information_rate",256e8:"information",511999999980:"angular_velocity",512e9:"angle"};function Q(e,t){var r=t.to(X(e.units()));return L({scalar:e.scalar+r.scalar,numerator:e.numerator,denominator:e.denominator})}function X(e){if("tempK"===e)return"degK";if("tempC"===e)return"degC";if("tempF"===e)return"degF";if("tempR"===e)return"degR";throw new f("Unknown type for temp conversion from: "+e)}function ee(e,t){var r,n=function(e){var q,t=e.units();if(t.match(/(deg)[CFRK]/))q=e.baseScalar;else if("tempK"===t)q=e.scalar;else if("tempC"===t)q=e.scalar;else if("tempF"===t)q=5*e.scalar/9;else{if("tempR"!==t)throw new f("Unknown type for temp conversion from: "+t);q=5*e.scalar/9}return L({scalar:q,numerator:["<kelvin>"],denominator:k})}(e),o=t.units();if("degK"===o)r=n.scalar;else if("degC"===o)r=n.scalar;else if("degF"===o)r=9*n.scalar/5;else{if("degR"!==o)throw new f("Unknown type for degree conversion to: "+o);r=9*n.scalar/5}return L({scalar:r,numerator:t.numerator,denominator:t.denominator})}L.prototype.kind=function(){return $[this.signature.toString()]},m(L.prototype,{isDegrees:function(){return(null===this.signature||400===this.signature)&&1===this.numerator.length&&o(this.denominator,k)&&(this.numerator[0].match(/<temp-[CFRK]>/)||this.numerator[0].match(/<(kelvin|celsius|rankine|fahrenheit)>/))},isTemperature:function(){return this.isDegrees()&&this.numerator[0].match(/<temp-[CFRK]>/)}}),m(L.prototype,{to:function(t){var r,n;return null==t?this:e(t)?(r=this._conversionCache[t])?r:(n=L(t)).units()===this.units()?this:(this.isCompatible(n)?n=n.isTemperature()?function(e,t){var r,n=t.units();if("tempK"===n)r=e.baseScalar;else if("tempC"===n)r=e.baseScalar-273.15;else if("tempF"===n)r=9*e.baseScalar/5-459.67;else{if("tempR"!==n)throw new f("Unknown type for temp conversion to: "+n);r=9*e.baseScalar/5}return L({scalar:r,numerator:t.numerator,denominator:t.denominator})}(this,n):n.isDegrees()?ee(this,n):L({scalar:l(this.baseScalar,n.baseScalar),numerator:n.numerator,denominator:n.denominator}):this.isInverse(n)?n=this.inverse().to(t):v(this.units(),n.units()),this._conversionCache[t]=n,n):this.to(t.units())},toBase:function(){if(this.isBase())return this;if(this.isTemperature())return function(e){var q,t=e.units();if(t.match(/(deg)[CFRK]/))q=e.baseScalar;else if("tempK"===t)q=e.scalar;else if("tempC"===t)q=e.scalar+273.15;else if("tempF"===t)q=5*(e.scalar+459.67)/9;else{if("tempR"!==t)throw new f("Unknown type for temp conversion from: "+t);q=5*e.scalar/9}return L({scalar:q,numerator:["<temp-K>"],denominator:k})}(this);var e=te[this.units()];return e||(e=function(e,t){for(var r,n=[],o=[],q=1,i=0;i<e.length;i++)r=e[i],C[r]?q=c(q,C[r]):S[r]&&(q*=S[r].scalar,S[r].numerator&&n.push(S[r].numerator),S[r].denominator&&o.push(S[r].denominator));for(var m=0;m<t.length;m++)r=t[m],C[r]?q/=C[r]:S[r]&&(q/=S[r].scalar,S[r].numerator&&o.push(S[r].numerator),S[r].denominator&&n.push(S[r].denominator));return n=n.reduce((function(a,b){return a.concat(b)}),[]),o=o.reduce((function(a,b){return a.concat(b)}),[]),L({scalar:q,numerator:n,denominator:o})}(this.numerator,this.denominator),te[this.units()]=e),e.mul(this.scalar)},toFloat:function(){if(this.isUnitless())return this.scalar;throw new f("Can't convert to Float unless unitless.  Use Unit#scalar")},toPrec:function(t){if(e(t)&&(t=L(t)),r(t)&&(t=L(t+" "+this.units())),this.isUnitless()?t.isUnitless()||v(this.units(),t.units()):t=t.to(this.units()),0===t.scalar)throw new f("Divide by zero");return L(c(Math.round(this.scalar/t.scalar),t.scalar)+this.units())}});var te={};function re(e,t,r,n){function o(e){return"<1>"!==e}e=e.filter(o),r=r.filter(o),t=t.filter(o),n=n.filter(o);var m={};function c(e,t){for(var r,n,o,i=0;i<e.length;i++)if(C[e[i]]?(r=e[i+1],n=e[i],o=C[n],i++):(r=e[i],n=null,o=1),r&&"<1>"!==r)if(m[r]){m[r][0]+=t;var c=m[r][2]?C[m[r][2]]:1;m[r][1===t?3:4]*=l(o,c)}else m[r]=[t,r,n,1,1]}c(e,1),c(t,-1),c(r,1),c(n,-1);var h=[],d=[],f=1;for(var v in m)if(m.hasOwnProperty(v)){var w,y=m[v];if(y[0]>0)for(w=0;w<y[0];w++)h.push(null===y[2]?y[1]:[y[2],y[1]]);else if(y[0]<0)for(w=0;w<-y[0];w++)d.push(null===y[2]?y[1]:[y[2],y[1]]);f*=l(y[3],y[4])}return 0===h.length&&(h=k),0===d.length&&(d=k),[h=h.reduce((function(a,b){return a.concat(b)}),[]),d=d.reduce((function(a,b){return a.concat(b)}),[]),f]}function ne(){}L.parse=function(t){if(!e(t))throw new f("Argument should be a string");try{return this(t)}catch(e){return null}},L.getUnits=function(e){var i,t=[],r=Object.keys(w);if(void 0===e)for(i=0;i<r.length;i++)-1===["","prefix"].indexOf(w[r[i]][2])&&t.push(r[i].substr(1,r[i].length-2));else{if(-1===this.getKinds().indexOf(e))throw new f("Kind not recognized");for(i=0;i<r.length;i++)w[r[i]][2]===e&&t.push(r[i].substr(1,r[i].length-2))}return t.sort((function(a,b){return a.toLowerCase()<b.toLowerCase()?-1:a.toLowerCase()>b.toLowerCase()?1:0}))},L.getAliases=function(e){if(!_[e])throw new f("Unit not recognized");return w[_[e]][0]},L.mulSafe=c,L.divSafe=l,L.getKinds=function(){return e=Object.keys($).map((function(e){return $[e]})),t={},e.filter((function(e){return!t.hasOwnProperty(e)&&(t[e]=!0)}));var e,t},L.swiftConverter=function(e,t){var r,o=L(e),m=L(t);return o.eq(m)?n:(r=o.isTemperature()?function(e){return o.mul(e).to(m).scalar}:function(e){return e*o.baseScalar/m.baseScalar},function(e){var i,t,n;if(Array.isArray(e)){for(t=e.length,n=[],i=0;i<t;i++)n.push(r(e[i]));return n}return r(e)})},L.Error=f,m(L.prototype,{add:function(t){if(e(t)&&(t=L(t)),this.isCompatible(t)||v(this.units(),t.units()),this.isTemperature()&&t.isTemperature())throw new f("Cannot add two temperatures");return this.isTemperature()?Q(this,t):t.isTemperature()?Q(t,this):L({scalar:this.scalar+t.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},sub:function(t){if(e(t)&&(t=L(t)),this.isCompatible(t)||v(this.units(),t.units()),this.isTemperature()&&t.isTemperature())return m=t,c=(o=this).units(),l=m.to(c),h=L(X(c)),L({scalar:o.scalar-l.scalar,numerator:h.numerator,denominator:h.denominator});if(this.isTemperature())return r=this,n=t.to(X(r.units())),L({scalar:r.scalar-n.scalar,numerator:r.numerator,denominator:r.denominator});if(t.isTemperature())throw new f("Cannot subtract a temperature from a differential degree unit");var r,n,o,m,c,l,h;return L({scalar:this.scalar-t.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},mul:function(t){if(r(t))return L({scalar:c(this.scalar,t),numerator:this.numerator,denominator:this.denominator});if(e(t)&&(t=L(t)),(this.isTemperature()||t.isTemperature())&&!this.isUnitless()&&!t.isUnitless())throw new f("Cannot multiply by temperatures");var n=t;this.isCompatible(n)&&400!==this.signature&&(n=n.to(this));var o=re(this.numerator,this.denominator,n.numerator,n.denominator);return L({scalar:c(this.scalar,n.scalar,o[2]),numerator:o[0],denominator:o[1]})},div:function(t){if(r(t)){if(0===t)throw new f("Divide by zero");return L({scalar:this.scalar/t,numerator:this.numerator,denominator:this.denominator})}if(e(t)&&(t=L(t)),0===t.scalar)throw new f("Divide by zero");if(t.isTemperature())throw new f("Cannot divide with temperatures");if(this.isTemperature()&&!t.isUnitless())throw new f("Cannot divide with temperatures");var n=t;this.isCompatible(n)&&400!==this.signature&&(n=n.to(this));var o=re(this.numerator,this.denominator,n.denominator,n.numerator);return L({scalar:c(this.scalar,o[2])/n.scalar,numerator:o[0],denominator:o[1]})},inverse:function(){if(this.isTemperature())throw new f("Cannot divide with temperatures");if(0===this.scalar)throw new f("Divide by zero");return L({scalar:1/this.scalar,numerator:this.denominator,denominator:this.numerator})}}),m(L.prototype,{eq:function(e){return 0===this.compareTo(e)},lt:function(e){return-1===this.compareTo(e)},lte:function(e){return this.eq(e)||this.lt(e)},gt:function(e){return 1===this.compareTo(e)},gte:function(e){return this.eq(e)||this.gt(e)},compareTo:function(t){return e(t)?this.compareTo(L(t)):(this.isCompatible(t)||v(this.units(),t.units()),this.baseScalar<t.baseScalar?-1:this.baseScalar===t.baseScalar?0:this.baseScalar>t.baseScalar?1:void 0)},same:function(e){return this.scalar===e.scalar&&this.units()===e.units()}}),m(L.prototype,{isUnitless:function(){return[this.numerator,this.denominator].every((function(e){return o(e,k)}))},isCompatible:function(t){return e(t)?this.isCompatible(L(t)):!!G(t)&&void 0!==t.signature&&this.signature===t.signature},isInverse:function(e){return this.inverse().isCompatible(e)},isBase:function(){return void 0!==this._isBase?this._isBase:this.isDegrees()&&this.numerator[0].match(/<(kelvin|temp-K)>/)?(this._isBase=!0,this._isBase):(this.numerator.concat(this.denominator).forEach((function(e){"<1>"!==e&&-1===y.indexOf(e)&&(this._isBase=!1)}),this),!1===this._isBase||(this._isBase=!0),this._isBase)}}),ne.prototype.get=function(e){return arguments.length>1&&(e=Array.apply(null,arguments)),e.reduce((function(map,t,r){if(map){var n=map[t];return r===e.length-1?n?n.data:void 0:n}}),this)},ne.prototype.set=function(e,t){return arguments.length>2&&(e=Array.prototype.slice.call(arguments,0,-1),t=arguments[arguments.length-1]),e.reduce((function(map,r,n){var o=map[r];return void 0===o&&(o=map[r]={}),n===e.length-1?(o.data=t,t):o}),this)},L.formatter=function(e,t){return(e+" "+t).trim()},m(L.prototype,{units:function(){if(void 0!==this._units)return this._units;var e=o(this.numerator,k),t=o(this.denominator,k);if(e&&t)return this._units="",this._units;var r=ae(this.numerator),n=ae(this.denominator);return this._units=r+(t?"":"/"+n),this._units},toString:function(t,n){var o;if(r(t))o=this.units(),n=t;else if(e(t))o=t;else if(G(t))return this.toPrec(t).toString(n);var m=this.to(o);return m=((void 0!==n?h(m.scalar,n):m.scalar)+" "+m.units()).trim()},format:function(e,t){1===arguments.length&&"function"==typeof e&&(t=e,e=void 0),t=t||L.formatter;var r=this.to(e);return t.call(this,r.scalar,r.units())}});var ie=new ne;function ae(e){var t=ie.get(e);return t||(t=o(e,k)?"1":function(e){return e.reduce((function(e,t){var r=e[t];return r||e.push(r=e[t]=[t,0]),r[1]++,e}),[]).map((function(e){return e[0]+(e[1]>1?e[1]:"")}))}(function(e){for(var t,r,n=[],i=0;i<e.length;i++)t=e[i],r=e[i+1],C[t]?(n.push(U[t]+U[r]),i++):n.push(U[t]);return n}(e)).join("*"),ie.set(e,t),t)}return L.version="1.7.5",L}()}}]);