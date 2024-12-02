// Disabled Multiblocks
const disabledMultiblocks = {
    "immersiveengineering:multiblocks/squeezer": true,
  };
  
  function disableMultiblocks(event) {
    const mbName = event.getMultiblock().getUniqueName();
    if (mbName.namespace === "immersiveengineering" && disabledMultiblocks[mbName]) {
      event.setCanceled(true);
    }
  }
  
  NativeEvents.onEvent("blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent", disableMultiblocks);
  