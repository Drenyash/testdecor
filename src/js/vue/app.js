(function(){"use strict";var e={4724:function(e,o,t){var r=t(9242),n=t(3396),a=t(7139);const s=e=>((0,n.dD)("data-v-cb1690c8"),e=e(),(0,n.Cn)(),e),l={class:"save-project__wrapper"},c={class:"save-project__header"},i=s((()=>(0,n._)("h2",{class:"save-project__title"},"Сохранить в «Мои проекты»",-1))),d=s((()=>(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none"},[(0,n._)("path",{fill:"#4A4A4A",d:"M25.335 8.88 23.455 7 16 14.453 8.548 7l-1.88 1.88 7.453 7.453-7.453 7.454 1.88 1.88 7.453-7.454 7.454 7.454 1.88-1.88-7.454-7.454 7.454-7.453Z"})],-1))),p=[d],u={class:"save-project__content"},m={class:"save-project__footer"};function h(e,o,t,r,s,d){const h=(0,n.up)("AppSearch"),v=(0,n.up)("AppProjects"),_=(0,n.up)("TheLoader"),w=(0,n.up)("TheButton"),g=(0,n.up)("AppModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s.windowIsOpen?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"save-project",ref:"draggable",style:(0,a.j5)({transform:`translate(${s.object.x}px, ${s.object.y}px)`}),onMousedown:o[2]||(o[2]=(...e)=>d.startDrag&&d.startDrag(...e)),onMousemove:o[3]||(o[3]=(...e)=>d.drag&&d.drag(...e)),onMouseup:o[4]||(o[4]=(...e)=>d.stopDrag&&d.stopDrag(...e))},[(0,n._)("div",l,[(0,n._)("div",c,[i,(0,n._)("button",{class:"save-project__close",onClick:o[0]||(o[0]=(...e)=>d.closeProject&&d.closeProject(...e))},p),(0,n.Wm)(h,{onSearchText:d.searchedData},null,8,["onSearchText"])]),(0,n._)("div",u,[s.projects.length?((0,n.wg)(),(0,n.j4)(v,{key:0,projects:d.filteredProjects,onAddNewRoom:o[1]||(o[1]=e=>s.roomId=e),currentProduct:s.currentProduct,onAddNewMaterial:d.addSavedMaterial,onOpenCreateModal:d.openCreateRoomModal},null,8,["projects","currentProduct","onAddNewMaterial","onOpenCreateModal"])):((0,n.wg)(),(0,n.j4)(_,{key:1}))]),(0,n._)("div",m,[(0,n.Wm)(w,{onClick:d.openCreateProjectModal},{default:(0,n.w5)((()=>[(0,n.Uk)("Создать проект")])),_:1},8,["onClick"])])])],36)):(0,n.kq)("",!0),(0,n.Wm)(g,{"modal-is-open":s.modalProjectIsOpen,"onUpdate:modalIsOpen":o[5]||(o[5]=e=>s.modalProjectIsOpen=e),onCreateNewProject:d.createNewProject,modalId:1},{header:(0,n.w5)((()=>[(0,n.Uk)("Создание проекта")])),text:(0,n.w5)((()=>[(0,n.Uk)("Создайте общий проект и наполните его объектами или комнатами")])),_:1},8,["modal-is-open","onCreateNewProject"]),(0,n.Wm)(g,{"modal-is-open":s.modalRoomIsOpen,"onUpdate:modalIsOpen":o[6]||(o[6]=e=>s.modalRoomIsOpen=e),onCreateNewRoom:d.addNewRoom,modalId:2,roomId:s.roomId},{header:(0,n.w5)((()=>[(0,n.Uk)("Создание комнаты")])),text:(0,n.w5)((()=>[(0,n.Uk)("Добавляйте комнаты к готовому проекту")])),_:1},8,["modal-is-open","onCreateNewRoom","roomId"])],64)}t(7658);const v=e=>((0,n.dD)("data-v-00b59e9e"),e=e(),(0,n.Cn)(),e),_=v((()=>(0,n._)("svg",{class:"search__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 18",fill:"none"},[(0,n._)("ellipse",{cx:"7.606",cy:"7",stroke:"#838383","stroke-linecap":"round","stroke-linejoin":"round",rx:"4.927",ry:"5"}),(0,n._)("path",{stroke:"#838383","stroke-linecap":"round","stroke-linejoin":"round",d:"m16.475 16-4.927-5"})],-1)));function w(e,o,t,s,l,c){return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["search",{"search__input--typing":l.text.length}])},[_,(0,n.wy)((0,n._)("input",{class:"search__input","onUpdate:modelValue":o[0]||(o[0]=e=>l.text=e),onInput:o[1]||(o[1]=(...e)=>c.searchedText&&c.searchedText(...e)),type:"text",placeholder:"Искать проект"},null,544),[[r.nr,l.text]])],2)}var g={data(){return{text:""}},methods:{searchedText(){this.$emit("searchText",this.text)}}},f=t(89);const j=(0,f.Z)(g,[["render",w],["__scopeId","data-v-00b59e9e"]]);var C=j;const I=e=>((0,n.dD)("data-v-69d5f87e"),e=e(),(0,n.Cn)(),e),M={class:"v-button"},b=I((()=>(0,n._)("span",{class:"v-button__icon"},[(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none"},[(0,n._)("path",{fill:"#5A7384","fill-rule":"evenodd",d:"M16 10H2V8h14v2Z","clip-rule":"evenodd"}),(0,n._)("path",{fill:"#5A7384","fill-rule":"evenodd",d:"M8 16V2h2v14H8Z","clip-rule":"evenodd"})])],-1)));function P(e,o,t,r,a,s){return(0,n.wg)(),(0,n.iD)("button",M,[b,(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var k={};const x=(0,f.Z)(k,[["render",P],["__scopeId","data-v-69d5f87e"]]);var O=x;const N={key:0,class:"projects"},R={key:1,class:"notification"};function y(e,o,t,r,a,s){const l=(0,n.up)("AppProject");return t.projects.length?((0,n.wg)(),(0,n.iD)("div",N,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.projects,(e=>((0,n.wg)(),(0,n.j4)(l,{project:e,key:e.id,currentProduct:t.currentProduct,onAddNewMaterial:o[0]||(o[0]=(e,o,t)=>this.$emit("addNewMaterial",e,o,t)),onAddNewRoom:s.addNewRoom,onOpenCreateModal:s.openCreateModal},null,8,["project","currentProduct","onAddNewRoom","onOpenCreateModal"])))),128))])):((0,n.wg)(),(0,n.iD)("p",R,"Проекты не найдены!"))}const D={class:"project"},A={class:"project__title"};function T(e,o,t,r,s,l){const c=(0,n.up)("AppProjectRooms"),i=(0,n.up)("TheButton");return(0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("h3",A,(0,a.zw)(t.project.title),1),(0,n.Wm)(c,{projectRooms:t.project.rooms,onAddNewMaterial:o[0]||(o[0]=(e,o,t)=>this.$emit("addNewMaterial",e,o,t)),currentProduct:t.currentProduct},null,8,["projectRooms","currentProduct"]),(0,n.Wm)(i,{class:"",onClick:l.openCreateModal},{default:(0,n.w5)((()=>[(0,n.Uk)("Добавить комнату")])),_:1},8,["onClick"])])}const Z={class:"project__rooms"};function U(e,o,t,r,a,s){const l=(0,n.up)("AppProjectRoom");return(0,n.wg)(),(0,n.iD)("div",Z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.projectRooms,(e=>((0,n.wg)(),(0,n.j4)(l,{room:e,key:e.id,onAddNewMaterial:o[0]||(o[0]=(e,o,t)=>this.$emit("addNewMaterial",e,o,t)),currentProduct:t.currentProduct},null,8,["room","currentProduct"])))),128))])}const $={class:"room"},S=["src","alt"],B={class:"room__title"};function L(e,o,t,s,l,c){const i=(0,n.up)("TheButton");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n._)("picture",{class:"room__picture",onClick:o[0]||(o[0]=(...e)=>c.showInfo&&c.showInfo(...e))},[(0,n._)("img",{src:t.room.picture,class:(0,a.C_)({empty:t.room.picture.includes(".svg")}),alt:t.room.roomTitle},null,10,S)]),(0,n._)("div",{class:"room__info",onClick:o[1]||(o[1]=(...e)=>c.saveToRoom&&c.saveToRoom(...e))},[(0,n._)("h3",B,(0,a.zw)(t.room.roomTitle),1),(0,n.Wm)(i,{class:"v-button--save",onClick:(0,r.iM)(c.saveToRoom,["stop"])},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(l.isSaved?"Добавлено":"Сохранить"),1)])),_:1},8,["onClick"])])])}var V={components:{TheButton:O},data(){return{isSaved:!1}},props:{room:Object,currentProduct:String},methods:{showInfo(){console.log(this.room)},saveToRoom(){this.isSaved=!0;const e={id:Date.now(),name:this.currentProduct,article:8252791,price:223500};this.$emit("addNewMaterial",e,this.room.roomId,this.room.id),setTimeout((()=>{this.isSaved=!1}),1e3)}}};const H=(0,f.Z)(V,[["render",L],["__scopeId","data-v-7f9a9582"]]);var W=H,Y={components:{AppProjectRoom:W},props:{projectRooms:Object,currentProduct:String}};const F=(0,f.Z)(Y,[["render",U],["__scopeId","data-v-6b51f731"]]);var E=F,X={components:{AppProjectRooms:E,TheButton:O},props:{project:Object,currentProduct:String},methods:{openCreateModal(){this.$emit("openCreateModal",!0),this.addNewRoom()},addNewRoom(){this.$emit("addNewRoom",this.project.id)}}};const q=(0,f.Z)(X,[["render",T],["__scopeId","data-v-3f0eabb0"]]);var z=q,K={components:{AppProject:z},props:{projects:Object,currentProduct:String},methods:{addNewRoom(e){this.$emit("addNewRoom",e)},openCreateModal(){this.$emit("openCreateModal",!0)}}};const G=(0,f.Z)(K,[["render",y],["__scopeId","data-v-2f5a1e82"]]);var J=G;const Q=e=>((0,n.dD)("data-v-6446ae20"),e=e(),(0,n.Cn)(),e),ee={class:"modal__header"},oe={class:"modal__title"},te=Q((()=>(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none"},[(0,n._)("g",null,[(0,n._)("path",{fill:"#4A4A4A",d:"M25.335 8.88 23.455 7 16 14.453 8.548 7l-1.88 1.88 7.453 7.453-7.453 7.454 1.88 1.88 7.453-7.454 7.454 7.454 1.88-1.88-7.454-7.454 7.454-7.453Z"})]),(0,n._)("defs",null,[(0,n._)("path",{fill:"#fff",d:"M0 0h32v32H0z"})])],-1))),re=[te],ne={class:"modal__content"},ae={class:"modal__picture"},se=["src"],le={class:"modal__info"},ce={class:"modal__text"},ie={ref:"dangerous",class:""},de=["placeholder"],pe=(0,n.uE)('<span class="modal-warning" data-v-6446ae20><svg class="modal-warning__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6446ae20><path d="M15.133 14.9008H0.866653C0.552212 14.9008 0.271342 14.7379 0.115157 14.4648C-0.0406723 14.1914 -0.038237 13.8667 0.121765 13.5956L7.25472 1.52466C7.41212 1.25857 7.69038 1.09961 7.99994 1.09961C8.30934 1.09961 8.58777 1.25857 8.74516 1.52466L15.8781 13.5956C16.0379 13.8667 16.0406 14.1915 15.8847 14.4648C15.7279 14.7379 15.4473 14.9008 15.133 14.9008Z" fill="#F25220" data-v-6446ae20></path><path d="M8.00002 10.9998C7.66471 10.9998 7.38191 10.7487 7.34242 10.4155L6.80169 5.81762C6.77995 5.62962 6.83908 5.4411 6.96465 5.29987C7.08987 5.15917 7.2704 5.07812 7.45925 5.07812H8.54102C8.72954 5.07812 8.91042 5.15917 9.03562 5.30004C9.16119 5.44126 9.22066 5.63014 9.19858 5.81744L8.65754 10.4148C8.61806 10.7484 8.33535 10.9998 8.00002 10.9998Z" fill="white" data-v-6446ae20></path><path d="M7.99993 13.6541C7.48445 13.6541 7.06496 13.2346 7.06496 12.7192C7.06496 12.2037 7.48444 11.7842 7.99993 11.7842C8.51542 11.7842 8.9349 12.2037 8.9349 12.7192C8.9349 13.2346 8.51542 13.6541 7.99993 13.6541Z" fill="white" data-v-6446ae20></path></svg> Поле заполнено некорректно </span>',1),ue={class:"modal__file"},me=Q((()=>(0,n._)("svg",{class:"modal__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 23",fill:"none"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M11 9.77a2.647 2.647 0 0 0-2.636 2.659A2.647 2.647 0 0 0 11 15.087a2.647 2.647 0 0 0 2.636-2.658A2.647 2.647 0 0 0 11 9.77ZM7.375 12.43c0-2.011 1.62-3.648 3.625-3.648s3.625 1.636 3.625 3.648c0 2.01-1.62 3.647-3.625 3.647s-3.625-1.636-3.625-3.647Z","clip-rule":"evenodd"}),(0,n._)("path",{"fill-rule":"evenodd",d:"M7.007 7.617H3.393v10.145h15.214V7.617h-3.614l-.659-2.146H7.666l-.66 2.146ZM6.82 4.328h8.358l.659 2.146h3.912v12.43H2.25V6.475h3.912l.66-2.146Z","clip-rule":"evenodd"}),(0,n._)("path",{d:"M4.64 8.427h2.286V9.57H4.641V8.427ZM16.464 8.427h1.143V9.57h-1.143V8.427Z"})],-1))),he={class:"modal__footer"};function ve(e,o,t,s,l,c){const i=(0,n.up)("TheButton");return t.modalIsOpen?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal",onClick:o[4]||(o[4]=(...e)=>c.closeModal&&c.closeModal(...e))},[(0,n._)("div",{class:"modal__container",onClick:o[3]||(o[3]=(0,r.iM)((()=>{}),["stop"]))},[(0,n._)("div",ee,[(0,n._)("h2",oe,[(0,n.WI)(e.$slots,"header",{},void 0,!0)]),(0,n._)("button",{class:"modal__close",onClick:o[0]||(o[0]=(...e)=>c.closeModal&&c.closeModal(...e))},re)]),(0,n._)("div",ne,[(0,n._)("picture",ae,[(0,n._)("img",{src:c.setImage,class:(0,a.C_)({empty:c.setImage.includes(".svg")}),alt:""},null,10,se)]),(0,n._)("div",le,[(0,n._)("p",ce,[(0,n.WI)(e.$slots,"text",{},void 0,!0)]),(0,n._)("label",ie,[(0,n.wy)((0,n._)("input",{class:"modal__input",type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>l.name=e),placeholder:c.placeholder},null,8,de),[[r.nr,l.name]]),pe],512),(0,n._)("div",ue,[(0,n._)("input",{type:"file",onChange:o[2]||(o[2]=(...e)=>c.onFileChange&&c.onFileChange(...e))},null,32),me,(0,n._)("p",null,(0,a.zw)(null!==l.fileName?l.fileName:"Загрузить обложку"),1)])])]),(0,n._)("div",he,[(0,n.Wm)(i,{class:"v-button--outline",onClick:c.closeModal},{default:(0,n.w5)((()=>[(0,n.Uk)("Отменить")])),_:1},8,["onClick"]),(0,n.Wm)(i,{class:"v-button--outline v-button--field",onClick:c.createFunc},{default:(0,n.w5)((()=>[(0,n.Uk)("Создать")])),_:1},8,["onClick"])])])])):(0,n.kq)("",!0)}t(2062);var _e=t.p+"img/icon-logo.svg",we={components:{TheButton:O},props:{modalIsOpen:Boolean,modalId:Number,roomId:Number},data(){return{name:"",imageUrl:null,fileName:null}},methods:{closeModal(){this.$emit("update:modal-is-open",!1),this.name=""},createNewProject(){const e={id:Date.now(),title:this.name,picture:this.setImage,rooms:[]};this.name.length>=3&&(this.$emit("createNewProject",e),this.name="",this.imageUrl=null,this.fileName=null,this.closeModal())},createNewRoom(){const e={roomId:this.roomId,id:Date.now(),roomTitle:this.name,picture:this.setImage,materials:[]};this.name.length>=3&&(this.$emit("createNewRoom",e),this.name="",this.imageUrl=null,this.fileName=null,this.closeModal())},createFunc(){1===this.modalId?(this.createNewProject(),this.nameValidation()):(this.createNewRoom(),this.nameValidation())},onFileChange(e){const o=e.target.files[0];this.fileName=e.target.files[0].name,this.imageUrl=URL.createObjectURL(o)},nameValidation(){this.name.length<=3?this.$refs.dangerous.classList.add("dangerous"):this.$refs.dangerous.classList.remove("dangerous")}},computed:{placeholder(){return 1===this.modalId?"Название проекта, например, «Квартира №1»":"Название комнаты, например, «Детская»"},setImage(){return null!==this.imageUrl?this.imageUrl:_e}}};const ge=(0,f.Z)(we,[["render",ve],["__scopeId","data-v-6446ae20"]]);var fe=ge,je=t(4161);const Ce={class:"loader"};function Ie(e,o,t,r,a,s){return(0,n.wg)(),(0,n.iD)("div",Ce)}var Me={};const be=(0,f.Z)(Me,[["render",Ie],["__scopeId","data-v-6bf1faf2"]]);var Pe=be,ke={components:{TheLoader:Pe,AppModal:fe,AppProjects:J,TheButton:O,AppSearch:C},data(){return{projects:[],searchedText:"",modalProjectIsOpen:!1,modalRoomIsOpen:!1,roomId:null,windowIsOpen:!1,currentProduct:"",url:"http://localhost:3001/projects/",object:{isDragging:!1,x:0,y:0}}},methods:{createNewProject(e){this.projects.push(e),je.Z.post(this.url,e).then((e=>console.log(e))).catch((e=>console.error(e)))},closeProject(){this.modalProjectIsOpen=!1,this.modalRoomIsOpen=!1,this.windowIsOpen=!1},addNewRoom(e){this.projects.map((o=>{o.id===e.roomId&&(o.rooms.push(e),console.log(o.id),je.Z.put(this.url+o.id,o).then((e=>{console.log("Данные успешно обновлены:",e.data)})).catch((e=>{console.error("Ошибка при обновлении данных:",e)})))}))},openCreateProjectModal(){this.modalProjectIsOpen=!this.modalProjectIsOpen,this.modalRoomIsOpen=!1},openCreateRoomModal(){this.modalRoomIsOpen=!this.modalRoomIsOpen,this.modalProjectIsOpen=!1},searchedData(e){this.searchedText=e},addSavedMaterial(e,o,t){console.log(e),this.projects.map((o=>{o.rooms.map((r=>{r.id===t&&(console.log("Материал: "+e+" добавлен!"),r.materials.push(e),je.Z.put(this.url+o.id,o).then((e=>{console.log("Данные успешно обновлены:",e.data)})).catch((e=>{console.error("Ошибка при обновлении данных:",e)})))}))}))},startDrag(e){this.object.isDragging=!0,this.object.prevX=e.clientX,this.object.prevY=e.clientY},drag(e){if(this.object.isDragging){const o=e.clientX-this.object.prevX,t=e.clientY-this.object.prevY;this.object.x+=o,this.object.y+=t,this.object.prevX=e.clientX,this.object.prevY=e.clientY}},stopDrag(){this.object.isDragging=!1},fetchingData(){je.Z.get(this.url).then((e=>{setTimeout((()=>{this.projects.push(...e.data)}),2e3)})).catch((e=>console.error(e)))}},computed:{filteredProjects(){return[...this.projects].filter((e=>e.title.toLowerCase().includes(this.searchedText.toLowerCase())))}},mounted(){console.log("Vue скрипт загружен !");const e=document.querySelectorAll("[data--catalog-product]");e.forEach((e=>{const o=e.querySelectorAll("[data-button-open]");o.forEach((o=>{o.addEventListener("click",(()=>{this.windowIsOpen=!0,this.currentProduct=e.querySelector(".article-product__title").textContent.replace(/\s /g,"")}))}))})),this.fetchingData(),window.addEventListener("keydown",(e=>{27===e.keyCode&&this.closeProject()}))}};const xe=(0,f.Z)(ke,[["render",h],["__scopeId","data-v-cb1690c8"]]);var Oe=xe,Ne=t(65),Re=(0,Ne.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const ye=(0,r.ri)(Oe);ye.use(Re).mount("#app")}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var a=o[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(o,r,n,a){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],a=e[d][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(l=!1,a<s&&(s=a));if(l){e.splice(d--,1);var i=n();void 0!==i&&(o=i)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,a,s=r[0],l=r[1],c=r[2],i=0;if(s.some((function(o){return 0!==e[o]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(c)var d=c(t)}for(o&&o(r);i<s.length;i++)a=s[i],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=self["webpackChunksave_project"]=self["webpackChunksave_project"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4724)}));r=t.O(r)})();
//# sourceMappingURL=app.js.map