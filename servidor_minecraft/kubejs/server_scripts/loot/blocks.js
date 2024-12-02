// priority: 3
console.log("LootTableJS: Loading Loot Tables")
const ores = [
    "minecraft:redstone_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:lapis_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:emerald_ore",
    "minecraft:deepslate_emerald_ore",
    "actuallyadditions:black_quartz_ore",
    "minecraft:nether_quartz_ore",
    "modern_industrialization:quartz_ore",
    "mekanism:fluorite_ore",
    "mekanism:deepslate_fluorite_ore",


]
LootJS.lootTables(lootTable => {


    ores.forEach(ore => {
        let table = lootTable.getBlockTable(ore)
        table.clear()
        table.addItem(ore)
    })

})