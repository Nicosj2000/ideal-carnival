/**
 * Array of objects representing the drops.
 * Each object contains an item name and its probability.
 *
 * @type {Array<{ item: string, probability: number }>}
 */
const overworldDrops = [
    { item: "minecraft:rotten_flesh", probability: 0.25 },
    { item: "minecraft:bone", probability: 0.25 },
    { item: "minecraft:spider_eye", probability: 0.10 },
    { item: "minecraft:gunpowder", probability: 0.08 },
    { item: "minecraft:ender_pearl", probability: 0.15 },
    { item: "minecraft:sugar", probability: 0.3 },
    { item: "minecraft:slime_ball", probability: 0.20 },
    { item: "minecraft:echo_shard", probability: 0.04 },
    { item: "minecraft:phantom_membrane", probability: 0.02 },
    { item: "minecraft:glow_ink_sac", probability: 0.03},
    { item: "mob_grinding_utils:solid_xp_baby", probability: 0.02 },
    { item: "minecraft:ink_sac", probability: 0.1 },
];
const netherDrops = [
    { item: "minecraft:blaze_powder", probability: 0.25 },
    { item: "minecraft:ghast_tear", probability: 0.02 },
    { item: "minecraft:glowstone_dust", probability: 0.5},
    { item: "minecraft:magma_cream", probability: 0.2 },
    { item: "minecraft:blaze_rod", probability: 0.15 },
    { item: "minecraft:bone", probability: 0.35 },
    { item: "minecraft:wither_skeleton_skull", probability: 0.05 },
    { item: "minecraft:porkchop", probability: 0.5 },
    { item: "minecraft:rotten_flesh", probability: 0.35 },
    { item: "mob_grinding_utils:solid_xp_baby", probability: 0.03 },
];
const undergardenDrops = [
    { item: "undergarden:glitterkelp", probability: 0.2 },
    { item: "undergarden:mogmoss", probability: 0.3 },
    { item: "undergarden:blue_mogmoss", probability: 0.25 },
    { item: "undergarden:ditchbulb", probability: 0.15 },
    { item: "undergarden:droopvine_item", probability: 0.15 },
    { item: "undergarden:blisterberry", probability: 0.4 },
    { item: "undergarden:raw_dweller_meat", probability: 0.15 },
    { item: "undergarden:blood_globule", probability: 0.05 },
    { item: "undergarden:raw_gloomper_leg", probability: 0.15 },
    { item: "undergarden:utheric_shard", probability: 0.01 },
    { item: "undergarden:cloggrum_nugget", probability: 0.10 },
    { item: "undergarden:froststeel_nugget", probability: 0.05 },
    { item: "mob_grinding_utils:solid_xp_baby", probability: 0.03 },

];
const endDrops = [
    { item: "minecraft:ender_pearl", probability: 0.5 },
    { item: "minecraft:shulker_shell", probability: 0.25 },
    { item: "minecraft:chorus_fruit", probability: 0.35 },
    { item: "minecraft:chorus_flower", probability: 0.25 },
    { item: "minecraft:dragon_breath", probability: 0.05 },
    { item: "minecraft:dragon_egg", probability: 0.01 },
    { item: "minecraft:phantom_membrane", probability: 0.05 },
    { item: "mob_grinding_utils:solid_xp_baby", probability: 0.04 },
];



/**
 * Array of sword objects.
 * @typedef {Object} Sword
 * @property {string} item - The item name of the sword.
 * @property {number} probability - The probability of obtaining the sword.
 * @property {string} dropTable - The drop table for the sword.
 * @property {number} eu - The energy units required for the sword.
 * @property {number} duration - The duration of the sword.
 */

/**
 * Array of swords.
 * @type {Sword[]}
 */
const swords = [
    { 
        item: "justdirethings:ferricore_sword", 
        probability: 0.04, 
        dropTable: overworldDrops, 
        eu: 4,
        duration: 600
    },
    { 
        item: "justdirethings:blazegold_sword", 
        probability: 0.04, 
        dropTable: netherDrops, 
        eu: 8,
        duration: 600
    },
    {
        item: "justdirethings:eclipsealloy_sword",
        probability: 0.04,
        dropTable: endDrops, 
        eu: 64,
        duration: 600
    },
    {
        item: "undergarden:cloggrum_sword",
        probability: 0.04,
        dropTable: undergardenDrops, 
        eu: 16,
        duration: 600
    },
];

ServerEvents.recipes((event) => {

    swords.forEach((sword) => {
        let item_outputs = []
        sword.dropTable.forEach((drop) => {
            item_outputs.push({
                item: drop.item,
                amount: 1,
                probability: drop.probability,
            });
        })
            
        event.custom({
            type: "modern_industrialization:quarry",
            eu: sword.eu,
            duration: sword.duration,
            item_inputs: {
                item: sword.item,
                amount: 1,
                probability: sword.probability,
            },
            item_outputs: item_outputs,
        });
    });
        
})
