define(["./AttributeCompression-f9ee669b","./buildModuleUrl-dba4ec07","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./when-515d5295","./Rectangle-e170be8b","./TerrainEncoding-29e3257b","./IndexDatatype-eefd5922","./Check-3aa71481","./Math-5e38123d","./OrientedBoundingBox-57407e6e","./createTaskProcessorWorker","./Intersect-53434a77","./PrimitiveType-b38a4004","./Cartesian4-034d54d5","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Event-9821f5d9","./ComponentDatatype-d430c7f7","./EllipsoidTangentPlane-fd839d7b","./IntersectionTests-5fa33dbd","./Plane-92c15089","./GeometryAttribute-9bc31a7f","./FeatureDetection-7fae0d5a","./PolygonPipeline-b8b35011","./WindingOrder-8479ef05","./EllipsoidRhumbLine-f50fdea6"],(function(e,t,i,n,r,s,h,u,o,a,p,d,f,l,g,c,m,w,x,v,y,b,B,I,A,C,H){"use strict";var T={clipTriangleAtAxisAlignedThreshold:function(e,t,i,n,s,h){if(!r.t(e))throw new o.t("threshold is required.");if(!r.t(t))throw new o.t("keepAbove is required.");if(!r.t(i))throw new o.t("u0 is required.");if(!r.t(n))throw new o.t("u1 is required.");if(!r.t(s))throw new o.t("u2 is required.");var u,a,p;r.t(h)?h.length=0:h=[],t?(u=i<e,a=n<e,p=s<e):(u=i>e,a=n>e,p=s>e);var d,f,l,g,c,m,w=u+a+p;return 1===w?u?(d=(e-i)/(n-i),f=(e-i)/(s-i),h.push(1),h.push(2),1!==f&&(h.push(-1),h.push(0),h.push(2),h.push(f)),1!==d&&(h.push(-1),h.push(0),h.push(1),h.push(d))):a?(l=(e-n)/(s-n),g=(e-n)/(i-n),h.push(2),h.push(0),1!==g&&(h.push(-1),h.push(1),h.push(0),h.push(g)),1!==l&&(h.push(-1),h.push(1),h.push(2),h.push(l))):p&&(c=(e-s)/(i-s),m=(e-s)/(n-s),h.push(0),h.push(1),1!==m&&(h.push(-1),h.push(2),h.push(1),h.push(m)),1!==c&&(h.push(-1),h.push(2),h.push(0),h.push(c))):2===w?u||i===e?a||n===e?!p&&s!==e&&(f=(e-i)/(s-i),l=(e-n)/(s-n),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(f),h.push(-1),h.push(1),h.push(2),h.push(l)):(m=(e-s)/(n-s),d=(e-i)/(n-i),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(m),h.push(-1),h.push(0),h.push(1),h.push(d)):(g=(e-n)/(i-n),c=(e-s)/(i-s),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(g),h.push(-1),h.push(2),h.push(0),h.push(c)):3!==w&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,i,s,h,u,a,p,d){if(!r.t(e))throw new o.t("x is required.");if(!r.t(t))throw new o.t("y is required.");if(!r.t(i))throw new o.t("x1 is required.");if(!r.t(s))throw new o.t("y1 is required.");if(!r.t(h))throw new o.t("x2 is required.");if(!r.t(u))throw new o.t("y2 is required.");if(!r.t(a))throw new o.t("x3 is required.");if(!r.t(p))throw new o.t("y3 is required.");var f=i-a,l=a-h,g=u-p,c=s-p,m=1/(g*f+l*c),w=t-p,x=e-a,v=(g*x+l*w)*m,y=(-c*x+f*w)*m,b=1-v-y;return r.t(d)?(d.x=v,d.y=y,d.z=b,d):new n.a(v,y,b)},computeLineSegmentLineSegmentIntersection:function(e,t,n,s,h,u,a,p,d){o.n.typeOf.number("x00",e),o.n.typeOf.number("y00",t),o.n.typeOf.number("x01",n),o.n.typeOf.number("y01",s),o.n.typeOf.number("x10",h),o.n.typeOf.number("y10",u),o.n.typeOf.number("x11",a),o.n.typeOf.number("y11",p);var f=(p-u)*(n-e)-(a-h)*(s-t);if(0!==f){var l=((a-h)*(t-u)-(p-u)*(e-h))/f,g=((n-e)*(t-u)-(s-t)*(e-h))/f;if(l>=0&&l<=1&&g>=0&&g<=1)return r.t(d)||(d=new i.r),d.x=e+l*(n-e),d.y=t+l*(s-t),d}}},O=32767,z=16383,N=[],V=[],q=[],R=new n.i,E=new n.a,M=[],P=[],U=[],F=[],k=[],D=new n.a,L=new t.c,S=new p.b,W=new i.r,X=new n.a;function K(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}K.prototype.clone=function(e){return r.t(e)||(e=new K),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},K.prototype.initializeIndexed=function(e,t,i,n,r){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=i,this.normalBuffer=n,this.index=r,this.first=void 0,this.second=void 0,this.ratio=void 0},K.prototype.initializeFromClipResult=function(e,t,i){var n=t+1;return-1!==e[t]?i[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=i[e[n]],++n,this.second=i[e[n]],++n,this.ratio=e[n],++n),n},K.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},K.prototype.isIndexed=function(){return r.t(this.index)},K.prototype.getH=function(e,t){if(r.t(this.index))return this.heightBuffer[this.index];var i=this.first.getH(e,t),n=this.second.getH(e,t);return 0===t+i/O*e||0===t+n/O*e?0:a.n.lerp(this.first.getH(),this.second.getH(),this.ratio)},K.prototype.getU=function(){return r.t(this.index)?this.uBuffer[this.index]:a.n.lerp(this.first.getU(),this.second.getU(),this.ratio)},K.prototype.getV=function(){return r.t(this.index)?this.vBuffer[this.index]:a.n.lerp(this.first.getV(),this.second.getV(),this.ratio)};var Y=new i.r,_=-1,G=[new n.a,new n.a],J=[new n.a,new n.a];function Z(t,i){++_;var r=G[_],s=J[_];return r=e.r.octDecode(t.first.getNormalX(),t.first.getNormalY(),r),s=e.r.octDecode(t.second.getNormalX(),t.second.getNormalY(),s),E=n.a.lerp(r,s,t.ratio,E),n.a.normalize(E,E),e.r.octEncode(E,i),--_,i}K.prototype.getNormalX=function(){return r.t(this.index)?this.normalBuffer[2*this.index]:(Y=Z(this,Y)).x},K.prototype.getNormalY=function(){return r.t(this.index)?this.normalBuffer[2*this.index+1]:(Y=Z(this,Y)).y};var j=[];function Q(e,t,i,n,s,h,u,o,a,p,d){if(0!==u.length){for(var f=0,l=0;l<u.length;)l=j[f++].initializeFromClipResult(u,l,o);for(var g=0;g<f;++g){var c=j[g];if(c.isIndexed())c.newIndex=h[c.index],c.uBuffer=e,c.vBuffer=t,c.heightBuffer=i,a&&(c.normalBuffer=n);else{var m=c.getKey();if(r.t(h[m]))c.newIndex=h[m];else{var w=e.length;e.push(c.getU()),t.push(c.getV()),i.push(c.getH(p,d)),a&&(n.push(c.getNormalX()),n.push(c.getNormalY())),c.newIndex=w,h[m]=w}}}3===f?(s.push(j[0].newIndex),s.push(j[1].newIndex),s.push(j[2].newIndex)):4===f&&(s.push(j[0].newIndex),s.push(j[1].newIndex),s.push(j[2].newIndex),s.push(j[0].newIndex),s.push(j[2].newIndex),s.push(j[3].newIndex))}}return j.push(new K),j.push(new K),j.push(new K),j.push(new K),d((function(e,i){var o=e.isEastChild,d=e.isNorthChild,f=o?z:0,l=o?O:z,g=d?z:0,c=d?O:z,m=M,w=P,x=U,v=k;m.length=0,w.length=0,x.length=0,v.length=0;var y=F;y.length=0;var b={},B=e.vertices,I=e.indices;I=I.subarray(0,e.indexCountWithoutSkirts);var A,C,H,Y,_,G=h.u.clone(e.encoding),J=G.hasVertexNormals,Z=e.exaggeration,j=0,$=e.vertexCountWithoutSkirts,ee=e.minimumHeight,te=e.maximumHeight,ie=r.t(e.validMinimumHeight)?e.validMinimumHeight:e.minimumHeight,ne=r.t(e.validMaximumHeight)?e.validMaximumHeight:e.maximumHeight,re=new Array($),se=new Array($),he=new Array($),ue=J?new Array(2*$):void 0;for(C=0,H=0;C<$;++C,H+=2){var oe=G.decodeTextureCoordinates(B,C,W);if(A=G.decodeHeight(B,C)/Z,Y=a.n.clamp(oe.x*O|0,0,O),_=a.n.clamp(oe.y*O|0,0,O),he[C]=a.n.clamp((A-ee)/(te-ee)*O|0,0,O),Y<20&&(Y=0),_<20&&(_=0),O-Y<20&&(Y=O),O-_<20&&(_=O),re[C]=Y,se[C]=_,J){var ae=G.getOctEncodedNormal(B,C,X);ue[H]=ae.x,ue[H+1]=ae.y}(o&&Y>=z||!o&&Y<=z)&&(d&&_>=z||!d&&_<=z)&&(b[C]=j,m.push(Y),w.push(_),x.push(he[C]),J&&(v.push(ue[H]),v.push(ue[H+1])),++j)}var pe=[];pe.push(new K),pe.push(new K),pe.push(new K);var de,fe=[];for(fe.push(new K),fe.push(new K),fe.push(new K),C=0;C<I.length;C+=3){var le=I[C],ge=I[C+1],ce=I[C+2],me=re[le],we=re[ge],xe=re[ce];pe[0].initializeIndexed(re,se,he,ue,le),pe[1].initializeIndexed(re,se,he,ue,ge),pe[2].initializeIndexed(re,se,he,ue,ce);var ve=T.clipTriangleAtAxisAlignedThreshold(z,o,me,we,xe,N);(de=0)>=ve.length||((de=fe[0].initializeFromClipResult(ve,de,pe))>=ve.length||(de=fe[1].initializeFromClipResult(ve,de,pe))>=ve.length||(de=fe[2].initializeFromClipResult(ve,de,pe),Q(m,w,x,v,y,b,T.clipTriangleAtAxisAlignedThreshold(z,d,fe[0].getV(),fe[1].getV(),fe[2].getV(),V),fe,J,te,ee),de<ve.length&&(fe[2].clone(fe[1]),fe[2].initializeFromClipResult(ve,de,pe),Q(m,w,x,v,y,b,T.clipTriangleAtAxisAlignedThreshold(z,d,fe[0].getV(),fe[1].getV(),fe[2].getV(),V),fe,J,te,ee))))}var ye=o?-32767:0,be=d?-32767:0,Be=[],Ie=[],Ae=[],Ce=[],He=Number.MAX_VALUE,Te=-He,Oe=Number.MAX_VALUE,ze=-He,Ne=q;Ne.length=0;var Ve=s.n.clone(e.ellipsoid),qe=s.s.clone(e.childRectangle),Re=qe.north,Ee=qe.south,Me=qe.east,Pe=qe.west;for(Me<Pe&&(Me+=a.n.TWO_PI),C=0;C<m.length;++C){(Y=Math.round(m[C]))<=f?(Be.push(C),Y=0):Y>=l?(Ae.push(C),Y=O):Y=2*Y+ye,m[C]=Y,(_=Math.round(w[C]))<=g?(Ie.push(C),_=0):_>=c?(Ce.push(C),_=O):_=2*_+be,w[C]=_,(A=a.n.lerp(ee,te,x[C]/O))<He&&(He=A),A>Te&&(Te=A);var Ue=A;(Ue=a.n.clamp(Ue,ie,ne))<Oe&&(Oe=Ue),Ue>ze&&(ze=Ue),x[C]=A,R.longitude=a.n.lerp(Pe,Me,Y/O),R.latitude=a.n.lerp(Ee,Re,_/O),R.height=A,Ve.cartographicToCartesian(R,E),Ne.push(E.x),Ne.push(E.y),Ne.push(E.z)}var Fe=t.c.fromVertices(Ne,n.a.ZERO,3,L),ke=p.b.fromRectangle(qe,He,Te,Ve,S),De=p.b.fromRectangle(qe,Oe,ze,Ve,S),Le=new h.c(Ve).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Fe.center,Ne,3,Fe.center,He,D),Se=Te-He,We=new Uint16Array(m.length+w.length+x.length);for(C=0;C<m.length;++C)We[C]=m[C];var Xe=m.length;for(C=0;C<w.length;++C)We[Xe+C]=w[C];for(Xe+=w.length,C=0;C<x.length;++C)We[Xe+C]=O*(x[C]-He)/Se;var Ke,Ye=u.IndexDatatype.createTypedArray(m.length,y);if(J){var _e=new Uint8Array(v);i.push(We.buffer,Ye.buffer,_e.buffer),Ke=_e.buffer}else i.push(We.buffer,Ye.buffer);return{vertices:We.buffer,encodedNormals:Ke,indices:Ye.buffer,minimumHeight:He,maximumHeight:Te,westIndices:Be,southIndices:Ie,eastIndices:Ae,northIndices:Ce,boundingSphere:Fe,orientedBoundingBox:ke,horizonOcclusionPoint:Le,validMinimumHeight:Oe,validMaximumHeight:ze,validOrientedBoundingBox:De}}))}));
