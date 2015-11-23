var { ActionButton } = require("sdk/ui/button/action");

ActionButton({
  id: "smack-tab-start",
  label: "Smack tab to start (send it to the start of the tab list)",
  icon: {"16": "./icon-start-16.png",
         "32": "./icon-start-32.png",
         "64": "./icon-start-64.png"},
  onClick: smackTabStart
});

ActionButton({
  id: "smack-tab-end",
  label: "Smack tab to end (send it to the end of the tab list)",
  icon: {"16": "./icon-end-16.png",
         "32": "./icon-end-32.png",
         "64": "./icon-end-64.png"},
  onClick: smackTabEnd
});


/* Hotkeys */
var { Hotkey } = require("sdk/hotkeys");

Hotkey({
  combo: "accel-alt-home",
  onPress: function() {
    smackTabStart();
  }
});

Hotkey({
  combo: "accel-alt-end",
  onPress: function() {
    smackTabEnd();
  }
});


/* Actual code to send the tab to the start or end of tabs. */
function smackTabStart() {
  var tabs = require("sdk/tabs");
  tabs.activeTab.index = 0;
}

function smackTabEnd() {
  var tabs = require("sdk/tabs");
  tabs.activeTab.index = tabs.length - 1;
}
