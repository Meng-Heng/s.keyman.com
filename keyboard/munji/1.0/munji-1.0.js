if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_munji());}function Keyboard_munji(){this.KI="Keyboard_munji";this.KN="Munji";this.KMINVER="10.0";this.KV={F:' 1em "Arial"',K102:1};this.KV.KLS={"default": ["÷","۱","۲","۳","۴","۵","۶","۷","۸","۹","۰","-","=","","","","ض","ص","ڤ","ق","ف","غ","ع","ه","خ","ح","ج","چ","\\","","","","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","","","","","","\\","ظ","ط","ز","ر","ذ","د","پ","و",".","/","","","","","",""],"shift": ["×","!","٬","٫","ریال","٪","×","،","*",")","(","ـ","+","","","","ً","َ","ث","ݢ","،","؛"," ","ۂ","]","[","ځ","څ","\\","","","","ښ","ُ","ې","ي","ڱ","آ","ْ","»","«",":","\"","","","","","","|","ِ","|","ژ","ۍ","إ","أ","ء","ؤ","<","؟","","","","","","‌"],"shift-ctrl": ["","‍","‌","‎","‏","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=0;this.KH='';this.KM=0;this.KBVER="1.0";this.KMBM=0x0030;this.KRTL=1;this.KVKD="T_new_1043";this.KVKL={"phone":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":1,"key":[{"id":"K_Q","text":"\u0636","pad":""},{"id":"K_W","text":"\u0635"},{"id":"K_E","text":"\u06A4","sk":[{"text":"\u062B","id":"U_062B"}]},{"id":"K_R","text":"\u0642"},{"id":"K_T","text":"\u0641"},{"id":"K_Y","text":"\u063A"},{"id":"K_U","text":"\u0639"},{"id":"K_I","text":"\u0647","sk":[{"text":"\u06C0","id":"U_06C0"},{"text":"\u06BE","id":"T_new_1043"},{"text":"\u0629","id":"U_0629"}]},{"id":"K_O","text":"\u062E"},{"id":"K_P","text":"\u062D"},{"id":"K_LBRKT","text":"\u062C","sk":[{"text":"\u0685","id":"U_0685"},{"text":"\u0681","id":"U_0681"}]}]},{"id":2,"key":[{"id":"K_A","text":"\u0634","sk":[{"text":"\u069A","id":"U_069A"}]},{"id":"K_S","text":"\u0633"},{"id":"K_D","text":"\u06CC","sk":[{"text":"\u064A","id":"U_064A"},{"text":"\u06D0","id":"U_06D0"},{"text":"\u06CD","id":"U_06CD"},{"text":"\u0626","id":"U_0626"}]},{"id":"K_F","text":"\u0628"},{"id":"K_G","text":"\u0644"},{"id":"K_H","text":"\u0627","sk":[{"text":"\u0622","id":"U_0622"},{"text":"\u0623","id":"U_0623"},{"text":"\u0625","id":"U_0625"},{"text":"\u0621","id":"U_0621"}]},{"id":"K_J","text":"\u062A","sk":[{"text":"\u067C","id":"U_067C"},{"text":"\u0629","id":"U_0629"}]},{"id":"K_K","text":"\u0646","sk":[{"text":"\u06BC","id":"U_06BC"}]},{"id":"K_L","text":"\u0645"},{"id":"K_COLON","text":"\u06A9","sk":[{"text":"\u0762","id":"U_0762"},{"text":"\u0643","id":"U_0643"}]},{"id":"K_QUOTE","text":"\u06AF","sk":[{"text":"\u06B1","id":"U_06B1"},{"text":"\u06AB","id":"U_06AB"}]}]},{"id":3,"key":[{"id":"K_Z","text":"\u0638"},{"id":"K_X","text":"\u0637"},{"id":"U_0698","text":"\u0698"},{"id":"K_C","text":"\u0632"},{"id":"K_V","text":"\u0631","sk":[{"text":"\u0696","id":"U_0696"}]},{"id":"K_B","text":"\u0630"},{"id":"K_N","text":"\u062F","sk":[{"text":"\u0689","id":"U_0689"}]},{"id":"K_M","text":"\u067E"},{"id":"K_COMMA","text":"\u0648","sk":[{"text":"\u0624","id":"U_0624"}]},{"id":"K_RBRKT","text":"\u0686"},{"id":"K_BKSP","text":"*BkSp*","width":"100","sp":"1"}]},{"id":4,"key":[{"id":"K_SHIFT","text":"\u06F1\u06F2\u06F3","width":"160","sp":"1","nextlayer":"numeric"},{"id":"U_060C","text":"\u060C","sk":[{"text":"\u061B","id":"U_061B"}]},{"id":"K_LOPT","text":"*Menu*","width":"140","sp":"1"},{"id":"K_SPACE","text":"","width":"400"},{"id":"U_200C","text":"|"},{"id":"U_002E","text":".","sk":[{"text":"\u0656","id":"U_0656"},{"text":"\u0670","id":"U_0670"},{"text":"\u0653","id":"U_0653"},{"text":"\u0650","id":"U_0650"},{"text":"\u064F","id":"U_064F"},{"text":"\u0640","id":"U_0640"},{"text":"\u0655","id":"U_0655"},{"text":"\u064E","id":"U_064E"},{"text":"\u0654","id":"U_0654"},{"text":"\u0652","id":"U_0652"},{"text":"\u064D","id":"U_064d"},{"text":"\u064C","id":"U_064C"},{"text":"\u0651","id":"U_0651"},{"text":"\u064B","id":"U_064b"},{"text":"\u061F","id":"U_061F"},{"text":"!","id":"U_0021"}]},{"id":"K_ENTER","text":"*Enter*","width":"145","sp":"1"}]}]},{"id":"numeric","row":[{"id":1,"key":[{"id":"U_06F1","text":"\u06F1"},{"id":"U_06F2","text":"\u06F2"},{"id":"U_06F3","text":"\u06F3"},{"id":"U_06F4","text":"\u06F4"},{"id":"U_06F5","text":"\u06F5"},{"id":"U_06F6","text":"\u06F6"},{"id":"U_06F7","text":"\u06F7"},{"id":"U_06F8","text":"\u06F8"},{"id":"U_06F9","text":"\u06F9"},{"id":"U_06F0","text":"\u06F0"}]},{"id":2,"key":[{"id":"U_0040","text":"@"},{"id":"U_0023","text":"#"},{"id":"U_060B","text":"\u060B"},{"id":"U_005F","text":"_"},{"id":"U_0026","text":"&"},{"id":"U_002D","text":"-"},{"id":"U_002B","text":"+"},{"id":"U_0028","text":"("},{"id":"U_0029","text":")"},{"id":"U_066B","text":"\u066B"}]},{"id":3,"key":[{"id":"K_LCONTROL","text":"=\\<","width":"150","sp":"1","nextlayer":"symbol"},{"id":"U_002F","text":"\/"},{"id":"U_00AB","text":"\u00AB"},{"id":"U_00BB","text":"\u00BB"},{"id":"U_003A","text":":"},{"id":"U_061B","text":"\u061B"},{"id":"U_0021","text":"!"},{"id":"U_061F","text":"\u061F"},{"id":"K_BKSP","text":"*BkSp*","width":"165","sp":"1"}]},{"id":4,"key":[{"id":"K_SHIFT","text":"\u0627\u0628\u200C\u067E","width":"150","sp":"1","nextlayer":"default"},{"id":"U_002c","text":","},{"id":"K_LOPT","text":"*Menu*","width":"100","sp":"1"},{"id":"K_SPACE","text":"\u200C","width":"445"},{"id":"U_002E","text":"."},{"id":"K_ENTER","text":"*Enter*","width":"165","sp":"1"}]}]},{"id":"symbol","row":[{"id":1,"key":[{"id":"U_007E","text":"~"},{"id":"U_0060","text":"`"},{"id":"U_007c","text":"|"},{"id":"U_2022","text":"\u200F\u2022"},{"id":"U_221A","text":"\u221A"},{"id":"U_03C0","text":"\u03C0"},{"id":"U_00F7","text":"\u00F7"},{"id":"U_00D7","text":"\u00D7"},{"id":"U_00B6","text":"\u00B6"},{"id":"U_2206","text":"\u2206"}]},{"id":2,"key":[{"id":"U_00A3","text":"\u00A3"},{"id":"U_00A5","text":"\u00A5"},{"id":"U_0024","text":"$"},{"id":"U_00A2","text":"\u00A2"},{"id":"U_005E","text":"^"},{"id":"U_00B0","text":"\u00B0"},{"id":"U_003D","text":"="},{"id":"U_007B","text":"{"},{"id":"U_007D","text":"}"},{"id":"U_005C","text":"\\"}]},{"id":3,"key":[{"id":"K_SHIFT","text":"\u06F1\u06F2\u06F3","width":"150","sp":"1","nextlayer":"numeric"},{"id":"U_066A","text":"\u066A"},{"id":"U_00A9","text":"\u00A9"},{"id":"U_00AE","text":"\u00AE"},{"id":"U_2122","text":"\u2122"},{"id":"U_2713","text":"\u2713"},{"id":"U_005B","text":"["},{"id":"U_005D","text":"]"},{"id":"K_BKSP","text":"*BkSp*","width":"165","sp":"1"}]},{"id":4,"key":[{"id":"K_LCONTROL","text":"\u0627\u0628\u200C\u067E","width":"150","sp":"1","nextlayer":"default"},{"id":"U_00AB","text":"\u00AB"},{"id":"K_LOPT","text":"*Menu*","width":"100","sp":"1"},{"id":"K_SPACE","text":"","width":"445"},{"id":"U_00BB","text":"\u00BB"},{"id":"K_ENTER","text":"*Enter*","width":"165","sp":"1"}]}]}]}};this.KVER="13.0.100.0";this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16384,226)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16400,226)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16384,256)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ه‍");}}else if(k.KKM(e,16384,32)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t," ");}}else if(k.KKM(e,16400,32)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‌");}}else if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16432,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‍");}}else if(k.KKM(e,16400,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\"");}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"٫");}}else if(k.KKM(e,16432,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‎");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ریال");}}else if(k.KKM(e,16432,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‏");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"٪");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"،");}}else if(k.KKM(e,16384,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"گ");}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"و");}}else if(k.KKM(e,16384,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,".");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۰");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۱");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۲");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۳");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۴");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۵");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۶");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۷");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۸");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"۹");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ک");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ؤ");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"؟");}}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"٬");}}else if(k.KKM(e,16432,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‌");}}else if(k.KKM(e,16400,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ښ");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"إ");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ژ");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ې");}}else if(k.KKM(e,16400,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ث");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ي");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ڱ");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"آ");}}else if(k.KKM(e,16400,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ۂ");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ْ");}}else if(k.KKM(e,16400,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"»");}}else if(k.KKM(e,16400,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"«");}}else if(k.KKM(e,16400,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ء");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"أ");}}else if(k.KKM(e,16400,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"]");}}else if(k.KKM(e,16400,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"[");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ً");}}else if(k.KKM(e,16400,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ݢ");}}else if(k.KKM(e,16400,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ُ");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"،");}}else if(k.KKM(e,16400,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t," ");}}else if(k.KKM(e,16400,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ۍ");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"َ");}}else if(k.KKM(e,16400,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‌");}}else if(k.KKM(e,16400,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"؛");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ِ");}}else if(k.KKM(e,16384,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ج");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16384,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"چ");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"×");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ـ");}}else if(k.KKM(e,16384,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"÷");}}else if(k.KKM(e,16384,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ش");}}else if(k.KKM(e,16384,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ذ");}}else if(k.KKM(e,16384,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ز");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ی");}}else if(k.KKM(e,16384,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ڤ");}}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ب");}}else if(k.KKM(e,16384,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ل");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ا");}}else if(k.KKM(e,16384,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ه");}}else if(k.KKM(e,16384,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ت");}}else if(k.KKM(e,16384,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ن");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"م");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"پ");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"د");}}else if(k.KKM(e,16384,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"خ");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ح");}}else if(k.KKM(e,16384,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ض");}}else if(k.KKM(e,16384,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ق");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"س");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ف");}}else if(k.KKM(e,16384,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ع");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ر");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ص");}}else if(k.KKM(e,16384,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ط");}}else if(k.KKM(e,16384,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"غ");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ظ");}}else if(k.KKM(e,16400,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ځ");}}if(m) {}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"څ");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"×");}}return r;};}