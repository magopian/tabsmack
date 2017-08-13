browser.commands.onCommand.addListener((command) => {
  switch (command) {
    case "move-to-front":
      moveCurrentTabTo(0);
      break;
    case "move-to-back":
      moveCurrentTabTo(-1);
      break;
  }
});

async function moveCurrentTabTo(index) {
    // browser.tabs.getCurrent(); Does not work, and returns undefined.
    var tab = await browser.tabs.query({currentWindow: true, active: true});
    tab = tab[0];
    // Using index == 0 when some pinned tabs are around cause the move
    // function to fail silently. Thus if index is 0, look for the next
    // index after pinned tabs.
    if (index == 0) {
        var pinned = await browser.tabs.query({currentWindow: true, pinned: true});
        console.log(`Found ${pinned.length} pinned tabs.`)
        for (let p of pinned)
            if (index <= p.index)
                index = p.index + 1;
    }
    console.log(`Request to move tab from ${tab.index} to ${index}`)
    await browser.tabs.move(tab.id, { index: index });
}
