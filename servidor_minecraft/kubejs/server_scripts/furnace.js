// priority: 999

const meltToCopper = [
    "copper_amulets:amethyst_amulet",
    "copper_amulets:slime_amulet",
    "copper_amulets:ocean_amulet",
    "copper_amulets:end_amulet",
    "copper_amulets:lucky_amulet",
    "copper_amulets:echo_amulet",
    "copper_amulets:obsidian_amulet",
    "copper_amulets:quartz_amulet",
    "copper_amulets:redstone_amulet",
    "copper_amulets:lapis_amulet",
    "copper_amulets:netherite_amulety",
    "copper_amulets:diamond_amulet",
    "copper_amulets:emerald_amulet",
    "copper_amulets:iron_amulet",
    "copper_amulets:gold_amulet",
    "copper_amulets:empty_amulet",
];
const furnaceRemoval = [
    "mekanism:ingot_bronze",
    "mffs:steel_compound"
]

ServerEvents.recipes(event => {
    meltToCopper.forEach(item => {
        event.smelting("minecraft:copper_ingot", item).xp(0.7).id(`ftbneotech:smelting/copper_from_${item.replace(":", "_")}`)
    })
    event.smelting("undergarden:cloggrum_ingot", "jaopca:dusts.cloggrum").xp(0.15).id("ftbneotech:cloggrum_furnace");
    event.smelting("undergarden:froststeel_ingot", "jaopca:dusts.froststeel").xp(0.15).id("ftbneotech:froststeel_furnace");
    event.smelting("immersiveengineering:cokebrick", "minecraft:bricks").id("ftbneotech:cokebrick_furnace");

    furnaceRemoval.forEach(item => {
        event.remove({output: item, type: "minecraft:smelting"})
    })
    event.blasting("modern_industrialization:lignite_coal", "minecraft:coal").xp(0.15).id("ftbneotech:lignite");
})