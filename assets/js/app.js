(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2017:function(t,e,s){t.exports=s.p+"img/technology-white.e66655df.svg"},"217b":function(t,e,s){t.exports=s.p+"img/public-services-white.78acaa5d.svg"},"29ec":function(t,e,s){t.exports=s.p+"img/online-white.7b3a9cff.svg"},"2e75":function(t,e,s){"use strict";var n=s("cce3"),i=s.n(n);i.a},3753:function(t,e,s){"use strict";var n=s("dd14"),i=s.n(n);i.a},"41ca":function(t,e,s){t.exports=s.p+"img/video-white.8d72be8b.svg"},"4b6a":function(t,e,s){t.exports=s.p+"img/groups-white.f13e13d6.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"grey"},[t._m(0),s("div",{staticClass:"container"},[s("Survey")],1),t._m(1)]),t._m(2)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-left-logo"},[s("a",{attrs:{href:"https://campaigntogether.org"}},[s("img",{attrs:{src:"/assets/img/logo.svg"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("img",{attrs:{src:"/assets/img/footer.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"footer"},[s("img",{staticClass:"logo",attrs:{src:"/assets/img/logo.svg"}}),s("div",{staticClass:"social-media"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:"/assets/img/facebook.svg"}})]),s("div",{staticClass:"icon"},[s("img",{attrs:{src:"/assets/img/instagram.svg"}})]),s("div",{staticClass:"icon"},[s("img",{attrs:{src:"/assets/img/twitter.svg"}})])]),s("div",{staticClass:"imprint"},[s("div",{staticClass:"left"},[t._v("© 2018. All rights reserved")]),s("div",{staticClass:"right"},[t._v("Website by "),s("a",{staticClass:"author",attrs:{href:"https://www.hannahpilbeam.co.uk"}},[t._v("Hannah Pilbeam")])])])])])}],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"survey"},[t.finished?s("div",[s("Finish",{attrs:{"first-name":this.data.firstName}})],1):s("div",[s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"bar"}),t._l(t.steps,function(e,n){return s("div",{key:e,staticClass:"step"},[s("div",{staticClass:"circle",class:{filled:t.progressStep>=n}}),"details"!==e?s("div",{staticClass:"bar"},[s("div",{staticClass:"line",class:{filled:t.progressStep>n}})]):t._e()])})],2),s("Issues",{directives:[{name:"show",rawName:"v-show",value:"issues"===t.step,expression:"step === 'issues'"}],on:{"issues:updated":function(e){return t.updateField("issues",e)},next:t.next}}),"skills"===t.step?s("Skills",{on:{"skills:updated":function(e){return t.updateField("skills",e)},next:t.next}}):t._e(),"postcode"===t.step?s("Postcode",{on:{"location:updated":function(e,s){t.updateField("postcode",e),t.updateField("distance",s)},next:t.next}}):t._e(),"availability"===t.step?s("Availability",{on:{next:t.next}}):t._e(),"donate"===t.step?s("Donate",{on:{next:t.next}}):t._e(),s("Details",{directives:[{name:"show",rawName:"v-show",value:"details"===t.step,expression:"step === 'details'"}],on:{"details:updated":function(e,s,n,i){t.updateField("firstName",e),t.updateField("lastName",s),t.updateField("email",n),t.updateField("phoneNumber",i)},next:t.submit}})],1)])},r=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("Some final details")]),s("p",{staticClass:"intro"},[t._v("Don't worry, we keep all personal information private.")]),s("div",{staticClass:"input-group name-input"},[s("div",{staticClass:"first-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",placeholder:"First name"},domProps:{value:t.firstName},on:{keyup:t.nameUpdated,input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"last-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",placeholder:"Last name"},domProps:{value:t.lastName},on:{keyup:t.nameUpdated,input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),t.showError?s("p",{staticClass:"error"},[t._v("Please enter your full name")]):t._e()]),s("div",{staticClass:"input-group email-input"},[s("p",{staticClass:"intro"},[t._v("What's your email address?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email address"},domProps:{value:t.email},on:{keyup:t.nameUpdated,input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.showEmailError?s("p",{staticClass:"error"},[t._v("Please enter your email address")]):t._e()]),s("div",{staticClass:"input-group email-input"},[s("p",{staticClass:"intro"},[t._v("And what's your phone number?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"phone",placeholder:"Your phone number"},domProps:{value:t.phoneNumber},on:{keyup:t.nameUpdated,input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),s("div",{staticClass:"input-group consent-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.consent,expression:"consent"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.consent)?t._i(t.consent,null)>-1:t.consent},on:{change:function(e){var s=t.consent,n=e.target,i=!!n.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);n.checked?o<0&&(t.consent=s.concat([a])):o>-1&&(t.consent=s.slice(0,o).concat(s.slice(o+1)))}else t.consent=i}}}),t._v(" I consent to Campaign Together emailing me with information on campaigns, volunteering, and related news\n    "),t.showConsentError?s("p",{staticClass:"error"},[t._v("Please accept our terms")]):t._e()]),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])])},c=[],u={data:function(){return{firstName:"",lastName:"",email:"",phoneNumber:"",consent:!1,showError:!1,showEmailError:!1,showConsentError:!1}},methods:{nameUpdated:function(){this.$emit("details:updated",this.firstName,this.lastName,this.email,this.phoneNumber)},save:function(){this.showError=!1,this.showEmailError=!1,this.showConsentError=!1,0===this.firstName.length||0===this.lastName.length?this.showError=!0:0===this.email.length?this.showEmailError=!0:!1===this.consent?this.showConsentError=!0:this.$emit("next")}}},p=u,d=(s("2e75"),s("2877")),v=Object(d["a"])(p,l,c,!1,null,"1fe3af88",null);v.options.__file="Details.vue";var h=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("Why do you want to stop the Tories winning the next election?")]),s("p",{staticClass:"intro"},[t._v("Select all that apply")]),t.showError?s("p",{staticClass:"error"},[t._v("Please select at least one option")]):t._e(),s("InputButtons",{attrs:{buttons:t.issues},on:{"selection:updated":function(e){return t.updateIssues(e)}}}),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])],1)},f=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-buttons"},t._l(t.buttons,function(e){return n("div",{key:e.name,staticClass:"input-button"},[n("button",{staticClass:"btn",class:{selected:t.isSelected(e.name)},on:{click:function(s){t.toggleButton(e.name)}}},[t.isSelected(e)?n("img",{attrs:{src:s("88a1")("./"+e.icon+"-white.svg")}}):n("img",{attrs:{src:"/assets/img/icons/"+e.icon+".svg"}}),t._v("\n      "+t._s(e.name)+"\n    ")])])}))},b=[],_={props:["buttons"],data:function(){return{selected:[]}},methods:{isSelected:function(t){return-1!==this.selected.indexOf(t)},toggleButton:function(t){var e=this.selected.indexOf(t);-1===e?this.selected.push(t):this.selected.splice(e,1),this.$emit("selection:updated",this.selected)}}},w=_,y=Object(d["a"])(w,g,b,!1,null,null,null);y.options.__file="InputButtons.vue";var x=y.exports,C={components:{InputButtons:x},data:function(){return{issues:[{name:"Protect public services",icon:"public-services"},{name:"Advance LGBT rights",icon:"LGBTQ"},{name:"Save our environment",icon:"environment"},{name:"For fairer voting",icon:"voting"},{name:"Advance racial justice",icon:"justice"},{name:"Advance migrants' rights",icon:"migrant-rights"},{name:"A better deal for Brexit",icon:"brexit"}],selection:[],showError:!1}},methods:{save:function(){0===this.selection.length?this.showError=!0:this.$emit("next")},updateIssues:function(t){this.selection=t,this.$emit("issues:updated",t)}}},k=C,E=(s("8902"),Object(d["a"])(k,m,f,!1,null,null,null));E.options.__file="Issues.vue";var S=E.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("What are you good at?")]),s("p",{staticClass:"intro"},[t._v("Select all that apply")]),t.showError?s("p",{staticClass:"error"},[t._v("Please select at least one option")]):t._e(),s("InputButtons",{attrs:{buttons:t.skills},on:{"selection:updated":function(e){return t.updateSkills(e)}}}),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])],1)},O=[],j={components:{InputButtons:x},data:function(){return{selection:[],skills:[{name:"I can give people a lift",icon:"car"},{name:"Talking to people",icon:"phone"},{name:"Talking on the phone",icon:"talk"},{name:"Giving help online",icon:"online"},{name:"Working in groups",icon:"groups"},{name:"Great with technology",icon:"technology"},{name:"Taking photos & videos",icon:"video"}],showError:!1}},methods:{save:function(){0===this.selection.length?this.showError=!0:this.$emit("next")},updateSkills:function(t){this.selection=t,this.$emit("skills:updated",t)}}},F=j,P=Object(d["a"])(F,N,O,!1,null,null,null);P.options.__file="Skills.vue";var A=P.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("What is your postcode?")]),s("p",{staticClass:"intro"},[t._v("Don't worry, we keep all personal information private")]),s("div",{staticClass:"postcode-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.postcode,expression:"postcode"}],attrs:{type:"text"},domProps:{value:t.postcode},on:{keyup:t.fieldUpdated,input:function(e){e.target.composing||(t.postcode=e.target.value)}}}),t.showError?s("p",{staticClass:"error"},[t._v("Please enter your postcode")]):t._e()]),s("div",{staticClass:"distance-input"},[s("p",[t._v("I'd consider travelling to help nearby campaigns within")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.distance,expression:"distance"}],attrs:{type:"text"},domProps:{value:t.distance},on:{keyup:t.fieldUpdated,input:function(e){e.target.composing||(t.distance=e.target.value)}}}),s("span",{staticClass:"unit"},[t._v("miles of home")])]),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])])},I=[],B={data:function(){return{postcode:"",distance:"10",showError:!1}},methods:{fieldUpdated:function(){this.$emit("location:updated",this.postcode,this.distance)},save:function(){0===this.postcode.length||0===this.distance.length?this.showError=!0:this.$emit("next")}}},D=B,U=(s("b167"),Object(d["a"])(D,T,I,!1,null,"52f4fee0",null));U.options.__file="Postcode.vue";var V=U.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("How much time can you offer to the campaign?")]),s("p",{staticClass:"intro"},[t._v("We'll help you use your time efficiently")]),s("div",{staticClass:"slider-container"},[s("Slider",{attrs:{"initial-value":t.time,steps:t.steps},on:{"value:changed":t.valueChanged}})],1),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])])},G=[],q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[s("div",{staticClass:"slider"},[s("vue-slider",{attrs:{"dot-size":24,min:1,max:t.steps.length,tooltip:!1,piecewise:!0,"piecewise-label":!0,"bg-style":t.bgStyles,"label-style":t.labelStyles,"label-active-style":t.labelActiveStyles,"slider-style":t.sliderStyles,"piecewise-style":t.piecewiseStyles,"process-style":t.processStyles,data:t.steps},on:{slider:t.updateValue},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectValue,expression:"selectValue"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectValue=e.target.multiple?s:s[0]},t.updateSelect]}},t._l(t.steps,function(e,n){return s("option",{key:n,domProps:{value:n}},[t._v(t._s(e))])}))])])},L=[],M=s("8809"),z={components:{vueSlider:M["a"]},props:["initialValue","steps"],data:function(){return{bgStyles:{background:"#EF204F"},labelActiveStyles:{"font-weight":"500"},labelStyles:{color:"black","max-width":"140px",width:"140px","white-space":"initial","margin-top":"10px","font-size":"16px"},piecewiseStyles:{background:"#EF204F"},processStyles:{background:"#EF204F"},sliderStyles:{background:"#EF204F","box-shadow":"initial","webkit-box-shadow":"initial"},value:0,selectValue:2}},created:function(){this.value=this.initialValue},methods:{updateSelect:function(){this.$emit("value:changed",this.selectValue)},updateValue:function(){this.$emit("value:changed",this.value)}}},J=z,Q=(s("3753"),Object(d["a"])(J,q,L,!1,null,"3bede238",null));Q.options.__file="Slider.vue";var H=Q.exports,R={components:{Slider:H},data:function(){return{steps:["at least once","a couple of hours a week","one weekend a month","every weekend","endless time"],time:2}},methods:{save:function(){this.$emit("next")},valueChanged:function(t){this.$emit("availability:updated",t)}}},Y=R,K=(s("eeda"),Object(d["a"])(Y,W,G,!1,null,"1378dca6",null));K.options.__file="Availability.vue";var X=K.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h1",[t._v("Can you chip in?")]),s("p",{staticClass:"intro"},[t._v("All donations make a huge difference!")]),s("div",{staticClass:"slider-container"},[s("Slider",{attrs:{"initial-value":t.donation,steps:t.steps}})],1),s("button",{staticClass:"btn btn-black next",on:{click:function(e){t.save()}}},[t._v("Next")])])},tt=[],et={components:{Slider:H},data:function(){return{donation:2,steps:["help in other ways","£5","£10","£20","£50","£100"]}},methods:{save:function(){this.$emit("next")}}},st=et,nt=(s("6dad"),Object(d["a"])(st,Z,tt,!1,null,"f00031ce",null));nt.options.__file="Donate.vue";var it=nt.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"finished"},[s("h1",[t._v("Great to have you on board, "+t._s(t.firstName))]),s("p",{staticClass:"intro"},[t._v("We need to build a movement of thousands to stop the Tories, can you share this with 5 friends?")]),t._m(0),t._m(1)])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"share-buttons"},[s("a",{staticClass:"btn btn-black share-button",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A//campaigntogether.org",target:"_blank"}},[t._v("Share this on Facebook")]),s("a",{staticClass:"btn btn-black share-button",attrs:{href:"https://twitter.com/intent/tweet?text=We+need+to+stop+the+Tories.+I%27ve+just+joined+Campaign+Together%2C+a+community+of+people+from+all+parties+and+none%2C+will+you+join+me%3F+https%3A%2F%2Fcampaigntogether.org",target:"_blank"}},[t._v("Share this on Twitter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"return"},[s("a",{attrs:{href:"https://campaigntogether.org"}},[t._v("Return to home")])])}],rt={props:{firstName:String}},lt=rt,ct=Object(d["a"])(lt,at,ot,!1,null,null,null);ct.options.__file="Finish.vue";var ut=ct.exports,pt={computed:{nextButtonText:function(){return"donate"!==this.step?"Next":"Done"},progressStep:function(){return this.steps.indexOf(this.step)}},components:{Issues:S,Skills:A,Postcode:V,Availability:X,Donate:it,Details:h,Finish:ut},data:function(){return{data:{},finished:!1,step:"issues",steps:["issues","skills","postcode","availability","donate","details"]}},methods:{updateField:function(t,e){this.data[t]=e},next:function(){var t=this.steps.indexOf(this.step),e=this.steps[t+1];this.step=e,window.scrollTo(0,0)},submit:function(){var t=this;$.ajax({method:"POST",url:"https://gyycr4ld2a.execute-api.eu-west-1.amazonaws.com/Production/people",data:JSON.stringify(this.data)}).always(function(){t.finished=!0})}}},dt=pt,vt=Object(d["a"])(dt,o,r,!1,null,null,null);vt.options.__file="Survey.vue";var ht=vt.exports,mt={name:"app",components:{Survey:ht}},ft=mt,gt=(s("f51e"),Object(d["a"])(ft,i,a,!1,null,"59d29cc2",null));gt.options.__file="App.vue";var bt=gt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(bt)}}).$mount("#app")},"5b30":function(t,e,s){},"6dad":function(t,e,s){"use strict";var n=s("9e24"),i=s.n(n);i.a},7745:function(t,e,s){t.exports=s.p+"img/voting-white.295f23eb.svg"},7984:function(t,e,s){t.exports=s.p+"img/migrant-rights-white.2ab4765b.svg"},8852:function(t,e,s){},"88a1":function(t,e,s){var n={"./LGBTQ-white.svg":"a313","./brexit-white.svg":"d187","./car-white.svg":"f457","./environment-white.svg":"da91","./groups-white.svg":"4b6a","./justice-white.svg":"b3eb","./migrant-rights-white.svg":"7984","./online-white.svg":"29ec","./phone-white.svg":"8e47","./public-services-white.svg":"217b","./talk-white.svg":"99de","./technology-white.svg":"2017","./video-white.svg":"41ca","./voting-white.svg":"7745"};function i(t){var e=a(t);return s(e)}function a(t){var e=n[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="88a1"},8902:function(t,e,s){"use strict";var n=s("8852"),i=s.n(n);i.a},"8e47":function(t,e,s){t.exports=s.p+"img/phone-white.246c6c2f.svg"},"99de":function(t,e,s){t.exports=s.p+"img/talk-white.2f984125.svg"},"9e24":function(t,e,s){},a313:function(t,e,s){t.exports=s.p+"img/LGBTQ-white.ea9e2be1.svg"},b167:function(t,e,s){"use strict";var n=s("f5d1"),i=s.n(n);i.a},b3eb:function(t,e,s){t.exports=s.p+"img/justice-white.6baa35c0.svg"},cce3:function(t,e,s){},d187:function(t,e,s){t.exports=s.p+"img/brexit-white.83b9b127.svg"},d4ff:function(t,e,s){},da91:function(t,e,s){t.exports=s.p+"img/environment-white.fe17ca3f.svg"},dd14:function(t,e,s){},eeda:function(t,e,s){"use strict";var n=s("d4ff"),i=s.n(n);i.a},f457:function(t,e,s){t.exports=s.p+"img/car-white.9af174da.svg"},f51e:function(t,e,s){"use strict";var n=s("5b30"),i=s.n(n);i.a},f5d1:function(t,e,s){}});
//# sourceMappingURL=app.5ef15329.js.map