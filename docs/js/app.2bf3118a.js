(function(){"use strict";var t={8345:function(t,e,s){var r=s(6848),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),e("main",{staticClass:"main"},[e("SideBar",{staticClass:"main__list"}),e("UserCard",{staticClass:"main__card"})],1)])},i=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("h1",{staticClass:"header__logo"},[t._v("Жилфонд")]),e("span",{staticClass:"header__title"},[t._v("Пользователь")])])}],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__search"},[e("h2",[t._v("Поиск сотрудников")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"sidebar__input",attrs:{type:"text",placeholder:"Введите Id или имя"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),e("div",{staticClass:"sidebar__result-list"},[e("h2",[t._v("Результаты")]),t.isLoading?e("div",{staticClass:"sidebar__loading"}):t.isUsers?e("div",t._l(t.userList,(function(t){return e("MiniUserCard",{key:t.id,staticClass:"sidebar__result-item",class:{"sidebar__result-item--active":t.active},attrs:{"user-data":t}})})),1):e("div",{staticClass:"sidebar__result-empty"},[t.searchText?e("span",[t._v("ничего не найдено")]):e("span",[t._v("начните поиск")])])])])},c=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:{"card--active":t.isActive},on:{click:function(e){return t.choiceUser(t.userData.id)}}},[e("div",{staticClass:"card__photo"},[e("img",{staticClass:"card__img",attrs:{alt:t.userData.username,src:s(9850)}})]),e("div",{staticClass:"card__info"},[e("div",{staticClass:"card__name"},[t._v(" "+t._s(t.userData.username)+" ")]),e("div",{staticClass:"card__email"},[t._v(" "+t._s(t.userData.email)+" ")])])])},u=[],d={name:"MiniUserCard",props:{userData:Object},computed:{isActive(){return this.$store.getters.getActiveUserId===this.userData.id}},methods:{choiceUser:function(t){this.$store.dispatch("setActiveUserId",t)}}},l=d,_=s(1656),v=(0,_.A)(l,o,u,!1,null,"287b9019",null),m=v.exports,p={name:"SideBar",components:{MiniUserCard:m},data(){return{searchText:"",lastSearchArr:[]}},computed:{searchArr(){return this.searchText.trim().split(",").map((t=>t.trim()))},clearedSearchArr(){return[...new Set(this.searchArr.filter((t=>""!==t)))]},userList(){return this.$store.getters.getUsersList},isUsers(){return!!this.userList.length},isLoading(){return this.$store.getters.getIsLoading}},watch:{clearedSearchArr:function(){const t=this.clearedSearchArr.sort();t.toString()!==this.lastSearchArr&&(this.lastSearchArr=t.toString(),this.$store.dispatch("loadUsers",this.searchArr))}}},h=p,f=(0,_.A)(h,n,c,!1,null,"34345a4e",null),g=f.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t.error?e("div",{staticClass:"card__empty"},[e("span",{staticClass:"card__empty-message"},[t._v("Ошибка: "+t._s(t.error))])]):t.userData?e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__photo"},[e("img",{staticClass:"card__img",attrs:{alt:t.userData.username,src:s(9850)}})]),e("div",{staticClass:"card__info"},[e("div",{staticClass:"card__name"},[t._v(" "+t._s(t.userData.name)+" ")]),e("div",{staticClass:"card__contacts"},[e("div",{staticClass:"card__contact"},[e("b",[t._v("email:")]),t._v("  "+t._s(t.userData.email)+" ")]),e("div",{staticClass:"card__contact"},[e("b",[t._v("phone:")]),t._v("  "+t._s(t.userData.phone)+" ")])]),t._m(0)])]):e("div",{staticClass:"card__empty"},[e("span",{staticClass:"card__empty-message"},[t._v("Выберите сотрудника, чтобы посмотреть его профиль")])])])},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__about"},[e("div",{staticClass:"card__about-title"},[e("b",[t._v("О себе:")])]),e("div",{staticClass:"card__about-text"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])}],U={name:"UserCard",computed:{userData(){return this.$store.getters.getActiveUser},error(){return this.$store.getters.getError}}},A=U,y=(0,_.A)(A,C,b,!1,null,"02d90c17",null),x=y.exports,w={name:"App",components:{SideBar:g,UserCard:x}},I=w,L=(0,_.A)(I,a,i,!1,null,"f89d1402",null),S=L.exports,D=s(3518);r.Ay.use(D.Ay);const O="https://jsonplaceholder.typicode.com/users",$={id:"id",userName:"username"},j=(t,e)=>{const s=e.map((e=>`${t}=${e}`)).join("&");return s},T=async(t,e)=>{try{const s=await fetch(`${O}?${j(t,e)}`).then((t=>t.json()));return s}catch(s){return s}};var k=new D.Ay.Store({state:{usersList:[],loadingInProgress:!1,activeUserId:"",error:null},mutations:{setLoadingStatus(t,e){t.loadingInProgress=e},setUsers(t,e){t.usersList=e},setActiveUserId(t,e){t.activeUserId=e},setError(t,e){t.error=e}},getters:{getUsersList(t){return t.usersList.map((e=>(e.active=!1,e.id===t.activeUserId&&(e.active=!0),e)))},getActiveUserId(t){return t.activeUserId},getActiveUser(t){return t.usersList.find((e=>e.id===t.activeUserId))},getIsLoading(t){return t.loadingInProgress},getError(t){return t.error}},actions:{async loadUsers({commit:t},e){if(0!==e.length)try{t("setLoadingStatus",!0),t("setError",null);const s=await T($.userName,e),r=await T($.id,e),a=await Promise.all([...s,...r]),i=a.map((t=>t.id)),n=[...new Set(i)],c=n.map((t=>a.find((e=>e.id===t))));t("setUsers",c)}catch(s){console.error("Ошибка запроса:",s),t("setError",s)}finally{t("setLoadingStatus",!1)}else t("setUsers",[])},setActiveUserId({commit:t},e){t("setActiveUserId",e)}}});r.Ay.config.productionTip=!1,new r.Ay({store:k,render:t=>t(S)}).$mount("#app")},9850:function(t,e,s){t.exports=s.p+"img/default-photo.f819fd46.svg"}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,i){if(!r){var n=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],i=t[d][2];for(var c=!0,o=0;o<r.length;o++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](r[o])}))?r.splice(o--,1):(c=!1,i<n&&(n=i));if(c){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p=""}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,n=r[0],c=r[1],o=r[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(a in c)s.o(c,a)&&(s.m[a]=c[a]);if(o)var d=o(s)}for(e&&e(r);u<n.length;u++)i=n[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},r=self["webpackChunkzhilfond_test_task"]=self["webpackChunkzhilfond_test_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(8345)}));r=s.O(r)})();
//# sourceMappingURL=app.2bf3118a.js.map