"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[16],{16:function(t,s,r){r.r(s),r.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",[s("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(s){return t.$router.back()}}}),s("van-search",{attrs:{autofocus:"",background:"#f1f1f2","show-action":"",placeholder:"请输入搜索关键词",clearable:""},scopedSlots:t._u([{key:"action",fn:function(){return[s("button",{on:{click:function(s){return t.goSearch(t.search)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.search,callback:function(s){t.search=s},expression:"search"}}),t.history.length>0?s("div",{staticClass:"search-history"},[s("p",[t._v("最近搜索")]),s("van-icon",{attrs:{name:"delete-o"},on:{click:t.empty}})],1):t._e(),s("div",{staticClass:"list"},t._l(t.history,(function(r){return s("div",{key:r,staticClass:"list-item",on:{click:function(s){return t.goSearch(r)}}},[t._v(t._s(r))])})),0)],1)},i=[],n=(r(4114),r(2272)),a={name:"SerachIndex",data(){return{search:"",history:(0,n.is)()}},methods:{goSearch(t){""!==t.trim()&&(this.history=this.history.filter((s=>s!==t)),this.history.unshift(t),(0,n.Vk)(this.history),this.$router.push(`/searchlist?search=${t}`))},empty(){this.history=[],(0,n.Vk)(this.history)}}},c=a,o=r(1656),h=(0,o.A)(c,e,i,!1,null,"902586b2",null),u=h.exports}}]);
//# sourceMappingURL=16.8f028bd6.js.map