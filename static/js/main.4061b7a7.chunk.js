(this["webpackJsonpface-recognition-sandbox"]=this["webpackJsonpface-recognition-sandbox"]||[]).push([[0],{13:function(e,n,t){e.exports=t(31)},18:function(e,n,t){},26:function(e,n){},27:function(e,n){},28:function(e,n){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(12),i=t.n(o),c=(t(18),t(4)),u=t.n(c),s=t(7),d=t(3),l=(t(30),function(){var e=Object(s.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={audio:!1,video:{}},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:n.srcObject=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()),f={inputSize:224,scoreThreshold:.5};function m(e,n,t){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(u.a.mark((function e(n,t,r){var a,o,i,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.c(n,new d.a(f)).withFaceLandmarks();case 2:if(!((a=e.sent).length<=0)){e.next=5;break}return e.abrupt("return",window.requestAnimationFrame((function(){return m(n,t,r)})));case 5:if(o=t.getContext("2d")){e.next=8;break}return e.abrupt("return");case 8:o.clearRect(0,0,t.width,t.height),i=d.g(a,r),d.d.drawFaceLandmarks(t,i),c=i[0].landmarks.getLeftEye()[1],s=i[0].landmarks.getRightEye()[1],o.font="40px serif",o.fillText("\u307b",c.x,c.y+10),o.fillText("\u3052",s.x,s.y+10),window.requestAnimationFrame((function(){return m(n,t,r)}));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){return Object(r.useEffect)((function(){var e=document.querySelector("video");e&&Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(e);case 2:return n.next=4,d.f.tinyFaceDetector.loadFromUri("/face-recognition-sandbox/models");case 4:return n.next=6,d.f.faceLandmark68Net.loadFromUri("/face-recognition-sandbox/models");case 6:e.addEventListener("play",(function(){var n,t=d.b(e);null===(n=document.querySelector("main"))||void 0===n||n.append(t);var r={width:e.width,height:e.height};d.e(t,r),window.requestAnimationFrame((function(){return m(e,t,r)}))}));case 7:case"end":return n.stop()}}),n)})))()})),a.a.createElement("div",{className:"App"},a.a.createElement("main",null,a.a.createElement("video",{id:"video",width:"720",height:"560",autoPlay:!0,muted:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4061b7a7.chunk.js.map