(function() {if(!window.keyman.ui.name)try{var a=window.keyman,d=a.util,e=a.osk;if(d.isTouchDevice())throw"";a.ui={};var g=a.ui;g.name="float";g.a=null;g.b=null;g.h=null;g.i=null;g.f=null;g.u=!1;g.v=!0;g.w=null;g.o=!1;g.c=!1;g.L=function(){a.focusLastActiveElement();e.show&&(e.isEnabled()?e.hide():e.show(!0));window.event&&(window.event.returnValue=!1);return!1};g.j=function(){if(!a.initialized)window.setTimeout(g.j,50);else if(!g.c&&!d.isTouchDevice()){var b=d.getOption("resources")+"ui/float/";g.b=d.createElement("DIV");
g.h=d.createElement("DIV");g.f=d.createElement("IMG");g.b.innerHTML="<a href='http://keyman.com/web/' target='KeymanWebHelp'><img src='"+b+"kmicon.gif' border='0' style='padding: 0px 2px 0 1px; margin:0px;' title='KeymanWeb' alt='KeymanWeb' /></a>";var c=g.b.style;c.backgroundColor="white";c.border="solid 1px black";c.position="absolute";c.height="18px";c.font="bold 8pt sans-serif";c.display="none";c.textAlign="left";c.overflow="hidden";d.attachDOMEvent(g.b,"mousedown",g.H);d.attachDOMEvent(g.b,"mouseover",
g.J);d.attachDOMEvent(g.b,"mouseout",g.I);g.K();g.f.src=b+"kbdicon.gif";g.f.title="Display visual keyboard";g.s(!1);b=d.createElement("DIV");g.i=b;b.onclick=g.L;b.appendChild(g.f);g.h.appendChild(b);g.b.appendChild(g.h);document.body.appendChild(g.b);g.a=d.createElement("SELECT");c=g.a.style;c.font="8pt sans-serif";c.backgroundColor="#f3e5de";c.border="solid 1px #7B9EBD";c.height="16px";c.margin="1px 2px 0px 2px";c.left="20px";c.top="0px";c.position="absolute";c.maxWidth="150px";d.attachDOMEvent(g.a,
"change",g.G);d.attachDOMEvent(g.a,"blur",g.F);g.h.appendChild(g.a);c=d.getOption("ui");b="English";c&&"object"==typeof c&&("string"==typeof c.position&&"right"==c.position&&(g.o=!0),"string"==typeof c["default"]&&(b=c["default"]));c=d.createElement("OPTION");c.value="-";c.innerHTML=b;g.a.appendChild(c);g.c=!0;g.D()}};g.C=function(){g.a=g.h=g.b=g.f=null};a.addEventListener("unloaduserinterface",g.C);g.M=function(){var b=g.b;b&&b.parentNode.removeChild(b);g.C();window.removeEventListener&&window.removeEventListener("resize",
g.B,!1)};g.D=function(){if(g.v){g.c||g.j();var b,c=g.a.getElementsByTagName("OPTION");for(b=c.length;1<b;b--)g.a.removeChild(c[b-1]);var f=a.getKeyboards();for(b=0;b<f.length;b++){c=d.createElement("OPTION");c.value=f[b].InternalName+":"+f[b].LanguageCode;c.innerHTML=f[b].Name.replace(/\s?keyboard/i,"");if(f[b].LanguageName){var h=f[b].LanguageName;h=h.split(",")[0];-1==f[b].Name.search(h)&&(c.innerHTML=h+" ("+c.innerHTML+")")}g.a.appendChild(c)}}g.v=!1;b=a.getSavedKeyboard().split(":");2>b.length&&
(b[1]="");g.l(b[0],b[1]);a.getLastActiveElement()&&(g.A(),g.g())};g.l=function(b,c){if(g.c){var f=b;""!=c&&(f+=":"+c);if(""==b)g.a.selectedIndex=0;else{var h=g.a.getElementsByTagName("OPTION");for(b=0;b<h.length;b++){var k=h[b].value;""==c&&(k=k.split(":")[0]);if(k==f){g.a.selectedIndex=b;break}}}}};g.s=function(b){var c=g.f.style;c.width="24px";c.height="13px";c.top="1px";c.verticalAlign="bottom";c.padding="2px 2px 1px 2px";c.position="absolute";c.border=b?"inset 1px #808080":"none";c.background=
b?"#f7e7de":"white";c.display="block";g.c&&(g.i.style.display="block")};g.K=function(){a.addEventListener("keyboardregistered",function(){g.v=!0;g.w&&clearTimeout(g.w);g.w=setTimeout(g.D,200)});a.addEventListener("keyboardloaded",function(){var b=a.getSavedKeyboard().split(":");1<b.length&&g.l(b[0],b[1])});a.addEventListener("keyboardchange",function(b){g.l(b.internalName,b.languageCode);g.m()});e.addEventListener("show",function(b){g.m();return b});e.addEventListener("hide",function(){g.c&&g.s(!1)})};
g.H=function(){a.activatingUI&&a.activatingUI(1)};g.J=function(){a.activatingUI&&a.activatingUI(1)};g.I=function(){a.activatingUI&&a.activatingUI(0)};g.G=function(){if("-"!=g.a.value){var b=g.a.options[g.a.selectedIndex].value.split(":");a.setActiveKeyboard(b[0],b[1])}else a.setActiveKeyboard("");a.focusLastActiveElement();g.u=!0};g.F=function(){g.u||a.focusLastActiveElement();g.u=!1};g.g=function(b,c){if(g.c){var f=g.b.style;b&&c&&(f.left=b+"px",f.top=c+"px");f.display="block";g.f.style.left=g.a.offsetWidth+
24+"px";g.m();g.l(a.getActiveKeyboard(),a.getActiveLanguage())}};g.A=function(){g.c&&(g.b.style.display="none")};g.m=function(){null!=g.i&&(a.isCJK()||0==g.a.selectedIndex?(g.i.style.display="none",g.b.style.width=g.a.offsetWidth+30+"px"):(g.i.style.display="block",g.s(e.isEnabled()),g.b.style.width=g.a.offsetWidth+56+"px"))};a.addEventListener("controlfocused",function(b){if(null==b.activeControl||b.activeControl._kmwAttachment)g.o?g.g(d.getAbsoluteX(b.target)+b.target.offsetWidth+1,d.getAbsoluteY(b.target)+
1):g.g(d.getAbsoluteX(b.target),d.getAbsoluteY(b.target)-parseInt(d.getStyleValue(g.b,"height"),10)-2);return!0});a.addEventListener("controlblurred",function(b){if(!b.event)return!0;b.isActivating||g.A();return!0});g.B=function(){if("block"==g.b.style.display){var b=a.getLastActiveElement();g.o?g.g(d.getAbsoluteX(b)+b.offsetWidth+1,d.getAbsoluteY(b)+1):g.g(d.getAbsoluteX(b)+1,d.getAbsoluteY(b)+b.offsetHeight+1)}return!0};window.addEventListener&&window.addEventListener("resize",g.B,!1);a.addEventListener("loaduserinterface",
g.j);g.j()}catch(b){};}());
//# sourceMappingURL=kmwuifloat.js.map