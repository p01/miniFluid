// compressed with https://xem.github.io/terser-online/

function e(e,a,r){this.posx=e,this.posy=a,this.wallflag=r,this.velx=0,this.vely=0,this.forcex=0,this.forcey=0,this.density=0}accuracy=1,Gravity=1,Pressure=3,Viscosity=4,w=79*accuracy,h=25*accuracy,scale=2;var a=[];canvas.width=w*scale,canvas.height=h*scale;var r=canvas.getContext("2d");previewarea.cols=w,previewarea.rows=h,init=()=>{a=[];for(var r=previewarea.value,s=0,t=0,c=0;c<r.length;c++){var i=r[c];if("\n"===i)s+=accuracy,t=0;else if(" "!==i){for(var o="#"===i,y=0;y<accuracy;y++)for(var l=0;l<accuracy;l++)a.push(new e(t+y,s+l,o));t+=accuracy}else t+=accuracy}},density=()=>{for(var e=0;e<a.length;e++){var r=a[e];r.density=r.wallflag?9:0;for(var s=0;s<a.length;s++){var t=a[s],c=r.posx-t.posx,i=r.posy-t.posy,o=c*c+i*i;if(o<4){var y=Math.sqrt(o)/2-1;r.density+=y*y}}}},force=()=>{for(var e=0;e<a.length;e++){var r=a[e];r.forcey=Gravity,r.forcex=0;for(var s=0;s<a.length;s++){var t=a[s],c=r.posy-t.posy,i=r.posx-t.posx,o=c*c+i*i;if(o<4){var y=Math.sqrt(o)/2-1;r.forcey+=(c*(3-r.density-t.density)*Pressure+r.vely*Viscosity-t.vely*Viscosity)*y/r.density,r.forcex+=(i*(3-r.density-t.density)*Pressure+r.velx*Viscosity-t.velx*Viscosity)*y/r.density}}}},draw=()=>{canvas.width^=0,r.fillStyle="#0008";for(var e=0;e<a.length;e++){var s=a[e],t=s.posx,c=s.posy;s.wallflag||(s.posy+=s.vely+=s.forcey/10,s.posx+=s.velx+=s.forcex/10),0<=t&&t<w&&0<=c&&c<h&&(r.beginPath(),r.arc(t*scale,c*scale,scale,0,7),r.fill())}},nextframe=()=>{density(),force(),draw()},fetch("inputs/endoh1.c").then(e=>e.text()).then(e=>{previewarea.value=e,init(),setInterval(nextframe,33)})

accuracy=1,Gravity=1,Pressure=3,Viscosity=4,w=79*accuracy,h=25*accuracy,scale=2;var e=[];canvas.width=w*scale,canvas.height=h*scale;var a=canvas.getContext("2d");previewarea.cols=w,previewarea.rows=h,init=()=>{e=[];for(var a=previewarea.value,r=0,s=0,c=0;c<a.length;c++){var t=a[c];if("\n"===t)r+=accuracy,s=0;else if(" "!==t){for(var o="#"===t,i=0;i<accuracy;i++)for(var y=0;y<accuracy;y++)e.push({posx:s+i,posy:r+y,wallflag:o,velx:0,vely:0,forcex:0,forcey:0,density:0});s+=accuracy}else s+=accuracy}},density=()=>{for(var a=0;a<e.length;a++){var r=e[a];r.density=r.wallflag?9:0;for(var s=0;s<e.length;s++){var c=e[s],t=r.posx-c.posx,o=r.posy-c.posy,i=t*t+o*o;if(i<4){var y=Math.sqrt(i)/2-1;r.density+=y*y}}}},force=()=>{for(var a=0;a<e.length;a++){var r=e[a];r.forcey=Gravity,r.forcex=0;for(var s=0;s<e.length;s++){var c=e[s],t=r.posy-c.posy,o=r.posx-c.posx,i=t*t+o*o;if(i<4){var y=Math.sqrt(i)/2-1;r.forcey+=(t*(3-r.density-c.density)*Pressure+r.vely*Viscosity-c.vely*Viscosity)*y/r.density,r.forcex+=(o*(3-r.density-c.density)*Pressure+r.velx*Viscosity-c.velx*Viscosity)*y/r.density}}}},draw=()=>{canvas.width^=0,a.fillStyle="#0008";for(var r=0;r<e.length;r++){var s=e[r],c=s.posx,t=s.posy;s.wallflag||(s.posy+=s.vely+=s.forcey/10,s.posx+=s.velx+=s.forcex/10),0<=c&&c<w&&0<=t&&t<h&&(a.beginPath(),a.arc(c*scale,t*scale,scale,0,7),a.fill())}},nextframe=()=>{density(),force(),draw()},fetch("inputs/endoh1.c").then(e=>e.text()).then(e=>{previewarea.value=e,init(),setInterval(nextframe,33)})

e=[];canvas.width=158,canvas.height=50;var r=canvas.getContext("2d");previewarea.cols=79,previewarea.rows=25,init=()=>{e=[];for(var r=previewarea.value,a=0,t=0,o=0;o<r.length;o++){var s=r[o];if("\n"===s)a+=1,t=0;else if(" "!==s){for(var v="#"===s,n=0;n<1;n++)for(var l=0;l<1;l++)e.push({posx:t+n,posy:a+l,wallflag:v,velx:0,vely:0,forcex:0,forcey:0,density:0});t+=1}else t+=1}},density=()=>{for(var r=0;r<e.length;r++){var a=e[r];a.density=a.wallflag?9:0;for(var t=0;t<e.length;t++){var o=e[t],s=a.posx-o.posx,v=a.posy-o.posy,n=s*s+v*v;if(n<4){var l=Math.sqrt(n)/2-1;a.density+=l*l}}}},force=()=>{for(var r=0;r<e.length;r++){var a=e[r];a.forcey=1,a.forcex=0;for(var t=0;t<e.length;t++){var o=e[t],s=a.posy-o.posy,v=a.posx-o.posx,n=s*s+v*v;if(n<4){var l=Math.sqrt(n)/2-1;a.forcey+=(s*(3-a.density-o.density)*3+4*a.vely-4*o.vely)*l/a.density,a.forcex+=(v*(3-a.density-o.density)*3+4*a.velx-4*o.velx)*l/a.density}}}},draw=()=>{canvas.width^=0,r.fillStyle="#0008";for(var a=0;a<e.length;a++){var t=e[a],o=t.posx,s=t.posy;t.wallflag||(t.posy+=t.vely+=t.forcey/10,t.posx+=t.velx+=t.forcex/10),0<=o&&o<79&&0<=s&&s<25&&(r.beginPath(),r.arc(2*o,2*s,2,0,7),r.fill())}},nextframe=()=>{density(),force(),draw()},fetch("inputs/endoh1.c").then(e=>e.text()).then(e=>{previewarea.value=e,init(),setInterval(nextframe,33)})

e=[];c.width=158,c.height=50;var r=c.getContext("2d");p.cols=79,p.rows=25,init=()=>{e=[];for(var r=p.value,t=0,o=0,a=0;a<r.length;a++){var l=r[a];if("\n"===l)t+=1,o=0;else if(" "!==l){for(var s="#"===l,n=0;n<1;n++)for(var f=0;f<1;f++)e.push({posx:o+n,posy:t+f,wallflag:s,velx:0,vely:0,forcex:0,forcey:0,density:0});o+=1}else o+=1}},density=()=>{for(var r=0;r<e.length;r++){var t=e[r];t.density=t.wallflag?9:0;for(var o=0;o<e.length;o++){var a=e[o],l=t.posx-a.posx,s=t.posy-a.posy,n=l*l+s*s;if(n<4){var f=Math.sqrt(n)/2-1;t.density+=f*f}}}},force=()=>{for(var r=0;r<e.length;r++){var t=e[r];t.forcey=1,t.forcex=0;for(var o=0;o<e.length;o++){var a=e[o],l=t.posy-a.posy,s=t.posx-a.posx,n=l*l+s*s;if(n<4){var f=Math.sqrt(n)/2-1;t.forcey+=(l*(3-t.density-a.density)*3+4*t.vely-4*a.vely)*f/t.density,t.forcex+=(s*(3-t.density-a.density)*3+4*t.velx-4*a.velx)*f/t.density}}}},draw=()=>{c.width^=0,r.fillStyle="#0008";for(var t=0;t<e.length;t++){var o=e[t],a=o.posx,l=o.posy;o.wallflag||(o.posy+=o.vely+=o.forcey/10,o.posx+=o.velx+=o.forcex/10),0<=a&&a<79&&0<=l&&l<25&&(r.beginPath(),r.arc(2*a,2*l,2,0,7),r.fill())}},nextframe=()=>{density(),force(),draw()},fetch("inputs/endoh1.c").then(e=>e.text()).then(e=>{p.value=e,init(),setInterval(nextframe,33)})

r=[];c.width=158,c.height=50;var t=c.getContext("2d");p.cols=79,p.rows=25,init=()=>{r=[];for(var t=p.value,a=0,e=0,v=0;v<t.length;v++){var f=t[v];if("\n"===f)a+=1,e=0;else if(" "!==f){for(var n="#"===f,d=0;d<1;d++)for(var h=0;h<1;h++)r.push({x:e+d,y:a+h,w:n,u:0,v:0,f:0,g:0,d:0});e+=1}else e+=1}},d=()=>{for(var t=0;t<r.length;t++){var a=r[t];a.d=a.w?9:0;for(var e=0;e<r.length;e++){var v=r[e],f=a.x-v.x,n=a.y-v.y,d=f*f+n*n;if(d<4){var h=Math.sqrt(d)/2-1;a.d+=h*h}}}},force=()=>{for(var t=0;t<r.length;t++){var a=r[t];a.g=1,a.f=0;for(var e=0;e<r.length;e++){var v=r[e],f=a.y-v.y,n=a.x-v.x,d=f*f+n*n;if(d<4){var h=Math.sqrt(d)/2-1;a.g+=(f*(3-a.d-v.d)*3+4*a.v-4*v.v)*h/a.d,a.f+=(n*(3-a.d-v.d)*3+4*a.u-4*v.u)*h/a.d}}}},draw=()=>{c.width^=0,t.fillStyle="#0008";for(var a=0;a<r.length;a++){var e=r[a],v=e.x,f=e.y;e.w||(e.y+=e.v+=e.g/10,e.x+=e.u+=e.f/10),0<=v&&v<79&&0<=f&&f<25&&(t.beginPath(),t.arc(2*v,2*f,2,0,7),t.fill())}},nextframe=()=>{d(),force(),draw()},fetch("inputs/endoh1.c").then(r=>r.text()).then(r=>{p.value=r,init(),setInterval(nextframe,33)})

r=[];c.width=158,c.height=50;var t=c.getContext("2d");init=()=>{r=[];for(var t=p.value,a=0,e=0,v=0;v<t.length;v++){var f=t[v];if("\n"===f)a+=1,e=0;else if(" "!==f){for(var n="#"===f,d=0;d<1;d++)for(var h=0;h<1;h++)r.push({x:e+d,y:a+h,w:n,u:0,v:0,f:0,g:0,d:0});e+=1}else e+=1}},d=()=>{for(var t=0;t<r.length;t++){var a=r[t];a.d=a.w?9:0;for(var e=0;e<r.length;e++){var v=r[e],f=a.x-v.x,n=a.y-v.y,d=f*f+n*n;if(d<4){var h=Math.sqrt(d)/2-1;a.d+=h*h}}}},force=()=>{for(var t=0;t<r.length;t++){var a=r[t];a.g=1,a.f=0;for(var e=0;e<r.length;e++){var v=r[e],f=a.y-v.y,n=a.x-v.x,d=f*f+n*n;if(d<4){var h=Math.sqrt(d)/2-1;a.g+=(f*(3-a.d-v.d)*3+4*a.v-4*v.v)*h/a.d,a.f+=(n*(3-a.d-v.d)*3+4*a.u-4*v.u)*h/a.d}}}},draw=()=>{c.width^=0,t.fillStyle="#0008";for(var a=0;a<r.length;a++){var e=r[a],v=e.x,f=e.y;e.w||(e.y+=e.v+=e.g/10,e.x+=e.u+=e.f/10),0<=v&&v<79&&0<=f&&f<25&&(t.beginPath(),t.arc(2*v,2*f,2,0,7),t.fill())}},nextframe=()=>{d(),force(),draw()},fetch("inputs/endoh1.c").then(r=>r.text()).then(r=>{p.value=r,init(),setInterval(nextframe,33)})

t=[];c.width=158,c.height=50;var r=c.getContext("2d");init=()=>{t=[];for(var r=p.value,e=0,a=0,f=0;f<r.length;f++){var v=r[f];if("\n"===v)e+=1,a=0;else if(" "!==v){for(var n="#"===v,h=0;h<1;h++)for(var l=0;l<1;l++)t.push({x:a+h,y:e+l,w:n,u:0,v:0,f:0,g:0,d:0});a+=1}else a+=1}},fetch("inputs/endoh1.c").then(t=>t.text()).then(e=>{p.value=e,init(),setInterval(()=>{for(var e=0;e<t.length;e++){(d=t[e]).d=d.w?9:0;for(var a=0;a<t.length;a++){var f=t[a];if((l=(h=d.x-f.x)*h+(n=d.y-f.y)*n)<4){var v=Math.sqrt(l)/2-1;d.d+=v*v}}}for(e=0;e<t.length;e++){(d=t[e]).g=1,d.f=0;for(a=0;a<t.length;a++){var n,h,l;f=t[a];if((l=(n=d.y-f.y)*n+(h=d.x-f.x)*h)<4){var i=Math.sqrt(l)/2-1;d.g+=(n*(3-d.d-f.d)*3+4*d.v-4*f.v)*i/d.d,d.f+=(h*(3-d.d-f.d)*3+4*d.u-4*f.u)*i/d.d}}}c.width^=0,r.fillStyle="#0008";for(e=0;e<t.length;e++){var d,g=(d=t[e]).x,o=d.y;d.w||(d.y+=d.v+=d.g/10,d.x+=d.u+=d.f/10),0<=g&&g<79&&0<=o&&o<25&&(r.beginPath(),r.arc(2*g,2*o,2,0,7),r.fill())}},33)})

t=[];c.width=158,c.height=50;r=c.getContext("2d");init=()=>{t=[];for(r=p.value,e=0,a=0,f=0;f<r.length;f++){v=r[f];if("\n"===v)e+=1,a=0;else if(" "!==v){for(n="#"===v,h=0;h<1;h++)for(l=0;l<1;l++)t.push({x:a+h,y:e+l,w:n,u:0,v:0,f:0,g:0,d:0});a+=1}else a+=1}},fetch("inputs/endoh1.c").then(t=>t.text()).then(e=>{p.value=e,init(),setInterval(()=>{for(e=0;e<t.length;e++){(d=t[e]).d=d.w?9:0;for(a=0;a<t.length;a++){f=t[a];if((l=(h=d.x-f.x)*h+(n=d.y-f.y)*n)<4){v=Math.sqrt(l)/2-1;d.d+=v*v}}}for(e=0;e<t.length;e++){(d=t[e]).g=1,d.f=0;for(a=0;a<t.length;a++){n,h,l;f=t[a];if((l=(n=d.y-f.y)*n+(h=d.x-f.x)*h)<4){i=Math.sqrt(l)/2-1;d.g+=(n*(3-d.d-f.d)*3+4*d.v-4*f.v)*i/d.d,d.f+=(h*(3-d.d-f.d)*3+4*d.u-4*f.u)*i/d.d}}}c.width^=0,r.fillStyle="#0008";for(e=0;e<t.length;e++){d,g=(d=t[e]).x,o=d.y;d.w||(d.y+=d.v+=d.g/10,d.x+=d.u+=d.f/10),0<=g&&g<79&&0<=o&&o<25&&(r.beginPath(),r.arc(2*g,2*o,2,0,7),r.fill())}},33)})

t=[];c.width=158,c.height=50;e=c.getContext("2d");init=()=>{t=[];for(e=p.value,r=0,a=0,n=0;n<e.length;n++){v=e[n];if("\n"===v)r++,a=0;else if(" "!==v){f="#"===v;t.push({x:a,y:r,w:f,u:0,v:0,f:0,g:0,d:0}),a++}else a++}},fetch("inputs/endoh1.c").then(t=>t.text()).then(r=>{p.value=r,init(),setInterval(()=>{for(r=0;r<t.length;r++){(d=t[r]).d=d.w?9:0;for(a=0;a<t.length;a++){n=t[a];if((l=(h=d.x-n.x)*h+(f=d.y-n.y)*f)<4){v=Math.sqrt(l)/2-1;d.d+=v*v}}}for(r=0;r<t.length;r++){(d=t[r]).g=1,d.f=0;for(a=0;a<t.length;a++){f,h,l;n=t[a];if((l=(f=d.y-n.y)*f+(h=d.x-n.x)*h)<4){i=Math.sqrt(l)/2-1;d.g+=(f*(3-d.d-n.d)*3+4*d.v-4*n.v)*i/d.d,d.f+=(h*(3-d.d-n.d)*3+4*d.u-4*n.u)*i/d.d}}}c.width^=0,e.fillStyle="#0008";for(r=0;r<t.length;r++){d,g=(d=t[r]).x,o=d.y;d.w||(d.y+=d.v+=d.g/10,d.x+=d.u+=d.f/10),0<=g&&g<79&&0<=o&&o<25&&(e.beginPath(),e.arc(2*g,2*o,2,0,7),e.fill())}},33)})

for(C of(G=1,P=3,V=4,a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=0,x=0,v=O.value))if("\n"===C)y++,x=0;else{if(" "!==C)for(e=0;e<1;e++)for(f=0;f<1;f++)a.push({x:x+e,y:y+f,w:"#"===C,a:0,b:0,c:0,d:0,D:0});x++}setInterval(()=>{for(i=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=a.length;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=a.length;i--;)for(p=a[i],p.d=G,p.c=0,k=a.length;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*P+p.b*V-q.b*V)*W/p.D,p.c+=(e*(3-p.D-q.D)*P+p.a*V-q.a*V)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=a.length;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(P=3,V=4,a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=0,x=0,v=O.value))if("\n"===C)y++,x=0;else{if(" "!==C)for(e=0;e<1;e++)for(f=0;f<1;f++)a.push({x:x+e,y:y+f,w:"#"===C,a:0,b:0,c:0,d:0,D:0});x++}setInterval(()=>{for(i=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=a.length;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=a.length;i--;)for(p=a[i],p.d=1,p.c=0,k=a.length;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*P+p.b*V-q.b*V)*W/p.D,p.c+=(e*(3-p.D-q.D)*P+p.a*V-q.a*V)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=a.length;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(P=3,V=4,a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=0,x=0,v=O.value))"\n"===C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"===C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=a.length;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=a.length;i--;)for(p=a[i],p.d=1,p.c=0,k=a.length;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*P+p.b*V-q.b*V)*W/p.D,p.c+=(e*(3-p.D-q.D)*P+p.a*V-q.a*V)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=a.length;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(P=3,V=4,a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=0,x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=a.length;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=a.length;i--;)for(p=a[i],p.d=1,p.c=0,k=a.length;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*P+p.b*V-q.b*V)*W/p.D,p.c+=(e*(3-p.D-q.D)*P+p.a*V-q.a*V)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=a.length;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=l=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=l;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=l;i--;)for(p=a[i],p.d=1,p.c=0,k=l;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*3+3*p.b-3*q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)*3+3*p.a-3*q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=l;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=l=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=l;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.D+=W*W);for(i=l;i--;)for(p=a[i],p.d=1,p.c=0,k=l;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5-2,p.d+=(f*(3-p.D-q.D)+p.b-q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)+p.a-q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=l;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=l=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.D+=W*W);for(i=l;i--;)for(p=a[i],p.d=1,p.c=0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.d+=(f*(3-p.D-q.D)+p.b-q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)+p.a-q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=l;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=l=a.length;p=a[--i];)for(p.D=p.w?9:0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.D+=W*W);for(i=l;p=a[--i];)for(p.d=1,p.c=0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.d+=(f*(3-p.D-q.D)+p.b-q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)+p.a-q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=l;p=a[--i];)x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval(()=>{for(i=l=a.length;p=a[--i];)for(p.D=p.w?9:0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.D+=W*W);for(i=l;p=a[--i];)for(p.d=1,p.c=0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5-2,p.d+=(f*(3-p.D-q.D)+p.b-q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)+p.a-q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=l;p=a[--i];)X.fillRect(2*p.x,2*p.y,4,4),p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20)},33)

for(C of(a=[],c.width=160,c.height=50,X=c.getContext`2d`,y=x=0,v=O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval((()=>{for(i=l=a.length;p=a[--i];)for(p.D=p.w?9:0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=l;p=a[--i];)for(p.d=1,p.c=0,k=l;q=a[--k];)e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*3+4*p.b-4*q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)*3+4*p.a-4*q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0005",i=l;p=a[--i];)x=p.x,y=p.y,X.fillRect(2*p.x,2*p.y,4,4),p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20)}),33)
  
for(C of(a=[],X=c.getContext`2d`,y=x=0,O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval((()=>{for(i=l=a.length;p=a[--i];)for(p.D=p.w?9:0,k=l;q=a[--k];)g=Math.hypot(p.x-q.x,p.y-q.y),g<2&&(g=g**.5/2-1,p.D+=g*g);for(i=l;p=a[--i];)for(p.d=1,p.c=0,k=l;q=a[--k];)g=Math.hypot(e=p.x-q.x,f=p.y-q.y),g<2&&(g=g/2-1,p.d+=(f*(3-p.D-q.D)*3+4*p.b-4*q.b)*g/p.D,p.c+=(e*(3-p.D-q.D)*3+4*p.a-4*q.a)*g/p.D);for(c.width^=0,X.fillStyle="#0005",i=l;p=a[--i];)x=p.x,y=p.y,X.fillRect(3*p.x,5*p.y,8,8),p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20)}),33)
  
for(C of(a=[],X=c.getContext`2d`,y=x=0,O.value))"\n"==C?(y++,x=0):(" "!==C&&a.push({x:x,y:y,w:"#"==C,a:0,b:0,c:0,d:0,D:0}),x++);setInterval((()=>{for(p of a)for(q of(p.D=p.w?9:0,a))g=Math.hypot(p.x-q.x,p.y-q.y),g<2&&(g=g/2-1,p.D+=g*g);for(p of a)for(q of(p.d=1,p.c=0,a))g=Math.hypot(e=p.x-q.x,f=p.y-q.y),g<2&&(g=g/2-1,p.d+=(f*(3-p.D-q.D)*3+4*p.b-4*q.b)*g/p.D,p.c+=(e*(3-p.D-q.D)*3+4*p.a-4*q.a)*g/p.D);for(p of(c.width^=0,X.fillStyle="#0005",a))x=p.x,y=p.y,X.fillRect(3*p.x,5*p.y,9,8),p.w||(p.y+=p.b+=p.d/25,p.x+=p.a+=p.c/15)}),16)

for(C of(a=[],X=c.getContext`2d`,y=x=0,O.value))C<" "?(y++,x=0):(C>" "&&a.push({x:x,y:y,p:"#"!=C,a:0,b:0,c:0,d:0,D:9}),x++);M=(p,o)=>{for(q of a)g=Math.min(0,Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1),o?(p.d+=(f*(3-p.D-q.D)*3+4*(p.b-q.b))*g/p.D,p.c+=(e*(3-p.D-q.D)*3+4*(p.a-q.a))*g/p.D):p.D+=g*g},setInterval(o=>{for(p of(c.width^=0,a))p.p&&(p.y+=p.b+=p.d/25,p.x+=p.a+=p.c/15,M(p,p.D=p.c=0),M(p,p.d=1)),X.fillRect(3*p.x,5*p.y,8,9)},16)

for(C of(a=[],X=c.getContext`2d`,y=x=0,O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,w:"#"==C,a:0,b:0}),x++);setInterval((()=>{for(p of a)for(q of(p.D=9*p.w,a))g=Math.hypot(p.x-q.x,p.y-q.y),g<2&&(g=g/2-1,p.D+=g*g);for(p of a)for(q of(p.d=1,p.c=0,a))g=Math.hypot(e=p.x-q.x,f=p.y-q.y),g<2&&(g=(2*g-4)/p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g);for(p of(c.width^=0,a))X.fillRect(3*p.x,5*p.y,8,9),p.w||(p.y+=p.b+=p.d/25,p.x+=p.a+=p.c/15)}),9)
  
for(C of(a=[],X=c.getContext`2d`,y=x=0,O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,w:"#"==C,a:0,b:0}),x++);M=o=>{for(p of a)for(q of(o?p.D=9*p.w:(p.d=1,p.c=0),a))g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2,o?p.D+=g<1&&--g*g:g<1&&(g=(4*g-4)/p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g*2,p.c+=(e*z+p.a-q.a)*g*2)},setInterval((f=>{for(p of(M(1),M(),c.width^=0,a))X.fillRect(3*p.x,5*p.y,8,9),p.w||(p.y+=p.b+=p.d/25,p.x+=p.a+=p.c/15)}),9)
  
for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,w:"#"==C,a:0,b:0}),x++);M=x=>{for(p of a)for(q of(x?p.D=9*p.w:(p.d=1,p.c=0),a))g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2,x?p.D+=g<1&&--g*g:g<1&&(g=(4*g-4)/p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g*2,p.c+=(e*z+p.a-q.a)*g*2)},setInterval((f=>{for(p of(M(1),c.width^=M(),a))X.fillText("@",3*p.x,5*p.y),p.w||(p.y+=p.b+=p.d/30,p.x+=p.a+=p.c/15)}),9)

for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0}),x++);M=o=>{for(p of a)for(q of(p.d=.1,p.c=0,o||(p.D=9*p.w),a))!((g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0)||(o?(g=g/p.D/2,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g)},setInterval(o=>{for(p of(M(c.width^=M()),a))X.fillText(p.C,3*p.x,5*p.y),p.w||(p.y+=p.b+=p.d/2,p.x+=p.a+=p.c)},9)

for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0}),x++);M=o=>{for(p of a)for(q of(p.d=.1,p.c=0,o||(p.D=9*p.w),a))!((g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0)||(o?(g/=p.D*2,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g)},setInterval(o=>{for(p of(M(c.width^=M()),a))X.fillText(p.C,3*p.x,5*p.y),p.w||(p.y+=p.b+=p.d/2,p.x+=p.a+=p.c)},9)

for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0}),x++);M=o=>{for(p of a)for(q of(p.d=.1,p.c=0,o||(p.D=9*p.w),a))!((g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0)||(o?(g/=2*p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g)},setInterval(_=>{for(p of(M(c.width^=M()),a))with(p)X.fillText(C,3*x,5*y),w||(y+=b+=d/2,x+=a+=c)},9)

for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0}),x++);M=x=>{for(p of a)for(q of(p.d=.1,p.c=0,x||(p.D=9*p.w),a))!((g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0)||(x?(g/=2*p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g)},setInterval`for(p of(M(c.width^=M()),a))with(p)X.fillText(C,3*x,5*y),w||(y+=b+=d/2,x+=a+=c)`

for(C of(X=c.getContext`2d`,x=y=a=[],O.value))C<" "?(y++,x=0):(C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0}),x++);M=x=>{for(p of a)for(q of(p.d=.1,p.c=0,x||(p.D=9*p.w),a))(g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0&&(x?(g/=2*p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g)},setInterval`for(p of(M(c.width^=M()),a))with(p)X.fillText(C,3*x,5*y),w||(y+=b+=d/2,x+=a+=c)`

X=c.getContext`2d`;x=y=a=[];for(C of O.value)++x,C<" "?x=!++y:C>" "&&a.push({x,y,C,w:"#"==C,a:0,b:0});M=o=>a.map(p=>{for(q of(p.d=.1,p.c=0,o||(p.D=9*p.w),a))(g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0?o?(g/=p.D,p.d+=(f*(z=3-p.D-q.D)+p.b-q.b)*g,p.c+=(e*z+p.a-q.a)*g):p.D+=g*g:1});setInterval`M(c.width^=M());for(p of a)with(p)X.fillText(C,3*x,5*y),w||(y+=b+=d/4,x+=a+=c/2)`

x=y=a=[];for(C of O.value)++x,C<" "?x=!++y:C>" "&&a.push({x,y,C,w:"#"==C,u:0,v:0});M=o=>a.map(p=>{p.t=.1;p.s=0;o||(p.D=9*p.w);for(q of a)(g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0?o?(g/=p.D,p.t+=(f*(z=3-p.D-q.D)+p.v-q.v)*g,p.s+=(e*z+p.u-q.u)*g):p.D+=g*g:1});setInterval`M(c.width^=M());for(p of a)with(p)c.getContext("2d").fillText(C,3*x,5*y),w||(y+=v+=t/4,x+=u+=s/2)`
