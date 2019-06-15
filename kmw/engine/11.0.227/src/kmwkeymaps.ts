/***
   KeymanWeb 11.0
   Copyright 2019 SIL International
***/
namespace com.keyman {

  class KeyMap {
    [keycode: string]: number;
  }

  class BrowserKeyMaps {
    FF:     KeyMap = new KeyMap();
    Safari: KeyMap = new KeyMap();
    Opera:  KeyMap = new KeyMap();

    constructor() {
      //ffie['k109'] = 189; // -    // These two number-pad VK rules are *not* correct for more recent FF! JMD 8/11/12
      //ffie['k107'] = 187; // =    // FF 3.0 // I2062
      this.FF['k61'] = 187;  // =   // FF 2.0
      this.FF['k59'] = 186;  // ;
    }
  }

  class LanguageKeyMaps {
    [languageCode: string]: KeyMap;

    constructor() {
      /* I732 START - 13/03/2007 MCD: Swedish: Start mapping of keystroke to US keyboard #2 */
      // Swedish key map
      this['se'] = new KeyMap();
      this['se']['k220'] =  192; // `
      this['se']['k187'] =  189; // -
      this['se']['k219'] =  187; // =
      this['se']['k221'] =  219; // [
      this['se']['k186'] =  221; // ]
      this['se']['k191'] =  220; // \
      this['se']['k192'] =  186; // ;
      this['se']['k189'] =  191; // /

      this['uk'] = new KeyMap();  // I1299
      this['uk']['k223'] =  192; // // ` U+00AC (logical not) =>  ` ~
      this['uk']['k192'] =  222; // ' @  =>  ' "
      this['uk']['k222'] =  226; // # ~  => K_oE2     // I1504 - UK keyboard mixup #, \
      this['uk']['k220'] =  220; // \ |  => \ |       // I1504 - UK keyboard mixup #, \
    }
  }

  export class KeyMapManager {
    browserMap: BrowserKeyMaps = new BrowserKeyMaps();
    languageMap: LanguageKeyMaps = new LanguageKeyMaps();

    _usCharCodes: KeyMap[];

    constructor() {
      this._usCodeInit();
    }

    _usCodeInit() {
      var s0=new KeyMap(),s1=new KeyMap();

      s0['k192'] = 96;
      s0['k49'] = 49;
      s0['k50'] = 50;
      s0['k51'] = 51;
      s0['k52'] = 52;
      s0['k53'] = 53;
      s0['k54'] = 54;
      s0['k55'] = 55;
      s0['k56'] = 56;
      s0['k57'] = 57;
      s0['k48'] = 48;
      s0['k189'] = 45;
      s0['k187'] = 61;
      s0['k81'] = 113;
      s0['k87'] = 119;
      s0['k69'] = 101;
      s0['k82'] = 114;
      s0['k84'] = 116;
      s0['k89'] = 121;
      s0['k85'] = 117;
      s0['k73'] = 105;
      s0['k79'] = 111;
      s0['k80'] = 112;
      s0['k219'] = 91;
      s0['k221'] = 93;
      s0['k220'] = 92;
      s0['k65'] = 97;
      s0['k83'] = 115;
      s0['k68'] = 100;
      s0['k70'] = 102;
      s0['k71'] = 103;
      s0['k72'] = 104;
      s0['k74'] = 106;
      s0['k75'] = 107;
      s0['k76'] = 108;
      s0['k186'] = 59;
      s0['k222'] = 39;
      s0['k90'] = 122;
      s0['k88'] = 120;
      s0['k67'] = 99;
      s0['k86'] = 118;
      s0['k66'] = 98;
      s0['k78'] = 110;
      s0['k77'] = 109;
      s0['k188'] = 44;
      s0['k190'] = 46;
      s0['k191'] = 47;

      s1['k192'] = 126;
      s1['k49'] = 33;
      s1['k50'] = 64;
      s1['k51'] = 35;
      s1['k52'] = 36;
      s1['k53'] = 37;
      s1['k54'] = 94;
      s1['k55'] = 38;
      s1['k56'] = 42;
      s1['k57'] = 40;
      s1['k48'] = 41;
      s1['k189'] = 95;
      s1['k187'] = 43;
      s1['k81'] = 81;
      s1['k87'] = 87;
      s1['k69'] = 69;
      s1['k82'] = 82;
      s1['k84'] = 84;
      s1['k89'] = 89;
      s1['k85'] = 85;
      s1['k73'] = 73;
      s1['k79'] = 79;
      s1['k80'] = 80;
      s1['k219'] = 123;
      s1['k221'] = 125;
      s1['k220'] = 124;
      s1['k65'] = 65;
      s1['k83'] = 83;
      s1['k68'] = 68;
      s1['k70'] = 70;
      s1['k71'] = 71;
      s1['k72'] = 72;
      s1['k74'] = 74;
      s1['k75'] = 75;
      s1['k76'] = 76;
      s1['k186'] = 58;
      s1['k222'] = 34;
      s1['k90'] = 90;
      s1['k88'] = 88;
      s1['k67'] = 67;
      s1['k86'] = 86;
      s1['k66'] = 66;
      s1['k78'] = 78;
      s1['k77'] = 77;
      s1['k188'] = 60;
      s1['k190'] = 62;
      s1['k191'] = 63;

      this._usCharCodes = [s0,s1];
    }

    /**
     * Function     _USKeyCodeToCharCode
     * Scope        Private
     * @param       {Event}     Levent      KMW event object
     * @return      {number}                Character code 
     * Description Translate keyboard codes to standard US layout codes
     */    
    _USKeyCodeToCharCode(Levent: KeyEvent) {
      return this._usCharCodes[Levent.Lmodifiers & 0x10 ? 1 : 0]['k'+Levent.Lcode];
    };
  }
}