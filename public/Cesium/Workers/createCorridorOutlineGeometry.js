define(["./arrayFill-4d3cc415","./arrayRemoveDuplicates-a4c6347e","./buildModuleUrl-dba4ec07","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./PolylineVolumeGeometryLibrary-ae5f3405","./CorridorGeometryLibrary-a6333a0d","./when-515d5295","./Rectangle-e170be8b","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryOffsetAttribute-800f7650","./IndexDatatype-eefd5922","./Math-5e38123d","./PolygonPipeline-b8b35011","./PrimitiveType-b38a4004","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian2-1b9b0d8a","./Cartesian4-034d54d5","./EllipsoidTangentPlane-fd839d7b","./IntersectionTests-5fa33dbd","./Plane-92c15089","./PolylinePipeline-bf1462fc","./EllipsoidGeodesic-e5406761","./EllipsoidRhumbLine-f50fdea6","./FeatureDetection-7fae0d5a","./WindingOrder-8479ef05"],(function(e,t,i,r,n,o,a,s,l,d,p,u,h,f,c,g,y,b,v,_,A,T,m,E,w,P,D,O,G,k,I){"use strict";var L=new r.a,x=new r.a,N=new r.a;function H(e,t){var i,n,d,h=[],c=e.positions,g=e.corners,y=e.endPositions,b=new u.t,v=0,_=0,A=0;for(n=0;n<c.length;n+=2)v+=d=c[n].length-3,A+=d/3*4,_+=c[n+1].length-3;for(v+=3,_+=3,n=0;n<g.length;n++){i=g[n];var T=g[n].leftPositions;l.t(T)?(v+=d=T.length,A+=d/3*2):(_+=d=g[n].rightPositions.length,A+=d/3*2)}var m,E=l.t(y);E&&(v+=m=y[0].length-3,_+=m,A+=4*(m/=3));var w,P,D,O,G,k,I=v+_,H=new Float64Array(I),C=0,R=I-1,S=m/2,U=f.IndexDatatype.createTypedArray(I/3,A+4),M=0;if(U[M++]=C/3,U[M++]=(R-2)/3,E){h.push(C/3),k=L,G=x;var B=y[0];for(n=0;n<S;n++)k=r.a.fromArray(B,3*(S-1-n),k),G=r.a.fromArray(B,3*(S+n),G),s.T.addAttribute(H,G,C),s.T.addAttribute(H,k,void 0,R),O=(P=C/3)+1,D=(w=(R-2)/3)-1,U[M++]=w,U[M++]=D,U[M++]=P,U[M++]=O,C+=3,R-=3}var F=0,j=c[F++],V=c[F++];for(H.set(j,C),H.set(V,R-V.length+1),d=V.length-3,h.push(C/3,(R-2)/3),n=0;n<d;n+=3)O=(P=C/3)+1,D=(w=(R-2)/3)-1,U[M++]=w,U[M++]=D,U[M++]=P,U[M++]=O,C+=3,R-=3;for(n=0;n<g.length;n++){var W,Y,q=(i=g[n]).leftPositions,J=i.rightPositions,z=N;if(l.t(q)){for(R-=3,Y=D,h.push(O),W=0;W<q.length/3;W++)z=r.a.fromArray(q,3*W,z),U[M++]=Y-W-1,U[M++]=Y-W,s.T.addAttribute(H,z,void 0,R),R-=3;h.push(Y-Math.floor(q.length/6)),t===a.O.BEVELED&&h.push((R-2)/3+1),C+=3}else{for(C+=3,Y=O,h.push(D),W=0;W<J.length/3;W++)z=r.a.fromArray(J,3*W,z),U[M++]=Y+W,U[M++]=Y+W+1,s.T.addAttribute(H,z,C),C+=3;h.push(Y+Math.floor(J.length/6)),t===a.O.BEVELED&&h.push(C/3-1),R-=3}for(j=c[F++],V=c[F++],j.splice(0,3),V.splice(V.length-3,3),H.set(j,C),H.set(V,R-V.length+1),d=V.length-3,W=0;W<V.length;W+=3)P=(O=C/3)-1,w=(D=(R-2)/3)+1,U[M++]=w,U[M++]=D,U[M++]=P,U[M++]=O,C+=3,R-=3;C-=3,R+=3,h.push(C/3,(R-2)/3)}if(E){C+=3,R-=3,k=L,G=x;var K=y[1];for(n=0;n<S;n++)k=r.a.fromArray(K,3*(m-n-1),k),G=r.a.fromArray(K,3*n,G),s.T.addAttribute(H,k,void 0,R),s.T.addAttribute(H,G,C),P=(O=C/3)-1,w=(D=(R-2)/3)+1,U[M++]=w,U[M++]=D,U[M++]=P,U[M++]=O,C+=3,R-=3;h.push(C/3)}else h.push(C/3,(R-2)/3);return U[M++]=C/3,U[M++]=(R-2)/3,b.position=new p.r({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:H}),{attributes:b,indices:U,wallIndices:h}}function C(e){var t=(e=l.e(e,l.e.EMPTY_OBJECT)).positions,i=e.width;n.n.typeOf.object("options.positions",t),n.n.typeOf.number("options.width",i);var o=l.e(e.height,0),s=l.e(e.extrudedHeight,o);this._positions=t,this._ellipsoid=d.n.clone(l.e(e.ellipsoid,d.n.WGS84)),this._width=i,this._height=Math.max(o,s),this._extrudedHeight=Math.min(o,s),this._cornerType=l.e(e.cornerType,a.O.ROUNDED),this._granularity=l.e(e.granularity,c.n.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*r.a.packedLength+d.n.packedLength+6}C.pack=function(e,t,i){n.n.typeOf.object("value",e),n.n.typeOf.object("array",t),i=l.e(i,0);var o=e._positions,a=o.length;t[i++]=a;for(var s=0;s<a;++s,i+=r.a.packedLength)r.a.pack(o[s],t,i);return d.n.pack(e._ellipsoid,t,i),i+=d.n.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=l.e(e._offsetAttribute,-1),t};var R=d.n.clone(d.n.UNIT_SPHERE),S={positions:void 0,ellipsoid:R,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return C.unpack=function(e,t,i){n.n.typeOf.object("array",e),t=l.e(t,0);for(var o=e[t++],a=new Array(o),s=0;s<o;++s,t+=r.a.packedLength)a[s]=r.a.unpack(e,t);var p=d.n.unpack(e,t,R);t+=d.n.packedLength;var u=e[t++],h=e[t++],f=e[t++],c=e[t++],g=e[t++],y=e[t];return l.t(i)?(i._positions=a,i._ellipsoid=d.n.clone(p,i._ellipsoid),i._width=u,i._height=h,i._extrudedHeight=f,i._cornerType=c,i._granularity=g,i._offsetAttribute=-1===y?void 0:y,i):(S.positions=a,S.width=u,S.height=h,S.extrudedHeight=f,S.cornerType=c,S.granularity=g,S.offsetAttribute=-1===y?void 0:y,new C(S))},C.createGeometry=function(n){var a=n._positions,d=n._width,u=n._ellipsoid;a=function(e,t){for(var i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(a,u);var b=t.u(a,r.a.equalsEpsilon);if(!(b.length<2||d<=0)){var v,_=n._height,A=n._extrudedHeight,T=!c.n.equalsEpsilon(_,A,0,c.n.EPSILON2),m={ellipsoid:u,positions:b,width:d,cornerType:n._cornerType,granularity:n._granularity,saveAttributes:!1};if(T)m.height=_,m.extrudedHeight=A,m.offsetAttribute=n._offsetAttribute,v=function(t){var i=t.ellipsoid,r=H(s.T.computePositions(t),t.cornerType),n=r.wallIndices,a=t.height,d=t.extrudedHeight,u=r.attributes,c=r.indices,y=u.position.values,b=y.length,v=new Float64Array(b);v.set(y);var _=new Float64Array(2*b);if(y=g.T.scaleToGeodeticHeight(y,a,i),v=g.T.scaleToGeodeticHeight(v,d,i),_.set(y),_.set(v,b),u.position.values=_,b/=3,l.t(t.offsetAttribute)){var A=new Uint8Array(2*b);if(t.offsetAttribute===h.I.TOP)A=e.d(A,1,0,b);else{var T=t.offsetAttribute===h.I.NONE?0:1;A=e.d(A,T)}u.applyOffset=new p.r({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:A})}var m,E=c.length,w=f.IndexDatatype.createTypedArray(_.length/3,2*(E+n.length));w.set(c);var P,D,O=E;for(m=0;m<E;m+=2){var G=c[m],k=c[m+1];w[O++]=G+b,w[O++]=k+b}for(m=0;m<n.length;m++)D=(P=n[m])+b,w[O++]=P,w[O++]=D;return{attributes:u,indices:w}}(m);else if((v=H(s.T.computePositions(m),m.cornerType)).attributes.position.values=g.T.scaleToGeodeticHeight(v.attributes.position.values,_,u),l.t(n._offsetAttribute)){var E=v.attributes.position.values.length,w=new Uint8Array(E/3),P=n._offsetAttribute===h.I.NONE?0:1;e.d(w,P),v.attributes.applyOffset=new p.r({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:w})}var D=v.attributes,O=i.c.fromVertices(D.position.values,void 0,3);return new p.T({attributes:D,indices:v.indices,primitiveType:y._0x38df4a.LINES,boundingSphere:O,offsetAttribute:n._offsetAttribute})}},function(e,t){return l.t(t)&&(e=C.unpack(e,t)),e._ellipsoid=d.n.clone(e._ellipsoid),C.createGeometry(e)}}));
