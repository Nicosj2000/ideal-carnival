const $MinecraftForge = Java.loadClass(
    "net.neoforged.neoforge.common.NeoForge"
);
const $EventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority");
const $KubeJS = Java.loadClass("dev.latvian.mods.kubejs.KubeJS");
if ($KubeJS.startupScriptManager.firstLoad) {
    $MinecraftForge.EVENT_BUS.addListener(
        $EventPriority.LOW,
        false,
        Java.loadClass(
            "net.neoforged.neoforge.event.entity.player.ItemTooltipEvent"
        ),
        (event) => global.tooltips(event)
    );
}
/**
 *
 * @param {Internal.ItemTooltipEvent} event
 * @returns
 */
global.tooltips = (event) => {
    try {
        if (event.getEntity()) {
            let player = event.getEntity();
            if (!player.stages.has("EMC")) {
              let EMC = Text.literal("EMC").string;
                event.toolTip.removeIf((comp) =>
                    comp
                        .toFlatList()
                        .stream()
                        .anyMatch((flatComp) => flatComp.string.includes(EMC))
                );
            }
        }
    } catch (e) {
        console.error(e);
    }
};
