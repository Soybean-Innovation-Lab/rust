(this.webpackJsonprust=this.webpackJsonprust||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(12),i=s(3),c=s(10),o=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))},l=s(14),d=s(4),u={growthStageOptions:["Early vegetative","Late vegetative (pod-filling) R1-R6","Beginning maturity"],rustPresenceOptions:["No rust present in field","No rust present in field but spotted within 100km","<10% disease observed on lower canopy and nowhere else on the plant","<20% disease observed on the lower canopy and <10% disease in mid-canopy",">10% disease observed in mid-canopy and anywhere in the upper canopy"],country:void 0,state:void 0,variety:void 0,growthStageSelection:0,rustPresenceSelection:0},h="sprayGate/setRustPresenceSelection",b="sprayGate/setGrowthStageSelection",j="sprayGate/setCountry",p="sprayGate/setState",m="sprayGate/setVariety";function f(e){return{type:h,value:e}}function O(e){return{type:b,value:e}}var g=function(e){return e.sprayGate.growthStageOptions},v=function(e){return e.sprayGate.growthStageSelection},y=function(e){return e.sprayGate.rustPresenceOptions},x=function(e){return e.sprayGate.rustPresenceSelection},w=function(e){return e.sprayGate.country},S=function(e){return e.sprayGate.state},N=function(e){return e.sprayGate.variety},_=function(e,t,s){var n,a;if("Susceptible"===s)switch(e){case u.growthStageOptions[0]:switch(t){case u.rustPresenceOptions[0]:case u.rustPresenceOptions[1]:n=!1;break;case u.rustPresenceOptions[2]:case u.rustPresenceOptions[3]:case u.rustPresenceOptions[4]:n=!1}break;case u.growthStageOptions[1]:switch(t){case u.rustPresenceOptions[0]:case u.rustPresenceOptions[1]:n=!1;break;case u.rustPresenceOptions[2]:case u.rustPresenceOptions[3]:n=!0,a="Spraying a fungicide may suppress the rust outbreak and significantly preserve yields";break;case u.rustPresenceOptions[4]:n=!1}break;case u.growthStageOptions[0]:n=!1}else"Unknown"===s?(n=!1,a="There is no data about this variety/location"):(n=!1,a="There is no evidence applying fungicides to a resistant cultivar is an economically viable option.");return{shouldSpray:n,why:a}};var R=s(0),T=function(e){var t=e.name,s=e.valSelector,a=e.optionsSelector,r=e.action,c=e.className,o=Object(i.b)(),l=Object(i.c)(s),d=Object(i.c)(a),u=void 0;return l&&d.includes(l)||!(d.length>0)||(u=d[0]),Object(n.useEffect)((function(){u&&o(r(u))}),[u]),Object(R.jsx)("select",{name:t,className:"form-select ".concat(c),onChange:function(e){return o(r(e.target.value))},value:l,children:d.map((function(e){return Object(R.jsxs)("option",{value:e,children:[" ",e," "]},e)}))})},k=function(){var e=Object(i.c)(x),t=Object(i.c)(v),s=_(t,e,"Susceptible");return Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 mx-auto my-5",style:{width:"max-content"},children:[Object(R.jsxs)("h2",{className:"text-center",children:["You should ",!s.shouldSpray&&"not"," spray"]}),Object(R.jsx)("p",{className:"text-center",children:s.why})]}),Object(R.jsx)("p",{children:"Please keep in mind that spraying, as well as the number of times you spray, is dependent on conducive conditions for the disease. These recommendations are given based on the assumption of continued conducive environments and disease progression."})]})},L=function(){return Object(R.jsx)("div",{className:"mb-3",children:Object(R.jsxs)("div",{className:"border border-3 shadow shadow-4 p-3",children:[Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("label",{className:"col-md my-auto",htmlFor:"growthStage",children:" Growth Stage: "}),Object(R.jsx)(T,{className:"col-md",name:"growthStage",valSelector:v,optionsSelector:g,action:O})]}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("label",{className:"col-md my-auto",htmlFor:"rustPresence",children:" Rust Pressure: "}),Object(R.jsx)(T,{className:"col-md",name:"rustPresence",valSelector:x,optionsSelector:y,action:f})]})]})})},P=s(20),F=function(e){var t=e.name,s=e.state,a=e.set,r=e.units,c=e.formatter,o=e.children,l=e.labelClassNames,d=e.inputClassNames,u=e.spanClassNames,h=Object(i.b)(),b=Object(n.useState)(s),j=Object(P.a)(b,2),p=j[0],m=j[1],f=Object(n.useState)(!1),O=Object(P.a)(f,2),g=O[0],v=O[1];return Object(n.useEffect)((function(){var e=Number.parseFloat(p);!isNaN(e)&&e&&e!==s&&h(a(e))}),[h,s,a,p]),c||(c=function(e){return e}),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("label",{className:l,htmlFor:t,children:[" ",o," "]}),Object(R.jsxs)("div",{style:{whiteSpace:"nowrap"},className:d,children:[Object(R.jsx)("input",{style:{width:"5rem"},name:t,value:g?p:c(p),onBlur:function(e){return v(!1)},onFocus:function(e){return v(!0)},onChange:function(e){return m(e.target.value)}}),Object(R.jsxs)("span",{className:u,children:[" ",r," "]})]})]})},C=s(23),I={costOfFungicide:24.7,costOfLabor:29.64,plotSize:5,priceOfGrain:400},G="roi/setCostOfFungicide",E="roi/setCostOfLabor",$="roi/setPlotSize",q="roi/setPriceOfGrain";function Y(e){return{type:G,value:e}}function z(e){return{type:E,value:e}}function D(e){return{type:q,value:e}}var M=function(e){return e.roi.costOfFungicide},V=function(e){return e.roi.costOfLabor},B=function(e){return e.roi.plotSize},U=function(e){return e.roi.priceOfGrain},X=function(e){for(var t=U(e),s=B(e),n=M(e),a=V(e),r=[],i=0,c=[{growthStage:"R1-R2",sprays:1,avgYield:.4845},{growthStage:"R1-R2",sprays:2,avgYield:.9785},{growthStage:"R1-R2",sprays:3,avgYield:1.508},{growthStage:"R3-R4",sprays:1,avgYield:.717},{growthStage:"R3-R4",sprays:2,avgYield:1.164},{growthStage:"R5-R6",sprays:1,avgYield:.7715}];i<c.length;i++){var o=c[i],l=o.avgYield*t,d=l-o.sprays*(a+n);r.push(Object(C.a)({incRev:l,incRevTotal:o.avgYield*t*s,revCosts:d,returnOnIn:d/(n*o.sprays)},o))}return r};var A=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(R.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(R.jsx)("h1",{children:" What is the economic gain of spraying fungicide?"}),Object(R.jsxs)("p",{className:"fs-3",children:["Even when there is a yield preservation potential by fungicide application, the cost of spraying and the return on the fungicide investment in terms of yield preservation still needs to be evaluated to determine if spraying is an economically viable option. In the next screen, please enter in the cost of fungicide per application per hectare, plot size in hectares, the price of grain, and the cost of labor per hectare and spray. Please use ",Object(R.jsx)("a",{href:"https://www.xe.com/currencyconverter/",target:"_blank",children:"this currency converter "}),"to convert local currency to US Dollars ($) "]})]})},H=function(){Object(i.b)();var e=Object(i.c)(M),t=Object(i.c)(B),s=Object(i.c)(U),n=Object(i.c)(V),a=Object(i.c)(X);return Object(R.jsxs)("div",{children:[Object(R.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(R.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(R.jsx)("h1",{children:" Return on Investment "}),Object(R.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 px-5 mx-auto",style:{width:"max-content"},children:[Object(R.jsx)("div",{className:"row my-1",children:Object(R.jsx)(F,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfFungicide",state:e,set:Y,units:"/ha",formatter:function(e){return"$".concat(e)},children:"Cost of Fungicide"})}),Object(R.jsx)("div",{className:"row my-1",children:Object(R.jsx)(F,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"plotSize",state:t,set:t,units:"ha",children:"Plot Size"})}),Object(R.jsx)("div",{className:"row my-1",children:Object(R.jsx)(F,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"priceOfGrain",state:s,set:D,units:"/MT",formatter:function(e){return"$".concat(e)},children:"Price of Grain"})}),Object(R.jsx)("div",{className:"row my-1",children:Object(R.jsx)(F,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfLabor",state:n,set:z,units:"/spray/ha",formatter:function(e){return"$".concat(e)},children:"Cost of Labor"})})]}),Object(R.jsxs)("table",{className:"table border border-3 my-3 mx-auto",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"Growth Stage"}),Object(R.jsx)("th",{children:"Number of Sprays"}),Object(R.jsx)("th",{children:"Fungicide per Hectare"}),Object(R.jsx)("th",{children:"Labor per Hectare"}),Object(R.jsx)("th",{children:"Fungicide Total"}),Object(R.jsx)("th",{children:"Labor Total"}),Object(R.jsx)("th",{children:"Combined Total"}),Object(R.jsx)("th",{children:"Preserved Yield (MT/ha)"}),Object(R.jsx)("th",{children:"Total Revenue"}),Object(R.jsx)("th",{children:"Net Margin/Revenue Costs"}),Object(R.jsx)("th",{children:"Return on inputs"})]})}),Object(R.jsx)("tbody",{children:a.map((function(s){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{children:s.growthStage}),Object(R.jsx)("td",{children:s.sprays}),Object(R.jsxs)("td",{children:["$",(s.sprays*e).toFixed(2)]}),Object(R.jsxs)("td",{children:["$",(s.sprays*n).toFixed(2)]}),Object(R.jsxs)("td",{children:["$",(s.sprays*e*t).toFixed(2)]}),Object(R.jsxs)("td",{children:["$",(s.sprays*n*t).toFixed(2)]}),Object(R.jsxs)("td",{children:["$",(s.sprays*n*t+s.sprays*e*t).toFixed(2)]}),Object(R.jsx)("td",{children:s.avgYield.toFixed(2)}),Object(R.jsxs)("td",{children:["$",s.incRevTotal.toFixed(2)]}),Object(R.jsxs)("td",{children:["$",(s.incRevTotal-(s.sprays*n*t+s.sprays*e*t)).toFixed(2)]}),Object(R.jsxs)("td",{children:["$",((s.incRevTotal-(s.sprays*n*t+s.sprays*e*t))/(s.sprays*n*t+s.sprays*e*t)).toFixed(2)]})]})}))})]}),Object(R.jsxs)("div",{className:"border border-3 shadow shadow-3 my-3 p-3",children:[Object(R.jsx)("h3",{children:" Definitions "}),Object(R.jsxs)("dl",{className:"row",children:[Object(R.jsx)("dt",{className:"col-sm-3",children:"Average yield increases"}),Object(R.jsx)("dd",{className:"col-sm-9",children:"based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. "}),Object(R.jsx)("dt",{className:"col-sm-3",children:"Increase in revenue/ha"}),Object(R.jsx)("dd",{className:"col-sm-9",children:"based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) "}),Object(R.jsx)("dt",{className:"col-sm-3",children:"Gross margins/ha"}),Object(R.jsx)("dd",{className:"col-sm-9",children:"calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha."}),Object(R.jsx)("dt",{className:"col-sm-3",children:"Net margin"}),Object(R.jsx)("dd",{className:"col-sm-9",children:"Total revenue \u2013 Total cost"}),Object(R.jsx)("dt",{className:"col-sm-3",children:"Return of inputs (ROI)"}),Object(R.jsx)("dd",{className:"col-sm-9",children:"How much net income (return) do I get per dollar of expense (fungicide + labor) "})]})]})]})},J="data/setData",W="data/setError",K={loading:!0,errorOccured:!1};var Q=function(e){return e.data.error},Z=function(e){return e.data.errorOccured},ee=function(e){return e.data.loading};var te=function(e){var t=e.leftLink,s=e.leftText,n=e.rightLink,a=e.rightText,r=e.rightClassName;return Object(R.jsxs)("div",{className:"d-flex w-100 flex-direction-row justify-content-between mb-3",children:[Object(R.jsxs)(l.b,{className:"px-3 btn btn-lg btn-primary ".concat(t?"visible":"invisible"),to:t||"",children:[Object(R.jsx)("i",{className:"bi bi-arrow-left",style:{fontSize:"1.5rem"}})," ",s," "]}),Object(R.jsxs)(l.b,{className:"px-3 btn btn-lg btn-primary ".concat(n?"visible":"invisible"," ").concat(r),to:n||"",children:[a," ",Object(R.jsx)("i",{className:"bi bi-arrow-right",style:{fontSize:"1.5rem"}})]})]})},se=function(){var e=Object(i.b)(),t=Object(i.c)(Z),s=Object(i.c)(Q),a=Object(i.c)(ee),r=Object(i.c)(x),c=Object(i.c)(v),o=(Object(i.c)(w),Object(i.c)(S),Object(i.c)(N),_(c,r,"Susceptible")),u="".concat("/rust-spray-guide/dev","/data.json");return Object(n.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:J,value:e}}(t))})).catch((function(t){console.error(t),e(function(e){return{type:W,value:e}}(t))}))}),[e,u]),a?Object(R.jsx)("div",{className:"spinner-border",role:"status",children:Object(R.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):t?Object(R.jsxs)("pre",{children:[" Error: ",JSON.stringify(s)," "]}):Object(R.jsx)(l.a,{children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)(d.c,{children:[Object(R.jsxs)(d.a,{path:"/roi",children:[Object(R.jsx)(H,{}),Object(R.jsx)(te,{leftText:"ROI Info",leftLink:"/roi-info"})]}),Object(R.jsxs)(d.a,{path:"/roi-info",children:[Object(R.jsx)(A,{}),Object(R.jsx)(te,{rightLink:"/roi",rightText:"ROI",leftText:"Spray Results",leftLink:"/spray-results"})]}),Object(R.jsxs)(d.a,{path:"/spray-results",children:[Object(R.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(R.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(R.jsx)("h1",{children:" Should I Spray? \u2014 Results"}),Object(R.jsx)(k,{}),Object(R.jsx)(te,{rightLink:"/roi-info",rightText:"ROI Info",rightClassName:o.shouldSpray?"":"disabled",leftText:"Spray Info",leftLink:"/spray-gate"})]}),Object(R.jsxs)(d.a,{path:"/spray-gate",children:[Object(R.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(R.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(R.jsx)("h1",{children:" Should I Spray? "}),Object(R.jsx)("p",{children:" Deciding to spray fungicides to control rust is dependent on several factors including age of the plant, susceptibility to rust, presence of rust in the field, and conducive environment. Below please enter the current growth stage of your crop and current rust pressure. This information will allow us to determine whether you need to spray or not."}),Object(R.jsxs)("p",{children:[" If you have any question, please contact us at ",Object(R.jsx)("a",{href:"mailto:soybeaninnovationlab@illinois.edu",children:"soybeaninnovationlab@illinois.edu"})]}),Object(R.jsx)(L,{}),Object(R.jsx)(te,{rightLink:"/spray-results",rightText:"Spray Results",leftText:"Welcome",leftLink:"/"})]}),Object(R.jsxs)(d.a,{path:"/",children:[Object(R.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(R.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(R.jsx)("h1",{children:" Rust Spray Calculator"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("a",{target:"_blank",href:"https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_e31432ab4564440d86637434fe1dd580.pdf",children:"Soybean rust"}),"\xa0 is a foliar disease that can have devastating impacts on soybean production causing up to 80% reductions in yield in conducive environments. The impact of this disease is highly reliant on conducive environments. Prolonged periods of relative humidity and warmer temperatures are ideal for soybean rust. Resistant varieties are recommended to control soybean rust, but when resistant varieties are not available applying fungicides may be an effective control method."]}),Object(R.jsx)("p",{children:"The Rust Spray Calculator was designed to aid in environmentally responsible and economically feasible decision making and gives you a concise decision on whether to spray fungicides to control rust outbreaks. First the calculator determines if you should consider spraying based on maturity of your crop, susceptibility, and rust presence and then determines the economic gain you will achieve by considering the cost of fungicide application and price of grain."}),Object(R.jsx)("h2",{children:"Fungicide Safety"}),Object(R.jsxs)("p",{children:["There are environmental and human health hazards when spraying fungicides. Please take our ",Object(R.jsx)("a",{href:"https://soybeaninnovationlab.getlearnworlds.com/course?courseid=ipm",target:"_blank",children:"SIL-U"})," course on pesticide safety before applying fungicides to your fields (a free account is required to access the course).  "]}),Object(R.jsxs)("p",{children:[Object(R.jsx)("h2",{children:"Avoiding Fungicide Resistance"})," Misuse, including overuse, of fungicides can result in the pathogen that causes soybean rust developing resistance to fungicides. To avoid fungicide resistance, only spray when necessary, follow the label instruction for that fungicide, and use several modes of action. A mixture of strobilurins and triazoles is recommended for effective rust control. Please consult your extension agent on what products are registered in your area."]}),Object(R.jsx)(te,{rightLink:"/spray-gate",rightText:"Spray Gate"})]})]})})})},ne=Object(c.b)({sprayGate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:e.rustPresenceSelection=t.value;break;case b:e.growthStageSelection=t.value;break;case j:e.country!==t.value&&(e.state=void 0),e.country=t.value;break;case p:e.state!==t.value&&(e.variety=void 0),e.state=t.value;break;case m:e.variety=t.value}return e},roi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:e.costOfLabor=t.value;break;case $:e.plotSize=t.value;break;case q:e.priceOfGrain=t.value;break;case G:e.costOfFungicide=t.value}return e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:e.data=t.value,e.loading=!1;break;case W:e.errorOccured=!0,e.error=t.value,e.loading=!1}return e}}),ae=(s(34),Object(c.c)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(r.render)(Object(R.jsx)(i.a,{store:ae,children:Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(se,{})})}),document.getElementById("root")),o()}},[[35,1,2]]]);
//# sourceMappingURL=main.9da4e899.chunk.js.map