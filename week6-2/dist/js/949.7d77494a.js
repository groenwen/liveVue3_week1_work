"use strict";(self["webpackChunkweek6_2"]=self["webpackChunkweek6_2"]||[]).push([[949],{2949:function(e,s,r){r.r(s),r.d(s,{default:function(){return k}});var t=r(3396),a=r(9242);const n={class:"container mt-5"},o={class:"row justify-content-center"},l=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),i={class:"col-6"},u={id:"form",class:"form-signin"},c={class:"form-floating mb-3"},d=(0,t._)("label",{for:"username"},"Email address",-1),m={class:"form-floating"},p=(0,t._)("label",{for:"password"},"Password",-1),f=(0,t._)("a",{href:"/",class:"mt-5 d-inline-block"},"回首頁",-1),h=(0,t._)("p",{class:"mt-5 mb-3 text-muted"},"© 2022~∞ - Groen",-1);function w(e,s,r,w,_,b){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",o,[l,(0,t._)("div",i,[(0,t._)("form",u,[(0,t._)("div",c,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>_.user.username=e),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[a.nr,_.user.username]]),d]),(0,t._)("div",m,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>_.user.password=e),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[a.nr,_.user.password]]),p]),(0,t._)("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:s[2]||(s[2]=(0,a.iM)(((...e)=>b.login&&b.login(...e)),["prevent"]))}," 登入 ")])])]),f,h])}var _={data(){return{user:{username:"",password:""}}},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:s,expired:r}=e.data;document.cookie=`groenToken=${s};expires=${new Date(r)};path=/`,this.$router.push("/admin")})).catch((e=>{alert(e.data.message)}))}}},b=r(89);const g=(0,b.Z)(_,[["render",w]]);var k=g}}]);
//# sourceMappingURL=949.7d77494a.js.map