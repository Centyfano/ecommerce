(self.webpackChunkecomm_redo=self.webpackChunkecomm_redo||[]).push([[767],{7767:(t,r,n)=>{"use strict";n.r(r),n.d(r,{UserModule:()=>E});var o=n(1116),e=n(5424),i=n(1041),s=n(5366),c=n(1160);function a(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1,"Email is required"),s.qZA())}function g(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Email must be a valid email address "),s.qZA())}function d(t,r){if(1&t&&(s.TgZ(0,"div",26),s.YNc(1,a,2,0,"div",27),s.YNc(2,g,2,0,"div",27),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.email.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.email.errors.email)}}function l(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1,"Password is required"),s.qZA())}function u(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Password must be at least 6 characters "),s.qZA())}function m(t,r){if(1&t&&(s.TgZ(0,"div",26),s.YNc(1,l,2,0,"div",27),s.YNc(2,u,2,0,"div",27),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.password.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.password.errors.minlength)}}function f(t,r){if(1&t&&(s.TgZ(0,"div",28),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.Q6J("ngClass",t.errors?"errors":""),s.xp6(1),s.Oqu(t.usererror)}}function p(t,r){1&t&&s._UZ(0,"span",29)}const b=function(){return["/user/login"]},Z=function(){return["/user/register"]},h=function(t){return{"is-invalid":t}},_=function(){return["/user/account/password"]};let v=(()=>{class t{constructor(t,r,n){this.formBuilder=t,this.account=r,this.router=n,this.submitted=!1,this.loading=!1}ngOnInit(){this.userLoginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]],checkbox:[""]})}get f(){return this.userLoginForm.controls}onSubmit(){this.userLoginForm.invalid||(this.loading=!0,this.submitted=!0,this.account.login(this.f.email.value,this.f.password.value).subscribe({next:t=>{const r=JSON.parse(t);this.account.userToken=r.token,localStorage.setItem("token",r.token),this.router.navigateByUrl("/user/account")},error:t=>{console.log(t),this.errors=t.errors,t.errors.meta.password?this.usererror=t.errors.meta.password[0]:t.errors.meta.email&&(this.usererror=t.errors.meta.email[0]),this.loading=!1,this.loading=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(s.Y36(i.qu),s.Y36(c.B),s.Y36(e.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:42,vars:19,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-12"],["role","group","aria-label","User Account",1,"btn-group","d-flex"],["type","button",1,"btn","btn-lg","login","border","top-btn",3,"routerLink"],["type","button",1,"btn","btn-lg","register","border","top-btn",3,"routerLink"],[1,"form-login","pt-5","pb-3",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-row"],[1,"col"],["type","email","formControlName","email","placeholder","Email Address",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"sr-only"],["type","password","formControlName","password","placeholder","Password",1,"form-control",3,"ngClass"],["class","invalid-feedback",3,"ngClass",4,"ngIf"],[1,"form-group","form-check","checkbox","mb-3"],["type","checkbox","formControlName","checkbox","id","rememberMe",1,"form-check-input"],["for","acceptTerms",1,"form-check-label"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-default"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"my-3","strike"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-fb"],["type","submit",1,"btn","btn-lg","btn-outline-dark","btn-block"],[1,"first-time","mt-5","text-center"],[3,"routerLink"],[1,"first-time","mt-2","text-center"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-feedback",3,"ngClass"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,r){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"button",4),s._uU(5," Login "),s.qZA(),s.TgZ(6,"button",5),s._uU(7," Register "),s.qZA(),s.qZA(),s.TgZ(8,"form",6),s.NdJ("ngSubmit",function(){return r.onSubmit()}),s.TgZ(9,"div",7),s.TgZ(10,"div",8),s.TgZ(11,"div",9),s._UZ(12,"input",10),s.qZA(),s.YNc(13,d,3,2,"div",11),s.qZA(),s.qZA(),s.TgZ(14,"div",7),s.TgZ(15,"div",8),s.TgZ(16,"label",12),s._uU(17,"Password"),s.qZA(),s._UZ(18,"input",13),s.YNc(19,m,3,2,"div",11),s.qZA(),s.YNc(20,f,2,2,"div",14),s.qZA(),s.TgZ(21,"div",15),s._UZ(22,"input",16),s.TgZ(23,"label",17),s._uU(24,"Remember Me"),s.qZA(),s.qZA(),s.TgZ(25,"button",18),s.YNc(26,p,1,0,"span",19),s._uU(27," Sign in "),s.qZA(),s.TgZ(28,"div",20),s.TgZ(29,"span"),s._uU(30,"or"),s.qZA(),s.qZA(),s.TgZ(31,"button",21),s._uU(32," Login with Facebook "),s.qZA(),s.TgZ(33,"button",22),s._uU(34," Login with Google "),s.qZA(),s.TgZ(35,"p",23),s.TgZ(36,"a",24),s._uU(37,"Forgot Password"),s.qZA(),s.qZA(),s.TgZ(38,"p",25),s._uU(39," First time here? "),s.TgZ(40,"a",24),s._uU(41,"Register"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("routerLink",s.DdM(11,b)),s.xp6(2),s.Q6J("routerLink",s.DdM(12,Z)),s.xp6(2),s.Q6J("formGroup",r.userLoginForm),s.xp6(4),s.Q6J("ngClass",s.VKq(13,h,r.submitted&&r.f.email.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.email.errors),s.xp6(5),s.Q6J("ngClass",s.VKq(15,h,r.submitted&&r.f.password.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.password.errors),s.xp6(1),s.Q6J("ngIf",r.errors),s.xp6(6),s.Q6J("ngIf",r.loading),s.xp6(10),s.Q6J("routerLink",s.DdM(17,_)),s.xp6(4),s.Q6J("routerLink",s.DdM(18,Z)))},directives:[e.rH,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,o.mk,o.O5,i.Wl,e.yS],styles:['.container[_ngcontent-%COMP%]{background:#f5f5f5}.top-btn[_ngcontent-%COMP%]{background-color:var(--theme-color,orange)}.login[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]{color:#fff;background:var(--theme-color,orange);border-width:2px!important;border-radius:2px}.login[_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]:hover, .register[_ngcontent-%COMP%]:active, .register[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]:hover{background:#fff;color:var(--theme-color,orange)}.form-login[_ngcontent-%COMP%]{width:100%;padding:1px;margin:0 auto}.form-login[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;height:auto;padding:.7em;font-size:1rem}.form-login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{z-index:2}.form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:0;border-bottom:.1em solid #c0c0c6;outline-color:#c0c0c6}.form-login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:1em;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:.7em;border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-default[_ngcontent-%COMP%]{background-color:var(--theme-color,orange);outline-color:var(--theme-color,orange);border-color:var(--theme-color,orange)}.btn-default[_ngcontent-%COMP%]:hover{color:var(--theme-color,orange);background-color:initial}.btn-fb[_ngcontent-%COMP%]:hover{background-color:initial;color:#1e7df7}.first-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color,orange);font-weight:700}.first-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.strike[_ngcontent-%COMP%]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after, .strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;width:9999px;height:.1em;background:#c0c0c6}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{right:100%;margin-right:1em}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after{left:100%;margin-left:1em}.errors[_ngcontent-%COMP%]{display:block;text-align:center}']}),t})();var C=n(6231);function P(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Name is required "),s.qZA())}function q(t,r){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,P,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.name.errors.required)}}function M(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Last Name is required "),s.qZA())}function k(t,r){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,M,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.lastName.errors.required)}}function O(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1,"Email is required"),s.qZA())}function w(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Email must be a valid email address "),s.qZA())}function x(t,r){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,O,2,0,"div",25),s.YNc(2,w,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.email.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.email.errors.email)}}function A(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1,"Password is required"),s.qZA())}function T(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Password must be at least 6 characters "),s.qZA())}function U(t,r){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,A,2,0,"div",25),s.YNc(2,T,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.password.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.password.errors.minlength)}}function J(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Confirm Password is required "),s.qZA())}function y(t,r){1&t&&(s.TgZ(0,"div"),s._uU(1," Passwords must match "),s.qZA())}function I(t,r){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,J,2,0,"div",25),s.YNc(2,y,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.confirmPassword.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.confirmPassword.errors.mustMatch)}}function N(t,r){1&t&&s._UZ(0,"span",26)}const Q=function(){return["/user/login"]},Y=function(){return["/user/register"]},L=function(t){return{"is-invalid":t}};let F=(()=>{class t{constructor(t,r,n){this.formBuilder=t,this.router=r,this.account=n,this.submitted=!1,this.loading=!1}ngOnInit(){this.userRegisterForm=this.formBuilder.group({name:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]],confirmPassword:["",i.kI.required]},{validators:[(0,C.Y)("password","confirmPassword")]})}get f(){return this.userRegisterForm.controls}capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)}onSubmit(){this.submitted=!0,this.userRegisterForm.invalid||(this.loading=!0,this.account.register(this.f.name.value,this.f.email.value,this.f.password.value,this.f.confirmPassword.value).subscribe({next:()=>{this.loading=!1,this.router.navigate(["/user/login"])},error:t=>{this.loading=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(s.Y36(i.qu),s.Y36(e.F0),s.Y36(c.B))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-register"]],decls:47,vars:25,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-12"],["role","group","aria-label","User Account",1,"btn-group","d-flex"],["type","button",1,"btn","btn-lg","login","border","top-btn",3,"routerLink"],["type","button",1,"btn","btn-lg","register","border","top-btn",3,"routerLink"],[1,"form-register","pt-5","pb-3",3,"formGroup","ngSubmit"],[1,"h3","mb-4","font-weight-normal"],[1,"form-group"],[1,"form-row","mb-3"],[1,"col"],[1,"sr-only"],["type","text","formControlName","name","placeholder","Name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"form-row"],["type","email","formControlName","email","placeholder","Email Address",1,"form-control",3,"ngClass"],["type","password","formControlName","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-default","mt-2"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"my-3","strike"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-fb"],[1,"with-account","mt-5"],[3,"routerLink"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,r){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"button",4),s._uU(5," Login "),s.qZA(),s.TgZ(6,"button",5),s._uU(7," Register "),s.qZA(),s.qZA(),s.TgZ(8,"form",6),s.NdJ("ngSubmit",function(){return r.onSubmit()}),s.TgZ(9,"h1",7),s._uU(10," Please enter your details to register "),s.qZA(),s.TgZ(11,"div",8),s.TgZ(12,"div",9),s.TgZ(13,"div",10),s.TgZ(14,"label",11),s._uU(15,"Name"),s.qZA(),s._UZ(16,"input",12),s.qZA(),s.YNc(17,q,2,1,"div",13),s.YNc(18,k,2,1,"div",13),s.qZA(),s.qZA(),s.TgZ(19,"div",8),s.TgZ(20,"div",14),s.TgZ(21,"div",10),s._UZ(22,"input",15),s.qZA(),s.YNc(23,x,3,2,"div",13),s.qZA(),s.qZA(),s.TgZ(24,"div",8),s.TgZ(25,"div",14),s.TgZ(26,"label",11),s._uU(27,"Password"),s.qZA(),s._UZ(28,"input",16),s.YNc(29,U,3,2,"div",13),s.qZA(),s.TgZ(30,"div",14),s.TgZ(31,"label",11),s._uU(32,"Confirm Password"),s.qZA(),s._UZ(33,"input",17),s.YNc(34,I,3,2,"div",13),s.qZA(),s.qZA(),s.TgZ(35,"button",18),s.YNc(36,N,1,0,"span",19),s._uU(37," Register "),s.qZA(),s.TgZ(38,"div",20),s.TgZ(39,"span"),s._uU(40,"or"),s.qZA(),s.qZA(),s.TgZ(41,"button",21),s._uU(42," Register with Facebook "),s.qZA(),s.TgZ(43,"p",22),s._uU(44," Have an account? "),s.TgZ(45,"a",23),s._uU(46,"Login"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("routerLink",s.DdM(14,Q)),s.xp6(2),s.Q6J("routerLink",s.DdM(15,Y)),s.xp6(2),s.Q6J("formGroup",r.userRegisterForm),s.xp6(8),s.Q6J("ngClass",s.VKq(16,L,r.submitted&&r.f.name.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.name.errors),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.lastName.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(18,L,r.submitted&&r.f.email.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.email.errors),s.xp6(5),s.Q6J("ngClass",s.VKq(20,L,r.submitted&&r.f.password.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.password.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(22,L,r.submitted&&r.f.confirmPassword.errors)),s.xp6(1),s.Q6J("ngIf",r.submitted&&r.f.confirmPassword.errors),s.xp6(2),s.Q6J("ngIf",r.loading),s.xp6(9),s.Q6J("routerLink",s.DdM(24,Q)))},directives:[e.rH,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,o.mk,o.O5,e.yS],styles:['.container[_ngcontent-%COMP%]{background:#f5f5f5}.top-btn[_ngcontent-%COMP%]{background-color:var(--theme-color,orange)}.login[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]{color:#fff;background:var(--theme-color,orange);border-width:2px!important;border-radius:2px}.login[_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]:hover, .register[_ngcontent-%COMP%]:active, .register[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]:hover{background:#fff;color:var(--theme-color,orange)}.form-register[_ngcontent-%COMP%]{width:100%;padding:1px;margin:0 auto}.form-register[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-register[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;height:auto;padding:.7em;font-size:1rem}.form-register[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{z-index:2}.form-register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:0;border-bottom:.1em solid #c0c0c6;outline-color:#c0c0c6}.form-register[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:1em;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-register[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:.7em;border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-default[_ngcontent-%COMP%]{background-color:var(--theme-color,orange);outline-color:var(--theme-color,orange);border-color:var(--theme-color,orange)}.btn-default[_ngcontent-%COMP%]:hover{color:var(--theme-color,orange);background-color:initial}.btn-fb[_ngcontent-%COMP%]:hover{background-color:initial;color:#1e7df7}.with-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color,orange);font-weight:700}.with-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.strike[_ngcontent-%COMP%]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after, .strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;width:9999px;height:.1em;background:#c0c0c6}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{right:100%;margin-right:1em}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after{left:100%;margin-left:1em}']}),t})();var S=n(2457),R=n(2370);let z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-user-default"]],decls:4,vars:0,consts:[[1,"container"]],template:function(t,r){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"main",0),s._UZ(2,"router-outlet"),s.qZA(),s._UZ(3,"app-footer"))},directives:[S.G,e.lC,R.c],styles:[""]}),t})();var B=n(2345);const D=[{path:"account",loadChildren:()=>n.e(574).then(n.bind(n,6574)).then(t=>t.AccountModule)},{path:"",component:z,children:[{path:"login",component:v},{path:"register",component:F},{path:"",redirectTo:"login",pathMatch:"full"}]}];let E=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,i.u5,B.m,i.UX,e.Bz.forChild(D)]]}),t})()}}]);