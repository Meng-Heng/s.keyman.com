if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_basic_kbdlvst());}function Keyboard_basic_kbdlvst(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_basic_kbdlvst";this.KN="Latvian (Standard) Basic";this.KMINVER="10.0";this.KV={F:' 1em "DejaVu Sans"',K102:1};this.KV.KLS={"rightalt": ["­"," ","«","»","€","","’","","","","","–","","","","","","","ē","ŗ","","","ū","ī","ō","","","","","","","","ā","š","","","ģ","","","ķ","ļ","","'","","","","","","","ž","","č","","","ņ","","","","","","","","","",""],"rightalt-shift": ["","","","","§","°","","±","×","","","—","","","","","","","Ē","Ŗ","","","Ū","Ī","Ō","","","","","","","","Ā","Š","","","Ģ","","","Ķ","Ļ","","'","","","","","","","Ž","","Č","","","Ņ","","","","","","","","","",""],"default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","q","w","e","r","t","y","u","i","o","p","[","]","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","\\","z","x","c","v","b","n","m",",",".","/","","","","","",""],"shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","}","|","","","","A","S","D","F","G","H","J","K","L",":","'","","","","","","|","Z","X","C","V","B","N","M","<",">","?","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=0;this.KH='';this.KM=0;this.KBVER="1.0.1";this.KMBM=0x0318;this.KVKL={"tablet":{"font":"DejaVu Sans","displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"K_Q","text":"q"},{"id":"K_W","text":"w"},{"id":"K_E","text":"e","sk":[{"layer":"rightalt","id":"K_E","text":"\u0113"}]},{"id":"K_R","text":"r","sk":[{"layer":"rightalt","id":"K_R","text":"\u0157"}]},{"id":"K_T","text":"t"},{"id":"K_Y","text":"y"},{"id":"K_U","text":"u","sk":[{"layer":"rightalt","id":"K_U","text":"\u016B"}]},{"id":"K_I","text":"i","sk":[{"layer":"rightalt","id":"K_I","text":"\u012B"}]},{"id":"K_O","text":"o","sk":[{"layer":"rightalt","id":"K_O","text":"\u014D"}]},{"id":"K_P","text":"p"}]},{"id":"2","key":[{"id":"K_A","pad":"70","text":"a","sk":[{"layer":"rightalt","id":"K_A","text":"\u0101"}]},{"id":"K_S","text":"s","sk":[{"layer":"rightalt","id":"K_S","text":"\u0161"}]},{"id":"K_D","text":"d"},{"id":"K_F","text":"f"},{"id":"K_G","text":"g","sk":[{"layer":"rightalt","id":"K_G","text":"\u0123"}]},{"id":"K_H","text":"h"},{"id":"K_J","text":"j"},{"id":"K_K","text":"k","sk":[{"layer":"rightalt","id":"K_K","text":"\u0137"}]},{"id":"K_L","text":"l","sk":[{"layer":"rightalt","id":"K_L","text":"\u013C"}]},{"width":"10","id":"T_new_20","sp":"10"}]},{"id":"3","key":[{"nextlayer":"shift","width":"110","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_Z","text":"z","sk":[{"layer":"rightalt","id":"K_Z","text":"\u017E"}]},{"id":"K_X","text":"x"},{"id":"K_C","text":"c","sk":[{"layer":"rightalt","id":"K_C","text":"\u010D"}]},{"id":"K_V","text":"v"},{"id":"K_B","text":"b"},{"id":"K_N","text":"n","sk":[{"layer":"rightalt","id":"K_N","text":"\u0146"}]},{"id":"K_M","text":"m"},{"id":"K_QUOTE","sp":"8","text":"'"},{"width":"90","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"numeric","width":"140","id":"K_NUMLOCK","sp":"1","text":"*123*"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"500","id":"K_SPACE"},{"width":"125","id":"K_PERIOD","text":".","sk":[{"id":"K_COMMA","text":","},{"layer":"shift","id":"K_1","text":"!"},{"layer":"shift","id":"K_SLASH","text":"?"},{"id":"K_BKSLASH","text":"\\"},{"layer":"shift","id":"K_COLON","text":":"},{"id":"K_COLON","text":";"}]},{"width":"140","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"K_Q","text":"Q"},{"id":"K_W","text":"W"},{"id":"K_E","text":"E","sk":[{"layer":"rightalt-shift","id":"K_E","text":"\u0112"}]},{"id":"K_R","text":"R","sk":[{"layer":"rightalt-shift","id":"K_R","text":"\u0156"}]},{"id":"K_T","text":"T"},{"id":"K_Y","text":"Y"},{"id":"K_U","text":"U","sk":[{"layer":"rightalt-shift","id":"K_U","text":"\u016A"}]},{"id":"K_I","text":"I","sk":[{"layer":"rightalt-shift","id":"K_I","text":"\u012A"}]},{"id":"K_O","text":"O","sk":[{"layer":"rightalt-shift","id":"K_O","text":"\u014C"}]},{"id":"K_P","text":"P"}]},{"id":"2","key":[{"id":"K_A","pad":"70","text":"A","sk":[{"layer":"rightalt-shift","id":"K_A","text":"\u0100"}]},{"id":"K_S","text":"S","sk":[{"layer":"rightalt-shift","id":"K_S","text":"\u0160"}]},{"id":"K_D","text":"D"},{"id":"K_F","text":"F"},{"id":"K_G","text":"G","sk":[{"layer":"rightalt-shift","id":"K_G","text":"\u0122"}]},{"id":"K_H","text":"H"},{"id":"K_J","text":"J"},{"id":"K_K","text":"K","sk":[{"layer":"rightalt-shift","id":"K_K","text":"\u0136"}]},{"id":"K_L","text":"L","sk":[{"layer":"rightalt-shift","id":"K_L","text":"\u013B"}]},{"width":"10","id":"T_new_54","sp":"10"}]},{"id":"3","key":[{"nextlayer":"default","width":"110","id":"K_SHIFT","sp":"2","text":"*Shift*"},{"id":"K_Z","text":"Z","sk":[{"layer":"rightalt-shift","id":"K_Z","text":"\u017D"}]},{"id":"K_X","text":"X"},{"id":"K_C","text":"C","sk":[{"layer":"rightalt-shift","id":"K_C","text":"\u010C"}]},{"id":"K_V","text":"V"},{"id":"K_B","text":"B"},{"id":"K_N","text":"N","sk":[{"layer":"rightalt-shift","id":"K_N","text":"\u0145"}]},{"id":"K_M","text":"M"},{"id":"K_QUOTE","sp":"8","text":"'"},{"width":"90","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"numeric","width":"140","id":"K_NUMLOCK","sp":"1","text":"*123*"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"500","id":"K_SPACE"},{"layer":"default","width":"125","id":"K_PERIOD","text":".","sk":[{"layer":"default","id":"K_COMMA","text":","},{"layer":"shift","id":"K_1","text":"!"},{"layer":"shift","id":"K_SLASH","text":"?"},{"layer":"default","id":"K_BKSLASH","text":"\\"},{"layer":"shift","id":"K_COLON","text":":"},{"layer":"default","id":"K_COLON","text":";"}]},{"width":"140","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"numeric","row":[{"id":"1","key":[{"id":"K_1","text":"1"},{"id":"K_2","text":"2"},{"id":"K_3","text":"3"},{"id":"K_4","text":"4"},{"id":"K_5","text":"5"},{"id":"K_6","text":"6","sk":[{"layer":"shift","id":"K_6","text":"^"},{"layer":"rightalt","id":"K_6","text":"\u2019"}]},{"id":"K_7","text":"7"},{"id":"K_8","text":"8"},{"id":"K_9","text":"9"},{"id":"K_0","text":"0"}]},{"id":"2","key":[{"layer":"shift","id":"K_4","pad":"70","text":"$","sk":[{"layer":"rightalt","id":"K_4","text":"\u20AC"}]},{"layer":"shift","id":"K_2","text":"@"},{"layer":"shift","id":"K_3","text":"#"},{"layer":"shift","id":"K_5","text":"%"},{"layer":"shift","id":"K_7","text":"&"},{"layer":"shift","id":"K_HYPHEN","text":"_","sk":[{"layer":"rightalt-shift","id":"K_HYPHEN","text":"\u2014"},{"layer":"rightalt","id":"K_HYPHEN","text":"\u2013"},{"layer":"rightalt","id":"K_BKQUOTE","text":"\u00AD"},{"layer":"shift","id":"K_BKQUOTE","text":"~"},{"layer":"default","id":"K_BKQUOTE","text":"`"}]},{"layer":"default","id":"K_EQUAL","text":"="},{"layer":"rightalt-shift","id":"K_4","text":"\u00A7"},{"layer":"rightalt-shift","id":"K_5","text":"\u00B0"},{"width":"10","id":"T_new_88","sp":"10"}]},{"id":"3","key":[{"width":"110","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_LBRKT","text":"[","sk":[{"id":"U_00AB","text":"\u00AB"},{"layer":"shift","id":"K_COMMA","text":"<"},{"layer":"shift","id":"K_LBRKT","text":"{"}]},{"layer":"shift","id":"K_9","text":"("},{"layer":"shift","id":"K_0","text":")"},{"id":"K_RBRKT","text":"]","sk":[{"id":"U_00BB","text":"\u00BB"},{"layer":"shift","id":"K_PERIOD","text":">"},{"layer":"shift","id":"K_RBRKT","text":"}"}]},{"layer":"shift","id":"K_EQUAL","text":"+","sk":[{"layer":"rightalt-shift","id":"K_7","text":"\u00B1"}]},{"layer":"default","id":"K_HYPHEN","text":"-"},{"layer":"shift","id":"K_8","text":"*","sk":[{"layer":"rightalt-shift","id":"K_8","text":"\u00D7"}]},{"layer":"default","id":"K_SLASH","text":"\/","sk":[{"layer":"shift","id":"K_BKSLASH","text":"|"},{"layer":"default","id":"K_BKSLASH","text":"\\"}]},{"width":"90","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"default","width":"140","id":"K_LOWER","sp":"1","text":"*abc*"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"500","id":"K_SPACE"},{"layer":"default","width":"125","id":"K_PERIOD","text":".","sk":[{"layer":"default","id":"K_COMMA","text":","},{"layer":"shift","id":"K_1","text":"!"},{"layer":"shift","id":"K_SLASH","text":"?"},{"layer":"default","id":"K_BKSLASH","text":"\\"},{"layer":"shift","id":"K_COLON","text":":"},{"layer":"default","id":"K_COLON","text":";"}]},{"width":"140","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]}]}};this.s13=" 123$%6&*aAcCeEgGiIkKlLnNoOrRsSuUzZ-_`";this.s14="' «»§°’±×āĀčČēĒģĢīĪķĶļĻņŅōŌŗŖšŠūŪžŽ–—­";this.s15=" 4$5%7&8*aAcCeEgGiIkKlLnNoOrRsSuUzZ-_";this.s16="\"§§°°±±××ĀĀČČĒĒĢĢĪĪĶĶĻĻŅŅŌŌŖŖŠŠŪŪŽŽ——";this.s17=" 123$%6&*aAcCeEgGiIkKlLnNoOrRsSuUzZ-_`";this.s18="´ «»§°’±×āĀčČēĒģĢīĪķĶļĻņŅōŌŗŖšŠūŪžŽ–—­";this.s19=" 4$5%7&8*aAcCeEgGiIkKlLnNoOrRsSuUzZ-_";this.s20="¨§§°°±±××ĀĀČČĒĒĢĢĪĪĶĶĻĻŅŅŌŌŖŖŠŠŪŪŽŽ——";this.KVER="15.0.265.0";this.KVS=[];this.gs=function(t,e) {return this.g0(t,e);};this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16392,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t," ");}}else if(k.KKM(e,16392,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"«");}}else if(k.KKM(e,16392,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"»");}}else if(k.KKM(e,16392,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"€");}}else if(k.KKM(e,16408,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"§");}}else if(k.KKM(e,16408,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"°");}}else if(k.KKM(e,16392,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"’");}}else if(k.KKM(e,16408,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"±");}}else if(k.KKM(e,16408,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"×");}}else if(k.KKM(e,16904,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ā");}}else if(k.KKM(e,16648,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ā");}}else if(k.KKM(e,16920,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ā");}}else if(k.KKM(e,16664,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ā");}}else if(k.KKM(e,16904,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"č");}}else if(k.KKM(e,16648,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Č");}}else if(k.KKM(e,16920,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Č");}}else if(k.KKM(e,16664,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"č");}}else if(k.KKM(e,16904,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ē");}}else if(k.KKM(e,16648,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ē");}}else if(k.KKM(e,16920,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ē");}}else if(k.KKM(e,16664,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ē");}}else if(k.KKM(e,16904,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ģ");}}else if(k.KKM(e,16648,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ģ");}}else if(k.KKM(e,16920,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ģ");}}else if(k.KKM(e,16664,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ģ");}}else if(k.KKM(e,16904,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ī");}}else if(k.KKM(e,16648,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ī");}}else if(k.KKM(e,16920,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ī");}}else if(k.KKM(e,16664,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ī");}}else if(k.KKM(e,16904,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ķ");}}else if(k.KKM(e,16648,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ķ");}}else if(k.KKM(e,16920,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ķ");}}else if(k.KKM(e,16664,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ķ");}}else if(k.KKM(e,16904,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ļ");}}else if(k.KKM(e,16648,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ļ");}}else if(k.KKM(e,16920,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ļ");}}else if(k.KKM(e,16664,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ļ");}}else if(k.KKM(e,16904,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ņ");}}else if(k.KKM(e,16648,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ņ");}}else if(k.KKM(e,16920,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ņ");}}else if(k.KKM(e,16664,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ņ");}}else if(k.KKM(e,16904,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ō");}}else if(k.KKM(e,16648,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ō");}}else if(k.KKM(e,16920,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ō");}}else if(k.KKM(e,16664,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ō");}}else if(k.KKM(e,16904,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ŗ");}}else if(k.KKM(e,16648,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ŗ");}}else if(k.KKM(e,16920,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ŗ");}}else if(k.KKM(e,16664,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ŗ");}}else if(k.KKM(e,16904,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"š");}}else if(k.KKM(e,16648,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Š");}}else if(k.KKM(e,16920,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Š");}}else if(k.KKM(e,16664,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"š");}}else if(k.KKM(e,16904,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ū");}}else if(k.KKM(e,16648,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ū");}}else if(k.KKM(e,16920,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ū");}}else if(k.KKM(e,16664,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ū");}}else if(k.KKM(e,16904,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ž");}}else if(k.KKM(e,16648,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ž");}}else if(k.KKM(e,16920,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ž");}}else if(k.KKM(e,16664,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ž");}}else if(k.KKM(e,16392,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"–");}}else if(k.KKM(e,16408,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"—");}}else if(k.KKM(e,16392,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"­");}}else if(k.KKM(e,16392,222)) {if(1){r=m=1;k.KDC(0,t);k.KDO(-1,t,2);}}else if(k.KKM(e,16408,222)) {if(1){r=m=1;k.KDC(0,t);k.KDO(-1,t,3);}}else if(k.KKM(e,16384,226)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16400,226)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16384,32)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t," ");}}else if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16400,222)) {if(1){r=m=1;k.KDC(0,t);k.KDO(-1,t,1);}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16384,222)) {if(1){r=m=1;k.KDC(0,t);k.KDO(-1,t,0);}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,",");}}else if(k.KKM(e,16384,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,".");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"0");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"1");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"2");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"3");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"4");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"5");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"6");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"7");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"8");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"9");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,";");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,">");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"?");}}if(m) {}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16640,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"A");}}else if(k.KKM(e,16912,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"A");}}else if(k.KKM(e,16640,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"B");}}else if(k.KKM(e,16912,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"B");}}else if(k.KKM(e,16640,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"C");}}else if(k.KKM(e,16912,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"C");}}else if(k.KKM(e,16640,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"D");}}else if(k.KKM(e,16912,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"D");}}else if(k.KKM(e,16640,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"E");}}else if(k.KKM(e,16912,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"E");}}else if(k.KKM(e,16640,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"F");}}else if(k.KKM(e,16912,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"F");}}else if(k.KKM(e,16640,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"G");}}else if(k.KKM(e,16912,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"G");}}else if(k.KKM(e,16640,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"H");}}else if(k.KKM(e,16912,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"H");}}else if(k.KKM(e,16640,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"I");}}else if(k.KKM(e,16912,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"I");}}else if(k.KKM(e,16640,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"J");}}else if(k.KKM(e,16912,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"J");}}else if(k.KKM(e,16640,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"K");}}else if(k.KKM(e,16912,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"K");}}else if(k.KKM(e,16640,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"L");}}else if(k.KKM(e,16912,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"L");}}else if(k.KKM(e,16640,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"M");}}else if(k.KKM(e,16912,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"M");}}else if(k.KKM(e,16640,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"N");}}else if(k.KKM(e,16912,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"N");}}else if(k.KKM(e,16640,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"O");}}else if(k.KKM(e,16912,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"O");}}else if(k.KKM(e,16640,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"P");}}else if(k.KKM(e,16912,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"P");}}else if(k.KKM(e,16640,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Q");}}else if(k.KKM(e,16912,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Q");}}else if(k.KKM(e,16640,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"R");}}else if(k.KKM(e,16912,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"R");}}else if(k.KKM(e,16640,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"S");}}else if(k.KKM(e,16912,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"S");}}else if(k.KKM(e,16640,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"T");}}else if(k.KKM(e,16912,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"T");}}else if(k.KKM(e,16640,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"U");}}else if(k.KKM(e,16912,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"U");}}else if(k.KKM(e,16640,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16912,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16640,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"W");}}else if(k.KKM(e,16912,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"W");}}else if(k.KKM(e,16640,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16912,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16640,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16912,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16640,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Z");}}else if(k.KKM(e,16912,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Z");}}else if(k.KKM(e,16384,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"[");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16384,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"]");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"^");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16384,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"`");}}else if(k.KKM(e,16896,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"a");}}else if(k.KKM(e,16656,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"a");}}else if(k.KKM(e,16896,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"b");}}else if(k.KKM(e,16656,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"b");}}else if(k.KKM(e,16896,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"c");}}else if(k.KKM(e,16656,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"c");}}else if(k.KKM(e,16896,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"d");}}else if(k.KKM(e,16656,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"d");}}else if(k.KKM(e,16896,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"e");}}else if(k.KKM(e,16656,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"e");}}else if(k.KKM(e,16896,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"f");}}else if(k.KKM(e,16656,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"f");}}else if(k.KKM(e,16896,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"g");}}else if(k.KKM(e,16656,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"g");}}else if(k.KKM(e,16896,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"h");}}else if(k.KKM(e,16656,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"h");}}else if(k.KKM(e,16896,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"i");}}else if(k.KKM(e,16656,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"i");}}else if(k.KKM(e,16896,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"j");}}else if(k.KKM(e,16656,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"j");}}else if(k.KKM(e,16896,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"k");}}else if(k.KKM(e,16656,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"k");}}else if(k.KKM(e,16896,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"l");}}else if(k.KKM(e,16656,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"l");}}else if(k.KKM(e,16896,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"m");}}else if(k.KKM(e,16656,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"m");}}else if(k.KKM(e,16896,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"n");}}else if(k.KKM(e,16656,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"n");}}else if(k.KKM(e,16896,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"o");}}else if(k.KKM(e,16656,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"o");}}else if(k.KKM(e,16896,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"p");}}else if(k.KKM(e,16656,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"p");}}else if(k.KKM(e,16896,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"q");}}else if(k.KKM(e,16656,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"q");}}else if(k.KKM(e,16896,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"r");}}else if(k.KKM(e,16656,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"r");}}else if(k.KKM(e,16896,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"s");}}else if(k.KKM(e,16656,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"s");}}else if(k.KKM(e,16896,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"t");}}else if(k.KKM(e,16656,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"t");}}else if(k.KKM(e,16896,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"u");}}if(m) {}else if(k.KKM(e,16656,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"u");}}else if(k.KKM(e,16896,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16656,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16896,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"w");}}else if(k.KKM(e,16656,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"w");}}else if(k.KKM(e,16896,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16656,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16896,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"y");}}else if(k.KKM(e,16656,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"y");}}else if(k.KKM(e,16896,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"z");}}else if(k.KKM(e,16656,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"z");}}else if(k.KKM(e,16400,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"{");}}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"}");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"~");}}if(m==1) {k.KDC(-1,t);r=this.g1(t,e);m=2;}return r;};this.g1=function(t,e) {var k=KeymanWeb,r=1,m=0;if(k.KFCM(2,t,[{t:'d',d:0},{t:'a',a:this.s13}])){m=1;k.KDC(2,t);k.KIO(-1,this.s14,2,t);}else if(k.KFCM(2,t,[{t:'d',d:1},{t:'a',a:this.s15}])){m=1;k.KDC(2,t);k.KIO(-1,this.s16,2,t);}else if(k.KFCM(2,t,[{t:'d',d:2},{t:'a',a:this.s17}])){m=1;k.KDC(2,t);k.KIO(-1,this.s18,2,t);}else if(k.KFCM(2,t,[{t:'d',d:3},{t:'a',a:this.s19}])){m=1;k.KDC(2,t);k.KIO(-1,this.s20,2,t);}return r;};}