if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_mon_anonta());}function Keyboard_mon_anonta(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_mon_anonta";this.KN="Mon Anonta";this.KMINVER="10.0";this.KV={F:' 1em "Pyidaungsu"',K102:0};this.KV.KLS={"default": ["ၝ","၁","၂","၃","၄","၅","၆","၇","၈","၉","၀","−","=","","","","ဆ","တ","န","မ","အ","ပ","က","ၚ","သ","စ","ဟ","ဩ","ၑ","","","","​ေ","ျ","ိ","်","ါ","ဴ","ြ","ု","ူ","း","'","","","","","","","ဖ","ထ","ခ","လ","ဘ","ည","ာ","ယ","ၜ","။","","","","","",""],"shift": ["ဎ","ဍ","ဏ္ဍ","ဋ","ိဲ","%","ဵ","ရ","ဂ","(",")","×","+","","","","ၛ","ဝ","ဣ","ၟ","ဳ","ၠ","ဥ","၎","ဿ","ဏ","ဨ","အဴ","ဋ္ဌ","","","","ဗ","ှ","ီ","္","ွ","ံ","ဲ","ဒ","ဓ",":","\"","","","","","","","ဇ","ဌ","ဃ","ဠ","ၐ","ဉ","÷","ၞ","","၊","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=1;this.KH='';this.KM=0;this.KBVER="1.0.2";this.KMBM=0x0010;this.KVKL={"phone":{"font":"Pyidaungsu","displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"width":"115","id":"K_Q","text":"\u1006"},{"width":"115","id":"K_W","text":"\u1010"},{"width":"115","id":"K_E","text":"\u1014"},{"width":"115","id":"K_R","text":"\u1019","sk":[{"nextlayer":"default","layer":"shift","id":"K_R","text":"\u105F"}]},{"width":"115","id":"K_T","text":"\u1021","sk":[{"nextlayer":"default","layer":"shift","id":"K_T","text":"\u1033"}]},{"width":"115","id":"K_Y","text":"\u1015","sk":[{"nextlayer":"default","layer":"shift","id":"K_Y","text":"\u1060"}]},{"width":"115","id":"K_U","text":"\u1000"},{"width":"115","id":"K_I","text":"\u105A"},{"width":"115","id":"K_O","text":"\u101E","sk":[{"nextlayer":"default","layer":"shift","id":"K_O","text":"\u103F"}]},{"width":"115","id":"K_P","text":"\u1005"},{"layer":"default","width":"115","id":"K_LBRKT","text":"\u101F"}]},{"id":"2","key":[{"width":"115","id":"K_A","text":"\u200B\u1031","sk":[{"layer":"shift","id":"K_A","text":"\u1017"}]},{"width":"115","id":"K_S","text":"\u103B","sk":[{"nextlayer":"default","layer":"shift","id":"K_S","text":"\u103E"}]},{"width":"115","id":"K_D","text":"\u102D","sk":[{"nextlayer":"default","layer":"shift","id":"K_D","text":"\u102E"}]},{"width":"115","id":"K_F","text":"\u103A"},{"width":"115","id":"K_G","text":"\u102B","sk":[{"nextlayer":"default","layer":"shift","id":"K_G","text":"\u103D"}]},{"width":"115","id":"K_H","text":"\u1034","sk":[{"nextlayer":"default","layer":"shift","id":"K_H","text":"\u1036"}]},{"width":"115","id":"K_J","text":"\u103C","sk":[{"nextlayer":"default","layer":"shift","id":"K_J","text":"\u1032"}]},{"width":"115","id":"K_K","text":"\u102F"},{"width":"115","id":"K_L","text":"\u1030"},{"width":"115","id":"K_COLON","text":"\u1038"},{"layer":"shift","width":"115","id":"K_1","text":"\u100D","sk":[{"nextlayer":"default","layer":"shift","id":"K_6","text":"\u1035"}]}]},{"id":"3","key":[{"nextlayer":"shift","width":"180","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"width":"115","id":"K_Z","text":"\u1016"},{"width":"115","id":"K_X","text":"\u1011"},{"width":"115","id":"K_C","text":"\u1001"},{"width":"115","id":"K_V","text":"\u101C"},{"width":"115","id":"K_B","text":"\u1018"},{"width":"115","id":"K_N","text":"\u100A","sk":[{"nextlayer":"default","layer":"shift","id":"K_N","text":"\u1009"}]},{"width":"115","id":"K_M","text":"\u102C","sk":[{"nextlayer":"default","layer":"shift","id":"K_COMMA","text":"\u105E"}]},{"width":"115","id":"K_COMMA","text":"\u101A"},{"width":"180","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"numeric","width":"140","id":"K_NUMLOCK","sp":"1","text":"\u1041\u1042\u1043"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"layer":"shift","width":"115","id":"K_F","text":"\u1039"},{"width":"640","id":"K_SPACE"},{"layer":"shift","width":"115","id":"K_7","text":"\u101B","sk":[{"nextlayer":"default","layer":"shift","id":"K_SLASH","text":"\u104A"},{"nextlayer":"default","id":"K_SLASH","text":"\u104B"},{"nextlayer":"default","layer":"shift","id":"K_I","text":"\u104E"},{"nextlayer":"default","layer":"shift","id":"K_B","text":"\u1050"},{"nextlayer":"default","layer":"default","id":"K_BKSLASH","text":"\u1051"},{"nextlayer":"default","layer":"shift","id":"K_BKQUOTE","text":"\u100E"},{"nextlayer":"default","layer":"default","id":"K_RBRKT","text":"\u1029"}]},{"width":"210","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift","row":[{"id":"1","key":[{"nextlayer":"default","layer":"shift","width":"115","id":"K_Q","text":"\u105B"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_W","text":"\u101D"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_E","text":"\u1023"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_R","text":"\u105F"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_T","text":"\u1033"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_Y","text":"\u1060"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_U","text":"\u1025"},{"nextlayer":"default","layer":"default","width":"115","id":"K_BKQUOTE","text":"\u105D"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_O","text":"\u103F"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_P","text":"\u100F","sk":[{"nextlayer":"default","layer":"shift","id":"K_2","text":"\u100F\u1039\u100D"}]},{"nextlayer":"default","layer":"shift","width":"115","id":"K_LBRKT","text":"\u1028"}]},{"id":"2","key":[{"nextlayer":"default","layer":"shift","width":"115","id":"K_A","text":"\u1017"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_S","text":"\u103E"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_D","text":"\u102E"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_F","text":"\u1039"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_G","text":"\u103D"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_H","text":"\u1036"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_J","text":"\u1032"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_K","text":"\u1012"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_L","text":"\u1013"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_8","text":"\u1002"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_6","text":"\u1035"}]},{"id":"3","key":[{"nextlayer":"default","width":"180","id":"K_SHIFT","sp":"2","text":"*Shift*"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_Z","text":"\u1007"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_X","text":"\u100C","sk":[{"nextlayer":"default","layer":"shift","id":"K_BKSLASH","text":"\u100B\u1039\u100C"}]},{"nextlayer":"default","layer":"shift","width":"115","id":"K_C","text":"\u1003"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_V","text":"\u1020"},{"nextlayer":"default","layer":"default","width":"115","id":"K_PERIOD","text":"\u105C"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_N","text":"\u1009"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_COMMA","text":"\u105E"},{"nextlayer":"default","layer":"shift","width":"115","id":"K_3","text":"\u100B"},{"width":"180","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"numeric","width":"140","id":"K_NUMLOCK","sp":"1","text":"\u1041\u1042\u1043"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"nextlayer":"default","layer":"default","width":"115","id":"K_RBRKT","text":"\u1029"},{"width":"640","id":"K_SPACE"},{"nextlayer":"default","width":"115","id":"U_104B","text":"\u104B"},{"width":"210","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"numeric","row":[{"id":"1","key":[{"layer":"default","id":"K_1","text":"\u1041"},{"layer":"default","id":"K_2","text":"\u1042"},{"layer":"default","id":"K_3","text":"\u1043"},{"layer":"default","id":"K_4","text":"\u1044"},{"layer":"default","id":"K_5","text":"\u1045"},{"layer":"default","id":"K_6","text":"\u1046"},{"layer":"default","id":"K_7","text":"\u1047"},{"layer":"default","id":"K_8","text":"\u1048"},{"layer":"default","id":"K_9","text":"\u1049"},{"layer":"default","id":"K_0","text":"\u1040"}]},{"id":"2","key":[{"id":"U_0024","pad":"50","text":"$"},{"id":"U_0040","text":"@"},{"id":"U_0023","text":"#"},{"id":"U_0025","text":"%"},{"id":"U_0026","text":"&"},{"id":"U_005F","text":"_"},{"id":"U_003D","text":"="},{"id":"U_007C","text":"|"},{"id":"U_005C","text":"\\"}]},{"id":"3","key":[{"nextlayer":"symbol","width":"110","id":"K_SYMBOLS","sp":"1","text":"\u00A7"},{"id":"U_005B","text":"[","sk":[{"id":"U_00AB","text":"\u00AB"},{"id":"U_003C","text":"<"},{"id":"U_007B","text":"{"}]},{"id":"U_0028","text":"("},{"id":"U_0029","text":")"},{"id":"U_005D","text":"]","sk":[{"id":"U_00BB","text":"\u00BB"},{"id":"U_003E","text":">"},{"id":"U_007D","text":"}"}]},{"id":"U_002B","text":"+"},{"id":"U_002D","text":"-"},{"id":"U_002A","text":"*"},{"id":"U_002F","text":"\/","sk":[{"id":"U_003F","text":"?"}]},{"width":"90","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"default","width":"140","id":"K_LOWER","sp":"1","text":"\u1000\u1001"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"630","id":"K_SPACE"},{"width":"140","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"symbol","row":[{"id":"1","key":[{"id":"U_0060","text":"`"},{"id":"U_007E","text":"~"},{"id":"U_005E","text":"^"},{"id":"U_00A8","text":"\u00A8"},{"id":"U_00B4","text":"\u00B4"},{"id":"U_00B8","text":"\u00B8"},{"id":"U_00AF","text":"\u00AF"},{"id":"U_00BF","text":"\u00BF"},{"id":"U_00A1","text":"\u00A1"},{"id":"U_00AC","text":"\u00AC"}]},{"id":"2","key":[{"id":"U_00AA","pad":"50","text":"\u00AA"},{"id":"U_00BA","text":"\u00BA"},{"id":"U_00B6","text":"\u00B6"},{"id":"U_00A7","text":"\u00A7"},{"id":"U_00B1","text":"\u00B1"},{"id":"U_00D7","text":"\u00D7"},{"id":"U_00F7","text":"\u00F7"},{"id":"U_00A6","text":"\u00A6"},{"id":"U_00B0","text":"\u00B0"}]},{"id":"3","key":[{"nextlayer":"numeric","width":"110","id":"K_NUMLOCK","sp":"8","text":"\u1041\u1042\u1043"},{"id":"U_00B5","text":"\u00B5"},{"id":"U_00A9","text":"\u00A9"},{"id":"U_00AE","text":"\u00AE"},{"id":"U_00A3","text":"\u00A3"},{"id":"U_20AC","text":"\u20AC"},{"id":"U_00A5","text":"\u00A5"},{"id":"U_2022","text":"\u2022"},{"id":"U_00B7","text":"\u00B7"},{"width":"90","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"4","key":[{"nextlayer":"default","width":"140","id":"K_LOWER","sp":"1","text":"\u1000\u1001"},{"width":"120","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"630","id":"K_SPACE"},{"width":"140","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]}]}};this.s11="qwertyuiop[zxcvbnQOP{AKLZXCVNM`!#%&=_\\]~*WEUIB?/,.]";this.s12="ဆတနမအပကၚသစဟဖထခလဘညၛဿဏဨဗဒဓဇဌဃဠဉ÷ၝဍဋ%ရ=×ၑဩဎဂဝဣဥ၎ၐ၊။ယၜဩ";this.s13=",.]";this.s14="ယၜဩ";this.s15="1234567890";this.s16="၁၂၃၄၅၆၇၈၉၀";this.s17="gmh;";this.s18="ါာဴး";this.s19="gm";this.s20="ါာ";this.s21="h";this.s22="ဴ";this.s23=";";this.s24="း";this.s25="dDT^";this.s26="ိီဳဵ";this.s27="JH";this.s28="ဲံ";this.s29="klY";this.s30="ုူၠ";this.s31="f";this.s32="်";this.s33="ကခဂဃၚစဆဇၛဉညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠၜအၝဿၐၑဩ";this.s34="sjSGRY<";this.s35="ျြှွၟၠၞ";this.s36="s";this.s37="ျ";this.s38="j";this.s39="ြ";this.s40="G";this.s41="ွ";this.s42="S";this.s43="ှ";this.s44="R";this.s45="ၟ";this.s46="<";this.s47="ၞ";this.s48="​";this.s49="a";this.s50="ေ";this.s51="ုူိီဲံဳဴဵ";this.s52="ိုဲ";this.s53="ိံ့ု";this.s54="F";this.s55="္";this.s56="@";this.s57="|";this.KVER="14.0.276.0";this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16384,8)) {if(k.KFCM(3,t,['္',{t:'a',a:this.s33},'ေ'])){r=m=1;k.KDC(3,t);k.KO(-1,t,"္​ေ");}else if(k.KFCM(2,t,['​','ေ'])){r=m=1;k.KDC(2,t);}else if(k.KFCM(2,t,[{t:'a',a:this.s12},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"​ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s35},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ေ");}else if(k.KFCM(2,t,['္',{t:'a',a:this.s33}])){r=m=1;k.KDC(2,t);}}else if(k.KKM(e,16400,49)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဍေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဍေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဍ");}}else if(k.KKM(e,16400,51)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဋေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဋေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဋ");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ိဲ");}}else if(k.KKM(e,16400,53)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"%ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္%ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ရေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ရေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ရ");}}else if(k.KKM(e,16400,56)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဂေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဂေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဂ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဂ");}}else if(k.KKM(e,16384,188)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ယေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ယေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ယ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ယ");}}else if(k.KKM(e,16384,190)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၜေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၜေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၜ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၜ");}}else if(k.KKM(e,16384,191)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"။ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္။ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"။");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၀");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၁");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၂");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၃");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၄");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၅");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၆");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၇");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၈");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၉");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"း");}}else if(k.KKM(e,16400,188)) {if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ၞေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၞ");}}else if(k.KKM(e,16384,187)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"=ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္=ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);}}else if(k.KKM(e,16400,191)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"၊ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္၊ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၊");}}else if(k.KKM(e,16400,50)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဏ္ဍေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဏ္ဍ");}}else if(k.KKM(e,16400,65)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဗေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဗေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဗ");}}else if(k.KKM(e,16400,66)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၐေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၐေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၐ");}}else if(k.KKM(e,16400,67)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဃေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဃေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဃ");}}else if(k.KKM(e,16400,68)) {if(k.KFCM(1,t,['ဥ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဦ");}else if(k.KFCM(1,t,[{t:'a',a:this.s30}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ီ");k.KIO(-1,this.s30,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ီ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ီ");}}else if(k.KKM(e,16400,69)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဣေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဣေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဣ");}}else if(k.KKM(e,16400,70)) {if(k.KFCM(1,t,['ဥ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဉ္");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"္");}}else if(k.KKM(e,16400,71)) {if(k.KFCM(2,t,[{t:'a',a:this.s43},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ွ");k.KIO(-1,this.s43,1,t);k.KO(-1,t,"ေ");}else if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ွေ");}else if(k.KFCM(1,t,[{t:'a',a:this.s43}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ွ");k.KIO(-1,this.s43,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ွ");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ံ");}}else if(k.KKM(e,16400,73)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"၎ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္၎ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"၎");}}else if(k.KKM(e,16400,74)) {if(k.KFCM(1,t,['ံ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဲံ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဲ");}}else if(k.KKM(e,16400,75)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဒေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဒေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဒ");}}else if(k.KKM(e,16400,76)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဓေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဓေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဓ");}}else if(k.KKM(e,16400,77)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"÷ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္÷ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"÷");}}else if(k.KKM(e,16400,78)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဉေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဉေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဉ");}}else if(k.KKM(e,16400,79)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဿေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဿေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဿ");}}else if(k.KKM(e,16400,80)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဏေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဏေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဏ");}}else if(k.KKM(e,16400,81)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၛေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၛေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၛ");}}else if(k.KKM(e,16400,82)) {if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ၟေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၟ");}}else if(k.KKM(e,16400,83)) {if(k.KFCM(3,t,[{t:'a',a:this.s33},'်','ေ'])){r=m=1;k.KDC(3,t);k.KIO(-1,this.s33,1,t);k.KO(-1,t,"ှ်ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s33},'်'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s33,1,t);k.KO(-1,t,"ှ်");}else if(k.KFCM(2,t,['ာ','်'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ာှ်");}else if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ှေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ှ");}}else if(k.KKM(e,16400,84)) {if(k.KFCM(1,t,[{t:'a',a:this.s30}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဳ");k.KIO(-1,this.s30,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဳ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဳ");}}else if(k.KKM(e,16400,85)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဥေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဥေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဥ");}}else if(k.KKM(e,16400,86)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဠေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဠေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဠ");}}else if(k.KKM(e,16400,87)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဝေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဝေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဝ");}}else if(k.KKM(e,16400,88)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဌေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဌေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဌ");}}else if(k.KKM(e,16400,89)) {if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ၠေ");}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ၠ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၠ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၠ");}}else if(k.KKM(e,16400,90)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဇေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဇေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဇ");}}else if(k.KKM(e,16384,219)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဟေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဟေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဟ");}}else if(k.KKM(e,16384,220)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၑေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၑေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၑ");}}else if(k.KKM(e,16384,221)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဩေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဩေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဩေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဩေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဩ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဩ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဩ");}}else if(k.KKM(e,16400,54)) {if(k.KFCM(1,t,[{t:'a',a:this.s30}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဵ");k.KIO(-1,this.s30,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဵ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဵ");}}else if(k.KKM(e,16400,189)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"×ေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္×ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"×");}}else if(k.KKM(e,16384,192)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၝေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၝေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၝ");}}else if(k.KKM(e,16384,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"​ေ");}}else if(k.KKM(e,16384,66)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဘေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဘေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဘ");}}else if(k.KKM(e,16384,67)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ခေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ခေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ခ");}}else if(k.KKM(e,16384,68)) {if(k.KFCM(1,t,[{t:'a',a:this.s30}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ိ");k.KIO(-1,this.s30,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ိ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ိ");}}else if(k.KKM(e,16384,69)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"နေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္နေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"န");}}else if(k.KKM(e,16384,70)) {if(k.KFCM(3,t,[{t:'a',a:this.s33},'ှ','ေ'])){r=m=1;k.KDC(3,t);k.KIO(-1,this.s33,1,t);k.KO(-1,t,"ှ်ေ");}else if(k.KFCM(1,t,['ဥ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဉ်");}else if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"်ေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"်");}}else if(k.KKM(e,16384,71)) {if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ါ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ါ");}}else if(k.KKM(e,16384,72)) {if(k.KFCM(1,t,['း'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဴ");k.KO(-1,t,"း");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဴ");}}else if(k.KKM(e,16384,73)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ၚေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ၚေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ၚ");}}else if(k.KKM(e,16384,74)) {if(k.KFCM(3,t,[{t:'a',a:this.s41},{t:'a',a:this.s43},'ေ'])){r=m=1;k.KDC(3,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s41,1,t);k.KIO(-1,this.s43,2,t);k.KO(-1,t,"ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s41},{t:'a',a:this.s43}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s41,1,t);k.KIO(-1,this.s43,2,t);}else if(k.KFCM(2,t,[{t:'a',a:this.s41},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s41,1,t);k.KO(-1,t,"ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s43},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s43,1,t);k.KO(-1,t,"ေ");}else if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ြေ");}else if(k.KFCM(1,t,[{t:'a',a:this.s41}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s41,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s43}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ြ");k.KIO(-1,this.s43,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ြ");}}else if(k.KKM(e,16384,75)) {if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ု");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ု");}}else if(k.KKM(e,16384,76)) {if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ူ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ူ");}}else if(k.KKM(e,16384,77)) {if(k.KFCM(1,t,['ဥ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ဉာ");}else if(k.KFCM(1,t,[{t:'a',a:this.s28}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ာ");k.KIO(-1,this.s28,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ာ");}}else if(k.KKM(e,16384,78)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ညေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ညေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ည");}}else if(k.KKM(e,16384,79)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"သေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္သေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"သ");}}else if(k.KKM(e,16384,80)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"စေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္စေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"စ");}}else if(k.KKM(e,16384,81)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဆေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဆေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဆ");}}else if(k.KKM(e,16384,82)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"မေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္မေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"မ");}}else if(k.KKM(e,16384,83)) {if(k.KFCM(3,t,[{t:'a',a:this.s41},{t:'a',a:this.s43},'ေ'])){r=m=1;k.KDC(3,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s41,1,t);k.KIO(-1,this.s43,2,t);k.KO(-1,t,"ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s41},{t:'a',a:this.s43}])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s41,1,t);k.KIO(-1,this.s43,2,t);}else if(k.KFCM(2,t,[{t:'a',a:this.s41},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s41,1,t);k.KO(-1,t,"ေ");}else if(k.KFCM(2,t,[{t:'a',a:this.s43},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s43,1,t);k.KO(-1,t,"ေ");}else if(k.KFCM(1,t,['ေ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ျေ");}else if(k.KFCM(1,t,[{t:'a',a:this.s41}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s41,1,t);}else if(k.KFCM(1,t,[{t:'a',a:this.s43}])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ျ");k.KIO(-1,this.s43,1,t);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ျ");}}else if(k.KKM(e,16384,84)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"အေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္အေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"အ");}}else if(k.KKM(e,16384,85)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ကေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ကေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"က");}}else if(k.KKM(e,16384,86)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"လေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္လေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"လ");}}else if(k.KKM(e,16384,87)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"တေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္တေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"တ");}}else if(k.KKM(e,16384,88)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ထေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ထေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ထ");}}else if(k.KKM(e,16384,89)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ပေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ပေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ပ");}}else if(k.KKM(e,16384,90)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဖေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဖေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဖ");}}else if(k.KKM(e,16400,219)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဨေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဨေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဨ");}}else if(k.KKM(e,16400,220)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဋ္ဌေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဋ္ဌ");}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"အဴ");}}else if(k.KKM(e,16400,192)) {if(k.KFCM(2,t,[{t:'a',a:this.s48},'ေ'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"ဎေ");}else if(k.KFCM(2,t,['ေ','္'])){r=m=1;k.KDC(2,t);k.KO(-1,t,"္ဎေ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ဎ");}}return r;};}