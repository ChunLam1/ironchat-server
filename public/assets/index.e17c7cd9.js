var Y=Object.defineProperty,Q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var U=(s,t,n)=>t in s?Y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,y=(s,t)=>{for(var n in t||(t={}))q.call(t,n)&&U(s,n,t[n]);if(B)for(var n of B(t))M.call(t,n)&&U(s,n,t[n]);return s},x=(s,t)=>Q(s,z(t));import{r as l,a as Z,j as I,u as P,R as V,F as K,f as _,N as k,L as $,b as ee,O as se,l as te,c as ne,d as ae,e as R,g as re,B as oe}from"./vendor.7a6aa371.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};ie();const W=l.exports.createContext(),N=()=>l.exports.useContext(W);console.log("hip","https://deploy-ironchat.herokuapp.com");const A=Z.create({baseURL:"https://deploy-ironchat.herokuapp.com",withCredentials:!0});//! Error handling to use in the catch
function T(s){throw s.response.data&&console.log(s.response&&s.response.data),s}const f=x(y({},A),{signup(s){return A.post("/api/auth/signup",s).then(t=>t.data).catch(T)},isLoggedIn(s){return A.get("/api/auth/me",{headers:{Authorization:`Bearer ${s}`}}).then(t=>t.data).catch(T)},signin(s){return A.post("/api/auth/signin",s).then(t=>t.data).catch(T)}}),e=I.exports.jsx,o=I.exports.jsxs,L=I.exports.Fragment,le=({userId:s,setServers:t})=>{const[n,i]=l.exports.useState("");return e(L,{children:e("form",{onSubmit:async r=>{r.preventDefault();try{const d=await f.post("/server",{name:n,participants:s,admins:s});t(g=>[...g,d.data])}catch{console.error(r)}},children:o("div",{children:[e("label",{htmlFor:"name",children:"Server's name"}),e("input",{type:"text",name:"name",value:n,onChange:r=>i(r.target.value)}),e("button",{children:"Create server"})]})})})},j=()=>{const{isLoading:s,currentUser:t,isLoggedIn:n,removeUser:i}=N(),[a,r]=l.exports.useState("");return l.exports.useEffect(async()=>{if(!s)try{r(t._id)}catch(d){console.error(d)}},[s]),e("nav",{className:"NavMain",children:n&&e(L,{children:e("button",{onClick:i,children:"Log-Out"})})})},O=s=>{const[t,n]=l.exports.useState(s);return[t,a=>{n(x(y({},t),{[a.target.name]:a.target.value}))}]},ce=()=>{const[{email:s,password:t},n]=O({email:"",password:""}),[i,a]=l.exports.useState(null),r=P(),{storeToken:d,authenticateUser:g}=N(),u=h=>{h.preventDefault(),f.signin({email:s,password:t}).then(m=>{d(m.authToken),g(),r("/")}).catch(m=>{a(m.response.data)})};return o("div",{className:"signinForm",children:[i&&e("h3",{className:"error",children:i.message}),e("h2",{children:"Signin"}),o("form",{onSubmit:u,className:"form1",children:[o("div",{children:[e("label",{htmlFor:"email",children:"Email: "}),e("input",{className:"signinput",type:"email",id:"email",name:"email",onChange:n,value:s,autoComplete:"username"})]}),o("div",{children:[e("label",{htmlFor:"password",children:"Password: "}),e("input",{className:"signinput",type:"password",id:"password",name:"password",onChange:n,value:t,autoComplete:"current-password"})]}),e("button",{className:"btnsub",children:"Submit"})]})]})},de=()=>{const[s,t]=O({name:"",email:"",password:""}),[n,i]=l.exports.useState(null),a=P(),r=d=>{d.preventDefault(),f.signup(s).then(()=>{a("/signin")}).catch(g=>{i(g.response.data)})};return o("div",{className:"signinForm",children:[n&&e("h3",{className:"error",children:n.message}),e("h2",{children:"Signup"}),o("form",{onSubmit:r,className:"form1",children:[o("div",{children:[e("label",{htmlFor:"name",children:"Name :"}),e("input",{className:"signinput",onChange:t,value:s.name,type:"text",id:"name",name:"name"})]}),o("div",{children:[e("label",{htmlFor:"email",children:"Email :"}),e("input",{className:"signinput",onChange:t,value:s.email,type:"email",id:"email",name:"email"})]}),o("div",{children:[e("label",{htmlFor:"password",children:"Password :"}),e("input",{className:"signinput",onChange:t,value:s.password,type:"password",id:"password",name:"password"})]}),e("button",{className:"btnsub",children:"Submit"})]})]})};var ue="data:image/png;base64,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";function he({clbk:s,avatar:t=""}){const n=V.createRef(),i=()=>{n.current.click()},{currentUser:a}=N();return console.log("JE SUIS DABS AVANTAR",a),console.log("AVVVVVVVVVVVARTAR",t),o("div",{className:"is-clickable icon-avatar",title:"change avatar",children:[t&&e("img",{style:{width:250},src:t,alt:"user avatar"}),e("input",{ref:n,type:"file",className:"is-hidden",onChange:s}),e(K,{onClick:i,className:"is-clickable fa-lg",icon:_})]})}const w=()=>{const{currentUser:s,storeToken:t}=N(),[{name:n,image:i,imageTmp:a},r]=l.exports.useState({name:s.name,image:"",imageTmp:""}),d=s._id,g=m=>{m.persist(),r(p=>x(y({},p),{[m.target.id]:m.target.value}))},u=async m=>{m.preventDefault();const p=new FormData;p.append("name",n),p.append("image",i),console.log(p);try{await f.patch(`/profile/${d}`,p).then(({data:C})=>{t(C.newAuthToken)})}catch(C){console.error(C)}},h=m=>{const p=new FileReader;p.onloadend=()=>{const C=p.result;r(E=>x(y({},E),{image:m,imageTmp:C}))},p.readAsDataURL(m)};return o("div",{children:[e(k,{className:"logo",to:"/",children:"IronChat"}),o("form",{onSubmit:u,onChange:g,children:[e("label",{className:"label",htmlFor:"image"}),e(he,{avatar:a||(s==null?void 0:s.image),clbk:m=>h(m.target.files[0]),id:"image"}),e("input",{style:{borderRadius:"50px",border:"none",cursor:"pointer"},type:"text",defaultValue:n,id:"name",name:"name"}),e("button",{style:{borderRadius:"50px"},children:"Ok!!"})]})]})},me=()=>{const[s,t]=l.exports.useState(!1),[n,i]=l.exports.useState([]),{isLoggedIn:a}=N(),[r,d]=l.exports.useState(!1),[g,u]=l.exports.useState(!1);return l.exports.useEffect(()=>{f.get("/server/").then(h=>{i(h.data.server)}).catch(h=>console.log(h))},[]),e(L,{children:e("div",{className:"server",children:a?o("div",{children:[o("div",{className:"navLP",children:[e("div",{className:"divLogo",children:e(k,{className:"logo",to:"/",children:"IronChat"})}),o("div",{className:"homeicone",children:[e("i",{onClick:()=>u(!g),class:"fa-solid fa-plus",style:{fontSize:"30px"}}),e("i",{onClick:()=>d(!r),className:"fas fa-user-circle",style:{fontSize:"30px"}}),g?e("div",{className:"servdiv",children:e(le,{setServers:i})}):null,r?o("div",{className:"profile",children:[e(w,{}),e(j,{})]}):null]})]}),e("div",{className:"serverContainer",children:n.map((h,m)=>e("div",{className:"serverContainerChild",children:o($,{to:`/server/${h._id}`,children:[e("img",{className:"serverLogo",src:ue,alt:"serverLogo"}),e("p",{className:"serverIcone",children:h.name})]},h._id)},m))})]}):e(L,{children:e("div",{className:"home",children:s?o(L,{children:[e(de,{}),e("span",{className:"register",onClick:()=>t(!s),children:"Already have an account?"})]}):o(L,{children:[e(ce,{}),e("span",{className:"register",onClick:()=>t(!s),children:"Don't have an account?"})]})})})})})},ge=()=>{const{isLoggedIn:s,isLoading:t}=N();return t?e("p",{children:"Loading..."}):s?e(se,{}):e(ee,{to:"/signin"})};console.log("hop","http://localhost:4200");const F=te("http://localhost:4200"),pe=()=>{const[s,t]=l.exports.useState([]),[n,i]=l.exports.useState({}),[a,r]=l.exports.useState(!1),[d,g]=l.exports.useState({}),u=l.exports.useRef(""),h=ne(),{currentUser:m}=N(),[p,C]=l.exports.useState(!1),E=c=>{console.log("je suis fetchmEssage et j'ai recu",c),f.get(`/server/${h.id}/messages`).then(v=>t(v.data.messages)).catch(v=>console.error(v))},D=c=>{console.error("here error backend",c)};l.exports.useEffect(()=>{f.get(`/server/${h.id}`).then(c=>{F.on("error-backend",D),F.on("message-stored",v=>E(v||"pouet")),i(c.data.server)}).catch(c=>console.error(c))},[]),l.exports.useEffect(()=>{E()},[n]);const H=c=>{c.preventDefault();const v=u.current.value;F.emit("message",{serverId:h.id,userId:m._id,content:v}),u.current.value=""},X=c=>{f.delete(`${{}.VITE_APP_BACKEND_URL}/server/message/${c}`).then(v=>{console.log("------------------------",v);const b=s.filter(S=>S._id!==c);console.log("new message",b),t(b)}).catch(v=>console.log(v))},J=c=>{u.current.value=c.content,u.current.focus(),r(!a),g(c)},G=c=>{c.preventDefault(),r(!a);const v=d._id;console.log(d);const b=u.current.value;f.patch(`${{}.VITE_APP_BACKEND_URL}/server/message/${v}`,{content:b}).then(S=>{u.current.value="",console.log(S)}).catch(S=>console.log(S))};return o("div",{children:[o("div",{className:"navLP",children:[e("div",{className:"divLogo",children:e(k,{className:"logo",to:"/",children:"IronChat"})}),e("div",{className:"homeicone",children:e("i",{onClick:()=>C(!p),className:"fas fa-user-circle",style:{fontSize:"30px"}})})]}),p?o("div",{className:"profile",children:[e(w,{}),e(j,{})]}):null,o("h1",{children:["Server name: ",n.name]}),e("ul",{id:"messages",children:s.map(c=>o("li",{children:[o("b",{children:[c.userId.name," : "]}),o("div",{children:[c.content,o("div",{className:"message-edit",children:[e("i",{className:"fas fa-trash",onClick:()=>X(c._id)}),e("i",{className:"fas fa-pencil",onClick:()=>J(c)})]})]})]},c._id))}),o("form",{id:"form",onSubmit:a?G:H,children:[e("input",{id:"input",autoComplete:"off",ref:u}),e("button",{children:"Send"})]})]})};function ve(){return e("div",{className:"App",children:o(ae,{children:[e(R,{path:"/",element:e(me,{})}),o(R,{element:e(ge,{}),children:[e(R,{path:"/server/:id",element:e(pe,{})}),e(R,{path:"/profile",element:e(w,{})})]})]})})}const fe=({children:s})=>{const[t,n]=l.exports.useState({currentUser:null,isLoading:!0,isLoggedIn:!1});l.exports.useEffect(()=>{i()},[]);const i=()=>{const u=localStorage.getItem("authToken");u?f.isLoggedIn(u).then(h=>{n({currentUser:h,isLoading:!1,isLoggedIn:!0})}).catch(h=>{n({currentUser:null,isLoading:!1,isLoggedIn:!1})}):n({currentUser:null,isLoading:!1,isLoggedIn:!1})},a=()=>{r(),i()},r=()=>{localStorage.removeItem("authToken")},d=u=>{localStorage.setItem("authToken",u),i()},g={currentUser:t.currentUser,isLoading:t.isLoading,isLoggedIn:t.isLoggedIn,removeUser:a,storeToken:d,authenticateUser:i};return e(W.Provider,{value:g,children:s})};re.render(e(V.StrictMode,{children:e(oe,{children:e(fe,{children:e(ve,{})})})}),document.getElementById("root"));