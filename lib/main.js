require("sdk/ui/button/action").ActionButton({
  id: "smack-tab",
  label: "Smack tab (send it to the end of the tab list)",
  icon: {"16": "./icon-16.png",
         "32": "./icon-32.png",
         "64": "./icon-64.png"},
  onClick: smackTab
});

var { Hotkey } = require("sdk/hotkeys");

var smackTabHotkey = Hotkey({
  combo: "accel-alt-end",
  onPress: function() {
    smackTab();
  }
});

function smackTab() {
  var tabs = require("sdk/tabs");
  tabs.activeTab.index = tabs.length - 1;
}
