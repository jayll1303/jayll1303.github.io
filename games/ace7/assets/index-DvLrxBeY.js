(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const za="180",Yu=0,cl=1,Ku=2,zc=1,Zu=2,Fn=3,ti=0,Vt=1,jt=2,Qn=0,Ji=1,ul=2,hl=3,fl=4,Ju=5,di=100,ju=101,Qu=102,eh=103,th=104,nh=200,ih=201,rh=202,sh=203,qo=204,$o=205,oh=206,ah=207,lh=208,ch=209,uh=210,hh=211,fh=212,dh=213,ph=214,Yo=0,Ko=1,Zo=2,Qi=3,Jo=4,jo=5,Qo=6,ea=7,ka=0,mh=1,gh=2,ei=0,_h=1,vh=2,xh=3,kc=4,yh=5,Mh=6,Sh=7,Hc=300,er=301,tr=302,ta=303,na=304,qs=306,Dr=1e3,gi=1001,ia=1002,nn=1003,bh=1004,Jr=1005,Mn=1006,io=1007,_i=1008,wn=1009,Gc=1010,Vc=1011,Ur=1012,Ha=1013,vi=1014,Sn=1015,Wr=1016,Ga=1017,Va=1018,Nr=1020,Wc=35902,Xc=35899,qc=1021,$c=1022,_n=1023,Fr=1026,Or=1027,Wa=1028,Xa=1029,Yc=1030,qa=1031,$a=1033,Rs=33776,Cs=33777,Ps=33778,Ls=33779,ra=35840,sa=35841,oa=35842,aa=35843,la=36196,ca=37492,ua=37496,ha=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,_a=37814,va=37815,xa=37816,ya=37817,Ma=37818,Sa=37819,ba=37820,Ea=37821,Ta=36492,wa=36494,Aa=36495,Ra=36283,Ca=36284,Pa=36285,La=36286,Eh=3200,Th=3201,Ya=0,wh=1,Zn="",Lt="srgb",nr="srgb-linear",Ns="linear",mt="srgb",Pi=7680,dl=519,Ah=512,Rh=513,Ch=514,Kc=515,Ph=516,Lh=517,Ih=518,Dh=519,pl=35044,ml="300 es",bn=2e3,Fs=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const Rr=Math.PI/180,Br=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ka(n,e){return(n%e+e)%e}function Uh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Nh(n,e,t){return n!==e?(t-n)/(e-n):0}function Cr(n,e,t){return(1-t)*n+t*e}function Fh(n,e,t,i){return Cr(n,e,1-Math.exp(-t*i))}function Oh(n,e=1){return e-Math.abs(Ka(n,e*2)-e)}function Bh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hh(n,e){return n+Math.random()*(e-n)}function Gh(n){return n*(.5-Math.random())}function Vh(n){n!==void 0&&(gl=n);let e=gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(n){return n*Rr}function Xh(n){return n*Br}function qh(n){return(n&n-1)===0&&n!==0}function $h(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kh(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:Rr,RAD2DEG:Br,generateUUID:Si,clamp:rt,euclideanModulo:Ka,mapLinear:Uh,inverseLerp:Nh,lerp:Cr,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:zh,randInt:kh,randFloat:Hh,randFloatSpread:Gh,seededRandom:Vh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:qh,ceilPowerOfTwo:$h,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:Kh,normalize:zt,denormalize:$i};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,p*y);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const _=a*y;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new I,_l=new Kt;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],y=r[1],x=r[4],_=r[7],A=r[2],T=r[5],R=r[8];return s[0]=o*v+a*y+l*A,s[3]=o*m+a*x+l*T,s[6]=o*p+a*_+l*R,s[1]=c*v+h*y+u*A,s[4]=c*m+h*x+u*T,s[7]=c*p+h*_+u*R,s[2]=f*v+d*y+g*A,s[5]=f*m+d*x+g*T,s[8]=f*p+d*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new je;function Zc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zh(){const n=Os("canvas");return n.style.display="block",n}const vl={};function zr(n){n in vl||(vl[n]=!0,console.warn(n))}function Jh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const xl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Ns:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),n}const ct=jh();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Li===void 0&&(Li=Os("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class Za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oo(r[o].image)):s.push(oo(r[o]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;const ao=new I;class Bt extends ar{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=gi,r=gi,s=Mn,o=_i,a=_n,l=wn,c=Bt.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Si(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Hc;Bt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(d+1)/2,A=(p+1)/2,T=(h+f)/4,R=(u+v)/4,P=(g+m)/4;return x>_&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=R/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Bt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Za(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends nf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jc extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Qr.subVectors(this.max,dr),Ii.subVectors(e.a,dr),Di.subVectors(e.b,dr),Ui.subVectors(e.c,dr),Vn.subVectors(Di,Ii),Wn.subVectors(Ui,Di),ii.subVectors(Ii,Ui);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ii.z,ii.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ii.z,0,-ii.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ii.y,ii.x,0];return!lo(t,Ii,Di,Ui,Qr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Ii,Di,Ui,Qr))?!1:(es.crossVectors(Vn,Wn),t=[es.x,es.y,es.z],lo(t,Ii,Di,Ui,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,jr=new bi,Ii=new I,Di=new I,Ui=new I,Vn=new I,Wn=new I,ii=new I,dr=new I,Qr=new I,es=new I,ri=new I;function lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ri.fromArray(n,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sf=new bi,pr=new I,co=new I;class lr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(co)),this.expandByPoint(pr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const In=new I,uo=new I,ts=new I,Xn=new I,ho=new I,ns=new I,fo=new I;class jc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=Xn.dot(this.direction),l=-Xn.dot(ts),c=Xn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uo).addScaledVector(ts,f),d}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),ns.subVectors(i,e),fo.crossVectors(ho,ns);let o=this.direction.dot(fo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(ns.crossVectors(Xn,ns));if(l<0)return null;const c=a*this.direction.dot(ho.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(fo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,c,h,u,f,d,g,v,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,f,d,g,v,m)}set(e,t,i,r,s,o,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,af)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(i,Zt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(i,Zt)),qn.normalize(),is.crossVectors(Zt,qn),r[0]=qn.x,r[4]=is.x,r[8]=Zt.x,r[1]=qn.y,r[5]=is.y,r[9]=Zt.y,r[2]=qn.z,r[6]=is.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],x=i[7],_=i[11],A=i[15],T=r[0],R=r[4],P=r[8],b=r[12],M=r[1],L=r[5],z=r[9],F=r[13],N=r[2],U=r[6],B=r[10],X=r[14],q=r[3],oe=r[7],de=r[11],ve=r[15];return s[0]=o*T+a*M+l*N+c*q,s[4]=o*R+a*L+l*U+c*oe,s[8]=o*P+a*z+l*B+c*de,s[12]=o*b+a*F+l*X+c*ve,s[1]=h*T+u*M+f*N+d*q,s[5]=h*R+u*L+f*U+d*oe,s[9]=h*P+u*z+f*B+d*de,s[13]=h*b+u*F+f*X+d*ve,s[2]=g*T+v*M+m*N+p*q,s[6]=g*R+v*L+m*U+p*oe,s[10]=g*P+v*z+m*B+p*de,s[14]=g*b+v*F+m*X+p*ve,s[3]=y*T+x*M+_*N+A*q,s[7]=y*R+x*L+_*U+A*oe,s[11]=y*P+x*z+_*B+A*de,s[15]=y*b+x*F+_*X+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*d-i*l*d)+v*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+m*(+t*c*u-t*a*d-s*o*u+i*o*d+s*a*h-i*c*h)+p*(-r*a*h-t*l*u+t*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*v*c-g*u*c+g*a*d-o*v*d-h*a*p+o*u*p,A=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,T=t*y+i*x+r*_+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(v*f*s-u*m*s-v*r*d+i*m*d+u*r*p-i*f*p)*R,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*d-i*l*d)*R,e[4]=x*R,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*d+t*l*d)*R,e[8]=_*R,e[9]=(g*u*s-h*v*s-g*i*d+t*v*d+h*i*p-t*u*p)*R,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*d-t*a*d)*R,e[12]=A*R,e[13]=(h*v*r-g*u*r+g*i*f-t*v*f-h*i*m+t*u*m)*R,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,v=o*h,m=o*u,p=a*u,y=l*c,x=l*h,_=l*u,A=i.x,T=i.y,R=i.z;return r[0]=(1-(v+p))*A,r[1]=(d+_)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(d-_)*T,r[5]=(1-(f+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+x)*R,r[9]=(m-y)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),a=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Fs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new I,hn=new _t,of=new I(0,0,0),af=new I(1,1,1),qn=new I,is=new I,Zt=new I,Ml=new _t,Sl=new Kt;class Nt{constructor(e=0,t=0,i=0,r=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const bl=new I,Fi=new Kt,Dn=new _t,rs=new I,mr=new I,cf=new I,uf=new Kt,El=new I(1,0,0),Tl=new I(0,1,0),wl=new I(0,0,1),Al={type:"added"},hf={type:"removed"},Oi={type:"childadded",child:null},po={type:"childremoved",child:null};class Tt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new Nt,i=new Kt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(mr,rs,this.up):Dn.lookAt(rs,mr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Un=new I,mo=new I,Nn=new I,Bi=new I,zi=new I,Rl=new I,go=new I,_o=new I,vo=new I,xo=new St,yo=new St,Mo=new St;class gn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Un.subVectors(i,t),mo.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Un),l=fn.dot(mo),c=Un.dot(Un),h=Un.dot(mo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return xo.setScalar(0),yo.setScalar(0),Mo.setScalar(0),xo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,i),Mo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xo,s.x),o.addScaledVector(yo,s.y),o.addScaledVector(Mo,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Un.subVectors(e,t),fn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Bi.subVectors(r,i),zi.subVectors(s,i),go.subVectors(e,i);const l=Bi.dot(go),c=zi.dot(go);if(l<=0&&c<=0)return t.copy(i);_o.subVectors(e,r);const h=Bi.dot(_o),u=zi.dot(_o);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Bi,o);vo.subVectors(e,s);const d=Bi.dot(vo),g=zi.dot(vo);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(zi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Rl.subVectors(s,r),a=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(Rl,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ss={h:0,s:0,l:0};function So(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Ka(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ct.workingToColorSpace(Ot.copy(this),e),Math.round(rt(Ot.r*255,0,255))*65536+Math.round(rt(Ot.g*255,0,255))*256+Math.round(rt(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){ct.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ss);const i=Cr($n.h,ss.h,t),r=Cr($n.s,ss.s,t),s=Cr($n.l,ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Qe;Qe.NAMES=eu;let ff=0;class Ei extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Ji,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=$o,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class It extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,os=new ge;let df=0;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class tu extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nu extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pf=0;const rn=new _t,bo=new Tt,ki=new I,Jt=new bi,gr=new bi,Ct=new I;class Dt extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Jt.min,gr.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,gr.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(gr.min),Jt.expandByPoint(gr.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ct.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(e,c),Ct.add(ki)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,f=new ge,d=new ge,g=new ge,v=new I,m=new I;function p(P,b,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,z=M.count;for(let F=L,N=L+z;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new I,_=new I,A=new I,T=new I;function R(P){A.fromBufferAttribute(r,P),T.copy(A);const b=a[P];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(T,b);const L=_.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,z=M.count;for(let F=L,N=L+z;F<N;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new vn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new _t,si=new jc,as=new lr,Pl=new I,ls=new I,cs=new I,us=new I,Eo=new I,hs=new I,Ll=new I,fs=new I;class st extends Tt{constructor(e=new Dt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Eo.fromBufferAttribute(u,e),o?hs.addScaledVector(Eo,h):hs.addScaledVector(Eo.sub(t),h))}t.add(hs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(as.containsPoint(si.origin)===!1&&(si.intersectSphere(as,Pl)===null||si.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(s).invert(),si.copy(e.ray).applyMatrix4(Cl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,A=x;_<A;_+=3){const T=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);r=ds(this,p,e,i,c,h,u,T,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);r=ds(this,o,e,i,c,h,u,y,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,A=x;_<A;_+=3){const T=_,R=_+1,P=_+2;r=ds(this,p,e,i,c,h,u,T,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;r=ds(this,o,e,i,c,h,u,y,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function mf(n,e,t,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;fs.copy(a),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function ds(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,us);const h=mf(n,e,t,i,ls,cs,us,Ll);if(h){const u=new I;gn.getBarycoord(Ll,ls,cs,us,u),r&&(h.uv=gn.getInterpolatedAttribute(r,a,l,c,u,new ge)),s&&(h.uv1=gn.getInterpolatedAttribute(s,a,l,c,u,new ge)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};gn.getNormal(ls,cs,us,f.normal),h.face=f,h.barycoord=u}return h}class ut extends Dt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(v,m,p,y,x,_,A,T,R,P,b){const M=_/R,L=A/P,z=_/2,F=A/2,N=T/2,U=R+1,B=P+1;let X=0,q=0;const oe=new I;for(let de=0;de<B;de++){const ve=de*L-F;for(let Be=0;Be<U;Be++){const De=Be*M-z;oe[v]=De*y,oe[m]=ve*x,oe[p]=N,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Be/R),u.push(1-de/P),X+=1}}for(let de=0;de<P;de++)for(let ve=0;ve<R;ve++){const Be=f+ve+U*de,De=f+ve+U*(de+1),ze=f+(ve+1)+U*(de+1),Ze=f+(ve+1)+U*de;l.push(Be,De,Ze),l.push(De,ze,Ze),q+=6}a.addGroup(d,q,b),d+=q,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function gf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const _f={clone:ir,merge:kt};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ru extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new I,Il=new ge,Dl=new ge;class Yt extends ru{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Dl),t.subVectors(Dl,Il)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class yf extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const s=new Yt(Hi,Gi,e,t);s.layers=this.layers,this.add(s);const o=new Yt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Hi,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Hi,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class su extends Bt{constructor(e=[],t=er,i,r,s,o,a,l,c,h){super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new su(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ut(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Qn});s.uniforms.tEquirect.value=t;const o=new st(r,s),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Mn),new yf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class en extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ja{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ou extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf extends Bt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=nn,h=nn,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new _t,Nl=new _t,ps=[],Fl=new bi,Ef=new _t,_r=new st,vr=new lr;class Tf extends st{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ef)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vi),Fl.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vi),vr.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),e.ray.intersectsSphere(vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vi),Nl.multiplyMatrices(i,Vi),_r.matrixWorld=Nl,_r.raycast(e,ps);for(let o=0,a=ps.length;o<a;o++){const l=ps[o];l.instanceId=s,l.object=this,t.push(l)}ps.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new bf(new Float32Array(r*this.count),r,this.count,Wa,Sn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new I,wf=new I,Af=new je;class hi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wo.subVectors(i,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Af.getNormalMatrix(e),r=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new lr,Rf=new ge(.5,.5),ms=new I;class ja{constructor(e=new hi,t=new hi,i=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],v=s[9],m=s[10],p=s[11],y=s[12],x=s[13],_=s[14],A=s[15];if(r[0].setComponents(c-o,d-h,p-g,A-y).normalize(),r[1].setComponents(c+o,d+h,p+g,A+y).normalize(),r[2].setComponents(c+a,d+u,p+v,A+x).normalize(),r[3].setComponents(c-a,d-u,p-v,A-x).normalize(),i)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,d-f,p-m,A-_).normalize();else if(r[4].setComponents(c-l,d-f,p-m,A-_).normalize(),t===bn)r[5].setComponents(c+l,d+f,p+m,A+_).normalize();else if(t===Fs)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Rf.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new I,zs=new I,Ol=new _t,xr=new jc,gs=new lr,Ao=new I,Bl=new I;class Cf extends Tt{constructor(e=new Dt,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bs.fromBufferAttribute(t,r-1),zs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bs.distanceTo(zs);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;Ol.copy(r).invert(),xr.copy(e.ray).applyMatrix4(Ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),x=_s(this,e,xr,l,p,y,v);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=_s(this,e,xr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=_s(this,e,xr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=_s(this,e,xr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _s(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Bs.fromBufferAttribute(a,r),zs.fromBufferAttribute(a,s),t.distanceSqToSegment(Bs,zs,Ao,Bl)>i)return;Ao.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ao);if(!(c<e.near||c>e.far))return{distance:c,point:Bl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Xr extends Bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lu extends Bt{constructor(e,t,i=vi,r,s,o,a=nn,l=nn,c,h=Fr,u=1){if(h!==Fr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cu extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class En extends Dt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rn extends Dt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function y(){const _=new I,A=new I;let T=0;const R=(t-e)/i;for(let P=0;P<=s;P++){const b=[],M=P/s,L=M*(t-e)+e;for(let z=0;z<=r;z++){const F=z/r,N=F*l+a,U=Math.sin(N),B=Math.cos(N);A.x=L*U,A.y=-M*i+m,A.z=L*B,u.push(A.x,A.y,A.z),_.set(U,R,B).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-M),b.push(g++)}v.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){const M=v[b][P],L=v[b+1][P],z=v[b+1][P+1],F=v[b][P+1];(e>0||b!==0)&&(h.push(M,L,F),T+=3),(t>0||b!==s-1)&&(h.push(L,z,F),T+=3)}c.addGroup(p,T,0),p+=T}function x(_){const A=g,T=new ge,R=new I;let P=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let z=0;z<=r;z++){const N=z/r*l+a,U=Math.cos(N),B=Math.sin(N);R.x=b*B,R.y=m*M,R.z=b*U,u.push(R.x,R.y,R.z),f.push(0,M,0),T.x=U*.5+.5,T.y=B*.5*M+.5,d.push(T.x,T.y),g++}for(let z=0;z<r;z++){const F=A+z,N=L+z;_===!0?h.push(N,N+1,F):h.push(N+1,N,F),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yi extends Rn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends Dt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new I,_=new I,A=new I;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],_),d(t[T+2],A),l(x,_,A,y)}function l(y,x,_,A){const T=A+1,R=[];for(let P=0;P<=T;P++){R[P]=[];const b=y.clone().lerp(_,P/T),M=x.clone().lerp(_,P/T),L=T-P;for(let z=0;z<=L;z++)z===0&&P===T?R[P][z]=b:R[P][z]=b.clone().lerp(M,z/L)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){const M=Math.floor(b/2);b%2===0?(f(R[P][M+1]),f(R[P+1][M]),f(R[P][M])):(f(R[P][M+1]),f(R[P+1][M+1]),f(R[P+1][M]))}}function c(y){const x=new I;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){const y=new I;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(_,1-A)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],A=o[y+4],T=Math.max(x,_,A),R=Math.min(x,_,A);T>.9&&R<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new I,x=new I,_=new I,A=new I,T=new ge,R=new ge,P=new ge;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),A.copy(y).add(x).add(_).divideScalar(3);const L=m(A);v(T,M+0,y,L),v(R,M+2,x,L),v(P,M+4,_,L)}}function v(y,x,_,A){A<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.vertices,e.indices,e.radius,e.details)}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,l=new _t;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(rt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class el extends Cn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pf extends el{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const vs=new I,Ro=new tl,Co=new tl,Po=new tl;class uu extends Cn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(vs.subVectors(r[0],r[1]).add(r[0]),c=vs);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ro.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Co.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Po.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Po.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ro.calc(l),Co.calc(l),Po.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zl(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Lf(n,e){const t=1-n;return t*t*e}function If(n,e){return 2*(1-n)*n*e}function Df(n,e){return n*n*e}function Pr(n,e,t,i){return Lf(n,e)+If(n,t)+Df(n,i)}function Uf(n,e){const t=1-n;return t*t*t*e}function Nf(n,e){const t=1-n;return 3*t*t*n*e}function Ff(n,e){return 3*(1-n)*n*n*e}function Of(n,e){return n*n*n*e}function Lr(n,e,t,i,r){return Uf(n,e)+Nf(n,t)+Ff(n,i)+Of(n,r)}class hu extends Cn{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,r.x,s.x,o.x,a.x),Lr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bf extends Cn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,r.x,s.x,o.x,a.x),Lr(e,r.y,s.y,o.y,a.y),Lr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fu extends Cn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends Cn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends Cn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Pr(e,r.x,s.x,o.x),Pr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends Cn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Pr(e,r.x,s.x,o.x),Pr(e,r.y,s.y,o.y),Pr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(zl(a,l.x,c.x,h.x,u.x),zl(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:Pf,CatmullRomCurve3:uu,CubicBezierCurve:hu,CubicBezierCurve3:Bf,EllipseCurve:el,LineCurve:fu,LineCurve3:zf,QuadraticBezierCurve:du,QuadraticBezierCurve3:kf,SplineCurve:pu});class Hf extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Da[r.type]().fromJSON(r))}return this}}class kl extends Hf{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fu(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new du(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new hu(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new el(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rr extends kl{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new kl().fromJSON(r))}return this}}function Gf(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=mu(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=$f(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return kr(s,o,t,a,l,c,0),o}function mu(n,e,t,i,r){let s;if(r===rd(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Hl(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Hl(o/i|0,n[o],n[o+1],s);return s&&sr(s,s.next)&&(Gr(s),s=s.next),s}function Mi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(sr(t,t.next)||yt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&jf(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Wf(n,i,r,s):Vf(n)){e.push(l.i,n.i,c.i),Gr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Xf(Mi(n),e),kr(n,e,t,i,r,s,2)):o===2&&qf(n,e,t,i,r,s):kr(Mi(n),e,t,i,r,s,1);break}}}function Vf(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Tr(r,a,s,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wf(n,e,t,i){const r=n.prev,s=n,o=n.next;if(yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),m=Math.max(h,u,f),p=Ua(d,g,e,t,i),y=Ua(v,m,e,t,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Tr(a,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Tr(a,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Tr(a,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Tr(a,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xf(n,e){let t=n;do{const i=t.prev,r=t.next.next;!sr(i,r)&&_u(i,t,t.next,r)&&Hr(i,r)&&Hr(r,i)&&(e.push(i.i,t.i,r.i),Gr(t),Gr(t.next),t=n=r),t=t.next}while(t!==n);return Mi(t)}function qf(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&td(o,a)){let l=vu(o,a);o=Mi(o,o.next),l=Mi(l,l.next),kr(o,e,t,i,r,s,0),kr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function $f(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=mu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ed(c))}r.sort(Yf);for(let s=0;s<r.length;s++)t=Kf(r[s],t);return t}function Yf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Kf(n,e){const t=Zf(n,e);if(!t)return e;const i=vu(t,n);return Mi(i,i.next),Mi(t,t.next)}function Zf(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(sr(n,t))return t;do{if(sr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&gu(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);Hr(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Jf(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Jf(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function jf(n,e,t,i){let r=n;do r.z===0&&(r.z=Ua(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Qf(r)}function Qf(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Ua(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ed(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gu(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Tr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&gu(n,e,t,i,r,s,o,a)}function td(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nd(n,e)&&(Hr(n,e)&&Hr(e,n)&&id(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||sr(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function sr(n,e){return n.x===e.x&&n.y===e.y}function _u(n,e,t,i){const r=ys(yt(n,e,t)),s=ys(yt(n,e,i)),o=ys(yt(t,i,n)),a=ys(yt(t,i,e));return!!(r!==s&&o!==a||r===0&&xs(n,t,e)||s===0&&xs(n,i,e)||o===0&&xs(t,n,i)||a===0&&xs(t,e,i))}function xs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ys(n){return n>0?1:n<0?-1:0}function nd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_u(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Hr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function id(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function vu(n,e){const t=Na(n.i,n.x,n.y),i=Na(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Hl(n,e,t,i){const r=Na(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Na(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class sd{static triangulate(e,t,i=2){return Gf(e,t,i)}}class On{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return On.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Gl(e),Vl(i,e);let o=e.length;t.forEach(Gl);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Vl(i,t[l]);const a=sd.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Gl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ks extends Dt{constructor(e=new rr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new at(r,3)),this.setAttribute("uv",new at(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:od;let x,_=!1,A,T,R,P;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,A=p.computeFrenetFrames(h,!1),T=new I,R=new I,P=new I),f||(m=0,d=0,g=0,v=0);const b=a.extractPoints(c);let M=b.shape;const L=b.holes;if(!On.isClockWise(M)){M=M.reverse();for(let re=0,Q=L.length;re<Q;re++){const te=L[re];On.isClockWise(te)&&(L[re]=te.reverse())}}function F(re){const te=10000000000000001e-36;let ee=re[0];for(let xe=1;xe<=re.length;xe++){const ue=xe%re.length,Me=re[ue],Ke=Me.x-ee.x,qe=Me.y-ee.y,C=Ke*Ke+qe*qe,S=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ee.x),Math.abs(ee.y)),G=te*S*S;if(C<=G){re.splice(ue,1),xe--;continue}ee=Me}}F(M),L.forEach(F);const N=L.length,U=M;for(let re=0;re<N;re++){const Q=L[re];M=M.concat(Q)}function B(re,Q,te){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Q,te)}const X=M.length;function q(re,Q,te){let ee,xe,ue;const Me=re.x-Q.x,Ke=re.y-Q.y,qe=te.x-re.x,C=te.y-re.y,S=Me*Me+Ke*Ke,G=Me*C-Ke*qe;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(S),se=Math.sqrt(qe*qe+C*C),J=Q.x-Ke/Z,ae=Q.y+Me/Z,pe=te.x-C/se,Ce=te.y+qe/se,Fe=((pe-J)*C-(Ce-ae)*qe)/(Me*C-Ke*qe);ee=J+Me*Fe-re.x,xe=ae+Ke*Fe-re.y;const le=ee*ee+xe*xe;if(le<=2)return new ge(ee,xe);ue=Math.sqrt(le/2)}else{let Z=!1;Me>Number.EPSILON?qe>Number.EPSILON&&(Z=!0):Me<-Number.EPSILON?qe<-Number.EPSILON&&(Z=!0):Math.sign(Ke)===Math.sign(C)&&(Z=!0),Z?(ee=-Ke,xe=Me,ue=Math.sqrt(S)):(ee=Me,xe=Ke,ue=Math.sqrt(S/2))}return new ge(ee/ue,xe/ue)}const oe=[];for(let re=0,Q=U.length,te=Q-1,ee=re+1;re<Q;re++,te++,ee++)te===Q&&(te=0),ee===Q&&(ee=0),oe[re]=q(U[re],U[te],U[ee]);const de=[];let ve,Be=oe.concat();for(let re=0,Q=N;re<Q;re++){const te=L[re];ve=[];for(let ee=0,xe=te.length,ue=xe-1,Me=ee+1;ee<xe;ee++,ue++,Me++)ue===xe&&(ue=0),Me===xe&&(Me=0),ve[ee]=q(te[ee],te[ue],te[Me]);de.push(ve),Be=Be.concat(ve)}let De;if(m===0)De=On.triangulateShape(U,L);else{const re=[],Q=[];for(let te=0;te<m;te++){const ee=te/m,xe=d*Math.cos(ee*Math.PI/2),ue=g*Math.sin(ee*Math.PI/2)+v;for(let Me=0,Ke=U.length;Me<Ke;Me++){const qe=B(U[Me],oe[Me],ue);Oe(qe.x,qe.y,-xe),ee===0&&re.push(qe)}for(let Me=0,Ke=N;Me<Ke;Me++){const qe=L[Me];ve=de[Me];const C=[];for(let S=0,G=qe.length;S<G;S++){const Z=B(qe[S],ve[S],ue);Oe(Z.x,Z.y,-xe),ee===0&&C.push(Z)}ee===0&&Q.push(C)}}De=On.triangulateShape(re,Q)}const ze=De.length,Ze=g+v;for(let re=0;re<X;re++){const Q=f?B(M[re],Be[re],Ze):M[re];_?(R.copy(A.normals[0]).multiplyScalar(Q.x),T.copy(A.binormals[0]).multiplyScalar(Q.y),P.copy(x[0]).add(R).add(T),Oe(P.x,P.y,P.z)):Oe(Q.x,Q.y,0)}for(let re=1;re<=h;re++)for(let Q=0;Q<X;Q++){const te=f?B(M[Q],Be[Q],Ze):M[Q];_?(R.copy(A.normals[re]).multiplyScalar(te.x),T.copy(A.binormals[re]).multiplyScalar(te.y),P.copy(x[re]).add(R).add(T),Oe(P.x,P.y,P.z)):Oe(te.x,te.y,u/h*re)}for(let re=m-1;re>=0;re--){const Q=re/m,te=d*Math.cos(Q*Math.PI/2),ee=g*Math.sin(Q*Math.PI/2)+v;for(let xe=0,ue=U.length;xe<ue;xe++){const Me=B(U[xe],oe[xe],ee);Oe(Me.x,Me.y,u+te)}for(let xe=0,ue=L.length;xe<ue;xe++){const Me=L[xe];ve=de[xe];for(let Ke=0,qe=Me.length;Ke<qe;Ke++){const C=B(Me[Ke],ve[Ke],ee);_?Oe(C.x,C.y+x[h-1].y,x[h-1].x+te):Oe(C.x,C.y,u+te)}}}j(),ie();function j(){const re=r.length/3;if(f){let Q=0,te=X*Q;for(let ee=0;ee<ze;ee++){const xe=De[ee];Re(xe[2]+te,xe[1]+te,xe[0]+te)}Q=h+m*2,te=X*Q;for(let ee=0;ee<ze;ee++){const xe=De[ee];Re(xe[0]+te,xe[1]+te,xe[2]+te)}}else{for(let Q=0;Q<ze;Q++){const te=De[Q];Re(te[2],te[1],te[0])}for(let Q=0;Q<ze;Q++){const te=De[Q];Re(te[0]+X*h,te[1]+X*h,te[2]+X*h)}}i.addGroup(re,r.length/3-re,0)}function ie(){const re=r.length/3;let Q=0;be(U,Q),Q+=U.length;for(let te=0,ee=L.length;te<ee;te++){const xe=L[te];be(xe,Q),Q+=xe.length}i.addGroup(re,r.length/3-re,1)}function be(re,Q){let te=re.length;for(;--te>=0;){const ee=te;let xe=te-1;xe<0&&(xe=re.length-1);for(let ue=0,Me=h+m*2;ue<Me;ue++){const Ke=X*ue,qe=X*(ue+1),C=Q+ee+Ke,S=Q+xe+Ke,G=Q+xe+qe,Z=Q+ee+qe;et(C,S,G,Z)}}}function Oe(re,Q,te){l.push(re),l.push(Q),l.push(te)}function Re(re,Q,te){ot(re),ot(Q),ot(te);const ee=r.length/3,xe=y.generateTopUV(i,r,ee-3,ee-2,ee-1);D(xe[0]),D(xe[1]),D(xe[2])}function et(re,Q,te,ee){ot(re),ot(Q),ot(ee),ot(Q),ot(te),ot(ee);const xe=r.length/3,ue=y.generateSideWallUV(i,r,xe-6,xe-3,xe-2,xe-1);D(ue[0]),D(ue[1]),D(ue[3]),D(ue[1]),D(ue[2]),D(ue[3])}function ot(re){r.push(l[re*3+0]),r.push(l[re*3+1]),r.push(l[re*3+2])}function D(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ad(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Da[r.type]().fromJSON(r)),new ks(i,e.options)}}const od={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(f,1-g),new ge(v,1-p)]:[new ge(a,1-l),new ge(h,1-u),new ge(d,1-g),new ge(m,1-p)]}};function ad(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qr extends Qa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class nl extends Dt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,f=new ge,d=new I,g=new I,v=new I;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=t;y++){const x=i+y*h*r,_=Math.sin(x),A=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*A,o.push(u.x,u.y,u.z),f.x=y/t,f.y=T/(e.length-1),a.push(f.x,f.y);const R=l[3*T+0]*_,P=l[3*T+1],b=l[3*T+0]*A;c.push(R,P,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,A=_,T=_+e.length,R=_+e.length+1,P=_+1;s.push(A,T,P),s.push(R,P,T)}this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.points,e.segments,e.phiStart,e.phiLength)}}class tn extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let x=0;x<c;x++){const _=x*u-s;g.push(_,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,_=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;d.push(x,_,T),d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class $s extends Dt{constructor(e=new rr([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(s,3)),this.setAttribute("uv",new at(o,2));function c(h){const u=r.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;On.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];On.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=On.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],x=y[0]+u,_=y[1]+u,A=y[2]+u;i.push(x,_,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ld(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new $s(i,e.curveSegments)}}function ld(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class an extends Dt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const T=A/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],A=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(x,_,T),(p!==i-1||l<Math.PI)&&d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ln extends Dt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yn extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qt extends Ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cd extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xu extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yu extends xu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lo=new _t,Wl=new I,Xl=new I;class hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mu extends ru{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fd extends hd{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new fd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dd extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ql(n,e,t,i){const r=pd(i);switch(t){case qc:return n*e;case Wa:return n*e/r.components*r.byteLength;case Xa:return n*e/r.components*r.byteLength;case Yc:return n*e*2/r.components*r.byteLength;case qa:return n*e*2/r.components*r.byteLength;case $c:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case $a:return n*e*4/r.components*r.byteLength;case Rs:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(n,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(n,8)*Math.max(e,8)/2;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _a:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ta:case wa:case Aa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ra:case Ca:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pa:case La:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pd(n){switch(n){case wn:case Gc:return{byteLength:1,components:1};case Ur:case Vc:case Wr:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case vi:case Ha:case Sn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function bu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function md(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:bd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:wd,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Vd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:$d,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:lp,envmap_vertex:jd,fog_vertex:Qd,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:rp,lights_lambert_fragment:sp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:up,lights_phong_fragment:hp,lights_phong_pars_fragment:fp,lights_physical_fragment:dp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:Sp,map_pars_fragment:bp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Ip,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:$p,dithering_pars_fragment:Yp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:um,uv_pars_fragment:hm,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:xm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distanceRGBA_vert:bm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:wm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Im,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:km,meshtoon_vert:Hm,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:$m,sprite_frag:Ym},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},xn={basic:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:kt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:kt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:kt([Se.points,Se.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:kt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:kt([Se.common,Se.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:kt([Se.sprite,Se.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:kt([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:kt([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};xn.physical={uniforms:kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ms={r:0,b:0,g:0},ai=new Nt,Km=new _t;function Zm(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const A=g(x);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===qs)?(h===void 0&&(h=new st(new ut(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ir(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ai.copy(_.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(ai)),h.material.toneMapped=ct.getTransfer(A.colorSpace)!==mt,(u!==A||f!==A.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new st(new tn(2,2),new An({name:"BackgroundMaterial",uniforms:ir(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Ms,iu(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m,dispose:y}}function Jm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,z,F,N){let U=!1;const B=u(F,z,L);s!==B&&(s=B,c(s.object)),U=d(M,F,z,N),U&&g(M,F,z,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,_(M,L,z,F),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,z){const F=z.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let U=N[L.id];U===void 0&&(U={},N[L.id]=U);let B=U[F];return B===void 0&&(B=f(l()),U[F]=B),B}function f(M){const L=[],z=[],F=[];for(let N=0;N<t;N++)L[N]=0,z[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,z,F){const N=s.attributes,U=L.attributes;let B=0;const X=z.getAttributes();for(const q in X)if(X[q].location>=0){const de=N[q];let ve=U[q];if(ve===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function g(M,L,z,F){const N={},U=L.attributes;let B=0;const X=z.getAttributes();for(const q in X)if(X[q].location>=0){let de=U[q];de===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),N[q]=ve,B++}s.attributes=N,s.attributesNum=B,s.index=F}function v(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const z=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;z[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),N[M]!==L&&(n.vertexAttribDivisor(M,L),N[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,F=L.length;z<F;z++)L[z]!==M[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function x(M,L,z,F,N,U,B){B===!0?n.vertexAttribIPointer(M,L,z,N,U):n.vertexAttribPointer(M,L,z,F,N,U)}function _(M,L,z,F){v();const N=F.attributes,U=z.getAttributes(),B=L.defaultAttributeValues;for(const X in U){const q=U[X];if(q.location>=0){let oe=N[X];if(oe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const de=oe.normalized,ve=oe.itemSize,Be=e.get(oe);if(Be===void 0)continue;const De=Be.buffer,ze=Be.type,Ze=Be.bytesPerElement,j=ze===n.INT||ze===n.UNSIGNED_INT||oe.gpuType===Ha;if(oe.isInterleavedBufferAttribute){const ie=oe.data,be=ie.stride,Oe=oe.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)p(q.location+Re,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<q.locationSize;Re++)m(q.location+Re);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Re=0;Re<q.locationSize;Re++)x(q.location+Re,ve/q.locationSize,ze,de,be*Ze,(Oe+ve/q.locationSize*Re)*Ze,j)}else{if(oe.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)p(q.location+ie,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,De);for(let ie=0;ie<q.locationSize;ie++)x(q.location+ie,ve/q.locationSize,ze,de,ve*Ze,ve/q.locationSize*ie*Ze,j)}}else if(B!==void 0){const de=B[X];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(q.location,de);break;case 3:n.vertexAttrib3fv(q.location,de);break;case 4:n.vertexAttrib4fv(q.location,de);break;default:n.vertexAttrib1fv(q.location,de)}}}}y()}function A(){P();for(const M in i){const L=i[M];for(const z in L){const F=L[z];for(const N in F)h(F[N].object),delete F[N];delete L[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const F=L[z];for(const N in F)h(F[N].object),delete F[N];delete L[z]}delete i[M.id]}function R(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const F=z[M.id];for(const N in F)h(F[N].object),delete F[N];delete z[M.id]}}function P(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function jm(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function eg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,x=y*4;let _=p.clippingState||null;l.value=_,_=h(g,f,x,d);for(let A=0;A!==x;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function tg(n){let e=new WeakMap;function t(o,a){return a===ta?o.mapping=er:a===na&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===na)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mf(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Yi=4,$l=[.125,.215,.35,.446,.526,.582],pi=20,Io=new Mu,Yl=new Qe;let Do=null,Uo=0,No=0,Fo=!1;const fi=(1+Math.sqrt(5))/2,Wi=1/fi,Kl=[new I(-fi,Wi,0),new I(fi,Wi,0),new I(-Wi,0,fi),new I(Wi,0,fi),new I(0,fi,-Wi),new I(0,fi,Wi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ng=new I;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=ng}=s;Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=Fo,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Wr,format:_n,colorSpace:nr,depthBuffer:!1},r=Jl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=rg(s,e,t)}return r}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,r,s){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Yl),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const v=new It({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new st(new ut,v);let p=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(Yl),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const A=this._cubeSize;Ss(r,_*A,x>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kl[(r-s-1)%Kl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*pi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):pi;m>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let y=0;for(let R=0;R<pi;++R){const P=R/v,b=Math.exp(-P*P/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[r],A=3*_*(r>x-Yi?r-x+Yi:0),T=4*(this._cubeSize-_);Ss(t,A,T,3*_,2*_),l.setRenderTarget(t),l.render(u,Io)}}function ig(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+$l.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Yi?l=$l[o-n+Yi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,P=T>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(b,v*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];_.set(M,p*g*T)}const A=new Dt;A.setAttribute("position",new vn(y,v)),A.setAttribute("uv",new vn(x,m)),A.setAttribute("faceIndex",new vn(_,p)),e.push(A),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jl(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rg(n,e,t){const i=new Float32Array(pi),r=new I(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jl(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ql(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===na,h=l===er||l===tr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Zl(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Zl(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function og(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ag(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const A=y[x+0],T=y[x+1],R=y[x+2];f.push(A,T,T,R,R,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const A=x+0,T=x+1,R=x+2;f.push(A,T,T,R,R,A)}}else return;const m=new(Zc(f)?nu:tu)(f,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lg(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ug(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*u),P=new Jc(R,A,T,u);P.type=Sn,P.needsUpdate=!0;const b=_*4;for(let L=0;L<u;L++){const z=p[L],F=y[L],N=x[L],U=A*T*4*L;for(let B=0;B<z.count;B++){const X=B*b;g===!0&&(r.fromBufferAttribute(z,B),R[U+X+0]=r.x,R[U+X+1]=r.y,R[U+X+2]=r.z,R[U+X+3]=0),v===!0&&(r.fromBufferAttribute(F,B),R[U+X+4]=r.x,R[U+X+5]=r.y,R[U+X+6]=r.z,R[U+X+7]=0),m===!0&&(r.fromBufferAttribute(N,B),R[U+X+8]=r.x,R[U+X+9]=r.y,R[U+X+10]=r.z,R[U+X+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:P,size:new ge(A,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function hg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Eu=new Bt,ec=new lu(1,1),Tu=new Jc,wu=new rf,Au=new su,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),At(t,i)}}function _g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;rc.set(i),n.uniformMatrix3fv(this.addr,!1,rc),At(t,i)}}function vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),At(t,i)}}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ec.compareFunction=Kc,s=ec):s=Eu,t.setTexture2D(e||s,r)}function Rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wu,r)}function Cg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Au,r)}function Pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tu,r)}function Lg(n){switch(n){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ig(n,e){n.uniform1fv(this.addr,e)}function Dg(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ug(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ng(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Fg(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Og(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bg(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zg(n,e){n.uniform1iv(this.addr,e)}function kg(n,e){n.uniform2iv(this.addr,e)}function Hg(n,e){n.uniform3iv(this.addr,e)}function Gg(n,e){n.uniform4iv(this.addr,e)}function Vg(n,e){n.uniform1uiv(this.addr,e)}function Wg(n,e){n.uniform2uiv(this.addr,e)}function Xg(n,e){n.uniform3uiv(this.addr,e)}function qg(n,e){n.uniform4uiv(this.addr,e)}function $g(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Eu,s[o])}function Yg(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wu,s[o])}function Kg(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Au,s[o])}function Zg(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Tu,s[o])}function Jg(n){switch(n){case 5126:return Ig;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lg(t.type)}}class Qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function oc(n,e){n.seq.push(e),n.map[e.id]=e}function t0(n,e,t){const i=n.name,r=i.length;for(Oo.lastIndex=0;;){const s=Oo.exec(i),o=Oo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){oc(t,c===void 0?new jg(a,n,e):new Qg(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new e0(a),oc(t,u)),t=u}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);t0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ac(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const n0=37297;let i0=0;function r0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const lc=new je;function s0(n){ct._getMatrix(lc,ct.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+r0(n.getShaderSource(e),a)}else return s}function o0(n,e){const t=s0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function a0(n,e){let t;switch(e){case _h:t="Linear";break;case vh:t="Reinhard";break;case xh:t="Cineon";break;case kc:t="ACESFilmic";break;case Mh:t="AgX";break;case Sh:t="Neutral";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new I;function l0(){ct.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function u0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(n){return n.replace(f0,p0)}const d0=new Map;function p0(n,e){let t=tt[e];if(t===void 0){const i=d0.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fa(t)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(m0,g0)}function g0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function v0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(e="ENVMAP_MODE_REFRACTION"),e}function y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function M0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_0(t),c=v0(t),h=x0(t),u=y0(t),f=M0(t),d=c0(t),g=u0(s),v=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?tt.tonemapping_pars_fragment:"",t.toneMapping!==ei?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,o0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Fa(o),o=uc(o,t),o=hc(o,t),a=Fa(a),a=uc(a,t),a=hc(a,t),o=fc(o),a=fc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,_=y+p+a,A=ac(r,r.VERTEX_SHADER,x),T=ac(r,r.FRAGMENT_SHADER,_);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",F=r.getShaderInfoLog(A)||"",N=r.getShaderInfoLog(T)||"",U=z.trim(),B=F.trim(),X=N.trim();let q=!0,oe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const de=cc(r,A,"vertex"),ve=cc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+de+`
`+ve)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||X==="")&&(oe=!1);oe&&(L.diagnostics={runnable:q,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(A),r.deleteShader(T),P=new Is(r,v),b=h0(r,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,n0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let b0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new T0(e),t.set(e,i)),i}}class T0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function w0(n,e,t,i,r,s,o){const a=new Qc,l=new E0,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,z,F){const N=z.fog,U=F.geometry,B=b.isMeshStandardMaterial?z.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),q=X&&X.mapping===qs?X.image.height:null,oe=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const de=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ve=de!==void 0?de.length:0;let Be=0;U.morphAttributes.position!==void 0&&(Be=1),U.morphAttributes.normal!==void 0&&(Be=2),U.morphAttributes.color!==void 0&&(Be=3);let De,ze,Ze,j;if(oe){const lt=xn[oe];De=lt.vertexShader,ze=lt.fragmentShader}else De=b.vertexShader,ze=b.fragmentShader,l.update(b),Ze=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const ie=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,et=!!b.map,ot=!!b.matcap,D=!!X,re=!!b.aoMap,Q=!!b.lightMap,te=!!b.bumpMap,ee=!!b.normalMap,xe=!!b.displacementMap,ue=!!b.emissiveMap,Me=!!b.metalnessMap,Ke=!!b.roughnessMap,qe=b.anisotropy>0,C=b.clearcoat>0,S=b.dispersion>0,G=b.iridescence>0,Z=b.sheen>0,se=b.transmission>0,J=qe&&!!b.anisotropyMap,ae=C&&!!b.clearcoatMap,pe=C&&!!b.clearcoatNormalMap,Ce=C&&!!b.clearcoatRoughnessMap,Fe=G&&!!b.iridescenceMap,le=G&&!!b.iridescenceThicknessMap,me=Z&&!!b.sheenColorMap,We=Z&&!!b.sheenRoughnessMap,Te=!!b.specularMap,ye=!!b.specularColorMap,Xe=!!b.specularIntensityMap,O=se&&!!b.transmissionMap,fe=se&&!!b.thicknessMap,_e=!!b.gradientMap,Ie=!!b.alphaMap,he=b.alphaTest>0,ne=!!b.alphaHash,Pe=!!b.extensions;let $e=ei;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($e=n.toneMapping);const ft={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:ze,defines:b.defines,customVertexShaderID:Ze,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:nr,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:ot,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:Q,bumpMap:te,normalMap:ee,displacementMap:f&&xe,emissiveMap:ue,normalMapObjectSpace:ee&&b.normalMapType===wh,normalMapTangentSpace:ee&&b.normalMapType===Ya,metalnessMap:Me,roughnessMap:Ke,anisotropy:qe,anisotropyMap:J,clearcoat:C,clearcoatMap:ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ce,dispersion:S,iridescence:G,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:me,sheenRoughnessMap:We,specularMap:Te,specularColorMap:ye,specularIntensityMap:Xe,transmission:se,transmissionMap:O,thicknessMap:fe,gradientMap:_e,opaque:b.transparent===!1&&b.blending===Ji&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:he,alphaHash:ne,combine:b.combine,mapUv:et&&v(b.map.channel),aoMapUv:re&&v(b.aoMap.channel),lightMapUv:Q&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:ee&&v(b.normalMap.channel),displacementMapUv:xe&&v(b.displacementMap.channel),emissiveMapUv:ue&&v(b.emissiveMap.channel),metalnessMapUv:Me&&v(b.metalnessMap.channel),roughnessMapUv:Ke&&v(b.roughnessMap.channel),anisotropyMapUv:J&&v(b.anisotropyMap.channel),clearcoatMapUv:ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(b.sheenRoughnessMap.channel),specularMapUv:Te&&v(b.specularMap.channel),specularColorMapUv:ye&&v(b.specularColorMap.channel),specularIntensityMapUv:Xe&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:fe&&v(b.thicknessMap.channel),alphaMapUv:Ie&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ee||qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(et||Ie),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:ue&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jt,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=g[b.type];let L;if(M){const z=xn[M];L=_f.clone(z.uniforms)}else L=b.uniforms;return L}function A(b,M){let L;for(let z=0,F=h.length;z<F;z++){const N=h[z];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new S0(n,M,b,s),h.push(L)),L}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function A0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||R0),i.length>1&&i.sort(f||pc),r.length>1&&r.sort(f||pc)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function C0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mc,n.set(i,[o])):r>=s.length?(o=new mc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function L0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function D0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function U0(n){const e=new P0,t=L0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new _t,o=new _t;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,A=0,T=0,R=0;c.sort(D0);for(let b=0,M=c.length;b<M;b++){const L=c[b],z=L.color,F=L.intensity,N=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*F,u+=z.g*F,f+=z.b*F;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],F);R++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,q=t.get(L);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=B,d++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(F),B.distance=N,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[v]=B;const X=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,X.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=X.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=U,_++}v++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(z).multiplyScalar(F),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const X=L.shadow,q=t.get(L);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=B,g++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(F),B.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=R,i.version=I0++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function gc(n){const e=new U0(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function N0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gc(n),e.set(r,[a])):s>=o.length?(a=new gc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B0(n,e,t){let i=new ja;const r=new ge,s=new ge,o=new St,a=new cd({depthPacking:Th}),l=new ud,c={},h=t.maxTextureSize,u={[ti]:Vt,[Vt]:ti,[jt]:jt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new st(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Qn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==Fn&&this.type===Fn,N=p===Fn&&this.type!==Fn;for(let U=0,B=T.length;U<B;U++){const X=T[U],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const oe=q.getFrameExtents();if(r.multiply(oe),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,q.mapSize.y=s.y)),q.map===null||F===!0||N===!0){const ve=this.type!==Fn?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new xi(r.x,r.y,ve),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const de=q.getViewportCount();for(let ve=0;ve<de;ve++){const Be=q.getViewport(ve);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),z.viewport(o),q.updateMatrices(X,ve),i=q.getFrustum(),_(R,P,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===Fn&&y(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,L)};function y(T,R){const P=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,P,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,P,d,v,null)}function x(T,R,P,b){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=M.uuid,F=R.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let U=N[F];U===void 0&&(U=M.clone(),N[F]=U,R.addEventListener("dispose",A)),M=U}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Fn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=P}return M}function _(T,R,P,b,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Fn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=e.update(T),N=T.material;if(Array.isArray(N)){const U=F.groups;for(let B=0,X=U.length;B<X;B++){const q=U[B],oe=N[q.materialIndex];if(oe&&oe.visible){const de=x(T,oe,b,M);T.onBeforeShadow(n,T,R,P,F,de,q),n.renderBufferDirect(P,null,F,de,T,q),T.onAfterShadow(n,T,R,P,F,de,q)}}}else if(N.visible){const U=x(T,N,b,M);T.onBeforeShadow(n,T,R,P,F,U,null),n.renderBufferDirect(P,null,F,U,T,null),T.onAfterShadow(n,T,R,P,F,U,null)}}const z=T.children;for(let F=0,N=z.length;F<N;F++)_(z[F],R,P,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(const P in c){const b=c[P],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const z0={[Yo]:Ko,[Zo]:Qo,[Jo]:ea,[Qi]:jo,[Ko]:Yo,[Qo]:Zo,[ea]:Jo,[jo]:Qi};function k0(n,e){function t(){let O=!1;const fe=new St;let _e=null;const Ie=new St(0,0,0,0);return{setMask:function(he){_e!==he&&!O&&(n.colorMask(he,he,he,he),_e=he)},setLocked:function(he){O=he},setClear:function(he,ne,Pe,$e,ft){ft===!0&&(he*=$e,ne*=$e,Pe*=$e),fe.set(he,ne,Pe,$e),Ie.equals(fe)===!1&&(n.clearColor(he,ne,Pe,$e),Ie.copy(fe))},reset:function(){O=!1,_e=null,Ie.set(-1,0,0,0)}}}function i(){let O=!1,fe=!1,_e=null,Ie=null,he=null;return{setReversed:function(ne){if(fe!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;const $e=he;he=null,this.setClear($e)}},getReversed:function(){return fe},setTest:function(ne){ne?ie(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ne){_e!==ne&&!O&&(n.depthMask(ne),_e=ne)},setFunc:function(ne){if(fe&&(ne=z0[ne]),Ie!==ne){switch(ne){case Yo:n.depthFunc(n.NEVER);break;case Ko:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ne}},setLocked:function(ne){O=ne},setClear:function(ne){he!==ne&&(fe&&(ne=1-ne),n.clearDepth(ne),he=ne)},reset:function(){O=!1,_e=null,Ie=null,he=null,fe=!1}}}function r(){let O=!1,fe=null,_e=null,Ie=null,he=null,ne=null,Pe=null,$e=null,ft=null;return{setTest:function(lt){O||(lt?ie(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!O&&(n.stencilMask(lt),fe=lt)},setFunc:function(lt,cn,Wt){(_e!==lt||Ie!==cn||he!==Wt)&&(n.stencilFunc(lt,cn,Wt),_e=lt,Ie=cn,he=Wt)},setOp:function(lt,cn,Wt){(ne!==lt||Pe!==cn||$e!==Wt)&&(n.stencilOp(lt,cn,Wt),ne=lt,Pe=cn,$e=Wt)},setLocked:function(lt){O=lt},setClear:function(lt){ft!==lt&&(n.clearStencil(lt),ft=lt)},reset:function(){O=!1,fe=null,_e=null,Ie=null,he=null,ne=null,Pe=null,$e=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,A=null,T=null,R=new Qe(0,0,0),P=0,b=!1,M=null,L=null,z=null,F=null,N=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=X>=2);let oe=null,de={};const ve=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),De=new St().fromArray(ve),ze=new St().fromArray(Be);function Ze(O,fe,_e,Ie){const he=new Uint8Array(4),ne=n.createTexture();n.bindTexture(O,ne),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<_e;Pe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(fe+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ne}const j={};j[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Qi),te(!1),ee(cl),ie(n.CULL_FACE),re(Qn);function ie(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function be(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Oe(O,fe){return u[O]!==fe?(n.bindFramebuffer(O,fe),u[O]=fe,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Re(O,fe){let _e=d,Ie=!1;if(O){_e=f.get(fe),_e===void 0&&(_e=[],f.set(fe,_e));const he=O.textures;if(_e.length!==he.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Pe=he.length;ne<Pe;ne++)_e[ne]=n.COLOR_ATTACHMENT0+ne;_e.length=he.length,Ie=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(_e)}function et(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const ot={[di]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};ot[eh]=n.MIN,ot[th]=n.MAX;const D={[nh]:n.ZERO,[ih]:n.ONE,[rh]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[uh]:n.SRC_ALPHA_SATURATE,[lh]:n.DST_COLOR,[oh]:n.DST_ALPHA,[sh]:n.ONE_MINUS_SRC_COLOR,[$o]:n.ONE_MINUS_SRC_ALPHA,[ch]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[hh]:n.CONSTANT_COLOR,[fh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[ph]:n.ONE_MINUS_CONSTANT_ALPHA};function re(O,fe,_e,Ie,he,ne,Pe,$e,ft,lt){if(O===Qn){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),O!==Ju){if(O!==m||lt!==b){if((p!==di||_!==di)&&(n.blendEquation(n.FUNC_ADD),p=di,_=di),lt)switch(O){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,x=null,A=null,T=null,R.set(0,0,0),P=0,m=O,b=lt}return}he=he||fe,ne=ne||_e,Pe=Pe||Ie,(fe!==p||he!==_)&&(n.blendEquationSeparate(ot[fe],ot[he]),p=fe,_=he),(_e!==y||Ie!==x||ne!==A||Pe!==T)&&(n.blendFuncSeparate(D[_e],D[Ie],D[ne],D[Pe]),y=_e,x=Ie,A=ne,T=Pe),($e.equals(R)===!1||ft!==P)&&(n.blendColor($e.r,$e.g,$e.b,ft),R.copy($e),P=ft),m=O,b=!1}function Q(O,fe){O.side===jt?be(n.CULL_FACE):ie(n.CULL_FACE);let _e=O.side===Vt;fe&&(_e=!_e),te(_e),O.blending===Ji&&O.transparent===!1?re(Qn):re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function ee(O){O!==Yu?(ie(n.CULL_FACE),O!==L&&(O===cl?n.cullFace(n.BACK):O===Ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),L=O}function xe(O){O!==z&&(B&&n.lineWidth(O),z=O)}function ue(O,fe,_e){O?(ie(n.POLYGON_OFFSET_FILL),(F!==fe||N!==_e)&&(n.polygonOffset(fe,_e),F=fe,N=_e)):be(n.POLYGON_OFFSET_FILL)}function Me(O){O?ie(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ke(O){O===void 0&&(O=n.TEXTURE0+U-1),oe!==O&&(n.activeTexture(O),oe=O)}function qe(O,fe,_e){_e===void 0&&(oe===null?_e=n.TEXTURE0+U-1:_e=oe);let Ie=de[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[_e]=Ie),(Ie.type!==O||Ie.texture!==fe)&&(oe!==_e&&(n.activeTexture(_e),oe=_e),n.bindTexture(O,fe||j[O]),Ie.type=O,Ie.texture=fe)}function C(){const O=de[oe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(O){De.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function We(O){ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function Te(O,fe){let _e=c.get(fe);_e===void 0&&(_e=new WeakMap,c.set(fe,_e));let Ie=_e.get(O);Ie===void 0&&(Ie=n.getUniformBlockIndex(fe,O.name),_e.set(O,Ie))}function ye(O,fe){const Ie=c.get(fe).get(O);l.get(fe)!==Ie&&(n.uniformBlockBinding(fe,Ie,O.__bindingPointIndex),l.set(fe,Ie))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,de={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,A=null,T=null,R=new Qe(0,0,0),P=0,b=!1,M=null,L=null,z=null,F=null,N=null,De.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:be,bindFramebuffer:Oe,drawBuffers:Re,useProgram:et,setBlending:re,setMaterial:Q,setFlipSided:te,setCullFace:ee,setLineWidth:xe,setPolygonOffset:ue,setScissorTest:Me,activeTexture:Ke,bindTexture:qe,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Fe,texImage3D:le,updateUBOMapping:Te,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:J,compressedTexSubImage3D:ae,scissor:me,viewport:We,reset:Xe}}function H0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Os("canvas")}function v(C,S,G){let Z=1;const se=qe(C);if((se.width>G||se.height>G)&&(Z=G/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*se.width),ae=Math.floor(Z*se.height);u===void 0&&(u=g(J,ae));const pe=S?g(J,ae):u;return pe.width=J,pe.height=ae,pe.getContext("2d").drawImage(C,0,0,J,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+ae+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,S,G,Z,se=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),S===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),S===n.RGBA){const ae=se?Ns:ct.getTransfer(Z);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=ae===mt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(C,S){let G;return C?S===null||S===vi||S===Nr?G=n.DEPTH24_STENCIL8:S===Sn?G=n.DEPTH32F_STENCIL8:S===Ur&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Nr?G=n.DEPTH_COMPONENT24:S===Sn?G=n.DEPTH_COMPONENT32F:S===Ur&&(G=n.DEPTH_COMPONENT16),G}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),M(S)}function P(C){const S=i.get(C);if(S.__webglInit===void 0)return;const G=C.source,Z=f.get(G);if(Z){const se=Z[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(C),Object.keys(Z).length===0&&f.delete(G)}i.remove(C)}function b(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const G=C.source,Z=f.get(G);delete Z[S.__cacheKey],o.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let se=0;se<S.__webglFramebuffer[Z].length;se++)n.deleteFramebuffer(S.__webglFramebuffer[Z][se]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let Z=0,se=G.length;Z<se;Z++){const J=i.get(G[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Z])}i.remove(C)}let L=0;function z(){L=0}function F(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function U(C,S){const G=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function B(C,S){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){j(G,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function X(C,S){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){j(G,C,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function q(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ie(G,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const oe={[Dr]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},de={[nn]:n.NEAREST,[bh]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[io]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},ve={[Ah]:n.NEVER,[Dh]:n.ALWAYS,[Rh]:n.LESS,[Kc]:n.LEQUAL,[Ch]:n.EQUAL,[Ih]:n.GEQUAL,[Ph]:n.GREATER,[Lh]:n.NOTEQUAL};function Be(C,S){if(S.type===Sn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===io||S.magFilter===Jr||S.magFilter===_i||S.minFilter===Mn||S.minFilter===io||S.minFilter===Jr||S.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,oe[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,oe[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,oe[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Jr&&S.minFilter!==_i||S.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function De(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const Z=S.source;let se=f.get(Z);se===void 0&&(se={},f.set(Z,se));const J=N(S);if(J!==C.__cacheKey){se[J]===void 0&&(se[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[J].usedTimes++;const ae=se[C.__cacheKey];ae!==void 0&&(se[C.__cacheKey].usedTimes--,ae.usedTimes===0&&b(S)),C.__cacheKey=J,C.__webglTexture=se[J].texture}return G}function ze(C,S,G){return Math.floor(Math.floor(C/G)/S)}function Ze(C,S,G,Z){const J=C.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,Z,S.data);else{J.sort((le,me)=>le.start-me.start);let ae=0;for(let le=1;le<J.length;le++){const me=J[ae],We=J[le],Te=me.start+me.count,ye=ze(We.start,S.width,4),Xe=ze(me.start,S.width,4);We.start<=Te+1&&ye===Xe&&ze(We.start+We.count-1,S.width,4)===ye?me.count=Math.max(me.count,We.start+We.count-me.start):(++ae,J[ae]=We)}J.length=ae+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let le=0,me=J.length;le<me;le++){const We=J[le],Te=Math.floor(We.start/4),ye=Math.ceil(We.count/4),Xe=Te%S.width,O=Math.floor(Te/S.width),fe=ye,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Xe,O,fe,_e,G,Z,S.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function j(C,S,G){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const se=De(C,S),J=S.source;t.bindTexture(Z,C.__webglTexture,n.TEXTURE0+G);const ae=i.get(J);if(J.version!==ae.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const pe=ct.getPrimaries(ct.workingColorSpace),Ce=S.colorSpace===Zn?null:ct.getPrimaries(S.colorSpace),Fe=S.colorSpace===Zn||pe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=v(S.image,!1,r.maxTextureSize);le=Ke(S,le);const me=s.convert(S.format,S.colorSpace),We=s.convert(S.type);let Te=x(S.internalFormat,me,We,S.colorSpace,S.isVideoTexture);Be(Z,S);let ye;const Xe=S.mipmaps,O=S.isVideoTexture!==!0,fe=ae.__version===void 0||se===!0,_e=J.dataReady,Ie=A(S,le);if(S.isDepthTexture)Te=_(S.format===Or,S.type),fe&&(O?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,me,We,null));else if(S.isDataTexture)if(Xe.length>0){O&&fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Te,Xe[0].width,Xe[0].height);for(let he=0,ne=Xe.length;he<ne;he++)ye=Xe[he],O?_e&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ye.width,ye.height,me,We,ye.data):t.texImage2D(n.TEXTURE_2D,he,Te,ye.width,ye.height,0,me,We,ye.data);S.generateMipmaps=!1}else O?(fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Te,le.width,le.height),_e&&Ze(S,le,me,We)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,me,We,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Te,Xe[0].width,Xe[0].height,le.depth);for(let he=0,ne=Xe.length;he<ne;he++)if(ye=Xe[he],S.format!==_n)if(me!==null)if(O){if(_e)if(S.layerUpdates.size>0){const Pe=ql(ye.width,ye.height,S.format,S.type);for(const $e of S.layerUpdates){const ft=ye.data.subarray($e*Pe/ye.data.BYTES_PER_ELEMENT,($e+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,$e,ye.width,ye.height,1,me,ft)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,le.depth,me,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Te,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,le.depth,me,We,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Te,ye.width,ye.height,le.depth,0,me,We,ye.data)}else{O&&fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Te,Xe[0].width,Xe[0].height);for(let he=0,ne=Xe.length;he<ne;he++)ye=Xe[he],S.format!==_n?me!==null?O?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ye.width,ye.height,me,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_e&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ye.width,ye.height,me,We,ye.data):t.texImage2D(n.TEXTURE_2D,he,Te,ye.width,ye.height,0,me,We,ye.data)}else if(S.isDataArrayTexture)if(O){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Te,le.width,le.height,le.depth),_e)if(S.layerUpdates.size>0){const he=ql(le.width,le.height,S.format,S.type);for(const ne of S.layerUpdates){const Pe=le.data.subarray(ne*he/le.data.BYTES_PER_ELEMENT,(ne+1)*he/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,me,We,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,We,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,me,We,le.data);else if(S.isData3DTexture)O?(fe&&t.texStorage3D(n.TEXTURE_3D,Ie,Te,le.width,le.height,le.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,We,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,me,We,le.data);else if(S.isFramebufferTexture){if(fe)if(O)t.texStorage2D(n.TEXTURE_2D,Ie,Te,le.width,le.height);else{let he=le.width,ne=le.height;for(let Pe=0;Pe<Ie;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Te,he,ne,0,me,We,null),he>>=1,ne>>=1}}else if(Xe.length>0){if(O&&fe){const he=qe(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Te,he.width,he.height)}for(let he=0,ne=Xe.length;he<ne;he++)ye=Xe[he],O?_e&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,me,We,ye):t.texImage2D(n.TEXTURE_2D,he,Te,me,We,ye);S.generateMipmaps=!1}else if(O){if(fe){const he=qe(le);t.texStorage2D(n.TEXTURE_2D,Ie,Te,he.width,he.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,We,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,me,We,le);m(S)&&p(Z),ae.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ie(C,S,G){if(S.image.length!==6)return;const Z=De(C,S),se=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const J=i.get(se);if(se.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+G);const ae=ct.getPrimaries(ct.workingColorSpace),pe=S.colorSpace===Zn?null:ct.getPrimaries(S.colorSpace),Ce=S.colorSpace===Zn||ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Fe&&!le?me[ne]=v(S.image[ne],!0,r.maxCubemapSize):me[ne]=le?S.image[ne].image:S.image[ne],me[ne]=Ke(S,me[ne]);const We=me[0],Te=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),Xe=x(S.internalFormat,Te,ye,S.colorSpace),O=S.isVideoTexture!==!0,fe=J.__version===void 0||Z===!0,_e=se.dataReady;let Ie=A(S,We);Be(n.TEXTURE_CUBE_MAP,S);let he;if(Fe){O&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,We.width,We.height);for(let ne=0;ne<6;ne++){he=me[ne].mipmaps;for(let Pe=0;Pe<he.length;Pe++){const $e=he[Pe];S.format!==_n?Te!==null?O?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,$e.width,$e.height,Te,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Xe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,$e.width,$e.height,Te,ye,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Xe,$e.width,$e.height,0,Te,ye,$e.data)}}}else{if(he=S.mipmaps,O&&fe){he.length>0&&Ie++;const ne=qe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Te,ye,me[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,me[ne].width,me[ne].height,0,Te,ye,me[ne].data);for(let Pe=0;Pe<he.length;Pe++){const ft=he[Pe].image[ne].image;O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,ft.width,ft.height,Te,ye,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Xe,ft.width,ft.height,0,Te,ye,ft.data)}}else{O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,ye,me[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,Te,ye,me[ne]);for(let Pe=0;Pe<he.length;Pe++){const $e=he[Pe];O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Te,ye,$e.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Xe,Te,ye,$e.image[ne])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function be(C,S,G,Z,se,J){const ae=s.convert(G.format,G.colorSpace),pe=s.convert(G.type),Ce=x(G.internalFormat,ae,pe,G.colorSpace),Fe=i.get(S),le=i.get(G);if(le.__renderTarget=S,!Fe.__hasExternalTextures){const me=Math.max(1,S.width>>J),We=Math.max(1,S.height>>J);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Ce,me,We,S.depth,0,ae,pe,null):t.texImage2D(se,J,Ce,me,We,0,ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ue(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,se,le.__webglTexture,0,xe(S)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,se,le.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(C,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,J=_(S.stencilBuffer,se),ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=xe(S);ue(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,J,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,C)}else{const Z=S.textures;for(let se=0;se<Z.length;se++){const J=Z[se],ae=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),Ce=x(J.internalFormat,ae,pe,J.colorSpace),Fe=xe(S);G&&ue(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ce,S.width,S.height):ue(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const se=Z.__webglTexture,J=xe(S);if(S.depthTexture.format===Fr)ue(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===Or)ue(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function et(C){const S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?Re(S.__webglFramebuffer[0],C):Re(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Oe(S.__webglDepthbuffer[Z],C,!1);else{const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Oe(S.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(C,S,G){const Z=i.get(C);S!==void 0&&be(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&et(C)}function D(C){const S=C.texture,G=i.get(C),Z=i.get(S);C.addEventListener("dispose",R);const se=C.textures,J=C.isWebGLCubeRenderTarget===!0,ae=se.length>1;if(ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)G.__webglFramebuffer[pe][Ce]=n.createFramebuffer()}else G.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)G.__webglFramebuffer[pe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ae)for(let pe=0,Ce=se.length;pe<Ce;pe++){const Fe=i.get(se[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ue(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Ce=se[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const Fe=s.convert(Ce.format,Ce.colorSpace),le=s.convert(Ce.type),me=x(Ce.internalFormat,Fe,le,Ce.colorSpace,C.isXRRenderTarget===!0),We=xe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(n.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)be(G.__webglFramebuffer[pe][Ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else be(G.__webglFramebuffer[pe],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let pe=0,Ce=se.length;pe<Ce;pe++){const Fe=se[pe],le=i.get(Fe);let me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),Be(me,Fe),be(G.__webglFramebuffer,C,Fe,n.COLOR_ATTACHMENT0+pe,me,0),m(Fe)&&p(me)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),Be(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)be(G.__webglFramebuffer[Ce],C,S,n.COLOR_ATTACHMENT0,pe,Ce);else be(G.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,pe,0);m(S)&&p(pe),t.unbindTexture()}C.depthBuffer&&et(C)}function re(C){const S=C.textures;for(let G=0,Z=S.length;G<Z;G++){const se=S[G];if(m(se)){const J=y(C),ae=i.get(se).__webglTexture;t.bindTexture(J,ae),p(J),t.unbindTexture()}}}const Q=[],te=[];function ee(C){if(C.samples>0){if(ue(C)===!1){const S=C.textures,G=C.width,Z=C.height;let se=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(C),pe=S.length>1;if(pe)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Fe]);const le=i.get(S[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,se,n.NEAREST),l===!0&&(Q.length=0,te.length=0,Q.push(n.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push(J),te.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Fe]);const le=i.get(S[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function xe(C){return Math.min(r.maxSamples,C.samples)}function ue(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ke(C,S){const G=C.colorSpace,Z=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==nr&&G!==Zn&&(ct.getTransfer(G)===mt?(Z!==_n||se!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=ot,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ue}function G0(n,e){function t(i,r=Zn){let s;const o=ct.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===Ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===Vc)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Wr)return n.HALF_FLOAT;if(i===qc)return n.ALPHA;if(i===$c)return n.RGB;if(i===_n)return n.RGBA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Wa)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Yc)return n.RG;if(i===qa)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===Rs||i===Cs||i===Ps||i===Ls)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ra||i===sa||i===oa||i===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===la||i===ca||i===ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===la||i===ca)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ua)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ha||i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===va||i===xa||i===ya||i===Ma||i===Sa||i===ba||i===Ea)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ha)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ma)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_a)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===va)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ya)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ma)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ea)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===wa||i===Aa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ta)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ra||i===Ca||i===Pa||i===La)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ra)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:V0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends ar{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new X0,p={},y=t.getContextAttributes();let x=null,_=null;const A=[],T=[],R=new ge;let P=null;const b=new Yt;b.viewport=new St;const M=new Yt;M.viewport=new St;const L=[b,M],z=new dd;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=A[j];return ie===void 0&&(ie=new To,A[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=A[j];return ie===void 0&&(ie=new To,A[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=A[j];return ie===void 0&&(ie=new To,A[j]=ie),ie.getHandSpace()};function U(j){const ie=T.indexOf(j.inputSource);if(ie===-1)return;const be=A[ie];be!==void 0&&(be.update(j.inputSource,j.frame,c||o),be.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",X);for(let j=0;j<A.length;j++){const ie=T[j];ie!==null&&(T[j]=null,A[j].disconnect(ie))}F=null,N=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(x),d=null,f=null,u=null,r=null,_=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",B),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Oe=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Or:Fr,Oe=y.stencil?Nr:vi);const et={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(et),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new xi(f.textureWidth,f.textureHeight,{format:_n,type:wn,depthTexture:new lu(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(j){for(let ie=0;ie<j.removed.length;ie++){const be=j.removed[ie],Oe=T.indexOf(be);Oe>=0&&(T[Oe]=null,A[Oe].disconnect(be))}for(let ie=0;ie<j.added.length;ie++){const be=j.added[ie];let Oe=T.indexOf(be);if(Oe===-1){for(let et=0;et<A.length;et++)if(et>=T.length){T.push(be),Oe=et;break}else if(T[et]===null){T[et]=be,Oe=et;break}if(Oe===-1)break}const Re=A[Oe];Re&&Re.connect(be)}}const q=new I,oe=new I;function de(j,ie,be){q.setFromMatrixPosition(ie.matrixWorld),oe.setFromMatrixPosition(be.matrixWorld);const Oe=q.distanceTo(oe),Re=ie.projectionMatrix.elements,et=be.projectionMatrix.elements,ot=Re[14]/(Re[10]-1),D=Re[14]/(Re[10]+1),re=(Re[9]+1)/Re[5],Q=(Re[9]-1)/Re[5],te=(Re[8]-1)/Re[0],ee=(et[8]+1)/et[0],xe=ot*te,ue=ot*ee,Me=Oe/(-te+ee),Ke=Me*-te;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const qe=ot+Me,C=D+Me,S=xe-Ke,G=ue+(Oe-Ke),Z=re*D/C*qe,se=Q*D/C*qe;j.projectionMatrix.makePerspective(S,G,Z,se,qe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,be=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(be=m.depthFar)),z.near=M.near=b.near=ie,z.far=M.far=b.far=be,(F!==z.near||N!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,N=z.far),z.layers.mask=j.layers.mask|6,b.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Oe=j.parent,Re=z.cameras;ve(z,Oe);for(let et=0;et<Re.length;et++)ve(Re[et],Oe);Re.length===2?de(z,b,M):z.projectionMatrix.copy(b.projectionMatrix),Be(j,z,Oe)};function Be(j,ie,be){be===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Br*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return p[j]};let De=null;function ze(j,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){const be=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Oe=!1;be.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let D=0;D<be.length;D++){const re=be[D];let Q=null;if(d!==null)Q=d.getViewport(re);else{const ee=u.getViewSubImage(f,re);Q=ee.viewport,D===0&&(e.setRenderTargetTextures(_,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(_))}let te=L[D];te===void 0&&(te=new Yt,te.layers.enable(D),te.viewport=new St,L[D]=te),te.matrix.fromArray(re.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(re.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(z.matrix.copy(te.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(te)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const D=u.getDepthInformation(be[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<be.length;D++){const re=be[D].camera;if(re){let Q=p[re];Q||(Q=new cu,p[re]=Q);const te=u.getCameraImage(re);Q.sourceTexture=te}}}}for(let be=0;be<A.length;be++){const Oe=T[be],Re=A[be];Oe!==null&&Re!==void 0&&Re.update(Oe,ie,c||o)}De&&De(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new bu;Ze.setAnimationLoop(ze),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}}const li=new Nt,$0=new _t;function Y0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,iu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,li.copy(_),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(li)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function K0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(g(y),_=h(y),r[y.id]=_,y.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(y,A);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function h(y){const x=u();y.__bindingPointIndex=x;const _=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],_=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,R=_.length;T<R;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(d(L,T,b,A)===!0){const z=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let U=0;U<F.length;U++){const B=F[U],X=v(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,z+N,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,_,A){const T=y.value,R=x+"_"+_;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const P=A[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const x=y.uniforms;let _=0;const A=16;for(let R=0,P=x.length;R<P;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,L=b.length;M<L;M++){const z=b[M],F=Array.isArray(z.value)?z.value:[z.value];for(let N=0,U=F.length;N<U;N++){const B=F[N],X=v(B),q=_%A,oe=q%X.boundary,de=q+oe;_+=oe,de!==0&&A-de<X.storage&&(_+=A-de),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=X.storage}}}const T=_%A;return T>0&&(_+=A-T),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Z0{constructor(e={}){const{canvas:t=Zh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Lt;let T=0,R=0,P=null,b=-1,M=null;const L=new St,z=new St;let F=null;const N=new Qe(0);let U=0,B=t.width,X=t.height,q=1,oe=null,de=null;const ve=new St(0,0,B,X),Be=new St(0,0,B,X);let De=!1;const ze=new ja;let Ze=!1,j=!1;const ie=new _t,be=new I,Oe=new St,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ot(){return P===null?q:1}let D=i;function re(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const H="webgl2";if(D=re(H,E),D===null)throw re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,te,ee,xe,ue,Me,Ke,qe,C,S,G,Z,se,J,ae,pe,Ce,Fe,le,me,We,Te,ye,Xe;function O(){Q=new og(D),Q.init(),Te=new G0(D,Q),te=new Qm(D,Q,e,Te),ee=new k0(D,Q),te.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),xe=new cg(D),ue=new A0,Me=new H0(D,Q,ee,ue,te,Te,xe),Ke=new tg(_),qe=new sg(_),C=new md(D),ye=new Jm(D,C),S=new ag(D,C,xe,ye),G=new hg(D,S,C,xe),le=new ug(D,te,Me),pe=new eg(ue),Z=new w0(_,Ke,qe,Q,te,ye,pe),se=new Y0(_,ue),J=new C0,ae=new N0(Q),Fe=new Zm(_,Ke,qe,ee,G,d,l),Ce=new B0(_,G,te),Xe=new K0(D,xe,te,ee),me=new jm(D,Q,xe),We=new lg(D,Q,xe),xe.programs=Z.programs,_.capabilities=te,_.extensions=Q,_.properties=ue,_.renderLists=J,_.shadowMap=Ce,_.state=ee,_.info=xe}O();const fe=new q0(_,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(B,X,!1))},this.getSize=function(E){return E.set(B,X)},this.setSize=function(E,H,Y=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,X=H,t.width=Math.floor(E*q),t.height=Math.floor(H*q),Y===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(B*q,X*q).floor()},this.setDrawingBufferSize=function(E,H,Y){B=E,X=H,q=Y,t.width=Math.floor(E*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,H,Y,K){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,H,Y,K),ee.viewport(L.copy(ve).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,H,Y,K){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,H,Y,K),ee.scissor(z.copy(Be).multiplyScalar(q).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){ee.setScissorTest(De=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Y=!0){let K=0;if(E){let W=!1;if(P!==null){const ce=P.texture.format;W=ce===$a||ce===qa||ce===Xa}if(W){const ce=P.texture.type,Ee=ce===wn||ce===vi||ce===Ur||ce===Nr||ce===Ga||ce===Va,Ue=Fe.getClearColor(),Le=Fe.getClearAlpha(),Ge=Ue.r,Ve=Ue.g,ke=Ue.b;Ee?(g[0]=Ge,g[1]=Ve,g[2]=ke,g[3]=Le,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ge,v[1]=Ve,v[2]=ke,v[3]=Le,D.clearBufferiv(D.COLOR,0,v))}else K|=D.COLOR_BUFFER_BIT}H&&(K|=D.DEPTH_BUFFER_BIT),Y&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),J.dispose(),ae.dispose(),ue.dispose(),Ke.dispose(),qe.dispose(),G.dispose(),ye.dispose(),Xe.dispose(),Z.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Wt),fe.removeEventListener("sessionend",wi),Xt.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=xe.autoReset,H=Ce.enabled,Y=Ce.autoUpdate,K=Ce.needsUpdate,W=Ce.type;O(),xe.autoReset=E,Ce.enabled=H,Ce.autoUpdate=Y,Ce.needsUpdate=K,Ce.type=W}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const H=E.target;H.removeEventListener("dispose",ne),Pe(H)}function Pe(E){$e(E),ue.remove(E)}function $e(E){const H=ue.get(E).programs;H!==void 0&&(H.forEach(function(Y){Z.releaseProgram(Y)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,K,W,ce){H===null&&(H=Re);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Ue=js(E,H,Y,K,W);ee.setMaterial(K,Ee);let Le=Y.index,Ge=1;if(K.wireframe===!0){if(Le=S.getWireframeAttribute(Y),Le===void 0)return;Ge=2}const Ve=Y.drawRange,ke=Y.attributes.position;let nt=Ve.start*Ge,ht=(Ve.start+Ve.count)*Ge;ce!==null&&(nt=Math.max(nt,ce.start*Ge),ht=Math.min(ht,(ce.start+ce.count)*Ge)),Le!==null?(nt=Math.max(nt,0),ht=Math.min(ht,Le.count)):ke!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,ke.count));const gt=ht-nt;if(gt<0||gt===1/0)return;ye.setup(W,K,Ue,Y,Le);let dt,pt=me;if(Le!==null&&(dt=C.get(Le),pt=We,pt.setIndex(dt)),W.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*ot()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(W.isLine){let w=K.linewidth;w===void 0&&(w=1),ee.setLineWidth(w*ot()),W.isLineSegments?pt.setMode(D.LINES):W.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else W.isPoints?pt.setMode(D.POINTS):W.isSprite&&pt.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const w=W._multiDrawStarts,V=W._multiDrawCounts,k=W._multiDrawCount,$=Le?C.get(Le).bytesPerElement:1,we=ue.get(K).currentProgram.getUniforms();for(let He=0;He<k;He++)we.setValue(D,"_gl_DrawID",He),pt.render(w[He]/$,V[He])}else if(W.isInstancedMesh)pt.renderInstances(nt,gt,W.count);else if(Y.isInstancedBufferGeometry){const w=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,V=Math.min(Y.instanceCount,w);pt.renderInstances(nt,gt,V)}else pt.render(nt,gt)};function ft(E,H,Y){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Gn(E,H,Y),E.side=ti,E.needsUpdate=!0,Gn(E,H,Y),E.side=jt):Gn(E,H,Y)}this.compile=function(E,H,Y=null){Y===null&&(Y=E),p=ae.get(Y),p.init(H),x.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const K=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ce=W.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){const Ue=ce[Ee];ft(Ue,Y,W),K.add(Ue)}else ft(ce,Y,W),K.add(ce)}),p=x.pop(),K},this.compileAsync=function(E,H,Y=null){const K=this.compile(E,H,Y);return new Promise(W=>{function ce(){if(K.forEach(function(Ee){ue.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){W(E);return}setTimeout(ce,10)}Q.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let lt=null;function cn(E){lt&&lt(E)}function Wt(){Xt.stop()}function wi(){Xt.start()}const Xt=new bu;Xt.setAnimationLoop(cn),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(E){lt=E,fe.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},fe.addEventListener("sessionstart",Wt),fe.addEventListener("sessionend",wi),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,H,P),p=ae.get(E,x.length),p.init(H),x.push(p),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ze.setFromProjectionMatrix(ie,bn,H.reversedDepth),j=this.localClippingEnabled,Ze=pe.init(this.clippingPlanes,j),m=J.get(E,y.length),m.init(),y.push(m),fe.enabled===!0&&fe.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&Ai(ce,H,-1/0,_.sortObjects)}Ai(E,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,de),et=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,et&&Fe.addToRenderList(m,E),this.info.render.frame++,Ze===!0&&pe.beginShadows();const Y=p.state.shadowsArray;Ce.render(Y,E,H),Ze===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,W=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ce=H.cameras;if(W.length>0)for(let Ee=0,Ue=ce.length;Ee<Ue;Ee++){const Le=ce[Ee];Ri(K,W,E,Le)}et&&Fe.render(E);for(let Ee=0,Ue=ce.length;Ee<Ue;Ee++){const Le=ce[Ee];Pn(m,E,Le,Le.viewport)}}else W.length>0&&Ri(K,W,E,H),et&&Fe.render(E),Pn(m,E,H);P!==null&&R===0&&(Me.updateMultisampleRenderTarget(P),Me.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,H),ye.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Ze===!0&&pe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ai(E,H,Y,K){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){K&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ee=G.update(E),Ue=E.material;Ue.visible&&m.push(E,Ee,Ue,Y,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const Ee=G.update(E),Ue=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(Ue)){const Le=Ee.groups;for(let Ge=0,Ve=Le.length;Ge<Ve;Ge++){const ke=Le[Ge],nt=Ue[ke.materialIndex];nt&&nt.visible&&m.push(E,Ee,nt,Y,Oe.z,ke)}}else Ue.visible&&m.push(E,Ee,Ue,Y,Oe.z,null)}}const ce=E.children;for(let Ee=0,Ue=ce.length;Ee<Ue;Ee++)Ai(ce[Ee],H,Y,K)}function Pn(E,H,Y,K){const W=E.opaque,ce=E.transmissive,Ee=E.transparent;p.setupLightsView(Y),Ze===!0&&pe.setGlobalState(_.clippingPlanes,Y),K&&ee.viewport(L.copy(K)),W.length>0&&Hn(W,H,Y),ce.length>0&&Hn(ce,H,Y),Ee.length>0&&Hn(Ee,H,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ri(E,H,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new xi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Wr:wn,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ce=p.state.transmissionRenderTarget[K.id],Ee=K.viewport||L;ce.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);const Ue=_.getRenderTarget(),Le=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(ce),_.getClearColor(N),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),et&&Fe.render(Y);const Ve=_.toneMapping;_.toneMapping=ei;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Ze===!0&&pe.setGlobalState(_.clippingPlanes,K),Hn(E,Y,K),Me.updateMultisampleRenderTarget(ce),Me.updateRenderTargetMipmap(ce),Q.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ht=0,gt=H.length;ht<gt;ht++){const dt=H[ht],pt=dt.object,w=dt.geometry,V=dt.material,k=dt.group;if(V.side===jt&&pt.layers.test(K.layers)){const $=V.side;V.side=Vt,V.needsUpdate=!0,Ci(pt,Y,K,w,V,k),V.side=$,V.needsUpdate=!0,nt=!0}}nt===!0&&(Me.updateMultisampleRenderTarget(ce),Me.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ue,Le,Ge),_.setClearColor(N,U),ke!==void 0&&(K.viewport=ke),_.toneMapping=Ve}function Hn(E,H,Y){const K=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ce=E.length;W<ce;W++){const Ee=E[W],Ue=Ee.object,Le=Ee.geometry,Ge=Ee.group;let Ve=Ee.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),Ue.layers.test(Y.layers)&&Ci(Ue,H,Y,Le,Ve,Ge)}}function Ci(E,H,Y,K,W,ce){E.onBeforeRender(_,H,Y,K,W,ce),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(_,H,Y,K,E,ce),W.transparent===!0&&W.side===jt&&W.forceSinglePass===!1?(W.side=Vt,W.needsUpdate=!0,_.renderBufferDirect(Y,H,K,W,E,ce),W.side=ti,W.needsUpdate=!0,_.renderBufferDirect(Y,H,K,W,E,ce),W.side=jt):_.renderBufferDirect(Y,H,K,W,E,ce),E.onAfterRender(_,H,Y,K,W,ce)}function Gn(E,H,Y){H.isScene!==!0&&(H=Re);const K=ue.get(E),W=p.state.lights,ce=p.state.shadowsArray,Ee=W.state.version,Ue=Z.getParameters(E,W.state,ce,H,Y),Le=Z.getProgramCacheKey(Ue);let Ge=K.programs;K.environment=E.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(E.isMeshStandardMaterial?qe:Ke).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",ne),Ge=new Map,K.programs=Ge);let Ve=Ge.get(Le);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Ee)return Kr(E,Ue),Ve}else Ue.uniforms=Z.getUniforms(E),E.onBeforeCompile(Ue,_),Ve=Z.acquireProgram(Ue,Le),Ge.set(Le,Ve),K.uniforms=Ue.uniforms;const ke=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=pe.uniform),Kr(E,Ue),K.needsLights=fr(E),K.lightsStateVersion=Ee,K.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function hr(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Kr(E,H){const Y=ue.get(E);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function js(E,H,Y,K,W){H.isScene!==!0&&(H=Re),Me.resetTextureUnits();const ce=H.fog,Ee=K.isMeshStandardMaterial?H.environment:null,Ue=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:nr,Le=(K.isMeshStandardMaterial?qe:Ke).get(K.envMap||Ee),Ge=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,ht=!!Y.morphAttributes.color;let gt=ei;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=_.toneMapping);const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=dt!==void 0?dt.length:0,w=ue.get(K),V=p.state.lights;if(Ze===!0&&(j===!0||E!==M)){const Rt=E===M&&K.id===b;pe.setState(K,E,Rt)}let k=!1;K.version===w.__version?(w.needsLights&&w.lightsStateVersion!==V.state.version||w.outputColorSpace!==Ue||W.isBatchedMesh&&w.batching===!1||!W.isBatchedMesh&&w.batching===!0||W.isBatchedMesh&&w.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&w.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&w.instancing===!1||!W.isInstancedMesh&&w.instancing===!0||W.isSkinnedMesh&&w.skinning===!1||!W.isSkinnedMesh&&w.skinning===!0||W.isInstancedMesh&&w.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&w.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&w.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&w.instancingMorph===!1&&W.morphTexture!==null||w.envMap!==Le||K.fog===!0&&w.fog!==ce||w.numClippingPlanes!==void 0&&(w.numClippingPlanes!==pe.numPlanes||w.numIntersection!==pe.numIntersection)||w.vertexAlphas!==Ge||w.vertexTangents!==Ve||w.morphTargets!==ke||w.morphNormals!==nt||w.morphColors!==ht||w.toneMapping!==gt||w.morphTargetsCount!==pt)&&(k=!0):(k=!0,w.__version=K.version);let $=w.currentProgram;k===!0&&($=Gn(K,H,W));let we=!1,He=!1,Je=!1;const Ne=$.getUniforms(),it=w.uniforms;if(ee.useProgram($.program)&&(we=!0,He=!0,Je=!0),K.id!==b&&(b=K.id,He=!0),we||M!==E){ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ne.setValue(D,"projectionMatrix",E.projectionMatrix),Ne.setValue(D,"viewMatrix",E.matrixWorldInverse);const qt=Ne.map.cameraPosition;qt!==void 0&&qt.setValue(D,be.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&Ne.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ne.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,He=!0,Je=!0)}if(W.isSkinnedMesh){Ne.setOptional(D,W,"bindMatrix"),Ne.setOptional(D,W,"bindMatrixInverse");const Rt=W.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Ne.setValue(D,"boneTexture",Rt.boneTexture,Me))}W.isBatchedMesh&&(Ne.setOptional(D,W,"batchingTexture"),Ne.setValue(D,"batchingTexture",W._matricesTexture,Me),Ne.setOptional(D,W,"batchingIdTexture"),Ne.setValue(D,"batchingIdTexture",W._indirectTexture,Me),Ne.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Ne.setValue(D,"batchingColorTexture",W._colorsTexture,Me));const Ut=Y.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&le.update(W,Y,$),(He||w.receiveShadow!==W.receiveShadow)&&(w.receiveShadow=W.receiveShadow,Ne.setValue(D,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(it.envMap.value=Le,it.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(it.envMapIntensity.value=H.environmentIntensity),He&&(Ne.setValue(D,"toneMappingExposure",_.toneMappingExposure),w.needsLights&&Qs(it,Je),ce&&K.fog===!0&&se.refreshFogUniforms(it,ce),se.refreshMaterialUniforms(it,K,q,X,p.state.transmissionRenderTarget[E.id]),Is.upload(D,hr(w),it,Me)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Is.upload(D,hr(w),it,Me),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ne.setValue(D,"center",W.center),Ne.setValue(D,"modelViewMatrix",W.modelViewMatrix),Ne.setValue(D,"normalMatrix",W.normalMatrix),Ne.setValue(D,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Rt=K.uniformsGroups;for(let qt=0,no=Rt.length;qt<no;qt++){const ni=Rt[qt];Xe.update(ni,$),Xe.bind(ni,$)}}return $}function Qs(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function fr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,H,Y){const K=ue.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ue.get(E.texture).__webglTexture=H,ue.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const Y=ue.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const eo=D.createFramebuffer();this.setRenderTarget=function(E,H=0,Y=0){P=E,T=H,R=Y;let K=!0,W=null,ce=!1,Ee=!1;if(E){const Le=ue.get(E);if(Le.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Le.__webglFramebuffer===void 0)Me.setupRenderTarget(E);else if(Le.__hasExternalTextures)Me.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&ue.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Ve=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?W=Ve[H][Y]:W=Ve[H],ce=!0):E.samples>0&&Me.useMultisampledRTT(E)===!1?W=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[Y]:W=Ve,L.copy(E.viewport),z.copy(E.scissor),F=E.scissorTest}else L.copy(ve).multiplyScalar(q).floor(),z.copy(Be).multiplyScalar(q).floor(),F=De;if(Y!==0&&(W=eo),ee.bindFramebuffer(D.FRAMEBUFFER,W)&&K&&ee.drawBuffers(E,W),ee.viewport(L),ee.scissor(z),ee.setScissorTest(F),ce){const Le=ue.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,Y)}else if(Ee){const Le=H;for(let Ge=0;Ge<E.textures.length;Ge++){const Ve=ue.get(E.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,Ve.__webglTexture,Y,Le)}}else if(E!==null&&Y!==0){const Le=ue.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Le.__webglTexture,Y)}b=-1},this.readRenderTargetPixels=function(E,H,Y,K,W,ce,Ee,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){ee.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Ge=E.textures[Ue],Ve=Ge.format,ke=Ge.type;if(!te.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-W&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(H,Y,K,W,Te.convert(Ve),Te.convert(ke),ce))}finally{const Ge=P!==null?ue.get(P).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,H,Y,K,W,ce,Ee,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-W){ee.bindFramebuffer(D.FRAMEBUFFER,Le);const Ge=E.textures[Ue],Ve=Ge.format,ke=Ge.type;if(!te.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(H,Y,K,W,Te.convert(Ve),Te.convert(ke),0);const ht=P!==null?ue.get(P).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,ht);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jh(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(nt),D.deleteSync(gt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Y=0){const K=Math.pow(2,-Y),W=Math.floor(E.image.width*K),ce=Math.floor(E.image.height*K),Ee=H!==null?H.x:0,Ue=H!==null?H.y:0;Me.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ee,Ue,W,ce),ee.unbindTexture()};const Zr=D.createFramebuffer(),to=D.createFramebuffer();this.copyTextureToTexture=function(E,H,Y=null,K=null,W=0,ce=null){ce===null&&(W!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=W,W=0):ce=0);let Ee,Ue,Le,Ge,Ve,ke,nt,ht,gt;const dt=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(Y!==null)Ee=Y.max.x-Y.min.x,Ue=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Ge=Y.min.x,Ve=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{const Ut=Math.pow(2,-W);Ee=Math.floor(dt.width*Ut),Ue=Math.floor(dt.height*Ut),E.isDataArrayTexture?Le=dt.depth:E.isData3DTexture?Le=Math.floor(dt.depth*Ut):Le=1,Ge=0,Ve=0,ke=0}K!==null?(nt=K.x,ht=K.y,gt=K.z):(nt=0,ht=0,gt=0);const pt=Te.convert(H.format),w=Te.convert(H.type);let V;H.isData3DTexture?(Me.setTexture3D(H,0),V=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Me.setTexture2DArray(H,0),V=D.TEXTURE_2D_ARRAY):(Me.setTexture2D(H,0),V=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const k=D.getParameter(D.UNPACK_ROW_LENGTH),$=D.getParameter(D.UNPACK_IMAGE_HEIGHT),we=D.getParameter(D.UNPACK_SKIP_PIXELS),He=D.getParameter(D.UNPACK_SKIP_ROWS),Je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);const Ne=E.isDataArrayTexture||E.isData3DTexture,it=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Ut=ue.get(E),Rt=ue.get(H),qt=ue.get(Ut.__renderTarget),no=ue.get(Rt.__renderTarget);ee.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let ni=0;ni<Le;ni++)Ne&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(E).__webglTexture,W,ke+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(H).__webglTexture,ce,gt+ni)),D.blitFramebuffer(Ge,Ve,Ee,Ue,nt,ht,Ee,Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||ue.has(E)){const Ut=ue.get(E),Rt=ue.get(H);ee.bindFramebuffer(D.READ_FRAMEBUFFER,Zr),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,to);for(let qt=0;qt<Le;qt++)Ne?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,W,ke+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,W),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,ce,gt+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,ce),W!==0?D.blitFramebuffer(Ge,Ve,Ee,Ue,nt,ht,Ee,Ue,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(V,ce,nt,ht,gt+qt,Ge,Ve,Ee,Ue):D.copyTexSubImage2D(V,ce,nt,ht,Ge,Ve,Ee,Ue);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(V,ce,nt,ht,gt,Ee,Ue,Le,pt,w,dt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(V,ce,nt,ht,gt,Ee,Ue,Le,pt,dt.data):D.texSubImage3D(V,ce,nt,ht,gt,Ee,Ue,Le,pt,w,dt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,nt,ht,Ee,Ue,pt,w,dt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,nt,ht,dt.width,dt.height,pt,dt.data):D.texSubImage2D(D.TEXTURE_2D,ce,nt,ht,Ee,Ue,pt,w,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,k),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Je),ce===0&&H.generateMipmaps&&D.generateMipmap(V),ee.unbindTexture()},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&Me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Me.setTextureCube(E,0):E.isData3DTexture?Me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Me.setTexture2DArray(E,0):Me.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,ee.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}function J0(){const n=document.documentElement,e=document.querySelector(".hero-visual"),t=document.getElementById("theme-motion"),i=matchMedia("(prefers-reduced-motion: reduce)");let r=!i.matches,s=!1;try{const c=localStorage.getItem("en-bac-motion");(c==="on"||c==="off")&&(r=c==="on",s=!0)}catch{}const o=()=>{e.style.setProperty("--look-x","0"),e.style.setProperty("--look-y","0")};function a(){n.classList.toggle("theme-motion",r),t.setAttribute("aria-pressed",String(r)),t.textContent=r?"CHUYỂN ĐỘNG: BẬT":"CHUYỂN ĐỘNG: TẮT",o()}t.addEventListener("click",()=>{s=!0,r=!r;try{localStorage.setItem("en-bac-motion",r?"on":"off")}catch{}a()}),i.addEventListener("change",()=>{s||(r=!i.matches,a())}),e.addEventListener("pointermove",c=>{if(!r||c.pointerType==="touch")return;const h=e.getBoundingClientRect();e.style.setProperty("--look-x",String((c.clientX-h.left)/h.width-.5)),e.style.setProperty("--look-y",String((c.clientY-h.top)/h.height-.5))}),e.addEventListener("pointerleave",o),document.addEventListener("visibilitychange",()=>n.classList.toggle("theme-suspended",document.hidden));const l=e.querySelector(".tribute-sparks");for(let c=0;c<14;c++){const h=document.createElement("i");h.style.setProperty("--spark-x",`${c*37%100}%`),h.style.setProperty("--delay",`${-c*1.7}s`),h.style.setProperty("--duration",`${9+c%5}s`),l.append(h)}a()}const $t=(n,e,t)=>Math.max(e,Math.min(t,n));function j0(n,e,t,i){const r=e.x-n.x,s=e.y-n.y,o=e.z-n.z,a=r*r+s*s+o*o,l=a===0?0:$t(((t.x-n.x)*r+(t.y-n.y)*s+(t.z-n.z)*o)/a,0,1);return(n.x+r*l-t.x)**2+(n.y+s*l-t.y)**2+(n.z+o*l-t.z)**2<=i**2}function _c(){return{health:100,enemyHealth:100,elapsed:0,shots:0,hits:0}}const mi=Object.freeze({cruiseSpeed:210,maxSpeed:340,minSpeed:45,stallSpeed:85,recoverySpeed:110}),yr=Object.freeze({cruiseSpeed:100,stallSpeed:66,recoverySpeed:80,brake:-22,maxSpeed:180}),Q0=new I(0,0,-1),e_=new I(0,1,0);function Bo(n=new I(0,850,0)){return{position:n.clone(),orientation:new Kt,velocity:new I(0,0,-mi.cruiseSpeed),angularVelocity:new I,speed:mi.cruiseSpeed,throttle:.65,stalled:!1,sink:0,highG:!1,afterburner:!1,load:1}}function mn(n){return Q0.clone().applyQuaternion(n.orientation)}function t_(n){return e_.clone().applyQuaternion(n.orientation)}function n_(n,e,t,i="expert"){const r=$t(e.pitch||0,-1,1),s=$t(e.roll||0,-1,1),o=$t(e.yaw||0,-1,1);n.highG=!!(e.accelerate&&e.brake&&Math.abs(r)>.15&&n.speed>95&&!n.stalled),n.afterburner=!!(e.accelerate&&!e.brake),n.throttle=n.afterburner?1:e.brake?0:.65;const a=!!e.gear;let l=n.afterburner?65:e.brake?a?yr.brake:-60:((a?yr.cruiseSpeed:mi.cruiseSpeed)-n.speed)*.3;a&&n.speed>yr.maxSpeed&&(l-=45),n.highG&&(l-=35),l-=mn(n).y*20,n.speed=$t(n.speed+l*t,mi.minSpeed,mi.maxSpeed),n.stalled=n.stalled?n.speed<(a?yr.recoverySpeed:mi.recoverySpeed):n.speed<(a?yr.stallSpeed:mi.stallSpeed);const c=n.stalled?.28:$t(n.speed/150,.45,1)*(1-Math.max(0,n.speed-240)/420),h=(n.highG?1.85:.78)*c,u=new I(r*h,o*.4*c,s*2.05*c);if(n.angularVelocity.lerp(u,1-Math.exp(-t*8)),i==="standard"){const d=new Nt().setFromQuaternion(n.orientation,"YXZ");d.x=$t(d.x+r*h*t,-1.3,1.3),d.y+=(s*.8+o*.4)*c*t,d.z=Ia.damp(d.z,s*.65,5,t),n.orientation.setFromEuler(d)}else{const d=n.angularVelocity.length()*t;d>0&&n.orientation.multiply(new Kt().setFromAxisAngle(n.angularVelocity.clone().normalize(),d)).normalize()}n.sink=Ia.damp(n.sink,n.stalled?85:0,n.stalled?.65:2.5,t);const f=mn(n).multiplyScalar(n.speed);return f.y-=n.sink,n.velocity.lerp(f,1-Math.exp(-t*(n.stalled?1.7:6))),n.position.addScaledVector(n.velocity,t),n.load=$t(1+Math.abs(n.angularVelocity.x)*n.speed/35,1,9.5),n}function i_(n){return{pitch:Number(n.has("KeyW")||n.has("ArrowUp"))-Number(n.has("KeyS")||n.has("ArrowDown")),roll:Number(n.has("KeyA")||n.has("ArrowLeft"))-Number(n.has("KeyD")||n.has("ArrowRight")),yaw:Number(n.has("KeyQ"))-Number(n.has("KeyE")),accelerate:n.has("Space"),brake:n.has("ControlLeft")||n.has("ControlRight")}}const Bn=Object.freeze({range:2400,lockCone:Math.cos(25*Math.PI/180),lockTime:.85,reload:3.2,ammo:12,lifetime:8,speed:660,turnRate:1.45}),Vr=Object.freeze({ammo:6,cooldown:3,lifetime:2.2,radius:800});function zo(){return{ammo:Bn.ammo,rails:[0,0],lock:0,locked:!1,flares:Vr.ammo,flareCooldown:0,gunCooldown:0}}function vc(n,e,t,i,r,s=!0){n.rails=n.rails.map(l=>Math.max(0,l-e)),n.flareCooldown=Math.max(0,n.flareCooldown-e),n.gunCooldown=Math.max(0,n.gunCooldown-e);const o=r.clone().sub(t),a=s&&o.length()<=Bn.range&&o.length()>5&&i.dot(o.normalize())>=Bn.lockCone;n.lock=a?$t(n.lock+e/Bn.lockTime,0,1):0,n.locked=n.lock>=1}function r_(n,e,t,i=!1){const r=n.rails.findIndex(s=>s<=0);return n.ammo<=0||r===-1?null:(n.ammo--,n.rails[r]=Bn.reload,{position:e.clone().addScaledVector(t,12),previous:e.clone().addScaledVector(t,12),direction:t.clone().normalize(),speed:i?510:Bn.speed,turnRate:i?.92:Bn.turnRate,life:Bn.lifetime,guided:n.locked,hostile:i,rail:r,age:0,distance:0,decoyed:!1})}function s_(n,e,t,i=!1){return n.flares<=0||n.flareCooldown>0?null:(n.flares--,n.flareCooldown=Vr.cooldown,{position:e.clone(),velocity:t.clone().multiplyScalar(.35),life:Vr.lifetime,hostile:i})}function rl(n,e,t){const i=n.angleTo(e);if(i<1e-7)return n;const r=new Kt().setFromUnitVectors(n,e);return n.applyQuaternion(new Kt().slerp(r,Math.min(1,t/i))).normalize(),n}function o_(n,e,t,i,r){if(n.previous.copy(n.position),n.age+=e,n.life-=e,n.guided&&r.find(o=>o.life>0&&o.hostile!==n.hostile&&o.position.distanceTo(n.position)<Vr.radius)&&(n.guided=!1,n.decoyed=!0),n.guided&&n.age>.15){const o=t.clone().sub(n.position);if(n.direction.dot(o.clone().normalize())<-.15)n.guided=!1;else{const a=Math.min(.65,o.length()/n.speed*.65),l=t.clone().addScaledVector(i,a).sub(n.position).normalize();rl(n.direction,l,n.turnRate*e)}}return n.position.addScaledVector(n.direction,n.speed*e),n.distance+=n.speed*e,n}function Es(n,e,t,i,r){return j0(n.clone().sub(t),e.clone().sub(i),new I,r)}function Ru(n,e,t,i){const r=e.clone().sub(n),s=t.lengthSq()-i**2,o=2*r.dot(t),a=r.lengthSq();let l=0;if(Math.abs(s)<1e-6)l=Math.abs(o)>1e-6?-a/o:0;else{const c=o*o-4*s*a;if(c>=0){const h=[(-o-Math.sqrt(c))/(2*s),(-o+Math.sqrt(c))/(2*s)].filter(u=>u>0);l=h.length?Math.min(...h):0}}return e.clone().addScaledVector(t,$t(l,0,3))}const Ds=new I(0,1,0),xc=Object.freeze({easy:Object.freeze({label:"Dễ",grace:12,turnRate:.3,dodgeRate:.45,pursuitTime:8,recoveryTime:6,speed:170,dodgeSpeed:190,gunInterval:.9,missileInterval:14,gunRange:700,missileRange:1700,gunDamage:2,missileDamage:20,ammo:4,flares:2}),normal:Object.freeze({label:"Thường",grace:7,turnRate:.44,dodgeRate:.7,pursuitTime:12,recoveryTime:4,speed:185,dodgeSpeed:205,gunInterval:.45,missileInterval:9,gunRange:850,missileRange:2100,gunDamage:3,missileDamage:28,ammo:6,flares:3})});function a_(n="easy",e=null){const t=Object.hasOwn(xc,n)?n:"easy",i=xc[t],r=e?Object.freeze({...i,turnRate:i.turnRate*(e.turnRate??1),dodgeRate:i.dodgeRate*(e.turnRate??1),speed:i.speed*(e.speed??1),dodgeSpeed:i.dodgeSpeed*(e.speed??1),gunInterval:i.gunInterval*(e.gunInterval??1),missileInterval:i.missileInterval*(e.missileInterval??1),gunRange:e.gunRange??i.gunRange,ammo:(e.ammo??i.ammo)+(e.ammoBonus??0)}):i;return{level:t,config:r,elapsed:0,phase:"grace",gunTimer:0,missileTimer:0,recoveryCycle:-1,recoveryHeading:new I}}function l_(n,{position:e,forward:t,playerPosition:i,incomingPosition:r=null,groundHeight:s=0},o){const a=n.config,l=Number.isFinite(o)?Math.max(0,o):0;n.elapsed+=l,n.gunTimer=Math.max(0,n.gunTimer-l),n.missileTimer=Math.max(0,n.missileTimer-l);const c=Math.max(0,n.elapsed-a.grace),h=a.pursuitTime+a.recoveryTime,u=Math.floor(c/h);n.phase=n.elapsed<a.grace?"grace":c%h<a.pursuitTime?"pursuit":"recovery";const f=i.clone().sub(e),d=f.length(),g=r?e.distanceTo(r):1/0,v=n.phase!=="grace"&&g<600,m=t.clone();n.phase==="recovery"?(n.recoveryCycle!==u&&(n.recoveryHeading.copy(t).applyAxisAngle(Ds,Math.PI*.4),n.recoveryCycle=u),m.copy(n.recoveryHeading)):n.phase==="pursuit"&&d>1e-6&&(m.copy(f).normalize(),d<250&&m.addScaledVector(t,1.8)),v&&(m.subVectors(e,r).cross(Ds),m.lengthSq()<1e-8&&m.copy(t).applyAxisAngle(Ds,Math.PI/2),m.normalize(),m.y=.2),e.y<Math.max(280,s+220)&&(m.y=.8),e.y>3500&&(m.y=-.6),m.lengthSq()>1e-8&&rl(t,m.normalize(),l*(v?a.dodgeRate:a.turnRate));const p=d>1e-6?t.dot(f.divideScalar(d)):-1,y=l>0&&n.phase==="pursuit"&&!v,x=y&&d>20&&d<a.gunRange&&p>.997&&n.gunTimer<=0,_=y&&d>300&&d<a.missileRange&&p>Math.cos(15*Math.PI/180)&&n.missileTimer<=0;return x&&(n.gunTimer=a.gunInterval),_&&(n.missileTimer=a.missileInterval),{speed:v?a.dodgeSpeed:a.speed,fireGun:x,fireMissile:_,deployFlare:l>0&&v&&g<350}}function c_(){return{released:!1,egress:0}}function u_(n,{position:e,forward:t,target:i=null,altitude:r=e.y,groundHeight:s=0,releaseDistance:o=450,turnRate:a=.32},l){const c=Number.isFinite(l)?Math.max(0,l):0,h=t.clone();let u=!1;return i?n.released?n.egress+=c:(h.set(i.x-e.x,0,i.z-e.z),c>0&&h.length()<=o&&(n.released=!0,u=!0)):h.applyAxisAngle(Ds,.5).setY(0),h.lengthSq()<1e-8&&h.copy(t),h.normalize(),h.y=n.released?.12:Math.max(-.35,Math.min(.35,(r-e.y)/600)),e.y<s+200&&(h.y=.6),rl(t,h.normalize(),c*a),{release:u,gone:n.egress>16}}function ur(n){const e=new en;e.name=n;function t(c,h,u,f=0,d=0,g=0,v=e){const m=new st(h,u);return m.name=c,m.position.set(f,d,g),v.add(m),m}function i(c,h,u,{width:f=1,height:d=1,x:g=0,y:v=0,segments:m=28}={}){const p=h.map(([_,A])=>new ge(Math.max(A,.001),-_)).reverse(),y=new nl(p,m);y.rotateX(-Math.PI/2);const x=t(c,y,u,g,v,0);return x.scale.set(f,d,1),x}function r(c,h,u,f,{thickness:d=.09,dihedral:g=0}={}){const v=h.reduce((x,[_])=>Math.abs(_)<Math.abs(x)?_:x,h[0][0]),m=new rr;h.forEach(([x,_],A)=>A?m.lineTo(x-v,-_):m.moveTo(x-v,-_)),m.closePath();const p=new ks(m,{depth:d,bevelEnabled:!1});p.rotateX(-Math.PI/2);const y=t(c,p,f,v,u,0);return y.rotation.z=g,y}function s(c,h,u,{thickness:f=.1,x:d=0,cant:g=0}={}){const v=new rr;h.forEach(([y,x],_)=>_?v.lineTo(y,x):v.moveTo(y,x)),v.closePath();const m=new ks(v,{depth:f,bevelEnabled:!1});m.rotateY(-Math.PI/2);const p=t(c,m,u,d+f/2,0,0);return p.rotation.z=g,p}function o(c,h,u,f,d,g=0,v=0,m=0,p=16){const y=new Rn(h,u,f,p);return y.rotateX(-Math.PI/2),t(c,y,d,g,v,m)}function a(c,h){const u=new Cf(new Dt().setFromPoints(c.map(f=>new I(...f))),new au({color:h}));return e.add(u),u}function l(c,h,u=0,f=0){const d=new yi(c,c*6,12),g=t("flame",d,new It({color:"#efb96f",transparent:!0,opacity:.75,depthWrite:!1}),u,f,h+c*3);return g.rotation.x=Math.PI/2,g}return{aircraft:e,part:t,body:i,surface:r,fin:s,tube:o,line:a,flame:l}}const Hs=typeof document<"u";function Cu(n,e){const t=document.createElement("canvas");t.width=t.height=n,e(t.getContext("2d"),n);const i=new Xr(t);return i.colorSpace=Lt,i.wrapS=i.wrapT=Dr,i.anisotropy=4,i}let Ir=1;function Jn(){return Ir=Ir*1664525+1013904223>>>0,Ir/4294967296}function h_(n,{metalness:e=.72,roughness:t=.38}={}){const i=new yn({color:n,metalness:e,roughness:t});return Hs&&(Ir=7,i.map=Cu(512,(r,s)=>{r.fillStyle="#fff",r.fillRect(0,0,s,s);for(let o=0;o<46;o++){const a=225+Math.floor(Jn()*30);r.fillStyle=`rgb(${a},${a},${a})`,r.fillRect(Math.floor(Jn()*8)*64,Math.floor(Jn()*8)*64,64,64)}r.strokeStyle="rgba(40,48,52,.55)",r.lineWidth=1.5;for(let o=0;o<=8;o++)r.beginPath(),r.moveTo(0,o*64),r.lineTo(s,o*64),r.moveTo(o*64,0),r.lineTo(o*64,s),r.stroke();r.fillStyle="rgba(40,48,52,.35)";for(let o=8;o<s;o+=16)for(let a=6;a<s;a+=64)r.fillRect(o,a,1.5,1.5),r.fillRect(a,o,1.5,1.5)}),i.map.repeat.set(2,2)),i}function Pu(){const n=new yn({color:Hs?"#ffffff":"#5d6b47",metalness:.15,roughness:.7});return Hs&&(Ir=23,n.map=Cu(256,(e,t)=>{e.fillStyle="#56683f",e.fillRect(0,0,t,t);for(const[i,r]of[["#a48f63",9],["#2f4634",8]]){e.fillStyle=i;for(let s=0;s<r;s++){const o=Jn()*t,a=Jn()*t,l=28+Jn()*46,c=16+Jn()*30,h=Jn()*Math.PI;for(const u of[-t,0,t])for(const f of[-t,0,t])e.beginPath(),e.ellipse(o+u,a+f,l,c,h,0,Math.PI*2),e.fill()}}})),n}function xt(n,{metalness:e=.25,roughness:t=.6}={}){return new yn({color:n,metalness:e,roughness:t})}function Gs(n,e=128,t=128){if(!Hs)return new It({color:"#b0b0b0",side:jt});const i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"),e,t);const r=new Xr(i);return r.colorSpace=Lt,new It({map:r,transparent:!0,side:jt,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function sl(n,e,t,i,r=i*.382){n.beginPath();for(let s=0;s<10;s++){const o=-Math.PI/2+s*Math.PI/5,a=s%2?r:i;n[s?"lineTo":"moveTo"](e+Math.cos(o)*a,t+Math.sin(o)*a)}n.closePath(),n.fill()}function ol(n="#c3c8c4",{markings:e=!0,bort:t="5027"}={}){const{aircraft:i,part:r,body:s,surface:o,fin:a,tube:l,line:c,flame:h}=ur("MiG-21"),u=h_(n),f=xt("#778282",{metalness:.65,roughness:.48}),d=xt("#171e23",{metalness:.2,roughness:.8}),g=xt("#526653",{metalness:.1,roughness:.6}),v=new yn({color:"#395660",metalness:.55,roughness:.16,transparent:!0,opacity:.82});s("fuselage",[[-6.1,.62],[-5.5,.63],[-4.6,.7],[-3.7,.77],[-2.4,.82],[-1.8,.84],[1,.86],[2.6,.82],[3.8,.76],[4.8,.69],[5.6,.61],[6.2,.49]],u),r("intake-lip",new ln(.61,.045,8,32),f,0,0,-6.1),r("intake",new En(.58,32),d,0,0,-6.09).rotation.y=Math.PI,r("shock-cone",new yi(.38,1.6,24),g,0,0,-6.35).rotation.x=-Math.PI/2,l("pitot",.015,.026,1.75,f,.18,.52,-6.7,6),l("pitot-mount",.03,.05,.5,f,.18,.5,-5.7,6),r("blade-antenna",new ut(.03,.28,.4),f,0,-.84,-3.4),r("canopy",new an(1,24,12),v,0,.83,-2.6).scale.set(.51,.67,1.45),r("canopy-frame",new ln(.52,.035,6,24),f,0,.88,-2.65).scale.y=1.17;const p=r("windscreen-frame",new ln(.44,.03,6,20,Math.PI),f,0,.78,-3.45);p.rotation.x=-.5,r("dorsal-spine",new an(1,16,10),u,0,.7,.8).scale.set(.36,.42,2.7),r("seat",new ut(.42,.7,.16),d,0,.95,-2.05),r("pilot-helmet",new an(.19,12,8),xt("#d9d6c8"),0,1.12,-2.55);for(const _ of[-1,1]){o(`delta-wing-${_}`,[[_*.65,-2.15],[_*3.58,2.45],[_*3.58,3.1],[_*.65,3.15]],-.12,u),o(`stabilizer-${_}`,[[_*.45,3.6],[_*2.05,5.65],[_*1.9,6.12],[_*.45,5.6]],.05,u),l(`flutter-weight-${_}`,.03,.045,.7,f,_*1.98,.1,5.45,6),r(`wing-fence-${_}`,new ut(.03,.16,1.5),f,_*2.75,.02,1.75),c([[_*.85,0,2.75],[_*3.35,0,2.75]],"#5a6465"),c([[_*2.15,0,2.75],[_*2.15,0,3.12]],"#5a6465"),r(`pylon-${_}`,new ut(.09,.33,1.3),f,_*2,-.32,1.85).rotation.x=-.03,l(`missile-${_}`,.065,.065,2.5,xt("#d8d8d0"),_*2,-.55,1.6,10),r(`missile-seeker-${_}`,new an(.065,10,8),d,_*2,-.55,.35);for(const A of[0,Math.PI/2])r(`missile-fins-${_}`,new ut(.5,.012,.32),f,_*2,-.55,2.68).rotation.z=A+Math.PI/4,r(`missile-canards-${_}`,new ut(.3,.012,.16),f,_*2,-.55,.72).rotation.z=A+Math.PI/4;r(`nav-light-${_}`,new an(.05,8,6),new It({color:_<0?"#ff4a3d":"#49e08a"}),_*3.56,-.07,2.8),r(`airbrake-${_}`,new ut(.03,.34,.8),f,_*.78,-.38,-1.3).rotation.z=_*.5}if(s("drop-tank",[[-1.9,0],[-1.5,.18],[-.6,.27],[.6,.27],[1.5,.18],[2,0]],u,{y:-1.18,segments:14}).position.z=.9,r("tank-pylon",new ut(.08,.2,1.2),f,0,-.9,.9),r("gun-pack",new ut(.3,.16,1.5),d,0,-.86,-1.4),a("tail-fin",[[1.8,.65],[4.55,3.1],[5.35,3.1],[6.15,.4]],u),a("tail-cap",[[4.35,2.91],[4.55,3.1],[5.35,3.1],[5.41,2.91]],g),a("ventral-fin",[[3.5,-.55],[5.3,-1.18],[5.6,-.55]],f),c([[.06,.75,5.05],[.06,2.9,5.05]],"#5a6465"),c([[-.06,.75,5.05],[-.06,2.9,5.05]],"#5a6465"),l("chute-housing",.16,.13,.95,u,0,.82,5.75,10),r("exhaust-ring",new ln(.48,.065,8,24),f,0,0,6.18),l("nozzle",.6,.5,.5,d,0,0,6.05,20),r("exhaust",new En(.46,24),d,0,0,6.2),r("burner",new En(.36,20),new It({color:"#ff9a4d"}),0,0,6.215),h(.37,6.1),e){const _=Gs((T,R,P)=>{T.fillStyle="#f5c531",T.beginPath(),T.arc(R/2,P/2,R*.48,0,Math.PI*2),T.fill(),T.fillStyle="#d2261f",T.beginPath(),T.arc(R/2,P/2,R*.42,0,Math.PI*2),T.fill(),T.fillStyle="#f5c531",sl(T,R/2,P/2+2,R*.33)}),A=Gs((T,R,P)=>{T.fillStyle="#c3231d",T.font=`700 ${P*.82}px "Barlow Condensed", Arial, sans-serif`,T.textAlign="center",T.textBaseline="middle",T.fillText(t,R/2,P/2+4)},256,96);for(const T of[-1,1])r(`wing-roundel-${T}`,new tn(.9,.9),_,T*2.3,-.02,2.1).rotation.x=-Math.PI/2,r(`wing-roundel-under-${T}`,new tn(.9,.9),_,T*2.3,-.13,2.1).rotation.x=Math.PI/2,r(`tail-roundel-${T}`,new tn(.7,.7),_,T*.065,1.75,4.6).rotation.y=T*Math.PI/2,r(`bort-${T}`,new tn(1.5,.56),A,T*.735,.05,-4.3).rotation.y=T*Math.PI/2}const x=new en;x.name="landing-gear",x.visible=!1,i.add(x);for(const[_,A,T]of[[0,-3.9,.24],[-1.25,1.5,.3],[1.25,1.5,.3]])r("gear-leg",new Rn(.06,.06,1.3,8),f,_,-1.02,A,x),r("gear-wheel",new Rn(T,T,.2,14),d,_,-1.65,A,x).rotation.z=Math.PI/2,r("gear-door",new ut(.03,.7,.8),u,_+(_?Math.sign(_)*.2:.22),-.95,A,x);return i}const Lu=new I(0,1.4,-2.6),Oa={width:1024,height:512},f_="#2f8f8a",Tn=Math.PI*2;function Mr(n,e,t,i,r,s,o,a,l,{sweep:c=1.5*Math.PI,start:h=.75*Math.PI,unit:u=""}={}){n.save(),n.translate(e,t),n.fillStyle="#0c1012",n.beginPath(),n.arc(0,0,i,0,Tn),n.fill(),n.strokeStyle="#5d6a6a",n.lineWidth=3,n.stroke(),n.strokeStyle="#e8e2cf",n.fillStyle="#e8e2cf",n.textAlign="center",n.textBaseline="middle",n.font=`${Math.round(i*.2)}px monospace`,s.forEach((d,g)=>{const v=h+c*g/(s.length-1),m=Math.cos(v),p=Math.sin(v);n.lineWidth=2,n.beginPath(),n.moveTo(m*i*.82,p*i*.82),n.lineTo(m*i*.94,p*i*.94),n.stroke(),n.fillText(String(d),m*i*.64,p*i*.64)}),n.fillStyle="#9fb0ae",n.font=`${Math.round(i*.17)}px monospace`,n.fillText(r,0,-i*.28),u&&n.fillText(u,0,i*.42);const f=h+c*Math.max(0,Math.min(1,(o-a)/(l-a)));n.strokeStyle="#f4f1e6",n.lineWidth=4,n.lineCap="round",n.beginPath(),n.moveTo(-Math.cos(f)*i*.15,-Math.sin(f)*i*.15),n.lineTo(Math.cos(f)*i*.8,Math.sin(f)*i*.8),n.stroke(),n.fillStyle="#5d6a6a",n.beginPath(),n.arc(0,0,i*.08,0,Tn),n.fill(),n.restore()}function d_(n,e,t,i,r,s){n.save(),n.translate(e,t),n.beginPath(),n.arc(0,0,i,0,Tn),n.clip(),n.save(),n.rotate(s),n.translate(0,r*i*1.5),n.fillStyle="#3f7fa6",n.fillRect(-i*2,-i*4,i*4,i*4),n.fillStyle="#6b4a2e",n.fillRect(-i*2,0,i*4,i*4),n.strokeStyle="#f4f1e6",n.lineWidth=2,n.beginPath(),n.moveTo(-i*2,0),n.lineTo(i*2,0);for(const o of[-2,-1,1,2]){const a=-o*i*.39,l=i*(Math.abs(o)===2?.34:.2);n.moveTo(-l,a),n.lineTo(l,a)}n.stroke(),n.restore(),n.strokeStyle="#f2c65d",n.lineWidth=5,n.beginPath(),n.moveTo(-i*.6,0),n.lineTo(-i*.2,0),n.lineTo(0,i*.14),n.lineTo(i*.2,0),n.lineTo(i*.6,0),n.stroke(),n.restore(),n.strokeStyle="#5d6a6a",n.lineWidth=4,n.beginPath(),n.arc(e,t,i,0,Tn),n.stroke()}function p_(n,e,t,i,r){n.save(),n.translate(e,t),n.fillStyle="#0c1012",n.beginPath(),n.arc(0,0,i,0,Tn),n.fill(),n.strokeStyle="#5d6a6a",n.lineWidth=3,n.stroke(),n.save(),n.rotate(-r*Math.PI/180),n.fillStyle="#e8e2cf",n.strokeStyle="#e8e2cf",n.textAlign="center",n.textBaseline="middle",n.font=`${Math.round(i*.24)}px monospace`;for(let s=0;s<360;s+=30)n.save(),n.rotate(s*Math.PI/180),n.lineWidth=2,n.beginPath(),n.moveTo(0,-i*.94),n.lineTo(0,-i*.82),n.stroke(),s%90===0&&(n.fillStyle=s?"#e8e2cf":"#f2c65d",n.fillText("BĐNT"[s/90],0,-i*.62)),n.restore();n.restore(),n.fillStyle="#f2c65d",n.beginPath(),n.moveTo(0,-i*.98),n.lineTo(-7,-i*1.14),n.lineTo(7,-i*1.14),n.fill(),n.fillStyle="#f4f1e6",n.font=`bold ${Math.round(i*.34)}px monospace`,n.textAlign="center",n.textBaseline="middle",n.fillText(String(Math.round(r)).padStart(3,"0"),0,i*.1),n.restore()}function m_(n,e,t,i,r,s,o){n.fillStyle=s?o:"#1a2022",n.fillRect(e,t,i,34),n.strokeStyle="#5d6a6a",n.lineWidth=2,n.strokeRect(e,t,i,34),n.fillStyle=s?"#14100c":"#59625f",n.font="bold 17px monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e+i/2,t+18)}function g_(n,e){const{width:t,height:i}=Oa;n.fillStyle="#1d5f5c",n.fillRect(0,0,t,i),n.fillStyle="rgba(0,0,0,.2)";for(let s=0;s<26;s++)n.fillRect(s*173%t,s*97%i,60,3);n.fillStyle="#39393a";for(const[s,o]of[[14,14],[t-14,14],[14,i-14],[t-14,i-14],[t/2,14],[t/2,i-14]])n.beginPath(),n.arc(s,o,6,0,Tn),n.fill();[["TÊN LỬA","missile","#ff5a47"],["KÉO LÊN","pull-up","#ff5a47"],["THẤT TỐC","stall","#ff5a47"],["BỊ KHÓA","locked","#ffb23e"],["GIÁP","health","#ffb23e"],["CÀNG","gear","#58d68d"]].forEach(([s,o,a],l)=>m_(n,150+l*122,20,112,s,e.lit.has(o)&&(o==="gear"||e.blink),a)),Mr(n,170,190,104,"TỐC ĐỘ",[0,2,4,6,8,10,12,14],e.speed,0,1400,{unit:"x100 KM/H"}),d_(n,512,190,112,e.pitch,e.bank),Mr(n,854,190,104,"ĐỘ CAO",[0,1,2,3,4,5,6,7,8,9],e.altitude%1e3,0,1e3,{sweep:Tn*.9,start:-Math.PI/2,unit:`${String(Math.round(e.altitude)).padStart(5,"0")} M`}),p_(n,110,410,76,e.heading),Mr(n,290,410,70,"LÊN/XUỐNG",[-6,-4,-2,0,2,4,6],e.climb,-60,60,{unit:"x10 M/S"}),Mr(n,460,410,70,"G",[0,2,4,6,8,10],e.load,0,10),Mr(n,630,410,70,"GA",[0,25,50,75,100],e.throttle*100,0,100,{unit:"%"}),n.fillStyle="#0c1012",n.fillRect(730,330,274,162),n.strokeStyle="#5d6a6a",n.lineWidth=3,n.strokeRect(730,330,274,162),n.fillStyle="#9fb0ae",n.font="17px monospace",n.textAlign="left",n.textBaseline="middle",n.fillText("TÊN LỬA",744,352),n.fillText("MỒI BẪY",744,404),n.fillText("THÂN",744,456);for(let s=0;s<12;s++)n.fillStyle=s<e.missiles?"#f2c65d":"#2a3133",n.fillRect(744+s*21,366,15,18);for(let s=0;s<8;s++)n.fillStyle=s<e.flares?"#ffe3a3":"#2a3133",n.beginPath(),n.arc(752+s*21,426,7,0,Tn),n.fill();n.fillStyle="#2a3133",n.fillRect(744,468,246,12),n.fillStyle=e.health>35?"#58d68d":e.health>15?"#ffb23e":"#ff5a47",n.fillRect(744,468,246*e.health/100,12)}function __(n){const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d");t.fillStyle="#1a2022",t.fillRect(0,0,256,512);for(let r=0;r<9;r++)for(let s=0;s<4;s++){n=n*1664525+1013904223>>>0;const o=34+s*62,a=34+r*54,l=n%5;t.fillStyle="#39393a",t.beginPath(),t.arc(o,a,13,0,Tn),t.fill(),l<3?(t.strokeStyle="#d7d2c2",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(o,a),t.lineTo(o,a+(l?-15:15)),t.stroke()):(t.fillStyle=l===3?"#c9382c":"#e8e2cf",t.beginPath(),t.arc(o,a,8,0,Tn),t.fill()),t.fillStyle="#7d8a88",t.fillRect(o-16,a+20,32,3)}const i=new Xr(e);return i.colorSpace=Lt,i}function v_(){const n=new ou,e=new Yt(70,1,.04,60);n.add(new yu("#dcecf2","#3a3a36",2.2));const t=new Su("#ffd9b0",2.6);n.add(t,t.target);const i=new en;n.add(i);const r=ol("#c3c8c4");r.position.copy(Lu).negate();for(const P of["canopy","canopy-frame","windscreen-frame","seat","pilot-helmet","flame","fuselage","airbrake--1","airbrake-1"])r.getObjectByName(P).visible=!1;i.add(r);const s=new yn({color:f_,roughness:.78}),o=new yn({color:"#15191b",roughness:.9}),a=new yn({color:"#7b8782",metalness:.15,roughness:.6}),l=new yn({color:"#b62f26",roughness:.6});function c(P,b,M,L,z,F,N=s,U=i){const B=new st(new ut(P,b,M),N);return B.position.set(L,z,F),U.add(B),B}function h(P,b,M=.028,L=a,z=i){const F=new I(...P),N=new I(...b),U=new st(new Rn(M,M,F.distanceTo(N),8),L);return U.position.copy(F).add(N).multiplyScalar(.5),U.quaternion.setFromUnitVectors(new I(0,1,0),N.clone().sub(F).normalize()),z.add(U),U}c(1.3,.06,2.6,0,-1.12,-.4,o);for(const P of[-1,1]){c(.07,.82,2.6,P*.64,-.74,-.4),c(.26,.05,1.5,P*.5,-.55,-.35,o);const b=new st(new tn(.23,1.4),new It({map:__(P>0?11:5),toneMapped:!1}));b.rotation.x=-Math.PI/2,b.position.set(P*.5,-.523,-.35),i.add(b),c(.25,.32,1.5,P*.5,-.72,-.35),h([P*.62,-.33,-1.2],[P*.62,-.33,.95],.024),h([P*.58,-.3,-1.18],[P*.2,.42,-.98],.02),h([P*.2,.42,-.98],[P*.2,-.12,-1.36],.014)}h([-.2,.42,-.98],[.2,.42,-.98],.02);for(const P of[-.98,.85]){const b=new st(new ln(.62,.02,8,28,Math.PI),a);b.position.set(0,-.33,P),b.scale.y=P<0?1.21:1.3,i.add(b)}c(.16,.05,.03,0,.44,-.95,a),c(.13,.035,.005,0,.44,-.932,new yn({color:"#aebfc4",metalness:1,roughness:.1})),c(1.2,.045,.3,0,-.105,-1,o),c(1.22,.66,.05,0,-.45,-1.1);const u=document.createElement("canvas");u.width=Oa.width,u.height=Oa.height;const f=u.getContext("2d"),d=new Xr(u);d.colorSpace=Lt,d.anisotropy=8;const g=new st(new tn(1.16,.58),new It({map:d,toneMapped:!1}));g.position.set(0,-.425,-1.072),i.add(g),c(.34,.4,.05,0,-.93,-1.02),c(.1,.06,.12,0,-.055,-.93,o),h([-.055,-.03,-.9],[-.055,.13,-.98],.006),h([.055,-.03,-.9],[.055,.13,-.98],.006);const v=new st(new tn(.115,.19),new It({color:"#bfe6dc",transparent:!0,opacity:.13,side:jt,depthWrite:!1}));v.position.set(0,.05,-.94),v.rotation.x=-.42,i.add(v);const m=new en;m.position.set(0,-1.08,-.58),i.add(m),h([0,0,0],[0,.42,0],.017,a,m),h([0,.4,0],[0,.56,.03],.028,o,m),c(.03,.03,.03,.028,.52,.01,l,m);const p=new en;p.position.set(-.5,-.5,-.3),i.add(p),c(.05,.06,.1,0,.04,0,o,p),c(.03,.05,.03,0,0,0,a,p),c(.5,.62,.12,0,-.28,.52,o),c(.3,.26,.14,0,.12,.5,o);for(const P of[-1,1]){const b=new st(new ln(.05,.012,6,12),l);b.position.set(P*.16,.28,.46),i.add(b)}const y={speed:0,altitude:0,heading:0,pitch:0,bank:0,climb:0,load:1,throttle:0,missiles:0,flares:0,health:100,lit:new Set,blink:!0},x=new Nt,_=new Kt,A=new I(-.38,.42,-1).normalize();let T=0;function R(P,b){const{flight:M,worldCamera:L}=P;_.copy(M.orientation).invert(),e.quaternion.copy(_).multiply(L.quaternion),e.fov=L.fov,e.aspect=L.aspect,e.updateProjectionMatrix(),t.position.copy(A).applyQuaternion(_).multiplyScalar(4),m.rotation.set(-(P.input.pitch||0)*.2,0,(P.input.roll||0)*.24),p.position.z=-.12-M.throttle*.34,T-=b,!(T>0)&&(T=.08,x.setFromQuaternion(M.orientation,"YXZ"),Object.assign(y,{speed:M.speed*3.6,altitude:M.position.y,heading:P.heading,pitch:x.x,bank:-x.z,climb:M.velocity.y,load:M.load,throttle:M.throttle,missiles:P.weapons.ammo,flares:P.weapons.flares,health:P.health}),y.lit=new Set(P.warnings),P.gear&&y.lit.add("gear"),y.blink=Math.floor(performance.now()/220)%2===0,g_(f,y),d.needsUpdate=!0)}return{scene:n,camera:e,update:R}}function x_(n){const e=new Yt;let t;return function(r,s,o,a,l={x:0,y:0}){const c=s==="cockpit",h=new Kt().setFromEuler(new Nt(o?0:-l.y*.95,o?0:-l.x*Math.PI,0,"YXZ")),u=new I(0,0,-1).applyQuaternion(h).applyQuaternion(r.orientation),f=t_(r),d=c?Lu.clone().applyQuaternion(r.orientation):new I(0,8.5,o?-31:31).applyQuaternion(h).applyQuaternion(r.orientation),g=t!==s,v=r.position.clone().add(d);c||g?n.position.copy(v):n.position.lerp(v,1-Math.exp(-a*9)),e.position.copy(n.position),e.up.copy(f),e.lookAt((c?n.position.clone():r.position.clone().addScaledVector(f,4)).addScaledVector(u,o?-180:180)),c||g?n.quaternion.copy(e.quaternion):n.quaternion.slerp(e.quaternion,1-Math.exp(-a*10)),n.near=c?.05:1;const m=c?70:r.afterburner?62:53;n.fov=g?m:Ia.damp(n.fov,m,3,a),n.updateProjectionMatrix(),t=s}}const Gt=Object.freeze({introDuration:8,speedKmh:650,altitude:600,stableSeconds:1});function yc(){return{phase:"intro",elapsed:0,speedComplete:!1,stable:0}}function al(n,e){const t=Math.max(0,Math.min(Gt.introDuration,e)),i=Math.max(0,(t-4)/4);n.position.set(0,6.4+173.6*i*i,900-140*t*t/(2*Gt.introDuration)),n.speed=140*t/Gt.introDuration,n.orientation.setFromEuler(new Nt(i*.18,0,0,"YXZ")),n.velocity.copy(new I(0,0,-n.speed).applyQuaternion(n.orientation)),n.angularVelocity.set(0,0,0),n.throttle=1,n.afterburner=!0,n.stalled=!1,n.sink=0}function Iu(n,e){al(e,Gt.introDuration),n.elapsed=Gt.introDuration,n.phase="warmup"}function Mc(n,e,t,i){if(n.phase==="intro"){n.elapsed+=i,al(e,n.elapsed),n.elapsed>=Gt.introDuration&&Iu(n,e);return}if(n.phase!=="warmup")return;const r=e.speed*3.6>=Gt.speedKmh;r&&t.accelerate&&!t.brake&&(n.speedComplete=!0),n.stable=n.speedComplete&&r&&e.position.y>=Gt.altitude?n.stable+i:0,n.stable>=Gt.stableSeconds&&(n.phase="combat")}const ko=.06;function Sc(n){const e=Math.abs(n);return e<=ko?0:Math.sign(n)*((e-ko)/(1-ko))**1.2}function y_(n,e={}){return{pitch:Sc(-n.y),roll:Math.max(-1,Math.min(1,Sc(-n.x)+(e.roll||0))),yaw:e.yaw||0,accelerate:!!e.accelerate,brake:!!e.brake,gear:!!e.gear}}function M_(n,e,t,i=()=>!1,r=()=>{},s=()=>{}){const o={active:!1,x:0,y:0,firing:!1},a={active:!1,x:0,y:0};let l;function c(){Object.assign(o,{active:!1,x:0,y:0,firing:!1}),Object.assign(a,{active:!1,x:0,y:0}),r(o)}function h(){Object.assign(a,{active:!1,x:0,y:0})}return n.addEventListener("pointermove",u=>{if(u.pointerType!=="mouse"||!e())return;const f=n.getBoundingClientRect(),d=Math.max(1,Math.min(f.width,f.height)*.35),g=i()?a:o;g.x=Math.max(-1,Math.min(1,(u.clientX-f.left-f.width/2)/d)),g.y=Math.max(-1,Math.min(1,(u.clientY-f.top-f.height/2)/d)),g.active=!0,g===o&&r(o)}),n.addEventListener("pointerdown",u=>{l=u.pointerType}),n.addEventListener("mousedown",u=>{l!=="mouse"||!e()||(u.button===0&&(u.preventDefault(),o.firing=!0),u.button===2&&(u.preventDefault(),t()),u.button===1&&(u.preventDefault(),s()))}),n.addEventListener("mouseup",u=>{u.button===0&&(o.firing=!1)}),n.addEventListener("pointerleave",c),n.addEventListener("pointercancel",c),n.addEventListener("contextmenu",u=>{e()&&u.preventDefault()}),{pointer:o,look:a,reset:c,resetLook:h}}const Mt=Object.freeze({airfield:Object.freeze({label:"SÂN BAY",x:0,z:-200}),bridge:Object.freeze({label:"CẦU",x:-3200,z:-7400})}),Et=Object.freeze({x:0,halfWidth:36,zMin:-1800,zMax:1400,y:4.35,wheelHeight:2.1}),bc=Object.freeze({maxSpeed:115,maxSink:10}),Du=Object.freeze({drone:Object.freeze({label:"BIA BAY",name:"Bia bay",role:"drone",health:30,speed:120,radius:12}),f8:Object.freeze({label:"F-8",name:"F-8 Crusader",role:"fighter",health:100,radius:10,ai:Object.freeze({turnRate:1.12,speed:1,gunInterval:.8,ammo:2})}),f4:Object.freeze({label:"F-4",name:"F-4 Phantom II",role:"fighter",health:120,radius:11,ai:Object.freeze({turnRate:.9,speed:1.08,missileInterval:.8,gunRange:0,ammoBonus:2})}),f105:Object.freeze({label:"F-105",name:"F-105 Thunderchief",role:"bomber",health:130,speed:205,radius:12,bombDamage:34}),a4:Object.freeze({label:"A-4",name:"A-4 Skyhawk",role:"bomber",health:70,speed:165,radius:9,bombDamage:25})}),pn=(n,e,t,i=80)=>({type:n,right:e,forward:t,up:i}),dn=(n,e,t,i)=>({type:n,bearing:e,distance:t,altitude:i}),Ht=Object.freeze([{id:"hoc-bay",number:1,date:"1962 – 1965",title:"Học bay",place:"Trường bay",brief:"Từ cậu học trò lớp ba say máy bay đến người lái phản lực. Làm quen với ga, hướng và pháo.",start:"runway",loadout:{missiles:0,flares:0},stages:[{type:"waypoints",label:"Bay qua các vòng dẫn đường",radius:150,points:[[0,-40,1500],[500,60,3e3],[-300,160,4600],[-900,40,6100],[-200,-60,7600]]},{type:"destroy",label:"Bắn hạ bia bay bằng pháo",spawn:[pn("drone",150,1300,40)]}]},{id:"tam-muoi-lo-thung",number:2,date:"Tháng 10 / 1965",title:"Hơn tám mươi lỗ thủng",place:"Bắc Bộ",brief:"Trận đầu. Máy bay trúng đạn nhưng người lái vẫn đưa nó về. Đừng cố thắng: hãy sống sót.",start:"air",startAt:{x:2200,z:-11500,altitude:1e3,heading:160},loadout:{missiles:2,flares:8},stages:[{type:"survive",label:"Né hỏa lực của hai F-4",seconds:75,spawn:[pn("f4",-500,-1500,150),pn("f4",600,-1900,250)]},{type:"reach",label:"Bay về vùng trời sân bay",landmark:"airfield",radius:1600}]},{id:"chien-cong-dau",number:3,date:"21 / 06 / 1966",title:"Chiến công đầu",place:"Bắc Bộ",brief:"MiG-17 chỉ có pháo. Áp sát, đón đầu vòng GUN, bắn loạt ngắn.",start:"air",loadout:{missiles:0,flares:6},gunsOnly:!0,stages:[{type:"destroy",label:"Hạ F-8 bằng pháo",spawn:[pn("f8",0,1700,120)]}]},{id:"phu-ly",number:4,date:"05 / 09 / 1966",title:"Bầu trời Phủ Lý",place:"Phủ Lý · Hà Nam",brief:"Hai F-8 cùng lúc. Đừng bám một chiếc quá lâu: chiếc kia đang vòng ra sau bạn.",start:"air",loadout:{missiles:0,flares:4},gunsOnly:!0,stages:[{type:"destroy",label:"Hạ cả hai F-8",spawn:[pn("f8",-450,1800,60),pn("f8",500,2300,260)]}]},{id:"chan-than-sam",number:5,date:"21 / 01 / 1967",title:"Chặn Thần Sấm",place:"Đồng bằng sông Hồng",brief:"F-105 mang bom lao thẳng tới cây cầu. Chặn chúng trước khi tới điểm cắt bom.",start:"air",startAt:{landmark:"bridge",back:2600,altitude:1100,heading:0},asset:"bridge",loadout:{missiles:8,flares:6},stages:[{type:"defend",label:"Bảo vệ cây cầu",waves:[[dn("f105",-8,11e3,1e3),dn("f105",6,11800,1150)],[dn("f105",35,11500,900),dn("f105",48,12300,1100),pn("f4",300,2600,200)]]}]},{id:"giu-kien-an",number:6,date:"24 – 25 / 04 / 1967",title:"Giữ Kiến An",place:"Kiến An · Hải Phòng",brief:"Báo động. Cất cánh ngay: từng tốp A-4 từ biển vào đánh sân bay.",start:"runway",asset:"airfield",loadout:{missiles:10,flares:6},stages:[{type:"defend",label:"Bảo vệ sân bay",waves:[[dn("a4",80,9500,700),dn("a4",92,10300,800)],[dn("a4",55,1e4,650),dn("a4",70,10800,800),dn("a4",110,11400,900)],[dn("a4",95,10500,700),dn("a4",120,11200,850),pn("f8",0,2400,200)]]}]},{id:"tro-ve",number:7,date:"29 / 04 / 1967",title:"Trở về",place:"Bắc Bộ",brief:"Hai F-4 cuối cùng. Sau trận đánh là việc ông luôn làm được: đưa máy bay về nhà.",start:"air",startAt:{x:-1800,z:-9500,altitude:1200,heading:170},loadout:{missiles:8,flares:6},stages:[{type:"destroy",label:"Hạ hai F-4",spawn:[pn("f4",-400,2200,150),pn("f4",700,2900,300)]},{type:"reach",label:"Bay tới điểm vào hạ cánh",point:[0,350,-5600],radius:900},{type:"land",label:"Hạ càng (L), giảm tốc và tiếp đất trên đường băng"}]}].map(n=>Object.freeze(n))),S_=Object.freeze({id:"bay-tu-do",number:0,date:"BAY TỰ DO",title:"Giữ bầu trời",place:"Một đấu một",brief:"Một đối thủ, đủ tên lửa và mồi bẫy.",start:"runway",loadout:{missiles:12,flares:6},stages:[{type:"destroy",label:"Hạ đối phương",spawn:[pn("f4",0,1100,80)]}]});function Ec(n){return{stage:0,stageTime:0,time:0,waypoint:0,wave:0,entered:!1,points:[],assetHealth:n.asset?100:null,status:"active",reason:""}}function Vs(n,e,t=0,i=0){const r=Math.sin(e),s=Math.cos(e);return{x:n.x+s*t+r*i,z:n.z+r*t-s*i}}function b_(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function E_(n,e){return Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z)}function Uu(n,e,t){if(n.bearing!==void 0){const r=Mt[e.asset],s=n.bearing*Math.PI/180,o=Vs(r,s,0,n.distance);return{type:n.type,position:{x:o.x,y:n.altitude,z:o.z},target:e.asset}}const i=Vs(t.position,t.heading,n.right,n.forward);return{type:n.type,position:{x:i.x,y:Math.max(350,t.position.y+n.up),z:i.z},target:null}}function T_(n,e,t){const i=e.stages[n.stage];return n.entered=!0,n.stageTime=0,n.waypoint=0,n.wave=0,n.points=[],i.type==="waypoints"?n.points=i.points.map(([s,o,a])=>({...Vs(t.position,t.heading,s,a),y:Math.max(400,t.position.y+o)})):i.type==="reach"&&(i.landmark?n.points=[{x:Mt[i.landmark].x,y:Math.max(500,t.position.y),z:Mt[i.landmark].z}]:n.points=[{x:i.point[0],y:i.point[1],z:i.point[2]}]),(i.type==="defend"?i.waves[0]:i.spawn??[]).map(s=>Uu(s,e,t))}function w_(n,e,t,i){const r={spawn:[],dismiss:!1,stageChanged:!1,completed:!1,failed:!1};if(n.status!=="active")return r;if(n.time+=i,!n.entered)return r.spawn=T_(n,e,t),r.stageChanged=!0,r;if(n.stageTime+=i,n.assetHealth!==null&&n.assetHealth<=0)return n.status="failed",n.reason=`${Mt[e.asset].label} đã bị đánh trúng quá nhiều.`,r.failed=!0,r;const s=e.stages[n.stage];let o=!1;return s.type==="waypoints"?(E_(t.position,n.points[n.waypoint])<=s.radius&&n.waypoint++,o=n.waypoint>=n.points.length):s.type==="destroy"?o=t.hostiles===0:s.type==="survive"?(o=n.stageTime>=s.seconds,r.dismiss=o):s.type==="reach"?o=b_(t.position,n.points[0])<=s.radius:s.type==="land"?o=!!t.landed:s.type==="defend"&&t.hostiles===0&&(n.wave++,n.wave<s.waves.length?r.spawn=s.waves[n.wave].map(a=>Uu(a,e,t)):o=!0),o&&(n.stage++,n.entered=!1,n.stage>=e.stages.length&&(n.status="completed",r.completed=!0)),r}function A_(n,e){return n.assetHealth===null?0:(n.assetHealth=Math.max(0,n.assetHealth-e),n.assetHealth)}function R_(n,e,t={}){const i=e.stages[Math.min(n.stage,e.stages.length-1)],r=`${Math.min(n.stage+1,e.stages.length)}/${e.stages.length}`;let s="",o=0,a=null;return i.type==="waypoints"?(s=`VÒNG ${Math.min(n.waypoint+1,i.points.length)}/${i.points.length}`,o=n.waypoint/i.points.length,a=n.points[n.waypoint]??null):i.type==="survive"?(s=`CÒN ${Math.max(0,Math.ceil(i.seconds-n.stageTime))} GIÂY`,o=Math.min(1,n.stageTime/i.seconds)):i.type==="defend"?(s=`ĐỢT ${Math.min(n.wave+1,i.waves.length)}/${i.waves.length} · CÒN ${t.hostiles??0}`,o=n.wave/i.waves.length):i.type==="destroy"?s=`CÒN ${t.hostiles??0} MỤC TIÊU`:i.type==="reach"?a=n.points[0]??null:i.type==="land"&&(a={x:Et.x,y:Et.y,z:(Et.zMin+Et.zMax)/2}),{step:r,label:i.label,detail:s,progress:o,marker:a,type:i.type}}function C_({position:n,speed:e,verticalSpeed:t,gear:i}){const r=Math.abs(n.x-Et.x)<=Et.halfWidth&&n.z>=Et.zMin&&n.z<=Et.zMax;return!i||!r||n.y>Et.y+Et.wheelHeight+.25?"airborne":e<=bc.maxSpeed&&t>=-bc.maxSink?"landed":"crash"}const Nu="en-bac-campaign";function P_(n){try{const e=JSON.parse(n?.getItem(Nu)??"null"),t=Array.isArray(e?.done)?e.done.filter(i=>Ht.some(r=>r.id===i)):[];return{done:[...new Set(t)]}}catch{return{done:[]}}}function L_(n,e,t){Ht.some(i=>i.id===e)&&!n.done.includes(e)&&n.done.push(e);try{t?.setItem(Nu,JSON.stringify(n))}catch{}return n}function Tc(n,e){return Ht.slice(0,e).every(t=>n.done.includes(t.id))}function wc(n){const e=Ht.findIndex(t=>t.id===n);return e>=0?Ht[e+1]??null:null}const I_=Object.freeze({x:0,z:-3200,altitude:900,heading:0});function D_(n){const e=n.startAt??I_,t=(e.heading??0)*Math.PI/180;if(!e.landmark)return{x:e.x,y:e.altitude,z:e.z,heading:t};const i=Vs(Mt[e.landmark],t,0,-e.back);return{x:i.x,y:e.altitude,z:i.z,heading:t}}const Xi=Object.freeze({lowAltitude:150,impactSeconds:4,lowHealth:35,criticalHealth:15,missileFar:2200,lowAsset:40});function U_(n){const e=n.z>0;return Math.hypot(n.x,n.z)<1e-6?{angle:0,behind:e}:{angle:Math.atan2(n.x,-n.z),behind:e}}function Ho(n){const{stalled:e=!1,agl:t=1/0,verticalSpeed:i=0,incoming:r=[],health:s=100,missiles:o=0,flares:a=0,flareReady:l=!0,enemyLock:c=0,assetHealth:h=null,assetLabel:u="",highG:f=!1,landing:d=!1,usesMissiles:g=!0}=n,v=r.map(x=>({...U_(x.local),distance:x.distance,urgency:Math.max(0,Math.min(1,1-x.distance/Xi.missileFar))})).sort((x,_)=>x.distance-_.distance),m=[];v.length&&m.push({id:"missile",level:"danger",title:"TÊN LỬA",detail:`${Math.round(v[0].distance)} M`,action:a>0&&l?"G · THẢ MỒI BẪY + ĐỔI HƯỚNG":"RẼ GẮT · CẮT NGANG ĐƯỜNG BAY"});const p=i<-1?t/-i:1/0;!d&&(t<Xi.lowAltitude||p<Xi.impactSeconds)&&m.push({id:"pull-up",level:"danger",title:"KÉO LÊN",detail:`${Math.max(0,Math.round(t))} M`,action:"RÊ CHUỘT LÊN"}),e&&m.push({id:"stall",level:"danger",title:"THẤT TỐC",detail:"",action:"THẢ CTRL · GIỮ SPACE · HẠ MŨI"});const y=[];return c>0&&!v.length&&y.push({id:"locked",level:c>=1?"danger":"caution",label:c>=1?"BỊ KHÓA":"ĐỊCH ĐANG NGẮM"}),s<=Xi.lowHealth&&y.push({id:"health",level:s<=Xi.criticalHealth?"danger":"caution",label:`GIÁP ${Math.round(s)}%`}),h!==null&&h<=Xi.lowAsset&&y.push({id:"asset",level:"danger",label:`${u} ${Math.round(h)}%`}),g&&o===0&&y.push({id:"missiles",level:"caution",label:"HẾT TÊN LỬA"}),a===0&&v.length&&y.push({id:"flares",level:"caution",label:"HẾT MỒI BẪY"}),f&&!e&&y.push({id:"high-g",level:"caution",label:"HIGH-G · MẤT TỐC"}),{master:m[0]??null,dangers:m,cautions:y,threats:v}}const N_=()=>new yn({color:"#2f4650",metalness:.55,roughness:.18}),$r=()=>xt("#15191c",{metalness:.2,roughness:.85});let Ac;function F_(){return Ac??=Gs((n,e,t)=>{n.fillStyle="#f2f2ee",n.fillRect(e*.04,t*.38,e*.92,t*.24),n.fillStyle="#b3272d",n.fillRect(e*.04,t*.47,e*.92,t*.06),n.fillStyle="#1f3158",n.beginPath(),n.arc(e/2,t/2,t*.3,0,Math.PI*2),n.fill(),n.fillStyle="#f2f2ee",sl(n,e/2,t/2+1,t*.27)},192,96),Ac}function Ks(n,e,t,i,r,s,o){const a=n.part("canopy",new an(1,20,10),N_(),e,t,i);return a.scale.set(r,s,o),a}function Zs(n,e,t,i,r){n.tube("nozzle",r*1.12,r,r*1.2,$r(),e,t,i,16),n.part("burner",new En(r*.8,16),new It({color:"#f08a45"}),e,t,i+r*.62),n.flame(r*.72,i+r*.4,e,t)}function Js(n,e,t,i,r){for(const s of[-1,1])n.part(`insignia-${s}`,new tn(i*2,i),F_(),s*e,r,t).rotation.x=-Math.PI/2}function Fu(){const n=ur("F-4 Phantom II"),{part:e,body:t,surface:i,fin:r,tube:s}=n,o=Pu(),a=xt("#b9bdb8"),l=xt("#1b1f22",{roughness:.5});t("fuselage",[[-8.4,0],[-7.6,.34],[-6.4,.62],[-4.6,.92],[-2,1.08],[1.5,1.1],[4,.98],[5.6,.7]],o,{width:1.22,height:1}),t("radome",[[-9.3,0],[-8.9,.2],[-8.2,.4],[-7.5,.5]],l,{y:-.12,width:1.05,height:1}),t("belly",[[-5,.5],[-2,.95],[3.4,1],[5.3,.6]],a,{y:-.26,width:1.18,height:.82}),Ks(n,0,.98,-4.75,.5,.58,2.25),e("canopy-bow",new ln(.5,.04,6,18,Math.PI),xt("#3c463c"),0,.98,-4.6);for(const c of[-1,1])t(`intake-${c}`,[[-4.3,.5],[-3.4,.62],[0,.62],[2.5,.52]],o,{x:c*1.12,y:-.08,width:.7,height:1.15,segments:14}),e(`intake-mouth-${c}`,new En(.44,14),$r(),c*1.12,-.08,-4.32).rotation.y=Math.PI,i(`wing-inner-${c}`,[[c*1.25,-1.9],[c*3.9,1.5],[c*3.9,3.35],[c*1.25,3.7]],-.52,o,{thickness:.16}),i(`wing-outer-${c}`,[[c*3.9,1.5],[c*5.85,3.2],[c*5.85,3.95],[c*3.9,3.35]],-.5,o,{thickness:.12,dihedral:c*.21}),i(`stabilator-${c}`,[[c*.55,6.2],[c*2.75,8.25],[c*2.75,8.95],[c*.55,8.2]],.62,o,{thickness:.1,dihedral:-c*.4}),s(`missile-${c}`,.1,.1,3.4,xt("#e3e3dc"),c*.78,-1.02,.4,8),e(`pylon-${c}`,new ut(.1,.4,1.6),a,c*2.7,-.72,1.6),s(`sidewinder-${c}`,.07,.07,2.8,xt("#e3e3dc"),c*2.7,-.98,1.5,8),Zs(n,c*.62,-.3,5.55,.52);return r("tail-fin",[[3.9,.95],[7.3,3.75],[8.4,3.75],[8.75,.85]],o,{thickness:.14}),r("tail-boom",[[5.3,.2],[8.9,.7],[8.9,1.05],[5.3,1.05]],o,{thickness:.5}),t("centre-tank",[[-2.6,0],[-1.9,.32],[0,.42],[2,.32],[2.9,0]],a,{y:-1.36,segments:12}),Js(n,2.9,2.2,.8,-.35),n.aircraft}function O_(){const n=ur("F-105 Thunderchief"),{part:e,body:t,surface:i,fin:r,tube:s}=n,o=Pu(),a=xt("#b9bdb8");t("fuselage",[[-10.2,0],[-9.4,.2],[-8,.5],[-6,.78],[-3,.95],[1,.98],[5,.88],[8,.72],[9.3,.66]],o,{width:1,height:1.08}),s("pitot",.015,.03,1.5,xt("#888"),0,0,-10.8,6),Ks(n,0,.95,-5.9,.46,.5,1.5),t("spine",[[-4.6,.2],[-3,.34],[3,.34],[6,.2]],o,{y:.86,width:.9,height:.8,segments:10});for(const l of[-1,1])i(`intake-${l}`,[[l*.85,-2.3],[l*1.75,-1.2],[l*1.75,.6],[l*.85,.6]],-.28,o,{thickness:.5}),e(`intake-mouth-${l}`,new ut(.6,.36,.05),$r(),l*1.28,-.03,-1.72).rotation.y=-l*.78,i(`wing-${l}`,[[l*.9,-1.2],[l*5.3,3.55],[l*5.3,4.5],[l*.9,2.4]],-.2,o,{thickness:.14}),i(`stabilizer-${l}`,[[l*.6,7],[l*2.75,9.2],[l*2.75,9.85],[l*.6,8.9]],-.3,o,{thickness:.1}),e(`pylon-${l}`,new ut(.1,.4,1.8),a,l*2.6,-.4,1.7),t(`bomb-${l}`,[[-1.4,0],[-.9,.2],[.8,.2],[1.5,.06]],xt("#4a5240"),{x:l*2.6,y:-.82,segments:10}).position.z=1.7,e(`petal-${l}`,new ut(.08,.7,1.1),o,l*.72,0,9.4).rotation.y=l*.16;return r("tail-fin",[[4.6,.95],[8.3,4.1],[9.25,4.1],[9.5,.85]],o,{thickness:.14}),r("ventral-fin",[[6.9,-.75],[8.6,-1.45],[9,-.75]],o,{thickness:.08}),t("centre-bombs",[[-2.2,0],[-1.5,.3],[1.6,.3],[2.4,.06]],xt("#4a5240"),{y:-1.25,width:1.9,height:1,segments:10}),Zs(n,0,0,9.3,.62),Js(n,3.3,2.6,.75,-.05),n.aircraft}function B_(){const n=ur("F-8 Crusader"),{part:e,body:t,surface:i,fin:r,tube:s}=n,o=xt("#a7adae",{metalness:.3,roughness:.55}),a=xt("#e4e5df",{roughness:.6});t("fuselage",[[-7.6,.32],[-7,.56],[-5,.8],[-2,.9],[3,.88],[6.5,.74],[8.2,.62]],o,{width:.92,height:1.12}),t("belly",[[-7.4,.3],[-5,.7],[3,.8],[7.8,.55]],a,{y:-.2,width:.9,height:.95}),t("radome",[[-9,0],[-8.5,.16],[-7.7,.3],[-7,.36]],xt("#22272a"),{y:.42,segments:14}),e("intake-mouth",new En(.42,16),$r(),0,-.22,-7.62).rotation.y=Math.PI,e("intake-lip",new ln(.43,.04,6,18),a,0,-.22,-7.6),Ks(n,0,1.02,-5.6,.42,.46,1.45);for(const l of[-1,1])i(`wing-${l}`,[[l*.4,-2.4],[l*5.45,1.9],[l*5.45,3.05],[l*3.6,2.6],[l*.4,1.5]],.98,o,{thickness:.14,dihedral:-l*.06}),i(`stabilizer-${l}`,[[l*.6,5.9],[l*2.75,7.9],[l*2.75,8.45],[l*.6,7.7]],.12,o,{thickness:.1}),r(`ventral-fin-${l}`,[[5.6,-.75],[7.4,-1.5],[7.8,-.75]],o,{thickness:.07,x:l*.4,cant:-l*.5}),s(`sidewinder-${l}`,.065,.065,2.7,a,l*.98,.3,-3.6,8),e(`rail-${l}`,new ut(.14,.08,1.4),o,l*.9,.3,-3.5);return e("wing-centre",new ut(1,.16,3.9),o,0,1.04,-.4),r("tail-fin",[[4,.95],[7.2,3.9],[8.2,3.9],[8.5,.8]],o,{thickness:.13}),r("tail-band",[[6.75,3.5],[7.2,3.9],[8.2,3.9],[8.24,3.5]],xt("#b3272d"),{thickness:.14}),Zs(n,0,0,8.2,.56),Js(n,3,.9,.75,1.13),n.aircraft}function z_(){const n=ur("A-4 Skyhawk"),{part:e,body:t,surface:i,fin:r,tube:s}=n,o=xt("#a7adae",{metalness:.3,roughness:.55}),a=xt("#e4e5df",{roughness:.6});t("fuselage",[[-6.1,0],[-5.6,.22],[-4.4,.52],[-2.5,.74],[0,.8],[3,.7],[5,.52],[5.9,.44]],o,{width:.92,height:1.1}),t("belly",[[-4.6,.36],[-2,.66],[3,.62],[5.4,.4]],a,{y:-.2,width:.9,height:.95}),Ks(n,0,.92,-3.4,.4,.46,1.15),t("hump",[[-2.6,.2],[-1.5,.36],[1.6,.36],[3.4,.12]],o,{y:.78,width:.85,height:.9,segments:10}),s("refuel-probe",.035,.045,3,o,.5,-.2,-5.3,6);for(const l of[-1,1])t(`intake-${l}`,[[-2.5,.3],[-1.9,.36],[0,.34],[1,.2]],o,{x:l*.78,y:.3,width:.7,height:1.1,segments:10}),e(`intake-mouth-${l}`,new En(.24,12),$r(),l*.78,.3,-2.51).rotation.y=Math.PI,i(`wing-${l}`,[[l*.5,-2.3],[l*4.15,2.25],[l*4.15,2.75],[l*.5,3.1]],-.42,o,{thickness:.13}),i(`stabilizer-${l}`,[[l*.1,4.1],[l*1.75,5.35],[l*1.75,5.85],[l*.1,5.5]],1.25,o,{thickness:.08}),e(`pylon-${l}`,new ut(.09,.36,1.3),a,l*2,-.62,1),t(`bomb-${l}`,[[-1.2,0],[-.8,.17],[.7,.17],[1.3,.05]],xt("#4a5240"),{x:l*2,y:-.95,segments:10}).position.z=1;return r("tail-fin",[[2.6,.8],[4.9,3.3],[5.75,3.3],[6.05,.6]],o,{thickness:.12}),t("centre-tank",[[-2.3,0],[-1.7,.3],[1.5,.3],[2.4,0]],a,{y:-1.2,segments:12}),Zs(n,0,0,5.9,.4),Js(n,2.3,1.3,.6,-.28),n.aircraft}function k_(){const n=ur("Target drone"),{body:e,surface:t,fin:i}=n,r=xt("#e8662c",{roughness:.55}),s=xt("#ecebe3");e("fuselage",[[-4.2,0],[-3.6,.3],[-2,.52],[2,.52],[3.6,.4],[4.1,.3]],r),e("engine-pod",[[-2,.26],[-1.5,.36],[1.6,.36],[2.2,.28]],s,{y:-.72,segments:12});for(const o of[-1,1])t(`wing-${o}`,[[o*.4,-1],[o*2.9,.1],[o*2.9,.9],[o*.4,.7]],-.05,s,{thickness:.1}),t(`stabilizer-${o}`,[[o*.2,2.9],[o*1.35,3.6],[o*1.35,4],[o*.2,3.9]],.1,r,{thickness:.08});return i("tail-fin",[[2.5,.45],[3.6,1.7],[4.1,1.7],[4.15,.35]],r,{thickness:.1}),n.flame(.2,2.3,0,-.72),n.aircraft}const H_={f4:Fu,f105:O_,f8:B_,a4:z_,drone:k_};function G_(n){return(H_[n]??Fu)()}const Ae=n=>document.getElementById(n),V_=4e3,Ou=4,Us=90,Rc={0:"B",90:"Đ",180:"N",270:"T"};function W_(n){let e="";for(let t=-Us;t<=360+Us;t+=5){const i=(t+Us)*Ou,r=(t+360)%360,s=r%10===0;e+=`<i${s?' class="is-major"':""} style="left:${i}px"></i>`,Rc[r]?e+=`<b class="is-cardinal" style="left:${i}px">${Rc[r]}</b>`:s&&(e+=`<b style="left:${i}px">${String(r/10).padStart(2,"0")}</b>`)}n.innerHTML=e}const Kn=new I,X_=new I,ci=new I,Go=new Kt;function q_(n){const e=[],t=[],i=Ae("radar").getContext("2d"),r=Ae("compass-strip");W_(r);function s(u,f,d=.92){Kn.copy(f).project(n);const g=X_.copy(f).sub(n.position).dot(n.getWorldDirection(ci))>0&&Math.abs(Kn.x)<d&&Math.abs(Kn.y)<d;return u.hidden=!g,g&&(u.style.transform=`translate(${(Kn.x*.5+.5)*innerWidth}px, ${(-Kn.y*.5+.5)*innerHeight}px) translate(-50%, -50%)`),g}function o(u){for(;e.length<=u;){const f=document.createElement("div");f.className="marker",f.innerHTML='<i></i><span></span><small></small><div class="bar"><b></b></div>',Ae("markers").append(f),e.push({node:f,label:f.querySelector("span"),range:f.querySelector("small"),health:f.querySelector("b")})}return e[u]}function a(u){for(;t.length<=u;){const f=document.createElement("div");f.className="threat",f.innerHTML="<i>▲</i><small></small>",Ae("threats").append(f),t.push({node:f,range:f.querySelector("small")})}return t[u]}function l(u){const g=118/V_;i.clearRect(0,0,264,264),i.fillStyle="rgba(9,17,21,.62)",i.beginPath(),i.arc(132,132,130,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(234,226,206,.22)",i.lineWidth=1.5;for(const p of[1,.5])i.beginPath(),i.arc(132,132,118*p,0,Math.PI*2),i.stroke();i.beginPath(),i.moveTo(132,14),i.lineTo(132,250),i.moveTo(14,132),i.lineTo(250,132),i.stroke(),i.fillStyle="rgba(242,198,93,.08)",i.beginPath(),i.moveTo(132,132),i.arc(132,132,118,-Math.PI*.68,-Math.PI*.32),i.fill();const v=Math.sin(-u.headingRadians),m=Math.cos(-u.headingRadians);for(const p of u.radar){const y=p.x-u.flight.position.x,x=p.z-u.flight.position.z;let _=(y*m-x*v)*g,A=(y*v+x*m)*g;const T=Math.hypot(_,A),R=118,P=T>R;P&&(_*=R/T,A*=R/T),i.globalAlpha=P?.55:1,p.kind==="enemy"?(i.fillStyle=p.selected?"#f2c65d":"#ff6a55",i.beginPath(),i.moveTo(132+_,132+A-7),i.lineTo(132+_+6,132+A+5),i.lineTo(132+_-6,132+A+5),i.fill()):p.kind==="missile"?(i.fillStyle=u.blink?"#ffffff":"#ff6a55",i.fillRect(132+_-3,132+A-3,6,6)):(i.strokeStyle=p.kind==="asset"?"#58d68d":"#f2c65d",i.lineWidth=3,i.strokeRect(132+_-6,132+A-6,12,12))}i.globalAlpha=1,i.fillStyle="#eae2ce",i.beginPath(),i.moveTo(132,123),i.lineTo(139,139),i.lineTo(132,135),i.lineTo(125,139),i.fill()}function c(u){const{flight:f,weapons:d,sortie:g,warnings:v}=u;document.body.dataset.phase=g.phase,document.body.dataset.camera=u.cameraMode,Ae("intro-panel").hidden=g.phase!=="intro",Ae("warmup-panel").hidden=g.phase!=="warmup",g.phase==="intro"&&(Ae("intro-title").textContent=g.elapsed<4?"Từ mặt đất quê hương":"Vươn lên bầu trời"),g.phase==="warmup"&&(Ae("warmup-speed").value=Math.min(100,f.speed*3.6/Gt.speedKmh*100),Ae("warmup-altitude").value=Math.min(100,f.position.y/Gt.altitude*100),Ae("warmup-speed-value").textContent=`${Math.round(f.speed*3.6)} / ${Gt.speedKmh}`,Ae("warmup-altitude-value").textContent=`${Math.round(f.position.y)} / ${Gt.altitude}`,Ae("warmup-step").textContent=g.speedComplete?f.position.y<Gt.altitude?"RÊ CHUỘT LÊN · LẤY ĐỘ CAO":"GIỮ ỔN ĐỊNH":"GIỮ SPACE · TĂNG GA");const m=g.phase==="combat";Ae("obj-mission").textContent=u.missionLabel,Ae("obj-step").textContent=m?u.objective.step:"",Ae("obj-label").textContent=m?u.objective.label:g.phase==="warmup"?"Lấy tốc độ và độ cao":"Cất cánh",Ae("obj-detail").textContent=m?u.objective.detail:"",Ae("obj-progress").style.width=`${(m?u.objective.progress:0)*100}%`,Ae("asset").hidden=!u.asset,u.asset&&(Ae("asset-label").textContent=u.asset.label,Ae("asset-bar").style.width=`${u.asset.health}%`,Ae("asset-value").textContent=`${Math.round(u.asset.health)}%`,Ae("asset").classList.toggle("is-low",u.asset.health<=40)),Ae("speed").textContent=Math.round(f.speed*3.6),Ae("altitude").textContent=Math.round(f.position.y),Ae("heading").textContent=String(u.heading).padStart(3,"0");const p=(u.headingRadians*180/Math.PI%360+360)%360;r.style.transform=`translateX(${-(p+Us)*Ou}px)`,Ae("throttle").style.width=`${f.throttle*100}%`,Ae("g-force").textContent=`${f.load.toFixed(1)} G`,Ae("flight-status").textContent=f.stalled?"THẤT TỐC":f.highG?"HIGH-G":f.afterburner?"TĂNG LỰC":u.braking?"PHANH":"HÀNH TRÌNH",Ae("flight-status").classList.toggle("is-danger",f.stalled),Ae("gear-state").hidden=!u.gear,Ae("health").textContent=`${Math.round(u.health)}%`,Ae("health-bar").style.width=`${u.health}%`,Ae("health-bar").parentElement.parentElement.dataset.level=u.health<=15?"danger":u.health<=35?"caution":"ok",Ae("weapon-missile").classList.toggle("is-off",u.gunsOnly||d.ammo===0),Ae("missile-ammo").textContent=String(d.ammo).padStart(2,"0"),Ae("flare-ammo").textContent=d.flareCooldown>0&&d.flares?`${Math.ceil(d.flareCooldown)}s`:String(d.flares).padStart(2,"0"),Ae("weapon-flare").classList.toggle("is-off",d.flares===0);for(let F=0;F<2;F++)Ae(`rail-${F}`).style.width=`${d.ammo?(1-d.rails[F]/Bn.reload)*100:0}%`;Ae("lock-progress").style.width=`${d.lock*100}%`,Ae("lock-status").textContent=u.gunsOnly?"MÀN CHỈ DÙNG PHÁO":d.ammo===0?"HẾT":d.rails.every(F=>F>0)?"ĐANG NẠP":d.locked?"ĐÃ KHÓA · PHÓNG!":d.lock>0?"ĐANG KHÓA…":"CHƯA KHÓA",Ae("weapon-missile").classList.toggle("is-locked",d.locked),n.updateMatrixWorld();const y=g.phase!=="intro";y?s(Ae("reticle"),u.nosePoint):Ae("reticle").hidden=!0;const x=Ae("hit-marker");y&&u.hitMarker?(s(x,u.nosePoint),x.dataset.kind=u.hitMarker):x.hidden=!0;const _=Ae("flight-command");if(_.hidden=!y||!u.pointer.active||u.freeLook,!_.hidden){const F=Math.min(innerWidth,innerHeight)*.35;_.style.transform=`translate(${innerWidth/2+u.pointer.x*F}px, ${innerHeight/2+u.pointer.y*F}px) translate(-50%, -50%)`}let A=null;u.enemies.forEach((F,N)=>{const U=o(N),B=s(U.node,F.position);U.node.classList.toggle("is-selected",F.selected),U.node.classList.toggle("is-locked",F.selected&&d.locked),U.node.classList.toggle("is-locking",F.selected&&d.lock>0&&!d.locked),U.label.textContent=F.label,U.range.textContent=`${Math.round(F.distance)} M`,U.health.style.width=`${F.health*100}%`,F.selected&&!B&&(A=F)});for(let F=u.enemies.length;F<e.length;F++)e[F].node.hidden=!0;const T=Ae("target-arrow");if(T.hidden=!A,Go.copy(n.quaternion).invert(),A){ci.copy(A.position).sub(n.position).applyQuaternion(Go);const F=Math.atan2(ci.x,ci.y),N=Math.min(innerWidth,innerHeight)*.3;T.style.transform=`translate(${innerWidth/2+Math.sin(F)*N}px, ${innerHeight/2-Math.cos(F)*N}px) translate(-50%, -50%)`,T.firstElementChild.style.transform=`rotate(${F}rad)`,Ae("target-arrow-label").textContent=`${A.label} · ${Math.round(A.distance)} M`}if(u.gunLead?s(Ae("gun-lead"),u.gunLead):Ae("gun-lead").hidden=!0,u.objective.marker&&m){const F=u.objective.marker;Kn.set(F.x,F.y,F.z);const N=Kn.distanceTo(f.position);if(s(Ae("waypoint"),Kn.clone(),.9))Ae("waypoint").classList.remove("is-edge");else{ci.set(F.x,F.y,F.z).sub(n.position).applyQuaternion(Go);const U=Math.atan2(ci.x,ci.y),B=Math.min(innerWidth,innerHeight)*.36;Ae("waypoint").hidden=!1,Ae("waypoint").classList.add("is-edge"),Ae("waypoint").style.transform=`translate(${innerWidth/2+Math.sin(U)*B}px, ${innerHeight/2-Math.cos(U)*B}px) translate(-50%, -50%)`}Ae("waypoint-distance").textContent=N>1e3?`${(N/1e3).toFixed(1)} KM`:`${Math.round(N)} M`}else Ae("waypoint").hidden=!0;const R=m||g.phase==="warmup"?v.master:null;Ae("master-warning").hidden=!R,R&&(Ae("master-warning").dataset.kind=R.id,Ae("warn-title").textContent=R.title,Ae("warn-detail").textContent=R.detail,Ae("warn-action").textContent=R.action);const P=Ae("cautions"),b=v.cautions.map(F=>`${F.id}:${F.label}:${F.level}`).join("|");if(P.dataset.signature!==b){P.dataset.signature=b,P.replaceChildren();for(const F of v.cautions){const N=document.createElement("span");N.className=`caution is-${F.level}`,N.textContent=F.label,P.append(N)}}const M=Math.min(innerWidth,innerHeight)*.23;v.threats.slice(0,4).forEach((F,N)=>{const U=a(N);U.node.hidden=!1,U.node.style.transform=`translate(${innerWidth/2+Math.sin(F.angle)*M}px, ${innerHeight/2-Math.cos(F.angle)*M}px) translate(-50%, -50%)`,U.node.firstElementChild.style.transform=`rotate(${F.angle}rad) scale(${1+F.urgency*.7})`,U.node.style.setProperty("--pulse",`${(.9-F.urgency*.65).toFixed(2)}s`),U.range.textContent=`${Math.round(F.distance)}`});for(let F=Math.min(4,v.threats.length);F<t.length;F++)t[F].node.hidden=!0;const L=Ae("threat-glow"),z=v.threats[0];L.style.opacity=z?String(.35+z.urgency*.6):R?".3":"0",z?(L.style.setProperty("--gx",`${50+Math.sin(z.angle)*62}%`),L.style.setProperty("--gy",`${50-Math.cos(z.angle)*62}%`)):(L.style.setProperty("--gx","50%"),L.style.setProperty("--gy",R?.id==="pull-up"?"112%":"50%")),L.classList.toggle("is-ambient",!z&&!!R&&R.id!=="pull-up"),Ae("alert").textContent=R?"":u.message,l(u),Ae("app").classList.toggle("damage",u.damaged)}function h(){for(const u of e)u.node.hidden=!0;for(const u of t)u.node.hidden=!0;for(const u of["target-arrow","gun-lead","waypoint","master-warning","hit-marker"])Ae(u).hidden=!0;Ae("threat-glow").style.opacity="0",Ae("alert").textContent="",Ae("cautions").replaceChildren(),delete Ae("cautions").dataset.signature}return{update:c,reset:h}}const Ki=Object.freeze({speed:1150,damage:5,interval:.075,assistRange:1500}),Vo=Object.freeze({radius:13,cooldown:1.5,enemyDamage:30}),Cc=Object.freeze({easy:Object.freeze({gunDamage:2,hitPadding:8,assistAngle:2.5*Math.PI/180,damageTaken:.7,collisionDamage:35}),normal:Object.freeze({gunDamage:1.6,hitPadding:5,assistAngle:0,damageTaken:1,collisionDamage:60})}),Pc=n=>Cc[Object.hasOwn(Cc,n)?n:"easy"];function $_(n,e,t,i,r){const s=n.clone();if(!r?.assistAngle||!t)return s;const o=Ru(e,t,i,Ki.speed).sub(e),a=o.length();return a<1||a>Ki.assistRange?s:(o.divideScalar(a),n.angleTo(o)<=r.assistAngle?o:s)}function Y_(n=Math.random,{decayTime:e=.3}={}){let t=0;return{add(i){t=Math.min(1,t+Math.max(0,i))},step(i){t=Math.max(0,t-i/e)},trauma:()=>t,offset(i,r){const s=t*t*r;return i.x=(n()*2-1)*s,i.y=(n()*2-1)*s,i.z=(n()*2-1)*s,i}}}const K_=(n,e=600)=>Math.max(0,1-n/e);function Ba(n,e,t,i){const r=i*t;return n<e?Math.min(e,n+r):Math.max(e,n-r)}const Z_=(n,e,t,i=.9)=>Ba(n,e?1:0,t,1/i),J_=(n,e)=>Math.max(0,n+1-e),j_=n=>440*2**((n-69)/12),Q_=Object.freeze({kick:55,snare:190,hat:7e3}),Lc=(n,e,t)=>Array.from({length:e},(i,r)=>n.map(([s,o,a])=>[s+r*t,o,a])).flat(),Sr=(n,e)=>n.map(t=>[t,null,e==="kick"?.5:.25]),br=(n,e,t)=>Array.from({length:Math.round((e-n)/t)},(i,r)=>n+r*t),ev=Object.freeze({home:{bpm:72,length:16,loop:!0,voices:{pad:[[0,50,8],[0,57,8],[0,62,8],[8,48,8],[8,55,8],[8,60,8]],bass:[[0,38,4],[4,38,4],[8,36,4],[12,43,4]],lead:[[0,69,1.5],[1.5,67,.5],[2,65,2],[4,62,2],[6,65,1],[7,67,1],[8,69,3],[11,72,1],[12,69,1.5],[13.5,67,.5],[14,62,2]]}},combat:{bpm:124,length:32,loop:!0,voices:{bass:[...Lc([[0,38,.45],[.5,38,.45],[1,50,.45],[1.5,38,.45],[2,38,.45],[2.5,41,.45],[3,38,.45],[3.5,43,.45]],4,4),...Lc([[0,36,.45],[.5,36,.45],[1,48,.45],[1.5,36,.45],[2,36,.45],[2.5,41,.45],[3,43,.45],[3.5,45,.45]],4,4).map(([n,e,t])=>[n+16,e,t])],pad:[[0,57,16],[0,62,16],[16,55,16],[16,60,16]],lead:[[16,74,.5],[16.5,72,.5],[17,69,1],[18,67,.5],[18.5,69,1.5],[20,74,.5],[20.5,72,.5],[21,69,1],[22,72,2],[24,69,.5],[24.5,67,.5],[25,65,1],[26,62,.5],[26.5,65,1.5],[28,67,1],[29,69,1],[30,62,2]],kick:Sr(br(0,32,2),"kick"),hat:Sr(br(1,32,2),"hat")},intense:{kick:Sr(br(1,32,2),"kick"),snare:Sr(br(1,32,2),"snare"),hat:Sr(br(.5,32,1),"hat")}},win:{bpm:110,length:8,loop:!1,voices:{lead:[[0,62,.5],[.5,65,.5],[1,69,.5],[1.5,74,1],[3,72,.5],[3.5,74,2.5]],pad:[[0,50,3],[0,57,3],[3,50,5],[3,57,5],[3,62,5]],bass:[[0,38,3],[3,38,5]]}},lose:{bpm:70,length:8,loop:!1,voices:{lead:[[0,69,1],[1,67,1],[2,65,1],[3,62,3]],pad:[[0,53,4],[0,57,4],[4,50,4],[4,53,4]],bass:[[0,41,4],[4,38,4]]}}});function Ic(n,e,t,i,r){const s=60/n.bpm,o=n.loop?Math.floor(i/n.length):0;for(let a=n.loop?Math.max(0,Math.floor(t/n.length)):0;a<=o;a++){const l=a*n.length;for(const[c,h]of Object.entries(e))for(const[u,f,d]of h){const g=l+u;g<t||g>=i||r.push({beat:g,time:g*s,frequency:f===null?Q_[c]:j_(f),duration:d*s,voice:c})}}}function tv(n,e,t,{intense:i=!1}={}){const r=[];return t<=e?r:(Ic(n,n.voices,e,t,r),i&&n.intense&&Ic(n,n.intense,e,t,r),r.sort((s,o)=>s.beat-o.beat))}const Dc=.2,nv=50,Wo=.8,iv=1/20,qi=(n,e,t)=>Math.min(t,Math.max(e,n));function rv(){let n=null,e,t,i,r,s=null,o=!0,a=!1,l=0,c=-1,h={name:"home",intense:!1},u=null;const f=()=>!!n&&o;function d(){if(n)return;const N=globalThis.AudioContext??globalThis.webkitAudioContext;if(!N)return;try{n=new N}catch{n=null;return}const U=n.createDynamicsCompressor();U.threshold.value=-16,U.ratio.value=6,U.attack.value=.004,U.release.value=.2,e=n.createGain(),e.gain.value=o?.8:0,t=n.createGain(),t.gain.value=1,i=n.createGain(),i.gain.value=.3,t.connect(e),i.connect(e),e.connect(U),U.connect(n.destination),r=n.createBuffer(1,n.sampleRate*2,n.sampleRate);const B=r.getChannelData(0);for(let X=0;X<B.length;X++)B[X]=Math.random()*2-1;setInterval(z,nv),!o||a?n.suspend():n.resume(),L()}function g(N){o=!!N,n&&(e.gain.setTargetAtTime(o?.8:0,n.currentTime,.03),o&&!a?(n.resume(),u?.name!==h.name&&L()):o||n.suspend())}function v(){a=!0,n&&n.suspend()}function m(){a=!1,n&&o&&n.resume()}function p(N,...U){l++,N.onended=()=>{l--,N.disconnect();for(const B of U)B.disconnect()}}function y(N,U,B,X,q=.004){N.gain.setValueAtTime(1e-4,U),N.gain.linearRampToValueAtTime(X,U+q),N.gain.exponentialRampToValueAtTime(1e-4,U+Math.max(q+.01,B))}function x({type:N="sine",frequency:U,to:B,start:X=n.currentTime,duration:q,volume:oe,attack:de,bus:ve=t,detune:Be=0}){const De=n.createOscillator(),ze=n.createGain();De.type=N,De.detune.value=Be,De.frequency.setValueAtTime(U,X),B&&De.frequency.exponentialRampToValueAtTime(B,X+q),y(ze,X,q,oe,de),De.connect(ze),ze.connect(ve),De.start(X),De.stop(X+q+.05),p(De,ze)}function _({filter:N="bandpass",frequency:U,to:B,q:X=1,start:q=n.currentTime,duration:oe,volume:de,attack:ve,bus:Be=t}){const De=n.createBufferSource(),ze=n.createBiquadFilter(),Ze=n.createGain();De.buffer=r,ze.type=N,ze.Q.value=X,ze.frequency.setValueAtTime(U,q),B&&ze.frequency.exponentialRampToValueAtTime(B,q+oe),y(Ze,q,oe,de,ve),De.connect(ze),ze.connect(Ze),Ze.connect(Be),De.start(q,Math.random()*Math.max(0,r.duration-oe-.05),oe+.05),p(De,ze,Ze)}const A={gun(){_({frequency:1500,q:.9,duration:.05,volume:.32}),x({frequency:150,to:60,duration:.07,volume:.22})},missile({distance:N=0}={}){const U=qi(1-N/2500,.15,1);_({frequency:3200,to:380,q:.7,duration:.6,volume:.42*U,attack:.02}),x({type:"sawtooth",frequency:210,to:70,duration:.5,volume:.05*U})},explosion({distance:N=0,size:U=1}={}){const B=qi(1-N/3500,.06,1),X=qi(.8+U*.35,.8,1.5);_({filter:"lowpass",frequency:300+1500*B,to:70,q:.5,duration:X,volume:qi(.55+U*.2,.4,1)*B,attack:.006}),x({frequency:62,to:30,duration:X*.8,volume:.55*B*Math.min(1,U+.3)})},hit(){n.currentTime-c<iv||(c=n.currentTime,_({filter:"highpass",frequency:2600,duration:.035,volume:.18}),x({type:"square",frequency:950,to:620,duration:.035,volume:.025}))},hurt(){_({frequency:650,q:1.4,duration:.09,volume:.45}),x({type:"square",frequency:230,to:110,duration:.1,volume:.05})},collision(){_({filter:"lowpass",frequency:1100,to:120,duration:.55,volume:.85}),x({type:"sawtooth",frequency:95,to:38,duration:.45,volume:.16})},flare(){for(const N of[0,.09,.18])_({frequency:2600,to:1100,q:2,start:n.currentTime+N,duration:.16,volume:.22});x({type:"triangle",frequency:1350,to:850,duration:.2,volume:.04})},gear({down:N=!0}={}){const U=n.currentTime;x({type:"sawtooth",frequency:N?70:55,to:N?52:74,duration:.85,volume:.035,attack:.05}),_({frequency:420,q:4,duration:.85,volume:.1,attack:.05}),x({frequency:95,to:48,start:U+.85,duration:.14,volume:.3}),_({filter:"highpass",frequency:1800,start:U+.85,duration:.04,volume:.12})},lock(){x({frequency:1e3,duration:.1,volume:.07}),x({frequency:1500,start:n.currentTime+.1,duration:.12,volume:.07})},target(){x({frequency:720,duration:.05,volume:.06})},click(){x({type:"triangle",frequency:880,to:660,duration:.04,volume:.06})},kill(){x({type:"triangle",frequency:520,to:790,duration:.25,volume:.08})},start(){x({frequency:440,duration:.25,volume:.08}),x({frequency:660,start:n.currentTime+.14,duration:.3,volume:.07})},stage(){x({frequency:600,duration:.2,volume:.07}),x({frequency:900,start:n.currentTime+.12,duration:.22,volume:.06})},wave(){x({type:"square",frequency:500,duration:.25,volume:.04})},"warn-missile"({urgency:N=0}={}){x({type:"square",frequency:1250+N*200,duration:.07,volume:.05})},"warn-pull-up"(){x({type:"square",frequency:820,duration:.16,volume:.045})},"warn-caution"(){x({type:"sawtooth",frequency:210,duration:.22,volume:.05})}};function T(N,U){!f()||n.state!=="running"||A[N]?.(U)}function R(){const N=n.createBufferSource(),U=n.createBiquadFilter(),B=n.createGain();N.buffer=r,N.loop=!0,U.type="lowpass",U.frequency.value=400,U.Q.value=.7,B.gain.value=0,N.connect(U),U.connect(B),B.connect(t);const X=n.createOscillator(),q=n.createBiquadFilter(),oe=n.createGain();X.type="sawtooth",X.frequency.value=500,q.type="bandpass",q.Q.value=3,q.frequency.value=1500,oe.gain.value=0,X.connect(q),q.connect(oe),oe.connect(t);const de=n.createBufferSource(),ve=n.createBiquadFilter(),Be=n.createGain();return de.buffer=r,de.loop=!0,de.loopStart=.7,ve.type="lowpass",ve.frequency.value=140,Be.gain.value=0,de.connect(ve),ve.connect(Be),Be.connect(t),N.start(),X.start(),de.start(0,.7),{roarFilter:U,roarGain:B,whine:X,whineFilter:q,whineGain:oe,rumbleGain:Be}}function P(N){if(!f())return;if(!s){if(!N)return;s=R()}const U=n.currentTime,B=.08,X=N?qi(N.throttle,0,1):0,q=N?qi(N.speed,0,450):0;s.roarFilter.frequency.setTargetAtTime(300+X*2100,U,B),s.roarGain.gain.setTargetAtTime(N?.1+X*.16:0,U,B),s.whine.frequency.setTargetAtTime(380+q*3.6,U,B),s.whineFilter.frequency.setTargetAtTime(900+q*5,U,B),s.whineGain.gain.setTargetAtTime(N?.012+X*.01:0,U,B),s.rumbleGain.gain.setTargetAtTime(N?.afterburner?.45:0,U,.15)}const b={bass(N,U,B){M(B,"triangle",N.frequency,U,N.duration,.5,.01)},pad(N,U,B){for(const X of[-7,7])M(B,"triangle",N.frequency,U,N.duration+.4,.12,Math.min(.5,N.duration*.4),X)},lead(N,U,B){M(B,"square",N.frequency,U,N.duration,.07,.02),M(B,"sine",N.frequency*2,U,N.duration,.05,.02)},kick(N,U,B){const X=n.createOscillator(),q=n.createGain();X.frequency.setValueAtTime(130,U),X.frequency.exponentialRampToValueAtTime(N.frequency*.8,U+.14),y(q,U,.3,.7,.003),X.connect(q),q.connect(B),X.start(U),X.stop(U+.35),p(X,q)},snare(N,U,B){_({frequency:1800,q:.8,start:U,duration:.16,volume:.35,bus:B}),M(B,"triangle",N.frequency,U,.08,.15,.002)},hat(N,U,B){_({filter:"highpass",frequency:N.frequency,start:U,duration:.05,volume:.14,bus:B})}};function M(N,U,B,X,q,oe,de,ve=0){x({type:U,frequency:B,start:X,duration:q,volume:oe,attack:de,bus:N,detune:ve})}function L(){if(!n||!o)return;const N=ev[h.name];if(!N)return;const U=n.currentTime,B=n.createGain();if(B.gain.setValueAtTime(1e-4,U),B.gain.linearRampToValueAtTime(1,U+Wo),B.connect(i),u){const X=u.gain;X.gain.cancelScheduledValues(U),X.gain.setValueAtTime(X.gain.value,U),X.gain.linearRampToValueAtTime(1e-4,U+Wo),setTimeout(()=>X.disconnect(),(Wo+Dc+.5)*1e3)}u={name:h.name,definition:N,gain:B,startTime:U+.05,scheduled:0}}function z(){if(!u||!n||!o||n.state!=="running")return;const{definition:N}=u,U=N.bpm/60,B=(n.currentTime+Dc-u.startTime)*U;if(!(B<=u.scheduled)&&!(!N.loop&&u.scheduled>=N.length)){for(const X of tv(N,u.scheduled,B,{intense:h.intense}))b[X.voice]?.(X,Math.max(n.currentTime,u.startTime+X.time),u.gain);u.scheduled=B}}function F(N,{intense:U=!1}={}){h={name:N,intense:U},u?.name!==N&&L()}return{unlock:d,setEnabled:g,enabled:()=>o,play:T,engine:P,music:F,suspend:v,resume:m,activeVoices:()=>l}}const Ye=n=>document.getElementById(n),ui=1/120,sv=new I(0,0,1),Uc=new I(0,0,-1),Ts=new I(0,1,0),ov=Object.freeze({x:0,y:0}),Nc="en-bac-sound",Fc="en-bac-hotkeys",av=70,Oc=7e3,lv=500;function cv({scene:n,camera:e,renderer:t,player:i,environment:r,onExit:s,onComplete:o}){let a="home",l=Ht[0],c="easy",h=Ec(l),u=_c(),f=yc(),d=Bo(),g=zo(),v=null,m=!1,p=!1,y=0,x=0,_=0,A="",T=Pc(c),R=0,P=0,b=0,M=0,L=0,z=0,F="chase",N=!1,U=!1,B="",X=0,q=performance.now(),oe=0,de=0,ve=Ho({}),Be={};const De=new Set,ze=[],Ze=[],j=[],ie=[],be=[],Oe=[],Re=[],et=new Map,ot=r.terrainHeight,D=()=>De.has("AltLeft")||De.has("AltRight"),re=()=>a==="playing"&&f.phase!=="intro",Q=M_(t.domElement,re,()=>Gn(null),D,()=>{},()=>lt()),te=new an(1,5,4),ee=new It({color:"#ffedab"}),xe=new It({color:"#ff7046"}),ue=new yi(.75,5,6);ue.rotateX(Math.PI/2);const Me=new qr(1,0),Ke=new ln(110,4,8,40),qe=x_(e),C=v_(),S=q_(e),G=new I,Z=new I,se=new Kt,J=Y_(),ae=rv(),pe=i.getObjectByName("landing-gear"),Ce=new st(new an(.55,8,6),new It({color:"#ffd98a",transparent:!0,opacity:.9,depthWrite:!1}));Ce.position.set(0,-.86,-2.5),Ce.visible=!1,i.add(Ce);const Fe=()=>document.documentElement.classList.contains("theme-motion"),le=w=>{Fe()&&J.add(w)};function me(w,V=1.8){A=w,_=V}function We(w){const V=be[w];n.remove(V.mesh),V.mesh.material.dispose(),be.splice(w,1)}function Te(w,V,k,$,we,{gravity:He=12,growth:Je=.4,drag:Ne=0,opacity:it=1}={}){for(let Rt=J_(be.length,lv);Rt>0;Rt--)We(0);const Ut=new st(Me,new It({color:k,transparent:!0,opacity:it,depthWrite:!1}));Ut.position.copy(w),Ut.scale.setScalar($),n.add(Ut),be.push({mesh:Ut,velocity:V,life:we,maxLife:we,scale:$,gravity:He,growth:Je,drag:Ne,opacity:it})}const ye=w=>new I((Math.random()-.5)*w,(Math.random()-.5)*w,(Math.random()-.5)*w),Xe=w=>w[Math.floor(Math.random()*w.length)];function O(w,V=1){const k=w.clone();Te(k,new I,"#fff6dc",9*V,.12,{gravity:0,growth:8});for(let we=Math.round(10*V);we>0;we--)Te(k,ye(55*V),Xe(["#ffb347","#ffd166","#ff8c3a"]),(2.5+Math.random()*3)*V,.5+Math.random()*.6,{gravity:-2,growth:1.4,drag:2});for(let we=Math.round(8*V);we>0;we--)Te(k,ye(22*V).add(new I(0,8,0)),Xe(["#5a5d5e","#6e706f","#46494b"]),(3+Math.random()*2)*V,2+Math.random()*1.5,{gravity:-5,growth:.9,drag:.8,opacity:.7});for(let we=Math.round(8*V);we>0;we--)Te(k,ye(90*V).add(new I(0,25*V,0)),"#2b2a28",.45+Math.random()*.5,1.5+Math.random(),{gravity:30,growth:0,drag:.2});const $=k.distanceTo(i.position);le(Math.min(1,V*.6)*K_($)),ae.play("explosion",{size:V,distance:$})}function fe(){for(const w of[Ze,j,be,Oe]){for(const V of w)n.remove(V.mesh),(w===be||w===Oe)&&V.mesh.material.dispose();w.length=0}for(const w of ze)n.remove(w.mesh);ze.length=0,Re.length=0,ie.length=0,v=null,De.clear(),Q.reset(),S.reset(),M=0,L=0,b=0,Ce.visible=!1}function _e(w){P=w,pe.visible=w>0,pe.scale.y=Math.max(w,.001)}function Ie({type:w,position:V,target:k}){const $=Du[w];et.has(w)||et.set(w,G_(w));const we=et.get(w).clone(!0);we.position.set(V.x,Math.max(V.y,ot(V)+250),V.z);const Je=(k?G.set(Mt[k].x,we.position.y,Mt[k].z):G.copy(i.position)).clone().sub(we.position).setY(0);Je.lengthSq()<1&&Je.copy(mn(d)).setY(0),Je.normalize(),$.role!=="bomber"&&Je.dot(mn(d))>0&&Je.copy(mn(d)).setY(0).normalize();const Ne={type:w,spec:$,mesh:we,role:$.role,forward:Je,velocity:new I,previous:we.position.clone(),health:$.health,alive:!0,counted:!0,target:k,altitude:we.position.y,weapons:zo(),ai:null};return $.role==="fighter"?(Ne.ai=a_(c,$.ai),Ne.ai.elapsed=-ze.filter(it=>it.alive&&it.role==="fighter").length*2.5,Ne.weapons.ammo=Ne.ai.config.ammo,Ne.weapons.flares=Ne.ai.config.flares):Ne.ai=c_(),he(Ne,Je,1),n.add(we),ze.push(Ne),Ne}function he(w,V,k){const $=Math.atan2(-w.forward.x,-w.forward.z),we=Math.asin($t(w.forward.y,-1,1)),He=$t(V.clone().cross(w.forward).y*30/k,-.85,.85),Je=new Kt().setFromEuler(new Nt(we,$,He,"YXZ"));w.mesh.quaternion.slerp(Je,k>=1?1:1-Math.exp(-k*6))}function ne(w,V){if(w.alive){if(w.alive=!1,w.counted=!1,V){O(w.mesh.position,.55),y++,L=.5,me(`ĐÃ HẠ ${w.spec.label}`,2.2),ae.play("kill"),Re.push({mesh:w.mesh,velocity:w.velocity.clone(),spin:(Math.random()<.5?-1:1)*(1.5+Math.random()*2),life:4,smoke:0});for(const k of w.mesh.children)k.name==="flame"&&(k.visible=!1)}else n.remove(w.mesh);v===w&&(v=null,g.lock=0,g.locked=!1)}}const Pe=()=>ze.filter(w=>w.alive),$e=()=>ze.filter(w=>w.alive&&w.counted).length;function ft(){if(v?.alive)return;const w=mn(d);let V=null,k=-1/0;for(const $ of Pe()){const we=G.copy($.mesh.position).sub(i.position),He=we.length();if(He>Oc*2)continue;const Je=w.dot(we.divideScalar(He||1))-He/Oc*.35+($.counted?.3:0);Je>k&&(V=$,k=Je)}V!==v&&(v=V,g.lock=0,g.locked=!1)}function lt(){if(!re()||f.phase!=="combat")return;const w=Pe().sort((V,k)=>V.mesh.position.distanceTo(i.position)-k.mesh.position.distanceTo(i.position));w.length&&(v=w[(w.indexOf(v)+1)%w.length],g.lock=0,g.locked=!1,ae.play("target"))}function cn(){for(const V of Oe)n.remove(V.mesh),V.mesh.material.dispose();Oe.length=0,l.stages[h.stage]?.type==="waypoints"&&h.points.forEach((V,k)=>{const $=new st(Ke,new It({color:"#f2c65d",transparent:!0,opacity:.3,fog:!1}));$.position.set(V.x,V.y,V.z);const we=k?h.points[k-1]:i.position;$.lookAt(we.x,V.y,we.z),n.add($),Oe.push({mesh:$,index:k})})}function Wt(w=l,V=c){if(l=w,c=V,T=Pc(c),R=0,fe(),r.reset(),u=_c(),h=Ec(l),g=zo(),g.ammo=l.loadout.missiles,g.flares=l.loadout.flares,m=!1,p=!1,y=0,x=0,_=0,X=0,U=!1,de=0,B="",ve=Ho({}),l.start==="runway")d=Bo(),f=yc(),al(d,0),_e(1);else{const k=D_(l);d=Bo(new I(k.x,k.y,k.z)),d.orientation.setFromEuler(new Nt(0,-k.heading,0,"YXZ")),d.velocity.copy(mn(d)).multiplyScalar(d.speed),f={phase:"combat",elapsed:Gt.introDuration,speedComplete:!0,stable:0},_e(0)}i.position.copy(d.position),i.quaternion.copy(d.orientation),i.visible=!0,e.up.copy(Ts),e.fov=F==="cockpit"?70:53,e.clearViewOffset(),e.updateProjectionMatrix(),e.position.copy(i.position).add(new I(0,8.5,31).applyQuaternion(d.orientation));for(const k of["result","pause-panel"])Ye(k).hidden=!0;Ye("hud").hidden=!1,Ye("touch-controls").hidden=!1,Ye("home").hidden=!0,Ye("app").classList.remove("damage"),document.body.classList.add("playing"),document.body.dataset.gunsOnly=String(!!l.gunsOnly),a="playing",ae.resume(),l.start==="runway"&&!document.documentElement.classList.contains("theme-motion")&&wi(),f.phase==="combat"&&me(`${l.title.toUpperCase()} · ${l.date}`,3.5),ae.play("start"),ae.music("combat"),Y(0),ce()}function wi(){Iu(f,d),De.clear(),Q.reset(),i.position.copy(d.position),i.quaternion.copy(d.orientation),_e(1),Y(1),ce()}function Xt(w,V=""){if(a!=="playing")return;a=w?"won":"lost",De.clear(),Q.reset(),X=0,S.reset(),Ye("intro-panel").hidden=!0,Ye("warmup-panel").hidden=!0,Ye("hud").hidden=!0,Ye("touch-controls").hidden=!0,Ye("result").hidden=!1,Ye("app").classList.remove("damage");const k=w?wc(l.id):null,$=l.number>0;Ye("result-eyebrow").textContent=w?$?`HOÀN THÀNH MÀN ${String(l.number).padStart(2,"0")}`:"HOÀN THÀNH CHUYẾN BAY":"CHUYẾN BAY KẾT THÚC",Ye("result-title").textContent=w?p?"Về nhà an toàn.":"Giữ vững bầu trời.":"Hẹn một chuyến bay mới.",Ye("result-description").textContent=w?$&&!k?"Bảy chuyến bay đã khép lại. Cảm ơn bạn đã bay cùng câu chuyện của ông.":l.brief:V;const we=u.shots?`${Math.round(u.hits/u.shots*100)}%`:"—",He=[["THỜI GIAN",`${Math.ceil(u.elapsed)} GIÂY`],["HẠ",String(y)],["PHÁO TRÚNG",we],["THÂN",`${Math.round(u.health)}%`]];Ye("result-stats").replaceChildren(...He.map(([Je,Ne])=>{const it=document.createElement("div");return it.innerHTML="<dt></dt><dd></dd>",it.firstChild.textContent=Je,it.lastChild.textContent=Ne,it})),Ye("next-mission").hidden=!k,k&&(Ye("next-mission-label").textContent=`MÀN ${String(k.number).padStart(2,"0")} · ${k.title.toUpperCase()}`),!w&&u.health<=0&&(O(i.position,1.6),i.visible=!1),w&&$&&o(l.id),ae.engine(null),ae.music(w?"win":"lose")}function Ai(){fe(),a="home",r.reset(),ae.engine(null),ae.resume(),ae.music("home");for(const w of["intro-panel","warmup-panel","result","pause-panel","hud","touch-controls"])Ye(w).hidden=!0;delete document.body.dataset.phase,delete document.body.dataset.camera,Ye("home").hidden=!1,Ye("app").classList.remove("damage"),document.body.classList.remove("playing"),_e(0),i.visible=!0,e.up.copy(Ts),e.fov=53,e.near=1,e.updateProjectionMatrix(),s()}function Pn(){a==="playing"?(ce(),a="paused",De.clear(),Q.reset(),X=0,ae.suspend(),Ye("pause-panel").hidden=!1,Ye("touch-controls").hidden=!0):a==="paused"&&!Ye("help-dialog").open&&(a="playing",Ye("pause-panel").hidden=!0,Ye("touch-controls").hidden=!1,ae.resume())}function Ri(){N=a==="playing",N&&Pn(),Ye("help-dialog").open||Ye("help-dialog").showModal()}function Hn(){Ye("help-dialog").close(),N&&a==="paused"&&Pn(),N=!1}function Ci(w){if(a!=="playing"||f.phase!=="combat")return;const V=w?w.weapons:g;if(V.gunCooldown>0)return;const k=w?w.forward.clone():$_(mn(d),i.position,v?.mesh.position,v?.velocity,T),$=new st(te,w?xe:ee);$.position.copy(w?w.mesh.position:i.position).addScaledVector(k,12),$.scale.set(1,1,8),$.quaternion.setFromUnitVectors(sv,k),n.add($),Ze.push({mesh:$,velocity:k.multiplyScalar(Ki.speed),life:1.5,hostile:!!w,damage:w?w.ai.config.gunDamage:Ki.damage*T.gunDamage}),V.gunCooldown=w?.22:Ki.interval,w||(u.shots++,ae.play("gun"),le(.04),b=.04,Ce.scale.set(.8+Math.random()*.5,.8+Math.random()*.5,1.4+Math.random()*.8))}function Gn(w){if(a!=="playing"||f.phase!=="combat")return;if(!w&&(l.gunsOnly||l.loadout.missiles===0)){me("MÀN NÀY CHỈ DÙNG PHÁO · GIỮ CHUỘT TRÁI");return}const V=w?w.weapons:g,k=w?w.mesh:i,$=r_(V,k.position,w?w.forward:mn(d),!!w);if(!$){w||me(V.ammo===0?"HẾT TÊN LỬA · DÙNG PHÁO":"GIÁ PHÓNG ĐANG NẠP");return}const we=new I($.rail?2.6:-2.6,-.8,0).applyQuaternion(k.quaternion);$.position.add(we),$.previous.copy($.position),$.target=w?null:v,$.damage=w?w.ai.config.missileDamage:av,!w&&!v&&($.guided=!1),$.mesh=new st(ue,w?xe:ee),$.mesh.position.copy($.position),$.mesh.quaternion.setFromUnitVectors(Uc,$.direction),$.trailTimer=0,n.add($.mesh),j.push($);for(let He=0;He<8;He++)Te($.position,ye(18),"#c9c7bc",1.6+Math.random(),1+Math.random()*.4,{gravity:-1,growth:1.8,drag:2.5,opacity:.7});ae.play("missile",{distance:k.position.distanceTo(i.position)}),w||me($.guided?"ĐÃ PHÓNG · TÊN LỬA ĐANG BÁM":"CHƯA KHÓA · TÊN LỬA BAY THẲNG")}function hr(w){if(a!=="playing"||f.phase!=="combat")return;const V=w?w.mesh:i,k=s_(w?w.weapons:g,V.position,w?w.velocity:d.velocity,!!w);if(!k){w||me(g.flares?"MỒI BẪY ĐANG HỒI":"HẾT MỒI BẪY · RẼ GẮT ĐỂ NÉ");return}ie.push(k);for(let $=0;$<16;$++){const we=new I(($%2?1:-1)*(20+$*3),-8-Math.random()*15,12).applyQuaternion(V.quaternion).addScaledVector(k.velocity,.7);Te(k.position,we,"#ffe3a3",1.8,Vr.lifetime)}w||(me("ĐÃ THẢ MỒI BẪY · ĐỔI HƯỚNG NGAY"),ae.play("flare"))}function Kr(){re()&&(m=!m,me(m?"CÀNG ĐÃ HẠ · GIỮ DƯỚI 400 KM/H":"ĐÃ THU CÀNG"),ae.play("gear",{down:m}))}function js(w){for(const V of ze){if(!V.alive)continue;const k=V.mesh.position,$=V.forward.clone();V.previous.copy(k);let we=V.spec.speed;if(V.role==="fighter"){const He=j.find(Ne=>!Ne.hostile&&Ne.guided&&Ne.target===V&&Ne.position.distanceTo(k)<600),Je=l_(V.ai,{position:k,forward:V.forward,playerPosition:i.position,incomingPosition:He?.position,groundHeight:ot(k)},w);Je.deployFlare&&V.weapons.flareCooldown<=0&&hr(V),we=Je.speed,vc(V.weapons,w,k,V.forward,i.position),Je.fireMissile&&V.weapons.locked&&Gn(V),Je.fireGun&&Ci(V)}else{const He=u_(V.ai,{position:k,forward:V.forward,target:V.target?Mt[V.target]:null,altitude:V.altitude,groundHeight:ot(k)},w);if(He.release&&Qs(V),He.gone){ne(V,!1);continue}}he(V,$,w),V.velocity.copy(V.forward).multiplyScalar(we),k.addScaledVector(V.velocity,w)}}function Qs(w){const V=A_(h,w.spec.bombDamage),k=Mt[w.target];r.assets[w.target]?.setHealth(V);const $=new I(k.x,ot(k)+12,k.z);O($,2.2),w.counted=!1,me(`${k.label} TRÚNG BOM · CÒN ${Math.round(V)}%`,3)}function fr(w,V){u.health=Math.max(0,u.health-w),x=V}function eo(w,V){for(let k=Ze.length-1;k>=0;k--){const $=Ze[k],we=$.mesh.position.clone();if($.mesh.position.addScaledVector($.velocity,w),$.life-=w,$.hostile)Es(we,$.mesh.position,V,i.position,6)&&($.life=0,fr($.damage*T.damageTaken,.2),le(.25),ae.play("hurt"));else for(const He of ze)if(!(!He.alive||!Es(we,$.mesh.position,He.previous,He.mesh.position,He.spec.radius+T.hitPadding))){$.life=0,He.health-=$.damage,u.hits++,M=.12,ae.play("hit");for(let Je=3+Math.round(Math.random());Je>0;Je--)Te($.mesh.position,He.velocity.clone().multiplyScalar(.6).add(ye(140)),Xe(["#ffe2a0","#ffd27a","#fff3d6"]),.5+Math.random()*.4,.2+Math.random()*.15,{gravity:0,growth:0});break}$.life<=0&&(n.remove($.mesh),Ze.splice(k,1))}for(let k=j.length-1;k>=0;k--){const $=j[k];!$.hostile&&$.guided&&!$.target?.alive&&($.guided=!1);const we=$.hostile?i.position:$.target?.mesh.position??$.position,He=$.hostile?d.velocity:$.target?.velocity??G.set(0,0,0);if(o_($,w,we,He,ie),$.mesh.position.copy($.position),$.mesh.quaternion.setFromUnitVectors(Uc,$.direction),$.trailTimer-=w,$.trailTimer<=0&&(Te($.position,$.direction.clone().multiplyScalar(-12),$.hostile?"#e9a07c":"#d8d9c9",1.4,1.4,{gravity:-1,growth:1.6,drag:1,opacity:.65}),Te(G.copy($.position).addScaledVector($.direction,-3),new I,"#fff0b0",1.1,.08,{gravity:0,growth:0}),$.trailTimer=.045),$.hostile)Es($.previous,$.position,V,i.position,13)&&($.life=0,O($.position,.5),fr($.damage*T.damageTaken,.45),le(.7),ae.play("hurt"));else for(const Je of ze)if(!(!Je.alive||!Es($.previous,$.position,Je.previous,Je.mesh.position,13))){$.life=0,O($.position,.5),Je.health-=$.damage,M=.12,me("TRÚNG ĐÍCH");break}$.position.y<ot($.position)+2&&($.life=0),$.life<=0&&(n.remove($.mesh),j.splice(k,1))}for(let k=ie.length-1;k>=0;k--)ie[k].life-=w,ie[k].position.addScaledVector(ie[k].velocity,w),ie[k].velocity.y-=9.8*w,ie[k].life<=0&&ie.splice(k,1);for(const k of ze)k.alive&&k.health<=0&&ne(k,!0)}function Zr(w,V){const k=G.set(0,0,6).applyQuaternion(w.quaternion).add(w.position),$=V<.25;Te(k,ye(6).add(new I(0,4,0)),$?"#2f3031":"#6b6d6b",1.6+Math.random(),1.6+Math.random()*.8,{gravity:-3,growth:1.3,drag:.6,opacity:$?.8:.55}),$&&Te(k,ye(4),Xe(["#ff8a3d","#ffb347"]),1+Math.random()*.6,.25,{gravity:-2,growth:.6})}function to(w){if(z-=w,!(z>0)){z=.12,u.health<50&&Zr(i,u.health/100);for(const V of ze){const k=V.health/V.spec.health;V.alive&&k<.5&&Zr(V.mesh,k)}}}function E(w){for(let V=Re.length-1;V>=0;V--){const k=Re[V],$=k.mesh.position;k.velocity.y-=9.8*w,k.velocity.multiplyScalar(1-Math.min(1,w*.15)),$.addScaledVector(k.velocity,w),k.mesh.rotateZ(k.spin*w),k.mesh.rotateX(-.35*w),k.life-=w,k.smoke-=w,k.smoke<=0&&(k.smoke=.05,Te($,ye(8),Xe(["#3c3e3f","#55585a"]),1.6+Math.random(),2.2+Math.random(),{gravity:-3,growth:1.2,drag:.6,opacity:.55}),Te($,ye(10),Xe(["#ff8a3d","#ffc061"]),1.4+Math.random(),.3,{gravity:-2,growth:.5})),(k.life<=0||$.y<ot($)+3)&&(O($,1.4),n.remove(k.mesh),Re.splice(V,1))}}function H(w){if(_=Math.max(0,_-w),f.phase==="intro"){Mc(f,d,{},w),i.position.copy(d.position),i.quaternion.copy(d.orientation),f.phase==="warmup"&&wi();return}_e(Z_(P,m,w)),M=Math.max(0,M-w),L=Math.max(0,L-w);const V=i.position.clone(),k={...i_(De),gear:m};Be=Q.pointer.active?y_(Q.pointer,k):k,n_(d,Be,w,"standard");const $=C_({position:d.position,speed:d.speed,verticalSpeed:d.velocity.y,gear:m});if($==="landed")p=!0,d.position.y=Et.y+Et.wheelHeight,d.velocity.y=Math.max(0,d.velocity.y),d.sink=0;else if($==="crash"){u.health=0,i.position.copy(d.position),Xt(!1,"Tiếp đất quá nhanh hoặc quá mạnh. Giữ dưới 400 km/h và hạ thật êm.");return}else p=!1;if(i.position.copy(d.position),i.quaternion.copy(d.orientation),!p&&i.position.y<ot(i.position)+(m?2.4:8)){u.health=0,Xt(!1,"Va chạm mặt đất, mặt biển hoặc núi.");return}if(f.phase==="warmup"){Mc(f,d,Be,w),f.phase==="combat"&&(me(`${l.title.toUpperCase()} · ${l.date}`,3.5),ae.play("stage"));return}u.elapsed+=w;const we=mn(d),He=w_(h,l,{position:d.position,heading:Math.atan2(we.x,-we.z),hostiles:$e(),landed:p},w);for(const it of He.spawn)Ie(it);if(He.spawn.length&&!He.stageChanged&&(me("ĐỢT TIẾP THEO ĐANG TỚI",3),ae.play("wave")),He.dismiss){for(const it of Pe())ne(it,!1);me("ĐỊCH RÚT LUI",3)}if(He.stageChanged&&(cn(),h.stage>0&&(me(l.stages[h.stage].label.toUpperCase(),3.5),ae.play("stage"))),He.failed){Xt(!1,h.reason);return}if(He.completed){Xt(!0);return}for(const it of Oe)it.mesh.visible=it.index>=h.waypoint,it.mesh.material.opacity=it.index===h.waypoint?.95:.25;R=Math.max(0,R-w);const Je=R<=0&&ze.find(it=>it.alive&&it.mesh.position.distanceTo(i.position)<Vo.radius);if(Je&&(R=Vo.cooldown,fr(T.collisionDamage,.6),Je.health-=Vo.enemyDamage,O(G.copy(Je.mesh.position).add(i.position).multiplyScalar(.5),.35),le(.8),ae.play("collision"),me("VA CHẠM · GIỮ KHOẢNG CÁCH"),u.health<=0)){Xt(!1,"Va chạm với máy bay đối phương.");return}js(w),ft();const Ne=!!v&&!l.gunsOnly&&l.loadout.missiles>0;if(vc(g,w,i.position,we,v?v.mesh.position:i.position,Ne),g.locked&&!U&&ae.play("lock"),U=g.locked,(De.has("MouseGun")||Q.pointer.firing)&&Ci(null),eo(w,V),to(w),u.health<=0){Xt(!1,"Máy bay bị hỏa lực đối phương bắn hạ.");return}x=Math.max(0,x-w)}function Y(w){if(f.phase==="intro"){const V=f.elapsed<3?new I(22,5,-10):f.elapsed<5.5?new I(-17,5,20):new I(15,10,32);e.position.copy(i.position).add(V),e.up.copy(Ts),e.near=1,e.fov=48,e.clearViewOffset(),e.updateProjectionMatrix(),e.lookAt(i.position),i.visible=!0,r.sky.position.copy(i.position);return}qe(d,F,De.has("KeyV"),w,D()?Q.look:ov),J.step(w),Fe()&&J.trauma()>0&&e.position.add(J.offset(Z,F==="cockpit"?.15:1.2)),F==="cockpit"&&(e.near=1.5,e.updateProjectionMatrix()),i.visible=F==="chase",r.sky.position.copy(i.position)}function K(){e.updateMatrixWorld(),se.copy(e.quaternion).invert();const w=j.filter($=>$.hostile&&$.guided).map($=>({distance:$.position.distanceTo(i.position),local:$.position.clone().sub(e.position).applyQuaternion(se)})),V=f.phase==="combat"?Math.max(0,...Pe().filter($=>$.role==="fighter"&&$.ai.phase==="pursuit").map($=>$.weapons.lock)):0,k=l.stages[Math.min(h.stage,l.stages.length-1)];return Ho({stalled:d.stalled,agl:i.position.y-ot(i.position),verticalSpeed:d.velocity.y,incoming:w,health:u.health,missiles:g.ammo,flares:g.flares,flareReady:g.flareCooldown<=0,enemyLock:V,assetHealth:h.assetHealth,assetLabel:l.asset?Mt[l.asset].label:"",highG:d.highG,landing:m||k.type==="land",usesMissiles:!l.gunsOnly&&l.loadout.missiles>0})}function W(w){const V=ve.master?.id??"";de-=w,V!==B&&(de=0,B=V),!(!V||de>0)&&(V==="missile"?(ae.play("warn-missile",{urgency:ve.threats[0].urgency}),de=.5-ve.threats[0].urgency*.38):V==="pull-up"?(ae.play("warn-pull-up"),de=.34):(ae.play("warn-caution"),de=.55))}function ce(){const w=mn(d),V=Math.atan2(w.x,-w.z),k=(Math.round(V*180/Math.PI)+360)%360;ve=K();const $={hostiles:$e()},we=R_(h,l,$),He=Pe().map(Ne=>({kind:"enemy",x:Ne.mesh.position.x,z:Ne.mesh.position.z,selected:Ne===v}));for(const Ne of j)Ne.hostile&&Ne.guided&&He.push({kind:"missile",x:Ne.position.x,z:Ne.position.z});l.asset&&He.push({kind:"asset",x:Mt[l.asset].x,z:Mt[l.asset].z}),we.marker&&He.push({kind:"waypoint",x:we.marker.x,z:we.marker.z});const Je={flight:d,weapons:g,sortie:f,warnings:ve,objective:we,heading:k,headingRadians:V,cameraMode:F,radar:He,missionLabel:l.number?`MÀN ${String(l.number).padStart(2,"0")} · ${l.title.toUpperCase()}`:l.title.toUpperCase(),asset:l.asset&&f.phase==="combat"?{label:Mt[l.asset].label,health:h.assetHealth}:null,health:u.health,gunsOnly:!!l.gunsOnly||l.loadout.missiles===0,gear:m,braking:!!Be.brake,nosePoint:i.position.clone().addScaledVector(w,1200),pointer:Q.pointer,freeLook:D(),enemies:Pe().map(Ne=>({position:Ne.mesh.position,label:Ne.spec.label,distance:Ne.mesh.position.distanceTo(i.position),health:$t(Ne.health/Ne.spec.health,0,1),selected:Ne===v})),gunLead:v&&v.mesh.position.distanceTo(i.position)<1700?Ru(i.position,v.mesh.position,v.velocity,Ki.speed):null,hitMarker:L>0?"kill":M>0?"hit":"",message:_>0?A:"",damaged:x>0,blink:Math.floor(oe*6)%2===0};if(S.update(Je),F==="cockpit"&&f.phase!=="intro"){const Ne=new Set(ve.dangers.map(it=>it.id));for(const it of ve.cautions)Ne.add(it.id);C.update({worldCamera:e,flight:d,input:Be,heading:k,health:u.health,weapons:g,warnings:Ne,gear:m},1/60)}}const Ee=new Set(["Space","ControlLeft","ControlRight","AltLeft","AltRight","KeyA","KeyD","KeyQ","KeyE","KeyF","KeyG","KeyC","KeyV","KeyT","KeyL","Tab"]);function Ue(w){f.phase!=="intro"&&(w==="KeyF"&&Gn(null),w==="KeyG"&&hr(null),(w==="KeyT"||w==="Tab")&&lt(),w==="KeyL"&&Kr(),w==="KeyC"&&(F=F==="chase"?"cockpit":"chase",Q.reset(),Y(0),ce()),w==="MouseGun"&&Ci(null))}addEventListener("keydown",w=>{if(!Ye("help-dialog").open){if(w.code==="KeyH"&&!w.repeat&&!w.ctrlKey&&!w.metaKey){w.preventDefault(),a==="home"?Ri():Le();return}if(w.code==="Escape"&&!w.repeat){Pn();return}a!=="playing"||!Ee.has(w.code)||(w.preventDefault(),De.add(w.code),w.repeat||Ue(w.code))}}),addEventListener("keyup",w=>{De.delete(w.code),(w.code==="AltLeft"||w.code==="AltRight")&&Q.resetLook()}),addEventListener("blur",()=>{De.clear(),Q.reset(),a==="playing"&&Pn()}),document.addEventListener("visibilitychange",()=>{document.hidden&&a==="playing"&&Pn(),document.hidden?ae.suspend():a!=="paused"&&ae.resume()});for(const w of document.querySelectorAll("[data-key]"))w.onpointerdown=V=>{a==="playing"&&(V.preventDefault(),w.setPointerCapture(V.pointerId),De.add(w.dataset.key),Ue(w.dataset.key))},w.onpointerup=w.onpointercancel=w.onlostpointercapture=()=>De.delete(w.dataset.key);for(const w of document.querySelectorAll("[data-help]"))w.addEventListener("click",Ri);Ye("close-help").onclick=Hn,Ye("help-dialog").addEventListener("cancel",w=>{w.preventDefault(),Hn()}),Ye("help-dialog").addEventListener("click",w=>{w.target===Ye("help-dialog")&&Hn()}),Ye("skip-intro").onclick=()=>{a==="playing"&&f.phase==="intro"&&wi()},Ye("restart").onclick=Ye("pause-restart").onclick=()=>Wt(),Ye("next-mission").onclick=()=>{const w=wc(l.id);w&&Wt(w)},Ye("pause").onclick=Ye("resume").onclick=Pn,Ye("hangar").onclick=Ye("pause-quit").onclick=Ai;function Le(){const w=Ye("hotkeys").classList.toggle("is-collapsed");try{localStorage.setItem(Fc,w?"hidden":"shown")}catch{}}try{Ye("hotkeys").classList.toggle("is-collapsed",localStorage.getItem(Fc)==="hidden")}catch{}function Ge(){const w=ae.enabled();Ye("sound").setAttribute("aria-pressed",String(w)),Ye("sound").textContent=`ÂM THANH: ${w?"BẬT":"TẮT"}`}try{ae.setEnabled(localStorage.getItem(Nc)!=="off")}catch{}Ge(),Ye("sound").onclick=()=>{ae.setEnabled(!ae.enabled()),Ge();try{localStorage.setItem(Nc,ae.enabled()?"on":"off")}catch{}};const Ve=()=>{ae.unlock(),removeEventListener("pointerdown",Ve,!0),removeEventListener("keydown",Ve,!0)};addEventListener("pointerdown",Ve,!0),addEventListener("keydown",Ve,!0),document.addEventListener("click",w=>{w.target.closest?.("button:not([data-key])")&&ae.play("click")}),addEventListener("resize",()=>{Q.reset(),e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight)});function ke(w){for(let V=be.length-1;V>=0;V--){const k=be[V];k.life-=w,k.drag&&k.velocity.multiplyScalar(Math.max(0,1-k.drag*w)),k.velocity.y-=k.gravity*w,k.mesh.position.addScaledVector(k.velocity,w),k.mesh.material.opacity=$t(k.life/k.maxLife,0,1)*k.opacity,k.mesh.scale.setScalar(k.scale*(1+k.growth*(k.maxLife-k.life))),k.life<=0&&We(V)}}function nt(w,V,k,$=0){for(const we of w.children)we.name==="flame"?(we.userData.level=Ba(we.userData.level??V,V,k,3),we.scale.y=we.userData.level+(Math.random()-.5)*.14):we.name==="burner"&&(we.userData.base??=we.material.color.clone(),we.userData.glow=Ba(we.userData.glow??0,$,k,2.5),we.material.color.copy(we.userData.base).multiplyScalar(1+we.userData.glow*1.6))}function ht(){const w=oe*.035,V=5200;i.position.set(-1500+Math.cos(w)*V,620+Math.sin(oe*.4)*6,-5200+Math.sin(w)*V),i.rotation.set(0,Math.PI-w,-.22,"YXZ");const k=G.set(26,7,30).applyQuaternion(i.quaternion);e.position.copy(i.position).add(k),e.up.copy(Ts),e.lookAt(G.copy(i.position).add(new I(-9,1,-14).applyQuaternion(i.quaternion))),r.sky.position.copy(i.position)}function gt(){t.clear(),t.render(n,e),F==="cockpit"&&(a==="playing"||a==="paused")&&f.phase!=="intro"&&(t.clearDepth(),t.render(C.scene,C.camera))}function dt(w){requestAnimationFrame(dt);const V=Math.min((w-q)/1e3,.1);if(q=w,a!=="paused"&&(oe+=V,r.update(V,oe)),a==="home")ht();else if(a==="playing"){for(X+=V;X>=ui&&a==="playing";)X-=ui,H(ui);a==="playing"&&(Y(V),ce(),W(V),ae.engine({throttle:d.throttle,afterburner:d.afterburner,speed:d.speed}),ae.music("combat",{intense:$e()>0}))}if(a!=="paused"){E(V),ke(V),b-=V,Ce.visible=b>0;const k=a!=="home"&&d.afterburner;nt(i,a==="home"?.9:.55+d.throttle*.45+(k?1:0),V,k?1:0);for(const $ of ze)$.alive&&nt($.mesh,1,V)}gt()}return requestAnimationFrame(dt),{start:Wt,exit:Ai,showHelp:Ri,debug:()=>({scene:n,camera:e,render:gt,flight:d,enemies:ze,missiles:j,missionState:h,weapons:g,combat:u,sortie:f,mission:l,keys:De,pointer:Q.pointer,particles:be,wrecks:Re,shake:J,settings:T,audio:ae,gearTravel:()=>P,setCamera(w){F=w},advance(w){for(let V=Math.round(w/ui);V>0&&a==="playing";V--)H(ui),E(ui),ke(ui);return oe+=w,a==="playing"&&(Y(1),ce()),gt(),a}}),state:()=>a}}const vt=4,on=6e4;function or(n){return 5200+520*Math.sin(n/1900)+260*Math.sin(n/730+1.3)}function Yr(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}const Bu=[[-11e3,-19e3],[-8200,-14500],[-5600,-10600],[Mt.bridge.x,Mt.bridge.z],[-1200,-4700],[1500,-3500],[3900,-2900],[6400,-2500]],Ws=280;function zu(){const n=Yr(29),e=[],t=(i,r,s,o,a)=>e.push({center:{x:i,y:a,z:r},radius:s,height:o,base:a});for(let i=0;i<52;i++){const r=i%3!==0,s=r?-7500-n()*15e3:-6e3+n()*15e3,o=r?-2e4+n()*34e3:-15500-n()*9e3;t(s,o,380+n()*760,260+n()*780,vt)}for(let i=0;i<18;i++)t(7400+n()*9e3,-15e3+n()*3e4,160+n()*420,110+n()*330,0);return e.filter(i=>Bu.every(([r,s])=>Math.hypot(i.center.x-r,i.center.z-s)>i.radius+500))}function uv(n,e,t){const i=1-Math.hypot(e-n.center.x,t-n.center.z)/n.radius;return i<=0?-1/0:n.base+n.height*Math.min(1,1.35*i)}function hv(n=zu()){return function(t){let i=t.x<or(t.z)?vt:0;for(const r of n)i=Math.max(i,uv(r,t.x,t.z));return i}}function fv(n,e){const t=document.createElement("canvas");t.width=t.height=n,e(t.getContext("2d"),n);const i=new Xr(t);return i.colorSpace=Lt,i.wrapS=i.wrapT=Dr,i.anisotropy=8,i}function dv(){const n=Yr(101),e=["#5f7d3c","#6f8f45","#7d9a4b","#56733a","#688a44","#94a653","#a9a85a","#5b7d74","#877a52"];return fv(1024,(t,i)=>{t.fillStyle="#44552f",t.fillRect(0,0,i,i),(function r(s,o,a,l,c){if(c>0&&(a>110||l>110||n()<.55)&&Math.max(a,l)>46){const h=.35+n()*.3;a>l?(r(s,o,a*h,l,c-1),r(s+a*h,o,a*(1-h),l,c-1)):(r(s,o,a,l*h,c-1),r(s,o+l*h,a,l*(1-h),c-1));return}if(t.fillStyle=e[Math.floor(n()**1.6*e.length)],t.fillRect(s+1.5,o+1.5,a-3,l-3),t.strokeStyle="rgba(30,45,25,.13)",t.lineWidth=1,t.beginPath(),n()<.5)for(let h=o+5;h<o+l-3;h+=5)t.moveTo(s+3,h),t.lineTo(s+a-3,h);else for(let h=s+5;h<s+a-3;h+=5)t.moveTo(h,o+3),t.lineTo(h,o+l-3);t.stroke()})(0,0,i,i,7)})}function ws(n,e,t,i){const r=[],s=[],o=[];n.forEach(([c,h],u)=>{const[f,d]=n[Math.max(0,u-1)],[g,v]=n[Math.min(n.length-1,u+1)],m=Math.hypot(g-f,v-d)||1,p=-(v-d)/m*e/2,y=(g-f)/m*e/2;if(r.push(c+p,i,h+y,c-p,i,h-y),s.push(0,u,1,u),u){const x=u*2;o.push(x-2,x,x-1,x-1,x,x+1)}});const a=new Dt;a.setAttribute("position",new at(r,3)),a.setAttribute("uv",new at(s,2)),a.setIndex(o),a.computeVertexNormals();const l=new st(a,t);return l.renderOrder=1,l}function Bc(n,e){return new uu(n.map(([i,r])=>new I(i,0,r))).getPoints(e).map(i=>[i.x,i.z])}function Ar(n,e=1){return new Qt({color:n,transparent:e<1,opacity:e,side:jt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})}function jn(n,e,t){const i=new Tf(n,e,t.length),r=new Tt,s=new Qe;return t.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.turn??0,0),r.scale.set(o.sx??1,o.sy??1,o.sz??1),r.updateMatrix(),i.setMatrixAt(a,r.matrix),o.color&&i.setColorAt(a,s.set(o.color))}),i.instanceMatrix.needsUpdate=!0,i.frustumCulled=!1,i}const ku=`#include <common>
#include <logdepthbuf_pars_vertex>
`,Hu=`#include <logdepthbuf_pars_fragment>
`;function pv(){return new st(new an(28e3,32,20),new An({side:Vt,depthWrite:!1,fog:!1,vertexShader:`${ku}varying vec3 vPosition; void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      #include <logdepthbuf_vertex>
    }`,fragmentShader:`${Hu}varying vec3 vPosition; void main(){
      #include <logdepthbuf_fragment>
      vec3 dir=normalize(vPosition);float h=dir.y;
      vec3 col=mix(vec3(.86,.68,.52),vec3(.2,.39,.5),smoothstep(-.04,.6,h));
      col=mix(col,vec3(.93,.8,.64),pow(1.-clamp(abs(h),0.,1.),9.)*.55);
      float sun=max(dot(dir,normalize(vec3(-.38,.14,-1.))),0.);
      col+=vec3(1.,.66,.32)*(pow(sun,420.)*.9+pow(sun,18.)*.18);gl_FragColor=vec4(col,1.);}`}))}function mv(){const n=new rr;n.moveTo(on,-on),n.lineTo(on,on);for(let t=-on;t<=on;t+=400)n.lineTo(or(t)-40,-t);n.closePath();const e=new $s(n);return e.rotateX(-Math.PI/2),new st(e,new An({uniforms:{time:{value:0}},vertexShader:`${ku}varying vec3 world;void main(){world=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);
      #include <logdepthbuf_vertex>
    }`,fragmentShader:`${Hu}varying vec3 world; uniform float time; void main(){
      #include <logdepthbuf_fragment>
      float wave=sin(world.x*.021+sin(world.z*.012+time*.25)*2.)*sin(world.z*.044-time*.6);
      float fine=sin(world.x*.15+world.z*.21+time)*.5+.5;
      vec3 base=mix(vec3(.065,.17,.2),vec3(.2,.33,.34),wave*.22+.5);
      base+=vec3(.85,.5,.27)*pow(max(0.,1.-abs(world.x-9000.)/7000.),6.)*.12*(fine+wave*.4);
      float fog=smoothstep(3000.,22000.,distance(cameraPosition,world));
      gl_FragColor=vec4(mix(base,vec3(.66,.66,.6),fog),1.);}`}))}function gv(n){const e=new rr;e.moveTo(-on,on),e.lineTo(-on,-on);const t=[];for(let l=on;l>=-on;l-=400)e.lineTo(or(l),-l),t.push([or(l)-25,l]);e.closePath();const i=new $s(e);i.rotateX(-Math.PI/2);const r=dv();r.repeat.set(1/1700,1/1700);const s=new st(i,new Qt({map:r}));s.position.y=vt,n.add(s),n.add(ws(t,110,Ar("#cdbf94"),vt+.4));const o=Bc(Bu,160);n.add(ws(o,Ws+70,Ar("#8d8358"),vt+.4)),n.add(ws(o,Ws,Ar("#6f8480"),vt+1.1));const a=Bc([[-760,-400],[-1500,-2600],[-2500,-5200],[-3900,-8200],[-6200,-9900],[-12e3,-11500]],90);return n.add(ws(a,16,Ar("#a08d68"),vt+.75)),{river:o,road:a}}function _v(n,e){const t=Yr(77);for(const i of e){const r=new Rn(i.radius*.26,i.radius,i.height,9,4),s=r.attributes.position,o=[],a=new Qe("#7b7f73"),l=new Qe(i.base?"#3f5a3a":"#42604a"),c=new Qe;for(let u=0;u<s.count;u++){const f=s.getY(u)/i.height+.5,d=.78+t()*.44;s.setX(u,s.getX(u)*d),s.setZ(u,s.getZ(u)*d),f>.2&&s.setY(u,s.getY(u)+(t()-.5)*i.height*.16),c.copy(l).lerp(a,Math.max(0,f-.35)*t()*1.5).multiplyScalar(.75+t()*.4),o.push(c.r,c.g,c.b)}r.setAttribute("color",new at(o,3)),r.computeVertexNormals();const h=new st(r,new Qt({vertexColors:!0,flatShading:!0}));h.position.set(i.center.x,i.base+i.height/2-20,i.center.z),h.rotation.y=t()*6,n.add(h)}}function vv(n,{river:e,road:t},i){const r=Yr(311),s=[],o=[],a=[],l=[],c=[],h=(g,v)=>g<or(v)-150&&i({x:g,z:v})<=vt&&e.every(([m,p])=>Math.hypot(g-m,v-p)>Ws*.75),u=(g,v)=>Math.abs(g-Mt.airfield.x)>1050||v<-2350||v>1950,f=[];for(let g=0;g<26;g++){const v=(g%2?t:e)[Math.floor(r()*(g%2?t:e).length)];f.push([v[0]+(r()-.5)*1700,v[1]+(r()-.5)*1700])}for(let g=0;g<22;g++)f.push([-7e3+r()*11500,-12e3+r()*22e3]);for(const[g,v]of f){const m=10+Math.floor(r()*22);for(let p=0;p<m;p++){const y=g+(r()-.5)*380,x=v+(r()-.5)*380;if(!h(y,x)||!u(y,x))continue;const _=7+r()*6,A=5+r()*4,T=3+r()*1.5,R=r()*Math.PI;s.push({x:y,y:vt+T/2,z:x,turn:R,sx:_,sy:T,sz:A,color:r()<.7?"#c9b990":"#b5a27c"}),o.push({x:y,y:vt+T+1.6,z:x,turn:R+Math.PI/4,sx:_*.82,sy:3.2,sz:A*.9,color:r()<.55?"#9a4f38":"#8f845c"})}for(let p=0;p<46;p++){const y=r()*Math.PI*2,x=150+r()*130,_=g+Math.cos(y)*x,A=v+Math.sin(y)*x;if(!h(_,A)||!u(_,A))continue;const T=7+r()*8;(r()<.25?l:a).push({x:_,y:vt+T*.8,z:A,turn:r()*6,sx:T,sy:T*(1+r()*.5),sz:T,color:r()<.5?"#33552f":"#3f6a37"})}}for(const[g,v,m]of[[t,18,2],[e,Ws/2+40,1]])for(let p=1;p<g.length-1;p+=m)for(const y of[-1,1]){if(r()<.35)continue;const[x,_]=g[p-1],[A,T]=g[p+1],R=Math.hypot(A-x,T-_)||1,P=g[p][0]-(T-_)/R*v*y+(r()-.5)*30,b=g[p][1]+(A-x)/R*v*y+(r()-.5)*30;if(!h(P,b)||!u(P,b))continue;const M=8+r()*8;a.push({x:P,y:vt+M*.8,z:b,turn:r()*6,sx:M,sy:M*1.2,sz:M,color:"#2f4f2e"})}for(let g=0;g<40;g++){const v=-14e3+r()*28e3,m=or(v)+250+r()*3200;c.push({x:m,y:.8,z:v,turn:r()*6,sx:3.2,sy:1.6,sz:13,color:r()<.5?"#5b4630":"#7a6a4c"})}const d={vertexColors:!1};n.add(jn(new ut(1,1,1),new Qt(d),s)),n.add(jn(new yi(.82,1,4),new Qt({...d,flatShading:!0}),o)),n.add(jn(new qr(.8,0),new Qt({...d,flatShading:!0}),a)),n.add(jn(new yi(.45,2.2,5),new Qt({...d,flatShading:!0}),l)),n.add(jn(new ut(1,1,1),new Qt(d),c))}function xv(n){const e=Yr(53),t=[];for(let s=0;s<46;s++){const o=-26e3+e()*52e3,a=-26e3+e()*52e3,l=1500+e()*1900,c=260+e()*520;for(let h=0,u=4+Math.floor(e()*6);h<u;h++){const f=c*(.35+e()*.5);t.push({x:o+(e()-.5)*c*2.2,y:l+(e()-.3)*c*.35,z:a+(e()-.5)*c*1.5,turn:e()*6,sx:f,sy:f*.5,sz:f*.8})}}const i=new Qt({color:"#f4ede0",emissive:"#8f8a84",transparent:!0,opacity:.86,depthWrite:!1,flatShading:!0}),r=jn(new qr(1,1),i,t);return r.renderOrder=2,n.add(r),r}function yv(){return Gs((n,e,t)=>{n.fillStyle="#da251d",n.fillRect(0,0,e,t),n.fillStyle="#ffdf00",sl(n,e/2,t/2,t*.3)},300,200)}function Gu(n,e){return e.forEach(t=>{t.visible=!1,n.add(t)}),t=>e.forEach((i,r)=>{i.visible=t<=100-(r+1)*(100/(e.length+1))})}function Zi(n,e,t,i){const r=new st(new En(t,14),Ar("#221f1b",.92));return r.rotation.x=-Math.PI/2,r.position.set(n,i,e),r.renderOrder=3,r}function Mv(n){const e=new en;n.add(e);const t=new Map,i=u=>t.get(u)??t.set(u,new Qt({color:u})).get(u);function r(u,f,d,g,v,m,p,y=e){const x=new st(new ut(u,f,d),i(p));return x.position.set(g,v,m),y.add(x),x}const s=vt+.2;r(1800,.4,4e3,0,vt,-200,"#5b6a4d"),r(Et.halfWidth*2,.3,Et.zMax-Et.zMin,Et.x,s,(Et.zMax+Et.zMin)/2,"#4a4f4c");const o=[];for(let u=-1740;u<1400;u+=100){o.push({x:0,y:s+.19,z:u,sx:2,sy:.04,sz:42});for(const f of[-34,34])o.push({x:f,y:s+.19,z:u,sx:.5,sy:.04,sz:80})}for(const u of[1110,-1640])for(const f of[-24,-16,-8,8,16,24])o.push({x:f,y:s+.2,z:u,sx:4,sy:.04,sz:70});e.add(jn(new ut(1,1,1),new It({color:"#d9d0b2"}),o));const a=[];for(let u=Et.zMin;u<=Et.zMax;u+=80)for(const f of[-39,39])a.push({x:f,y:s+.6,z:u,sx:1,sy:1,sz:1});e.add(jn(new an(.7,6,4),new It({color:"#ffd98a"}),a)),r(26,.3,2500,120,s,100,"#565b56"),r(60,.3,26,78,s,1300,"#565b56"),r(60,.3,26,78,s,-1100,"#565b56"),r(330,.3,240,320,s,980,"#5d615b");const l=new Rn(34,34,90,14,1,!1,0,Math.PI);l.rotateX(Math.PI/2),l.rotateZ(Math.PI/2);for(let u=0;u<3;u++){const f=new st(l,i("#6c7462"));f.position.set(380+u*90,vt,1180),e.add(f)}for(let u=0;u<5;u++){const f=520-u*300,d=215;for(const[g,v,m,p]of[[30,0,8,62],[0,-31,68,8],[0,31,68,8]])r(m,9,p,d+g,vt+4.5,f+v,"#677250");if(u%2===0){const g=ol("#bfc4c0");g.position.set(d-4,s+1.95,f),g.rotation.y=Math.PI/2,g.getObjectByName("landing-gear").visible=!0,g.getObjectByName("flame").visible=!1,e.add(g)}}r(18,44,18,-150,vt+22,860,"#c4bca5"),r(30,9,30,-150,vt+48,860,"#3d5353"),r(34,1.2,34,-150,vt+53,860,"#c4bca5");for(const[u,f]of[[-230,760],[-260,800],[-230,840]]){const d=new st(new Rn(14,14,16,14),i("#8b8f84"));d.position.set(u,vt+8,f),e.add(d)}for(const[u,f]of[[-420,-900],[470,-1500],[-460,1500],[520,1650]]){const d=new st(new ln(15,3.2,6,14),i("#6d6a4d"));d.rotation.x=Math.PI/2,d.position.set(u,vt+2,f),e.add(d),r(1,1,13,u,vt+6,f,"#2d3430").rotation.set(-.9,u*.01,0)}r(.8,45,.8,-67,vt+22,1090,"#c2bdab");const c=new st(new tn(18,12),yv());c.position.set(-57.5,vt+38,1090),e.add(c);const h=Gu(e,[Zi(160,200,26,s+.3),Zi(-12,-500,22,s+.35),Zi(300,900,34,s+.3),Zi(14,420,28,s+.35)]);return{group:e,setHealth:h,flag:c}}function Sv(n,e){const t=new en;n.add(t);const i=e.reduce((x,[_,A],T)=>Math.hypot(_-Mt.bridge.x,A-Mt.bridge.z)<Math.hypot(e[x][0]-Mt.bridge.x,e[x][1]-Mt.bridge.z)?T:x,0),[r,s]=e[i-1],[o,a]=e[i+1];t.position.set(Mt.bridge.x,vt,Mt.bridge.z),t.rotation.y=Math.atan2(-(o-r),-(a-s));const l=new Qt({color:"#4f5857"}),c=new Qt({color:"#9b958a"}),h=4,u=110,f=20,d=h*u,g=[];function v(x,_,A,T){const R=new I(...x),P=new I(..._),b=new st(new ut(A,R.distanceTo(P),A),l);b.position.copy(R).add(P).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new I(0,1,0),P.clone().sub(R).normalize()),T.add(b)}for(let x=0;x<h;x++){const _=new en,A=-d/2+x*u;t.add(_),g.push(_);const T=new st(new ut(u,2.4,15),new Qt({color:"#6b6457"}));T.position.set(A+u/2,f,0),_.add(T);for(const R of[-7.5,7.5]){const b=M=>f+6+Math.sin(M/6*Math.PI)*15;for(let M=0;M<6;M++){const L=A+M*u/6,z=L+u/6;v([L,b(M),R],[z,b(M+1),R],1.3,_),M&&v([L,f,R],[L,b(M),R],.9,_),v(M<6/2?[L,f,R]:[z,f,R],M<6/2?[z,b(M+1),R]:[L,b(M),R],.8,_)}}for(let R=1;R<6;R++){const P=A+R*u/6,b=f+6+Math.sin(R/6*Math.PI)*15;v([P,b,-7.5],[P,b,7.5],.8,_)}}for(let x=0;x<=h;x++){const _=new st(new ut(9,f+6,20),c);_.position.set(-d/2+x*u,f/2-4,0),t.add(_)}for(const x of[-1,1]){const _=new st(new ut(170,2.4,15),c);_.position.set(x*(d/2+82),f/2+.5,0),_.rotation.z=-x*.112,t.add(_)}const m=[Zi(-90,0,30,1.5),Zi(120,40,26,1.5)],p=Gu(t,m);function y(x){p(x),g.forEach((_,A)=>{const T=x<=[0,34,-1,67][A];_.position.y=T?-f+2:0,_.rotation.z=T?A%2?.12:-.12:0})}return{group:t,setHealth:y}}function bv(n){const e=zu(),t=hv(e),i=pv(),r=mv();n.add(i,r);const s=new en;n.add(s);const o=gv(s);_v(s,e),vv(s,o,t);const a=xv(n),l=Mv(n),c=Sv(n,o.river);let h=0;return{sky:i,water:r,clouds:a,mountains:e,terrainHeight:t,assets:{airfield:l,bridge:c},reset(){l.setHealth(100),c.setHealth(100)},update(u,f){r.material.uniforms.time.value=f,a.position.x=f*6%400,h+=u,l.flag.rotation.y=Math.sin(h*2.2)*.22}}}const Pt=n=>document.getElementById(n),As=n=>String(n).padStart(2,"0");function Er(n,e=""){const t=document.createElement("span");return t.className=`chip ${e}`,t.textContent=n,t}function Ev(n){const e=new Set;for(const t of n.stages)for(const i of[...t.spawn??[],...(t.waves??[]).flat()])e.add(i.type);return[...e]}function Tv({progress:n,onStart:e}){let t=Ht[0],i="easy";try{i=localStorage.getItem("en-bac-level")==="normal"?"normal":"easy"}catch{}const r=()=>Ht.find(u=>!n.done.includes(u.id))??Ht.at(-1);function s(){const u=Pt("mission-list");u.replaceChildren(),Ht.forEach((f,d)=>{const g=Tc(n,d),v=n.done.includes(f.id),m=document.createElement("li"),p=document.createElement("button");p.type="button",p.className="mission-row",p.classList.toggle("is-selected",f===t),p.classList.toggle("is-locked",!g),p.classList.toggle("is-done",v),p.setAttribute("aria-current",String(f===t)),p.innerHTML=`<span class="mission-number">${As(f.number)}</span><span class="mission-name"><b></b><small></small></span><span class="mission-state" aria-hidden="true">${v?"✓":g?"→":"🔒"}</span>`,p.querySelector("b").textContent=f.title,p.querySelector("small").textContent=f.date,p.setAttribute("aria-label",`Màn ${f.number}: ${f.title}${v?", đã hoàn thành":g?"":", chưa mở"}`),p.addEventListener("click",()=>c(f)),m.append(p),u.append(m)})}function o(){const u=Ht.indexOf(t),f=Tc(n,u);Pt("detail-number").textContent=As(t.number),Pt("detail-date").textContent=t.date,Pt("detail-place").textContent=t.place,Pt("detail-title").textContent=t.title,Pt("detail-brief").textContent=t.brief;const d=Pt("detail-objectives");d.replaceChildren();for(const v of t.stages){const m=document.createElement("li");m.textContent=v.label,d.append(m)}const g=Pt("detail-chips");g.replaceChildren(Er("PHÁO")),t.loadout.missiles?g.append(Er(`TÊN LỬA ×${t.loadout.missiles}`)):g.append(Er("KHÔNG TÊN LỬA","is-off")),t.loadout.flares&&g.append(Er(`MỒI BẪY ×${t.loadout.flares}`));for(const v of Ev(t))g.append(Er(Du[v].name,"is-enemy"));Pt("start").disabled=!f,Pt("detail-locked").hidden=f}function a(){const u=r(),f=n.done.length===Ht.length;Pt("continue-kicker").textContent=f?"ĐÃ HOÀN THÀNH · BAY LẠI":`CHIẾN DỊCH · MÀN ${As(u.number)}/${As(Ht.length)}`,Pt("continue-title").textContent=u.title}function l(){for(const u of Pt("ai-level").querySelectorAll("button"))u.setAttribute("aria-checked",String(u.dataset.level===i))}function c(u,f=!1){t=u,s(),o(),f&&Pt("campaign").scrollIntoView({behavior:"smooth",block:"start"})}for(const u of Pt("ai-level").querySelectorAll("button"))u.addEventListener("click",()=>{i=u.dataset.level,l();try{localStorage.setItem("en-bac-level",i)}catch{}});Pt("start").addEventListener("click",()=>e(t,i)),Pt("continue").addEventListener("click",()=>e(r(),i)),Pt("free-flight").addEventListener("click",()=>e(S_,i));function h(){t=r(),s(),o(),a(),l()}return h(),{refresh:h,select:u=>{const f=Ht.find(d=>d.id===u);f&&c(f,!0)},level:()=>i}}const wv=Object.freeze([{id:1,label:"Wikipedia tiếng Việt — Nguyễn Văn Bảy (A)",url:"https://vi.wikipedia.org/wiki/Nguyễn_Văn_Bảy_(A)"},{id:2,label:"Wikipedia tiếng Anh — Nguyễn Văn Bảy",url:"https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_V%C4%83n_B%E1%BA%A3y"},{id:3,label:"Báo Quân đội nhân dân — Người phi công anh hùng từng sợ máy bay",url:"https://ct.qdnd.vn/chan-dung-nguoi-linh/nguoi-phi-cong-anh-hung-tung-so-may-bay-512788"},{id:4,label:"Báo Quân đội nhân dân — Hai lần gặp Anh hùng “Bảy lúa”",url:"https://sknc.qdnd.vn/nhan-vat/hai-lan-gap-anh-hung-bay-lua-501641"},{id:5,label:"Báo Nhân Dân — Phi công huyền thoại Nguyễn Văn Bảy qua đời",url:"https://nhandan.vn/post-371726.html"},{id:6,label:"Znews — Chuyện chưa kể về phi công huyền thoại bắn rơi 7 máy bay Mỹ",url:"https://znews.vn/chuyen-chua-ke-ve-phi-cong-huyen-thoai-ban-roi-7-may-bay-my-post1547403.html"}]),Av=Object.freeze([{year:"1936",title:"Người con thứ bảy",place:"Lai Vung · Đồng Tháp",sources:[1,3],text:"Sinh ngày 2 tháng 2 trong một gia đình nông dân miền Tây. Tên khai sinh là Nguyễn Văn Hoa; vì là con thứ bảy nên cả đời được gọi là Bảy."},{year:"1954",title:"Ra Bắc",place:"Tập kết",sources:[1,3],text:"Mười bảy tuổi theo du kích, rồi tập kết ra Bắc. Khi ấy ông mới học hết lớp ba."},{year:"1960 – 1965",title:"Từ lớp ba đến buồng lái",place:"Trường bay",sources:[1,2,3],mission:"hoc-bay",text:"Được chọn học lái máy bay, ông học bù bảy lớp văn hóa trong thời gian rất ngắn. Lên buồng lái là nôn vì rối loạn tiền đình, ông tự rèn cho đến khi bay được phản lực MiG-17."},{year:"10 / 1965",title:"Hơn tám mươi lỗ thủng",place:"Trận đầu",sources:[2,3],mission:"tam-muoi-lo-thung",text:"Trận đầu tiên, máy bay của ông trúng đạn, thân thủng hơn tám mươi lỗ. Ông vẫn đưa nó về và hạ cánh an toàn."},{year:"1966",title:"Những chiến công đầu",place:"Trung đoàn 923",sources:[2,3],mission:"chien-cong-dau",text:"Bay MiG-17 chỉ có pháo, ông áp sát mới nổ súng. Mùa hè 1966 ghi những chiến công đầu; ngày 5 tháng 9 trên bầu trời Phủ Lý, ông cùng đồng đội Võ Văn Mẫn hạ hai máy bay."},{year:"01 / 1967",title:"Anh hùng",place:"Hà Nội",sources:[1,2,3],mission:"chan-than-sam",text:"Ngày 1 tháng 1 năm 1967, ông được phong Anh hùng Lực lượng vũ trang nhân dân, một trong ba phi công đầu tiên. Bác Hồ tặng ông bảy huy hiệu và một chiếc đồng hồ."},{year:"04 / 1967",title:"Giữ trời Kiến An",place:"Hải Phòng",sources:[1,2],mission:"giu-kien-an",text:"Cuối tháng 4, ông đánh liên tiếp nhiều trận bảo vệ vùng trời Hải Phòng. Tổng cộng 94 lần xuất kích, 13 lần nổ súng, bảy máy bay bị bắn rơi. Ông chưa một lần bị bắn rơi."},{year:"Sau 1967",title:"Người thầy",place:"Quân chủng Không quân",sources:[1,2,3],mission:"tro-ve",text:"Ông được giữ lại mặt đất để truyền nghề cho lớp phi công sau, rồi làm chỉ huy đến hàm đại tá, Phó Tham mưu trưởng Quân chủng."},{year:"1990",title:"Bảy Lúa",place:"Lai Vung · Đồng Tháp",sources:[1,3,4],text:"Nghỉ hưu, ông về quê làm ruộng, đào ao, trồng cây. Bà con gọi ông là Bảy Lúa."},{year:"2019",title:"Cánh chim bất tử",place:"TP. Hồ Chí Minh",sources:[1,5,6],text:"Ông mất ngày 22 tháng 9 năm 2019, sau cơn đột quỵ khi đang làm vườn, và yên nghỉ tại quê nhà Lai Vung."}]),Xo="http://www.w3.org/2000/svg",Rv="M50 2 55 30 92 52 92 60 56 52 54 78 66 88 66 94 50 90 34 94 34 88 46 78 44 52 8 60 8 52 45 30z";function sn(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Cv(n,e){if(!n.length)return"";let t=`M${n[0].x} ${n[0].y}`;for(let i=1;i<n.length;i++){const r=n[i-1],s=n[i],o=(i%2?1:-1)*e,a=(r.y+s.y)/2;t+=` C${r.x+o} ${a} ${s.x+o} ${a} ${s.x} ${s.y}`}return t}function Pv({scroller:n,onMission:e}){const t=document.getElementById("timeline"),i=document.createElementNS(Xo,"svg");i.setAttribute("class","timeline-path"),i.setAttribute("aria-hidden","true");const r=document.createElementNS(Xo,"path");r.setAttribute("class","path-track");const s=document.createElementNS(Xo,"path");s.setAttribute("class","path-trail"),i.append(r,s);const o=sn("div","timeline-plane");o.setAttribute("aria-hidden","true"),o.innerHTML=`<svg viewBox="0 0 100 100"><path d="${Rv}"/></svg>`,t.append(i,o);const a=Av.map((g,v)=>{const m=sn("article",`milestone ${v%2?"is-right":"is-left"}`),p=sn("span","milestone-dot");p.setAttribute("aria-hidden","true");const y=sn("div","milestone-card");y.append(sn("p","milestone-year",g.year),sn("h3","",g.title),sn("small","milestone-place",g.place));const x=sn("p","milestone-text",g.text);for(const A of g.sources){const T=sn("a","ref",`[${A}]`);T.href=`#source-${A}`,x.append(" ",T)}y.append(x);const _=Ht.find(A=>A.id===g.mission);if(_){const A=sn("button","milestone-mission",`BAY MÀN ${String(_.number).padStart(2,"0")} · ${_.title.toUpperCase()} →`);A.type="button",A.addEventListener("click",()=>e(_.id)),y.append(A)}return m.append(p,y),t.append(m),{item:m,dot:p,length:0}}),l=document.getElementById("source-list");for(const g of wv){const v=sn("li");v.id=`source-${g.id}`;const m=sn("a","",g.label);m.href=g.url,m.target="_blank",m.rel="noreferrer",v.append(m),l.append(v)}let c=0,h=0;function u(){const g=t.getBoundingClientRect(),v=a.map(({dot:x})=>{const _=x.getBoundingClientRect();return{x:_.left+_.width/2-g.left,y:_.top+_.height/2-g.top}});i.setAttribute("viewBox",`0 0 ${g.width} ${g.height}`),i.setAttribute("width",g.width),i.setAttribute("height",g.height);const m=matchMedia("(max-width: 760px)").matches?18:64,p=Cv([{x:v[0].x,y:0},...v,{x:v.at(-1).x,y:g.height}],m);r.setAttribute("d",p),s.setAttribute("d",p),c=r.getTotalLength(),s.style.strokeDasharray=`${c}`;let y=0;for(let x=0,_=0;x<=c&&_<a.length;x+=6)r.getPointAtLength(x).y>=v[_].y&&(a[_].length=x,_++,y=x);for(const x of a)x.length||(x.length=y);f()}function f(){if(h=0,!c)return;const g=t.getBoundingClientRect(),v=n.getBoundingClientRect(),m=Math.max(0,Math.min(g.height,v.top+v.height*.42-g.top));let p=0,y=c;for(let T=0;T<18;T++){const R=(p+y)/2;r.getPointAtLength(R).y<m?p=R:y=R}const x=r.getPointAtLength(p),_=r.getPointAtLength(Math.min(c,p+4)),A=Math.atan2(_.y-x.y,_.x-x.x)*180/Math.PI+90;o.style.transform=`translate(${x.x}px, ${x.y}px) translate(-50%, -50%) rotate(${A}deg)`,o.classList.toggle("is-flying",m>0&&m<g.height),s.style.strokeDashoffset=`${c-p}`;for(const T of a)T.item.classList.toggle("is-passed",p+30>=T.length)}const d=()=>{h||=requestAnimationFrame(f)};return n.addEventListener("scroll",d,{passive:!0}),new ResizeObserver(u).observe(t),document.fonts?.ready.then(u),u(),{layout:u}}J0();const ll=n=>document.getElementById(n),Ti=new ou;Ti.background=new Qe("#889fa5");Ti.fog=new Ja("#a3b1ad",95e-6);const Lv=new Yt(53,innerWidth/innerHeight,1,35e3);let kn;try{kn=new Z0({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0})}catch{throw ll("top").innerHTML="<h1>KHÔNG THỂ MỞ 3D</h1><p>Hãy bật tăng tốc đồ họa trong trình duyệt rồi tải lại trang.</p>",new Error("WebGL unavailable")}kn.setPixelRatio(Math.min(devicePixelRatio,1.8));kn.setSize(innerWidth,innerHeight);kn.outputColorSpace=Lt;kn.toneMapping=kc;kn.toneMappingExposure=1.15;kn.autoClear=!1;ll("viewport").appendChild(kn.domElement);Ti.add(new yu("#d0e6ef","#4a5440",2.3));const Vu=new Su("#ffd1a2",3.2);Vu.position.set(-2500,2800,-7e3);Ti.add(Vu);const Iv=bv(Ti),Wu=ol();Ti.add(Wu);const Xu=P_(globalThis.localStorage),Xs=ll("home"),qu=cv({scene:Ti,camera:Lv,renderer:kn,player:Wu,environment:Iv,onExit(){$u.refresh(),Xs.scrollTo({top:0})},onComplete(n){L_(Xu,n,globalThis.localStorage)}}),$u=Tv({progress:Xu,onStart:(n,e)=>qu.start(n,e)});Pv({scroller:Xs,onMission:n=>$u.select(n)});for(const n of document.querySelectorAll('a[href^="#"]'))n.addEventListener("click",e=>{const t=document.getElementById(n.getAttribute("href").slice(1));!t||qu.state()!=="home"||(e.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"}))});Xs.addEventListener("scroll",()=>document.body.classList.toggle("scrolled",Xs.scrollTop>40),{passive:!0});
