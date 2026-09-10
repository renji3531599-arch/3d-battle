(()=>{var cc=0,Ho=1,uc=2;var gh=1,yo=2,mi=3,Ni=0,Ie=1,Be=2;var Li=0,Pi=1,Ln=2,Vo=3,Go=4,dc=5,qi=100,fc=101,pc=102,Wo=103,Xo=104,mc=200,gc=201,_c=202,xc=203,Ta=204,Aa=205,yc=206,vc=207,Mc=208,bc=209,Sc=210,Ec=211,wc=212,Tc=213,Ac=214,Rc=0,Cc=1,Lc=2,js=3,Pc=4,Ic=5,Dc=6,Uc=7,_h=0,Nc=1,kc=2,Ii=0,Oc=1,Fc=2,Bc=3,vo=4,zc=5,Hc=6;var xh=300,Pn=301,In=302,Ra=303,Ca=304,Cr=306,cs=1e3,ti=1001,La=1002,Fe=1003,qo=1004;var Gr=1005;var Ye=1006,Vc=1007;var us=1008;var Di=1009,Gc=1010,Wc=1011,Mo=1012,yh=1013,Ri=1014,Ci=1015,ds=1016,vh=1017,Mh=1018,Ji=1020,Xc=1021,ei=1023,qc=1024,Yc=1025,$i=1026,Dn=1027,Zc=1028,bh=1029,Jc=1030,Sh=1031,Eh=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Yo=35840,Zo=35841,Jo=35842,$o=35843,wh=36196,Ko=37492,jo=37496,Qo=37808,tl=37809,el=37810,il=37811,nl=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,hl=37818,cl=37819,ul=37820,dl=37821,Zr=36492,fl=36494,pl=36495,$c=36283,ml=36284,gl=36285,_l=36286;var Qs=2300,tr=2301,Jr=2302,xl=2400,yl=2401,vl=2402;var Th=3e3,Ki=3001,Kc=3200,jc=3201,Ah=0,Qc=1,Ze="",we="srgb",yi="srgb-linear",bo="display-p3",Lr="display-p3-linear",er="linear",ne="srgb",ir="rec709",nr="p3";var an=7680;var Ml=519,tu=512,eu=513,iu=514,Rh=515,nu=516,su=517,ru=518,au=519,Pa=35044;var bl="300 es",Ia=1035,xi=2e3,sr=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $r=Math.PI/180,Da=180/Math.PI;function Ui(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function ou(s,t){return(s%t+t)%t}function Kr(s,t,e){return(1-e)*s+e*t}function Sl(s){return(s&s-1)===0&&s!==0}function Ua(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,i,n,r,o,a,h,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,h,l)}set(t,e,i,n,r,o,a,h,l){let c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=r,c[5]=h,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],c=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=n[0],p=n[3],d=n[6],M=n[1],x=n[4],w=n[7],P=n[2],A=n[5],R=n[8];return r[0]=o*_+a*M+h*P,r[3]=o*p+a*x+h*A,r[6]=o*d+a*w+h*R,r[1]=l*_+c*M+u*P,r[4]=l*p+c*x+u*A,r[7]=l*d+c*w+u*R,r[2]=f*_+m*M+g*P,r[5]=f*p+m*x+g*A,r[8]=f*d+m*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-i*r*c+i*a*h+n*r*l-n*o*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,f=a*h-c*r,m=l*r-o*h,g=e*u+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(n*l-c*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(c*e-n*h)*_,t[5]=(n*r-a*e)*_,t[6]=m*_,t[7]=(i*h-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-n*l,n*h,-n*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jr=new Wt;function Ch(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lu(){let s=rr("canvas");return s.style.display="block",s}var El={};function as(s){s in El||(El[s]=!0,console.warn(s))}var wl=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[yi]:{transfer:er,primaries:ir,toReference:s=>s,fromReference:s=>s},[we]:{transfer:ne,primaries:ir,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Lr]:{transfer:er,primaries:nr,toReference:s=>s.applyMatrix3(Tl),fromReference:s=>s.applyMatrix3(wl)},[bo]:{transfer:ne,primaries:nr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Tl),fromReference:s=>s.applyMatrix3(wl).convertLinearToSRGB()}},hu=new Set([yi,Lr]),Jt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Ss[t].toReference,n=Ss[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ss[s].primaries},getTransfer:function(s){return s===Ze?er:Ss[s].transfer}};function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var on,ar=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{on===void 0&&(on=rr("canvas")),on.width=t.width,on.height=t.height;let i=on.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=on}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rn(e[i]/255)*255):e[i]=Rn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cu=0,or=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ta(n[o].image)):r.push(ta(n[o]))}else r=ta(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ar.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,Je=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ti,n=ti,r=Ye,o=us,a=ei,h=Di,l=s.DEFAULT_ANISOTROPY,c=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ui(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ki?we:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?Ki:Th}set encoding(t){as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ki?we:Ze}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=xh;Je.DEFAULT_ANISOTROPY=1;var ae=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],m=h[5],g=h[9],_=h[2],p=h[6],d=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,w=(m+1)/2,P=(d+1)/2,A=(c+f)/4,R=(u+_)/4,V=(g+p)/4;return x>w&&x>P?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):w>P?w<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(w),i=A/n,r=V/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=R/r,n=V/r),this.set(i,n,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-c)/M,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends ki{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(as("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?we:Ze),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Je(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new or(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Na{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},lr=class extends Je{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class extends Je{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==f||l!==m||c!==g){let p=1-a,d=h*f+l*m+c*g+u*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),A=Math.atan2(P,d*M);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}let w=a*M;if(h=h*p+f*w,l=l*p+m*w,c=c*p+g*w,u=u*p+_*w,p===1-a){let P=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=P,l*=P,c*=P,u*=P}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+c*u+h*m-l*f,t[e+1]=h*g+c*f+l*u-a*m,t[e+2]=l*g+c*m+a*f-h*u,t[e+3]=c*g-a*u-h*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),c=a(n/2),u=a(r/2),f=h(i/2),m=h(n/2),g=h(r/2);switch(o){case"XYZ":this._x=f*c*u+l*m*g,this._y=l*m*u-f*c*g,this._z=l*c*g+f*m*u,this._w=l*c*u-f*m*g;break;case"YXZ":this._x=f*c*u+l*m*g,this._y=l*m*u-f*c*g,this._z=l*c*g-f*m*u,this._w=l*c*u+f*m*g;break;case"ZXY":this._x=f*c*u-l*m*g,this._y=l*m*u+f*c*g,this._z=l*c*g+f*m*u,this._w=l*c*u-f*m*g;break;case"ZYX":this._x=f*c*u-l*m*g,this._y=l*m*u+f*c*g,this._z=l*c*g-f*m*u,this._w=l*c*u+f*m*g;break;case"YZX":this._x=f*c*u+l*m*g,this._y=l*m*u+f*c*g,this._z=l*c*g-f*m*u,this._w=l*c*u-f*m*g;break;case"XZY":this._x=f*c*u-l*m*g,this._y=l*m*u-f*c*g,this._z=l*c*g+f*m*u,this._w=l*c*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(r-l)*m,this._z=(o-n)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(c-h)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-l)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(h+c)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-n)/m,this._x=(r+l)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+o*a+n*l-r*h,this._y=n*c+o*h+r*a-i*l,this._z=r*c+o*l+i*h-n*a,this._w=o*c-i*a-n*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let h=1-a*a;if(h<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*n-a*i),c=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+h*l+o*u-a*c,this.y=i+h*c+a*l-r*u,this.z=n+h*u+r*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=n*h-r*a,this.y=r*o-i*h,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new T,Al=new ai,ji=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jn),ws.subVectors(this.max,jn),ln.subVectors(t.a,jn),hn.subVectors(t.b,jn),cn.subVectors(t.c,jn),Si.subVectors(hn,ln),Ei.subVectors(cn,hn),Hi.subVectors(ln,cn);let e=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Hi.z,Hi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Hi.z,0,-Hi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Hi.y,Hi.x,0];return!ia(e,ln,hn,cn,ws)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,ln,hn,cn,ws))?!1:(Ts.crossVectors(Si,Ei),e=[Ts.x,Ts.y,Ts.z],ia(e,ln,hn,cn,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new T,new T,new T,new T,new T,new T,new T,new T],Ke=new T,Es=new ji,ln=new T,hn=new T,cn=new T,Si=new T,Ei=new T,Hi=new T,jn=new T,ws=new T,Ts=new T,Vi=new T;function ia(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);let a=n.x*Math.abs(Vi.x)+n.y*Math.abs(Vi.y)+n.z*Math.abs(Vi.z),h=t.dot(Vi),l=e.dot(Vi),c=i.dot(Vi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}var du=new ji,Qn=new T,na=new T,Un=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):du.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qn.subVectors(t,this.center);let e=Qn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Qn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qn.copy(t.center).add(na)),this.expandByPoint(Qn.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new T,sa=new T,As=new T,wi=new T,ra=new T,Rs=new T,aa=new T,hr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){sa.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=wi.dot(this.direction),h=-wi.dot(As),l=wi.lengthSq(),c=Math.abs(1-o*o),u,f,m,g;if(c>0)if(u=o*h-a,f=o*a-h,g=r*c,u>=0)if(f>=-g)if(f<=g){let _=1/c;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*h)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-h),r),m=-u*u+f*(f+2*h)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-h),r),m=f*(f+2*h)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-h),r),m=-u*u+f*(f+2*h)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(sa).addScaledVector(As,f),m}intersectSphere(t,e){ui.subVectors(t.center,this.origin);let i=ui.dot(this.direction),n=ui.dot(ui)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,h,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,n=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,n=(t.min.x-f.x)*l),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),i>h||a>n)||((a>i||i!==i)&&(i=a),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,n,r){ra.subVectors(e,t),Rs.subVectors(i,t),aa.crossVectors(ra,Rs);let o=this.direction.dot(aa),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let h=a*this.direction.dot(Rs.crossVectors(wi,Rs));if(h<0)return null;let l=a*this.direction.dot(ra.cross(wi));if(l<0||h+l>o)return null;let c=-a*wi.dot(aa);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(t,e,i,n,r,o,a,h,l,c,u,f,m,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,h,l,c,u,f,m,g,_,p)}set(t,e,i,n,r,o,a,h,l,c,u,f,m,g,_,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=r,d[5]=o,d[9]=a,d[13]=h,d[2]=l,d[6]=c,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/un.setFromMatrixColumn(t,0).length(),r=1/un.setFromMatrixColumn(t,1).length(),o=1/un.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*c,m=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*h,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*h}else if(t.order==="YXZ"){let f=h*c,m=h*u,g=l*c,_=l*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*h}else if(t.order==="ZXY"){let f=h*c,m=h*u,g=l*c,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let f=o*c,m=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=g*l-m,e[8]=f*l+_,e[1]=h*u,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let f=o*h,m=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*h,m=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+_,e[5]=o*c,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,pu)}lookAt(t,e,i){let n=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Ti.crossVectors(i,Ge),Ti.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Ti.crossVectors(i,Ge)),Ti.normalize(),Cs.crossVectors(Ge,Ti),n[0]=Ti.x,n[4]=Cs.x,n[8]=Ge.x,n[1]=Ti.y,n[5]=Cs.y,n[9]=Ge.y,n[2]=Ti.z,n[6]=Cs.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],c=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],x=i[7],w=i[11],P=i[15],A=n[0],R=n[4],V=n[8],v=n[12],E=n[1],F=n[5],W=n[9],it=n[13],L=n[2],U=n[6],H=n[10],q=n[14],X=n[3],G=n[7],J=n[11],Q=n[15];return r[0]=o*A+a*E+h*L+l*X,r[4]=o*R+a*F+h*U+l*G,r[8]=o*V+a*W+h*H+l*J,r[12]=o*v+a*it+h*q+l*Q,r[1]=c*A+u*E+f*L+m*X,r[5]=c*R+u*F+f*U+m*G,r[9]=c*V+u*W+f*H+m*J,r[13]=c*v+u*it+f*q+m*Q,r[2]=g*A+_*E+p*L+d*X,r[6]=g*R+_*F+p*U+d*G,r[10]=g*V+_*W+p*H+d*J,r[14]=g*v+_*it+p*q+d*Q,r[3]=M*A+x*E+w*L+P*X,r[7]=M*R+x*F+w*U+P*G,r[11]=M*V+x*W+w*H+P*J,r[15]=M*v+x*it+w*q+P*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*h*u-n*l*u-r*a*f+i*l*f+n*a*m-i*h*m)+_*(+e*h*m-e*l*f+r*o*f-n*o*m+n*l*c-r*h*c)+p*(+e*l*u-e*a*m-r*o*u+i*o*m+r*a*c-i*l*c)+d*(-n*a*c-e*h*u+e*a*f+n*o*u-i*o*f+i*h*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],M=u*p*l-_*f*l+_*h*m-a*p*m-u*h*d+a*f*d,x=g*f*l-c*p*l-g*h*m+o*p*m+c*h*d-o*f*d,w=c*_*l-g*u*l+g*a*m-o*_*m-c*a*d+o*u*d,P=g*u*h-c*_*h-g*a*f+o*_*f+c*a*p-o*u*p,A=e*M+i*x+n*w+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=M*R,t[1]=(_*f*r-u*p*r-_*n*m+i*p*m+u*n*d-i*f*d)*R,t[2]=(a*p*r-_*h*r+_*n*l-i*p*l-a*n*d+i*h*d)*R,t[3]=(u*h*r-a*f*r-u*n*l+i*f*l+a*n*m-i*h*m)*R,t[4]=x*R,t[5]=(c*p*r-g*f*r+g*n*m-e*p*m-c*n*d+e*f*d)*R,t[6]=(g*h*r-o*p*r-g*n*l+e*p*l+o*n*d-e*h*d)*R,t[7]=(o*f*r-c*h*r+c*n*l-e*f*l-o*n*m+e*h*m)*R,t[8]=w*R,t[9]=(g*u*r-c*_*r-g*i*m+e*_*m+c*i*d-e*u*d)*R,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*d+e*a*d)*R,t[11]=(c*a*r-o*u*r-c*i*l+e*u*l+o*i*m-e*a*m)*R,t[12]=P*R,t[13]=(c*_*n-g*u*n+g*i*f-e*_*f-c*i*p+e*u*p)*R,t[14]=(g*a*n-o*_*n-g*i*h+e*_*h+o*i*p-e*a*p)*R,t[15]=(o*u*n-c*a*n+c*i*h-e*u*h-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,h=t.z,l=r*o,c=r*a;return this.set(l*o+i,l*a-n*h,l*h+n*a,0,l*a+n*h,c*a+i,c*h-n*o,0,l*h-n*a,c*h+n*o,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,c=o+o,u=a+a,f=r*l,m=r*c,g=r*u,_=o*c,p=o*u,d=a*u,M=h*l,x=h*c,w=h*u,P=i.x,A=i.y,R=i.z;return n[0]=(1-(_+d))*P,n[1]=(m+w)*P,n[2]=(g-x)*P,n[3]=0,n[4]=(m-w)*A,n[5]=(1-(f+d))*A,n[6]=(p+M)*A,n[7]=0,n[8]=(g+x)*R,n[9]=(p-M)*R,n[10]=(1-(f+_))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=un.set(n[0],n[1],n[2]).length(),o=un.set(n[4],n[5],n[6]).length(),a=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],je.copy(this);let l=1/r,c=1/o,u=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=c,je.elements[5]*=c,je.elements[6]*=c,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=xi){let h=this.elements,l=2*r/(e-t),c=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),m,g;if(a===xi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=xi){let h=this.elements,l=1/(e-t),c=1/(i-n),u=1/(o-r),f=(e+t)*l,m=(i+n)*c,g,_;if(a===xi)g=(o+r)*u,_=-2*u;else if(a===sr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-m,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},un=new T,je=new oe,fu=new T(0,0,0),pu=new T(1,1,1),Ti=new T,Cs=new T,Ge=new T,Rl=new oe,Cl=new ai,Nn=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],h=n[1],l=n[5],c=n[9],u=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mu=0,Ll=new T,dn=new ai,di=new oe,Ls=new T,ts=new T,gu=new T,_u=new ai,Pl=new T(1,0,0),Il=new T(0,1,0),Dl=new T(0,0,1),xu={type:"added"},yu={type:"removed"},Ae=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new Nn,i=new ai,n=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new oe},normalMatrix:{value:new Wt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.premultiply(dn),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ls.copy(t):Ls.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ts,Ls,this.up):di.lookAt(Ls,ts,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(di),this.quaternion.premultiply(dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++){let a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){let u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];n.animations.push(r(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let h=[];for(let l in a){let c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ae.DEFAULT_UP=new T(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new T,fi=new T,oa=new T,pi=new T,fn=new T,pn=new T,Ul=new T,la=new T,ha=new T,ca=new T,Ps=!1,Zi=class s{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Qe.subVectors(t,e),n.cross(Qe);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Qe.subVectors(n,e),fi.subVectors(i,e),oa.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(fi),h=Qe.dot(oa),l=fi.dot(fi),c=fi.dot(oa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*h-a*c)*f,g=(o*c-a*h)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(t,e,i,n,r,o,a,h){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(t,e,i,n,r,o,a,h)}static getInterpolation(t,e,i,n,r,o,a,h){return this.getBarycoord(t,e,i,n,pi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,pi.x),h.addScaledVector(o,pi.y),h.addScaledVector(a,pi.z),h)}static isFrontFacing(t,e,i,n){return Qe.subVectors(i,e),fi.subVectors(t,e),Qe.cross(fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Qe.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;fn.subVectors(n,i),pn.subVectors(r,i),la.subVectors(t,i);let h=fn.dot(la),l=pn.dot(la);if(h<=0&&l<=0)return e.copy(i);ha.subVectors(t,n);let c=fn.dot(ha),u=pn.dot(ha);if(c>=0&&u<=c)return e.copy(n);let f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(i).addScaledVector(fn,o);ca.subVectors(t,r);let m=fn.dot(ca),g=pn.dot(ca);if(g>=0&&m<=g)return e.copy(r);let _=m*l-h*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(pn,a);let p=c*g-m*u;if(p<=0&&u-c>=0&&m-g>=0)return Ul.subVectors(r,n),a=(u-c)/(u-c+(m-g)),e.copy(n).addScaledVector(Ul,a);let d=1/(p+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(fn,o).addScaledVector(pn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Is={h:0,s:0,l:0};function ua(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Jt.workingColorSpace){if(t=ou(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,n),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let i=Lh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Te(Le.r*255,0,255))*65536+Math.round(Te(Le.g*255,0,255))*256+Math.round(Te(Le.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Le.copy(this),e);let i=Le.r,n=Le.g,r=Le.b,o=Math.max(i,n,r),a=Math.min(i,n,r),h,l,c=(a+o)/2;if(a===o)h=0,l=0;else{let u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case i:h=(n-r)/u+(n<r?6:0);break;case n:h=(r-i)/u+2;break;case r:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=we){Jt.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,n=Le.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Is);let i=Kr(Ai.h,Is.h,e),n=Kr(Ai.s,Is.s,e),r=Kr(Ai.l,Is.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Lt;Lt.NAMES=Lh;var vu=0,Mi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Pi,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=an,this.stencilZFail=an,this.stencilZPass=an,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ta&&(i.blendSrc=this.blendSrc),this.blendDst!==Aa&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==an&&(i.stencilFail=this.stencilFail),this.stencilZFail!==an&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==an&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ze=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new T,Ds=new ct,De=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}};var ur=class extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var dr=class extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Mu=0,qe=new oe,da=new Ae,mn=new T,We=new ji,es=new ji,Me=new T,be=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?dr:ur)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(We.min,es.min),We.expandByPoint(Me),Me.addVectors(We.max,es.max),We.expandByPoint(Me)):(We.expandByPoint(es.min),We.expandByPoint(es.max))}We.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Me.fromBufferAttribute(a,l),h&&(mn.fromBufferAttribute(t,l),Me.add(mn)),n=Math.max(n,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*a),4));let h=this.getAttribute("tangent").array,l=[],c=[];for(let E=0;E<a;E++)l[E]=new T,c[E]=new T;let u=new T,f=new T,m=new T,g=new ct,_=new ct,p=new ct,d=new T,M=new T;function x(E,F,W){u.fromArray(n,E*3),f.fromArray(n,F*3),m.fromArray(n,W*3),g.fromArray(o,E*2),_.fromArray(o,F*2),p.fromArray(o,W*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);let it=1/(_.x*p.y-p.x*_.y);isFinite(it)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(it),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(it),l[E].add(d),l[F].add(d),l[W].add(d),c[E].add(M),c[F].add(M),c[W].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let E=0,F=w.length;E<F;++E){let W=w[E],it=W.start,L=W.count;for(let U=it,H=it+L;U<H;U+=3)x(i[U+0],i[U+1],i[U+2])}let P=new T,A=new T,R=new T,V=new T;function v(E){R.fromArray(r,E*3),V.copy(R);let F=l[E];P.copy(F),P.sub(R.multiplyScalar(R.dot(F))).normalize(),A.crossVectors(V,F);let it=A.dot(c[E])<0?-1:1;h[E*4]=P.x,h[E*4+1]=P.y,h[E*4+2]=P.z,h[E*4+3]=it}for(let E=0,F=w.length;E<F;++E){let W=w[E],it=W.start,L=W.count;for(let U=it,H=it+L;U<H;U+=3)v(i[U+0]),v(i[U+1]),v(i[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let n=new T,r=new T,o=new T,a=new T,h=new T,l=new T,c=new T,u=new T;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(c),h.add(c),l.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,h){let l=a.array,c=a.itemSize,u=a.normalized,f=new l.constructor(h.length*c),m=0,g=0;for(let _=0,p=h.length;_<p;_++){a.isInterleavedBufferAttribute?m=h[_]*a.data.stride+a.offset:m=h[_]*c;for(let d=0;d<c;d++)f[g++]=l[m++]}return new De(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let h=n[a],l=t(h,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let h=[],l=r[a];for(let c=0,u=l.length;c<u;c++){let f=l[c],m=t(f,i);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let l=i[h];t.data.attributes[h]=l.toJSON(t.data)}let n={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];c.push(m.toJSON(t.data))}c.length>0&&(n[h]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(e))}let r=t.morphAttributes;for(let l in r){let c=[],u=r[l];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,c=o.length;l<c;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nl=new oe,Gi=new hr,Us=new Un,kl=new T,gn=new T,_n=new T,xn=new T,fa=new T,Ns=new T,ks=new ct,Os=new ct,Fs=new ct,Ol=new T,Fl=new T,Bl=new T,Bs=new T,zs=new T,Nt=class extends Ae{constructor(t=new be,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Ns.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let c=a[h],u=r[h];c!==0&&(fa.fromBufferAttribute(u,t),o?Ns.addScaledVector(fa,c):Ns.addScaledVector(fa.sub(e),c))}e.add(Ns)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Us.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Us,kl)===null||Gi.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,P=x;w<P;w+=3){let A=a.getX(w),R=a.getX(w+1),V=a.getX(w+2);n=Hs(this,d,t,i,l,c,u,A,R,V),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let M=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);n=Hs(this,o,t,i,l,c,u,M,x,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(h.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,P=x;w<P;w+=3){let A=w,R=w+1,V=w+2;n=Hs(this,d,t,i,l,c,u,A,R,V),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,m.start),_=Math.min(h.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let M=p,x=p+1,w=p+2;n=Hs(this,o,t,i,l,c,u,M,x,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function bu(s,t,e,i,n,r,o,a){let h;if(t.side===Ie?h=i.intersectTriangle(o,r,n,!0,a):h=i.intersectTriangle(n,r,o,t.side===Ni,a),h===null)return null;zs.copy(a),zs.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:s}}function Hs(s,t,e,i,n,r,o,a,h,l){s.getVertexPosition(a,gn),s.getVertexPosition(h,_n),s.getVertexPosition(l,xn);let c=bu(s,t,e,i,gn,_n,xn,Bs);if(c){n&&(ks.fromBufferAttribute(n,a),Os.fromBufferAttribute(n,h),Fs.fromBufferAttribute(n,l),c.uv=Zi.getInterpolation(Bs,gn,_n,xn,ks,Os,Fs,new ct)),r&&(ks.fromBufferAttribute(r,a),Os.fromBufferAttribute(r,h),Fs.fromBufferAttribute(r,l),c.uv1=Zi.getInterpolation(Bs,gn,_n,xn,ks,Os,Fs,new ct),c.uv2=c.uv1),o&&(Ol.fromBufferAttribute(o,a),Fl.fromBufferAttribute(o,h),Bl.fromBufferAttribute(o,l),c.normal=Zi.getInterpolation(Bs,gn,_n,xn,Ol,Fl,Bl,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:h,c:l,normal:new T,materialIndex:0};Zi.getNormal(gn,_n,xn,u.normal),c.face=u}return c}var Se=class s extends be{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let h=[],l=[],c=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(h),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(u,2));function g(_,p,d,M,x,w,P,A,R,V,v){let E=w/R,F=P/V,W=w/2,it=P/2,L=A/2,U=R+1,H=V+1,q=0,X=0,G=new T;for(let J=0;J<H;J++){let Q=J*F-it;for(let lt=0;lt<U;lt++){let z=lt*E-W;G[_]=z*M,G[p]=Q*x,G[d]=L,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[d]=A>0?1:-1,c.push(G.x,G.y,G.z),u.push(lt/R),u.push(1-J/V),q+=1}}for(let J=0;J<V;J++)for(let Q=0;Q<R;Q++){let lt=f+Q+U*J,z=f+Q+U*(J+1),Z=f+(Q+1)+U*(J+1),ot=f+(Q+1)+U*J;h.push(lt,z,ot),h.push(z,Z,ot),X+=6}a.addGroup(m,X,v),m+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function kn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Oe(s){let t={};for(let e=0;e<s.length;e++){let i=kn(s[e]);for(let n in i)t[n]=i[n]}return t}function Su(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ph(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}var Eu={clone:kn,merge:Oe},wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kn(t.uniforms),this.uniformsGroups=Su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},fr=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends fr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*n/h,e-=o.offsetY*i/l,n*=o.width/h,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yn=-90,vn=1,Oa=class extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pe(yn,vn,t,e);n.layers=this.layers,this.add(n);let r=new Pe(yn,vn,t,e);r.layers=this.layers,this.add(r);let o=new Pe(yn,vn,t,e);o.layers=this.layers,this.add(o);let a=new Pe(yn,vn,t,e);a.layers=this.layers,this.add(a);let h=new Pe(yn,vn,t,e);h.layers=this.layers,this.add(h);let l=new Pe(yn,vn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,h]=e;for(let l of e)this.remove(l);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pr=class extends Je{constructor(t,e,i,n,r,o,a,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Pn,super(t,e,i,n,r,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fa=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(as("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ki?we:Ze),this.texture=new pr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Se(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Li});r.uniforms.tEquirect.value=e;let o=new Nt(n,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Ye),new Oa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},pa=new T,Au=new T,Ru=new Wt,gi=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=pa.subVectors(i,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(pa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ru.getNormalMatrix(t),n=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Un,Vs=new T,fs=class{constructor(t=new gi,e=new gi,i=new gi,n=new gi,r=new gi,o=new gi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],h=n[3],l=n[4],c=n[5],u=n[6],f=n[7],m=n[8],g=n[9],_=n[10],p=n[11],d=n[12],M=n[13],x=n[14],w=n[15];if(i[0].setComponents(h-r,f-l,p-m,w-d).normalize(),i[1].setComponents(h+r,f+l,p+m,w+d).normalize(),i[2].setComponents(h+o,f+c,p+g,w+M).normalize(),i[3].setComponents(h-o,f-c,p-g,w-M).normalize(),i[4].setComponents(h-a,f-u,p-_,w-x).normalize(),e===xi)i[5].setComponents(h+a,f+u,p+_,w+x).normalize();else if(e===sr)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Vs.x=n.normal.x>0?t.max.x:t.min.x,Vs.y=n.normal.y>0?t.max.y:t.min.y,Vs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ih(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cu(s,t){let e=t.isWebGL2,i=new WeakMap;function n(l,c){let u=l.array,f=l.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(c,g),s.bufferData(c,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,c,u){let f=c.array,m=c._updateRange,g=c.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=i.get(l);c&&(s.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,c),u.version=l.version}}return{get:o,remove:a,update:h}}var ps=class s extends be{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),h=Math.floor(n),l=a+1,c=h+1,u=t/a,f=e/h,m=[],g=[],_=[],p=[];for(let d=0;d<c;d++){let M=d*f-o;for(let x=0;x<l;x++){let w=x*u-r;g.push(w,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-d/h)}}for(let d=0;d<h;d++)for(let M=0;M<a;M++){let x=M+l*d,w=M+l*(d+1),P=M+1+l*(d+1),A=M+1+l*d;m.push(x,w,A),m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ld=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ld=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ef=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ff=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
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
}`,Qf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`#define TOON
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
}`,np=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,op=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ot={alphahash_fragment:Lu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Du,alphatest_fragment:Uu,alphatest_pars_fragment:Nu,aomap_fragment:ku,aomap_pars_fragment:Ou,batching_pars_vertex:Fu,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Hu,bsdfs:Vu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:$u,color_pars_vertex:Ku,color_vertex:ju,common:Qu,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:id,displacementmap_vertex:nd,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:hd,envmap_pars_fragment:cd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Sd,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_fragment:xd,lightmap_pars_fragment:yd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:bd,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Td,lights_phong_pars_fragment:Ad,lights_physical_fragment:Rd,lights_physical_pars_fragment:Cd,lights_fragment_begin:Ld,lights_fragment_maps:Pd,lights_fragment_end:Id,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:kd,map_fragment:Od,map_pars_fragment:Fd,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:Zd,normal_pars_fragment:Jd,normal_pars_vertex:$d,normal_vertex:Kd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:hf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:xf,skinnormal_vertex:yf,specularmap_fragment:vf,specularmap_pars_fragment:Mf,tonemapping_fragment:bf,tonemapping_pars_fragment:Sf,transmission_fragment:Ef,transmission_pars_fragment:wf,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:Rf,worldpos_vertex:Cf,background_vert:Lf,background_frag:Pf,backgroundCube_vert:If,backgroundCube_frag:Df,cube_vert:Uf,cube_frag:Nf,depth_vert:kf,depth_frag:Of,distanceRGBA_vert:Ff,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:Hf,linedashed_vert:Vf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:Yf,meshmatcap_vert:Zf,meshmatcap_frag:Jf,meshnormal_vert:$f,meshnormal_frag:Kf,meshphong_vert:jf,meshphong_frag:Qf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:ip,meshtoon_frag:np,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:hp},st={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ri={basic:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Oe([st.common,st.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Oe([st.lights,st.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ri.physical={uniforms:Oe([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Gs={r:0,b:0,g:0};function cp(s,t,e,i,n,r,o){let a=new Lt(0),h=r===!0?0:1,l,c,u=null,f=0,m=null;function g(p,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,h):x&&x.isColor&&(_(x,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cr)?(c===void 0&&(c=new Nt(new Se(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:kn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ne,(u!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new ps(2,2),new ii({name:"BackgroundMaterial",uniforms:kn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,d){p.getRGB(Gs,Ph(s)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),h=d,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,_(a,h)},render:g}}function up(s,t,e,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},h=p(null),l=h,c=!1;function u(L,U,H,q,X){let G=!1;if(o){let J=_(q,H,U);l!==J&&(l=J,m(l.object)),G=d(L,q,H,X),G&&M(L,q,H,X)}else{let J=U.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==J)&&(l.geometry=q.id,l.program=H.id,l.wireframe=J,G=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,V(L,U,H,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,H){let q=H.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let G=X[U.id];G===void 0&&(G={},X[U.id]=G);let J=G[q];return J===void 0&&(J=p(f()),G[q]=J),J}function p(L){let U=[],H=[],q=[];for(let X=0;X<n;X++)U[X]=0,H[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,U,H,q){let X=l.attributes,G=U.attributes,J=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let Z=X[lt],ot=G[lt];if(ot===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;J++}return l.attributesNum!==J||l.index!==q}function M(L,U,H,q){let X={},G=U.attributes,J=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let Z=G[lt];Z===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),X[lt]=ot,J++}l.attributes=X,l.attributesNum=J,l.index=q}function x(){let L=l.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function w(L){P(L,0)}function P(L,U){let H=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;H[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==U&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function A(){let L=l.newAttributes,U=l.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==L[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function R(L,U,H,q,X,G,J){J===!0?s.vertexAttribIPointer(L,U,H,X,G):s.vertexAttribPointer(L,U,H,q,X,G)}function V(L,U,H,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,G=H.getAttributes(),J=U.defaultAttributeValues;for(let Q in G){let lt=G[Q];if(lt.location>=0){let z=X[Q];if(z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let Z=z.normalized,ot=z.itemSize,bt=e.get(z);if(bt===void 0)continue;let dt=bt.buffer,gt=bt.type,At=bt.bytesPerElement,_t=i.isWebGL2===!0&&(gt===s.INT||gt===s.UNSIGNED_INT||z.gpuType===yh);if(z.isInterleavedBufferAttribute){let Ft=z.data,D=Ft.stride,se=z.offset;if(Ft.isInstancedInterleavedBuffer){for(let xt=0;xt<lt.locationSize;xt++)P(lt.location+xt,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let xt=0;xt<lt.locationSize;xt++)w(lt.location+xt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let xt=0;xt<lt.locationSize;xt++)R(lt.location+xt,ot/lt.locationSize,gt,Z,D*At,(se+ot/lt.locationSize*xt)*At,_t)}else{if(z.isInstancedBufferAttribute){for(let Ft=0;Ft<lt.locationSize;Ft++)P(lt.location+Ft,z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ft=0;Ft<lt.locationSize;Ft++)w(lt.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Ft=0;Ft<lt.locationSize;Ft++)R(lt.location+Ft,ot/lt.locationSize,gt,Z,ot*At,ot/lt.locationSize*Ft*At,_t)}}else if(J!==void 0){let Z=J[Q];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(lt.location,Z);break;case 3:s.vertexAttrib3fv(lt.location,Z);break;case 4:s.vertexAttrib4fv(lt.location,Z);break;default:s.vertexAttrib1fv(lt.location,Z)}}}}A()}function v(){W();for(let L in a){let U=a[L];for(let H in U){let q=U[H];for(let X in q)g(q[X].object),delete q[X];delete U[H]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let H in U){let q=U[H];for(let X in q)g(q[X].object),delete q[X];delete U[H]}delete a[L.id]}function F(L){for(let U in a){let H=a[U];if(H[L.id]===void 0)continue;let q=H[L.id];for(let X in q)g(q[X].object),delete q[X];delete H[L.id]}}function W(){it(),c=!0,l!==h&&(l=h,m(l.object))}function it(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:W,resetDefaultState:it,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:w,disableUnusedAttributes:A}}function dp(s,t,e,i){let n=i.isWebGL2,r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function h(c,u,f){if(f===0)return;let m,g;if(n)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,c,u,f),e.update(u,r,f)}function l(c,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(c[g],u[g]);else{m.multiDrawArraysWEBGL(r,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=h,this.renderMultiDraw=l}function fp(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",h=r(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let l=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=o||t.has("OES_texture_float"),P=x&&w,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:A}}function pp(s){let t=this,e=null,i=0,n=!1,r=!1,o=new gi,a=new Wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||n;return n=f,i=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?c(null):l();else{let M=r?0:i,x=M*4,w=d.clippingState||null;h.value=w,w=c(g,f,x,m);for(let P=0;P!==x;++P)w[P]=e[P];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=h.value,g!==!0||p===null){let d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,w=m;x!==_;++x,w+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,w),p[w+3]=o.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function mp(s){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=Pn:a===Ca&&(o.mapping=In),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ra||a===Ca)if(t.has(o)){let h=t.get(o).texture;return e(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let l=new Fa(h.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var mr=class extends fr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tn=4,zl=[.125,.215,.35,.446,.526,.582],Yi=20,ma=new mr,Hl=new Lt,ga=null,_a=0,xa=0,Xi=(1+Math.sqrt(5))/2,Mn=1/Xi,Vl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Xi,Mn),new T(0,Xi,-Mn),new T(Mn,0,Xi),new T(-Mn,0,Xi),new T(Xi,Mn,0),new T(-Xi,Mn,0)],gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pn||t.mapping===In?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ds,format:ei,colorSpace:yi,depthBuffer:!1},n=Gl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,t,e)}return n}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,i,n){let a=new Pe(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Hl),c.toneMapping=Ii,c.autoClear=!1;let m=new ze({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Nt(new Se,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Hl),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,h[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,h[d]),a.lookAt(0,l[d],0)):(a.up.set(0,h[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;Ws(n,M*x,d>2?x:0,x,x),c.setRenderTarget(n),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Pn||t.mapping===In;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;Ws(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,ma)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Vl[(n-1)%Vl.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Nt(this._lodPlanes[n],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),_=r/g,p=isFinite(r)?1+Math.floor(c*_):Yi;p>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);let d=[],M=0;for(let R=0;R<Yi;++R){let V=R/_,v=Math.exp(-V*V/2);d.push(v),R===0?M+=v:R<p&&(M+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let w=this._sizeLods[n],P=3*w*(n>x-Tn?n-x+Tn:0),A=4*(this._cubeSize-w);Ws(e,P,A,3*w,2*w),h.setRenderTarget(e),h.render(u,ma)}};function gp(s){let t=[],e=[],i=[],n=s,r=s-Tn+1+zl.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let h=1/a;o>s-Tn?h=zl[o-s+Tn-1]:o===0&&(h=0),i.push(h);let l=1/(a-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),w=new Float32Array(d*g*m);for(let A=0;A<m;A++){let R=A%3*2/3-1,V=A>2?0:-1,v=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];M.set(v,_*g*A),x.set(f,p*g*A);let E=[A,A,A,A,A,A];w.set(E,d*g*A)}let P=new be;P.setAttribute("position",new De(M,_)),P.setAttribute("uv",new De(x,p)),P.setAttribute("faceIndex",new De(w,d)),t.push(P),n>Tn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gl(s,t,e){let i=new vi(s,t,e);return i.texture.mapping=Cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function _p(s,t,e){let i=new Float32Array(Yi),n=new T(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:So(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Wl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Xl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function xp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let h=a.mapping,l=h===Ra||h===Ca,c=h===Pn||h===In;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new gr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new gr(s));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let h=0,l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function r(a){let h=a.target;h.removeEventListener("dispose",r);let l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function yp(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function vp(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete n[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function h(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,w=M.length;x<w;x+=3){let P=M[x+0],A=M[x+1],R=M[x+2];f.push(P,A,A,R,R,P)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,w=M.length/3-1;x<w;x+=3){let P=x+0,A=x+1,R=x+2;f.push(P,A,A,R,R,P)}}else return;let p=new(Ch(f)?dr:ur)(f,1);p.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function c(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:c}}function Mp(s,t,e,i){let n=i.isWebGL2,r;function o(m){r=m}let a,h;function l(m){a=m.type,h=m.bytesPerElement}function c(m,g){s.drawElements(r,g,a,m*h),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(n)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*h,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/h,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function bp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Sp(s,t){return s[0]-t[0]}function Ep(s,t){return Math.abs(t[1])-Math.abs(s[1])}function wp(s,t,e){let i={},n=new Float32Array(8),r=new WeakMap,o=new ae,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function h(l,c,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(c);if(_===void 0||_.count!==g){let L=function(){W.dispose(),r.delete(c),c.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let M=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],R=c.morphAttributes.color||[],V=0;M===!0&&(V=1),x===!0&&(V=2),w===!0&&(V=3);let v=c.attributes.position.count*V,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let F=new Float32Array(v*E*4*g),W=new lr(F,v,E,g);W.type=Ci,W.needsUpdate=!0;let it=V*4;for(let U=0;U<g;U++){let H=P[U],q=A[U],X=R[U],G=v*E*4*U;for(let J=0;J<H.count;J++){let Q=J*it;M===!0&&(o.fromBufferAttribute(H,J),F[G+Q+0]=o.x,F[G+Q+1]=o.y,F[G+Q+2]=o.z,F[G+Q+3]=0),x===!0&&(o.fromBufferAttribute(q,J),F[G+Q+4]=o.x,F[G+Q+5]=o.y,F[G+Q+6]=o.z,F[G+Q+7]=0),w===!0&&(o.fromBufferAttribute(X,J),F[G+Q+8]=o.x,F[G+Q+9]=o.y,F[G+Q+10]=o.z,F[G+Q+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:W,size:new ct(v,E)},r.set(c,_),c.addEventListener("dispose",L)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let d=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=i[c.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[c.id]=g}for(let x=0;x<m;x++){let w=g[x];w[0]=x,w[1]=f[x]}g.sort(Ep);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Sp);let _=c.morphAttributes.position,p=c.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let w=a[x],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&c.getAttribute("morphTarget"+x)!==_[P]&&c.setAttribute("morphTarget"+x,_[P]),p&&c.getAttribute("morphNormal"+x)!==p[P]&&c.setAttribute("morphNormal"+x,p[P]),n[x]=A,d+=A):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),p&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),n[x]=0)}let M=c.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:h}}function Tp(s,t,e,i){let n=new WeakMap;function r(h){let l=i.render.frame,c=h.geometry,u=t.get(h,c);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),n.get(h)!==l&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),n.set(h,l))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return u}function o(){n=new WeakMap}function a(h){let l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var _r=class extends Je{constructor(t,e,i,n,r,o,a,h,l,c){if(c=c!==void 0?c:$i,c!==$i&&c!==Dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$i&&(i=Ri),i===void 0&&c===Dn&&(i=Ji),super(null,n,r,o,a,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=h!==void 0?h:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Dh=new Je,Uh=new _r(1,1);Uh.compareFunction=Rh;var Nh=new lr,kh=new ka,Oh=new pr,ql=[],Yl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),$l=new Float32Array(4);function Xn(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=ql[n];if(r===void 0&&(r=new Float32Array(n),ql[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Pr(s,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Ap(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Cp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function Lp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Pp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;$l.set(i),s.uniformMatrix2fv(this.addr,!1,$l),xe(e,i)}}function Ip(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;Jl.set(i),s.uniformMatrix3fv(this.addr,!1,Jl),xe(e,i)}}function Dp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;Zl.set(i),s.uniformMatrix4fv(this.addr,!1,Zl),xe(e,i)}}function Up(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Np(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function kp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function Op(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Fp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function Hp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function Vp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?Uh:Dh;e.setTexture2D(t||r,n)}function Gp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||kh,n)}function Wp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Oh,n)}function Xp(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Nh,n)}function qp(s){switch(s){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Lp;case 35674:return Pp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return kp;case 35669:case 35673:return Op;case 5125:return Fp;case 36294:return Bp;case 36295:return zp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function Yp(s,t){s.uniform1fv(this.addr,t)}function Zp(s,t){let e=Xn(t,this.size,2);s.uniform2fv(this.addr,e)}function Jp(s,t){let e=Xn(t,this.size,3);s.uniform3fv(this.addr,e)}function $p(s,t){let e=Xn(t,this.size,4);s.uniform4fv(this.addr,e)}function Kp(s,t){let e=Xn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jp(s,t){let e=Xn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qp(s,t){let e=Xn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tm(s,t){s.uniform1iv(this.addr,t)}function em(s,t){s.uniform2iv(this.addr,t)}function im(s,t){s.uniform3iv(this.addr,t)}function nm(s,t){s.uniform4iv(this.addr,t)}function sm(s,t){s.uniform1uiv(this.addr,t)}function rm(s,t){s.uniform2uiv(this.addr,t)}function am(s,t){s.uniform3uiv(this.addr,t)}function om(s,t){s.uniform4uiv(this.addr,t)}function lm(s,t,e){let i=this.cache,n=t.length,r=Pr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Dh,r[o])}function hm(s,t,e){let i=this.cache,n=t.length,r=Pr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||kh,r[o])}function cm(s,t,e){let i=this.cache,n=t.length,r=Pr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Oh,r[o])}function um(s,t,e){let i=this.cache,n=t.length,r=Pr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Nh,r[o])}function dm(s){switch(s){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return $p;case 35674:return Kp;case 35675:return jp;case 35676:return Qp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return im;case 35669:case 35673:return nm;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}var Ba=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qp(e.type)}},za=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dm(e.type)}},Ha=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},ya=/(\w+)(\])?(\[|\.)?/g;function Kl(s,t){s.seq.push(t),s.map[t.id]=t}function fm(s,t,e){let i=s.name,n=i.length;for(ya.lastIndex=0;;){let r=ya.exec(i),o=ya.lastIndex,a=r[1],h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===n){Kl(e,l===void 0?new Ba(a,s,t):new za(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ha(a),Kl(e,u)),e=u}}}var Cn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);fm(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function jl(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var pm=37297,mm=0;function gm(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function _m(s){let t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s),i;switch(t===e?i="":t===nr&&e===ir?i="LinearDisplayP3ToLinearSRGB":t===ir&&e===nr&&(i="LinearSRGBToLinearDisplayP3"),s){case yi:case Lr:return[i,"LinearTransferOETF"];case we:case bo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Ql(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+gm(s.getShaderSource(t),o)}else return n}function xm(s,t){let e=_m(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ym(s,t){let e;switch(t){case Oc:e="Linear";break;case Fc:e="Reinhard";break;case Bc:e="OptimizedCineon";break;case vo:e="ACESFilmic";break;case Hc:e="AgX";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(An).join(`
`)}function Mm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(An).join(`
`)}function bm(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sm(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function An(s){return s!==""}function th(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(s){return s.replace(Em,Tm)}var wm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tm(s,t){let e=Ot[t];if(e===void 0){let i=wm.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}var Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(s){return s.replace(Am,Rm)}function Rm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pn:case In:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===In&&(t="ENVMAP_MODE_REFRACTION"),t}function Im(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case kc:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Um(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,h=Cm(e),l=Lm(e),c=Pm(e),u=Im(e),f=Dm(e),m=e.isWebGL2?"":vm(e),g=Mm(e),_=bm(r),p=n.createProgram(),d,M,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(An).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(An).join(`
`),M.length>0&&(M+=`
`)):(d=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(An).join(`
`),M=[m,nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Ii?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(An).join(`
`)),o=Va(o),o=th(o,e),o=eh(o,e),a=Va(a),a=th(a,e),a=eh(a,e),o=ih(o),a=ih(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=x+d+o,P=x+M+a,A=jl(n,n.VERTEX_SHADER,w),R=jl(n,n.FRAGMENT_SHADER,P);n.attachShader(p,A),n.attachShader(p,R),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function V(W){if(s.debug.checkShaderErrors){let it=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(A).trim(),U=n.getShaderInfoLog(R).trim(),H=!0,q=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,A,R);else{let X=Ql(n,A,"vertex"),G=Ql(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+X+`
`+G)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(L===""||U==="")&&(q=!1);q&&(W.diagnostics={runnable:H,programLog:it,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:M}})}n.deleteShader(A),n.deleteShader(R),v=new Cn(n,p),E=Sm(n,p)}let v;this.getUniforms=function(){return v===void 0&&V(this),v};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(p,pm)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=R,this}var Nm=0,Ga=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Wa(t),e.set(t,i)),i}},Wa=class{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}};function km(s,t,e,i,n,r,o){let a=new cr,h=new Ga,l=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,E,F,W,it){let L=W.fog,U=it.geometry,H=v.isMeshStandardMaterial?W.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),X=q&&q.mapping===Cr?q.image.height:null,G=g[v.type];v.precision!==null&&(m=n.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=J!==void 0?J.length:0,lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let z,Z,ot,bt;if(G){let Ue=ri[G];z=Ue.vertexShader,Z=Ue.fragmentShader}else z=v.vertexShader,Z=v.fragmentShader,h.update(v),ot=h.getVertexShaderID(v),bt=h.getFragmentShaderID(v);let dt=s.getRenderTarget(),gt=it.isInstancedMesh===!0,At=it.isBatchedMesh===!0,_t=!!v.map,Ft=!!v.matcap,D=!!q,se=!!v.aoMap,xt=!!v.lightMap,Rt=!!v.bumpMap,yt=!!v.normalMap,le=!!v.displacementMap,Bt=!!v.emissiveMap,S=!!v.metalnessMap,y=!!v.roughnessMap,k=v.anisotropy>0,tt=v.clearcoat>0,j=v.iridescence>0,et=v.sheen>0,vt=v.transmission>0,ht=k&&!!v.anisotropyMap,pt=tt&&!!v.clearcoatMap,Tt=tt&&!!v.clearcoatNormalMap,zt=tt&&!!v.clearcoatRoughnessMap,K=j&&!!v.iridescenceMap,Zt=j&&!!v.iridescenceThicknessMap,Xt=et&&!!v.sheenColorMap,It=et&&!!v.sheenRoughnessMap,St=!!v.specularMap,mt=!!v.specularColorMap,kt=!!v.specularIntensityMap,qt=vt&&!!v.transmissionMap,ce=vt&&!!v.thicknessMap,Vt=!!v.gradientMap,nt=!!v.alphaMap,C=v.alphaTest>0,rt=!!v.alphaHash,at=!!v.extensions,Ct=!!U.attributes.uv1,Et=!!U.attributes.uv2,te=!!U.attributes.uv3,ee=Ii;return v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:c,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:z,fragmentShader:Z,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:At,instancing:gt,instancingColor:gt&&it.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:yi,map:_t,matcap:Ft,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:X,aoMap:se,lightMap:xt,bumpMap:Rt,normalMap:yt,displacementMap:f&&le,emissiveMap:Bt,normalMapObjectSpace:yt&&v.normalMapType===Qc,normalMapTangentSpace:yt&&v.normalMapType===Ah,metalnessMap:S,roughnessMap:y,anisotropy:k,anisotropyMap:ht,clearcoat:tt,clearcoatMap:pt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:zt,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:Zt,sheen:et,sheenColorMap:Xt,sheenRoughnessMap:It,specularMap:St,specularColorMap:mt,specularIntensityMap:kt,transmission:vt,transmissionMap:qt,thicknessMap:ce,gradientMap:Vt,opaque:v.transparent===!1&&v.blending===Pi,alphaMap:nt,alphaTest:C,alphaHash:rt,combine:v.combine,mapUv:_t&&_(v.map.channel),aoMapUv:se&&_(v.aoMap.channel),lightMapUv:xt&&_(v.lightMap.channel),bumpMapUv:Rt&&_(v.bumpMap.channel),normalMapUv:yt&&_(v.normalMap.channel),displacementMapUv:le&&_(v.displacementMap.channel),emissiveMapUv:Bt&&_(v.emissiveMap.channel),metalnessMapUv:S&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:ht&&_(v.anisotropyMap.channel),clearcoatMapUv:pt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(v.sheenRoughnessMap.channel),specularMapUv:St&&_(v.specularMap.channel),specularColorMapUv:mt&&_(v.specularColorMap.channel),specularIntensityMapUv:kt&&_(v.specularIntensityMap.channel),transmissionMapUv:qt&&_(v.transmissionMap.channel),thicknessMapUv:ce&&_(v.thicknessMap.channel),alphaMapUv:nt&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Et,vertexUv3s:te,pointsUvs:it.isPoints===!0&&!!U.attributes.uv&&(_t||nt),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:at&&v.extensions.derivatives===!0,extensionFragDepth:at&&v.extensions.fragDepth===!0,extensionDrawBuffers:at&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(M(E,v),x(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function M(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function w(v){let E=g[v.type],F;if(E){let W=ri[E];F=Eu.clone(W.uniforms)}else F=v.uniforms;return F}function P(v,E){let F;for(let W=0,it=l.length;W<it;W++){let L=l[W];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Um(s,E,v,r),l.push(F)),F}function A(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function R(v){h.remove(v)}function V(){h.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:V}}function Om(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function sh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,m,g,_,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?n.push(d):e.push(d)}function h(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?n.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Fm),i.length>1&&i.sort(f||sh),n.length>1&&n.sort(f||sh)}function c(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:h,finish:c,sort:l}}function Bm(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new rh,s.set(i,[o])):n>=r.length?(o=new rh,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zm(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Lt};break;case"SpotLight":e={position:new T,direction:new T,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Hm(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Vm=0;function Gm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wm(s,t){let e=new zm,i=Hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let r=new T,o=new oe,a=new oe;function h(c,u){let f=0,m=0,g=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let _=0,p=0,d=0,M=0,x=0,w=0,P=0,A=0,R=0,V=0,v=0;c.sort(Gm);let E=u===!0?Math.PI:1;for(let W=0,it=c.length;W<it;W++){let L=c[W],U=L.color,H=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=U.r*H*E,m+=U.g*H*E,g+=U.b*H*E;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],H);v++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[_]=Q,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=L.shadow.matrix,w++}n.directional[_]=G,_++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(U).multiplyScalar(H*E),G.distance=q,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[d]=G;let J=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,J.updateMatrices(L),L.castShadow&&V++),n.spotLightMatrix[d]=J.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[d]=Q,n.spotShadowMap[d]=X,A++}d++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=G,M++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),G.distance=L.distance,G.decay=L.decay,L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=L.shadow.matrix,P++}n.point[p]=G,p++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(H*E),G.groundColor.copy(L.groundColor).multiplyScalar(H*E),n.hemi[x]=G,x++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;let F=n.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==d||F.rectAreaLength!==M||F.hemiLength!==x||F.numDirectionalShadows!==w||F.numPointShadows!==P||F.numSpotShadows!==A||F.numSpotMaps!==R||F.numLightProbes!==v)&&(n.directional.length=_,n.spot.length=d,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=A+R-V,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=v,F.directionalLength=_,F.pointLength=p,F.spotLength=d,F.rectAreaLength=M,F.hemiLength=x,F.numDirectionalShadows=w,F.numPointShadows=P,F.numSpotShadows=A,F.numSpotMaps=R,F.numLightProbes=v,n.version=Vm++)}function l(c,u){let f=0,m=0,g=0,_=0,p=0,d=u.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){let w=c[M];if(w.isDirectionalLight){let P=n.directional[f];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(w.isSpotLight){let P=n.spot[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let P=n.rectArea[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let P=n.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let P=n.hemi[p];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:h,setupView:l,state:n}}function ah(s,t){let e=new Wm(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function h(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function Xm(s,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),h;return a===void 0?(h=new ah(s,t),e.set(r,[h])):o>=a.length?(h=new ah(s,t),a.push(h)):h=a[o],h}function n(){e=new WeakMap}return{get:i,dispose:n}}var Xa=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function Zm(s,t,e){let i=new fs,n=new ct,r=new ct,o=new ae,a=new Xa({depthPacking:jc}),h=new qa,l={},c=e.maxTextureSize,u={[Ni]:Ie,[Ie]:Ni,[Be]:Be},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let d=this.type;this.render=function(A,R,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let v=s.getRenderTarget(),E=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Li),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let it=d!==mi&&this.type===mi,L=d===mi&&this.type!==mi;for(let U=0,H=A.length;U<H;U++){let q=A[U],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let G=X.getFrameExtents();if(n.multiply(G),r.copy(X.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/G.x),n.x=r.x*G.x,X.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/G.y),n.y=r.y*G.y,X.mapSize.y=r.y)),X.map===null||it===!0||L===!0){let Q=this.type!==mi?{minFilter:Fe,magFilter:Fe}:{};X.map!==null&&X.map.dispose(),X.map=new vi(n.x,n.y,Q),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let Q=0;Q<J;Q++){let lt=X.getViewport(Q);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),W.viewport(o),X.updateMatrices(q,Q),i=X.getFrustum(),w(R,V,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===mi&&M(X,V),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(v,E,F)};function M(A,R){let V=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,V,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,V,m,_,null)}function x(A,R,V,v){let E=null,F=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)E=F;else if(E=V.isPointLight===!0?h:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=E.uuid,it=R.uuid,L=l[W];L===void 0&&(L={},l[W]=L);let U=L[it];U===void 0&&(U=E.clone(),L[it]=U,R.addEventListener("dispose",P)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,v===mi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=s.properties.get(E);W.light=V}return E}function w(A,R,V,v,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);let it=t.update(A),L=A.material;if(Array.isArray(L)){let U=it.groups;for(let H=0,q=U.length;H<q;H++){let X=U[H],G=L[X.materialIndex];if(G&&G.visible){let J=x(A,G,v,E);A.onBeforeShadow(s,A,R,V,it,J,X),s.renderBufferDirect(V,null,it,J,A,X),A.onAfterShadow(s,A,R,V,it,J,X)}}}else if(L.visible){let U=x(A,L,v,E);A.onBeforeShadow(s,A,R,V,it,U,null),s.renderBufferDirect(V,null,it,U,A,null),A.onAfterShadow(s,A,R,V,it,U,null)}}let W=A.children;for(let it=0,L=W.length;it<L;it++)w(W[it],R,V,v,E)}function P(A){A.target.removeEventListener("dispose",P);for(let V in l){let v=l[V],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Jm(s,t,e){let i=e.isWebGL2;function n(){let C=!1,rt=new ae,at=null,Ct=new ae(0,0,0,0);return{setMask:function(Et){at!==Et&&!C&&(s.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){C=Et},setClear:function(Et,te,ee,ye,Ue){Ue===!0&&(Et*=ye,te*=ye,ee*=ye),rt.set(Et,te,ee,ye),Ct.equals(rt)===!1&&(s.clearColor(Et,te,ee,ye),Ct.copy(rt))},reset:function(){C=!1,at=null,Ct.set(-1,0,0,0)}}}function r(){let C=!1,rt=null,at=null,Ct=null;return{setTest:function(Et){Et?At(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(Et){rt!==Et&&!C&&(s.depthMask(Et),rt=Et)},setFunc:function(Et){if(at!==Et){switch(Et){case Rc:s.depthFunc(s.NEVER);break;case Cc:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Pc:s.depthFunc(s.EQUAL);break;case Ic:s.depthFunc(s.GEQUAL);break;case Dc:s.depthFunc(s.GREATER);break;case Uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=Et}},setLocked:function(Et){C=Et},setClear:function(Et){Ct!==Et&&(s.clearDepth(Et),Ct=Et)},reset:function(){C=!1,rt=null,at=null,Ct=null}}}function o(){let C=!1,rt=null,at=null,Ct=null,Et=null,te=null,ee=null,ye=null,Ue=null;return{setTest:function(ie){C||(ie?At(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ie){rt!==ie&&!C&&(s.stencilMask(ie),rt=ie)},setFunc:function(ie,Ne,si){(at!==ie||Ct!==Ne||Et!==si)&&(s.stencilFunc(ie,Ne,si),at=ie,Ct=Ne,Et=si)},setOp:function(ie,Ne,si){(te!==ie||ee!==Ne||ye!==si)&&(s.stencilOp(ie,Ne,si),te=ie,ee=Ne,ye=si)},setLocked:function(ie){C=ie},setClear:function(ie){Ue!==ie&&(s.clearStencil(ie),Ue=ie)},reset:function(){C=!1,rt=null,at=null,Ct=null,Et=null,te=null,ee=null,ye=null,Ue=null}}}let a=new n,h=new r,l=new o,c=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,w=null,P=null,A=null,R=null,V=null,v=new Lt(0,0,0),E=0,F=!1,W=null,it=null,L=null,U=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,G=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let Q=null,lt={},z=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ot=new ae().fromArray(z),bt=new ae().fromArray(Z);function dt(C,rt,at,Ct){let Et=new Uint8Array(4),te=s.createTexture();s.bindTexture(C,te),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<at;ee++)i&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(rt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return te}let gt={};gt[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(gt[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),h.setClear(1),l.setClear(0),At(s.DEPTH_TEST),h.setFunc(js),Bt(!1),S(Ho),At(s.CULL_FACE),yt(Li);function At(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function _t(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function Ft(C,rt){return m[C]!==rt?(s.bindFramebuffer(C,rt),m[C]=rt,i&&(C===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=rt),C===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function D(C,rt){let at=_,Ct=!1;if(C)if(at=g.get(rt),at===void 0&&(at=[],g.set(rt,at)),C.isWebGLMultipleRenderTargets){let Et=C.texture;if(at.length!==Et.length||at[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=Et.length;te<ee;te++)at[te]=s.COLOR_ATTACHMENT0+te;at.length=Et.length,Ct=!0}}else at[0]!==s.COLOR_ATTACHMENT0&&(at[0]=s.COLOR_ATTACHMENT0,Ct=!0);else at[0]!==s.BACK&&(at[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function se(C){return p!==C?(s.useProgram(C),p=C,!0):!1}let xt={[qi]:s.FUNC_ADD,[fc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};if(i)xt[Wo]=s.MIN,xt[Xo]=s.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(xt[Wo]=C.MIN_EXT,xt[Xo]=C.MAX_EXT)}let Rt={[mc]:s.ZERO,[gc]:s.ONE,[_c]:s.SRC_COLOR,[Ta]:s.SRC_ALPHA,[Sc]:s.SRC_ALPHA_SATURATE,[Mc]:s.DST_COLOR,[yc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[Aa]:s.ONE_MINUS_SRC_ALPHA,[bc]:s.ONE_MINUS_DST_COLOR,[vc]:s.ONE_MINUS_DST_ALPHA,[Ec]:s.CONSTANT_COLOR,[wc]:s.ONE_MINUS_CONSTANT_COLOR,[Tc]:s.CONSTANT_ALPHA,[Ac]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(C,rt,at,Ct,Et,te,ee,ye,Ue,ie){if(C===Li){d===!0&&(_t(s.BLEND),d=!1);return}if(d===!1&&(At(s.BLEND),d=!0),C!==dc){if(C!==M||ie!==F){if((x!==qi||A!==qi)&&(s.blendEquation(s.FUNC_ADD),x=qi,A=qi),ie)switch(C){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFunc(s.ONE,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Go:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Go:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,R=null,V=null,v.set(0,0,0),E=0,M=C,F=ie}return}Et=Et||rt,te=te||at,ee=ee||Ct,(rt!==x||Et!==A)&&(s.blendEquationSeparate(xt[rt],xt[Et]),x=rt,A=Et),(at!==w||Ct!==P||te!==R||ee!==V)&&(s.blendFuncSeparate(Rt[at],Rt[Ct],Rt[te],Rt[ee]),w=at,P=Ct,R=te,V=ee),(ye.equals(v)===!1||Ue!==E)&&(s.blendColor(ye.r,ye.g,ye.b,Ue),v.copy(ye),E=Ue),M=C,F=!1}function le(C,rt){C.side===Be?_t(s.CULL_FACE):At(s.CULL_FACE);let at=C.side===Ie;rt&&(at=!at),Bt(at),C.blending===Pi&&C.transparent===!1?yt(Li):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),h.setFunc(C.depthFunc),h.setTest(C.depthTest),h.setMask(C.depthWrite),a.setMask(C.colorWrite);let Ct=C.stencilWrite;l.setTest(Ct),Ct&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){W!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),W=C)}function S(C){C!==cc?(At(s.CULL_FACE),C!==it&&(C===Ho?s.cullFace(s.BACK):C===uc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),it=C}function y(C){C!==L&&(X&&s.lineWidth(C),L=C)}function k(C,rt,at){C?(At(s.POLYGON_OFFSET_FILL),(U!==rt||H!==at)&&(s.polygonOffset(rt,at),U=rt,H=at)):_t(s.POLYGON_OFFSET_FILL)}function tt(C){C?At(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function j(C){C===void 0&&(C=s.TEXTURE0+q-1),Q!==C&&(s.activeTexture(C),Q=C)}function et(C,rt,at){at===void 0&&(Q===null?at=s.TEXTURE0+q-1:at=Q);let Ct=lt[at];Ct===void 0&&(Ct={type:void 0,texture:void 0},lt[at]=Ct),(Ct.type!==C||Ct.texture!==rt)&&(Q!==at&&(s.activeTexture(at),Q=at),s.bindTexture(C,rt||gt[C]),Ct.type=C,Ct.texture=rt)}function vt(){let C=lt[Q];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(C){ot.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ot.copy(C))}function qt(C){bt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),bt.copy(C))}function ce(C,rt){let at=u.get(rt);at===void 0&&(at=new WeakMap,u.set(rt,at));let Ct=at.get(C);Ct===void 0&&(Ct=s.getUniformBlockIndex(rt,C.name),at.set(C,Ct))}function Vt(C,rt){let Ct=u.get(rt).get(C);c.get(rt)!==Ct&&(s.uniformBlockBinding(rt,Ct,C.__bindingPointIndex),c.set(rt,Ct))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,lt={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,w=null,P=null,A=null,R=null,V=null,v=new Lt(0,0,0),E=0,F=!1,W=null,it=null,L=null,U=null,H=null,ot.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),h.reset(),l.reset()}return{buffers:{color:a,depth:h,stencil:l},enable:At,disable:_t,bindFramebuffer:Ft,drawBuffers:D,useProgram:se,setBlending:yt,setMaterial:le,setFlipSided:Bt,setCullFace:S,setLineWidth:y,setPolygonOffset:k,setScissorTest:tt,activeTexture:j,bindTexture:et,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:pt,texImage2D:St,texImage3D:mt,updateUBOMapping:ce,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:It,texSubImage2D:Tt,texSubImage3D:zt,compressedTexSubImage2D:K,compressedTexSubImage3D:Zt,scissor:kt,viewport:qt,reset:nt}}function $m(s,t,e,i,n,r,o){let a=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return m?new OffscreenCanvas(S,y):rr("canvas")}function _(S,y,k,tt){let j=1;if((S.width>tt||S.height>tt)&&(j=tt/Math.max(S.width,S.height)),j<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let et=y?Ua:Math.floor,vt=et(j*S.width),ht=et(j*S.height);u===void 0&&(u=g(vt,ht));let pt=k?g(vt,ht):u;return pt.width=vt,pt.height=ht,pt.getContext("2d").drawImage(S,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+ht+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Sl(S.width)&&Sl(S.height)}function d(S){return a?!1:S.wrapS!==ti||S.wrapT!==ti||S.minFilter!==Fe&&S.minFilter!==Ye}function M(S,y){return S.generateMipmaps&&y&&S.minFilter!==Fe&&S.minFilter!==Ye}function x(S){s.generateMipmap(S)}function w(S,y,k,tt,j=!1){if(a===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let et=y;if(y===s.RED&&(k===s.FLOAT&&(et=s.R32F),k===s.HALF_FLOAT&&(et=s.R16F),k===s.UNSIGNED_BYTE&&(et=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.R8UI),k===s.UNSIGNED_SHORT&&(et=s.R16UI),k===s.UNSIGNED_INT&&(et=s.R32UI),k===s.BYTE&&(et=s.R8I),k===s.SHORT&&(et=s.R16I),k===s.INT&&(et=s.R32I)),y===s.RG&&(k===s.FLOAT&&(et=s.RG32F),k===s.HALF_FLOAT&&(et=s.RG16F),k===s.UNSIGNED_BYTE&&(et=s.RG8)),y===s.RGBA){let vt=j?er:Jt.getTransfer(tt);k===s.FLOAT&&(et=s.RGBA32F),k===s.HALF_FLOAT&&(et=s.RGBA16F),k===s.UNSIGNED_BYTE&&(et=vt===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function P(S,y,k){return M(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==Fe&&S.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function A(S){return S===Fe||S===qo||S===Gr?s.NEAREST:s.LINEAR}function R(S){let y=S.target;y.removeEventListener("dispose",R),v(y),y.isVideoTexture&&c.delete(y)}function V(S){let y=S.target;y.removeEventListener("dispose",V),F(y)}function v(S){let y=i.get(S);if(y.__webglInit===void 0)return;let k=S.source,tt=f.get(k);if(tt){let j=tt[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(S),Object.keys(tt).length===0&&f.delete(k)}i.remove(S)}function E(S){let y=i.get(S);s.deleteTexture(y.__webglTexture);let k=S.source,tt=f.get(k);delete tt[y.__cacheKey],o.memory.textures--}function F(S){let y=S.texture,k=i.get(S),tt=i.get(y);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(k.__webglFramebuffer[j]))for(let et=0;et<k.__webglFramebuffer[j].length;et++)s.deleteFramebuffer(k.__webglFramebuffer[j][et]);else s.deleteFramebuffer(k.__webglFramebuffer[j]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[j])}else{if(Array.isArray(k.__webglFramebuffer))for(let j=0;j<k.__webglFramebuffer.length;j++)s.deleteFramebuffer(k.__webglFramebuffer[j]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let j=0;j<k.__webglColorRenderbuffer.length;j++)k.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[j]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let j=0,et=y.length;j<et;j++){let vt=i.get(y[j]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(y[j])}i.remove(y),i.remove(S)}let W=0;function it(){W=0}function L(){let S=W;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),W+=1,S}function U(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function H(S,y){let k=i.get(S);if(S.isVideoTexture&&le(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let tt=S.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,S,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function q(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){ot(k,S,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function X(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){ot(k,S,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function G(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){bt(k,S,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}let J={[cs]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},Q={[Fe]:s.NEAREST,[qo]:s.NEAREST_MIPMAP_NEAREST,[Gr]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Vc]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},lt={[tu]:s.NEVER,[au]:s.ALWAYS,[eu]:s.LESS,[Rh]:s.LEQUAL,[iu]:s.EQUAL,[ru]:s.GEQUAL,[nu]:s.GREATER,[su]:s.NOTEQUAL};function z(S,y,k){if(k?(s.texParameteri(S,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,J[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,Q[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,Q[y.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==ti||y.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,A(y.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==Fe&&y.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Fe||y.minFilter!==Gr&&y.minFilter!==us||y.type===Ci&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===ds&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(S,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Z(S,y){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",R));let tt=y.source,j=f.get(tt);j===void 0&&(j={},f.set(tt,j));let et=U(y);if(et!==S.__cacheKey){j[et]===void 0&&(j[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[et].usedTimes++;let vt=j[S.__cacheKey];vt!==void 0&&(j[S.__cacheKey].usedTimes--,vt.usedTimes===0&&E(y)),S.__cacheKey=et,S.__webglTexture=j[et].texture}return k}function ot(S,y,k){let tt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=s.TEXTURE_3D);let j=Z(S,y),et=y.source;e.bindTexture(tt,S.__webglTexture,s.TEXTURE0+k);let vt=i.get(et);if(et.version!==vt.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let ht=Jt.getPrimaries(Jt.workingColorSpace),pt=y.colorSpace===Ze?null:Jt.getPrimaries(y.colorSpace),Tt=y.colorSpace===Ze||ht===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let zt=d(y)&&p(y.image)===!1,K=_(y.image,zt,!1,n.maxTextureSize);K=Bt(y,K);let Zt=p(K)||a,Xt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),St=w(y.internalFormat,Xt,It,y.colorSpace,y.isVideoTexture);z(tt,y,Zt);let mt,kt=y.mipmaps,qt=a&&y.isVideoTexture!==!0&&St!==wh,ce=vt.__version===void 0||j===!0,Vt=P(y,K,Zt);if(y.isDepthTexture)St=s.DEPTH_COMPONENT,a?y.type===Ci?St=s.DEPTH_COMPONENT32F:y.type===Ri?St=s.DEPTH_COMPONENT24:y.type===Ji?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:y.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===$i&&St===s.DEPTH_COMPONENT&&y.type!==Mo&&y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ri,It=r.convert(y.type)),y.format===Dn&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,y.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ji,It=r.convert(y.type))),ce&&(qt?e.texStorage2D(s.TEXTURE_2D,1,St,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,St,K.width,K.height,0,Xt,It,null));else if(y.isDataTexture)if(kt.length>0&&Zt){qt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,St,kt[0].width,kt[0].height);for(let nt=0,C=kt.length;nt<C;nt++)mt=kt[nt],qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Xt,It,mt.data):e.texImage2D(s.TEXTURE_2D,nt,St,mt.width,mt.height,0,Xt,It,mt.data);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(s.TEXTURE_2D,Vt,St,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Xt,It,K.data)):e.texImage2D(s.TEXTURE_2D,0,St,K.width,K.height,0,Xt,It,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,St,kt[0].width,kt[0].height,K.depth);for(let nt=0,C=kt.length;nt<C;nt++)mt=kt[nt],y.format!==ei?Xt!==null?qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,K.depth,Xt,mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,St,mt.width,mt.height,K.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,K.depth,Xt,It,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,St,mt.width,mt.height,K.depth,0,Xt,It,mt.data)}else{qt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,St,kt[0].width,kt[0].height);for(let nt=0,C=kt.length;nt<C;nt++)mt=kt[nt],y.format!==ei?Xt!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Xt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Xt,It,mt.data):e.texImage2D(s.TEXTURE_2D,nt,St,mt.width,mt.height,0,Xt,It,mt.data)}else if(y.isDataArrayTexture)qt?(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,St,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Xt,It,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,K.width,K.height,K.depth,0,Xt,It,K.data);else if(y.isData3DTexture)qt?(ce&&e.texStorage3D(s.TEXTURE_3D,Vt,St,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Xt,It,K.data)):e.texImage3D(s.TEXTURE_3D,0,St,K.width,K.height,K.depth,0,Xt,It,K.data);else if(y.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(s.TEXTURE_2D,Vt,St,K.width,K.height);else{let nt=K.width,C=K.height;for(let rt=0;rt<Vt;rt++)e.texImage2D(s.TEXTURE_2D,rt,St,nt,C,0,Xt,It,null),nt>>=1,C>>=1}}else if(kt.length>0&&Zt){qt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,St,kt[0].width,kt[0].height);for(let nt=0,C=kt.length;nt<C;nt++)mt=kt[nt],qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Xt,It,mt):e.texImage2D(s.TEXTURE_2D,nt,St,Xt,It,mt);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(s.TEXTURE_2D,Vt,St,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,It,K)):e.texImage2D(s.TEXTURE_2D,0,St,Xt,It,K);M(y,Zt)&&x(tt),vt.__version=et.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function bt(S,y,k){if(y.image.length!==6)return;let tt=Z(S,y),j=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+k);let et=i.get(j);if(j.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);let vt=Jt.getPrimaries(Jt.workingColorSpace),ht=y.colorSpace===Ze?null:Jt.getPrimaries(y.colorSpace),pt=y.colorSpace===Ze||vt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,zt=y.image[0]&&y.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!Tt&&!zt?K[nt]=_(y.image[nt],!1,!0,n.maxCubemapSize):K[nt]=zt?y.image[nt].image:y.image[nt],K[nt]=Bt(y,K[nt]);let Zt=K[0],Xt=p(Zt)||a,It=r.convert(y.format,y.colorSpace),St=r.convert(y.type),mt=w(y.internalFormat,It,St,y.colorSpace),kt=a&&y.isVideoTexture!==!0,qt=et.__version===void 0||tt===!0,ce=P(y,Zt,Xt);z(s.TEXTURE_CUBE_MAP,y,Xt);let Vt;if(Tt){kt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,mt,Zt.width,Zt.height);for(let nt=0;nt<6;nt++){Vt=K[nt].mipmaps;for(let C=0;C<Vt.length;C++){let rt=Vt[C];y.format!==ei?It!==null?kt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,rt.width,rt.height,It,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,mt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,rt.width,rt.height,It,St,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,mt,rt.width,rt.height,0,It,St,rt.data)}}}else{Vt=y.mipmaps,kt&&qt&&(Vt.length>0&&ce++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,mt,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(zt){kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,It,St,K[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,K[nt].width,K[nt].height,0,It,St,K[nt].data);for(let C=0;C<Vt.length;C++){let at=Vt[C].image[nt].image;kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,at.width,at.height,It,St,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,mt,at.width,at.height,0,It,St,at.data)}}else{kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,It,St,K[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,It,St,K[nt]);for(let C=0;C<Vt.length;C++){let rt=Vt[C];kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,It,St,rt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,mt,It,St,rt.image[nt])}}}M(y,Xt)&&x(s.TEXTURE_CUBE_MAP),et.__version=j.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function dt(S,y,k,tt,j,et){let vt=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),pt=w(k.internalFormat,vt,ht,k.colorSpace);if(!i.get(y).__hasExternalTextures){let zt=Math.max(1,y.width>>et),K=Math.max(1,y.height>>et);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,et,pt,zt,K,y.depth,0,vt,ht,null):e.texImage2D(j,et,pt,zt,K,0,vt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),yt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,i.get(k).__webglTexture,0,Rt(y)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,i.get(k).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(S,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let tt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||yt(y)){let j=y.depthTexture;j&&j.isDepthTexture&&(j.type===Ci?tt=s.DEPTH_COMPONENT32F:j.type===Ri&&(tt=s.DEPTH_COMPONENT24));let et=Rt(y);yt(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let tt=Rt(y);k&&yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,y.width,y.height):yt(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let tt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0;j<tt.length;j++){let et=tt[j],vt=r.convert(et.format,et.colorSpace),ht=r.convert(et.type),pt=w(et.internalFormat,vt,ht,et.colorSpace),Tt=Rt(y);k&&yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,y.width,y.height):yt(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,pt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let tt=i.get(y.depthTexture).__webglTexture,j=Rt(y);if(y.depthTexture.format===$i)yt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Dn)yt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function _t(S){let y=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,S)}else if(k){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]=s.createRenderbuffer(),gt(y.__webglDepthbuffer[tt],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),gt(y.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(S,y,k){let tt=i.get(S);y!==void 0&&dt(tt.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&_t(S)}function D(S){let y=S.texture,k=i.get(S),tt=i.get(y);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=y.version,o.memory.textures++);let j=S.isWebGLCubeRenderTarget===!0,et=S.isWebGLMultipleRenderTargets===!0,vt=p(S)||a;if(j){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[ht][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)k.__webglFramebuffer[ht]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(et)if(n.drawBuffers){let ht=S.texture;for(let pt=0,Tt=ht.length;pt<Tt;pt++){let zt=i.get(ht[pt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&yt(S)===!1){let ht=et?y:[y];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<ht.length;pt++){let Tt=ht[pt];k.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let zt=r.convert(Tt.format,Tt.colorSpace),K=r.convert(Tt.type),Zt=w(Tt.internalFormat,zt,K,Tt.colorSpace,S.isXRRenderTarget===!0),Xt=Rt(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Zt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(k.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),z(s.TEXTURE_CUBE_MAP,y,vt);for(let ht=0;ht<6;ht++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)dt(k.__webglFramebuffer[ht][pt],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else dt(k.__webglFramebuffer[ht],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);M(y,vt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ht=S.texture;for(let pt=0,Tt=ht.length;pt<Tt;pt++){let zt=ht[pt],K=i.get(zt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),z(s.TEXTURE_2D,zt,vt),dt(k.__webglFramebuffer,S,zt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),M(zt,vt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ht=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,tt.__webglTexture),z(ht,y,vt),a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)dt(k.__webglFramebuffer[pt],S,y,s.COLOR_ATTACHMENT0,ht,pt);else dt(k.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,ht,0);M(y,vt)&&x(ht),e.unbindTexture()}S.depthBuffer&&_t(S)}function se(S){let y=p(S)||a,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0,j=k.length;tt<j;tt++){let et=k[tt];if(M(et,y)){let vt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=i.get(et).__webglTexture;e.bindTexture(vt,ht),x(vt),e.unbindTexture()}}}function xt(S){if(a&&S.samples>0&&yt(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],k=S.width,tt=S.height,j=s.COLOR_BUFFER_BIT,et=[],vt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=i.get(S),pt=S.isWebGLMultipleRenderTargets===!0;if(pt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){et.push(s.COLOR_ATTACHMENT0+Tt),S.depthBuffer&&et.push(vt);let zt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(zt===!1&&(S.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),pt){let K=i.get(y[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,k,tt,0,0,k,tt,j,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]);let zt=i.get(y[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Rt(S){return Math.min(n.maxSamples,S.samples)}function yt(S){let y=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(S){let y=o.render.frame;c.get(S)!==y&&(c.set(S,y),S.update())}function Bt(S,y){let k=S.colorSpace,tt=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ia||k!==yi&&k!==Ze&&(Jt.getTransfer(k)===ne?a===!1?t.has("EXT_sRGB")===!0&&tt===ei?(S.format=Ia,S.minFilter=Ye,S.generateMipmaps=!1):y=ar.sRGBToLinear(y):(tt!==ei||j!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=L,this.resetTextureUnits=it,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=D,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=yt}function Km(s,t,e){let i=e.isWebGL2;function n(r,o=Ze){let a,h=Jt.getTransfer(o);if(r===Di)return s.UNSIGNED_BYTE;if(r===vh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gc)return s.BYTE;if(r===Wc)return s.SHORT;if(r===Mo)return s.UNSIGNED_SHORT;if(r===yh)return s.INT;if(r===Ri)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===ds)return i?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xc)return s.ALPHA;if(r===ei)return s.RGBA;if(r===qc)return s.LUMINANCE;if(r===Yc)return s.LUMINANCE_ALPHA;if(r===$i)return s.DEPTH_COMPONENT;if(r===Dn)return s.DEPTH_STENCIL;if(r===Ia)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zc)return s.RED;if(r===bh)return s.RED_INTEGER;if(r===Jc)return s.RG;if(r===Sh)return s.RG_INTEGER;if(r===Eh)return s.RGBA_INTEGER;if(r===Wr||r===Xr||r===qr||r===Yr)if(h===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yo||r===Zo||r===Jo||r===$o)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ko||r===jo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ko)return h===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===jo)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qo||r===tl||r===el||r===il||r===nl||r===sl||r===rl||r===al||r===ol||r===ll||r===hl||r===cl||r===ul||r===dl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qo)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===el)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ol)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ll)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ul)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dl)return h===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zr||r===fl||r===pl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Zr)return h===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$c||r===ml||r===gl||r===_l)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ml)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?i?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}var Ya=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=n!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Za=class extends ki{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,d=null,M=[],x=[],w=new ct,P=null,A=new Pe;A.layers.enable(1),A.viewport=new ae;let R=new Pe;R.layers.enable(2),R.viewport=new ae;let V=[A,R],v=new Ya;v.layers.enable(1),v.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=M[z];return Z===void 0&&(Z=new os,M[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=M[z];return Z===void 0&&(Z=new os,M[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=M[z];return Z===void 0&&(Z=new os,M[z]=Z),Z.getHandSpace()};function W(z){let Z=x.indexOf(z.inputSource);if(Z===-1)return;let ot=M[Z];ot!==void 0&&(ot.update(z.inputSource,z.frame,l||o),ot.dispatchEvent({type:z.type,data:z.inputSource}))}function it(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",L);for(let z=0;z<M.length;z++){let Z=x[z];Z!==null&&(x[z]=null,M[z].disconnect(Z))}E=null,F=null,t.setRenderTarget(p),m=null,f=null,u=null,n=null,d=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",it),n.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,Z),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new vi(m.framebufferWidth,m.framebufferHeight,{format:ei,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ot=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Dn:$i,ot=_.stencil?Ji:Ri);let dt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(dt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new vi(f.textureWidth,f.textureHeight,{format:ei,type:Di,depthTexture:new _r(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let gt=t.properties.get(d);gt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await n.requestReferenceSpace(a),lt.setContext(n),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(z){for(let Z=0;Z<z.removed.length;Z++){let ot=z.removed[Z],bt=x.indexOf(ot);bt>=0&&(x[bt]=null,M[bt].disconnect(ot))}for(let Z=0;Z<z.added.length;Z++){let ot=z.added[Z],bt=x.indexOf(ot);if(bt===-1){for(let gt=0;gt<M.length;gt++)if(gt>=x.length){x.push(ot),bt=gt;break}else if(x[gt]===null){x[gt]=ot,bt=gt;break}if(bt===-1)break}let dt=M[bt];dt&&dt.connect(ot)}}let U=new T,H=new T;function q(z,Z,ot){U.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(ot.matrixWorld);let bt=U.distanceTo(H),dt=Z.projectionMatrix.elements,gt=ot.projectionMatrix.elements,At=dt[14]/(dt[10]-1),_t=dt[14]/(dt[10]+1),Ft=(dt[9]+1)/dt[5],D=(dt[9]-1)/dt[5],se=(dt[8]-1)/dt[0],xt=(gt[8]+1)/gt[0],Rt=At*se,yt=At*xt,le=bt/(-se+xt),Bt=le*-se;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Bt),z.translateZ(le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let S=At+le,y=_t+le,k=Rt-Bt,tt=yt+(bt-Bt),j=Ft*_t/y*S,et=D*_t/y*S;z.projectionMatrix.makePerspective(k,tt,j,et,S,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;v.near=R.near=A.near=z.near,v.far=R.far=A.far=z.far,(E!==v.near||F!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,F=v.far);let Z=z.parent,ot=v.cameras;X(v,Z);for(let bt=0;bt<ot.length;bt++)X(ot[bt],Z);ot.length===2?q(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),G(z,v,Z)};function G(z,Z,ot){ot===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(ot.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Da*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(z){h=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let J=null;function Q(z,Z){if(c=Z.getViewerPose(l||o),g=Z,c!==null){let ot=c.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let bt=!1;ot.length!==v.cameras.length&&(v.cameras.length=0,bt=!0);for(let dt=0;dt<ot.length;dt++){let gt=ot[dt],At=null;if(m!==null)At=m.getViewport(gt);else{let Ft=u.getViewSubImage(f,gt);At=Ft.viewport,dt===0&&(t.setRenderTargetTextures(d,Ft.colorTexture,f.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(d))}let _t=V[dt];_t===void 0&&(_t=new Pe,_t.layers.enable(dt),_t.viewport=new ae,V[dt]=_t),_t.matrix.fromArray(gt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(gt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(At.x,At.y,At.width,At.height),dt===0&&(v.matrix.copy(_t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),bt===!0&&v.cameras.push(_t)}}for(let ot=0;ot<M.length;ot++){let bt=x[ot],dt=M[ot];bt!==null&&dt!==void 0&&dt.update(bt,Z,l||o)}J&&J(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let lt=new Ih;lt.setAnimationLoop(Q),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}};function Qm(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Ph(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,M,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?h(p,d,M,x):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ie&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ie&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=t.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function h(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function t0(s,t,e,i){let n={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(M,x){let w=x.program;i.uniformBlockBinding(M,w)}function l(M,x){let w=n[M.id];w===void 0&&(g(M),w=c(M),n[M.id]=w,M.addEventListener("dispose",p));let P=x.program;i.updateUBOMapping(M,P);let A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function c(M){let x=u();M.__bindingPointIndex=x;let w=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=n[M.id],w=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,R=w.length;A<R;A++){let V=Array.isArray(w[A])?w[A]:[w[A]];for(let v=0,E=V.length;v<E;v++){let F=V[v];if(m(F,A,v,P)===!0){let W=F.__offset,it=Array.isArray(F.value)?F.value:[F.value],L=0;for(let U=0;U<it.length;U++){let H=it[U],q=_(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+L,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,x,w,P){let A=M.value,R=x+"_"+w;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let V=P[R];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return P[R]=A,!0}else if(V.equals(A)===!1)return V.copy(A),!0}return!1}function g(M){let x=M.uniforms,w=0,P=16;for(let R=0,V=x.length;R<V;R++){let v=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,F=v.length;E<F;E++){let W=v[E],it=Array.isArray(W.value)?W.value:[W.value];for(let L=0,U=it.length;L<U;L++){let H=it[L],q=_(H),X=w%P;X!==0&&P-X<q.boundary&&(w+=P-X),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=q.storage}}}let A=w%P;return A>0&&(w+=P-A),M.__size=w,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function d(){for(let M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:h,update:l,dispose:d}}var On=class{constructor(t={}){let{canvas:e=lu(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;let x=this,w=!1,P=0,A=0,R=null,V=-1,v=null,E=new ae,F=new ae,W=null,it=new Lt(0),L=0,U=e.width,H=e.height,q=1,X=null,G=null,J=new ae(0,0,U,H),Q=new ae(0,0,U,H),lt=!1,z=new fs,Z=!1,ot=!1,bt=null,dt=new oe,gt=new ct,At=new T,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return R===null?q:1}let D=i;function se(b,I){for(let O=0;O<b.length;O++){let B=b[O],N=e.getContext(B,I);if(N!==null)return N}return null}try{let b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),D=se(I,b),D===null)throw se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,Rt,yt,le,Bt,S,y,k,tt,j,et,vt,ht,pt,Tt,zt,K,Zt,Xt,It,St,mt,kt,qt;function ce(){xt=new yp(D),Rt=new fp(D,xt,t),xt.init(Rt),mt=new Km(D,xt,Rt),yt=new Jm(D,xt,Rt),le=new bp(D),Bt=new Om,S=new $m(D,xt,yt,Bt,Rt,mt,le),y=new mp(x),k=new xp(x),tt=new Cu(D,Rt),kt=new up(D,xt,tt,Rt),j=new vp(D,tt,le,kt),et=new Tp(D,j,tt,le),Xt=new wp(D,Rt,S),zt=new pp(Bt),vt=new km(x,y,k,xt,Rt,kt,zt),ht=new Qm(x,Bt),pt=new Bm,Tt=new Xm(xt,Rt),Zt=new cp(x,y,k,yt,et,f,h),K=new Zm(x,et,Rt),qt=new t0(D,le,Rt,yt),It=new dp(D,xt,le,Rt),St=new Mp(D,xt,le,Rt),le.programs=vt.programs,x.capabilities=Rt,x.extensions=xt,x.properties=Bt,x.renderLists=pt,x.shadowMap=K,x.state=yt,x.info=le}ce();let Vt=new Za(x,D);this.xr=Vt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(U,H,!1))},this.getSize=function(b){return b.set(U,H)},this.setSize=function(b,I,O=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,H=I,e.width=Math.floor(b*q),e.height=Math.floor(I*q),O===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(b,I,O){U=b,H=I,q=O,e.width=Math.floor(b*O),e.height=Math.floor(I*O),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,I,O,B){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,I,O,B),yt.viewport(E.copy(J).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,I,O,B){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,I,O,B),yt.scissor(F.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){yt.setScissorTest(lt=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(b=!0,I=!0,O=!0){let B=0;if(b){let N=!1;if(R!==null){let ut=R.texture.format;N=ut===Eh||ut===Sh||ut===bh}if(N){let ut=R.texture.type,Mt=ut===Di||ut===Ri||ut===Mo||ut===Ji||ut===vh||ut===Mh,wt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),Ht=wt.r,Dt=wt.g,Ut=wt.b;Mt?(m[0]=Ht,m[1]=Dt,m[2]=Ut,m[3]=Pt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Ht,g[1]=Dt,g[2]=Ut,g[3]=Pt,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),pt.dispose(),Tt.dispose(),Bt.dispose(),y.dispose(),k.dispose(),et.dispose(),kt.dispose(),qt.dispose(),vt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ue),Vt.removeEventListener("sessionend",ie),bt&&(bt.dispose(),bt=null),Ne.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=le.autoReset,I=K.enabled,O=K.autoUpdate,B=K.needsUpdate,N=K.type;ce(),le.autoReset=b,K.enabled=I,K.autoUpdate=O,K.needsUpdate=B,K.type=N}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){let I=b.target;I.removeEventListener("dispose",at),Ct(I)}function Ct(b){Et(b),Bt.remove(b)}function Et(b){let I=Bt.get(b).programs;I!==void 0&&(I.forEach(function(O){vt.releaseProgram(O)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,O,B,N,ut){I===null&&(I=_t);let Mt=N.isMesh&&N.matrixWorld.determinant()<0,wt=ac(b,I,O,B,N);yt.setMaterial(B,Mt);let Pt=O.index,Ht=1;if(B.wireframe===!0){if(Pt=j.getWireframeAttribute(O),Pt===void 0)return;Ht=2}let Dt=O.drawRange,Ut=O.attributes.position,de=Dt.start*Ht,Ve=(Dt.start+Dt.count)*Ht;ut!==null&&(de=Math.max(de,ut.start*Ht),Ve=Math.min(Ve,(ut.start+ut.count)*Ht)),Pt!==null?(de=Math.max(de,0),Ve=Math.min(Ve,Pt.count)):Ut!=null&&(de=Math.max(de,0),Ve=Math.min(Ve,Ut.count));let ve=Ve-de;if(ve<0||ve===1/0)return;kt.setup(N,B,wt,O,Pt);let hi,he=It;if(Pt!==null&&(hi=tt.get(Pt),he=St,he.setIndex(hi)),N.isMesh)B.wireframe===!0?(yt.setLineWidth(B.wireframeLinewidth*Ft()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(N.isLine){let Gt=B.linewidth;Gt===void 0&&(Gt=1),yt.setLineWidth(Gt*Ft()),N.isLineSegments?he.setMode(D.LINES):N.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else N.isPoints?he.setMode(D.POINTS):N.isSprite&&he.setMode(D.TRIANGLES);if(N.isBatchedMesh)he.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)he.renderInstances(de,ve,N.count);else if(O.isInstancedBufferGeometry){let Gt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Br=Math.min(O.instanceCount,Gt);he.renderInstances(de,ve,Br)}else he.render(de,ve)};function te(b,I,O){b.transparent===!0&&b.side===Be&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,bs(b,I,O),b.side=Ni,b.needsUpdate=!0,bs(b,I,O),b.side=Be):bs(b,I,O)}this.compile=function(b,I,O=null){O===null&&(O=b),p=Tt.get(O),p.init(),M.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);let B=new Set;return b.traverse(function(N){let ut=N.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){let wt=ut[Mt];te(wt,O,N),B.add(wt)}else te(ut,O,N),B.add(ut)}),M.pop(),p=null,B},this.compileAsync=function(b,I,O=null){let B=this.compile(b,I,O);return new Promise(N=>{function ut(){if(B.forEach(function(Mt){Bt.get(Mt).currentProgram.isReady()&&B.delete(Mt)}),B.size===0){N(b);return}setTimeout(ut,10)}xt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ee=null;function ye(b){ee&&ee(b)}function Ue(){Ne.stop()}function ie(){Ne.start()}let Ne=new Ih;Ne.setAnimationLoop(ye),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(b){ee=b,Vt.setAnimationLoop(b),b===null?Ne.stop():Ne.start()},Vt.addEventListener("sessionstart",Ue),Vt.addEventListener("sessionend",ie),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(I),I=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,R),p=Tt.get(b,M.length),p.init(),M.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),z.setFromProjectionMatrix(dt),ot=this.localClippingEnabled,Z=zt.init(this.clippingPlanes,ot),_=pt.get(b,d.length),_.init(),d.push(_),si(b,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,G),this.info.render.frame++,Z===!0&&zt.beginShadows();let O=p.state.shadowsArray;if(K.render(O,b,I),Z===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(_,b),p.setupLights(x._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let N=0,ut=B.length;N<ut;N++){let Mt=B[N];No(_,b,Mt,Mt.viewport)}}else No(_,b,I);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,I),kt.resetDefaultState(),V=-1,v=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function si(b,I,O,B){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){B&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);let Mt=et.update(b),wt=b.material;wt.visible&&_.push(b,Mt,wt,O,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){let Mt=et.update(b),wt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),At.copy(Mt.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(wt)){let Pt=Mt.groups;for(let Ht=0,Dt=Pt.length;Ht<Dt;Ht++){let Ut=Pt[Ht],de=wt[Ut.materialIndex];de&&de.visible&&_.push(b,Mt,de,O,At.z,Ut)}}else wt.visible&&_.push(b,Mt,wt,O,At.z,null)}}let ut=b.children;for(let Mt=0,wt=ut.length;Mt<wt;Mt++)si(ut[Mt],I,O,B)}function No(b,I,O,B){let N=b.opaque,ut=b.transmissive,Mt=b.transparent;p.setupLightsView(O),Z===!0&&zt.setGlobalState(x.clippingPlanes,O),ut.length>0&&rc(N,ut,I,O),B&&yt.viewport(E.copy(B)),N.length>0&&Ms(N,I,O),ut.length>0&&Ms(ut,I,O),Mt.length>0&&Ms(Mt,I,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function rc(b,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ut=Rt.isWebGL2;bt===null&&(bt=new vi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ds:Di,minFilter:us,samples:ut?4:0})),x.getDrawingBufferSize(gt),ut?bt.setSize(gt.x,gt.y):bt.setSize(Ua(gt.x),Ua(gt.y));let Mt=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(it),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let wt=x.toneMapping;x.toneMapping=Ii,Ms(b,O,B),S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt);let Pt=!1;for(let Ht=0,Dt=I.length;Ht<Dt;Ht++){let Ut=I[Ht],de=Ut.object,Ve=Ut.geometry,ve=Ut.material,hi=Ut.group;if(ve.side===Be&&de.layers.test(B.layers)){let he=ve.side;ve.side=Ie,ve.needsUpdate=!0,ko(de,O,B,Ve,ve,hi),ve.side=he,ve.needsUpdate=!0,Pt=!0}}Pt===!0&&(S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt)),x.setRenderTarget(Mt),x.setClearColor(it,L),x.toneMapping=wt}function Ms(b,I,O){let B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ut=b.length;N<ut;N++){let Mt=b[N],wt=Mt.object,Pt=Mt.geometry,Ht=B===null?Mt.material:B,Dt=Mt.group;wt.layers.test(O.layers)&&ko(wt,I,O,Pt,Ht,Dt)}}function ko(b,I,O,B,N,ut){b.onBeforeRender(x,I,O,B,N,ut),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,I,O,B,b,ut),N.transparent===!0&&N.side===Be&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,x.renderBufferDirect(O,I,B,N,b,ut),N.side=Ni,N.needsUpdate=!0,x.renderBufferDirect(O,I,B,N,b,ut),N.side=Be):x.renderBufferDirect(O,I,B,N,b,ut),b.onAfterRender(x,I,O,B,N,ut)}function bs(b,I,O){I.isScene!==!0&&(I=_t);let B=Bt.get(b),N=p.state.lights,ut=p.state.shadowsArray,Mt=N.state.version,wt=vt.getParameters(b,N.state,ut,I,O),Pt=vt.getProgramCacheKey(wt),Ht=B.programs;B.environment=b.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||B.environment),Ht===void 0&&(b.addEventListener("dispose",at),Ht=new Map,B.programs=Ht);let Dt=Ht.get(Pt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===Mt)return Fo(b,wt),Dt}else wt.uniforms=vt.getUniforms(b),b.onBuild(O,wt,x),b.onBeforeCompile(wt,x),Dt=vt.acquireProgram(wt,Pt),Ht.set(Pt,Dt),B.uniforms=wt.uniforms;let Ut=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=zt.uniform),Fo(b,wt),B.needsLights=lc(b),B.lightsStateVersion=Mt,B.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function Oo(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Cn.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Fo(b,I){let O=Bt.get(b);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ac(b,I,O,B,N){I.isScene!==!0&&(I=_t),S.resetTextureUnits();let ut=I.fog,Mt=B.isMeshStandardMaterial?I.environment:null,wt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yi,Pt=(B.isMeshStandardMaterial?k:y).get(B.envMap||Mt),Ht=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Dt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ut=!!O.morphAttributes.position,de=!!O.morphAttributes.normal,Ve=!!O.morphAttributes.color,ve=Ii;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ve=x.toneMapping);let hi=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=hi!==void 0?hi.length:0,Gt=Bt.get(B),Br=p.state.lights;if(Z===!0&&(ot===!0||b!==v)){let Xe=b===v&&B.id===V;zt.setState(B,b,Xe)}let ue=!1;B.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Br.state.version||Gt.outputColorSpace!==wt||N.isBatchedMesh&&Gt.batching===!1||!N.isBatchedMesh&&Gt.batching===!0||N.isInstancedMesh&&Gt.instancing===!1||!N.isInstancedMesh&&Gt.instancing===!0||N.isSkinnedMesh&&Gt.skinning===!1||!N.isSkinnedMesh&&Gt.skinning===!0||N.isInstancedMesh&&Gt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Gt.instancingColor===!1&&N.instanceColor!==null||Gt.envMap!==Pt||B.fog===!0&&Gt.fog!==ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==zt.numPlanes||Gt.numIntersection!==zt.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Dt||Gt.morphTargets!==Ut||Gt.morphNormals!==de||Gt.morphColors!==Ve||Gt.toneMapping!==ve||Rt.isWebGL2===!0&&Gt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Gt.__version=B.version);let Bi=Gt.currentProgram;ue===!0&&(Bi=bs(B,I,N));let Bo=!1,Kn=!1,zr=!1,Re=Bi.getUniforms(),zi=Gt.uniforms;if(yt.useProgram(Bi.program)&&(Bo=!0,Kn=!0,zr=!0),B.id!==V&&(V=B.id,Kn=!0),Bo||v!==b){Re.setValue(D,"projectionMatrix",b.projectionMatrix),Re.setValue(D,"viewMatrix",b.matrixWorldInverse);let Xe=Re.map.cameraPosition;Xe!==void 0&&Xe.setValue(D,At.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Re.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Kn=!0,zr=!0)}if(N.isSkinnedMesh){Re.setOptional(D,N,"bindMatrix"),Re.setOptional(D,N,"bindMatrixInverse");let Xe=N.skeleton;Xe&&(Rt.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Re.setValue(D,"boneTexture",Xe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Re.setOptional(D,N,"batchingTexture"),Re.setValue(D,"batchingTexture",N._matricesTexture,S));let Hr=O.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&Rt.isWebGL2===!0)&&Xt.update(N,O,Bi),(Kn||Gt.receiveShadow!==N.receiveShadow)&&(Gt.receiveShadow=N.receiveShadow,Re.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zi.envMap.value=Pt,zi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Kn&&(Re.setValue(D,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&oc(zi,zr),ut&&B.fog===!0&&ht.refreshFogUniforms(zi,ut),ht.refreshMaterialUniforms(zi,B,q,H,bt),Cn.upload(D,Oo(Gt),zi,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cn.upload(D,Oo(Gt),zi,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Re.setValue(D,"center",N.center),Re.setValue(D,"modelViewMatrix",N.modelViewMatrix),Re.setValue(D,"normalMatrix",N.normalMatrix),Re.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Xe=B.uniformsGroups;for(let Vr=0,hc=Xe.length;Vr<hc;Vr++)if(Rt.isWebGL2){let zo=Xe[Vr];qt.update(zo,Bi),qt.bind(zo,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function oc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function lc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,I,O){Bt.get(b.texture).__webglTexture=I,Bt.get(b.depthTexture).__webglTexture=O;let B=Bt.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){let O=Bt.get(b);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,O=0){R=b,P=I,A=O;let B=!0,N=null,ut=!1,Mt=!1;if(b){let Pt=Bt.get(b);Pt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Pt.__webglFramebuffer===void 0?S.setupRenderTarget(b):Pt.__hasExternalTextures&&S.rebindTextures(b,Bt.get(b.texture).__webglTexture,Bt.get(b.depthTexture).__webglTexture);let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);let Dt=Bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?N=Dt[I][O]:N=Dt[I],ut=!0):Rt.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?N=Bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[O]:N=Dt,E.copy(b.viewport),F.copy(b.scissor),W=b.scissorTest}else E.copy(J).multiplyScalar(q).floor(),F.copy(Q).multiplyScalar(q).floor(),W=lt;if(yt.bindFramebuffer(D.FRAMEBUFFER,N)&&Rt.drawBuffers&&B&&yt.drawBuffers(b,N),yt.viewport(E),yt.scissor(F),yt.setScissorTest(W),ut){let Pt=Bt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,O)}else if(Mt){let Pt=Bt.get(b.texture),Ht=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,O||0,Ht)}V=-1},this.readRenderTargetPixels=function(b,I,O,B,N,ut,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){yt.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Pt=b.texture,Ht=Pt.format,Dt=Pt.type;if(Ht!==ei&&mt.convert(Ht)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Dt===ds&&(xt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Dt!==Di&&mt.convert(Dt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===Ci&&(Rt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-B&&O>=0&&O<=b.height-N&&D.readPixels(I,O,B,N,mt.convert(Ht),mt.convert(Dt),ut)}finally{let Pt=R!==null?Bt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,I,O=0){let B=Math.pow(2,-O),N=Math.floor(I.image.width*B),ut=Math.floor(I.image.height*B);S.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,b.x,b.y,N,ut),yt.unbindTexture()},this.copyTextureToTexture=function(b,I,O,B=0){let N=I.image.width,ut=I.image.height,Mt=mt.convert(O.format),wt=mt.convert(O.type);S.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,b.x,b.y,N,ut,Mt,wt,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Mt,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,b.x,b.y,Mt,wt,I.image),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,O,B,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ut=b.max.x-b.min.x+1,Mt=b.max.y-b.min.y+1,wt=b.max.z-b.min.z+1,Pt=mt.convert(B.format),Ht=mt.convert(B.type),Dt;if(B.isData3DTexture)S.setTexture3D(B,0),Dt=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Dt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Ut=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ve=D.getParameter(D.UNPACK_SKIP_PIXELS),ve=D.getParameter(D.UNPACK_SKIP_ROWS),hi=D.getParameter(D.UNPACK_SKIP_IMAGES),he=O.isCompressedTexture?O.mipmaps[N]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,b.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,b.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,b.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(Dt,N,I.x,I.y,I.z,ut,Mt,wt,Pt,Ht,he.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Dt,N,I.x,I.y,I.z,ut,Mt,wt,Pt,he.data)):D.texSubImage3D(Dt,N,I.x,I.y,I.z,ut,Mt,wt,Pt,Ht,he),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hi),N===0&&B.generateMipmaps&&D.generateMipmap(Dt),yt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,yt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bo?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?Ki:Th}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ki?we:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ja=class extends On{};Ja.prototype.isWebGL1Renderer=!0;var xr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},$a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new T,vr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qi=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bn,is=new T,Sn=new T,En=new T,wn=new ct,ns=new ct,Fh=new oe,Xs=new T,ss=new T,qs=new T,oh=new ct,va=new ct,lh=new ct,Fn=class extends Ae{constructor(t=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",bn===void 0){bn=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $a(e,5);bn.setIndex([0,1,2,0,2,3]),bn.setAttribute("position",new vr(i,3,0,!1)),bn.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=bn,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sn.setFromMatrixScale(this.matrixWorld),Fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),En.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sn.multiplyScalar(-En.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Ys(Xs.set(-.5,-.5,0),En,o,Sn,n,r),Ys(ss.set(.5,-.5,0),En,o,Sn,n,r),Ys(qs.set(.5,.5,0),En,o,Sn,n,r),oh.set(0,0),va.set(1,0),lh.set(1,1);let a=t.ray.intersectTriangle(Xs,ss,qs,!1,is);if(a===null&&(Ys(ss.set(-.5,.5,0),En,o,Sn,n,r),va.set(0,1),a=t.ray.intersectTriangle(Xs,qs,ss,!1,is),a===null))return;let h=t.ray.origin.distanceTo(is);h<t.near||h>t.far||e.push({distance:h,point:is.clone(),uv:Zi.getInterpolation(is,Xs,ss,qs,oh,va,lh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ys(s,t,e,i,n,r){wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ns.x=r*wn.x-n*wn.y,ns.y=n*wn.x+r*wn.y):ns.copy(wn),s.copy(t),s.x+=ns.x,s.y+=ns.y,s.applyMatrix4(Fh)}var Bn=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hh=new oe,Ka=new hr,Zs=new Un,Js=new T,ms=class extends Ae{constructor(t=new be,e=new Bn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(n),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;hh.copy(n).invert(),Ka.copy(t.ray).applyMatrix4(hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let p=l.getX(g);Js.fromBufferAttribute(u,p),ch(Js,p,h,n,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Js.fromBufferAttribute(u,g),ch(Js,g,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ch(s,t,e,i,n,r,o){let a=Ka.distanceSqToPoint(s);if(a<e){let h=new T;Ka.closestPointToPoint(s,h),h.applyMatrix4(i);let l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:t,face:null,object:o})}}var zn=class extends Je{constructor(t,e,i,n,r,o,a,h,l){super(t,e,i,n,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$e=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,h=r-1,l;for(;a<=h;)if(n=Math.floor(a+(h-a)/2),l=i[n]-o,l<0)a=n+1;else if(l>0)h=n-1;else{h=n;break}if(n=h,i[n]===o)return n/(r-1);let c=i[n],f=i[n+1]-c,m=(o-c)/f;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),h=e||(o.isVector2?new ct:new T);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,n=[],r=[],o=[],a=new T,h=new oe;for(let m=0;m<=t;m++){let g=m/t;n[m]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(h.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(Te(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(h.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gs=class extends $e{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e){let i=e||new ct,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,m=l-this.aY;h=f*c-m*u+this.aX,l=f*u+m*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends gs{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eo(){let s=0,t=0,e=0,i=0;function n(r,o,a,h){s=r,t=a,e=-3*r+3*o-2*a-h,i=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,l){n(o,a,l*(a-r),l*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,l,c,u){let f=(o-r)/l-(a-r)/(l+c)+(a-o)/c,m=(a-o)/c-(h-o)/(c+u)+(h-a)/u;f*=c,m*=c,n(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var $s=new T,Ma=new Eo,ba=new Eo,Sa=new Eo,Qa=class extends $e{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new T){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let l,c;this.closed||a>0?l=n[(a-1)%r]:($s.subVectors(n[0],n[1]).add(n[0]),l=$s);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:($s.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=$s),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(c),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ma.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,g,_,p),ba.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,g,_,p),Sa.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,g,_,p)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),ba.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Sa.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return i.set(Ma.calc(h),ba.calc(h),Sa.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new T().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uh(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,h=s*a;return(2*e-2*i+r+o)*h+(-3*e+3*i-2*r-o)*a+r*s+e}function e0(s,t){let e=1-s;return e*e*t}function i0(s,t){return 2*(1-s)*s*t}function n0(s,t){return s*s*t}function ls(s,t,e,i){return e0(s,t)+i0(s,e)+n0(s,i)}function s0(s,t){let e=1-s;return e*e*e*t}function r0(s,t){let e=1-s;return 3*e*e*s*t}function a0(s,t){return 3*(1-s)*s*s*t}function o0(s,t){return s*s*s*t}function hs(s,t,e,i,n){return s0(s,t)+r0(s,e)+a0(s,i)+o0(s,n)}var Mr=class extends $e{constructor(t=new ct,e=new ct,i=new ct,n=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hs(t,n.x,r.x,o.x,a.x),hs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends $e{constructor(t=new T,e=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new T){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hs(t,n.x,r.x,o.x,a.x),hs(t,n.y,r.y,o.y,a.y),hs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends $e{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends $e{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends $e{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(ls(t,n.x,r.x,o.x),ls(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends $e{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(ls(t,n.x,r.x,o.x),ls(t,n.y,r.y,o.y),ls(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends $e{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,h=n[o===0?o:o-1],l=n[o],c=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(uh(a,h.x,l.x,c.x,u.x),uh(a,h.y,l.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ct().fromArray(n))}return this}},dh=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Qa,CubicBezierCurve:Mr,CubicBezierCurve3:to,EllipseCurve:gs,LineCurve:br,LineCurve3:eo,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:io,SplineCurve:Er}),no=class extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){let c=h[l];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new dh[n.type]().fromJSON(n))}return this}},so=class extends no{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new br(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Sr(this.currentPoint.clone(),new ct(t,e),new ct(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Mr(this.currentPoint.clone(),new ct(t,e),new ct(i,n),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Er(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,h){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,r,o,a,h),this}absellipse(t,e,i,n,r,o,a,h){let l=new gs(t,e,i,n,r,o,a,h);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ro=class s extends be{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Te(n,0,Math.PI*2);let r=[],o=[],a=[],h=[],l=[],c=1/e,u=new T,f=new ct,m=new T,g=new T,_=new T,p=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,m.x=d*1,m.y=-p,m.z=d*0,_.copy(m),m.normalize(),h.push(m.x,m.y,m.z);break;case t.length-1:h.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,m.x=d*1,m.y=-p,m.z=d*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),h.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=e;M++){let x=i+M*c*n,w=Math.sin(x),P=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*w,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),f.x=M/e,f.y=A/(t.length-1),a.push(f.x,f.y);let R=h[3*A+0]*w,V=h[3*A+1],v=h[3*A+0]*P;l.push(R,V,v)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let w=x+M*t.length,P=w,A=w+t.length,R=w+t.length+1,V=w+1;r.push(P,A,V),r.push(R,V,A)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Hn=class s extends ro{constructor(t=1,e=1,i=4,n=8){let r=new so;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},wr=class s extends be{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],h=[],l=new T,c=new ct;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let m=i+u/e*n;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Oi=class s extends be{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],u=[],f=[],m=[],g=0,_=[],p=i/2,d=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(m,2));function M(){let w=new T,P=new T,A=0,R=(e-t)/i;for(let V=0;V<=r;V++){let v=[],E=V/r,F=E*(e-t)+t;for(let W=0;W<=n;W++){let it=W/n,L=it*h+a,U=Math.sin(L),H=Math.cos(L);P.x=F*U,P.y=-E*i+p,P.z=F*H,u.push(P.x,P.y,P.z),w.set(U,R,H).normalize(),f.push(w.x,w.y,w.z),m.push(it,1-E),v.push(g++)}_.push(v)}for(let V=0;V<n;V++)for(let v=0;v<r;v++){let E=_[v][V],F=_[v+1][V],W=_[v+1][V+1],it=_[v][V+1];c.push(E,F,it),c.push(F,W,it),A+=6}l.addGroup(d,A,0),d+=A}function x(w){let P=g,A=new ct,R=new T,V=0,v=w===!0?t:e,E=w===!0?1:-1;for(let W=1;W<=n;W++)u.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;let F=g;for(let W=0;W<=n;W++){let L=W/n*h+a,U=Math.cos(L),H=Math.sin(L);R.x=v*H,R.y=p*E,R.z=v*U,u.push(R.x,R.y,R.z),f.push(0,E,0),A.x=U*.5+.5,A.y=H*.5*E+.5,m.push(A.x,A.y),g++}for(let W=0;W<n;W++){let it=P+W,L=F+W;w===!0?c.push(L,L+1,it):c.push(L+1,L,it),V+=3}l.addGroup(d,V,w===!0?1:2),d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vn=class s extends be{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],h=[],l=[],c=[],u=t,f=(e-t)/n,m=new T,g=new ct;for(let _=0;_<=n;_++){for(let p=0;p<=i;p++){let d=r+p/i*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),h.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let _=0;_<n;_++){let p=_*(i+1);for(let d=0;d<i;d++){let M=d+p,x=M,w=M+i+1,P=M+i+2,A=M+1;a.push(x,w,A),a.push(w,P,A)}}this.setIndex(a),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fi=class s extends be{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(o+a,Math.PI),l=0,c=[],u=new T,f=new T,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){let M=[],x=d/i,w=0;d===0&&o===0?w=.5/e:d===i&&h===Math.PI&&(w=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(n+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(n+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-x),M.push(l++)}c.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){let x=c[d][M+1],w=c[d][M],P=c[d+1][M],A=c[d+1][M+1];(d!==0||o>0)&&m.push(x,w,A),(d!==i-1||h<Math.PI)&&m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class s extends be{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],h=[],l=[],c=new T,u=new T,f=new T;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){let _=g/n*r,p=m/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(u,c).normalize(),h.push(f.x,f.y,f.z),l.push(g/n),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){let _=(n+1)*m+g-1,p=(n+1)*(m-1)+g-1,d=(n+1)*(m-1)+g,M=(n+1)*m+g;o.push(_,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fe=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ks(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function l0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Gn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends Gn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],h=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case yl:r=t,a=2*e-i;break;case vl:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case yl:o=t,h=2*i-e;break;case vl:o=1,h=i+n[1]-n[0];break;default:o=t-1,h=e}let l=(i-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(h-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(n-e),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let P=0;P!==a;++P)r[P]=d*o[c+P]+M*o[l+P]+x*o[h+P]+w*o[u+P];return r}},oo=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,c=(i-e)/(n-e),u=1-c;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[h+f]*c;return r}},lo=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ni=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case tr:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(n!==void 0&&l0(n))for(let a=0,h=n.length;a!==h;++a){let l=n[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Jr,r=t.length-1,o=1;for(let a=1;a<r;++a){let h=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(n)h=!0;else{let u=a*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[m+g]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,h=o*i,l=0;l!==i;++l)e[h+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=tr;var tn=class extends ni{};tn.prototype.ValueTypeName="bool";tn.prototype.ValueBufferType=Array;tn.prototype.DefaultInterpolation=Qs;tn.prototype.InterpolantFactoryMethodLinear=void 0;tn.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends ni{};ho.prototype.ValueTypeName="color";var co=class extends ni{};co.prototype.ValueTypeName="number";var uo=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-e)/(n-e),l=t*a;for(let c=l+a;l!==c;l+=4)ai.slerpFlat(r,0,o,l-a,o,l,h);return r}},xs=class extends ni{InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.DefaultInterpolation=tr;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends ni{};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=Qs;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends ni{};fo.prototype.ValueTypeName="vector";var po=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}},h0=new po,mo=class{constructor(t){this.manager=t!==void 0?t:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Tr=class extends ys{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new oe,fh=new T,ph=new T,Ar=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mh=new oe,rs=new T,wa=new T,go=class extends Ar{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),i.position.copy(rs),wa.copy(i.position),wa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wa),i.updateMatrixWorld(),n.makeTranslation(-rs.x,-rs.y,-rs.z),mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}},Rr=class extends ys{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new go}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_o=class extends Ar{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wn=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new _o}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wo="\\[\\]\\.:\\/",c0=new RegExp("["+wo+"]","g"),To="[^"+wo+"]",u0="[^"+wo.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",To),f0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",To),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",To),g0=new RegExp("^"+d0+f0+p0+m0+"$"),_0=["material","materials","bones","map"],xo=class{constructor(t,e,i){let n=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let e=g0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);_0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let h=i(a.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[n];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=xo;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var zh="1.0.0";var pe={maxHP:100,maxMeter:100,maxStam:100,roundTime:60,roundsToWin:2,meterOnDealt:1.1,meterOnTaken:.75,meterOnBlock:5,meterOnWhiff:0,chipRatio:.12,stamRegen:30,stamRegenDelay:.8,dashStam:14,blockStamBase:6,throwTechWindow:0,survivalHeal:38,juggleScale:.7,counterBonus:1.25},Hh={jab:{name:"\u30B8\u30E3\u30D6",dur:.36,startup:.1,active:[.1,.2],dmg:5,range:1.9,arc:75,hitstun:.34,blockstun:.2,kb:1.4,launch:null,lunge:1.3,meter:6,type:"high",chain:{punch:"jab2"},limb:"handR"},jab2:{name:"\u9023\u62F3",dur:.36,startup:.09,active:[.09,.19],dmg:6,range:2,arc:75,hitstun:.38,blockstun:.2,kb:1.8,launch:null,lunge:1.4,meter:6,type:"high",chain:{punch:"straight"},limb:"handL"},straight:{name:"\u6B63\u62F3",dur:.56,startup:.16,active:[.16,.28],dmg:10,range:2.2,arc:70,hitstun:.52,blockstun:.3,kb:4.2,launch:null,lunge:1.8,meter:9,type:"mid",chain:{},limb:"handR"},kick:{name:"\u524D\u8E74\u308A",dur:.52,startup:.18,active:[.18,.3],dmg:8,range:2.4,arc:70,hitstun:.46,blockstun:.26,kb:3,launch:null,lunge:1.6,meter:8,type:"mid",chain:{kick:"kickhigh"},limb:"footR"},kickhigh:{name:"\u4E0A\u6BB5\u5EFB\u3057",dur:.62,startup:.22,active:[.22,.36],dmg:12,range:2.4,arc:65,hitstun:.6,blockstun:.34,kb:5,launch:null,lunge:1.6,meter:10,type:"high",chain:{},limb:"footL"},heavy:{name:"\u6607\u9F8D\u6483",dur:.72,startup:.26,active:[.26,.4],dmg:14,range:2.1,arc:70,hitstun:.4,blockstun:.36,kb:1.5,launch:[7,2.6],lunge:1.8,meter:11,type:"mid",chain:{},limb:"handR",launcher:!0},sweep:{name:"\u8DB3\u6255\u3044",dur:.6,startup:.22,active:[.22,.34],dmg:9,range:2.2,arc:70,hitstun:.5,blockstun:.3,kb:2,launch:null,down:!0,lunge:1.6,meter:8,type:"low",chain:{},limb:"footR"},airatk:{name:"\u7A7A\u4E2D\u62F3",dur:.44,startup:.1,active:[.1,.3],dmg:7,range:2.2,arc:90,hitstun:.4,blockstun:.24,kb:2.4,launch:null,lunge:.6,meter:7,type:"mid",chain:{},limb:"handR"},grab:{name:"\u6295\u3052",dur:.7,startup:.16,active:[.16,.3],dmg:13,range:1.8,arc:60,hitstun:0,blockstun:0,kb:0,launch:[5.5,4.5],lunge:1.5,meter:10,type:"throw",unblockable:!0,chain:{},limb:"handR"},super:{name:"\u79D8\u5965\u7FA9\u30FB\u9739\u9742\u9023\u7259",dur:1.9,startup:.45,active:[.45,1.35],dmg:8,range:3.4,arc:80,hitstun:.5,blockstun:.4,kb:1,launch:[6,5],lunge:7,meter:0,type:"mid",chain:{},limb:"handR",hits:5,hitGap:.18,cost:100,cinematic:!0}};var ge=[{id:"kagemaru",name:"\u5F71\u4E38",en:"KAGEMARU",kanji:"\u5F71",style:"\u75BE\u98A8\u5FCD\u62F3 \xB7 \u30D0\u30E9\u30F3\u30B9",desc:"\u4E07\u80FD\u578B\u3002\u901F\u3044\u9023\u6483\u3068\u5B89\u5B9A\u3057\u305F\u7ACB\u3061\u56DE\u308A\u3002",color:"#00f0ff",stats:{pow:3,spd:4,sta:3},hp:100,atk:1,def:1,spd:1,body:{h:1,bulk:1,shoulder:1},palette:{skin:15251594,top:1057594,bottom:660516,glove:16723349,accent:61695,hair:1316895,belt:61695},ai:{aggro:.55,keepRange:2.2,dashUse:.5,superUse:.6}},{id:"breaker",name:"\u525B\u5CA9",en:"GOUGAN",kanji:"\u525B",style:"\u8C6A\u7834\u5DCC\u6D41 \xB7 \u30D1\u30EF\u30FC",desc:"\u4E00\u6483\u304C\u91CD\u3044\u91CD\u91CF\u7D1A\u3002\u30AC\u30FC\u30C9\u3092\u7815\u304F\u8C6A\u8155\u3002",color:"#ff9f1c",stats:{pow:5,spd:2,sta:4},hp:112,atk:1.28,def:1.12,spd:.88,body:{h:1.06,bulk:1.35,shoulder:1.25},palette:{skin:14262383,top:4856336,bottom:2363412,glove:16765286,accent:16752412,hair:2759184,belt:16765286},ai:{aggro:.7,keepRange:1.9,dashUse:.35,superUse:.5}},{id:"hayate",name:"\u75BE\u98A8",en:"HAYATE",kanji:"\u75BE",style:"\u795E\u901F\u9023\u821E \xB7 \u30B9\u30D4\u30FC\u30C9",desc:"\u76EE\u306B\u3082\u7559\u307E\u3089\u306C\u624B\u6570\u3002\u7D19\u88C5\u7532\u306E\u66B4\u98A8\u3002",color:"#9dff57",stats:{pow:2,spd:5,sta:2},hp:90,atk:.9,def:.9,spd:1.18,body:{h:.96,bulk:.82,shoulder:.9},palette:{skin:1578e4,top:997924,bottom:663318,glove:10354519,accent:10354519,hair:3811866,belt:10354519},ai:{aggro:.75,keepRange:2,dashUse:.8,superUse:.7}},{id:"hagane",name:"\u92FC\u7259",en:"HAGANE",kanji:"\u92FC",style:"\u9244\u58C1\u92FC\u4F53 \xB7 \u30BF\u30F3\u30AF",desc:"\u5805\u7262\u306A\u8089\u4F53\u3068\u53CD\u6483\u3002\u5D29\u308C\u3056\u308B\u8981\u585E\u3002",color:"#c77dff",stats:{pow:3,spd:2,sta:5},hp:122,atk:1,def:1.3,spd:.85,body:{h:1.02,bulk:1.2,shoulder:1.15},palette:{skin:13607034,top:2759226,bottom:1445919,glove:13073919,accent:13073919,hair:1052692,belt:13073919},ai:{aggro:.4,keepRange:2.4,dashUse:.3,superUse:.55}}],nn=[{id:"neon_dojo",name:"\u9713\u88F3\u9053\u5834",en:"NEON DOJO",desc:"\u30CD\u30AA\u30F3\u77AC\u304F\u771F\u591C\u4E2D\u306E\u9053\u5834",radius:9.5,bgm:"battle1",sky:{top:329752,mid:857152,bot:2755130},fog:658724,ground:856614,accent:61695},{id:"sunset_roof",name:"\u9EC4\u660F\u5C4B\u4E0A",en:"SUNSET ROOF",desc:"\u831C\u306B\u67D3\u307E\u308B\u6C7A\u6226\u306E\u5C4B\u4E0A",radius:10.5,bgm:"battle2",sky:{top:1714796,mid:11673446,bot:16688448},fog:4858944,ground:2763317,accent:16752412},{id:"storm_ring",name:"\u96F7\u9CF4\u30EA\u30F3\u30B0",en:"STORM RING",desc:"\u5D50\u306E\u4E2D\u5FC3\u306E\u92FC\u9244\u30EA\u30F3\u30B0",radius:9,bgm:"battle1",sky:{top:131850,mid:662074,bot:1714773},fog:395800,ground:1119775,accent:10354519}],sn={easy:{name:"\u3084\u3055\u3057\u3044",react:.55,blockCh:.1,punishCh:.15,comboCh:.25,think:.45,dmgMul:.8,aggroMul:.7},normal:{name:"\u3075\u3064\u3046",react:.35,blockCh:.28,punishCh:.4,comboCh:.55,think:.3,dmgMul:1,aggroMul:1},hard:{name:"\u3064\u3088\u3044",react:.22,blockCh:.45,punishCh:.65,comboCh:.8,think:.2,dmgMul:1.1,aggroMul:1.15},master:{name:"\u9B3C\u795E",react:.12,blockCh:.6,punishCh:.85,comboCh:.95,think:.13,dmgMul:1.2,aggroMul:1.3}},Bh={vol:70,mute:!1,quality:"med",shadow:!0,shake:!0,cam:"third",diff:"normal"};function Vh(){try{let s=JSON.parse(localStorage.getItem("neon_kumite_set")||"{}");return Object.assign({},Bh,s)}catch{return Object.assign({},Bh)}}function oi(s){try{localStorage.setItem("neon_kumite_set",JSON.stringify(s))}catch{}}var Zh={py:0,lean:0,side:0,rx:0,ry:0,rz:0,spine:[0,0,0],chest:[0,0,0],head:[0,0,0],shL:[0,0,-.15],elL:[-.25],shR:[0,0,.15],elR:[-.25],legL:[0,0,.05],kneeL:[.06],legR:[0,0,-.05],kneeR:[.06],band:[.15]},Ro=Object.keys(Zh),Ao={py:-.07,lean:.07,side:0,rx:0,ry:-.25,rz:0,spine:[.1,-.12,0],chest:[.16,-.42,0],head:[.02,.38,0],shL:[-1.05,-.55,-.3],elL:[-1.85],shR:[-.85,.5,.3],elR:[-2.05],legL:[-.38,0,.09],kneeL:[.52],legR:[.3,0,-.09],kneeR:[.38],band:[.35]},$=s=>Object.assign({},Ao,s),Gh={jab:{dur:.36,keys:[[0,$({})],[.09,$({chest:[.2,-.55,0],shR:[-.7,.6,.35],lean:.03})],[.15,$({py:-.08,lean:.24,ry:-.5,chest:[.22,.55,0],head:[0,-.5,0],shR:[-1.62,-.12,.05],elR:[-.1],shL:[-1.15,-.4,-.3],legL:[-.5,0,.1],kneeL:[.6],legR:[.42,0,-.1]})],[.24,$({py:-.08,lean:.22,ry:-.45,chest:[.22,.5,0],head:[0,-.45,0],shR:[-1.55,-.12,.05],elR:[-.15],shL:[-1.15,-.4,-.3],legL:[-.5,0,.1],kneeL:[.6],legR:[.42,0,-.1]})],[.36,$({})]]},jab2:{dur:.36,keys:[[0,$({})],[.08,$({chest:[.2,.5,0],shL:[-.9,-.6,-.3],lean:.03})],[.14,$({py:-.08,lean:.24,ry:.15,chest:[.22,-1.05,0],head:[0,.85,0],shL:[-1.62,.12,-.05],elL:[-.1],legL:[-.5,0,.1],kneeL:[.6],legR:[.42,0,-.1]})],[.24,$({py:-.08,lean:.22,ry:.1,chest:[.22,-.95,0],head:[0,.8,0],shL:[-1.55,.12,-.05],elL:[-.15],legL:[-.5,0,.1],kneeL:[.6],legR:[.42,0,-.1]})],[.36,$({})]]},straight:{dur:.56,keys:[[0,$({})],[.14,$({py:-.1,lean:0,ry:-.35,chest:[.24,-.7,0],shR:[-.5,.7,.4],elR:[-2.3],legR:[.15,0,-.1]})],[.22,$({py:-.09,lean:.34,ry:-.62,chest:[.26,.62,0],head:[0,-.6,0],shR:[-1.66,-.1,0],elR:[-.06],shL:[-1.3,-.2,-.35],legL:[-.62,0,.12],kneeL:[.72],legR:[.55,0,-.12],kneeR:[.25]})],[.34,$({py:-.09,lean:.3,ry:-.55,chest:[.26,.55,0],head:[0,-.55,0],shR:[-1.6,-.1,0],elR:[-.1],shL:[-1.3,-.2,-.35],legL:[-.62,0,.12],kneeL:[.72],legR:[.55,0,-.12],kneeR:[.25]})],[.56,$({})]]},kick:{dur:.52,keys:[[0,$({})],[.16,$({py:-.14,lean:-.06,chest:[-.12,-.3,.1],legR:[-1.9,0,-.15],kneeR:[2],legL:[-.1,0,.08],kneeL:[.3],shL:[-.7,-.6,-.5],shR:[-.5,.6,.5]})],[.24,$({py:-.12,lean:.22,chest:[-.18,.35,.08],head:[0,-.3,0],legR:[-1.62,0,-.05],kneeR:[.12],legL:[-.05,0,.08],kneeL:[.25],shL:[-.5,-.7,-.7],elL:[-.6],shR:[-.3,.7,.7],elR:[-.6]})],[.34,$({py:-.12,lean:.2,chest:[-.16,.3,.08],legR:[-1.55,0,-.05],kneeR:[.18],legL:[-.05,0,.08],kneeL:[.25],shL:[-.5,-.7,-.7],elL:[-.6],shR:[-.3,.7,.7],elR:[-.6]})],[.52,$({})]]},kickhigh:{dur:.62,keys:[[0,$({})],[.2,$({py:-.16,lean:-.04,rz:.12,ry:.3,chest:[-.1,.6,0],legL:[-1.4,.4,-.9],kneeL:[1.9],legR:[.1,0,-.08],kneeR:[.3],shR:[-.6,.5,.6]})],[.29,$({py:-.15,lean:.1,rz:.3,ry:-.15,chest:[-.22,.1,.15],head:[0,.1,0],legL:[-.75,-.15,-1.5],kneeL:[.1],legR:[.05,0,-.08],kneeR:[.22],shL:[-.4,-.5,-.9],elL:[-.4],shR:[-.9,.3,.9],elR:[-.4]})],[.4,$({py:-.15,lean:.1,rz:.28,ry:-.12,chest:[-.2,.1,.15],legL:[-.7,-.15,-1.42],kneeL:[.15],legR:[.05,0,-.08],kneeR:[.22],shL:[-.4,-.5,-.9],elL:[-.4],shR:[-.9,.3,.9],elR:[-.4]})],[.62,$({})]]},heavy:{dur:.72,keys:[[0,$({})],[.24,$({py:-.3,lean:.1,chest:[.45,-.5,0],head:[.2,.4,0],shR:[.7,.3,.2],elR:[-.9],legL:[-.7,0,.12],kneeL:[1],legR:[.5,0,-.12],kneeR:[.8]})],[.34,$({py:.14,lean:.16,chest:[-.34,.4,0],head:[-.25,-.35,0],shR:[-2.35,-.1,0],elR:[-.35],shL:[-1.6,.2,-.4],elL:[-.5],legL:[-.3,0,.1],kneeL:[.35],legR:[.25,0,-.1],kneeR:[.2]})],[.48,$({py:.05,lean:.14,chest:[-.28,.35,0],head:[-.2,-.3,0],shR:[-2.2,-.1,0],elR:[-.4],shL:[-1.5,.2,-.4],elL:[-.5],legL:[-.3,0,.1],kneeL:[.4],legR:[.25,0,-.1],kneeR:[.25]})],[.72,$({})]]},sweep:{dur:.6,keys:[[0,$({})],[.2,$({py:-.34,lean:.05,ry:.5,chest:[.4,1.1,0],legR:[-.4,0,-1.1],kneeR:[.3],legL:[-.5,0,.1],kneeL:[1.1],shL:[-.6,-.3,-.6],shR:[-.6,.3,.6]})],[.3,$({py:-.36,lean:.12,ry:-.9,chest:[.42,-1.2,0],head:[.1,.9,0],legR:[-.5,0,-1.35],kneeR:[.12],legL:[-.45,0,.1],kneeL:[1.15],shL:[-.4,-.8,-.7],elL:[-.3],shR:[-.4,.8,.7],elR:[-.3]})],[.42,$({py:-.33,lean:.1,ry:-.7,chest:[.4,-1,0],legR:[-.45,0,-1.25],kneeR:[.15],legL:[-.45,0,.1],kneeL:[1.1],shL:[-.4,-.8,-.7],elL:[-.3],shR:[-.4,.8,.7],elR:[-.3]})],[.6,$({})]]},airatk:{dur:.44,keys:[[0,$({py:-.05,legL:[-.8,0,.1],kneeL:[1.2],legR:[.4,0,-.1],kneeR:[1.1]})],[.14,$({py:-.02,lean:.25,chest:[.35,.5,0],head:[.15,-.4,0],shR:[-1.7,-.1,0],elR:[-.1],legL:[-.9,0,.1],kneeL:[1.3],legR:[.5,0,-.1],kneeR:[1.2]})],[.3,$({py:-.02,lean:.22,chest:[.32,.45,0],shR:[-1.6,-.1,0],elR:[-.15],legL:[-.9,0,.1],kneeL:[1.3],legR:[.5,0,-.1],kneeR:[1.2]})],[.44,$({py:-.05,legL:[-.8,0,.1],kneeL:[1.2],legR:[.4,0,-.1],kneeR:[1.1]})]]},grab:{dur:.7,keys:[[0,$({})],[.18,$({py:-.1,lean:.32,ry:-.2,chest:[.3,-.2,0],shL:[-1.55,-.35,-.1],elL:[-.45],shR:[-1.55,.35,.1],elR:[-.45],legL:[-.55,0,.1],kneeL:[.65],legR:[.45,0,-.1],kneeR:[.3]})],[.4,$({py:-.1,lean:.3,ry:-.2,chest:[.3,-.2,0],shL:[-1.5,-.35,-.1],elL:[-.5],shR:[-1.5,.35,.1],elR:[-.5],legL:[-.55,0,.1],kneeL:[.65],legR:[.45,0,-.1],kneeR:[.3]})],[.7,$({})]]},grabbed:{dur:.7,keys:[[0,$({lean:-.1,chest:[-.2,0,0],head:[-.2,0,0]})],[.25,{py:.45,lean:-.15,side:0,rx:0,ry:0,rz:.15,spine:[-.3,0,0],chest:[-.45,0,.1],head:[-.5,0,0],shL:[-2.2,0,-.9],elL:[-.4],shR:[-2.2,0,.9],elR:[-.4],legL:[-.5,0,.25],kneeL:[.9],legR:[.3,0,-.25],kneeR:[.7],band:[.8]}],[.7,{py:.3,lean:-.2,side:0,rx:0,ry:0,rz:.2,spine:[-.35,0,0],chest:[-.5,0,.1],head:[-.5,0,0],shL:[-2.4,0,-1],elL:[-.3],shR:[-2.4,0,1],elR:[-.3],legL:[-.6,0,.3],kneeL:[1],legR:[.4,0,-.3],kneeR:[.8],band:[1]}]]},super:{dur:1.9,keys:[[0,$({})],[.3,$({py:-.24,lean:.05,chest:[.35,-.4,0],shL:[.6,-.3,-.4],elL:[-.7],shR:[.6,.3,.4],elR:[-.7],legL:[-.65,0,.12],kneeL:[.95],legR:[.5,0,-.12],kneeR:[.75]})],[.45,$({py:-.1,lean:.55,chest:[.35,-.3,0],shL:[.9,-.2,-.5],elL:[-.3],shR:[.9,.2,.5],elR:[-.3],legL:[-1.1,0,.14],kneeL:[.5],legR:[.9,0,-.14],kneeR:[.9]})],[.6,$({py:-.08,lean:.3,ry:-.5,chest:[.25,.55,0],shR:[-1.66,-.1,0],elR:[-.08],legL:[-.6,0,.12],kneeL:[.7],legR:[.5,0,-.12],kneeR:[.3]})],[.78,$({py:-.08,lean:.3,ry:.1,chest:[.25,-1,0],shL:[-1.66,.1,0],elL:[-.08],legL:[-.6,0,.12],kneeL:[.7],legR:[.5,0,-.12],kneeR:[.3]})],[.96,$({py:-.1,lean:.28,ry:-.5,chest:[.28,.6,0],shR:[-1.66,-.1,0],elR:[-.08],legR:[-1.7,0,-.1],kneeR:[.4],legL:[-.2,0,.1],kneeL:[.4]})],[1.14,$({py:.1,lean:.18,chest:[-.3,.35,0],shR:[-2.3,-.1,0],elR:[-.3],shL:[-1.5,.2,-.4],legL:[-.3,0,.1],kneeL:[.35],legR:[.25,0,-.1],kneeR:[.2]})],[1.45,$({py:-.12,lean:.35,ry:-.6,chest:[.3,.65,0],shR:[-1.7,-.1,0],elR:[-.05],legL:[-.7,0,.14],kneeL:[.8],legR:[.6,0,-.14],kneeR:[.3]})],[1.9,$({})]]},block:{dur:.3,loop:!0,keys:[[0,$({})],[.12,$({py:-.13,lean:.02,chest:[.28,-.3,0],head:[.18,.25,0],shL:[-1.25,-.95,-.15],elL:[-1.7],shR:[-1.25,.95,.15],elR:[-1.7],legL:[-.5,0,.1],kneeL:[.65],legR:[.4,0,-.1],kneeR:[.5]})],[.3,$({py:-.13,lean:.02,chest:[.28,-.3,0],head:[.18,.25,0],shL:[-1.25,-.95,-.15],elL:[-1.7],shR:[-1.25,.95,.15],elR:[-1.7],legL:[-.5,0,.1],kneeL:[.65],legR:[.4,0,-.1],kneeR:[.5]})]]},parry:{dur:.5,keys:[[0,$({})],[.1,$({py:-.08,lean:.18,chest:[.25,-.9,0],shR:[-1.4,1.1,.3],elR:[-.9],shL:[-1.2,-.5,-.3],legL:[-.5,0,.1],kneeL:[.6],legR:[.4,0,-.1]})],[.3,$({py:-.08,lean:.16,chest:[.25,-.8,0],shR:[-1.3,1,.3],elR:[-.9],shL:[-1.2,-.5,-.3],legL:[-.5,0,.1],kneeL:[.6],legR:[.4,0,-.1]})],[.5,$({})]]},hitH:{dur:.4,keys:[[0,$({})],[.08,$({py:-.05,lean:-.3,chest:[-.42,.1,.08],head:[-.55,0,0],shL:[-.5,-.6,-.6],elL:[-1],shR:[-.4,.6,.6],elR:[-1],legL:[-.2,0,.08],kneeL:[.35],legR:[.45,0,-.1],kneeR:[.25]})],[.24,$({py:-.07,lean:-.22,chest:[-.3,.08,.06],head:[-.4,0,0],shL:[-.7,-.6,-.5],elL:[-1.3],shR:[-.6,.6,.5],elR:[-1.3],legL:[-.25,0,.08],kneeL:[.4],legR:[.4,0,-.1],kneeR:[.3]})],[.4,$({})]]},hitL:{dur:.45,keys:[[0,$({})],[.09,$({py:-.24,lean:.12,chest:[.62,-.2,0],head:[.45,.2,0],shL:[-.7,-.7,-.3],elL:[-1.2],shR:[-.7,.7,.3],elR:[-1.2],legL:[-.45,0,.1],kneeL:[.7],legR:[.35,0,-.1],kneeR:[.55]})],[.28,$({py:-.18,lean:.08,chest:[.45,-.2,0],head:[.3,.2,0],shL:[-.9,-.6,-.3],elL:[-1.5],shR:[-.8,.6,.3],elR:[-1.6],legL:[-.4,0,.1],kneeL:[.6],legR:[.32,0,-.1],kneeR:[.45]})],[.45,$({})]]},launch:{dur:.6,loop:!0,keys:[[0,{py:.1,lean:-.1,side:0,rx:0,ry:0,rz:.1,spine:[-.4,0,0],chest:[-.55,0,.1],head:[-.5,0,0],shL:[-2.4,0,-1.1],elL:[-.3],shR:[-2.4,0,1.1],elR:[-.3],legL:[-.7,0,.3],kneeL:[1.1],legR:[.5,0,-.3],kneeR:[.9],band:[1.2]}],[.3,{py:.15,lean:-.12,side:0,rx:0,ry:0,rz:-.1,spine:[-.45,0,0],chest:[-.6,0,-.1],head:[-.55,0,0],shL:[-2.6,0,-.9],elL:[-.25],shR:[-2.2,0,1.2],elR:[-.35],legL:[-.5,0,.35],kneeL:[1],legR:[.7,0,-.25],kneeR:[1],band:[1.4]}],[.6,{py:.1,lean:-.1,side:0,rx:0,ry:0,rz:.1,spine:[-.4,0,0],chest:[-.55,0,.1],head:[-.5,0,0],shL:[-2.4,0,-1.1],elL:[-.3],shR:[-2.4,0,1.1],elR:[-.3],legL:[-.7,0,.3],kneeL:[1.1],legR:[.5,0,-.3],kneeR:[.9],band:[1.2]}]]},down:{dur:.5,loop:!0,keys:[[0,{py:-.72,lean:-.35,side:0,rx:0,ry:0,rz:.06,spine:[-1.05,0,0],chest:[-1.15,0,0],head:[-.35,.3,0],shL:[-.3,0,-1.15],elL:[-.35],shR:[-.3,0,1.15],elR:[-.35],legL:[-1.35,0,.18],kneeL:[.15],legR:[-1.25,0,-.18],kneeR:[.2],band:[0]}],[.5,{py:-.72,lean:-.35,side:0,rx:0,ry:0,rz:.06,spine:[-1.05,0,0],chest:[-1.15,0,0],head:[-.35,.3,0],shL:[-.3,0,-1.15],elL:[-.35],shR:[-.3,0,1.15],elR:[-.35],legL:[-1.35,0,.18],kneeL:[.15],legR:[-1.25,0,-.18],kneeR:[.2],band:[0]}]]},wakeup:{dur:.5,keys:[[0,{py:-.72,lean:-.35,side:0,rx:0,ry:0,rz:.06,spine:[-1.05,0,0],chest:[-1.15,0,0],head:[-.35,.3,0],shL:[-.3,0,-1.15],elL:[-.35],shR:[-.3,0,1.15],elR:[-.35],legL:[-1.35,0,.18],kneeL:[.15],legR:[-1.25,0,-.18],kneeR:[.2],band:[0]}],[.25,$({py:-.34,lean:0,chest:[.5,-.3,0],shL:[-.8,-.5,-.5],elL:[-1],shR:[-.8,.5,.5],elR:[-1],legL:[-.6,0,.15],kneeL:[1.2],legR:[.3,0,-.15],kneeR:[1.1]})],[.5,$({})]]},ko:{dur:1.2,loop:!0,keys:[[0,{py:-.7,lean:-.3,side:0,rx:0,ry:0,rz:.35,spine:[-1,0,.1],chest:[-1.1,0,.15],head:[-.3,.7,.4],shL:[-.2,0,-1.5],elL:[-.2],shR:[-.5,0,.7],elR:[-.5],legL:[-1.4,0,.3],kneeL:[.1],legR:[-1.1,0,-.35],kneeR:[.3],band:[-.2]}],[1.2,{py:-.7,lean:-.3,side:0,rx:0,ry:0,rz:.35,spine:[-1,0,.1],chest:[-1.1,0,.15],head:[-.3,.7,.4],shL:[-.2,0,-1.5],elL:[-.2],shR:[-.5,0,.7],elR:[-.5],legL:[-1.4,0,.3],kneeL:[.1],legR:[-1.1,0,-.35],kneeR:[.3],band:[-.2]}]]},win:{dur:1.1,loop:!0,keys:[[0,$({py:-.02,lean:0,ry:0,chest:[-.12,0,0],head:[-.1,0,0],shR:[-2.9,0,.15],elR:[-.15],shL:[-.3,0,-.3],elL:[-.8],legL:[-.15,0,.1],kneeL:[.15],legR:[.15,0,-.1],kneeR:[.15]})],[.28,$({py:.1,lean:0,ry:0,chest:[-.2,0,0],head:[-.18,0,0],shR:[-3,0,.15],elR:[-.1],shL:[-.5,0,-.4],elL:[-1],legL:[-.2,0,.1],kneeL:[.3],legR:[.2,0,-.1],kneeR:[.3]})],[.55,$({py:-.02,lean:0,ry:0,chest:[-.12,0,0],head:[-.1,0,0],shR:[-2.9,0,.15],elR:[-.15],shL:[-.3,0,-.3],elL:[-.8],legL:[-.15,0,.1],kneeL:[.15],legR:[.15,0,-.1],kneeR:[.15]})],[.82,$({py:.1,lean:0,ry:0,chest:[-.2,0,0],head:[-.18,0,0],shR:[-3,0,.15],elR:[-.1],shL:[-.5,0,-.4],elL:[-1],legL:[-.2,0,.1],kneeL:[.3],legR:[.2,0,-.1],kneeR:[.3]})],[1.1,$({py:-.02,lean:0,ry:0,chest:[-.12,0,0],head:[-.1,0,0],shR:[-2.9,0,.15],elR:[-.15],shL:[-.3,0,-.3],elL:[-.8],legL:[-.15,0,.1],kneeL:[.15],legR:[.15,0,-.1],kneeR:[.15]})]]},taunt:{dur:1,keys:[[0,$({})],[.25,$({py:-.05,lean:.12,ry:.15,chest:[.1,.3,0],head:[0,0,0],shR:[-1.3,-.5,.2],elR:[-.5],shL:[-.6,-.4,-.3],elL:[-1.2]})],[.45,$({py:-.05,lean:.12,ry:.15,chest:[.1,.3,0],head:[0,0,0],shR:[-.9,-.7,.2],elR:[-1.1],shL:[-.6,-.4,-.3],elL:[-1.2]})],[.65,$({py:-.05,lean:.12,ry:.15,chest:[.1,.3,0],head:[0,0,0],shR:[-1.3,-.5,.2],elR:[-.5],shL:[-.6,-.4,-.3],elL:[-1.2]})],[1,$({})]]},intro:{dur:1.2,keys:[[0,{py:0,lean:0,side:0,rx:0,ry:0,rz:0,spine:[0,0,0],chest:[0,0,0],head:[.1,0,0],shL:[-.15,0,-.12],elL:[-.2],shR:[-.15,0,.12],elR:[-.2],legL:[0,0,.06],kneeL:[.05],legR:[0,0,-.06],kneeR:[.05],band:[.1]}],[.7,$({py:-.03,lean:.05})],[1.2,$({})]]},dash:{dur:.24,keys:[[0,$({py:-.1,lean:.18})],[.12,$({py:-.12,lean:.42,chest:[.42,-.3,0],head:[.1,.3,0],shL:[.7,-.2,-.4],elL:[-.5],shR:[.7,.2,.4],elR:[-.5],legL:[-1.15,0,.14],kneeL:[.55],legR:[.95,0,-.14],kneeR:[.95]})],[.24,$({py:-.1,lean:.2,chest:[.35,-.3,0],shL:[.5,-.2,-.4],elL:[-.6],shR:[.5,.2,.4],elR:[-.6],legL:[-.9,0,.12],kneeL:[.5],legR:[.7,0,-.12],kneeR:[.8]})]]},step:{dur:.26,keys:[[0,$({})],[.12,$({py:.06,lean:-.22,chest:[-.2,-.3,0],shL:[-.6,-.5,-.5],shR:[-.6,.5,.5],legL:[-.6,0,.1],kneeL:[.9],legR:[.2,0,-.1],kneeR:[.9]})],[.26,$({})]]},jump:{dur:.4,loop:!0,keys:[[0,$({py:.02,lean:.05,chest:[.2,-.3,0],shL:[-1.2,-.4,-.4],elL:[-1.6],shR:[-1,.4,.4],elR:[-1.8],legL:[-.7,0,.1],kneeL:[1.1],legR:[.35,0,-.1],kneeR:[1]})],[.4,$({py:.02,lean:.05,chest:[.2,-.3,0],shL:[-1.2,-.4,-.4],elL:[-1.6],shR:[-1,.4,.4],elR:[-1.8],legL:[-.7,0,.1],kneeL:[1.1],legR:[.35,0,-.1],kneeR:[1]})]]},land:{dur:.18,keys:[[0,$({py:-.26,lean:.08,chest:[.35,-.35,0],legL:[-.6,0,.12],kneeL:[1],legR:[.45,0,-.12],kneeR:[.85]})],[.18,$({})]]},crush:{dur:1,keys:[[0,$({})],[.15,$({py:-.1,lean:-.35,chest:[-.5,0,.1],head:[-.5,0,0],shL:[-.2,0,-.8],elL:[-.3],shR:[-.2,0,.8],elR:[-.3],legL:[-.3,0,.12],kneeL:[.4],legR:[.5,0,-.12],kneeR:[.3]})],[.45,$({py:-.14,lean:-.25,chest:[-.35,0,-.08],head:[-.35,0,0],shL:[-.3,0,-.7],elL:[-.4],shR:[-.3,0,.7],elR:[-.4],legL:[-.3,0,.12],kneeL:[.45],legR:[.45,0,-.12],kneeR:[.35]})],[.75,$({py:-.12,lean:-.28,chest:[-.4,0,.08],head:[-.4,0,0],shL:[-.25,0,-.75],elL:[-.35],shR:[-.25,0,.75],elR:[-.35],legL:[-.3,0,.12],kneeL:[.42],legR:[.48,0,-.12],kneeR:[.32]})],[1,$({})]]}},Jh=[];function qn(s,t=.75,e=.08){let i=new fe({color:s,roughness:t,metalness:e});return Jh.push(i),i}function Wh(s,t=1.6){let e=new fe({color:1118481,emissive:s,emissiveIntensity:t,roughness:.4});return Jh.push(e),e}function Yn(s,t,e){let i=new Nt(new Hn(s,t,4,10),e);return i.castShadow=!0,i}function He(s,t,e,i){let n=new Nt(new Se(s,t,e),i);return n.castShadow=!0,n}function $h(s,t){let e=t.h||1,i=t.bulk||1,n=t.shoulder||1,r=new $t,o={},a={skin:qn(s.skin),top:qn(s.top,.85),bottom:qn(s.bottom,.85),glove:qn(s.glove,.5,.2),accent:Wh(s.accent,1.8),hair:qn(s.hair,.9),belt:qn(s.belt,.6),eye:Wh(14220287,2.2)},h=[a.skin,a.top,a.bottom,a.glove,a.hair,a.belt];h.forEach(dt=>{dt.userData.baseEmissive=dt.emissive.getHex()});let l=.46*e,c=.46*e,u=l+c+.06*e,f=dt=>dt*i,m=new $t;m.position.y=u,r.add(m),o.hips=m;let g=He(f(.32),.17*e,f(.21),a.bottom);m.add(g);let _=He(f(.35),.07*e,f(.24),a.belt);_.position.y=.09*e,m.add(_);let p=He(.08,.08,.05,a.belt);p.position.set(.1,.03,-.13*i),m.add(p);let d=new $t;d.position.y=.1*e,m.add(d),o.spine=d;let M=Yn(f(.12),.1*e,a.top);M.position.y=.08*e,d.add(M);let x=new $t;x.position.y=.2*e,d.add(x),o.chest=x;let w=He(f(.42),.3*e,f(.24),a.top);w.position.y=.16*e,x.add(w);let P=He(.1,.1,.03,a.accent);P.position.set(0,.16*e,f(.13)),x.add(P);let A=.24*n*i,R=new Nt(new Fi(.105*i,12,10),a.bottom);R.position.set(-A-.03,.28*e,0),R.castShadow=!0,x.add(R);let V=R.clone();V.position.x*=-1,x.add(V);let v=new $t;v.position.y=.36*e,x.add(v),o.head=v;let E=Yn(.06*i,.05,a.skin);E.position.y=0,v.add(E);let F=He(.23*i,.25*e,.23*i,a.skin);F.position.y=.16*e,v.add(F);let W=He(.25*i,.1*e,.25*i,a.hair);W.position.y=.29*e,v.add(W);let it=He(.26*i,.055*e,.26*i,a.accent);it.position.y=.235*e,v.add(it);let L=He(.045,.05,.02,a.eye);L.position.set(-.06*i,.15*e,.115*i),v.add(L);let U=L.clone();U.position.x*=-1,v.add(U);let H=He(.05,.22*e,.015,a.accent);H.position.set(-.05,.16*e,-.16*i),v.add(H);let q=He(.05,.17*e,.015,a.accent);q.position.set(.05,.17*e,-.16*i),v.add(q),o.bandT1=H,o.bandT2=q;function X(dt){let gt=new $t;gt.position.set(dt*A,.27*e,0),x.add(gt);let At=Yn(f(.072),.18*e,a.skin);At.position.y=-.15*e,gt.add(At);let _t=new $t;_t.position.y=-.3*e,gt.add(_t);let Ft=Yn(f(.066),.16*e,a.skin);Ft.position.y=-.13*e,_t.add(Ft);let D=He(f(.1),.06,.1,a.accent);D.position.y=-.2*e,_t.add(D);let se=new $t;se.position.y=-.27*e,_t.add(se);let xt=He(f(.125),.14*e,f(.125),a.glove);xt.position.y=-.05*e,se.add(xt);let Rt=new $t;return Rt.position.y=-.13*e,se.add(Rt),{s:gt,e:_t,hand:se,tip:Rt}}let G=X(-1),J=X(1);o.shL=G.s,o.elL=G.e,o.handL=G.hand,o.handTipL=G.tip,o.shR=J.s,o.elR=J.e,o.handR=J.hand,o.handTipR=J.tip;function Q(dt){let gt=new $t;gt.position.set(dt*.11*i,-.06*e,0),m.add(gt);let At=Yn(f(.098),.26*e,a.bottom);At.position.y=-l/2+.03,gt.add(At);let _t=new $t;_t.position.y=-l,gt.add(_t);let Ft=Yn(f(.08),.26*e,a.skin);Ft.position.y=-c/2+.03,_t.add(Ft);let D=new $t;D.position.y=-c,_t.add(D);let se=He(f(.12),.09*e,.26,a.glove);se.position.set(0,-.03,.06),D.add(se);let xt=new $t;return xt.position.set(0,-.03,.19),D.add(xt),{hp:gt,kn:_t,foot:D,tip:xt}}let lt=Q(-1),z=Q(1);o.legL=lt.hp,o.kneeL=lt.kn,o.footL=lt.foot,o.footTipL=lt.tip,o.legR=z.hp,o.kneeR=z.kn,o.footR=z.foot,o.footTipR=z.tip;let Z=new $t;Z.position.y=u+.45*e,r.add(Z);let ot=new $t;return ot.position.y=.18*e,x.add(ot),{group:r,j:o,mats:a,center:Z,chestW:ot,baseHipsY:u,h:e,setFlash(dt){for(let gt of h)gt.emissive.setHex(16777215),gt.emissiveIntensity=dt*.9,dt<=.001&&(gt.emissive.setHex(gt.userData.baseEmissive),gt.emissiveIntensity=1)}}}function Zn(){return{py:0,lean:0,side:0,rx:0,ry:0,rz:0,spine:[0,0,0],chest:[0,0,0],head:[0,0,0],shL:[0,0,0],elL:[0],shR:[0,0,0],elR:[0],legL:[0,0,0],kneeL:[0],legR:[0,0,0],kneeR:[0],band:[0]}}function Xh(s,t){for(let e of Ro){let i=s[e];t[e]=Array.isArray(i)?i.slice():i}return t}function Kh(s,t,e,i){for(let n of Ro){let r=s[n],o=t[n];if(Array.isArray(r))for(let a=0;a<r.length;a++)i[n][a]=r[a]+(o[a]-r[a])*e;else i[n]=r+(o-r)*e}return i}var jh=s=>s*s*(3-2*s),qh=Zn(),Yh=Zn();function Jn(s,t){for(let e of Ro){let i=s&&s[e]!==void 0?s[e]:Zh[e];t[e]=Array.isArray(i)?i.slice():i}return t}function x0(s,t,e){let i=s.keys;if(t<=i[0][0])return Jn(i[0][1],e);for(let n=0;n<i.length-1;n++){let r=i[n][0],o=i[n+1][0];if(t<=o){let a=jh((t-r)/Math.max(1e-4,o-r));return Jn(i[n][1],qh),Jn(i[n+1][1],Yh),Kh(qh,Yh,a,e)}}return Jn(i[i.length-1][1],e)}var Dr=class{constructor(t){this.rig=t,this.cur="idle",this.t=0,this.blend=0,this.blendDur=.12,this.from=Zn(),this.target=Zn(),this.applied=Zn(),Xh(Jn(Ao,Zn()),this.applied),this.phase=0,this.breath=Math.random()*10,this.speed=0,this.impX=0,this.impZ=0,this.finished=!1}play(t,e=.1){this.cur===t&&Gh[t]?.loop,Xh(this.applied,this.from),this.cur=t,this.t=0,this.blendDur=e,this.finished=!1}get clip(){return Gh[this.cur]}get k(){let t=this.clip;return t?Math.min(1,this.t/t.dur):1}addImpulse(t,e){this.impX+=t,this.impZ+=e}update(t,e=0,i=!0){this.t+=t,this.breath+=t,this.speed=e;let n=this.clip;if(this.cur==="idle")this.locoPose(this.target,e);else if(n){let o=this.t;n.loop?o=o%n.dur:o>=n.dur&&(o=n.dur,this.finished=!0),x0(n,o,this.target),this.cur==="super"&&o<.42&&(this.target.ry+=(Math.random()-.5)*.06,this.target.py+=(Math.random()-.5)*.02),this.cur==="launch"&&(this.target.rz+=Math.sin(this.breath*14)*.08),this.cur==="ko"&&this.t<.6&&(this.target.rz+=Math.sin(this.breath*30)*.05*(.6-this.t))}let r=this.blendDur>0?jh(Math.min(1,this.t/this.blendDur)):1;return Kh(this.from,this.target,r,this.applied),this.impX*=Math.pow(.001,t),this.impZ*=Math.pow(.001,t),this.applied.lean+=this.impZ,this.applied.side+=this.impX,this.apply(),this.finished}locoPose(t,e){Jn(Ao,t);let i=this.breath;if(t.chest[0]+=Math.sin(i*2.3)*.022,t.py+=Math.sin(i*3.6)*.013+Math.sin(i*2.3)*.006,t.rz+=Math.sin(i*1.7)*.012,t.head[1]+=Math.sin(i*.6)*.12,t.shL[0]+=Math.sin(i*3.6+.4)*.03,t.shR[0]+=Math.sin(i*3.6)*.03,t.band[0]+=Math.sin(i*3)*.12+e*.06,e>.3){let n=e>4.6,r=n?11.5:8,o=n?.75:.5;this.locoPhase=(this.locoPhase||0)+r*(this._dt||.016);let a=this.locoPhase,h=Math.sin(a),l=Math.cos(a),c=h*o,u=Math.max(0,l)*(n?.5:.3);t.legL[0]+=c,t.legR[0]-=c,t.kneeL[0]+=Math.max(0,-l)*.7+u*.5,t.kneeR[0]+=Math.max(0,l)*.7+u*.5,t.py+=Math.abs(l)*(n?.055:.03)-.01,t.lean+=e*.022,t.chest[0]+=e*.012,t.shL[0]+=-h*(n?.45:.25),t.shR[0]+=h*(n?.45:.25),t.shL[2]+=-.05,t.shR[2]+=.05,t.rz+=h*.03,t.band[0]+=e*.1}}apply(){let t=this.rig.j,e=this.applied;t.hips.position.set(e.side,this.rig.baseHipsY+e.py,e.lean),t.hips.rotation.set(e.rx,e.ry,e.rz),t.spine.rotation.set(e.spine[0],e.spine[1],e.spine[2]),t.chest.rotation.set(e.chest[0],e.chest[1],e.chest[2]),t.head.rotation.set(e.head[0],e.head[1],e.head[2]),t.shL.rotation.set(e.shL[0],e.shL[1],e.shL[2]),t.elL.rotation.set(e.elL[0],0,0),t.shR.rotation.set(e.shR[0],e.shR[1],e.shR[2]),t.elR.rotation.set(e.elR[0],0,0),t.legL.rotation.set(e.legL[0],e.legL[1],e.legL[2]),t.kneeL.rotation.set(e.kneeL[0],0,0),t.legR.rotation.set(e.legR[0],e.legR[1],e.legR[2]),t.kneeR.rotation.set(e.kneeR[0],0,0);let i=Math.sin(this.breath*5)*.08;t.bandT1.rotation.x=e.band[0]+i,t.bandT2.rotation.x=e.band[0]*.8-i}};function Qh(s,t,e){let i=(t-s)%(Math.PI*2);return i>Math.PI&&(i-=Math.PI*2),i<-Math.PI&&(i+=Math.PI*2),s+i*Math.min(1,e)}var Qt=new T,bi=new T,y0=["idle","dash","attack","block","hit","launch","crush","parry","taunt"],v0={jab:"jab",jab2:"jab2",straight:"straight",kick:"kick",kickhigh:"kickhigh",heavy:"heavy",sweep:"sweep",airatk:"airatk",grab:"grab",super:"super"},vs=class{constructor(t,e,i={}){this.scene=t,this.def=e,this.label=i.label||"1P",this.rig=$h(e.palette,e.body),t.add(this.rig.group),this.anim=new Dr(this.rig),this.pos=this.rig.group.position,this.vel=new T,this.yaw=0,this.maxhp=Math.round(e.hp),this.atkMul=e.atk,this.defMul=e.def,this.spdMul=e.spd,this.cmd={mx:0,mz:0,punch:!1,kick:!1,heavy:!1,grab:!1,super:!1,jump:!1,dash:!1,block:!1,taunt:!1,sweepKick:!1},this.reset(0,0,0)}reset(t,e,i,n=!1){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=i,this.rig.group.rotation.set(0,i,0),n||(this.hp=this.maxhp),this.meter=0,this.stam=pe.maxStam,this.state="idle",this.tState=0,this.stun=0,this.airborne=!1,this.vy=0,this.atk=null,this.hasHit=!1,this.whiffed=!1,this.hitIdx=0,this.blockHeld=!1,this.blockTap=0,this.wasBlock=!1,this.dashT=0,this.dashDir=new T,this.backdash=!1,this.tGrab=0,this.throwVec=new T,this.grabber=null,this.wallCd=0,this.flash=0,this.landCd=0,this.comboDealt=0,this.comboDmg=0,this.comboTaken=0,this.comboTakenDmg=0,this.comboTimer=0,this.stamDelay=0,this.crushT=0,this.downT=0,this.wakeT=0,this.koT=0,this.dealtTotal=0,this.maxCombo=0,this.anim.play("idle",.2),this.rig.setFlash(0),this.syncRig()}faceFoe(t,e=12,i=.016){Qt.subVectors(t.pos,this.pos),Qt.y=0,!(Qt.lengthSq()<1e-4)&&(this.yaw=Qh(this.yaw,Math.atan2(Qt.x,Qt.z),e*i))}fwd(t){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}distTo(t){return Qt.subVectors(t.pos,this.pos),Qt.y=0,Qt.length()}isHittable(){return y0.includes(this.state)}canAct(){return this.state==="idle"&&this.landCd<=0}grounded(){return!this.airborne}tryStartBlock(){this.state==="idle"&&(this.state="block",this.tState=0,this.stun=0,this.anim.play("block",.06))}startAttack(t){let e=Hh[t];if(!e)return!1;if(t==="super"){if(this.meter<100)return!1;this.meter=0}return this.state="attack",this.tState=0,this.atkT=0,this.atk=e,this.atkId=t,this.hasHit=!1,this.whiffed=!1,this.hitIdx=0,this.anim.play(v0[t]||"jab",.05),!0}startDash(t,e){return this.stam<8?!1:(this.stam-=pe.dashStam,this.stamDelay=pe.stamRegenDelay,this.state="dash",this.tState=0,this.dashT=0,this.backdash=!1,this.dashDir.set(t,0,e).normalize(),this.yaw=Math.atan2(t,e),this.anim.play("dash",.05),!0)}startStepBack(){return this.stam<8?!1:(this.stam-=pe.dashStam*.8,this.stamDelay=pe.stamRegenDelay,this.state="dash",this.tState=0,this.dashT=0,this.backdash=!0,this.fwd(this.dashDir).multiplyScalar(-1),this.anim.play("step",.04),!0)}startJump(){return this.airborne||this.state!=="idle"?!1:(this.airborne=!0,this.vy=7.4,this.anim.play("jump",.08),!0)}startTaunt(){this.state!=="idle"||this.airborne||(this.state="taunt",this.tState=0,this.anim.play("taunt",.1),this.addMeter(8))}addMeter(t){this.meter=Math.min(pe.maxMeter,this.meter+t)}heal(t){this.hp=Math.min(this.maxhp,this.hp+t)}stagger(t){this.state="crush",this.tState=0,this.crushT=t,this.anim.play("crush",.05)}takeHit(t,e,i){if(!this.isHittable()||this.state==="dash"&&this.dashT<.12||this.state==="grabbed")return"miss";Qt.subVectors(e.pos,this.pos),Qt.y=0,Qt.normalize(),this.fwd(bi);let n=Qt.dot(bi),r=this.state==="block"&&n>.35&&!this.airborne;if(!(r&&t.unblockable)){if(r){if(this.blockTap>0)return e.stagger(.95*i.diffReact||.95),e.anim.addImpulse(0,-.15),this.anim.play("parry",.03),this.state="parry",this.tState=0,this.addMeter(12),i.onParry(this,e),"parry";let f=Math.max(1,Math.round(t.dmg*pe.chipRatio*e.atkMul/this.defMul));return this.hp=Math.max(0,this.hp-f),this.stam-=pe.blockStamBase+t.dmg*.7,this.stamDelay=pe.stamRegenDelay,this.stun=Math.max(this.stun,t.blockstun),this.fwd(bi),this.vel.addScaledVector(Qt,-t.kb*.9),this.anim.addImpulse(0,-.12),e.addMeter(t.meter*.5),this.addMeter(pe.meterOnBlock*.5),e.hasHit=!0,i.onBlock(this,e,t,f),this.hp<=0?(i.onKO(this,e,"chip"),"ko"):this.stam<=0?(this.stam=0,this.stagger(1),i.onCrush(this),"crush"):"block"}}if(t.unblockable)return this.airborne?"miss":(this.takeGrab(e,i,t),"grab");let a=this.state==="attack"&&this.atkT<(this.atk?this.atk.startup+.08:0)?pe.counterBonus:1,h=this.airborne||this.state==="launch"?pe.juggleScale:1,l=t.dmg*e.atkMul*a*h*(i.dmgMul||1)/this.defMul,c=Math.max(1,Math.round(l));if(this.hp=Math.max(0,this.hp-c),this.flash=1,this.state==="hit"||this.state==="launch"||this.state==="crush"||this.state==="parry"?(e.comboDealt++,e.comboDmg+=c,this.comboTaken++,this.comboTakenDmg+=c,this.comboTimer=2.5):(e.comboDealt=1,e.comboDmg=c,this.comboTaken=1,this.comboTakenDmg=c,this.comboTimer=2.5),e.maxCombo=Math.max(e.maxCombo,e.comboDealt),e.dealtTotal+=c,e.addMeter(t.meter*pe.meterOnDealt*.14+c*.12),this.addMeter(c*.1),e.hasHit=!0,this.hp<=0)return i.onKO(this,e,a>1?"counter":"hit"),"ko";let u=Qt.clone().multiplyScalar(-1);return t.launch?(this.state="launch",this.tState=0,this.airborne=!0,this.vy=t.launch[0],this.vel.set(u.x*t.launch[1],0,u.z*t.launch[1]),this.anim.play("launch",.04),i.onLaunch(this,e,t,c,a>1),"launch"):t.down?(this.state="launch",this.tState=0,this.airborne=!0,this.vy=3.6,this.vel.set(u.x*3.4,0,u.z*3.4),this.anim.play("launch",.04),i.onHit(this,e,t,c,a>1),"downhit"):(this.state="hit",this.tState=0,this.stun=t.hitstun,this.vel.set(u.x*t.kb,0,u.z*t.kb),this.anim.play(t.type==="low"?"hitL":"hitH",.03),this.anim.addImpulse(0,-.1),i.onHit(this,e,t,c,a>1),"hit")}takeGrab(t,e,i){Qt.subVectors(this.pos,t.pos),Qt.y=0,Qt.normalize(),this.state="grabbed",this.tState=0,this.tGrab=0,this.grabber=t,this.throwVec.set(Qt.x*(i.launch?i.launch[1]:4.5),i.launch?i.launch[0]:5.5,Qt.z*(i.launch?i.launch[1]:4.5)),this.anim.play("grabbed",.05),t.hasHit=!0;let n=Math.max(1,Math.round(i.dmg*t.atkMul*(e.dmgMul||1)/this.defMul));this.hp=Math.max(0,this.hp-n),this.flash=1,t.comboDealt=1,t.comboDmg=n,t.dealtTotal+=n,this.comboTaken=1,this.comboTakenDmg=n,this.comboTimer=2.5,t.addMeter(i.meter*.14+n*.12),this.addMeter(n*.1),e.onGrab(this,t,i,n),this.hp<=0&&e.onKO(this,t,"throw")}releaseGrab(){this.state="launch",this.tState=0,this.airborne=!0,this.vy=this.throwVec.y,this.vel.set(this.throwVec.x,0,this.throwVec.z),this.anim.play("launch",.05)}update(t,e,i){this.tState+=t,this.wallCd-=t,this.landCd-=t,this.comboTimer-=t,this.comboTimer<=0&&(this.comboTaken=0,this.comboTakenDmg=0),this.blockTap>0&&(this.blockTap-=t),this.flash>0&&(this.flash=Math.max(0,this.flash-t*6),this.rig.setFlash(this.flash)),this.stamDelay-=t,this.stamDelay<=0&&(this.stam=Math.min(pe.maxStam,this.stam+pe.stamRegen*t));let n=this.cmd,r=n.mx,o=n.mz,a=Math.hypot(r,o);switch(this.state){case"intro":{this.tState>1.2&&(this.state="idle",this.anim.play("idle",.15));break}case"idle":{if(this.faceFoe(e,10,t),n.block&&this.grounded()){this.wasBlock||(this.blockTap=.2),this.tryStartBlock(),this.wasBlock=!0;break}this.wasBlock=n.block;let l=4.35*this.spdMul;if(this.grounded()){let c=Math.min(1,a);this.vel.x=r*l*c,this.vel.z=o*l*c}else this.vel.x+=(r*3.4*this.spdMul-this.vel.x)*Math.min(1,t*4),this.vel.z+=(o*3.4*this.spdMul-this.vel.z)*Math.min(1,t*4);n.jump?this.startJump()&&i.sfx("jump",this):n.dash?a>.2?this.startDash(r/a,o/a)&&i.sfx("dash",this):this.startStepBack()&&i.sfx("dash",this):n.super?this.startAttack("super")&&i.onSuperStart(this,e):n.grab?this.startAttack("grab"):n.heavy?this.startAttack(this.grounded()?"heavy":"airatk"):n.punch?this.startAttack(this.grounded()?"jab":"airatk"):n.kick?this.startAttack(this.grounded()?n.sweepKick?"sweep":"kick":"airatk"):n.taunt&&this.startTaunt();break}case"dash":{this.dashT+=t;let l=this.backdash?.26:.2,c=(this.backdash?9.5:12.5)*this.spdMul*(1-this.dashT/l*.45);this.vel.set(this.dashDir.x*c,0,this.dashDir.z*c),this.dashT>=l&&(this.state="idle",this.backdash=!1,this.anim.play("idle",.12),this.vel.multiplyScalar(.3));break}case"attack":{this.atkT+=t;let l=this.atk;(this.atkT<l.startup||this.atkId==="super")&&this.faceFoe(e,this.atkId==="super"?10:6,t);let c=l.active[1],u=this.atkId==="super"&&this.hasHit;if(this.atkT<c&&this.grounded()&&!u){let g=Math.max(.05,c-l.startup*.4),_=(l.lunge||0)/g;if(this.fwd(Qt),this.atkId==="super"&&this.atkT>.3&&this.atkT<.9)bi.subVectors(e.pos,this.pos),bi.y=0,bi.length()>1.6?(bi.normalize(),this.vel.set(bi.x*11,0,bi.z*11)):this.vel.set(Qt.x*_*.4,0,Qt.z*_*.4);else{let p=Math.sin(Math.min(1,this.atkT/Math.max(.05,c))*Math.PI);this.vel.x=Qt.x*_*(.4+.6*p),this.vel.z=Qt.z*_*(.4+.6*p)}}else this.grounded()&&this.vel.multiplyScalar(Math.max(0,1-t*8));if(!this.whiffed&&this.atkT>=l.startup&&(this.whiffed=!0,i.sfx("whiff",this)),l.hits){let g=l.active[0];for(;this.hitIdx<l.hits&&this.atkT>=g+this.hitIdx*l.hitGap;)i.tryHit(this,e,l,{hitIdx:this.hitIdx}),this.hitIdx++}else!this.hasHit&&this.atkT>=l.active[0]&&this.atkT<=l.active[1]&&i.tryHit(this,e,l,{});let f=l.chain||{},m=n.punch?"punch":n.kick?"kick":null;if(m&&f[m]&&this.hasHit&&this.atkT>l.active[1]-.06){this.startAttack(f[m]);break}this.atkT>=l.dur&&(this.state="idle",this.tState=0,this.anim.play("idle",.12));break}case"block":{this.faceFoe(e,12,t),this.stun-=t,this.vel.multiplyScalar(Math.max(0,1-t*10)),!n.block&&this.stun<=0&&(this.state="idle",this.anim.play("idle",.08));break}case"parry":{this.tState>.4&&(this.state="idle",this.anim.play("idle",.08));break}case"hit":{this.stun-=t,this.vel.multiplyScalar(Math.max(0,1-t*(this.grounded()?5:.4))),this.stun<=0&&(this.state="idle",this.tState=0,this.anim.play("idle",.1));break}case"launch":break;case"grabbed":{this.tGrab+=t,this.grabber&&(this.grabber.fwd(Qt),this.pos.set(this.grabber.pos.x+Qt.x*1.1,Math.min(1,this.tGrab*3)*.9,this.grabber.pos.z+Qt.z*1.1),this.yaw=Qh(this.yaw,this.grabber.yaw,t*8)),this.tGrab>.42&&(this.releaseGrab(),i.sfx("thrown",this));break}case"down":{this.downT-=t,this.vel.multiplyScalar(Math.max(0,1-t*8)),this.downT<=0&&(this.state="wakeup",this.tState=0,this.wakeT=.42,this.anim.play("wakeup",.06));break}case"wakeup":{this.wakeT-=t,this.wakeT<=0&&(this.state="idle",this.anim.play("idle",.1));break}case"crush":{this.crushT-=t,this.vel.multiplyScalar(Math.max(0,1-t*6)),this.crushT<=0&&(this.state="idle",this.anim.play("idle",.12));break}case"taunt":{this.tState>1&&(this.state="idle",this.anim.play("idle",.12));break}case"ko":case"win":{this.vel.multiplyScalar(Math.max(0,1-t*6));break}}if(this.airborne){if(this.vy-=22*t,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vy*t,this.pos.y<=0){this.pos.y=0,this.airborne=!1,this.landCd=.1;let l=this.vy<-9;this.vy=0,this.state==="launch"?(this.state="down",this.downT=.85,this.anim.play("down",.05),i.onLandDown(this,l)):(this.state==="attack"?(this.state="idle",this.anim.play("idle",.1)):this.state==="idle"&&(this.anim.play("land",.03),this.anim.play("idle",.15)),i.sfx("land",this),this.vel.multiplyScalar(.4))}}else this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;if(i.arenaR){let l=this.pos.x-i.arenaX||0,c=this.pos.z-i.arenaZ||0,u=this.pos.x-(i.arenaX||0),f=this.pos.z-(i.arenaZ||0),m=Math.hypot(u,f),g=i.arenaR-.55;if(m>g){let _=u/m,p=f/m;this.pos.x=(i.arenaX||0)+_*g,this.pos.z=(i.arenaZ||0)+p*g;let d=Math.hypot(this.vel.x,this.vel.z),M=this.vel.x*_+this.vel.z*p;M>0&&(this.vel.x-=_*M*1.6,this.vel.z-=p*M*1.6),this.state==="launch"&&d>3.5&&this.wallCd<=0&&(this.wallCd=1,i.onWallSplat(this))}}this.syncRig();let h=Math.hypot(this.vel.x,this.vel.z);this.anim.update(t,this.grounded()?h:0,this.grounded()),this.state==="down"&&this.downT===void 0&&(this.downT=.85)}syncRig(){this.rig.group.rotation.y=this.yaw}limbPos(t,e){let i={handR:"handTipR",handL:"handTipL",footR:"footTipR",footL:"footTipL"},n=this.rig.j[i[t]||"handTipR"];return n?n.getWorldPosition(e):e.copy(this.pos)}chestPos(t){return this.rig.chestW.getWorldPosition(t)}};function ic(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new zn(s)}function M0(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d");return t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=10,t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255,255,255,.4)",t.lineWidth=22,t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.stroke(),new zn(s)}var Ur=class{constructor(t,e){this.items=[];for(let i=0;i<t;i++){let n=e();n.alive=!1,this.items.push(n)}this.i=0}next(){let t=this.items[this.i];return this.i=(this.i+1)%this.items.length,t}each(t){for(let e of this.items)e.alive&&t(e)}killAll(){for(let t of this.items)t.alive=!1}},Nr=class{constructor(t){this.scene=t,this.budget=1,this.glowTex=ic(),this.ringTex=M0(),this.parts=new Ur(260,()=>{let e=new Qi({map:this.glowTex,transparent:!0,depthWrite:!1,blending:Ln}),i=new Fn(e);return i.visible=!1,i.renderOrder=5,t.add(i),{s:i,vel:new T,life:0,maxLife:1,grav:0,drag:1,size0:1,size1:0,op:1,spin:0}}),this.rings=new Ur(24,()=>{let e=new Qi({map:this.ringTex,transparent:!0,depthWrite:!1,blending:Ln,side:Be}),i=new Fn(e);return i.visible=!1,i.renderOrder=6,t.add(i),{s:i,life:0,dur:1,maxR:3,op:1,flat:!1,baseY:0}}),this.lights=[];for(let e=0;e<3;e++){let i=new Rr(16777215,0,18,1.8);t.add(i),this.lights.push({L:i,life:0})}this.li=0,this.ghosts=[],this.emitters=[]}setBudget(t){this.budget=t}_n(t){return Math.max(1,Math.round(t*this.budget))}spawnP(t,e={}){let i=this.parts.next();i.alive=!0,i.s.visible=!0,i.s.position.copy(t),e.jitter&&(i.s.position.x+=(Math.random()-.5)*e.jitter,i.s.position.y+=(Math.random()-.5)*e.jitter,i.s.position.z+=(Math.random()-.5)*e.jitter);let n=e.speed??4;return e.dir?(i.vel.copy(e.dir).multiplyScalar(n*(.5+Math.random()*.8)),i.vel.x+=(Math.random()-.5)*n*(e.spread??.7),i.vel.y+=(Math.random()-.5)*n*(e.spread??.7),i.vel.z+=(Math.random()-.5)*n*(e.spread??.7)):(i.vel.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(n*(.4+Math.random()*.9)),e.up&&(i.vel.y=Math.abs(i.vel.y)+e.up)),i.maxLife=i.life=e.life??.5,i.grav=e.grav??8,i.drag=e.drag??.92,i.size0=e.size??.5,i.size1=e.size1??.05,i.op=e.op??1,i.s.material.color.set(e.color??16777215),i.s.material.rotation=Math.random()*Math.PI*2,i.spin=(Math.random()-.5)*(e.spin??4),i.s.scale.setScalar(i.size0),i.s.material.opacity=i.op,i}burst(t,{n:e=12,color:i=16777215,colors:n=null,speed:r=6,life:o=.5,size:a=.5,grav:h=8,dir:l=null,spread:c=.8,up:u=0,op:f=1}={}){e=this._n(e);for(let m=0;m<e;m++){let g=n?n[Math.random()*n.length|0]:i;this.spawnP(t,{color:g,speed:r*(.6+Math.random()*.8),life:o*(.6+Math.random()*.8),size:a*(.6+Math.random()*.8),grav:h,dir:l,spread:c,up:u,op:f})}}ring(t,{color:e=16777215,maxR:i=3,dur:n=.4,op:r=1,flat:o=!1}={}){let a=this.rings.next();a.alive=!0,a.s.visible=!0,a.s.position.copy(t),a.life=a.dur=n,a.maxR=i,a.op=r,a.flat=o,a.s.material.color.set(e),a.s.material.opacity=r,a.s.scale.setScalar(.2)}flash(t,e=16777215,i=60,n=16){let r=this.lights[this.li];this.li=(this.li+1)%this.lights.length,r.L.position.copy(t),r.L.color.set(e),r.L.intensity=i,r.L.distance=n,r.life=1}hitSpark(t,e,i=1,n=null){let r=[16777215,e,e];this.burst(t,{n:6+i*7,color:16777215,colors:r,speed:4+i*3,life:.35+i*.08,size:.35+i*.15,grav:10,dir:n,spread:.9}),this.spawnP(t,{color:16777215,speed:.2,life:.12,size:1.2+i*.7,grav:0,op:.95}),i>=2&&this.ring(t,{color:e,maxR:1.5+i,dur:.35}),this.flash(t,e,26+i*22,10+i*3)}blockSpark(t,e=6737151){this.burst(t,{n:8,colors:[16777215,e,2254591],speed:4,life:.3,size:.3,grav:6}),this.ring(t,{color:e,maxR:1.4,dur:.25,op:.9}),this.flash(t,e,24,9)}parrySpark(t){this.burst(t,{n:26,colors:[16777215,10482687,61695,16765286],speed:9,life:.5,size:.45,grav:4}),this.ring(t,{color:10482687,maxR:3.2,dur:.45}),this.ring(t,{color:16765286,maxR:2.2,dur:.35}),this.flash(t,10482687,80,16)}dust(t,e=8,i=9081768,n=.5){e=this._n(e);for(let r=0;r<e;r++)this.spawnP(t,{color:i,speed:1.6,life:.7,size:n*(.7+Math.random()*.7),size1:n*2.2,grav:-1.2,drag:.94,up:1.2,op:.45,blend:Pi})}shockwave(t,e=16777215,i=1){this.ring(t,{color:e,maxR:6*i,dur:.55,flat:!0}),this.ring(t,{color:16777215,maxR:3*i,dur:.4}),this.burst(t,{n:24*i,colors:[16777215,e],speed:10,life:.6,size:.6,grav:6,up:3}),this.flash(t,e,90,22)}ghost(t,e=61695,i=.35){if(this.ghosts.length>10)return;let n=t.rig.group,r=n.clone(!0),o=new ze({color:e,transparent:!0,opacity:.55,blending:Ln,depthWrite:!1});r.traverse(a=>{a.isMesh&&(a.material=o,a.castShadow=!1),a.isSprite&&(a.visible=!1)}),r.position.copy(n.position),r.rotation.copy(n.rotation),this.scene.add(r),this.ghosts.push({g:r,m:o,life:i,maxLife:i})}aura(t,e,i=1){this.emitters.push({f:t,color:e,t:i})}update(t,e){this.parts.each(i=>{if(i.life-=t,i.life<=0){i.alive=!1,i.s.visible=!1;return}let n=i.life/i.maxLife;i.vel.y-=i.grav*t;let r=Math.pow(i.drag,t*60);i.vel.multiplyScalar(r),i.s.position.addScaledVector(i.vel,t),i.s.position.y<.03&&i.grav>0&&(i.s.position.y=.03,i.vel.y*=-.3);let o=i.size1+(i.size0-i.size1)*n;i.s.scale.setScalar(o),i.s.material.opacity=i.op*n,i.s.material.rotation+=i.spin*t}),this.rings.each(i=>{if(i.life-=t,i.life<=0){i.alive=!1,i.s.visible=!1;return}let n=1-i.life/i.dur,r=1-Math.pow(1-n,3);i.s.scale.setScalar(.2+r*i.maxR),i.s.material.opacity=i.op*(1-n),i.flat});for(let i of this.lights)i.life>0&&(i.life-=t*4,i.L.intensity*=Math.pow(.001,t),i.life<=0&&(i.L.intensity=0));for(let i=this.ghosts.length-1;i>=0;i--){let n=this.ghosts[i];if(n.life-=t,n.life<=0){this.scene.remove(n.g),n.m.dispose(),this.ghosts.splice(i,1);continue}n.m.opacity=.55*(n.life/n.maxLife)}for(let i=this.emitters.length-1;i>=0;i--){let n=this.emitters[i];if(n.t-=t,n.t<=0){this.emitters.splice(i,1);continue}let r=this._n(3);for(let o=0;o<r;o++){let a=Math.random()*Math.PI*2,h=.5+Math.random()*.4;tc.set(n.f.pos.x+Math.cos(a)*h,.1+Math.random()*.3,n.f.pos.z+Math.sin(a)*h),this.spawnP(tc,{color:n.color,speed:.6,life:.5,size:.4,grav:-6,up:4,op:.8})}}}clear(){this.parts.killAll(),this.parts.each(()=>{});for(let t of this.parts.items)t.s.visible=!1;for(let t of this.rings.items)t.s.visible=!1;this.rings.killAll();for(let t of this.ghosts)this.scene.remove(t.g),t.m.dispose();this.ghosts.length=0,this.emitters.length=0}},tc=new T;function Co(s,t=512){let e=document.createElement("canvas");e.width=e.height=t,s(e.getContext("2d"),t);let i=new zn(e);return i.wrapS=i.wrapT=cs,i}function Lo(s,t,e,i,n){let r=new Fi(90,24,16),o=new ii({side:Ie,depthWrite:!1,fog:!1,uniforms:{topC:{value:new Lt(s)},midC:{value:new Lt(t)},botC:{value:new Lt(e)},sunD:{value:i},sunC:{value:new Lt(n)}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 topC,midC,botC,sunD,sunC;
      void main(){ vec3 d=normalize(vP); float h=d.y*0.5+0.5;
        vec3 col=mix(botC,midC,smoothstep(0.45,0.62,h));
        col=mix(col,topC,smoothstep(0.60,0.95,h));
        float s=pow(max(dot(d,normalize(sunD)),0.0),220.0);
        float s2=pow(max(dot(d,normalize(sunD)),0.0),8.0);
        col+=sunC*(s*1.2+s2*0.25);
        gl_FragColor=vec4(col,1.0); }`});return new Nt(r,o)}function ec(s=350,t=80){let e=new be,i=new Float32Array(s*3);for(let n=0;n<s;n++){let r=Math.random()*Math.PI*2,o=Math.random()*Math.PI*.45+.08;i[n*3]=Math.cos(r)*Math.cos(o)*t,i[n*3+1]=Math.sin(o)*t,i[n*3+2]=Math.sin(r)*Math.cos(o)*t}return e.setAttribute("position",new De(i,3)),new ms(e,new Bn({color:12577279,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1}))}function Po(s,t,e){let i=new $t,n=new Nt(new wr(s+3.5,64),t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n);let r=new Nt(new Vn(s-.15,s+.15,72),new ze({color:e,transparent:!0,opacity:.9,side:Be}));r.rotation.x=-Math.PI/2,r.position.y=.02,i.add(r);let o=new Nt(new Vn(s+1.6,s+1.75,72),new ze({color:e,transparent:!0,opacity:.25,side:Be}));o.rotation.x=-Math.PI/2,o.position.y=.02,i.add(o);let a=new Nt(new Oi(s+.4,s+.4,3.2,48,1,!0),new ze({color:e,transparent:!0,opacity:.1,side:Be,depthWrite:!1}));a.position.y=1.6,i.add(a);let h=new Nt(new _s(s+.4,.08,10,64),new ze({color:e}));return h.rotation.x=Math.PI/2,h.position.y=3.1,i.add(h),i}function nc(s,t){let e=t.radius,i=new $t,n={update(){}},r=new Lt(t.accent);if(s==="neon_dojo"){i.add(Lo(t.sky.top,t.sky.mid,t.sky.bot,new T(.3,.25,-1),8956671)),i.add(ec(400));let o=Co((p,d)=>{p.fillStyle="#0d1226",p.fillRect(0,0,d,d),p.strokeStyle="rgba(0,240,255,.16)",p.lineWidth=2;for(let M=0;M<=8;M++)p.beginPath(),p.moveTo(M*d/8,0),p.lineTo(M*d/8,d),p.stroke(),p.beginPath(),p.moveTo(0,M*d/8),p.lineTo(d,M*d/8),p.stroke();p.strokeStyle="rgba(255,45,149,.35)",p.lineWidth=4,p.strokeRect(6,6,d-12,d-12)});o.repeat.set(4,4),i.add(Po(e,new fe({map:o,roughness:.6,metalness:.3}),r));let a=new Nt(new Vn(1.9,2.1,48),new ze({color:16723349,transparent:!0,opacity:.8,side:Be}));a.rotation.x=-Math.PI/2,a.position.y=.02,i.add(a);let h=new fe({color:8917265,emissive:16720418,emissiveIntensity:.35,roughness:.6}),l=new Nt(new Se(.5,7,.5),h);l.position.set(-3,3.5,-e-4),i.add(l);let c=l.clone();c.position.x=3,i.add(c);let u=new Nt(new Se(8.4,.6,.8),h);u.position.set(0,7.1,-e-4),i.add(u);let f=new Nt(new Se(7,.4,.5),h);f.position.set(0,6,-e-4),i.add(f);let m=[],g=new fe({color:3346688,emissive:16746544,emissiveIntensity:2});for(let p=0;p<8;p++){let d=p/8*Math.PI*2,M=new Nt(new Fi(.35,12,10),g);M.position.set(Math.cos(d)*(e+2.5),3.4+Math.random(),Math.sin(d)*(e+2.5)),M.userData={y:M.position.y,ph:Math.random()*9},i.add(M),m.push(M);let x=new Nt(new Se(.12,4.4,.12),new fe({color:1119007,roughness:.8}));x.position.set(M.position.x,2.2,M.position.z),i.add(x)}let _=new fe({color:397336,emissive:t.accent,emissiveIntensity:1.4});for(let p=0;p<6;p++){let d=p/6*Math.PI*2+.3,M=new Nt(new Se(.35,5.5,.35),_);M.position.set(Math.cos(d)*(e+4.5),2.75,Math.sin(d)*(e+4.5)),i.add(M)}n.update=(p,d)=>{for(let M of m)M.position.y=M.userData.y+Math.sin(d*1.4+M.userData.ph)*.25}}else if(s==="sunset_roof"){i.add(Lo(t.sky.top,t.sky.mid,t.sky.bot,new T(-.5,.06,-.8),16767392));let o=Co((_,p)=>{_.fillStyle="#2c2c38",_.fillRect(0,0,p,p);for(let d=0;d<900;d++)_.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,_.fillRect(Math.random()*p,Math.random()*p,2,2);_.strokeStyle="rgba(0,0,0,.5)",_.lineWidth=3;for(let d=0;d<=4;d++)_.beginPath(),_.moveTo(d*p/4,0),_.lineTo(d*p/4,p),_.stroke(),_.beginPath(),_.moveTo(0,d*p/4),_.lineTo(p,d*p/4),_.stroke()});o.repeat.set(5,5),i.add(Po(e,new fe({map:o,roughness:.9,metalness:.05}),r));let a=new ze({color:1314847});for(let _=0;_<26;_++){let p=_/26*Math.PI*2,d=34+Math.random()*14,M=4+Math.random()*6,x=6+Math.random()*16,w=new Nt(new Se(M,x,4),a);if(w.position.set(Math.cos(p)*d,x/2-1,Math.sin(p)*d),w.rotation.y=-p,i.add(w),Math.random()<.7){let P=new Nt(new ps(M*.7,x*.5),new ze({color:16761963,transparent:!0,opacity:.5}));P.position.set(Math.cos(p)*(d-2.1),x/2,Math.sin(p)*(d-2.1)),P.rotation.y=-p+Math.PI/2,i.add(P)}}let h=new fe({color:3817290,roughness:.6,metalness:.6});for(let _=0;_<20;_++){let p=_/20*Math.PI*2,d=new Nt(new Se(.15,2.2,.15),h);d.position.set(Math.cos(p)*(e+2.8),1.1,Math.sin(p)*(e+2.8)),i.add(d)}let l=new Nt(new _s(e+2.8,.05,8,64),h);l.rotation.x=Math.PI/2,l.position.y=2.1,i.add(l);let c=new Nt(new Se(1.6,1,1),new fe({color:10133677,roughness:.7,metalness:.4}));c.position.set(e-1.5,.5,e-1),c.castShadow=!0,i.add(c);let u=new Nt(new Oi(1.2,1.2,2.6,16),new fe({color:7371402,roughness:.6,metalness:.5}));u.position.set(-e+1,1.3,-e+2),u.castShadow=!0,i.add(u);let f=new Nt(new Oi(.06,.1,6,8),h);f.position.set(e+1,3,-e-1),i.add(f);let m=new Nt(new Fi(.18,10,8),new ze({color:16720418}));m.position.set(e+1,6.1,-e-1),i.add(m);let g=new Fn(new Qi({map:ic(),color:16756832,transparent:!0,opacity:.95,fog:!1,depthWrite:!1}));g.position.set(-40,7,-60),g.scale.setScalar(26),i.add(g),n.update=(_,p)=>{m.visible=p%1.2<.6}}else{i.add(Lo(t.sky.top,t.sky.mid,t.sky.bot,new T(.2,.4,1),3364351)),i.add(ec(200));let o=Co((g,_)=>{g.fillStyle="#11161f",g.fillRect(0,0,_,_),g.strokeStyle="rgba(157,255,87,.14)",g.lineWidth=2;for(let p=0;p<=6;p++)g.beginPath(),g.moveTo(p*_/6,0),g.lineTo(p*_/6,_),g.stroke(),g.beginPath(),g.moveTo(0,p*_/6),g.lineTo(_,p*_/6),g.stroke();for(let p=0;p<40;p++)g.fillStyle="rgba(255,255,255,.05)",g.beginPath(),g.arc(Math.random()*_,Math.random()*_,Math.random()*3,0,7),g.fill()});o.repeat.set(4,4),i.add(Po(e,new fe({map:o,roughness:.45,metalness:.7}),r));let a=new fe({color:3159615,roughness:.5,metalness:.8}),h=new fe({color:1118481,emissive:t.accent,emissiveIntensity:.9}),l=[];for(let g=0;g<4;g++){let _=g/4*Math.PI*2+Math.PI/4,p=new Nt(new Oi(.12,.15,2.6,10),a);p.position.set(Math.cos(_)*(e+.9),1.3,Math.sin(_)*(e+.9)),p.castShadow=!0,i.add(p),l.push(p.position.clone())}for(let g of[1,1.6,2.2])for(let _=0;_<4;_++){let p=l[_].clone().setY(g),d=l[(_+1)%4].clone().setY(g),M=p.distanceTo(d),x=new Nt(new Oi(.035,.035,M,6),h);x.position.copy(p).lerp(d,.5),x.lookAt(d),x.rotateX(Math.PI/2),i.add(x)}let c=700,u=new Float32Array(c*3);for(let g=0;g<c;g++)u[g*3]=(Math.random()-.5)*60,u[g*3+1]=Math.random()*25,u[g*3+2]=(Math.random()-.5)*60;let f=new be;f.setAttribute("position",new De(u,3));let m=new ms(f,new Bn({color:8956671,size:.12,transparent:!0,opacity:.6}));i.add(m),n.flashLight=null,n.update=(g,_)=>{let p=f.attributes.position.array;for(let d=0;d<c;d++)p[d*3+1]-=g*22,p[d*3+1]<0&&(p[d*3+1]=25,p[d*3]=(Math.random()-.5)*60,p[d*3+2]=(Math.random()-.5)*60);f.attributes.position.needsUpdate=!0,n.flashLight&&Math.random()<g*.5&&(n.flashLight.intensity=120,n.flashT=.12),n.flashT>0&&(n.flashT-=g,n.flashT<=0&&(n.flashLight.intensity=0))}}return{group:i,dyn:n,radius:e}}var kr=class{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.musBus=null,this.muted=!1,this.vol=.7,this.bgmTimer=null,this.bgmStep=0,this.bgmStyle="battle1",this.noiseBuf=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musBus=this.ctx.createGain(),this.musBus.gain.value=.5,this.musBus.connect(this.master);let e=this.ctx.sampleRate*1;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1;this.applyVol()}applyVol(){this.master&&(this.master.gain.value=this.muted?0:this.vol*this.vol*1.2)}setVol(t){this.vol=t,this.applyVol()}setMute(t){this.muted=t,this.applyVol()}now(){return this.ctx?this.ctx.currentTime:0}tone({f:t=440,f1:e=null,t:i=.15,type:n="sine",g:r=.5,at:o=0,bus:a=null}={}){if(!this.ctx)return;let h=this.ctx,l=h.createOscillator(),c=h.createGain(),u=h.currentTime+o;l.type=n,l.frequency.setValueAtTime(t,u),e!=null&&l.frequency.exponentialRampToValueAtTime(Math.max(1,e),u+i),c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(r,u+.008),c.gain.exponentialRampToValueAtTime(1e-4,u+i),l.connect(c),c.connect(a||this.sfxBus),l.start(u),l.stop(u+i+.05)}noise({t=.2,g:e=.5,at:i=0,hp:n=null,lp:r=null,f1:o=null,Q:a=1,bus:h=null}={}){if(!this.ctx)return;let l=this.ctx,c=l.createBufferSource(),u=l.createGain(),f=l.currentTime+i;c.buffer=this.noiseBuf,c.loop=!0;let m=c;if(n!=null){let g=l.createBiquadFilter();g.type="highpass",g.frequency.value=n,m.connect(g),m=g}if(r!=null){let g=l.createBiquadFilter();g.type="lowpass",g.frequency.value=r,g.Q.value=a,o!=null&&g.frequency.exponentialRampToValueAtTime(o,f+t),m.connect(g),m=g}u.gain.setValueAtTime(1e-4,f),u.gain.exponentialRampToValueAtTime(e,f+.006),u.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(u),u.connect(h||this.sfxBus),c.start(f),c.stop(f+t+.05)}uiMove(){this.tone({f:660,f1:880,t:.07,type:"square",g:.12})}uiOk(){this.tone({f:520,t:.09,type:"square",g:.16}),this.tone({f:780,at:.07,t:.12,type:"square",g:.16})}uiBack(){this.tone({f:440,f1:220,t:.12,type:"square",g:.14})}whiff(t=1){this.noise({t:.12,lp:2500,f1:500,g:.16*t})}punch(t=1){this.noise({t:.1,lp:1800,g:.5*t}),this.tone({f:160,f1:60,t:.14,g:.55*t})}kick(t=1){this.noise({t:.13,lp:1200,g:.5*t}),this.tone({f:120,f1:45,t:.18,g:.6*t})}heavyHit(){this.noise({t:.25,lp:900,g:.7}),this.tone({f:90,f1:32,t:.35,g:.8}),this.tone({f:1400,f1:200,t:.1,type:"sawtooth",g:.2})}block(){this.tone({f:320,f1:180,t:.12,type:"square",g:.3}),this.noise({t:.08,hp:1500,g:.25})}parry(){this.tone({f:1200,f1:2400,t:.18,type:"triangle",g:.4}),this.tone({f:1800,at:.05,t:.25,type:"sine",g:.3}),this.noise({t:.15,hp:3e3,g:.2})}crush(){this.tone({f:200,f1:50,t:.4,type:"sawtooth",g:.5}),this.noise({t:.3,lp:700,g:.5})}grab(){this.noise({t:.12,lp:800,g:.4}),this.tone({f:200,f1:90,t:.15,g:.4})}thrown(){this.noise({t:.3,lp:1500,f1:300,g:.35}),this.tone({f:300,f1:80,t:.3,type:"sawtooth",g:.25})}land(){this.noise({t:.12,lp:500,g:.4}),this.tone({f:100,f1:45,t:.12,g:.4})}jump(){this.tone({f:280,f1:560,t:.12,type:"triangle",g:.18})}dash(){this.noise({t:.18,lp:3500,f1:600,g:.22})}step(){this.noise({t:.05,lp:600,g:.12})}bell(t=1){for(let e=0;e<t;e++)this.tone({f:880,at:e*.5,t:.8,g:.3}),this.tone({f:1320,at:e*.5,t:.6,g:.15})}count(t=!1){t?(this.tone({f:880,t:.35,type:"square",g:.3}),this.tone({f:1320,at:.02,t:.35,type:"square",g:.2})):this.tone({f:440,t:.12,type:"square",g:.22})}ko(){this.tone({f:70,f1:28,t:1,g:.9}),this.noise({t:.6,lp:600,g:.7}),this.tone({f:1500,f1:100,t:.5,type:"sawtooth",g:.2}),this.bell(2)}superFlash(){this.tone({f:100,f1:2e3,t:.6,type:"sawtooth",g:.25}),this.noise({t:.6,hp:500,g:.2}),this.tone({f:60,f1:120,t:.5,g:.6})}superHit(t){this.noise({t:.12,lp:2e3,g:.55}),this.tone({f:200+t*60,f1:70,t:.16,g:.6})}superFinish(){this.heavyHit(),this.tone({f:500,f1:50,t:.8,type:"sawtooth",g:.4})}roundWin(){[523,659,784,1046].forEach((t,e)=>this.tone({f:t,at:e*.1,t:.25,type:"triangle",g:.3}))}announce(){this.tone({f:150,f1:600,t:.3,type:"sawtooth",g:.2})}startBGM(t="battle1"){if(!this.ctx)return;this.stopBGM(),this.bgmStyle=t,this.bgmStep=0;let e=t==="title"?.24:.155,i=()=>{this.ctx&&(this.playStep(this.bgmStep,t),this.bgmStep++,this.bgmTimer=setTimeout(i,e*1e3))};i()}stopBGM(){this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)}playStep(t,e){let i=this.musBus,n=Math.floor(t/16)%4,r=t%16;if(e==="title"){let l=[110,87.3,130.8,98],c=[0,3,7,12,15,19,24];if(r%2===0){let u=l[n]*Math.pow(2,c[t/2%7]/12);this.tone({f:u,t:.22,type:"triangle",g:.2,bus:i,at:0})}r===0&&this.tone({f:l[n]/2,t:.5,type:"sine",g:.3,bus:i}),r%8===4&&this.noise({t:.06,hp:6e3,g:.05,bus:i});return}let o=[41.2,41.2,43.6,41.2,49,41.2,46.2,43.6,41.2,41.2,55,49,46.2,43.6,41.2,39],a=e==="battle2"?o[r]*1.335:o[r];r%2===0&&this.tone({f:a,t:.16,type:"sawtooth",g:.16,bus:i}),this.tone({f:a/2,t:.14,type:"sine",g:.3,bus:i,at:0}),r%4===0&&this.tone({f:120,f1:40,t:.12,g:.5,bus:i}),r%4===2&&this.noise({t:.08,hp:1800,g:.22,bus:i}),r%2===1&&this.noise({t:.03,hp:8e3,g:.07,bus:i});let h=[329.6,392,493.9,587.3,493.9,392];n>=1&&r%2===1&&this.tone({f:h[(t+n)%6]*(e==="battle2"?.891:1),t:.12,type:"square",g:.06,bus:i}),r===0&&n===3&&this.tone({f:82.4,t:.5,type:"sawtooth",g:.12,bus:i})}};var Y=s=>document.getElementById(s),rn=(s,t,e)=>Math.max(t,Math.min(e,s)),ft=new T,Ee=new T,Yt=new T,Do=class{constructor(t){this.g=t,this.held=new Set,this.pressed=new Set,this.mdx=0,this.mdy=0,this.locked=!1,this.drag=!1,this.lx=0,this.ly=0,this.wheel=0,this.padPrev=[[],[]],this.stick={x:0,y:0},this.touchHeld=new Set,this.touchPressed=new Set,this.lastW=0,this.init()}init(){addEventListener("keydown",e=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Quote"].includes(e.code)&&e.preventDefault(),!e.repeat){if(this.held.add(e.code),this.pressed.add(e.code),e.code==="KeyW"){let i=performance.now()/1e3;i-this.lastW<.3&&this.pressed.add("__dashF"),this.lastW=i}this.g.onKeyEdge(e.code)}}),addEventListener("keyup",e=>{this.held.delete(e.code)}),addEventListener("blur",()=>{this.held.clear()});let t=Y("cv");t.addEventListener("mousedown",e=>{if(this.g.state==="fight"||this.g.state==="intro")try{let n=t.requestPointerLock&&t.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}this.drag=!0,this.lx=e.clientX,this.ly=e.clientY;let i=e.button===0?"__m0":e.button===2?"__m2":"__m1";this.held.add(i),this.pressed.add(i)}),addEventListener("mouseup",e=>{this.drag=!1;let i=e.button===0?"__m0":e.button===2?"__m2":"__m1";this.held.delete(i)}),addEventListener("mousemove",e=>{document.pointerLockElement===t?(this.mdx+=e.movementX,this.mdy+=e.movementY):this.drag&&(this.mdx+=e.clientX-this.lx,this.mdy+=e.clientY-this.ly,this.lx=e.clientX,this.ly=e.clientY)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY)},{passive:!0}),"ontouchstart"in window&&this.initTouch()}initTouch(){let t=Y("stick"),e=Y("stick-knob"),i=null,n=0,r=0,o=(h,l)=>{e.style.transform=`translate(${h}px,${l}px)`};t.addEventListener("touchstart",h=>{h.preventDefault(),i=h.changedTouches[0].identifier;let c=t.getBoundingClientRect();n=c.left+c.width/2,r=c.top+c.height/2},{passive:!1}),t.addEventListener("touchmove",h=>{h.preventDefault();for(let l of h.changedTouches)if(l.identifier===i){let c=l.clientX-n,u=l.clientY-r,f=Math.hypot(c,u)||1,m=Math.min(f,44);c=c/f*m,u=u/f*m,o(c,u),this.stick.x=c/44,this.stick.y=u/44}},{passive:!1});let a=h=>{for(let l of h.changedTouches)l.identifier===i&&(i=null,o(0,0),this.stick.x=0,this.stick.y=0)};t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),document.querySelectorAll(".tbtn").forEach(h=>{let l=h.dataset.a;h.addEventListener("touchstart",c=>{c.preventDefault(),this.touchHeld.add(l),this.touchPressed.add(l),this.g.onTouchEdge(l)},{passive:!1}),h.addEventListener("touchend",c=>{c.preventDefault(),this.touchHeld.delete(l)},{passive:!1})})}pollPads(){let t=[null,null];try{let e=navigator.getGamepads?navigator.getGamepads():[],i=0;for(let n of e)n&&n.connected&&i<2&&(t[i++]=n)}catch{}return t}consumeCam(){let t=this.pollPads();if(this._pads=t,this.g.mode==="versus")return this.mdx=0,this.mdy=0,this.wheel=0,{dx:0,dy:0,w:0};let e=this.mdx,i=this.mdy;this.mdx=0,this.mdy=0;let n=this.held;n.has("ArrowLeft")&&(e-=9),n.has("ArrowRight")&&(e+=9),n.has("ArrowUp")&&(i-=7),n.has("ArrowDown")&&(i+=7);let r=t[0];if(r){let a=r.axes[2]||0,h=r.axes[3]||0;Math.abs(a)>.15&&(e+=a*22),Math.abs(h)>.15&&(i+=h*16)}let o=this.wheel;return this.wheel=0,{dx:e,dy:i,w:o}}padEdge(t,e){let i=(this._pads||[])[t];if(!i)return!1;let n=i.buttons[e]&&i.buttons[e].pressed,r=this.padPrev[t][e];return this.padPrev[t][e]=n,n&&!r}padHeld(t,e){let i=(this._pads||[])[t];return!!(i&&i.buttons[e]&&i.buttons[e].pressed)}cmdP1(t,e,i,n=!1){let r=this.held,o=this.pressed,a=this.touchHeld,h=this.touchPressed,l=(this._pads||[])[0],c=0,u=0;r.has("KeyW")&&(u+=1),r.has("KeyS")&&(u-=1),r.has("KeyA")&&(c-=1),r.has("KeyD")&&(c+=1),c+=this.stick.x,u-=this.stick.y,l&&(c+=l.axes[0]||0,u-=l.axes[1]||0,l.buttons[14]&&l.buttons[14].pressed&&(c-=1),l.buttons[15]&&l.buttons[15].pressed&&(c+=1),l.buttons[12]&&l.buttons[12].pressed&&(u+=1),l.buttons[13]&&l.buttons[13].pressed&&(u-=1));let f=Math.hypot(c,u);f>1&&(c/=f,u/=f);let m=Math.sin(t),g=Math.cos(t),_={mx:c*g+u*m,mz:-c*m+u*g,punch:o.has("KeyJ")||o.has("__m0")||h.has("punch")||this.padEdge(0,2),kick:o.has("KeyK")||o.has("__m2")||h.has("kick")||this.padEdge(0,1),heavy:o.has("KeyL")||o.has("KeyF")||h.has("heavy")||this.padEdge(0,3),grab:o.has("KeyE")||o.has("KeyG")||h.has("grab")||this.padEdge(0,5),super:o.has("KeyR")||o.has("KeyQ")||h.has("super")||this.padEdge(0,7),jump:o.has("Space")||h.has("jump")||this.padEdge(0,0),dash:o.has("ShiftLeft")||!n&&o.has("ShiftRight")||o.has("__dashF")||h.has("dash")||this.padEdge(0,6),block:r.has("KeyC")||r.has("ControlLeft")||a.has("block")||this.padHeld(0,4),taunt:o.has("KeyT")||this.padEdge(0,8),sweepKick:!1};return _.kick&&e&&i&&(ft.subVectors(i.pos,e.pos),ft.normalize(),_.mx*ft.x+_.mz*ft.z<-.25&&(_.sweepKick=!0)),_}cmdP2(t,e,i){let n=this.held,r=this.pressed,o=0,a=0;n.has("ArrowUp")&&(a+=1),n.has("ArrowDown")&&(a-=1),n.has("ArrowLeft")&&(o-=1),n.has("ArrowRight")&&(o+=1);let h=(this._pads||[])[1]||(this._pads||[])[0],l=(this._pads||[])[1]?1:0;h&&l===1&&(o+=h.axes[0]||0,a-=h.axes[1]||0);let c=Math.hypot(o,a);c>1&&(o/=c,a/=c);let u=Math.sin(t),f=Math.cos(t),m={mx:o*f+a*u,mz:-o*u+a*f,punch:r.has("Numpad1")||r.has("Comma")||this.padEdge(l,2),kick:r.has("Numpad2")||r.has("Period")||this.padEdge(l,1),heavy:r.has("Numpad3")||r.has("Slash")||this.padEdge(l,3),grab:r.has("Numpad5")||r.has("Semicolon")||this.padEdge(l,5),super:r.has("Numpad6")||r.has("Quote")||this.padEdge(l,7),jump:r.has("Numpad0")||r.has("Backslash")||this.padEdge(l,0),dash:r.has("ControlRight")||r.has("NumpadEnter")||this.padEdge(l,6),block:n.has("ShiftRight")||n.has("NumpadDecimal")||this.padHeld(l,4),taunt:!1,sweepKick:!1};return m.kick&&e&&i&&(ft.subVectors(i.pos,e.pos),ft.normalize(),m.mx*ft.x+m.mz*ft.z<-.25&&(m.sweepKick=!0)),m}endFrame(){this.pressed.clear(),this.touchPressed.clear()}},Uo=class{constructor(t,e){this.setDiff(t),this.p=e,this.thinkT=0,this.plan={mode:"approach",until:0},this.strafe=1,this.strafeT=0,this.blockHold=0,this.execT=0,this.queued=null}setDiff(t){this.dk=t,this.d=sn[t]}reset(){this.thinkT=0,this.blockHold=0,this.queued=null,this.plan={mode:"approach",until:0}}update(t,e,i,n=null){let r=e.cmd;if(r.mx=0,r.mz=0,r.punch=!1,r.kick=!1,r.heavy=!1,r.grab=!1,r.super=!1,r.jump=!1,r.dash=!1,r.block=!1,r.taunt=!1,r.sweepKick=!1,e.state==="ko"||e.state==="win"||e.state==="intro")return;if(n){if(n==="guard"){let f=i.state==="attack";r.block=f||e.distTo(i)<2.5}else if(n==="random"){if(this.thinkT-=t,this.thinkT<=0){this.thinkT=.5+Math.random()*.8;let f=Math.random();this.plan.mode=f<.3?"hold":f<.55?"back":f<.8?"side":"jump",this.strafe=Math.random()<.5?-1:1}this.applyPlanMove(r,e,i,t,!0),this.plan.mode==="jump"&&(r.jump=!0)}return}let o=this.d,a=this.p,h=e.distTo(i);ft.subVectors(i.pos,e.pos),ft.y=0,ft.normalize();let l=ft.x,c=ft.z;if(e.state==="attack"&&e.hasHit&&Math.random()<o.comboCh){let f=e.atk;f&&e.atkT>f.active[1]-.12&&f.chain&&(f.chain.punch?r.punch=!0:f.chain.kick&&(r.kick=!0))}if(this.thinkT-=t,this.strafeT-=t,this.blockHold-=t,this.thinkT<=0){this.thinkT=o.think*(.7+Math.random()*.6)+o.react*.4;let f=i.state==="attack",g=f&&i.atk&&i.atkT>i.atk.active[1],_=Math.random(),p=rn(a.aggro*o.aggroMul*(e.hp<25?1.25:1)*(i.hp<20?1.2:1),0,1);if(f&&i.atkT<i.atk.startup+.05&&h<3.2&&_<o.blockCh&&e.grounded())this.plan={mode:"block",until:.35+Math.random()*.3},this.blockHold=this.plan.until;else if(g&&h<3&&_<o.punishCh)this.plan={mode:"punish",until:.3};else if(h>5.5)this.plan={mode:_<a.dashUse&&e.stam>25?"dashin":"approach",until:.5};else if(h<1.5){let d=Math.random();i.state==="block"&&d<.5?this.plan={mode:"grab",until:.3}:d<p?this.plan={mode:"attack",until:.4}:d<p+.18?this.plan={mode:"back",until:.35}:d<p+.3?this.plan={mode:"grab",until:.3}:this.plan={mode:"block",until:.4}}else if(h<3.2){let d=Math.random();d<p*.75?this.plan={mode:"attack",until:.4}:d<p*.75+.2?(this.plan={mode:"side",until:.5},Math.random()<.4&&(this.strafe*=-1)):this.plan={mode:"approach",until:.4}}else{let d=Math.random();d<.55?this.plan={mode:"approach",until:.5}:d<.75?(this.plan={mode:"side",until:.6},Math.random()<.5&&(this.strafe*=-1)):this.plan={mode:"block",until:.3}}e.meter>=100&&h<4.5&&h>1.2&&Math.random()<a.superUse*.4&&(this.plan={mode:"super",until:.4}),this.strafeT<=0&&(this.strafeT=1+Math.random()*2,Math.random()<.35&&(this.strafe*=-1))}let u=this.plan.mode;if((u==="block"||this.blockHold>0)&&(r.block=!0),e.state==="idle")switch(u){case"approach":r.mx=l,r.mz=c;break;case"dashin":r.mx=l,r.mz=c,h>3.5&&(r.dash=!0);break;case"back":r.mx=-l,r.mz=-c,Math.random()<.02&&(r.dash=!0);break;case"side":r.mx=-c*this.strafe+l*.25,r.mz=l*this.strafe+c*.25;break;case"attack":{if(r.mx=l*.6,r.mz=c*.6,h<2.6){let f=Math.random();f<.42?r.punch=!0:f<.7?r.kick=!0:f<.85?r.heavy=!0:r.grab=!0}break}case"punish":{r.mx=l,r.mz=c,h<2.8&&(Math.random()<.4?r.heavy=!0:Math.random()<.5?r.kick=!0:r.punch=!0);break}case"grab":r.mx=l*.5,r.mz=c*.5,h<2.2&&(r.grab=!0);break;case"super":r.mx=l*.3,r.mz=c*.3,h<4.2&&(r.super=!0);break}}applyPlanMove(t,e,i,n,r){ft.subVectors(i.pos,e.pos),ft.y=0,ft.normalize();let o=this.plan.mode;o==="back"?(t.mx=-ft.x,t.mz=-ft.z):o==="side"?(t.mx=-ft.z*this.strafe,t.mz=ft.x*this.strafe):o==="hold"&&(t.block=!0)}},Fr=class{constructor(){this.state="boot",this.paused=!1,this.settings=Vh(),this.audio=new kr,this.f1=null,this.f2=null,this.brain2=null,this.mode="arcade",this.stageDef=nn[0],this.stage=null,this.sel={p1:0,p2:1,stage:0,diff:this.settings.diff},this.wins=[0,0],this.round=1,this.timer=pe.roundTime,this.fightOn=!1,this.timers=[],this.stateT=0,this.freeze=0,this.timeScale=1,this.tsTarget=1,this.slowT=0,this.trauma=0,this.camMode=this.settings.cam||"third",this.camYaw=Math.PI,this.camPitch=.08,this.camDist=4.4,this.lastMouseT=-9,this.lookSm=new T,this.lookInit=!1,this.ko=null,this.matchTime=0,this.combo=[{n:0,dmg:0,last:-9},{n:0,dmg:0,last:-9}],this.ghostBar=[1,1],this.ghostDelay=[0,0],this.survWins=0,this.ladder=0,this.ladderFoes=[],this.fovKick=0,this.stepT=[0,0],this.ghostT=[0,0],this.dmgPool=[],this.dmgI=0,this.fpPunch={l:0,r:0}}boot(){Y("t-ver").textContent="v"+zh,this.load_fill(10,"\u63CF\u753B\u30A8\u30F3\u30B8\u30F3\u8D77\u52D5...");let t=this.qualityDef();try{this.renderer=new On({canvas:Y("cv"),antialias:t.antialias,powerPreference:"high-performance"})}catch{try{this.renderer=new On({canvas:Y("cv"),antialias:!1})}catch{throw new Error("WebGL\u306E\u521D\u671F\u5316\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u3053\u306E\u30D6\u30E9\u30A6\u30B6/\u7AEF\u672B\u3067\u306F3D\u8868\u793A\u304C\u4F7F\u3048\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092ON\u306B\u3057\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002")}}this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,t.pixelRatio)),this.renderer.toneMapping=vo,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=this.settings.shadow,this.renderer.shadowMap.type=yo,this.scene=new yr,this.camera=new Pe(55,innerWidth/innerHeight,.08,220),this.scene.add(this.camera),this.hemi=new Tr(9419007,1707818,.75),this.scene.add(this.hemi),this.sun=new Wn(16777215,1.6),this.sun.position.set(8,14,6),this.sun.castShadow=this.settings.shadow,this.sun.shadow.mapSize.set(t.shadow,t.shadow),this.sun.shadow.camera.left=-14,this.sun.shadow.camera.right=14,this.sun.shadow.camera.top=14,this.sun.shadow.camera.bottom=-14,this.sun.shadow.camera.far=40,this.sun.shadow.bias=-.002,this.scene.add(this.sun),this.rim=new Wn(61695,.5),this.rim.position.set(-8,6,-10),this.scene.add(this.rim),this.flashStorm=new Wn(11193599,0),this.flashStorm.position.set(0,20,0),this.scene.add(this.flashStorm),this.fx=new Nr(this.scene),this.fx.setBudget({low:.45,med:.8,high:1}[this.settings.quality]),this.input=new Do(this),this.buildFPGloves(),this.buildDmgPool(),this.load_fill(45,"\u30B9\u30C6\u30FC\u30B8\u69CB\u7BC9..."),this.buildStage(nn[0]),this.buildFighters(ge[0],ge[3]),this.f1.reset(-2.5,0,Math.PI/2),this.f2.reset(2.5,0,-Math.PI/2),this.f1.state="idle",this.f2.state="idle",this.applySettings(!1),this.wireUI(),addEventListener("resize",()=>this.onResize()),addEventListener("pointerdown",()=>this.audio.init()),this.load_fill(80,"\u30D5\u30A1\u30A4\u30CA\u30E9\u30A4\u30BA..."),this.showScreen("s-title"),this.state="title",this.audio.init(),this.audio.startBGM("title"),this.load_fill(100,"\u5B8C\u4E86"),setTimeout(()=>{let e=Y("loader");e&&(e.style.opacity=0,e.style.pointerEvents="none",setTimeout(()=>e.remove(),600))},350),this.last=performance.now(),requestAnimationFrame(e=>this.loop(e))}load_fill(t,e){Y("load-fill").style.width=t+"%",e&&(Y("load-tx").textContent=e)}qualityDef(){return{low:{pixelRatio:1,shadow:512,antialias:!1},med:{pixelRatio:1.5,shadow:1024,antialias:!0},high:{pixelRatio:2,shadow:2048,antialias:!0}}[this.settings.quality]}buildStage(t){this.stage&&(this.scene.remove(this.stage.group),this.stage.group.traverse(e=>{if(e.isMesh||e.isPoints||e.isSprite){e.geometry&&e.geometry.dispose&&e.geometry.dispose();let i=e.material;i&&(Array.isArray(i)?i:[i]).forEach(n=>{n.map&&n.map.dispose&&n.map.dispose(),n.dispose&&n.dispose()})}})),this.stageDef=t,this.stage=nc(t.id,t),this.scene.add(this.stage.group),this.stage.dyn&&(this.stage.dyn.flashLight=this.flashStorm),this.scene.fog=new xr(t.fog,18,85),this.fighterEnv&&(this.fighterEnv.arenaR=t.radius),t.id==="sunset_roof"?(this.sun.color.set(16756848),this.sun.intensity=1.7,this.hemi.intensity=.6):t.id==="storm_ring"?(this.sun.color.set(10336511),this.sun.intensity=1,this.hemi.intensity=.7):(this.sun.color.set(13625087),this.sun.intensity=1.5,this.hemi.intensity=.75)}buildFighters(t,e){if(this.f1)for(let i of[this.f1,this.f2])this.scene.remove(i.rig.group),i.rig.group.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.dispose()}),Object.values(i.rig.mats).forEach(n=>{n.dispose&&n.dispose()});this.f1=new vs(this.scene,t,{label:"1P"}),this.f2=new vs(this.scene,e,{label:"2P"}),this.f1.isCPU=!1,this.f2.isCPU=!0,this.brain2=new Uo(this.sel.diff,e.ai),this.fighterEnv={arenaR:this.stage?this.stage.radius:9.5,arenaX:0,arenaZ:0,dmgMul:1,sfx:(i,n)=>this.playSfx(i,n),tryHit:(i,n,r,o)=>this.tryHit(i,n,r,o),onHit:(i,n,r,o,a)=>this.cbHit(i,n,r,o,a),onBlock:(i,n,r,o)=>this.cbBlock(i,n,r,o),onParry:(i,n)=>this.cbParry(i,n),onCrush:i=>this.cbCrush(i),onLaunch:(i,n,r,o,a)=>this.cbLaunch(i,n,r,o,a),onGrab:(i,n,r,o)=>this.cbGrab(i,n,r,o),onKO:(i,n,r)=>this.cbKO(i,n,r),onLandDown:(i,n)=>this.cbLandDown(i,n),onWallSplat:i=>this.cbWall(i),onSuperStart:(i,n)=>this.cbSuperStart(i,n)}}buildFPGloves(){this.fpG=new $t;let t=e=>{let i=new $t,n=new fe({color:15251594,roughness:.7}),r=new fe({color:16723349,roughness:.5}),o=new Nt(new Hn(.055,.22,4,8),n);o.rotation.x=1.1,o.position.set(0,-.05,.14),i.add(o);let a=new Nt(new Se(.11,.12,.12),r);return i.add(a),i.position.set(.3*e,-.26,-.55),i.rotation.set(.2,.1*-e,0),this.fpG.add(i),i};this.fpL=t(-1),this.fpR=t(1),this.fpG.visible=!1,this.camera.add(this.fpG)}buildDmgPool(){let t=Y("dmg-layer");for(let e=0;e<24;e++){let i=document.createElement("div");i.className="dmgnum",i.style.display="none",t.appendChild(i),this.dmgPool.push({el:i,life:0,pos:new T,vy:0})}}wireUI(){let t=this.audio,e=(i,n)=>Y(i).addEventListener("click",()=>{t.init(),t.uiOk(),n()});e("btn-start",()=>{this.showScreen("s-mode"),this.state="mode"}),e("m-arcade",()=>this.toSelect("arcade")),e("m-survival",()=>this.toSelect("survival")),e("m-versus",()=>this.toSelect("versus")),e("m-training",()=>this.toSelect("training")),e("m-help",()=>this.showScreen("s-help")),e("m-settings",()=>{this.syncSettingsUI(),this.showScreen("s-settings"),this._setBack="s-mode"}),e("m-back",()=>{this.showScreen("s-title"),this.state="title"}),e("btn-help-back",()=>{this.showScreen((this.mode==="none","s-mode"))}),e("btn-set-back",()=>this.showScreen(this._setBack||"s-mode")),e("btn-select-back",()=>{this.showScreen("s-mode"),this.state="mode"}),e("btn-fight",()=>this.onFightPressed()),e("btn-resume",()=>this.togglePause(!1)),e("btn-restart",()=>{this.togglePause(!1),this.startMatch(this.lastOpts)}),e("btn-quit",()=>{this.togglePause(!1),this.quitToMode()}),e("btn-rematch",()=>{Y("s-result").classList.add("hidden"),this.startMatch(this.lastOpts)}),e("btn-reselect",()=>{this.quitToSelect()}),e("btn-retitle",()=>{this.quitToMode(),this.showScreen("s-title"),this.state="title",this.audio.startBGM("title")}),Y("set-vol").addEventListener("input",i=>{this.settings.vol=+i.target.value,Y("p-vol").value=this.settings.vol,this.applyAudio(),oi(this.settings)}),Y("p-vol").addEventListener("input",i=>{this.settings.vol=+i.target.value,Y("set-vol").value=this.settings.vol,this.applyAudio(),oi(this.settings)}),Y("set-mute").addEventListener("change",i=>{this.settings.mute=i.target.checked,this.applyAudio(),oi(this.settings)}),Y("set-quality").addEventListener("change",i=>{this.settings.quality=i.target.value,oi(this.settings),this.applyQuality()}),Y("set-shadow").addEventListener("change",i=>{this.settings.shadow=i.target.checked,oi(this.settings),this.applyQuality()}),Y("set-shake").addEventListener("change",i=>{this.settings.shake=i.target.checked,oi(this.settings)}),Y("set-cam").addEventListener("change",i=>{this.settings.cam=i.target.value,oi(this.settings)}),Y("set-diff").addEventListener("change",i=>{this.settings.diff=i.target.value,oi(this.settings)}),document.querySelectorAll("#dummy-row .pill").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll("#dummy-row .pill").forEach(n=>n.classList.remove("on")),i.classList.add("on"),this.dummyMode=i.dataset.dummy,t.uiOk()})),document.querySelectorAll("[data-tact]").forEach(i=>i.addEventListener("click",()=>{t.uiOk();let n=i.dataset.tact;n==="reset"&&this.resetPositions(),n==="meter"&&(this.f1.meter=100,this.f2.meter=100),n==="heal"&&(this.f1.hp=this.f1.maxhp,this.f2.hp=this.f2.maxhp)}))}showScreen(t){document.querySelectorAll(".screen").forEach(e=>e.classList.add("hidden")),t&&Y(t).classList.remove("hidden")}syncSettingsUI(){Y("set-vol").value=this.settings.vol,Y("p-vol").value=this.settings.vol,Y("set-mute").checked=this.settings.mute,Y("set-quality").value=this.settings.quality,Y("set-shadow").checked=this.settings.shadow,Y("set-shake").checked=this.settings.shake,Y("set-cam").value=this.settings.cam,Y("set-diff").value=this.settings.diff}applySettings(t=!0){this.applyQuality(),t&&this.applyAudio()}applyQuality(){let t=this.qualityDef();this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,t.pixelRatio)),this.renderer.shadowMap.enabled=this.settings.shadow,this.sun.castShadow=this.settings.shadow;let e=t.shadow;this.sun.shadow.mapSize.x!==e&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.fx.setBudget({low:.45,med:.8,high:1}[this.settings.quality])}applyAudio(){this.audio.setVol(this.settings.vol/100),this.audio.setMute(this.settings.mute)}toast(t,e=1800){let i=Y("toast");i.textContent=t,i.classList.remove("hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>i.classList.add("hidden"),e)}toSelect(t){this.mode=t,this.state="select";let e={arcade:"VS CPU \u2014 \u523A\u5BA2\u9078\u629E",survival:"\u30B5\u30D0\u30A4\u30D0\u30EB \u2014 \u95D8\u58EB\u9078\u629E",versus:"2P\u5BFE\u6226 \u2014 \u95D8\u58EB\u9078\u629E",training:"\u4FEE\u884C \u2014 \u95D8\u58EB\u9078\u629E"};Y("sel-title").textContent=e[t],Y("p2-wrap").classList.toggle("hidden",t!=="versus"),Y("diff-wrap").style.display=t==="versus"||t==="training"?"none":"",this.sel.diff=this.settings.diff,this.buildCharRow("char-row","p1"),t==="versus"&&this.buildCharRow("p2-row","p2");let i=Y("stage-row");i.innerHTML="",nn.forEach((r,o)=>{let a=document.createElement("button");a.className="pill"+(o===this.sel.stage?" on":""),a.textContent=r.name,a.title=r.desc,a.addEventListener("click",()=>{this.audio.uiMove(),this.sel.stage=o,i.querySelectorAll(".pill").forEach((h,l)=>h.classList.toggle("on",l===o))}),i.appendChild(a)});let n=Y("diff-row");n.innerHTML="",Object.keys(sn).forEach(r=>{let o=document.createElement("button");o.className="pill"+(r===this.sel.diff?" on":""),o.textContent=sn[r].name,o.addEventListener("click",()=>{this.audio.uiMove(),this.sel.diff=r,n.querySelectorAll(".pill").forEach(a=>a.classList.remove("on")),o.classList.add("on")}),n.appendChild(o)}),this.f1&&(this.letterbox(!1),this.speedlines(!1),this.f1.reset(-2.5,0,Math.PI/2),this.f2.reset(2.5,0,-Math.PI/2)),this.showScreen("s-select")}buildCharRow(t,e){let i=Y(t);i.innerHTML="",ge.forEach((n,r)=>{let o=document.createElement("div");o.className="char-card"+(this.sel[e]===r?" sel":""),o.style.setProperty("--c",n.color);let a=(h,l)=>`<div><em>${h}</em><div class="statbar"><i style="width:${l*20}%"></i></div></div>`;o.innerHTML=`<div class="char-kanji">${n.kanji}</div><div class="char-name">${n.name}</div>
        <div class="char-style">${n.style}</div>
        ${t==="char-row"?`<div class="char-desc">${n.desc}</div>
        <div class="char-stats">${a("\u653B\u6483",n.stats.pow)}${a("\u901F\u5EA6",n.stats.spd)}${a("\u8010\u4E45",n.stats.sta)}</div>`:""}`,o.addEventListener("click",()=>{this.audio.uiMove(),this.sel[e]=r,i.querySelectorAll(".char-card").forEach((h,l)=>h.classList.toggle("sel",l===r))}),i.appendChild(o)})}onFightPressed(){if(this.mode==="versus"&&this.sel.p1===this.sel.p2){this.toast("2P\u306F\u5225\u306E\u30D5\u30A1\u30A4\u30BF\u30FC\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044");return}let t={mode:this.mode,p1:this.sel.p1,p2:this.sel.p2,stage:this.sel.stage,diff:this.sel.diff};this.showScreen(null),this.startMatch(t)}startMatch(t){if(this.lastOpts=Object.assign({},t),this.mode=t.mode,this.showScreen(null),Y("hud").classList.remove("hidden"),Y("touch").classList.toggle("hidden",!("ontouchstart"in window)),Y("surv-info").classList.toggle("hidden",t.mode!=="survival"),Y("train-info").classList.toggle("hidden",t.mode!=="training"),this.buildStage(nn[t.stage]),t.mode==="arcade"&&this.ladderFoes.length===0){let n=[0,1,2,3].filter(r=>r!==t.p1);for(let r=n.length-1;r>0;r--){let o=Math.random()*(r+1)|0;[n[r],n[o]]=[n[o],n[r]]}this.ladderFoes=n.slice(0,3),this.ladder=0}let e=t.p2;t.mode==="arcade"&&(e=this.ladderFoes[this.ladder]??t.p2),t.mode==="survival"&&this.survFoe!==void 0&&this._survCont?e=this.survFoe:t.mode==="survival"&&(e=(t.p1+1+(Math.random()*3|0))%4,this.survWins=0),this._survCont=!1,this.buildFighters(ge[t.p1],ge[e]),this.f2.isCPU=t.mode!=="versus";let i=t.diff;t.mode==="survival"&&(i=["easy","normal","normal","hard","hard","master"][Math.min(5,this.survWins)]),t.mode==="arcade"&&(i=["normal","hard","master"][Math.min(2,this.ladder)]),this.brain2.setDiff(i),this.brain2.reset(),this.dummyMode="stand",this.matchDiff=i,Y("name1").textContent=ge[t.p1].name,Y("name2").textContent=ge[e].name,Y("tag1").textContent="1P",Y("tag1").className="ptag p1",Y("tag2").textContent=t.mode==="versus"?"2P":"CPU",Y("tag2").className="ptag p2",this.wins=[0,0],this.round=1,this.matchTime=0,this.camMode=t.mode==="versus"?"dual":this.settings.cam||"third",this.fx.clear(),this.letterbox(!1),this.speedlines(!1),this.freeze=0,this.tsTarget=1,this.timeScale=1,this.trauma=0,this.resetPositions(),Y("vs-kanji1").textContent=ge[t.p1].kanji,Y("vs-name1").textContent=ge[t.p1].name,Y("vs-style1").textContent=ge[t.p1].style,Y("vs-kanji2").textContent=ge[e].kanji,Y("vs-name2").textContent=ge[e].name,Y("vs-style2").textContent=ge[e].style,Y("vs-stage").textContent="\u2014 "+nn[t.stage].name+" \u2014",Y("vs-sub").textContent={arcade:`\u523A\u5BA2 ${this.ladder+1}/3 \xB7 ${sn[i].name}`,survival:`\u9023\u52DD ${this.survWins} \xB7 ${sn[i].name}`,versus:"LOCAL 2P BATTLE",training:"TRAINING"}[t.mode],Y("versus").classList.remove("hidden"),this.audio.stopBGM(),this.audio.superFlash(),this.state="versus",this.stateT=0,this.timers.length=0,this.after(2.3,()=>{Y("versus").classList.add("hidden"),this.startRound()}),this.updatePips()}resetPositions(){let t=this.stage.radius;this.f1.reset(-t*.38,0,Math.PI/2,!0),this.f2.reset(t*.38,0,-Math.PI/2,!0),this.f1.state="idle",this.f2.state="idle",this.f1.anim.play("idle",.2),this.f2.anim.play("idle",.2),this.fx.clear()}startRound(){let t=this.stage.radius;this.f1.reset(-t*.38,0,Math.PI/2),this.f2.reset(t*.38,0,-Math.PI/2),this.mode==="survival"&&this._survHeal!=null&&(this.f1.hp=Math.min(this.f1.maxhp,this._survHeal),this._survHeal=null),this.f1.state="intro",this.f2.state="intro",this.f1.tState=0,this.f2.tState=0,this.f1.anim.play("intro",.3),this.f2.anim.play("intro",.3),this.timer=this.mode==="training"?1/0:pe.roundTime,this._lastTick=99,this.ko=null,this.fightOn=!1,this.combo=[{n:0,dmg:0,last:-9},{n:0,dmg:0,last:-9}],this.ghostBar=[1,1],this.state="intro",this.stateT=0,this.timers.length=0,this.camYaw=Math.atan2(this.f2.pos.x-this.f1.pos.x,this.f2.pos.z-this.f1.pos.z),this.lookInit=!1,this.audio.startBGM(this.stageDef.bgm),Y("round-label").textContent=this.mode==="training"?"\u4FEE\u884C":"R"+this.round,this.banner(`ROUND ${this.round}`,1.4),this.audio.count(!1),this.after(1.5,()=>{this.announce("READY\u2026","\u69CB\u3048\u308D","small",.9),this.audio.announce()}),this.after(2.4,()=>{this.announce("FIGHT!","\u95D8\u3048","fight",.8),this.audio.count(!0),this.audio.punch(.6),this.fightOn=!0,this.flash(.25)})}after(t,e){this.timers.push({t,fn:e})}quitToMode(){this.letterbox(!1),this.speedlines(!1),this.freeze=0,this.tsTarget=1,this.timeScale=1,this.trauma=0,this.timers.length=0,this.showScreen("s-mode"),this.state="mode",Y("hud").classList.add("hidden"),Y("touch").classList.add("hidden"),Y("versus").classList.add("hidden"),this.ladderFoes=[],this.survWins=0,this.buildStage(nn[0]),this.buildFighters(ge[0],ge[3]),this.f1.reset(-2.5,0,Math.PI/2),this.f2.reset(2.5,0,-Math.PI/2),this.audio.startBGM("title")}quitToSelect(){this.ladderFoes=[],this.toSelect(this.mode),Y("hud").classList.add("hidden"),Y("touch").classList.add("hidden")}tryHit(t,e,i,n={}){if(!this.fightOn||this.ko||e.hp<=0)return;ft.subVectors(e.pos,t.pos),ft.y=0;let r=ft.length();ft.normalize(),t.fwd(Ee);let o=Math.acos(rn(ft.dot(Ee),-1,1))*180/Math.PI,a=i.range+(e.state==="launch"?.5:0);if(r>a||o>i.arc/2){if(i.cinematic&&n.hitIdx===0&&r<a+2.5){Yt.subVectors(t.pos,e.pos),Yt.y=0,Yt.normalize(),e.pos.addScaledVector(Yt,Math.min(2,r-a+1.2));return}return}let h=i;if(i.hits){let u=n.hitIdx===i.hits-1;h=Object.assign({},i,{dmg:u?12:7,launch:u?i.launch:null,kb:u?i.kb||4:.6,hitstun:u?.5:.35})}let l=t===this.f1?0:1;this.fighterEnv.dmgMul=t.isCPU?sn[this.matchDiff].dmgMul:1;let c=e.takeHit(h,t,this.fighterEnv);i.cinematic&&(c==="hit"||c==="launch")&&(t.fwd(Ee),Yt.copy(t.pos).addScaledVector(Ee,1.25),Yt.y=e.pos.y,e.pos.lerp(Yt,.65),(e.state==="hit"||e.state==="launch")&&e.vel.multiplyScalar(.25)),c!=="miss"&&this.onAnyHit(t,e,c)}onAnyHit(t,e,i){}sparkPos(t,e,i,n){return t.limbPos(i||"handR",n),e.chestPos(Yt),n.lerp(Yt,.45),n}cbHit(t,e,i,n,r){this.sparkPos(e,t,i.limb,ft);let o=n>=13?3:n>=8?2:1;this.fx.hitSpark(ft,new Lt(ge.find(a=>a.name===e.def.name)?.color||16763972).getHex(),o,Ee.subVectors(t.pos,e.pos).normalize()),this.audio.punch(o*.5),n>=12&&this.audio.kick(.7),this.freeze=Math.max(this.freeze,o*.028+.03),this.addShake(o*.14),this.spawnDmg(t,r?`${n} COUNTER!`:n,r?"counter":"hit",r?34:24),this.bumpCombo(e===this.f1?0:1,n),r&&this.flash(.15),i.launcher&&this.flash(.12)}cbLaunch(t,e,i,n,r){this.sparkPos(e,t,i.limb,ft),this.fx.hitSpark(ft,16765286,3,Ee.set(0,1,0)),this.fx.ring(ft,{color:16765286,maxR:2.5,dur:.4}),this.audio.heavyHit(),this.freeze=Math.max(this.freeze,.12),this.addShake(.5),this.spawnDmg(t,r?`${n} COUNTER!`:n+"!",r?"counter":"hit",32),this.bumpCombo(e===this.f1?0:1,n),this.flash(.18)}cbBlock(t,e,i,n){t.chestPos(ft),ft.y+=.1,this.fx.blockSpark(ft),this.audio.block(),this.freeze=Math.max(this.freeze,.03),this.addShake(.08),this.spawnDmg(t,n,"chip",16);let r=e===this.f1?0:1;this.combo[r]={n:0,dmg:0,last:-9}}cbParry(t,e){t.chestPos(ft),this.fx.parrySpark(ft),this.audio.parry(),this.freeze=Math.max(this.freeze,.2),this.addShake(.35),this.flash(.3),this.spawnDmg(t,"PARRY!","parry",30),this.slowMo(.3,.5)}cbCrush(t){t.chestPos(ft),this.audio.crush(),this.fx.ring(ft,{color:16732754,maxR:2.5,dur:.5}),this.spawnDmg(t,"GUARD CRUSH","crush",26),this.addShake(.3)}cbGrab(t,e,i,n){t.chestPos(ft),this.fx.hitSpark(ft,16752412,2,null),this.audio.grab(),this.freeze=Math.max(this.freeze,.08),this.addShake(.3),this.spawnDmg(t,n+" \u6295\u3052","hit",26),this.bumpCombo(e===this.f1?0:1,n)}cbKO(t,e,i){if(this.ko){e.hp<=0&&this.ko.loser===e&&(this.ko.draw=!0);return}this.ko={loser:t,winner:e,how:i,t:0,draw:!1},t.hp=0,t.state="ko",t.tState=0,t.anim.play("ko",.08),t.vel.set((Math.random()-.5)*3,0,(Math.random()-.5)*3),t.chestPos(ft),this.fx.shockwave(ft,16738816,1.4),this.audio.ko(),this.freeze=.35,this.slowMo(.22,1.6),this.addShake(1),this.flash(.5),this.letterbox(!0),this.fightOn=!1}cbLandDown(t,e){ft.copy(t.pos),ft.y=.15,this.fx.dust(ft,e?14:8),e&&(this.audio.land(),this.addShake(.2),this.fx.ring(ft,{color:16777215,maxR:1.6,dur:.3,flat:!0}))}cbWall(t){t.chestPos(ft),this.fx.hitSpark(ft,10482687,2,null),this.audio.heavyHit(),this.addShake(.4),this.freeze=Math.max(this.freeze,.08);let e=4;t.hp=Math.max(0,t.hp-e),this.spawnDmg(t,e+" \u58C1","wall",22),t.vel.multiplyScalar(-.5),t.vy=Math.max(t.vy,2.5),t.hp<=0&&this.cbKO(t,t===this.f1?this.f2:this.f1,"wall")}cbSuperStart(t,e){this.flash(.4),this.audio.superFlash(),this.fx.aura(t,new Lt(ge.find(i=>i.name===t.def.name)?.color||61695).getHex(),1.4),this.fx.ring(t.pos,{color:16777215,maxR:4,dur:.5,flat:!0}),this.letterbox(!0),this.speedlines(!0),this.fovKick=12,this.slowMo(.55,.45),this.after(1.7,()=>{this.letterbox(!1),this.speedlines(!1)}),t.chestPos(ft),this.spawnDmg(t,"\u79D8\u5965\u7FA9!","super",30)}playSfx(t,e){let i=this.audio;t==="whiff"?i.whiff(.8+Math.random()*.4):t==="jump"?i.jump():t==="dash"?(i.dash(),ft.copy(e.pos),ft.y=.2,this.fx.dust(ft,6,10482687,.4),this.fx.ghost(e,61695,.3)):t==="land"?(i.land(),ft.copy(e.pos),ft.y=.1,this.fx.dust(ft,5)):t==="thrown"&&i.thrown()}announce(t,e="",i="",n=1){let r=Y("an-main"),o=Y("an-sub");r.className="",o.className="",r.offsetWidth,r.textContent=t,r.className="show "+i,o.textContent=e,e&&(o.className="show"),clearTimeout(this._anT),this._anT=setTimeout(()=>{r.classList.add("hide"),o.classList.remove("show")},n*1e3)}banner(t,e=1.5){let i=Y("banner");i.textContent=t,i.classList.remove("hidden"),clearTimeout(this._bnT),this._bnT=setTimeout(()=>i.classList.add("hidden"),e*1e3)}flash(t=.4){let e=Y("flash");e.style.transition="none",e.style.opacity=t,requestAnimationFrame(()=>{e.style.transition="opacity .3s",e.style.opacity=0})}letterbox(t){Y("letterbox").classList.toggle("on",t)}speedlines(t){Y("speedlines").style.opacity=t?1:0}addShake(t){this.settings.shake&&(this.trauma=Math.min(1,this.trauma+t))}bumpCombo(t,e){let i=this.stateT,n=this.combo[t];i-n.last<1.1?(n.n++,n.dmg+=e):(n.n=1,n.dmg=e),n.last=i;let r=Y(t===0?"combo1":"combo2");n.n>=2&&(r.classList.remove("hidden","pop"),r.offsetWidth,r.classList.add("pop"),r.querySelector(".cn").textContent=n.n,r.querySelector(".cd").textContent=n.dmg+" DMG")}spawnDmg(t,e,i,n=24){let r=this.dmgPool[this.dmgI];this.dmgI=(this.dmgI+1)%this.dmgPool.length,t.chestPos(r.pos),r.pos.x+=(Math.random()-.5)*.5,r.pos.y+=.4,r.life=.9,r.vy=1.6;let o={hit:"#ffd166",counter:"#ff5252",chip:"#88aaff",parry:"#9ff3ff",crush:"#ff5252",wall:"#9ff3ff",super:"#ff9f1c"};r.el.style.display="block",r.el.style.color=o[i]||"#fff",r.el.style.fontSize=n+"px",r.el.textContent=e}updateDmgNums(t){let e=innerWidth,i=innerHeight;for(let n of this.dmgPool){if(n.life<=0){n.el.style.display="none";continue}if(n.life-=t,n.pos.y+=n.vy*t,n.vy*=.94,ft.copy(n.pos).project(this.camera),ft.z>1){n.el.style.display="none";continue}n.el.style.display="block",n.el.style.left=(ft.x*.5+.5)*e+"px",n.el.style.top=(-ft.y*.5+.5)*i+"px",n.el.style.opacity=Math.min(1,n.life*2.5)}}updatePips(){[0,1].forEach(t=>{[...Y(t===0?"rounds1":"rounds2").children].forEach((i,n)=>i.classList.toggle("on",n<this.wins[t]))})}updateHUD(t){let e=[this.f1,this.f2];for(let i=0;i<2;i++){let n=Math.max(0,e[i].hp/e[i].maxhp);Y(i===0?"hp1":"hp2").style.width=n*100+"%",Y(i===0?"hp1":"hp2").classList.toggle("low",n<.3),n<this.ghostBar[i]?this.ghostDelay[i]=.55:this.ghostDelay[i]-=t,this.ghostDelay[i]<=0&&(this.ghostBar[i]=Math.max(n,this.ghostBar[i]-t*.5)),Y(i===0?"hp1g":"hp2g").style.width=this.ghostBar[i]*100+"%";let r=e[i].meter/100,o=Y(i===0?"meter1":"meter2");o.style.width=r*100+"%",o.classList.toggle("max",r>=1),Y(i===0?"stam1":"stam2").style.width=e[i].stam+"%",this.stateT-this.combo[i].last>1.4&&Y(i===0?"combo1":"combo2").classList.add("hidden")}if(this.mode==="training")Y("timer").textContent="\u221E",Y("timer").classList.remove("urgent");else{let i=Math.max(0,Math.ceil(this.timer));Y("timer").textContent=i,Y("timer").classList.toggle("urgent",i<=10&&this.fightOn)}this.mode==="survival"&&(Y("surv-wins").textContent=this.survWins),this.mode==="training"&&(Y("train-info").textContent=`\u30C0\u30DF\u30FC: ${{stand:"\u68D2\u7ACB\u3061",guard:"\u30AC\u30FC\u30C9",random:"\u30E9\u30F3\u30C0\u30E0"}[this.dummyMode]} \u2014 Esc\u3067\u8A2D\u5B9A`)}slowMo(t,e){this.tsTarget=t,this.slowT=e}updateCamera(t){let e=this.f1,i=this.f2,n=this.camMode;this.state==="title"||this.state==="mode"||this.state==="select"||this.state==="result"?n="menu":this.state==="versus"||this.state==="intro"?n="intro":this.ko&&(n="ko");let r=this.camera;ft.addVectors(e.pos,i.pos).multiplyScalar(.5);let o=ft.clone(),a=55+this.fovKick;if(this.fovKick*=Math.pow(.02,t),n==="first"){let l=e.rig.h;Ee.set(e.pos.x+Math.sin(e.yaw)*.12,1.62*l,e.pos.z+Math.cos(e.yaw)*.12);let c=Math.hypot(e.vel.x,e.vel.z);Ee.y+=Math.abs(Math.sin(performance.now()*.012))*Math.min(.05,c*.008),r.position.lerp(Ee,Math.min(1,t*30)),Or.set(this.camPitch,this.camYaw+Math.PI,0,"YXZ"),li.setFromEuler(Or),r.quaternion.slerp(li,Math.min(1,t*22)),a=68+this.fovKick}else if(n==="third"){let l=this.camPitch,c=Math.sin(this.camYaw)*Math.cos(l),u=Math.sin(l),f=Math.cos(this.camYaw)*Math.cos(l);e.chestPos(Ee),Yt.set(Ee.x-c*this.camDist,Ee.y-u*this.camDist+.3,Ee.z-f*this.camDist),Yt.x+=-f*.55,Yt.z+=c*.55,Yt.y=Math.max(.45,Yt.y);let m=Math.hypot(Yt.x,Yt.z),g=this.stage.radius+4;m>g&&(Yt.x*=g/m,Yt.z*=g/m),r.position.lerp(Yt,Math.min(1,t*11)),i.chestPos(Yt),Yt.lerpVectors(Ee,Yt,.34),Yt.y+=.12,this.lookInit||(this.lookSm.copy(Yt),this.lookInit=!0),this.lookSm.lerp(Yt,Math.min(1,t*9)),$n.lookAt(r.position,this.lookSm,Io),li.setFromRotationMatrix($n),r.quaternion.slerp(li,Math.min(1,t*12));let _=Math.hypot(e.vel.x,e.vel.z);if(a=55+Math.min(8,_*.9)+this.fovKick,this.fightOn&&performance.now()/1e3-this.lastMouseT>2.5){let d=(Math.atan2(i.pos.x-e.pos.x,i.pos.z-e.pos.z)-this.camYaw)%(Math.PI*2);d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.camYaw+=d*Math.min(1,t*1.4)}}else if(n==="dual"){Ee.subVectors(i.pos,e.pos);let l=Math.max(2,Ee.length()),c=Math.atan2(Ee.x,Ee.z)+Math.PI/2,u=rn(3.6+l*.85,5,11);Yt.set(o.x+Math.sin(c)*u,2.2+l*.18,o.z+Math.cos(c)*u),r.position.lerp(Yt,Math.min(1,t*6)),o.y+=1.25,this.lookInit||(this.lookSm.copy(o),this.lookInit=!0),this.lookSm.lerp(o,Math.min(1,t*6)),$n.lookAt(r.position,this.lookSm,Io),li.setFromRotationMatrix($n),r.quaternion.slerp(li,Math.min(1,t*8)),a=52}else{let l=7.6,c=2.7,u=.35,f=o;f.y=1.3,n==="ko"&&this.ko&&(f=this.ko.loser.chestPos(new T),l=3.4,c=1.5,u=.8),n==="menu"&&(l=8.6,c=3,u=.18);let m=performance.now()/1e3*u+(n==="menu"?1:2.4);Yt.set(f.x+Math.sin(m)*l,c,f.z+Math.cos(m)*l),r.position.lerp(Yt,Math.min(1,t*(n==="ko"?3:1.6))),this.lookInit||(this.lookSm.copy(f),this.lookInit=!0),this.lookSm.lerp(f,Math.min(1,t*4)),$n.lookAt(r.position,this.lookSm,Io),li.setFromRotationMatrix($n),r.quaternion.slerp(li,Math.min(1,t*5)),a=n==="ko"?48:55}if(this.trauma=Math.max(0,this.trauma-t*1.7),this.trauma>.001){let l=this.trauma*this.trauma,c=performance.now()*.03;r.position.x+=Math.sin(c*1.3)*l*.45,r.position.y+=Math.cos(c*1.7)*l*.3,r.position.z+=Math.sin(c*1.1+2)*l*.45,Or.set((Math.random()-.5)*l*.06,(Math.random()-.5)*l*.06,(Math.random()-.5)*l*.05),li.setFromEuler(Or),r.quaternion.multiply(li)}Math.abs(r.fov-a)>.15&&(r.fov+=(a-r.fov)*Math.min(1,t*8),r.updateProjectionMatrix());let h=n==="first";this.f1.rig.j.head.visible=!h,this.fpG.visible=h,Y("crosshair").classList.toggle("hidden",!(h&&this.fightOn)),h&&this.updateFP(t)}updateFP(t){let e=this.f1,i=0,n=0,r=0,o=0;if(e.state==="attack"&&e.atk){let l=rn((e.atkT-e.atk.startup)/.08,0,1)*(1-rn((e.atkT-e.atk.active[1])/.15,0,1)),c=e.atkId;c==="jab"||c==="straight"||c==="heavy"||c==="super"?n=l:c==="jab2"?i=l:c==="grab"?(i=l*.8,n=l*.8):(c==="kick"||c==="kickhigh"||c==="sweep")&&(r=-.15*l)}else e.state==="block"?(i=.45,n=.45):(e.state==="hit"||e.state==="launch")&&(i=-.2,n=-.2);let a=this.fpPunch;a.l+=(i-a.l)*Math.min(1,t*18),a.r+=(n-a.r)*Math.min(1,t*18);let h=Math.sin(performance.now()*.004)*.008;this.fpL.position.set(-.3+a.l*.24,-.26+h+r,-.55-a.l*.5),this.fpR.position.set(.3-a.r*.24,-.26-h+o,-.55-a.r*.5)}onKeyEdge(t){if(t==="KeyM"){this.settings.mute=!this.settings.mute,this.applyAudio(),oi(this.settings),this.toast(this.settings.mute?"\u30DF\u30E5\u30FC\u30C8 ON":"\u30DF\u30E5\u30FC\u30C8 OFF");return}if(t==="Escape"||t==="KeyP"){this.onPauseKey();return}if(t==="KeyV"){this.toggleCam();return}t==="Enter"&&(this.state==="title"?Y("btn-start").click():this.state==="result"&&Y("btn-rematch").click())}onTouchEdge(t){t==="cam"&&this.toggleCam()}toggleCam(){if(this.mode==="versus"){this.toast("2P\u5BFE\u6226\u306F\u56FA\u5B9A\u30AB\u30E1\u30E9\u3067\u3059");return}this.state!=="fight"&&this.state!=="intro"||(this.camMode=this.camMode==="first"?"third":"first",this.audio.uiMove(),this.toast(this.camMode==="first"?"\u{1F441} \u4E00\u4EBA\u79F0\u8996\u70B9":"\u{1F3A5} \u4E09\u4EBA\u79F0\u8996\u70B9",900))}onPauseKey(){(this.state==="fight"||this.state==="intro"||this.state==="roundEnd")&&this.togglePause()}togglePause(t){let e=t!==void 0?t:!this.paused;e!==this.paused&&(this.paused=e,Y("s-pause").classList.toggle("hidden",!e),Y("train-opts").classList.toggle("hidden",this.mode!=="training"),e&&this.mode==="training"&&document.querySelectorAll("#dummy-row .pill").forEach(i=>i.classList.toggle("on",i.dataset.dummy===this.dummyMode)),document.pointerLockElement&&document.exitPointerLock(),e?this.audio.uiBack():this.audio.uiOk())}endRoundCheck_Draw(){return!1}processRoundEnd(t){if(this.ko){this.ko.t+=t;let e=this.ko.t;if(!this.ko.announced&&e>.55){this.ko.announced=!0;let i=this.ko.winner.hp>=this.ko.winner.maxhp;this.ko.draw?this.announce("DRAW","\u30C9\u30ED\u30FC","small",2):this.announce("K.O.!",i?"PERFECT! \u2014 \u5B8C\u5168\u52DD\u5229":this.ko.how==="counter"?"COUNTER K.O.!":this.ko.how==="throw"?"THROW K.O.!":"","ko",2)}if(!this.ko.winpose&&e>1.3&&(this.ko.winpose=!0,!this.ko.draw&&this.ko.winner.hp>0&&(this.ko.winner.state="win",this.ko.winner.anim.play("win",.2)),this.letterbox(!1)),e>2.6){let i=this.ko.draw?-1:this.ko.winner===this.f1?0:1;this.ko=null,this.finishRound(i)}return}if(this.fightOn&&this.mode!=="training"&&this.timer<=0){this.fightOn=!1;let e=this.f1.hp,i=this.f2.hp;if(e===i)this.announce("DRAW","\u30C9\u30ED\u30FC","small",2),this.audio.bell(1),this.state="roundEnd",this.after(2.5,()=>this.finishRound(-1));else{let n=e>i?0:1;this.announce("TIME UP",(n===0?"1P":"2P/CPU")+" \u306E\u5224\u5B9A\u52DD\u3061","small",2),this.audio.bell(2);let r=n===0?this.f1:this.f2,o=n===0?this.f2:this.f1;r.state="win",r.anim.play("win",.2),this.state="roundEnd",this.after(2.5,()=>this.finishRound(n))}}}finishRound(t){t>=0?(this.wins[t]++,this.updatePips()):this.banner("DRAW \u2014 \u3082\u3046\u4E00\u5EA6",1.5);let e=this.mode==="training"?1/0:this.mode==="survival"?1:pe.roundsToWin;if(this.mode==="survival"){t===0?(this.survWins++,this.audio.roundWin(),this.banner(`${this.survWins}\u9023\u52DD! \u6B21\u306E\u6575\u304C\u73FE\u308C\u308B\u2026`,2),this.state="roundEnd",this.after(2.2,()=>{this.survFoe=this.f1.def.id?ge.findIndex(o=>o.id===this.f2.def.id):0;let i;do i=Math.random()*4|0;while(i===ge.findIndex(o=>o.name===this.f1.def.name));this.survFoe=i,this._survCont=!0;let n=Math.round(this.f1.maxhp*pe.survivalHeal/100),r=Object.assign({},this.lastOpts);r.p2=i,this.lastOpts=r,this._survHeal=n+20,this.startMatch(r)})):t===1?this.endMatch(1,"survival"):this.startRound();return}if(this.mode==="training"){this.state="roundEnd",this.banner("\u4ED5\u5207\u308A\u76F4\u3057",1),this.after(1.4,()=>this.startRound());return}t>=0&&this.wins[t]>=e?this.endMatch(t,this.mode):(this.round++,this.startRound())}endMatch(t,e){this.state="matchEnd",this.timers.length=0,this.audio.roundWin(),this.after(1.2,()=>{this.state="result",this.audio.stopBGM(),this.audio.startBGM("title");let i=t===0,n,r;if(e==="arcade"?i?this.ladder>=2?(n="\u512A\u52DD!",r="\u5168\u3066\u306E\u523A\u5BA2\u3092\u5012\u3057\u305F \u2014 \u771F\u306E\u6B66\u9053\u5BB6\u3060"):(n="YOU WIN",r=`\u523A\u5BA2 ${this.ladder+1}/3 \u3092\u6483\u7834`):(n="YOU LOSE",r=`\u523A\u5BA2 ${this.ladder+1}/3 \u306B\u6557\u308C\u305F\u2026`):e==="survival"?(n=i?"SURVIVED?":"GAME OVER",i?(n="???",r=""):(n=`${this.survWins}\u9023\u52DD`,r="\u3053\u3053\u307E\u3067\u304B\u2026 \u3055\u3089\u306A\u308B\u9AD8\u307F\u3092\u76EE\u6307\u305B")):e==="versus"?(n=(t===0?"1P":"2P")+" WIN!",r="\u304A\u898B\u4E8B!"):(n="\u4FEE\u884C\u7D42\u4E86",r="\u65E5\u3005\u935B\u932C\u3042\u308B\u306E\u307F"),e==="arcade"&&i&&this.ladder<2){this.banner("\u6B21\u306E\u523A\u5BA2\u304C\u73FE\u308C\u308B\u2026",2),this.after(2.2,()=>{this.ladder++,this.startMatch(this.lastOpts)});return}Y("res-kicker").textContent={arcade:"ARCADE RESULT",survival:"SURVIVAL RESULT",versus:"VERSUS RESULT",training:"TRAINING"}[e]||"RESULT",Y("res-title").textContent=n,Y("res-title").className=i||this.ladder>=2?"win":"lose",e==="arcade"&&i&&this.ladder>=2&&(Y("res-title").textContent="\u{1F3C6} \u512A\u52DD!",Y("res-title").className="win"),e==="survival"&&!i&&(Y("res-title").textContent=`${this.survWins}\u9023\u52DD`,Y("res-title").className="lose"),Y("res-sub").textContent=r,Y("res-stats").innerHTML=`<div class="stat-cell"><b>${this.f1.maxCombo}</b><span>\u6700\u5927\u30B3\u30F3\u30DC</span></div>
         <div class="stat-cell"><b>${this.f1.dealtTotal}</b><span>\u7DCF\u30C0\u30E1\u30FC\u30B8</span></div>
         <div class="stat-cell"><b>${Math.round(this.matchTime)}s</b><span>\u8A66\u5408\u6642\u9593</span></div>
         <div class="stat-cell"><b>${this.wins[0]}-${this.wins[1]}</b><span>\u30E9\u30A6\u30F3\u30C9</span></div>`,Y("btn-rematch").textContent=e==="arcade"&&i&&this.ladder>=2?"\u{1F451} \u3082\u3046\u4E00\u5EA6\u9802\u70B9\u3078":"\u2694\uFE0F \u518D\u6226\u3059\u308B",this.showScreen("s-result"),this.fightOn=!1})}loop(t){requestAnimationFrame(l=>this.loop(l));let e=Math.min(.05,(t-this.last)/1e3||.016);if(this.last=t,this.paused){this.input.endFrame(),this.renderer.render(this.scene,this.camera);return}for(let l=this.timers.length-1;l>=0;l--){let c=this.timers[l];if(c.t-=e,c.t<=0){this.timers.splice(l,1);try{c.fn()}catch(u){console.error(u)}}}this.slowT>0&&(this.slowT-=e,this.slowT<=0&&(this.tsTarget=1)),this.timeScale+=(this.tsTarget-this.timeScale)*Math.min(1,e*10);let i=e*this.timeScale;this.freeze>0&&(this.freeze-=e,i*=.03);let n=this.state==="title"||this.state==="mode"||this.state==="select"||this.state==="result",r=this.state==="fight"||this.state==="intro"||this.state==="roundEnd"||this.state==="versus"||this.state==="matchEnd",{dx:o,dy:a,w:h}=this.input.consumeCam();if((o||a)&&(this.camYaw-=o*.0026,this.camPitch=rn(this.camPitch-a*.0022,-.5,1),this.lastMouseT=performance.now()/1e3),h&&(this.camDist=rn(this.camDist+h*.4,2.8,6.8)),n&&(this.f1.faceFoe(this.f2,2,e),this.f2.faceFoe(this.f1,2,e),this.f1.syncRig(),this.f2.syncRig(),this.f1.anim.update(e,0,!0),this.f2.anim.update(e,0,!0),this.stateT+=e),r){this.stateT+=i,this.matchTime+=i;let l=this.fightOn&&!this.ko,c=this.camYaw;if(this.mode==="versus"&&(ft.subVectors(this.lookSm,this.camera.position),c=Math.atan2(ft.x,ft.z)),l){let u=this.input.cmdP1(c,this.f1,this.f2,this.mode==="versus");Object.assign(this.f1.cmd,u)}else{let u=this.f1.cmd;for(let f in u)typeof u[f]=="boolean"&&(u[f]=!1);u.mx=0,u.mz=0}if(this.mode==="versus")if(l)Object.assign(this.f2.cmd,this.input.cmdP2(c,this.f2,this.f1));else{let u=this.f2.cmd;for(let f in u)typeof u[f]=="boolean"&&(u[f]=!1);u.mx=0,u.mz=0}else if(l)this.brain2.update(i,this.f2,this.f1,this.mode==="training"?this.dummyMode:null);else{let u=this.f2.cmd;for(let f in u)typeof u[f]=="boolean"&&(u[f]=!1);u.mx=0,u.mz=0}this.state==="intro"&&this.fightOn&&(this.state="fight"),this.f1.update(i,this.f2,this.fighterEnv),this.f2.update(i,this.f1,this.fighterEnv),[this.f1,this.f2].forEach((u,f)=>{let m=Math.hypot(u.vel.x,u.vel.z);u.grounded()&&m>3&&u.state==="idle"&&(this.stepT[f]-=i,this.stepT[f]<=0&&(this.stepT[f]=m>4.6?.26:.36,this.audio.step(),ft.copy(u.pos),ft.y=.08,this.fx.dust(ft,1,6713224,.3))),m>8&&(this.ghostT[f]-=i,this.ghostT[f]<=0&&(this.ghostT[f]=.07,this.fx.ghost(u,f===0?61695:16723349,.3)))}),this.fightOn&&this.mode!=="training"&&(this.timer-=i,this.timer<=10.5&&this.timer>0&&Math.ceil(this.timer)!==this._lastTick&&(this._lastTick=Math.ceil(this.timer),this._lastTick<=5&&this._lastTick>0&&this.audio.count(!1))),this.processRoundEnd(i),this.updateHUD(i)}this.stage&&this.stage.dyn&&this.stage.dyn.update(e,performance.now()/1e3),this.fx.update(e,this.camera),this.updateDmgNums(e),this.updateCamera(e),this._fpsN=(this._fpsN||0)+1,this._fpsT=(this._fpsT||0)+e,this._fpsT>.5&&(Y("fps").textContent=Math.round(this._fpsN/this._fpsT),this._fpsN=0,this._fpsT=0),this.renderer.render(this.scene,this.camera),this.input.endFrame()}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}},Or=new Nn(0,0,0,"YXZ"),li=new ai,$n=new oe,Io=new T(0,1,0);function b0(s){console.error(s);var t=document.getElementById("load-tx");t&&(t.textContent="\u8D77\u52D5\u30A8\u30E9\u30FC: "+s+" \u2014\u2014 \u30BF\u30C3\u30D7\u3067\u518D\u8AAD\u307F\u8FBC\u307F");var e=document.getElementById("load-fill");e&&(e.style.background="#ff5252");var i=document.getElementById("loader");i&&(i.style.opacity=1,i.onclick=function(){location.reload()})}function sc(){try{var s=new Fr;window.game=s,s.boot(),window.__kumiteBooted=!0}catch(t){b0(t&&t.message||String(t))}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",sc):sc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
