if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_nlci_gurmukhi_winscript());}function Keyboard_nlci_gurmukhi_winscript(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_nlci_gurmukhi_winscript";this.KN="Gurmukhi WinScript (NLCI)";this.KMINVER="10.0";this.KV={F:' 1em "Annapurna SIL"',K102:0};this.KV.KLS={"default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","ਤ","ਞ","ਏ","ਰ","ਟ","ਯ","ਉ","ਇ","ਓ","ਪ","ਦ","]","\\","","","","ਅ","ਸ","ਡ","਼","ਗ","ਹ","ਜ","ਕ","ਲ",";","‘","","","","","","\\","ਸ਼","x","ਚ","ਵ","ਬ","ਨ","ਮ",",",".","/","","","","","",""],"shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","ਥ","ਙ","","","ਠ","ਐ","ਊ","ਈ","","ਫ","ਧ","}","|","","","","ਆ","ੰ","ਢ","","ਘ","ਃ","ਝ","ਖ","ਲ਼",":","“","","","","","","|","","","ਛ","ਔ","ਭ","ਣ","ਂ","<",">","?","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=1;this.KH='';this.KM=0;this.KBVER="2.0";this.KMBM=0x0010;this.s11="AiIuUeYoVMH";this.s12="ਆਇਈਉਊਏਐਓਔਂਃ";this.s13="ਾਿੀੁੂੇੈੋੌਂਃ";this.s14="kKgGWcCjJwtTdDNqQ[{npPbBmyrlvzshL";this.s15="ਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸ਼ਸਹਲ਼";this.s16="ਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸ਼ਸਹਲ਼ੜ";this.s17="kKgGWcCjJwtTdDNqQ[{npPbBmyrlvzshLAiIuUeYoVMHaz";this.s18=" \",;:.>!]}-/;\\~@#$%^&*(_+|:<?)";this.s19="1234567890";this.s20="੧੨੩੪੫੬੭੮੯੦";this.KVER="14.0.276.0";this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16384,8)) {if(k.KFCM(1,t,['–'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"--");}else if(k.KFCM(1,t,['—'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"---");}}else if(k.KKM(e,16384,32)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t," ");}}else if(k.KKM(e,16400,49)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16400,222)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"\"");}else if(k.KFCM(1,t,['“'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"”");}else if(k.KFCM(1,t,['”'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"\"");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"“");}}else if(k.KKM(e,16400,51)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16400,52)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16400,53)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16384,222)) {if(k.KFCM(1,t,['‘'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"’");}else if(k.KFCM(1,t,['’'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"'");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‘");}}else if(k.KKM(e,16400,57)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,48)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,56)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,",");}}else if(k.KKM(e,16384,189)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,190)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,".");}}else if(k.KKM(e,16384,191)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੦");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੦");}}else if(k.KKM(e,16384,49)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੧");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੧");}}else if(k.KKM(e,16384,50)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੨");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੨");}}else if(k.KKM(e,16384,51)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੩");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੩");}}else if(k.KKM(e,16384,52)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੪");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੪");}}else if(k.KKM(e,16384,53)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੫");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੫");}}else if(k.KKM(e,16384,54)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੬");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੬");}}else if(k.KKM(e,16384,55)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੭");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੭");}}else if(k.KKM(e,16384,56)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੮");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੮");}}else if(k.KKM(e,16384,57)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"੯");}else if(k.KFCM(1,t,[{t:'a',a:this.s20}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s20,1,t);k.KO(-1,t,"੯");}}else if(k.KKM(e,16400,186)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,":");}else if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,";");}else if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,";");}}else if(k.KKM(e,16400,188)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");k.KDO(-1,t,3);}}else if(k.KKM(e,16400,190)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,">");}}else if(k.KKM(e,16400,191)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"?");}}else if(k.KKM(e,16400,50)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16400,65)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"A");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"A");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ਾ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਆ");}}else if(k.KKM(e,16400,66)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"B");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"B");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਭ");}}else if(k.KKM(e,16400,67)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"C");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"C");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਛ");}}else if(k.KKM(e,16400,68)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"D");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"D");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਢ");}}else if(k.KKM(e,16400,69)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"E");}else if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,70)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"F");}else if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,71)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"G");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"G");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਘ");}}else if(k.KKM(e,16400,72)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"H");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"H");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ਃ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਃ");}}else if(k.KKM(e,16400,73)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"I");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"I");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੀ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਈ");}}else if(k.KKM(e,16400,74)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"J");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"J");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਝ");}}else if(k.KKM(e,16400,75)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"K");}else if(k.KFCM(1,t,['ਖ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਖ਼");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"K");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਖ");}}else if(k.KKM(e,16400,76)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"L");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"L");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਲ਼");}}else if(k.KKM(e,16400,77)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"M");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"M");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ਂ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਂ");}}else if(k.KKM(e,16400,78)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"N");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"N");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਣ");}}else if(k.KKM(e,16400,79)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"O");}else if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,80)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"P");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"P");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਫ");}}else if(k.KKM(e,16400,81)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"Q");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"Q");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਥ");}}else if(k.KKM(e,16400,82)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"R");}else if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,83)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"S");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ੰ");}}else if(k.KKM(e,16400,84)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"T");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"T");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਠ");}}else if(k.KKM(e,16400,85)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"U");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"U");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੂ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਊ");}}else if(k.KKM(e,16400,86)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"V");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"V");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੌ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਔ");}}else if(k.KKM(e,16400,87)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"W");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"W");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਙ");}}else if(k.KKM(e,16400,88)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"X");}else if(k.KFCM(2,t,[{t:'a',a:this.s16},'੍'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"੍‌");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"੍‌");}else if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"‌");k.KB(t);}else if(k.KFCM(1,t,['‍'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"‍");k.KB(t);}else if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"‌");k.KB(t);}}else if(k.KKM(e,16400,89)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"Y");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"Y");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੈ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਐ");}}else if(k.KKM(e,16400,90)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"Z");}else if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16384,219)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"[");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"[");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਦ");}}else if(k.KKM(e,16384,220)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16384,221)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"]");}}else if(k.KKM(e,16400,54)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"^");}}else if(k.KKM(e,16400,189)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16384,192)) {if(k.KFCM(3,t,['-','-','-'])){r=m=1;k.KDC(3,t);k.KO(-1,t,"—");}else if(k.KFCM(2,t,['-','-'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"–");}else if(k.KFCM(1,t,['–'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"--");}else if(k.KFCM(1,t,['—'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"---");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"`");k.KDO(-1,t,2);}}else if(k.KKM(e,16384,65)) {if(k.KFCM(2,t,['ਾ',{t:'d',d:1}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ਅ");}else if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"a");}else if(k.KFCM(1,t,['ਅ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਆ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KDO(-1,t,0);}else if(k.KFCM(1,t,[{t:'d',d:0}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਾ");k.KDO(-1,t,1);}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"a");}else if(k.KFCM(1,t,['ਾ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਾਾ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਅ");}}else if(k.KKM(e,16384,66)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"b");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"b");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਬ");}}else if(k.KKM(e,16384,67)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"c");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"c");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਚ");}}else if(k.KKM(e,16384,68)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"d");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"d");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਡ");}}else if(k.KKM(e,16384,69)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"e");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"e");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੇ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਏ");}}else if(k.KKM(e,16384,70)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"f");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"਼");}}else if(k.KKM(e,16384,71)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"g");}else if(k.KFCM(1,t,['ਗ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਗ਼");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"g");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਗ");}}else if(k.KKM(e,16384,72)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"h");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"h");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਹ");}}else if(k.KKM(e,16384,73)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"i");}else if(k.KFCM(1,t,['ਇ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਈ");}else if(k.KFCM(1,t,['ਿ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ੀ");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"i");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ਿ");}else if(k.KFCM(1,t,['ੀ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ੀੀ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਇ");}}else if(k.KKM(e,16384,74)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"j");}else if(k.KFCM(1,t,['ਜ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਜ਼");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"j");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਜ");}}else if(k.KKM(e,16384,75)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"k");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"k");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਕ");}}else if(k.KKM(e,16384,76)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"l");}else if(k.KFCM(1,t,['ਲ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਲ਼");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"l");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਲ");}}else if(k.KKM(e,16384,77)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"m");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"m");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਮ");}}else if(k.KKM(e,16384,78)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"n");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"n");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਨ");}}else if(k.KKM(e,16384,79)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"o");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"o");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੋ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਓ");}}else if(k.KKM(e,16384,80)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"p");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"p");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਪ");}}else if(k.KKM(e,16384,81)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"q");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"q");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਤ");}}else if(k.KKM(e,16384,82)) {if(k.KFCM(2,t,['=',{t:'d',d:3}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ੜ");}else if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"r");}else if(k.KFCM(1,t,['ਰ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ੜ");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"r");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਰ");}}else if(k.KKM(e,16384,83)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"s");}else if(k.KFCM(1,t,['ਸ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਸ਼");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"s");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਸ");}}else if(k.KKM(e,16384,84)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"t");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"t");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਟ");}}else if(k.KKM(e,16384,85)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"u");}else if(k.KFCM(1,t,['ਉ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਊ");}else if(k.KFCM(1,t,['ੁ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ੂ");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"u");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ੁ");}else if(k.KFCM(1,t,['ੂ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ੂੂ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਉ");}}else if(k.KKM(e,16384,86)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"v");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"v");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਵ");}}else if(k.KKM(e,16384,87)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"w");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"w");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਞ");}}else if(k.KKM(e,16384,88)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"x");}else if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"‌");k.KB(t);}else if(k.KFCM(1,t,['‍'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"‍");k.KB(t);}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"੍");}else if(k.KFCM(1,t,[{t:'a',a:this.s12}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s12,1,t);k.KO(-1,t,"੍");}else if(k.KFCM(1,t,[{t:'a',a:this.s12}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s12,1,t);k.KO(-1,t,"੍");}else if(k.KFCM(1,t,['ਅ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ਅ੍");}else if(k.KFCM(1,t,[{t:'a',a:this.s13}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s13,1,t);k.KO(-1,t,"੍");}}else if(k.KKM(e,16384,89)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"y");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"y");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਯ");}}else if(k.KKM(e,16384,90)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"z");}else if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"z");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"z");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"z");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਸ਼");}}else if(k.KKM(e,16400,219)) {if(k.KFCM(2,t,['`',{t:'d',d:2}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"{");}else if(k.KFCM(1,t,[{t:'a',a:this.s17}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s17,1,t);k.KO(-1,t,"{");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ਧ");}}else if(k.KKM(e,16400,220)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16400,221)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"}");}}else if(k.KKM(e,16400,192)) {if(k.KFCM(1,t,['‌'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"~");}}return r;};}