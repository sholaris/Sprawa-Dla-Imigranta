(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6xyR":function(e,a,n){"use strict";var t=n("wx14"),r=n("zLVn"),c=n("TSYQ"),i=n.n(c),o=n("q1tI"),l=n.n(o),s=n("vUet"),u=n("YdCC"),d=function(e){return l.a.forwardRef((function(a,n){return l.a.createElement("div",Object(t.a)({},a,{ref:n,className:i()(a.className,e)}))}))},m=n("Wzyw"),p=l.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.a)(n,"card-img");return l.a.createElement(d,Object(t.a)({ref:a,className:i()(o?p+"-"+o:p,c)},m))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,b=d("h5"),v=d("h6"),w=Object(u.a)("card-body"),j=l.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,p=e.border,f=e.body,b=e.children,v=e.as,j=void 0===v?"div":v,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),z=Object(s.a)(n,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:z+"-header"}}),[z]);return l.a.createElement(m.a.Provider,{value:N},l.a.createElement(j,Object(t.a)({ref:a},y,{className:i()(c,z,u&&"bg-"+u,d&&"text-"+d,p&&"border-"+p)}),f?l.a.createElement(w,null,b):b))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=f,j.Title=Object(u.a)("card-title",{Component:b}),j.Subtitle=Object(u.a)("card-subtitle",{Component:v}),j.Body=w,j.Link=Object(u.a)("card-link",{Component:"a"}),j.Text=Object(u.a)("card-text",{Component:"p"}),j.Header=Object(u.a)("card-header"),j.Footer=Object(u.a)("card-footer"),j.ImgOverlay=Object(u.a)("card-img-overlay");a.a=j},JI6e:function(e,a,n){"use strict";var t=n("wx14"),r=n("zLVn"),c=n("TSYQ"),i=n.n(c),o=n("q1tI"),l=n.n(o),s=n("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.className,o=e.as,d=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(n,"col"),f=[],b=[];return u.forEach((function(e){var a,n,t,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var c=r.span;a=void 0===c||c,n=r.offset,t=r.order}else a=r;var i="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+p+i:""+p+i+"-"+a),null!=t&&b.push("order"+i+"-"+t),null!=n&&b.push("offset"+i+"-"+n)})),f.length||f.push(p),l.a.createElement(d,Object(t.a)({},m,{ref:a,className:i.a.apply(void 0,[c].concat(f,b))}))}));d.displayName="Col",a.a=d},RNiq:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),c=n("7vrA"),i=n("fqeY"),o=n("wx14"),l=n("zLVn"),s=n("ZCiN");var u=function(e,a){var n=Object(t.useRef)(!0);Object(t.useEffect)((function(){if(!n.current)return e();n.current=!1}),a)},d=n("XcHJ");function m(e){var a=function(e){var a=Object(t.useRef)(e);return a.current=e,a}(e);Object(t.useEffect)((function(){return function(){return a.current()}}),[])}var p=Math.pow(2,31)-1;function f(){var e=Object(d.a)(),a=Object(t.useRef)();return m((function(){return clearTimeout(a.current)})),Object(t.useMemo)((function(){var n=function(){return clearTimeout(a.current)};return{set:function(t,r){void 0===r&&(r=0),e()&&(n(),r<=p?a.current=setTimeout(t,r):function e(a,n,t){var r=t-Date.now();a.current=r<=p?setTimeout(n,r):setTimeout((function(){return e(a,n,t)}),p)}(a,t,Date.now()+r))},clear:n}}),[])}var b=n("TSYQ"),v=n.n(b),w=n("YECM"),j=n("dRu9"),y=n("JCAc"),z=n("YdCC"),N=Object(z.a)("carousel-caption",{Component:"div"}),h=Object(z.a)("carousel-item");function g(e,a){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?a(e,n++):e}))}var O=n("dbZe"),k=n("vUet"),E=n("z+q/"),x={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var C=r.a.forwardRef((function(e,a){var n=Object(y.a)(e,{activeIndex:"onSelect"}),c=n.as,i=void 0===c?"div":c,d=n.bsPrefix,m=n.slide,p=n.fade,b=n.controls,z=n.indicators,N=n.activeIndex,h=n.onSelect,x=n.onSlide,C=n.onSlid,I=n.interval,T=n.keyboard,P=n.onKeyDown,S=n.pause,R=n.onMouseOver,M=n.onMouseOut,W=n.wrap,_=n.touch,D=n.onTouchStart,L=n.onTouchMove,Z=n.onTouchEnd,Y=n.prevIcon,A=n.prevLabel,F=n.nextIcon,J=n.nextLabel,q=n.className,B=n.children,K=Object(l.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),V=Object(k.a)(d,"carousel"),X=Object(t.useRef)(null),H=Object(t.useState)("next"),Q=H[0],U=H[1],G=Object(t.useState)(!1),$=G[0],ee=G[1],ae=Object(t.useState)(N),ne=ae[0],te=ae[1];$||N===ne||(X.current?(U(X.current),X.current=null):U(N>ne?"next":"prev"),m&&ee(!0),te(N));var re=r.a.Children.toArray(B).filter(r.a.isValidElement).length,ce=Object(t.useCallback)((function(e){if(!$){var a=ne-1;if(a<0){if(!W)return;a=re-1}X.current="prev",h(a,e)}}),[$,ne,h,W,re]),ie=Object(s.a)((function(e){if(!$){var a=ne+1;if(a>=re){if(!W)return;a=0}X.current="next",h(a,e)}})),oe=Object(t.useRef)();Object(t.useImperativeHandle)(a,(function(){return{element:oe.current,prev:ce,next:ie}}));var le=Object(s.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&ie()})),se="next"===Q?"left":"right";u((function(){m||(x&&x(ne,se),C&&C(ne,se))}),[ne]);var ue=V+"-item-"+Q,de=V+"-item-"+se,me=Object(t.useCallback)((function(e){Object(E.a)(e),x&&x(ne,se)}),[x,ne,se]),pe=Object(t.useCallback)((function(){ee(!1),C&&C(ne,se)}),[C,ne,se]),fe=Object(t.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void ie(e)}P&&P(e)}),[T,P,ce,ie]),be=Object(t.useState)(!1),ve=be[0],we=be[1],je=Object(t.useCallback)((function(e){"hover"===S&&we(!0),R&&R(e)}),[S,R]),ye=Object(t.useCallback)((function(e){we(!1),M&&M(e)}),[M]),ze=Object(t.useRef)(0),Ne=Object(t.useRef)(0),he=Object(t.useState)(!1),ge=he[0],Oe=he[1],ke=f(),Ee=Object(t.useCallback)((function(e){ze.current=e.touches[0].clientX,Ne.current=0,_&&Oe(!0),D&&D(e)}),[_,D]),xe=Object(t.useCallback)((function(e){e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-ze.current,L&&L(e)}),[L]),Ce=Object(t.useCallback)((function(e){if(_){var a=Ne.current;if(Math.abs(a)<=40)return;a>0?ce(e):ie(e)}ke.set((function(){Oe(!1)}),I),Z&&Z(e)}),[_,ce,ie,ke,I,Z]),Ie=null!=I&&!ve&&!ge&&!$,Te=Object(t.useRef)();Object(t.useEffect)((function(){if(Ie)return Te.current=setInterval(document.visibilityState?le:ie,I),function(){clearInterval(Te.current)}}),[Ie,ie,I,le]);var Pe=Object(t.useMemo)((function(){return z&&Array.from({length:re},(function(e,a){return function(e){h(a,e)}}))}),[z,re,h]);return r.a.createElement(i,Object(o.a)({ref:oe},K,{onKeyDown:fe,onMouseOver:je,onMouseOut:ye,onTouchStart:Ee,onTouchMove:xe,onTouchEnd:Ce,className:v()(q,V,m&&"slide",p&&V+"-fade")}),z&&r.a.createElement("ol",{className:V+"-indicators"},g(B,(function(e,a){return r.a.createElement("li",{key:a,className:a===ne?"active":null,onClick:Pe[a]})}))),r.a.createElement("div",{className:V+"-inner"},g(B,(function(e,a){var n=a===ne;return m?r.a.createElement(j.e,{in:n,onEnter:n?me:null,onEntered:n?pe:null,addEndListener:w.a},(function(a){return r.a.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==a&&ue,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&de)})})):r.a.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),b&&r.a.createElement(r.a.Fragment,null,(W||0!==N)&&r.a.createElement(O.a,{className:V+"-control-prev",onClick:ce},Y,A&&r.a.createElement("span",{className:"sr-only"},A)),(W||N!==re-1)&&r.a.createElement(O.a,{className:V+"-control-next",onClick:ie},F,J&&r.a.createElement("span",{className:"sr-only"},J))))}));C.displayName="Carousel",C.defaultProps=x,C.Caption=N,C.Item=h;var I=C,T=r.a.createElement,P=function(){return T(c.a,{fluid:!0},T(I,null,T(I.Item,{datainterval:"1000000"},T("img",{className:"d-block w-100 ",src:"../static/img/img01.jpg",alt:"First slide"}),T(I.Caption,null,T("h3",null,"Dost\u0119pno\u015b\u0107"),T("p",null,"Wszystkie potrzebne procedury w jednym miejscu"))),T(I.Item,null,T("img",{className:"d-block w-100 ",src:"../static/img/img02.png",alt:"Third slide"}),T(I.Caption,null,T("h3",null,"Informacje"),T("p",null,"Informacje przedstawione w przyst\u0119pny spos\xf3b"))),T(I.Item,null,T("img",{className:"d-block w-100 ",src:"../static/img/img03.jpg",alt:"Third slide"}),T(I.Caption,null,T("h3",null,"Formalno\u015bci"),T("p",null,"Wnioski i formularze dost\u0119pne do wype\u0142nienia online"))),T(I.Item,null,T("img",{className:"d-block w-100 ",src:"../static/img/img03.jpg",alt:"Third slide"}),T(I.Caption,null,T("h3",null,"Spo\u0142eczno\u015b\u0107"),T("p",null,"Zbi\xf3r porad i wsp\xf3lnych do\u015bwiadcze\u0144 na wsp\xf3lnym forum")))))},S=r.a.forwardRef((function(e,a){var n,t=e.as,c=void 0===t?"div":t,i=e.className,s=e.fluid,u=e.bsPrefix,d=Object(l.a)(e,["as","className","fluid","bsPrefix"]),m=((n={})[u=Object(k.a)(u,"jumbotron")]=!0,n[u+"-fluid"]=s,n);return r.a.createElement(c,Object(o.a)({ref:a},d,{className:v()(i,m)}))}));S.defaultProps={fluid:!1},S.displayName="Jumbotron";var R=S,M=n("YFqc"),W=n.n(M),_=n("cWnB"),D=r.a.createElement,L=function(e){return D(W.a,{href:"/".concat(e.reference),as:"/".concat(e.id)},D(_.a,{className:"btn-lg",variant:"primary"},e.title))},Z=r.a.createElement,Y=function(){return Z(R,{className:"banner"},Z("h1",null,"Formalno\u015bci dla ka\u017cdego!"),Z("p",{className:"content"},"Wszystkie sprawy w czytelnym katalogu, formularze dost\u0119pne do wype\u0142nienia online oraz porady innych os\xf3b na forum. W trzech prostych krokach zrealizuj swoj\u0105 spraw\u0119 urz\u0119dow\u0105. Bez konieczno\u015bci szukania informacji na dziesi\u0105tkach stron w internecie czy umawiania si\u0119 na specjalne konsultacje prawne."),Z("p",{className:"button"},Z(L,{title:"Za\u0142atw spraw\u0119",id:"cudzoziemcy",reference:"cudzoziemcy"})))},A=n("3Z9Z"),F=n("JI6e"),J=r.a.createElement,q=function(e){var a=e.name,n=e.content;return J(R,{className:a},J("p",{className:"note-content"},n))},B=r.a.createElement,K=function(){return B(r.a.Fragment,null,B("hr",{className:"separator-sh"}),B("h1",null,"katalog spraw"),B(A.a,{className:"folders-row-content"},B(F.a,null,B("h2",null,"Wybierz swoj\u0105 spraw\u0119"),B(q,{name:"note-left",content:"Katalog spraw w czytelny spos\xf3b prezentuje sprawy urz\u0119dowe jakie mog\u0105\r Ci\u0119 zainteresowa\u0107. Znajd\u017a swoj\u0105 spraw\u0119 i zapoznaj si\u0119 z jej szczeg\xf3\u0142ami."})),B(F.a,null,B("img",{src:"../static/img/folders.jpg",className:"main-content"}))),B("hr",{className:"separator-main"}),B(A.a,{className:"folders-row-content"},B(F.a,null,B("img",{src:"../static/img/info_search2.png",className:"main-content"})),B(F.a,null,B("h2",null,"ZNAJD\u0179 POTRZEBNE INFORMACJE"),B(q,{name:"note-right",content:"Zapoznaj si\u0119 z niezb\u0119dnymi informacjami dotycz\u0105cymi Twojej sprawy. Dowiedz si\u0119 czy mo\u017cesz j\u0105 zrealizowa\u0107, jakie wnioski b\u0119dziesz musia\u0142 przygotowa\u0107, do jakiego urz\u0119du si\u0119 uda\u0107 oraz ile b\u0119dzie Ci\u0119 to kosztowa\u0107."}))),B("hr",{className:"separator-main"}),B(A.a,{className:"folders-row-content"},B(F.a,null,B("h2",null,"WYPE\u0141NIJ WYMAGANY WNIOSEK"),B(q,{name:"note-left",content:"Wype\u0142nij potrzebny Ci wniosek poprzez formularz online lub pobierz szablon aby wype\u0142ni\u0107 go r\u0119cznie. "})),B(F.a,null,B("img",{src:"../static/img/filling_form2.jpg",className:"main-content"}))))},V=n("6xyR"),X=n("IP2g"),H=r.a.createElement,Q=function(e){var a=e.title,n=e.content,t=e.icon_name1,r=e.icon_name2,c=void 0===r?"":r;return H(V.a,null,H("div",{className:"icon-container"},H(X.a,{icon:t}),H(X.a,{icon:["far",c]})),H(V.a.Body,null,H(V.a.Title,null,a),H(V.a.Text,null,n)))},U=r.a.createElement,G=function(){return U(r.a.Fragment,null,U("hr",{className:"separator-sh"}),U("h1",null,"Wsp\xf3lne forum"),U(A.a,null,U(F.a,null,U(Q,{title:"Przegl\u0105daj",content:"Pomocne porady oraz dodatkowe informacje znajdziesz we wpisach u\u017cytkownik\xf3w forum",icon_name1:"user",icon_name2:"list-alt"})),U(F.a,null,U(Q,{title:"Tw\xf3rz",content:"Zadaj szczeg\xf3\u0142owe pytanie innym tworz\u0105c w\u0142asny wpis lub komentarz do istniej\u0105cego tematu",icon_name1:"user-edit"})),U(F.a,null,U(Q,{title:"G\u0142osuj",content:"Oddaj g\u0142os na odpowied\u017a, kt\xf3ra by\u0142a Ci pomocna - inni szybciej j\u0105 odnajd\u0105",icon_name1:"user-check"}))))},$=r.a.createElement,ee=function(){return $(r.a.Fragment,null,$("hr",{className:"separator-sh"}),$("h1",null,"Formularze online"),$(A.a,{className:"grey-box"},$(F.a,null,$("div",{className:"steps"},$("div",{className:"entity-paragraph"},$("div",{className:"step-number"},$("h3",null,"Krok 1")),$("div",{className:"step-line"}),$("div",{className:"step-label-wrapper"},$(X.a,{icon:"file-alt"})),$("div",{className:"step-content"},$("h3",null,"Znajd\u017a interesuj\u0105cy ci\u0119 formularz w spisie dost\u0119pnych wniosk\xf3w do wype\u0142nienia"),$("hr",{className:"extra-bold"}),$("div",{className:"paragraph-details"},$("p",null,"Na osobnej stronie znajdziesz list\u0119 wniosk\xf3w, kt\xf3re mo\u017cesz wype\u0142ni\u0107 przechodz\u0105c do formularza online."),$("p",null,"Masz te\u017c mo\u017cliwo\u015b\u0107 pobrania pustego szablonu wniosku do r\u0119cznego wype\u0142nienia.")))),$("div",{className:"entity-paragraph"},$("div",{className:"step-number"},$("h3",null,"Krok 2")),$("div",{className:"step-line"}),$("div",{className:"step-label-wrapper"},$(X.a,{icon:"edit"})),$("div",{className:"step-content"},$("h3",null,"Wype\u0142nij wybrany wniosek przechodz\u0105c przez interaktywny formularz"),$("hr",{className:"extra-bold"}),$("div",{className:"paragraph-details"},$("p",null,"Specjalnie stworzone formularze online pozwol\u0105 Ci wype\u0142ni\u0107 wybrany wniosek w poprawny spos\xf3b."),$("p",null,"Wpisywane przez Ciebie dane b\u0119d\u0105 na bie\u017c\u0105co weryfikowane i sprawdzane."),$("p",null,"Pami\u0119taj! Wnioski nale\u017cy wype\u0142ni\u0107 wy\u0142acznie w j\u0119zyku polskim.")))),$("div",{className:"entity-paragraph"},$("div",{className:"step-number"},$("h3",null,"Krok 3")),$("div",{className:"step-label-wrapper"},$(X.a,{icon:"file-download"})),$("div",{className:"step-content"},$("h3",null,"Pobierz wype\u0142niony wniosek i zanie\u015b do odpowiedniego urz\u0119du"),$("hr",{className:"extra-bold"}),$("div",{className:"paragraph-details"},$("p",null,"Wszystko gotowe! Mo\u017cesz teraz pobra\u0107 gotowy wniosek i z\u0142o\u017cy\u0107 go w odpowiednim urz\u0119dzie.")))))),$(F.a,null,$("div",{className:"inner-container"},$("div",{className:"img-wrapper"},$("img",{src:"../static/img/filling_form3.jpg"}))),$("div",{className:"button-container"},$(L,{title:"Wype\u0142nij formularz",id:"interaktywne-formularze",reference:"wnioski"})))))},ae=(n("dg5S"),r.a.createElement),ne=function(e){var a=e.title;return ae(i.a,{title:a},ae(P,null),ae(Y,null),ae(c.a,{className:"wrapper main-content-section"},ae(K,null),ae(G,null)),ae(ee,null))},te=r.a.createElement;a.default=function(){return te(ne,{title:"Sprawa Dla Imigranta | SprawaDlaImigranta.pl"})}},XcHJ:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n("q1tI");function r(){var e=Object(t.useRef)(!0),a=Object(t.useRef)((function(){return e.current}));return Object(t.useEffect)((function(){return function(){e.current=!1}}),[]),a.current}},cWnB:function(e,a,n){"use strict";var t=n("wx14"),r=n("zLVn"),c=n("TSYQ"),i=n.n(c),o=n("q1tI"),l=n.n(o),s=n("vUet"),u=n("dbZe"),d=l.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.variant,o=e.size,d=e.active,m=e.className,p=e.block,f=e.type,b=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(s.a)(n,"btn"),j=i()(m,w,d&&"active",w+"-"+c,p&&w+"-block",o&&w+"-"+o);if(v.href)return l.a.createElement(u.a,Object(t.a)({},v,{as:b,ref:a,className:i()(j,v.disabled&&"disabled")}));a&&(v.ref=a),b||(v.type=f);var y=b||"button";return l.a.createElement(y,Object(t.a)({},v,{className:j}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=d},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,4,1,3]]]);