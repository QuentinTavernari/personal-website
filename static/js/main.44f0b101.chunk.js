(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},38:function(e,a,t){},39:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(8),l=t(10),r=t(9),i=(t(38),t(2)),o=t(11),m=t(17),u=t(19),p={contactData:{name:"",email:"",message:""}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CONTACT_INPUT_CHANGE":return Object(u.a)({},e,{contactData:Object(u.a)({},e.contactData,Object(m.a)({},a.stateName,a.payload))});case"CONTACT_INPUT_DELETE":return Object(u.a)({},e,{contactData:{name:"",email:"",message:""}});default:return e}},v=Object(o.c)({contact:d}),E=function(e){return function(a){return function(t){console.log(e.getState()),console.log("Je laisse passer cette action: ",t),a(t)}}},g=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d)(Object(o.a)(E)),b=Object(o.e)(v,g),N=(t(39),Object(l.b)(null,null)((function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("h1",{className:"navbar-brand"},c.a.createElement(r.b,{className:"link link--kukuri","data-letters":"Quentin Tavernari",to:"/personal-website/"},"Quentin Tavernari")),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-item-home",to:"/personal-website/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-item-cv",to:"/personal-website/cv"},"Mon CV")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-item-contact",to:"/personal-website/contact"},"Me contacter")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-item-github",href:"https://github.com/QuentinTavernari",target:"blank"},"Github",c.a.createElement("img",{className:"github-logo",alt:"github logo",src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"})))))))}))),h=t(18),f=t.n(h),w=(t(43),function(){return Object(n.useEffect)((function(){!function(e,a,t){void 0===t&&(t=["#fff"]);var n=!0,c=document.getElementById("console"),s=1,l=1,r=!1,i=document.getElementById(a);i.setAttribute("style","color:".concat(t[0])),window.setInterval((function(){0===s&&!1===r?(r=!0,i.innerHTML=e[0].substring(0,s),window.setTimeout((function(){var a=t.shift();t.push(a);var n=e.shift();e.push(n),l=1,i.setAttribute("style","color:".concat(t[0])),s+=l,r=!1}),1e3)):s===e[0].length+1&&!1===r?(r=!0,window.setTimeout((function(){s+=l=-1,r=!1}),1e3)):!1===r&&(i.innerHTML=e[0].substring(0,s),s+=l)}),120),window.setInterval((function(){!0===n?(c.className="console-underscore hidden",n=!1):(c.className="console-underscore",n=!0)}),400)}(["Bonne visite !"],"text",["tomato","rebeccapurple","lightblue"])})),console.log(f.a),c.a.createElement("div",{className:"console-container"},c.a.createElement("span",{id:"text"}),c.a.createElement("div",{className:"console-underscore",id:"console"},"_"))}),x=(t(44),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(N,null),c.a.createElement("div",{className:"homepage"},c.a.createElement("div",{className:"homepage-introduction"},c.a.createElement("h2",null,"Bienvenue !"),c.a.createElement("p",null,"Je m'appelle Quentin, j'ai 28 ans et je suis \xe0 la recherche d'un emploi en tant que d\xe9veloppeur front-end."),c.a.createElement("p",null,"J'ai r\xe9alis\xe9 ce site pour mettre \xe0 disposition un aper\xe7u de mon cv et de mes comp\xe9tences, et pour y entreposer quelques tests persos."),c.a.createElement("p",null,' Si vous \xeates int\xe9ress\xe9(e) par mon profil, vous pouvez m\'envoyer un mail via la rubrique "me contacter".')),c.a.createElement(w,null)))}),C=t(13),T=t.n(C),y=t(24),O=(t(47),function(){return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement("div",{className:"cv container"},c.a.createElement("div",{className:"cv-header"},c.a.createElement("div",{className:"cv-picture"},c.a.createElement("img",{className:"cv-photo",src:"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/120733430_10225326530339270_4754303876415380686_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=WnMImsY2NUQAX8n2w0o&_nc_ht=scontent-cdt1-1.xx&oh=984221b558cb77ea2bb12f85067e9b67&oe=5F9D0B06",alt:"Quentin Tavernari"})),c.a.createElement("div",{className:"cv-title-container"},c.a.createElement("h2",{className:"cv-maintitle"},"D\xe9veloppeur full stack Javascript"),c.a.createElement("div",{className:"cv-subtitle"},c.a.createElement(T.a,{left:!0,cascade:!0},c.a.createElement("div",{className:"cv-subtitle-element"},c.a.createElement("p",null,"React"),c.a.createElement("img",{className:"techno-logo",alt:"react logo",src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"})),c.a.createElement("div",{className:"cv-subtitle-element"},c.a.createElement("p",null,"Redux"),c.a.createElement("img",{className:"techno-logo",alt:"redux logo",src:"https://png2.cleanpng.com/sh/4a9464079da16cda5b54e7007a0ee22e/L0KzQYm3VsI2N6d7kpH0aYP2gLBuTgJmbKZ9ReRuYXP3Pb32hB8ucpJ7eeVscnnzhH7rkb02amQ2UKkANnLkQ4m6Vb44PWY5UKQAMEG4QoqCV8I2Pmc8TqQDLoDxd1==/kisspng-redux-react-logo-javascript-dq-5b318756ba3835.7554825015299725667628.png"})),c.a.createElement("div",{className:"cv-subtitle-element"},c.a.createElement("p",null,"Node.js"),c.a.createElement("img",{className:"techno-logo",alt:"node.js logo",src:"https://www.developpez.com/public/images/news/node-js10.png"})))))),c.a.createElement("div",{className:"cv-body"},c.a.createElement(T.a,{left:!0,cascade:!0},c.a.createElement("h3",{className:"cv-experiences"},"Experiences"),c.a.createElement("div",{className:"cv-experiences-item"},c.a.createElement("p",{className:"cv-experiences-job"},"Chef de march\xe9 marketplace"),c.a.createElement("p",{className:"cv-experiences-company"},"Groupe Fnac-Darty | Avr 2016 - Juin 2019"),c.a.createElement("ul",null,c.a.createElement("li",{className:"cv-experiences-description"},"- Gestion des vendeurs cl\xe9s sur les produits informatiques (CA du p\xe9rim\xe8tre de ce poste sup\xe9rieur \xe0 10M\u20ac annuels)"),c.a.createElement("li",{className:"cv-experiences-description"},"- D\xe9veloppement du CA du p\xe9rim\xe8tre via diff\xe9rents leviers (offres en ligne, animation commerciale, recrutement, web-merchandising)"))),c.a.createElement("div",{className:"cv-experiences-item"},c.a.createElement("p",{className:"cv-experiences-job"},"Category manager web & magasins"),c.a.createElement("p",{className:"cv-experiences-company"},"Groupe Fnac-Darty | Nov 2014 - Janv 2016"),c.a.createElement("ul",null,c.a.createElement("li",{className:"cv-experiences-description"},"- Gestion de plusieurs familles de produits pour fnac.com et les 140 magasins (PC de bureau, moniteurs, objets connect\xe9s, sport)"),c.a.createElement("li",{className:"cv-experiences-description"},"- Cr\xe9ation et suivi des gammes de produits"),c.a.createElement("li",{className:"cv-experiences-description"},"- Gestion des commandes et des stocks"),c.a.createElement("li",{className:"cv-experiences-description"},"- D\xe9veloppement du CA via l'animation commerciale"))),c.a.createElement("div",{className:"cv-experiences-item"},c.a.createElement("p",{className:"cv-experiences-job"},"Web merchandiser fnac.com"),c.a.createElement("p",{className:"cv-experiences-company"},"Groupe Fnac-Darty | Fev 2014 - Aout 2014"),c.a.createElement("p",{className:"cv-experiences-description"},"Gestion du web merchandising pour les produits informatiques sur le site Fnac.com :"),c.a.createElement("ul",null,c.a.createElement("li",{className:"cv-experiences-description"},"- Param\xe9trage des actions commerciales web"),c.a.createElement("li",{className:"cv-experiences-description"},"- Proposition et application d'actions web merchandising"),c.a.createElement("li",{className:"cv-experiences-description"},"- Brief et validation de newsletters")))),c.a.createElement(T.a,{right:!0,cascade:!0},c.a.createElement("h3",{className:"cv-education"},"Formations"),c.a.createElement("div",{className:"cv-education-item"},c.a.createElement("p",{className:"cv-education-school"},"Ecole O'clock"),c.a.createElement("p",{className:"cv-education-training"},"Formation Full Stack Javascript | Mars - Dec 2020"),c.a.createElement("p",null,"735 heures de formation qui m'ont permises d'approfondir mes connaissances en Javascript et de devenir autonome sur React/Redux et Node.js")),c.a.createElement("div",{className:"cv-education-item"},c.a.createElement("p",{className:"cv-education-school"},"Universit\xe9 de Paris Est Creteil"),c.a.createElement("p",{className:"cv-education-training"},"Master 1 et 2 E-Commerce | Sept 2013 - Dec 2015"),c.a.createElement("p",null,"Comp\xe9tences acquises en : E-commerce, gestion de projet, cybers\xe9curit\xe9, acquisition de trafic (SEO, SEA, CRM)")),c.a.createElement("div",{className:"cv-education-item"},c.a.createElement("p",{className:"cv-education-school"},"Universit\xe9 de Bourgogne"),c.a.createElement("p",{className:"cv-education-training"},"Licence Pro Commercialisation de produits en ligne | Oct 2012 - Juin 2013"),c.a.createElement("p",null,"Comp\xe9tences acquises en : Web marketing, cr\xe9ation de sites web, graphisme, d\xe9veloppement web (HTML5 / CSS3)")),c.a.createElement("div",{className:"cv-education-item"},c.a.createElement("p",{className:"cv-education-school"},"Universit\xe9 de Bourgogne"),c.a.createElement("p",{className:"cv-education-training"},"DUT Techniques de commercialisation | Sept 2010 - Juin 2012"),c.a.createElement("p",null,"Comp\xe9tences acquises en : Marketing, n\xe9gociation, droit, \xe9conomie, communication"))),c.a.createElement(T.a,{left:!0,cascade:!0},c.a.createElement("h3",{className:"cv-languages"},"Langues"),c.a.createElement("div",{className:"cv-languages-item"},c.a.createElement("p",{className:"cv-languages-name"},"Anglais"),c.a.createElement(y.a,{className:"cv-languages-progressbar",animated:!0,now:75})),c.a.createElement("div",{className:"cv-languages-item"},c.a.createElement("p",{className:"cv-languages-name"},"Italien"),c.a.createElement(y.a,{className:"cv-languages-progressbar",animated:!0,now:35}))),c.a.createElement(T.a,{right:!0,cascade:!0},c.a.createElement("h3",{className:"cv-hobbies"},"Loisirs"),c.a.createElement("div",{className:"cv-hobbies-item"},c.a.createElement("p",{className:"cv-hobbies-description"},"J'ai d\xe9j\xe0 eu la chance de visiter une bonne dizaine de pays... mais dans 20 ans j'aimerais en avoir fait le triple !")),c.a.createElement("div",{className:"cv-hobbies-item"},c.a.createElement("p",{className:"cv-hobbies-description"},"J'aime l'informatique depuis tout petit. Je pourrais parler carte graphique pendant des heures..."))))))}),k=t(14),_=(t(48),t(49),Object(l.b)((function(e){return{contactData:e.contact.contactData}}),(function(e){return{contactInputChange:function(a,t){e(function(e,a){return{type:"CONTACT_INPUT_CHANGE",stateName:e,payload:a}}(a,t))},contactInputDelete:function(){e({type:"CONTACT_INPUT_DELETE"})}}}))((function(e){var a=e.contactData,t=e.contactInputChange,n=e.contactInputDelete;return c.a.createElement("div",{className:"contact"},c.a.createElement(N,null),c.a.createElement("form",{className:"contact-form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Votre nom"),c.a.createElement("input",{type:"text",className:"form-control",id:"name","aria-describedby":"name",placeholder:"Saisissez ici votre nom",onChange:function(e){t("name",e.target.value)},value:a.name})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Votre adresse email"),c.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"email",placeholder:"Saisissez ici votre email",onChange:function(e){t("email",e.target.value)},value:a.email}),c.a.createElement("small",{id:"email",className:"form-text text-muted"},"Je ne partagerai jamais cet email.")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"message"},"Votre message"),c.a.createElement("textarea",{className:"form-control",id:"message",placeholder:"Saisissez ici votre message",onChange:function(e){t("message",e.target.value)},value:a.message})),c.a.createElement("button",{type:"submit",className:"btn link link--kukuri",onClick:function(e){a.name&&a.email&&a.message?(e.preventDefault(),f.a.send("service_l6cb95b","template_9jf6epb",a,"user_3A2LAMBGj0zkhQGT1D4LG").then((function(e){console.log("SUCCESS!",e.status,e.text),k.b.success("Votre message a bien \xe9t\xe9 envoy\xe9, merci !",{position:k.b.POSITION.BOTTOM_CENTER}),n()}),(function(e){console.log("FAILED...",e)}))):(e.preventDefault(),k.b.error("Oups ! Je crois que vous avez oubli\xe9 un champ. Votre message n'a pas pu \xeatre envoy\xe9 :'(",{position:k.b.POSITION.BOTTOM_CENTER}))}},"Envoyer"),c.a.createElement(k.a,null)))}))),j=(t(50),function(){return c.a.createElement("div",{className:"error404-container"},c.a.createElement(N,null),c.a.createElement("h2",{className:"error404-title","data-heading":"0"},"Erreur 404"),c.a.createElement("p",{className:"error404-text"},"Il fait sombre ici... vous voulez peut-\xeatre retourner \xe0 ",c.a.createElement(r.b,{to:"/personal-website/"},"la page d'accueil ?")))}),D=(t(51),function(){return c.a.createElement(l.a,{store:b},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/personal-website/",component:x}),c.a.createElement(i.a,{exact:!0,path:"/personal-website/cv",component:O}),c.a.createElement(i.a,{exact:!0,path:"/personal-website/contact/",component:_}),c.a.createElement(i.a,{component:j})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=c.a.createElement(l.a,{store:b},c.a.createElement(r.a,null,c.a.createElement(D,null))),S=document.getElementById("root");Object(s.render)(I,S),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.44f0b101.chunk.js.map