// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shaped("mob_grinding_utils:jumbo_tank", ["ATA", "T T", "ATA"], {
      A: "modern_industrialization:titanium_plate",
      T: "mob_grinding_utils:tank",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_jumbotank_0");

  event
    .shaped("mob_grinding_utils:xp_tap", ["AB ", "CD ", "E  "], {
      A: "#forge:obsidian",
      B: "minecraft:slime_ball",
      C: "modern_industrialization:iron_gear",
      D: "modern_industrialization:iron_ring",
      E: "#forge:ingots/iron",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_xp_tap_0");

  event
    .shapeless("mob_grinding_utils:solid_xp_mould_blank", [
      "modern_industrialization:bronze_plate",
    ])
    .id("ftbneotech:mob_grinding_utils_recipe_mould_blank_0");

  event
    .shaped("mob_grinding_utils:absorption_hopper", ["   ", " E ", " OI"], {
      E: "minecraft:ender_eye",
      O: "#forge:obsidian",
      I: "pneumaticcraft:liquid_hopper",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_absorbtion_hopper_0");

  event
    .shaped("mob_grinding_utils:spikes", [" I ", "ISI", "OOO"], {
      I: "minecraft:iron_sword",
      S: "#forge:storage_blocks/iron",
      O: "minecraft:obsidian",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_spikes_0");

  event
    .shaped("mob_grinding_utils:saw", ["ACA", "BDB", "CEC"], {
      A: "justdirethings:ferricore_sword",
      B: "mob_grinding_utils:spikes",
      C: "actuallyadditions:diamatine_crystal",
      D: "modern_industrialization:redstone_battery",
      E: "minecraft:obsidian",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_0");

  event
    .shaped("mob_grinding_utils:fan", ["ABA", "BCB", "ABA"], {
      A: "actuallyadditions:black_quartz_slab",
      B: "modern_industrialization:iron_plate",
      C: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_fan_0");

  event
    .shaped("mob_grinding_utils:xpsolidifier", [" P ", "CC ", " T "], {
      P: "minecraft:piston",
      C: "mob_grinding_utils:entity_conveyor",
      T: "mob_grinding_utils:tank",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_solidifier_0");

  event
    .shaped("mob_grinding_utils:entity_conveyor", ["APA", "PRP", "PSP"], {
      A: "modern_industrialization:iron_plate",
      P: "minecraft:redstone_block",
      R: "#forge:slimeballs",
      S: "pneumaticcraft:speed_upgrade",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_entity_conveyor_0");

  event
    .shaped("mob_grinding_utils:entity_spawner", ["EEE", "ECF", "GHG"], {
      E: "minecraft:ender_eye",
      F: "mob_grinding_utils:solid_xp_block",
      C: "modern_industrialization:electronic_circuit",
      G: "modern_industrialization:steel_large_plate",
      H: "minecraft:piston",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_entity_spawner_0");

  event
    .shaped("mob_grinding_utils:mob_swab", ["  F", " S ", "F  "], {
      F: "immersiveengineering:hemp_fabric",
      S: "forcecraft:force_stick",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_mob_swab_0");

  event
    .shaped("mob_grinding_utils:tinted_glass", ["ADA", "BCB", "ADA"], {
      A: "mekanism:dust_obsidian",
      B: "#forge:glass",
      C: "justdirethings:coal_t1",
      D: "modern_industrialization:steel_plate",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_tintedglass_0");

  event
    .shaped("mob_grinding_utils:ender_inhibitor_on", [" A ", "BCB", "BDB"], {
      A: "actuallyadditions:void_crystal",
      B: "modern_industrialization:steel_plate",
      C: "minecraft:ender_eye",
      D: "#forge:dusts/glowstone",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_ender_inhibitor_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_arthropod", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:bronze_plate",
      B: "minecraft:spider_eye",
      C: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_arthropod_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_beheading", ["ABA", "BCB", "ADA"], {
      A: "modern_industrialization:bronze_plate",
      B: "minecraft:wither_skeleton_skull",
      C: "actuallyadditions:restonia_crystal",
      D: "minecraft:iron_helmet"
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_beheading_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_smite", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:bronze_plate",
      B: "minecraft:rotten_flesh",
      C: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_smite_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_fire", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:bronze_plate",
      B: "minecraft:fire_charge",
      C: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_fire_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_sharpness", ["ABA", "BCB", "ADA"], {
      A: "modern_industrialization:bronze_plate",
      B: "undergarden:froststeel_sword",
      C: "actuallyadditions:restonia_crystal",
      D: "immersiveengineering:sword_steel",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_sharpness_0");

  event
    .shaped("mob_grinding_utils:saw_upgrade_looting", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:bronze_plate",
      B: "minecraft:rabbit_foot",
      C: "actuallyadditions:restonia_crystal"
    })
    .id("ftbneotech:mob_grinding_utils_recipe_saw_upgrade_looting_0");

  event
    .shaped("mob_grinding_utils:absorption_upgrade", [" A ", "BCB", "DAD"], {
      A: "#forge:ender_pearls",
      B: "actuallyadditions:restonia_crystal",
      C: "minecraft:hopper",
      D: "modern_industrialization:steel_plate",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_absorbtion_upgrade_0");

  event
    .shaped("mob_grinding_utils:spawner_upgrade_width", ["ABA", "C C", "ADA"], {
      A: "modern_industrialization:bronze_plate",
      B: "actuallyadditions:restonia_crystal",
      C: "minecraft:blaze_powder",
      D: "minecraft:egg",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_spawner_upgrade_width_0");

  event
    .shaped(
      "mob_grinding_utils:spawner_upgrade_height",
      ["ABA", " C ", "ADA"],
      {
        A: "modern_industrialization:bronze_plate",
        B: "minecraft:blaze_powder",
        C: "actuallyadditions:restonia_crystal",
        D: "minecraft:egg",
      }
    )
    .id("ftbneotech:mob_grinding_utils_recipe_spawner_upgrade_height_0");

  event
    .shaped("mob_grinding_utils:xp_solidifier_upgrade", ["ABA", " C ", "DAE"], {
      A: "modern_industrialization:bronze_plate",
      B: "actuallyadditions:restonia_crystal",
      C: "minecraft:blaze_powder",
      D: "minecraft:sugar",
      E: "modern_industrialization:bronze_plate",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_xpsolidifier_upgrade_0");

  event
    .shaped("mob_grinding_utils:fan_upgrade_width", ["A A", "BBB", "A A"], {
      A: "modern_industrialization:steel_plate",
      B: "#forge:feathers",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_fan_upgrade_width_0");

  event
    .shaped("mob_grinding_utils:fan_upgrade_height", ["ABA", " B ", "ABA"], {
      A: "modern_industrialization:steel_plate",
      B: "#forge:feathers",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_fan_upgrade_height_0");

  event
    .shaped("mob_grinding_utils:fan_upgrade_speed", ["ABA", "BCB", "ABA"], {
      A: "#forge:feathers",
      B: "modern_industrialization:steel_plate",
      C: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_fan_upgrade_speed_0");

  event
    .shaped("mob_grinding_utils:tank", ["ABA", "B B", "ABA"], {
      A: "modern_industrialization:steel_plate",
      B: "#forge:glass",
    })
    .id("ftbneotech:mob_grinding_utils_recipe_tank_0");
});
