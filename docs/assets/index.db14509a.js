const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};g();class c{constructor(e){this.position=e}update(e){}draw(e,t){}}var b="/PimPamShootIt/assets/background.723a4d2a.png";class w extends c{constructor(e,t={w:1300,h:2e3}){super(e),this.backgroundSize=t,this.backgroundImage=new Image,this.backgroundImage.src=b}draw(e,t){t.drawImage(this.backgroundImage,0,0,this.backgroundSize.h,this.backgroundSize.w)}}class y extends c{draw(e,t){const r=(1/e).toFixed(2);t.font="30px Montserrat",t.fillStyle="WHITE",t.fillText(`FPS: ${r}`,this.position.x,this.position.y)}}var S="/PimPamShootIt/assets/dartboard.633a5857.png",F="/PimPamShootIt/assets/dartboardPIM.606a6515.png";class p extends c{constructor(e={x:Math.floor(Math.random()*1800+100),y:Math.floor(Math.random()*1100+100)},t=Math.floor(Math.random()*700+200),r=Math.floor(Math.random()*100+130),a={w:r,h:r}){super(e),this.origin={x:e.x,y:e.y},this.maxSpeed=t,this.dartboardSpeed={x:t,y:t},this.dartboardSize=a,this.dartboardImage=new Image,this.dartboardImage2=new Image,this.dartboardImage.src=S,this.dartboardImage2.src=F,this.dartboardTimer=0,this.xFrame=0,this.yFrame=5,this.widthandheight=r,this.dartBoardRadius=r/2,this.pimpam=!1,this.notpimpam=!0}update(e){let t=this.origin.x+this.dartboardSpeed.x*e;t<=2e3-this.dartboardSize.w&&t>=this.dartboardSize.w&&(this.origin.x=t);let r=this.origin.y+this.dartboardSpeed.y*e;r<=1300-this.dartboardSize.h&&r>=this.dartboardSize.h&&(this.origin.y=r),Math.floor(Math.random()*900)<10&&(this.dartboardSpeed.x=this.dartboardSpeed.x*-1),Math.floor(Math.random()*900)<10&&(this.dartboardSpeed.y=this.dartboardSpeed.y*-1),this.pimpam===!0&&(this.dartboardSpeed.x=0,this.dartboardSpeed.y=0)}draw(e,t){let r=this.origin;t.translate(r.x,r.y),t.drawImage(this.dartboardImage,-this.dartboardSize.h/2,-this.dartboardSize.w/2,this.dartboardSize.h,this.dartboardSize.w),this.pimpam===!0&&t.drawImage(this.dartboardImage2,-this.dartboardSize.h/2,-this.dartboardSize.w/2,this.dartboardSize.h,this.dartboardSize.w)}}class x extends c{constructor(e){super({x:0,y:0}),this.currentDartboard=0,this.dartboards=[],this.currentAccuracy=0;let t=10;for(let r=0;r<t;r++)this.dartboards.push(new p)}}let m;const I=i=>{m=new x(i)};class k extends c{constructor(){super({x:600,y:80}),this.clicks=0,this.hits=0,this.accuracy=0,this.gameover=!1}draw(e,t){this.accuracy=this.hits/this.clicks*100,this.clicks===0&&(this.accuracy=100),t.beginPath(),t.fillStyle="#C24E00",t.fillRect(600,45,1e3,50),t.stroke(),t.closePath(),t.font="bold 30px Montserrat ",t.fillStyle="WHITE",t.fillText(` \u{1F3AF} TOTAL DE TIROS: ${this.clicks}  \u{1F525}\u{1F525}\u{1F525}\u{1F525}  TU PUNTERIA ES: ${this.accuracy.toFixed(1)} % \u{1F44C}`,this.position.x,this.position.y),this.hits===10&&(this.gameover=!0)}increment(e){e.addEventListener("mousedown",t=>{this.clicks++})}}window.onload=()=>{const i=document.getElementById("canvas"),e=i.getContext("2d");let t=f(i),r=t.actors,a=t.clicks,s=t.dartboards,n=0;const u=h=>{let l=(h-n)/1e3;if(n=h,r.forEach(o=>{o.update(l)}),e.clearRect(0,0,i.width,i.height),r.forEach(o=>{e.save(),o.draw(l,e),e.restore()}),!a.gameover)window.requestAnimationFrame(u);else{alert(`\u{1F389} \xA1Enhorabuena! \u{1F389} 
 \u{1F3AF} Tuviste una Punter\xEDa del ${a.accuracy.toFixed(1)} % En ${a.clicks} Disparos \u{1F3AF} 
  \u{1F3C6} Pulsa aceptar y supera tu Record \u{1F3C6}`);let o=f(i);r=o.actors,a=o.clicks,s=o.dartboards,window.requestAnimationFrame(u)}};window.requestAnimationFrame(u),i.addEventListener("mousedown",h=>{let l=h.offsetX*2,o=h.offsetY*2;s.forEach(d=>{Math.sqrt(Math.pow(l-d.origin.x,2)+Math.pow(o-d.origin.y,2))<d.widthandheight/2&&(d.pimpam=!0,d.pimpam&&d.notpimpam&&(a.hits++,d.notpimpam=!1))})})};const f=i=>{let e=new p;I(e);let t=[...m.dartboards],r=new k,a=[new w({x:0,y:0}),new y({x:30,y:30}),...t,m,r];return r.increment(i),r.hits=0,{actors:a,clicks:r,dartboards:t}};