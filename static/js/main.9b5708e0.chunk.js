(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),i=n.n(c),o=(n(176),n(257)),s=n(15),l=n(259),u=n.p+"static/media/logo.6ce24c58.svg",j=(n(177),n(2));var d=function(e){var t=e.open;return Object(j.jsx)(l.a,{open:t,children:Object(j.jsx)("img",{src:u,className:"App-logo",alt:"logo"})})},b=n(20),h=n(256),p=n(261),O=n(262),f=n(263),x=n(203),v=n(204),m=n(40),g="[UI] Set Loader",y="[UI] Toggle Dark Mode",C=function(e){return{type:g,payload:{loading:e}}},T=n(146),I=n.n(T),N=n(7),S=n(76),A=n(149),E=n(62),w=n(145),R=n.n(w),L={CONTINENTS:["Africa","America","Asia","Europa","Oceania"],API_END_POINTS:{ALL:{URL:"https://restcountries.eu/rest/v2/all"},GET_URL:function(e){return{URL:"https://restcountries.eu/rest/v2/region/".concat(e.toLowerCase())}}},ROUTES:{LOGIN:"/",SELECT_CONTINENTS:"/selectContinents",COUNTRIES_LIST:"/countriesList",TRIVIA:"/trivia"}},k=function(){var e=Object(s.f)(),t=Object(a.useState)(null),n=Object(N.a)(t,2),r=n[0],c=n[1],i=L.ROUTES,o=function(){c(null)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){return c(e.currentTarget)},children:Object(j.jsx)(R.a,{})}),Object(j.jsxs)(A.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:o,children:[Object(j.jsx)(E.a,{onClick:function(){e.push(i.LOGIN),o()},children:"Cambiar Nombre"}),Object(j.jsx)(E.a,{onClick:function(){e.push(i.SELECT_CONTINENTS),o()},children:"Seleccionar Continentes"}),Object(j.jsx)(E.a,{onClick:function(){e.push(i.COUNTRIES_LIST),o()},children:"Lista de Paises"}),Object(j.jsx)(E.a,{onClick:function(){e.push(i.TRIVIA),o()},children:"Trivia"})]})]})},U=Object(m.a)((function(e){return{flexContainer:{display:"flex",justifyContent:"space-between"}}}));function _(){var e=Object(b.c)((function(e){return e.ui})).darkMode,t=Object(b.b)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x.a,{control:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I.a,{}),Object(j.jsx)(v.a,{checked:e,onChange:function(e){return t({type:y})}})]}),labelPlacement:"start"})})}var P=function(){var e=U();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{p:"0",children:Object(j.jsx)(p.a,{position:"static",m:0,p:0,children:Object(j.jsxs)(O.a,{m:0,p:0,className:e.flexContainer,children:[Object(j.jsx)(k,{}),Object(j.jsx)(f.a,{fontWeight:770,fontSize:30,noWrap:!0,component:"div",children:"Countries Trivia"}),Object(j.jsx)(_,{})]})})})})};var F=function(e){var t=e.children,n=Object(b.c)((function(e){return e.ui})).loader;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{}),n?Object(j.jsx)(d,{open:!0}):t]})},V=n(147),D=n(114),M=n(68),G=Object(m.a)({buttonContainer:{width:"100%",heigh:"15vh",display:"flex",justifyContent:"center",alignContent:"center"},button:{width:"60%"}});var W=function(e){var t=e.textValue,n=e.handler,a=(e.width,G());return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{className:a.buttonContainer,children:Object(j.jsx)(M.a,{onClick:function(e){return n(e)},className:a.button,variant:"contained",children:Object(j.jsx)(f.a,{fontWeight:"700",children:t})})})})},H=[{field:"id",headerName:"ID",width:70},{field:"flag",headerName:"Bandera",width:120,renderCell:function(e){var t=e.value;return Object(j.jsx)("img",{src:t,width:"60px",alt:"flag"})}},{field:"nombre",headerName:"Pais",width:150},{field:"capital",headerName:"Capital",width:150},{field:"region",headerName:"Continentes",width:130}];var B=function(){var e=Object(b.c)((function(e){return e.countries})).countriesList.map((function(e,t){return Object(V.a)({id:t,nombre:e.translations.es,flag2:Object(j.jsx)("img",{src:e.flag,alt:"".concat(e.name," flag")})},e)})),t=Object(s.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{style:{height:"80vh",width:"100%"},children:[Object(j.jsx)(D.a,{rows:e,columns:H,pageSize:15,checkboxSelection:!0,components:{Toolbar:D.b}}),Object(j.jsx)(W,{textValue:"Generar Trivia",handler:function(){return t.push(L.ROUTES.TRIVIA)}})]})})},J="[USER] Change name",Q="[USER] Submit name",z=n(139),q=n(156),K=n(155);var X=function(e){var t=e.handler,n=e.value,a=e.label;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(K.a,{variant:"filled",label:a,id:"input-with-icon-adornment",onChange:function(e){return t(e)},value:n})})},Y=Object(m.a)({flexContainer:{margin:"7.5vh auto",padding:"15vw`",width:"clamp(300px, 30vw, 500px)",height:"clamp(400px, 60vh, 700px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"6vh"}});var Z=Object(z.a)((function(e){var t=e.title,n=(e.value,e.onChangeHandler),a=e.onClickHandler,r=e.theme,c=Y();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(q.a,{variant:"elevation",elevation:5,className:c.flexContainer,style:{backgroundColor:r.palette.primary.due},children:[t&&Object(j.jsx)(f.a,{variant:"h5",fontWeight:"790",children:t}),Object(j.jsx)(X,{handler:n,label:"Nombre de Usuario"}),Object(j.jsx)(W,{textValue:"Aceptar",handler:a})]})})}));var $=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.user})).name,n=Object(s.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Z,{title:"Ingresar",value:t,onChangeHandler:function(t){e(function(e){return{type:J,payload:{name:e}}}(t.target.value))},onClickHandler:function(t){e(function(e){return{type:Q,payload:{history:e}}}(n))}})})},ee="API_REQUEST",te="API_SUCCESS",ne="API_ERROR",ae=function(e,t){return{type:"[".concat(t.toUpperCase(),"] ").concat("API_SUCCESS"),payload:{data:e,meta:{entity:t}}}},re=function(e,t){return{type:"[".concat(t.toUpperCase(),"] ").concat("API_ERROR"),payload:{meta:{entity:t},data:e}}};function ce(e,t){var n=Math.floor(Math.random()*e);return t.includes(n)?ce(e,t):n}var ie="[TRIVIA] Generates Random Question",oe="[TRIVIA] Verify Answer",se="[TRIVIA] Reveals answer",le="[TRIVIA] correct Answer",ue="[TRIVIA] incorrect Answer",je="[TRIVIA] onChange answer",de="[TRIVIA] restart control array";function be(e,t){var n=ce(t.length,e),a=t[n];return{type:ie,payload:{index:n,selectedCountry:a}}}function he(e,t,n){var a,r=[];t.length===L.CONTINENTS?r=["all"]:a=t.map((function(e){var t;switch(e.toLowerCase()){case"africa":t="africa";break;case"america":t="americas";break;case"asia":t="asia";break;case"europa":t="europe";break;case"oceania":t="oceania"}return t})),e({type:de,payload:{}}),(r=function(e){var t=[];t=e.length===L.CONTINENTS.length?[L.API_END_POINTS.ALL.URL]:e.map((function(e){return L.API_END_POINTS.GET_URL(e).URL}));return t}(a)).length>0&&e(function(e,t,n,a,r){return{type:"[".concat(a.toUpperCase(),"] ").concat("API_REQUEST"),payload:{meta:{urls:e,method:t,entity:a,history:r},data:n}}}(r,"get",{},"countries",n))}var pe=n(154),Oe="[COUNTRIES] Toggle Continent Selection",fe="[COUNTRIES] Toggle All Continents";var xe=Object(z.a)((function(e){var t=e.theme,n=e.value,a=Object(m.a)({root:{display:"flex",justifyContent:"center"},item:{width:"clamp(120px, 25vw, 300px)"}}),r=Object(b.c)((function(e){return e.continents})).continentsList,c=L.CONTINENTS.includes(n)?r.includes(n):r.length===L.CONTINENTS.length,i=Object(b.b)(),o=function(e){L.CONTINENTS.includes(n)?i({type:Oe,payload:{continent:n}}):"todos"===n.toLowerCase()&&i(function(e){return{type:fe,payload:{continentsList:e}}}(r))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x.a,{className:a().root,control:Object(j.jsxs)(q.a,{className:a().item,variant:"elevation",elevation:3,style:{backgroundColor:t.palette.primary.main,display:"flex",flexDirection:"column"},children:[Object(j.jsx)(f.a,{align:"center",noWrap:!0,component:"div",style:{color:t.palette.text.primary},children:n}),Object(j.jsx)(pe.a,{checked:c,onChange:function(e){return o()}})]})})})}));var ve=function(){var e=L.CONTINENTS;return Object(a.useEffect)((function(){return function(){}}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",margin:"0 auto",gap:"3.5vw"},children:e.concat(["Todos"]).map((function(e){return Object(j.jsx)(xe,{value:e},e)}))})})},me=Object(m.a)({buttonContainer:{width:"100%",heigth:" 15vh",display:"flex",justifyContent:"center",alignContent:"center"},flexContainer:{width:"100vw",margin:"10vh 0 10vh 5px",display:"flex",flexDirection:"column",alignItems:"center",gap:"5vw"}});var ge=function(){var e=me(),t=Object(s.f)(),n=Object(b.c)((function(e){return e.user})).name,a=Object(b.b)(),r=Object(b.c)((function(e){return e.continents})).continentsList,c=0===r.length,i="Hola ".concat(n||""!==n?n:"Anonimo",", selecciona los continentes para crear tu lista de Paises");return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(h.a,{className:e.flexContainer,children:[Object(j.jsx)(f.a,{variant:"h5",align:"center",children:i}),Object(j.jsx)(ve,{}),Object(j.jsx)(h.a,{className:e.buttonContainer,children:Object(j.jsx)(M.a,{onClick:function(e){he(a,r,t)},disabled:c,variant:"contained",color:"primary",testid:"SelectContinent",children:Object(j.jsx)(f.a,{children:"Seleccionar"})})})]})})},ye=n(267),Ce=n(268),Te=n(269),Ie=n(270),Ne=n(266),Se=n(271),Ae=function(){var e=Object(b.c)((function(e){return e.trivia})),t=e.noCorrectAns,n=e.noAttemps,a=e.noRevealedAns;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(ye.a,{children:Object(j.jsxs)(Ce.a,{children:[Object(j.jsx)(Te.a,{children:Object(j.jsxs)(Ie.a,{children:[Object(j.jsx)(Ne.a,{children:"Correctas"}),Object(j.jsx)(Ne.a,{children:"Intentos"}),Object(j.jsx)(Ne.a,{children:"Reveladas"})]})}),Object(j.jsxs)(Se.a,{children:[Object(j.jsx)(Ne.a,{children:t}),Object(j.jsx)(Ne.a,{children:n}),Object(j.jsx)(Ne.a,{children:a})]})]})})})},Ee=Object(m.a)({container:{margin:"10vh 15vw",display:"flex",aligItems:"center",justtifyContent:"center",flexWrap:"wrap"},innerContainer:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"2vh"}});var we=function(){var e=Ee(),t=Object(b.b)(),n=Object(b.c)((function(e){return e})),r=n.trivia,c=n.countries,i=Object(s.f)();function o(e){var n;t((n=e.target.value,{type:je,payload:{value:n}}))}function l(){t({type:oe,payload:{}})}return Object(a.useEffect)((function(){return c.countriesList.length<1?(i.push(L.ROUTES.SELECT_CONTINENTS),alert("Invalid Countries List")):t(be(r.controlArray,c.countriesList)),function(){}}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:e.container,children:[Object(j.jsxs)("div",{className:e.innerContainer,children:[r.reveal&&Object(j.jsx)(f.a,{variant:"h4",children:r.correctAnswer}),Object(j.jsx)("img",{src:r.selectedCountry.flag,alt:"trivia tag",width:"300"}),Object(j.jsx)(X,{value:r.userAnswer,label:"Introducir Respuesta",handler:function(e){return o(e)}}),Object(j.jsx)(W,{textValue:"Responder",handler:function(e){l()}}),Object(j.jsx)(W,{textValue:"Revelar",handler:function(e){t({type:se,payload:{}})}})]}),Object(j.jsx)("div",{children:Object(j.jsx)(Ae,{})})]})})};var Re=function(){var e=L.ROUTES;return Object(j.jsx)(s.c,{children:Object(j.jsxs)(F,{children:[Object(j.jsx)(s.a,{exact:!0,path:e.LOGIN,component:$}),Object(j.jsx)(s.a,{exact:!0,path:"/react-pre-interview-app",component:$}),Object(j.jsx)(s.a,{exact:!0,path:e.COUNTRIES_LIST,component:B}),Object(j.jsx)(s.a,{exact:!0,path:e.SELECT_CONTINENTS,component:ge}),Object(j.jsx)(s.a,{exact:!0,path:e.TRIVIA,component:we})]})})};var Le=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(Re,{})]})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Ue=n(108),_e=n(73),Pe=n.n(_e),Fe=n(19),Ve=n(95),De=function(e){var t=e.dispatch;return function(e){return function(){var n=Object(Ve.a)(Pe.a.mark((function n(a){var r,c,i,o,s,l,u,j,d;return Pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e(a),!a.type.match(/API_REQUEST/)){n.next=19;break}return r=a.payload.meta,c=r.entity,i=r.method,o=r.urls,s=r.history,n.prev=3,t(C(!0)),n.next=7,Promise.all(o.map((function(e){return fetch(e,{method:i})})));case 7:return j=n.sent,n.next=10,Promise.all(j.map((function(e){return e.json()})));case 10:d=n.sent,l=(u=[]).concat.apply(u,Object(Fe.a)(d)),t(ae(l,c)),s.push("/countriesList"),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(3),t(re(n.t0,c));case 19:(a.type.match(/API_ERROR/)||a.type.match(/API_SUCCESS/))&&t(C(!1));case 20:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(e){return n.apply(this,arguments)}}()}},Me=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(){var a=Object(Ve.a)(Pe.a.mark((function a(r){var c,i,o,s;return Pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e(r),c=n(),i=c.trivia,o=c.countries,s=r.type,!/trivia/i.test(s)){a.next=10;break}a.t0=s,a.next=a.t0===oe?7:9;break;case 7:return RegExp(i.correctAnswer,"i").test(i.userAnswer)?(t({type:le,payload:{}}),t(be(i.controlArray,o.countriesList))):t({type:ue,payload:{}}),a.abrupt("break",10);case 9:return a.abrupt("break",10);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},Ge=n(44),We=n(46);var He=Object(We.a)((function(e,t){var n=t.type,a=t.payload;switch(n){case Oe:e.continentsList=function(e,t){var n=e.indexOf(t),a=e;return n<0?a.push(t):a.splice(n,1),a.sort(),a}(e.continentsList,a.continent);break;case fe:a.continentsList===L.CONTINENTS?e.continentsList=[]:e.continentsList=L.CONTINENTS}}),{continentsList:[]}),Be=Object(We.a)((function(e,t){var n=t.type,a=t.payload;switch(n){case g:e.loader=a.loading;break;case y:e.darkMode=!e.darkMode}}),{loader:!1,darkMode:!1}),Je=Object(We.a)((function(e,t){var n=t.type,a=t.payload;switch(n){case J:e.name=a.name;break;case Q:a.history.push(L.ROUTES.SELECT_CONTINENTS)}}),{name:""}),Qe="[COUNTRIES]",ze=Object(We.a)((function(e,t){var n=t.type,a=t.payload;switch(n){case"".concat(Qe," ").concat(ee):e.countriesList=[];break;case"".concat(Qe," ").concat(te):e.countriesList=e.countriesList.concat(a.data);break;case"".concat(Qe," ").concat(ne):alert("Oops hubo un error en la conexion con el Servidor")}}),{countriesList:[]}),qe=Object(We.a)((function(e,t){var n=t.type,a=t.payload;switch(n){case ie:e.reveal=!1,e.userAnswer="",e.controlArray.push(a.index),e.selectedCountry=a.selectedCountry,e.correctAnswer=a.selectedCountry.translations.es;break;case se:!0!==e.reveal&&(e.reveal=!e.reveal,e.noRevealedAns++);break;case je:e.userAnswer=a.value;break;case le:e.noCorrectAns++,e.noAttemps++;break;case ue:e.noAttemps++;break;case de:e.controlArray=[],e.noCorrectAns=0,e.noAttemps=0,e.noRevealedAns=0}}),{controlArray:[],userAnswer:"",selectedCountry:{},correctAnswer:"",noCorrectAns:0,noAttemps:0,noRevealedAns:0,reveal:!1}),Ke=Object(Ge.c)({ui:Be,user:Je,continents:He,countries:ze,trivia:qe});var Xe=Object(Ue.a)({reducer:Ke,middleware:[De,Me],preloadedState:function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}()});Xe.subscribe((function(){return function(e){localStorage.clear();try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(Xe.getState())}));var Ye=Xe,Ze=n(148),$e=n(70),et=n(106),tt=n(98),nt=n(110),at=Object($e.a)({palette:{primary:{main:tt.a[400]},background:{default:nt.a[200]},text:{primary:"#000000"}}}),rt=Object($e.a)({palette:{primary:{main:nt.a[800],due:nt.a[600]},background:{default:nt.a[900]},text:{primary:nt.a[100]}}});var ct=function(e){var t=e.children,n=Object(b.c)((function(e){return e.ui})).darkMode;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(et.a,{theme:n?rt:at,children:t})})};function it(e){var t=e.children;return Object(j.jsx)(b.a,{store:Ye,children:Object(j.jsx)(Ze.a,{children:Object(j.jsx)(ct,{children:t})})})}i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(it,{children:Object(j.jsx)(Le,{})})}),document.getElementById("root")),ke()}},[[191,1,2]]]);
//# sourceMappingURL=main.9b5708e0.chunk.js.map