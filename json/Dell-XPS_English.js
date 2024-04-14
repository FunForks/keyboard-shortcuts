jazyx = window.jazyx || {};
jazyx["Dell-XPS (English)"] = {
  machine: "Dell-XPS (English)"
  html: `
    <div class="row" id="function-keys">
      <div class="esc"></div>

      <div class="f1"></div>
      <div class="f2"></div>
      <div class="f3"></div>
      <div class="f4"></div>

      <div class="f5"></div>
      <div class="f6"></div>
      <div class="f7"></div>
      <div class="f8"></div>

      <div class="f9"></div>
      <div class="f10"></div>
      <div class="f11"></div>
      <div class="f12"></div>

      <div class="f13"></div>
      <div class="f14"></div>
      <div class="f15"></div>
    </div>
    <div class="row" id="number-keys"><div class="n0"></div>
      <div class="n1"></div>
      <div class="n2"></div>
      <div class="n3"></div>
      <div class="n4"></div>
      <div class="n5"></div>
      <div class="n6"></div>
      <div class="n7"></div>
      <div class="n8"></div>
      <div class="n9"></div>
      <div class="nA"></div>
      <div class="nB"></div>
      <div class="nC"></div>
      <div class="nD right-aligned"></div>
    </div>
    <div class="row" id="top-row">
      <div class="t1 left-aligned"></div>
      <div class="t2"></div>
      <div class="t3"></div>
      <div class="t4"></div>
      <div class="t5"></div>
      <div class="t6"></div>
      <div class="t7"></div>
      <div class="t8"></div>
      <div class="t9"></div>
      <div class="tA"></div>
      <div class="tB"></div>
      <div class="tC"></div>
      <div class="tD"></div>
      <div class="tE"></div>
    </div>
    <div class="row" id="home-row">
      <div class="h1 left-aligned"></div>
      <div class="h2"></div>
      <div class="h3"></div>
      <div class="h4"></div>
      <div class="h5"></div>
      <div class="h6"></div>
      <div class="h7"></div>
      <div class="h8"></div>
      <div class="h9"></div>
      <div class="hA"></div>
      <div class="hB"></div>
      <div class="hC"></div>

      <div class="hE right-aligned"></div>
    </div>
    <div class="row" id="bottom-row">
      <div class="b1 left-aligned"></div>

      <div class="b3"></div>
      <div class="b4"></div>
      <div class="b5"></div>
      <div class="b6"></div>
      <div class="b7"></div>
      <div class="b8"></div>
      <div class="b9"></div>
      <div class="bA"></div>
      <div class="bB"></div>
      <div class="bC"></div>
      <div class="bD right-aligned"></div>
    </div>
    <div class="row" id="space-row">
      <div class="s1"></div>
      <div class="s2"></div>
      <div class="s3"></div>
      <div class="s4"></div>

      <div class="s5"></div>

      <div class="s6"></div>
      <div class="s8"></div>

      <div id="arrow-keys">
        <div class="up-arrow"></div>
        <div class="left-arrow"></div>
        <div class="down-arrow"></div>
        <div class="right-arrow"></div>
      </div>
    </div>`,
  layout: {
    English: {
      esc: ["ESC"],
      f1: ["F1"],
      f2: ["F2"],
      f3: ["F3"],
      f4: ["F4"],
      f5: ["F5"],
      f6: ["F6"],
      f7: ["F7"],
      f8: ["F8"],
      f9: ["F9"],
      f10: ["F10"],
      f11: ["F11"],
      f12: ["F12"],

      f13: ["PrtScr"],
      f14: ["Home"],
      f15: ["End"],
      f16: ["Insert"],
      f17: ["Delete"],
      f18: ["PgUp"],
      f19: ["PgDn"],

      n0: ["`", "~"],
      n1: ["1", "!"],
      n2: ["2", "@"],
      n3: ["3", "#"],
      n4: ["4", "$"],
      n5: ["5", "%"],
      n6: ["6", "^"],
      n7: ["7", "&"],
      n8: ["8", "*"],
      n9: ["9", "("],
      nA: ["0", ")"],
      nB: ["-", "_"],
      nC: ["=", "+"],
      nD: ["Backspace"],

      t1: ["Tab"],
      t2: ["Q"],
      t3: ["W"],
      t4: ["E"],
      t5: ["R"],
      t6: ["T"],
      t7: ["Y"],
      t8: ["U"],
      t9: ["I"],
      tA: ["O"],
      tB: ["P"],
      tC: ["[", "{"],
      tD: ["]", "}"],
      tE: ["\\", "|"],

      h1: ["Caps Lock"],
      h2: ["A"],
      h3: ["S"],
      h4: ["D"],
      h5: ["F"],
      h6: ["G"],
      h7: ["H"],
      h8: ["J"],
      h9: ["K"],
      hA: ["L"],
      hB: [";", ":"],
      hC: ["'", '"'],

      hE: ["Enter"],

      b1: ["Shift"],

      b3: ["Z"],
      b4: ["X"],
      b5: ["C"],
      b6: ["V"],
      b7: ["B"],
      b8: ["N"],
      b9: ["M"],
      bA: [",", "<"],
      bB: [".", ">"],
      bC: ["/", "?"],
      bD: ["Shift"],

      s1: ["Ctrl"],
      s2: ["Fn"],
      s3: ["⊞"],
      s4: ["Alt"],
      s5: [""],
      s6: ["Alt"],

      s8: ["Ctrl"],

      "up-arrow": ["↑PgUp"],
      "down-arrow": ["↓PgDn"],
      "left-arrow": ["←Home"],
      "right-arrow": ["End→"]
    },
    Dvorak: {
      esc: ["ESC"],
      f1: ["F1"],
      f2: ["F2"],
      f3: ["F3"],
      f4: ["F4"],
      f5: ["F5"],
      f6: ["F6"],
      f7: ["F7"],
      f8: ["F8"],
      f9: ["F9"],
      f10: ["F10"],
      f11: ["F11"],
      f12: ["F12"],
      f13: ["PrtScr"],
      f14: ["Insert"],
      f15: ["Delete"],

      n0: ["`", "~"],
      n1: ["1", "!"],
      n2: ["2", "@"],
      n3: ["3", "#"],
      n4: ["4", "$"],
      n5: ["5", "%"],
      n6: ["6", "^"],
      n7: ["7", "&"],
      n8: ["8", "*"],
      n9: ["9", "("],
      nA: ["0", ")"],
      nB: ["[", "{"],
      nC: ["]", "}"],
      nD: ["Backspace"],

      t1: ["Tab"],
      t2: ["'", '"'],
      t3: [",", "<"],
      t4: [".", ">"],
      t5: ["P"],
      t6: ["Y"],
      t7: ["F"],
      t8: ["G"],
      t9: ["C"],
      tA: ["R"],
      tB: ["L"],
      tC: ["/", "?"],
      tD: ["=", "+"],
      tE: ["\\", "|"],

      h1: ["Caps Lock"],
      h2: ["A"],
      h3: ["O"],
      h4: ["E"],
      h5: ["U"],
      h6: ["I"],
      h7: ["D"],
      h8: ["H"],
      h9: ["T"],
      hA: ["N"],
      hB: ["S"],
      hC: ["-", "_"],

      hE: ["Enter"],

      b1: ["Shift"],

      b3: [";", ":"],
      b4: ["Q"],
      b5: ["J"],
      b6: ["K"],
      b7: ["X"],
      b8: ["B"],
      b9: ["M"],
      bA: ["W"],
      bB: ["V"],
      bC: ["Z"],
      bD: ["Shift"],

      s1: ["Ctrl"],
      s2: ["Fn"],
      s3: ["⊞"],
      s4: ["Alt"],
      s5: [""],
      s6: ["Alt"],

      s8: ["Ctrl"],

      "up-arrow": ["↑PgUp"],
      "down-arrow": ["↓PgDn"],
      "left-arrow": ["←Home"],
      "right-arrow": ["End→"]
    }
  }
};
