if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_me_en());}function Keyboard_me_en(){this.KI="Keyboard_me_en";this.KN="Me’en (Latin)";this.KMINVER="10.0";this.KV={F:' 1em "Arial"',K102:0};this.KV.KLS={"rightalt-shift": ["","","","","","","","","","","","","","","","","Q","","","","","","","","","","","","","","","","","","","F","","","","","","","","","","","","","","","X","","V","","","","","","","","","","","",""],"rightalt": ["","|","","","","","","","","","","—","","","","","q","","","","","","","","","","","_","","","","","ä","Ä","ö","f","Ö","ü","","Ü","","","","","","","","","","","x","","v","","ß","","","","\\","","","","","",""],"shift": ["~","!","@","#","$","%","^","&","*","(",")","–","+","","","","Kʼ","W","E","R","T","Y","U","I","O","P","Tʼ","Sʼ","","","","","A","S","D","Ɔ","G","H","J","K","L",":","“","","","","","","","Z","Cʼ","C","Ɛ","B","N","M","<",">","?","","","","","",""],"default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","kʼ","w","e","r","t","y","u","i","o","p","tʼ","sʼ","","","","","a","s","d","ɔ","g","h","j","k","l",";","’","","","","","","","z","cʼ","c","ɛ","b","n","m",",",".","/","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=0;this.KH='';this.KM=0;this.KBVER="1.0";this.KMBM=0x0018;this.KVKD="T_t_apos T_s_apos T_open_o_grave T_open_o_acute T_open_e_grave T_open_e_acute";this.KVKL={"phone":{"font":"Andika","layer":[{"id":"default","row":[{"id":1,"key":[{"id":"K_Q","text":"k\u02BC","sk":[{"text":"q","id":"U_0071"}]},{"id":"K_W","text":"w"},{"id":"K_E","text":"e","sk":[{"text":"\u00E8","id":"U_00E8"},{"text":"\u00E9","id":"U_00E9"}]},{"id":"K_R","text":"r"},{"id":"K_T","text":"t"},{"id":"K_Y","text":"y"},{"id":"K_U","text":"u","sk":[{"text":"\u00F9","id":"U_00F9"},{"text":"\u00FA","id":"U_00FA"}]},{"id":"K_I","text":"i","sk":[{"text":"\u00EC","id":"U_00EC"},{"text":"\u00ED","id":"U_00ED"}]},{"id":"K_O","text":"o","sk":[{"text":"\u00F2","id":"U_00F2"},{"text":"\u00F3","id":"U_00F3"}]},{"id":"K_P","text":"p","sk":[{"text":"f","id":"U_0066"},{"text":"\u00DF","id":"U_00DF"}]}]},{"id":2,"key":[{"id":"K_A","text":"a","pad":"","sk":[{"text":"\u00E0","id":"U_00E0"},{"text":"\u00E1","id":"U_00E1"}]},{"id":"K_S","text":"s"},{"id":"K_D","text":"d"},{"id":"K_F","text":"\u0254","sk":[{"text":"\u0254\u0300","id":"T_open_o_grave"},{"text":"\u0254\u0301","id":"T_open_o_acute"}]},{"id":"K_G","text":"g","sk":[{"text":"-","id":"U_002D"},{"text":"\u2013","id":"U_2013"}]},{"id":"K_H","text":"h","sk":[{"text":"+","id":"U_002B"},{"text":"\u2212","id":"U_2212"}]},{"id":"K_J","text":"j","sk":[{"text":"=","id":"U_003D"}]},{"id":"K_K","text":"k"},{"id":"K_L","text":"l","sk":[{"text":"(","id":"U_0028"},{"text":")","id":"U_0029"}]},{"id":"T_t_apos","text":"t\u02BC"}]},{"id":3,"key":[{"id":"K_SHIFT","text":"*Shift*","width":"120","sp":"1","nextlayer":"shift"},{"id":"K_Z","text":"z","width":"95"},{"id":"K_X","text":"c\u02BC","width":"95","sk":[{"text":"x","id":"U_0078"}]},{"id":"K_C","text":"c","width":"95"},{"id":"K_V","text":"\u025B","width":"95","sk":[{"text":"\u025B\u0300","id":"T_open_e_grave"},{"text":"\u025B\u0301","id":"T_open_e_acute"}]},{"id":"K_B","text":"b","width":"95","sk":[{"text":"v","id":"U_0076"}]},{"id":"K_N","text":"n","width":"95","sk":[{"text":"*","id":"U_002A"},{"text":"\u00D7","id":"U_00D7"}]},{"id":"K_M","text":"m","width":"95","sk":[{"text":"\u2044","id":"U_2044"},{"text":"\u00F7","id":"U_00F7"}]},{"id":"T_s_apos","text":"s\u02BC","width":"95"},{"id":"K_BKSP","text":"*BkSp*","width":"120","sp":"1"}]},{"id":4,"key":[{"id":"K_NUMLOCK","text":"*123*","width":"120","sp":"1","nextlayer":"numeric"},{"id":"K_LOPT","text":"*Menu*","width":"120","sp":"1"},{"id":"U_2019","text":"\u2019","width":"95","sk":[{"text":"\u2018","id":"U_2018"},{"text":"\u201C","id":"U_201C"},{"text":"\u201D","id":"U_201D"},{"text":"'","id":"U_0027"},{"text":"\"","id":"U_0022"}]},{"id":"K_SPACE","text":"","width":"370"},{"id":"U_002C","text":",","width":"95","sk":[{"text":"?","id":"U_003F"},{"text":"!","id":"U_0021"},{"text":"\\","id":"U_005C"}]},{"id":"U_002E","text":".","width":"95","sk":[{"text":";","id":"U_003B"},{"text":":","id":"U_003A"}]},{"id":"K_ENTER","text":"*Enter*","width":"150","sp":"1"}]}]},{"id":"shift","row":[{"id":1,"key":[{"id":"K_Q","text":"K\u02BC","nextlayer":"default","sk":[{"text":"Q","id":"U_0051","nextlayer":"default"}]},{"id":"K_W","text":"W","nextlayer":"default"},{"id":"K_E","text":"E","nextlayer":"default","sk":[{"text":"\u00C8","id":"U_00C8","nextlayer":"default"},{"text":"\u00C9","id":"U_00C9","nextlayer":"default"}]},{"id":"K_R","text":"R","nextlayer":"default"},{"id":"K_T","text":"T","nextlayer":"default"},{"id":"K_Y","text":"Y","nextlayer":"default"},{"id":"K_U","text":"U","nextlayer":"default","sk":[{"text":"\u00D9","id":"U_00D9","nextlayer":"default"},{"text":"\u00DA","id":"U_00DA","nextlayer":"default"}]},{"id":"K_I","text":"I","nextlayer":"default","sk":[{"text":"\u00CC","id":"U_00CC","nextlayer":"default"},{"text":"\u00CD","id":"U_00CD","nextlayer":"default"}]},{"id":"K_O","text":"O","nextlayer":"default","sk":[{"text":"\u00D2","id":"U_00D2","nextlayer":"default"},{"text":"\u00D3","id":"U_00D3","nextlayer":"default"}]},{"id":"K_P","text":"P","nextlayer":"default","sk":[{"text":"F","id":"U_0046","nextlayer":"default"}]}]},{"id":2,"key":[{"id":"K_A","text":"A","pad":"","nextlayer":"default","sk":[{"text":"\u00C0","id":"U_00C0","nextlayer":"default"},{"text":"\u00C1","id":"U_00C1","nextlayer":"default"}]},{"id":"K_S","text":"S","nextlayer":"default"},{"id":"K_D","text":"D","nextlayer":"default"},{"id":"K_F","text":"\u0186","nextlayer":"default","sk":[{"text":"\u0186\u0300","id":"T_open_o_grave","nextlayer":"default","layer":"shift"},{"text":"\u0186\u0301","id":"T_open_o_acute","nextlayer":"default","layer":"shift"}]},{"id":"K_G","text":"G","nextlayer":"default"},{"id":"K_H","text":"H","nextlayer":"default"},{"id":"K_J","text":"J","nextlayer":"default"},{"id":"K_K","text":"K","nextlayer":"default"},{"id":"K_L","text":"L","nextlayer":"default"},{"id":"T_t_apos","text":"T\u02BC","nextlayer":"default"}]},{"id":3,"key":[{"id":"K_SHIFT","text":"*Shift*","width":"120","sp":"2","nextlayer":"default"},{"id":"K_Z","text":"Z","width":"95","nextlayer":"default"},{"id":"K_X","text":"C\u02BC","width":"95","nextlayer":"default","sk":[{"text":"X","id":"U_0058","nextlayer":"default"}]},{"id":"K_C","text":"C","width":"95","nextlayer":"default"},{"id":"K_V","text":"\u0190","width":"95","nextlayer":"default","sk":[{"text":"\u0190\u0300","id":"T_open_e_grave","nextlayer":"default","layer":"shift"},{"text":"\u0190\u0301","id":"T_open_e_acute","nextlayer":"default","layer":"shift"}]},{"id":"K_B","text":"B","width":"95","nextlayer":"default","sk":[{"text":"V","id":"U_0056","nextlayer":"default"}]},{"id":"K_N","text":"N","width":"95","nextlayer":"default"},{"id":"K_M","text":"M","width":"95","nextlayer":"default"},{"id":"T_s_apos","text":"S\u02BC","width":"95","nextlayer":"default"},{"id":"K_BKSP","text":"*BkSp*","width":"120","sp":"1"}]},{"id":4,"key":[{"id":"K_NUMLOCK","text":"*123*","width":"120","sp":"1","nextlayer":"numeric"},{"id":"K_LOPT","text":"*Menu*","width":"120","sp":"1"},{"id":"U_2019","text":"\u2019","width":"95"},{"id":"K_SPACE","text":"","width":"370","sp":"0"},{"id":"U_002C","text":",","width":"95"},{"id":"U_002E","text":".","width":"95"},{"id":"K_ENTER","text":"*Enter*","width":"150","sp":"1"}]}]},{"id":"numeric","row":[{"id":1,"key":[{"id":"K_1","text":"1","sk":[{"text":"\u215B","id":"U_215B"},{"text":"\u2153","id":"U_2153"},{"text":"\u00BC","id":"U_00BC"},{"text":"\u00BD","id":"U_00BD"}]},{"id":"K_2","text":"2","sk":[{"text":"\u2154","id":"U_2154"},{"text":"\u00B2","id":"U_00B2"}]},{"id":"K_3","text":"3","sk":[{"text":"\u00BE","id":"U_00BE"},{"text":"\u00B3","id":"U_00B3"},{"text":"\u215C","id":"U_215C"}]},{"id":"K_4","text":"4","sk":[{"text":"\u2074","id":"U_2074"}]},{"id":"K_5","text":"5","sk":[{"text":"\u215D","id":"U_215D"},{"text":"\u207F","id":"U_207F"}]},{"id":"K_6","text":"6","sk":[{"text":"\u2076","id":"U_2076"}]},{"id":"K_7","text":"7","sk":[{"text":"\u215E","id":"U_215E"}]},{"id":"K_8","text":"8"},{"id":"K_9","text":"9"},{"id":"K_0","text":"0"}]},{"id":2,"key":[{"id":"U_0040","text":"@"},{"id":"K_3","text":"#","layer":"shift"},{"id":"U_20AC","text":"\u20AC","pad":"","sk":[{"text":"\u00A3","id":"U_00A3"},{"text":"\u00A5","id":"U_00A5"},{"text":"$","id":"U_0024"},{"text":"\u20B5","id":"U_20B5"}]},{"id":"K_7","text":"&","layer":"shift"},{"id":"U_005F","text":"_"},{"id":"U_002D","text":"-","sk":[{"text":"\u02C9","id":"U_02C9"},{"text":"\u2014","id":"U_2014"},{"text":"\u2013","id":"U_2013"}]},{"id":"K_9","text":"(","layer":"shift","sk":[{"text":"{","id":"U_007B"},{"text":"<","id":"U_003C"},{"text":"[","id":"U_005B"}]},{"id":"K_0","text":")","layer":"shift","sk":[{"text":"}","id":"U_007D"},{"text":">","id":"U_003E"},{"text":"]","id":"U_005D"}]},{"id":"K_EQUAL","text":"=","sk":[{"text":"\u2248","id":"U_2248"},{"text":"\u2260","id":"U_2260"}]},{"id":"K_5","text":"%","layer":"shift","sk":[{"text":"\u2030","id":"U_2030"}]}]},{"id":3,"key":[{"id":"K_SYMBOLS","text":"(&=","width":"120","sp":"1","nextlayer":"symbol"},{"id":"U_0022","text":"\"","width":"95","sk":[{"text":"\u201E","id":"U_201E"},{"text":"\u201C","id":"U_201C"},{"text":"\u00AB","id":"U_00AB"},{"text":"\u00BB","id":"U_00BB"},{"text":"\u02EE","id":"U_02EE"}]},{"id":"K_8","text":"*","width":"95","layer":"shift","sk":[{"text":"\u00D7","id":"U_00D7"}]},{"id":"U_0027","text":"'","width":"95","sk":[{"text":"\u2019","id":"U_2019"},{"text":"\u2039","id":"U_2039"},{"text":"\u2021","id":"U_2021"},{"text":"`","id":"U_0060"},{"text":"\u2020","id":"U_2020"},{"text":"\u203A","id":"U_203A"}]},{"id":"U_003A","text":":","width":"95","sk":[{"text":";","id":"U_003B"}]},{"id":"U_002F","text":"\/","width":"95","sk":[{"text":"\u00F7","id":"U_00F7"}]},{"id":"K_1","text":"!","width":"95","layer":"shift","sk":[{"text":"\u00A1","id":"U_00A1"}]},{"id":"U_003F","text":"?","width":"95","sk":[{"text":"\u00BF","id":"U_00BF"}]},{"id":"U_002B","text":"+","width":"95","sk":[{"text":"\u00B1","id":"U_00B1"}]},{"id":"K_BKSP","text":"*BkSp*","width":"120","sp":"1"}]},{"id":4,"key":[{"id":"K_LOWER","text":"*abc*","width":"120","sp":"1","nextlayer":"default"},{"id":"K_LOPT","text":"*Menu*","width":"120","sp":"1"},{"id":"K_SPACE","text":"","width":"480","sp":"0"},{"id":"U_002C","text":",","width":"95"},{"id":"U_002E","text":".","width":"95"},{"id":"K_ENTER","text":"*Enter*","width":"150","sp":"1"}]}]},{"id":"symbol","row":[{"id":1,"key":[{"id":"U_0024","text":"$","pad":""},{"id":"U_00A3","text":"\u00A3"},{"id":"U_20AC","text":"\u20AC","pad":""},{"id":"U_00A5","text":"\u00A5"},{"id":"U_20B5","text":"\u20B5"},{"id":"U_00A9","text":"\u00A9"},{"id":"U_00AE","text":"\u00AE"},{"id":"U_2122","text":"\u2122","width":"100"},{"id":"U_00BF","text":"\u00BF"},{"id":"U_00A7","text":"\u00A7"}]},{"id":2,"key":[{"id":"U_2192","text":"\u2192","sk":[{"text":"\u21C9","id":"U_21C9"}]},{"id":"U_005B","text":"[","pad":""},{"id":"U_005D","text":"]"},{"id":"U_007B","text":"{"},{"id":"U_007D","text":"}"},{"id":"U_003C","text":"<"},{"id":"U_003E","text":">"},{"id":"U_005E","text":"^"},{"id":"U_00A1","text":"\u00A1"},{"id":"U_00B6","text":"\u00B6"}]},{"id":3,"key":[{"id":"K_NUMLOCK","text":"*123*","width":"160","sp":"1","nextlayer":"numeric"},{"id":"U_0060","text":"`"},{"id":"U_003B","text":";"},{"id":"U_00F7","text":"\u00F7"},{"id":"U_005C","text":"\\"},{"id":"U_007C","text":"|"},{"id":"U_007E","text":"~"},{"id":"U_00A6","text":"\u00A6"},{"id":"K_BKSP","text":"*BkSp*","width":"155","sp":"1"}]},{"id":4,"key":[{"id":"K_LOWER","text":"*abc*","width":"120","sp":"1","nextlayer":"default"},{"id":"K_LOPT","text":"*Menu*","width":"120","sp":"1"},{"id":"K_SPACE","text":"","width":"480","sp":"0"},{"id":"U_00D7","text":"\u00D7","width":"95"},{"id":"U_00B0","text":"\u00B0","width":"95"},{"id":"K_ENTER","text":"*Enter*","width":"150","sp":"1"}]}]}],"displayUnderlying":false}};this.s12="aeiouAEIOU";this.s13="àèìòùÀÈÌÒÙ";this.s14="áéíóúÁÉÍÓÚ";this.s15="ɔɛƆƐ";this.s17="desktop";this.s18="desktop";this.s19="desktop";this.s20="desktop";this.s21="desktop";this.s22="desktop";this.s23="desktop";this.s24="desktop";this.s25="desktop";this.s26="desktop";this.s27="desktop";this.s28="desktop";this.s29="desktop";this.s30="desktop";this.s31="desktop";this.s32="desktop";this.s33="desktop";this.s34="desktop";this.s35="desktop";this.KVER="13.0.100.0";this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16408,70)) {if(k.KIFS(31,this.s17,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"F");}}else if(k.KKM(e,16408,86)) {if(k.KIFS(31,this.s18,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16408,88)) {if(k.KIFS(31,this.s19,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16408,81)) {if(k.KIFS(31,this.s20,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"Q");}}else if(k.KKM(e,16392,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16392,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"f");}}else if(k.KKM(e,16392,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16392,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16392,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"q");}}else if(k.KKM(e,16392,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16392,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ä");}}else if(k.KKM(e,16392,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ä");}}else if(k.KKM(e,16392,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ö");}}else if(k.KKM(e,16392,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ö");}}else if(k.KKM(e,16392,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ü");}}else if(k.KKM(e,16392,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ü");}}else if(k.KKM(e,16392,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ß");}}else if(k.KKM(e,16392,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16392,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"—");}}else if(k.KKM(e,16384,256)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"tʼ");}}else if(k.KKM(e,16384,257)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"sʼ");}}else if(k.KKM(e,16400,256)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Tʼ");}}else if(k.KKM(e,16400,257)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Sʼ");}}else if(k.KKM(e,16384,258)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɔ̀");}}else if(k.KKM(e,16384,259)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɔ́");}}else if(k.KKM(e,16384,260)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɛ̀");}}else if(k.KKM(e,16384,261)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɛ́");}}else if(k.KKM(e,16400,258)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɔ̀");}}else if(k.KKM(e,16400,259)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɔ́");}}else if(k.KKM(e,16400,260)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɛ̀");}}else if(k.KKM(e,16400,261)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɛ́");}}else if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16400,222)) {if(k.KFCM(1,t,['“'])&&k.KIFS(31,this.s26,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"”");}else if(k.KFCM(1,t,['”'])&&k.KIFS(31,this.s27,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"\"");}else if(k.KFCM(1,t,['\"'])&&k.KIFS(31,this.s28,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"“");}else if(k.KIFS(31,this.s25,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"“");}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16400,52)) {if(k.KFCM(1,t,['$'])&&k.KIFS(31,this.s30,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"€");}else if(k.KFCM(1,t,['€'])&&k.KIFS(31,this.s31,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"£");}else if(k.KFCM(1,t,['£'])&&k.KIFS(31,this.s32,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"$");}else if(k.KIFS(31,this.s29,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16384,222)) {if(k.KFCM(1,t,['’'])&&k.KIFS(31,this.s22,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"‘");}else if(k.KFCM(1,t,['‘'])&&k.KIFS(31,this.s23,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"'");}else if(k.KFCM(1,t,['\''])&&k.KIFS(31,this.s24,t)){r=m=1;k.KDC(1,t);k.KO(-1,t,"’");}else if(k.KIFS(31,this.s21,t)){r=m=1;k.KDC(0,t);k.KO(-1,t,"’");}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,",");}}else if(k.KKM(e,16384,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,".");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"0");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"1");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"2");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"3");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"4");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"5");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"6");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"7");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"8");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"9");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,";");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,">");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"?");}}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16400,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"A");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"B");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"C");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"D");}}else if(k.KKM(e,16400,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"E");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɔ");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"G");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"H");}}else if(k.KKM(e,16400,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"I");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"J");}}else if(k.KKM(e,16400,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"K");}}else if(k.KKM(e,16400,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"L");}}else if(k.KKM(e,16400,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"M");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"N");}}else if(k.KKM(e,16400,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"O");}}else if(k.KKM(e,16400,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"P");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Kʼ");}}else if(k.KKM(e,16400,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"R");}}else if(k.KKM(e,16400,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"S");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"T");}}else if(k.KKM(e,16400,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"U");}}else if(k.KKM(e,16400,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ɛ");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"W");}}else if(k.KKM(e,16400,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Cʼ");}}else if(k.KKM(e,16400,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Z");}}else if(k.KKM(e,16384,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"tʼ");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16384,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"sʼ");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"^");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"–");}}else if(k.KKM(e,16384,192)) {if(k.KFCM(1,t,[{t:'a',a:this.s12}])&&k.KIFS(31,this.s33,t)){r=m=1;k.KDC(1,t);k.KIO(-1,this.s13,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s13}])&&k.KIFS(31,this.s34,t)){r=m=1;k.KDC(1,t);k.KIO(-1,this.s14,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s14}])&&k.KIFS(31,this.s35,t)){r=m=1;k.KDC(1,t);k.KIO(-1,this.s12,1,t);}else if(k.KFCM(2,t,[{t:'a',a:this.s15},'̀'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s15,1,t);k.KO(-1,t,"́");}else if(k.KFCM(2,t,[{t:'a',a:this.s15},'́'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s15,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s15}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s15,1,t);k.KO(-1,t,"̀");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"`");}}else if(k.KKM(e,16384,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"a");}}else if(k.KKM(e,16384,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"b");}}else if(k.KKM(e,16384,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"c");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"d");}}else if(k.KKM(e,16384,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"e");}}if(m) {}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɔ");}}else if(k.KKM(e,16384,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"g");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"h");}}else if(k.KKM(e,16384,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"i");}}else if(k.KKM(e,16384,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"j");}}else if(k.KKM(e,16384,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"k");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"l");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"m");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"n");}}else if(k.KKM(e,16384,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"o");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"p");}}else if(k.KKM(e,16384,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"kʼ");}}else if(k.KKM(e,16384,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"r");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"s");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"t");}}else if(k.KKM(e,16384,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"u");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɛ");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"w");}}else if(k.KKM(e,16384,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"cʼ");}}else if(k.KKM(e,16384,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"y");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"z");}}else if(k.KKM(e,16400,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Tʼ");}}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Sʼ");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"~");}}return r;};}