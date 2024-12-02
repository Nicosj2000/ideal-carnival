// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shaped("darkutils:charm_portal", ["AAA", "BCB", " D "], {
      A: "immersiveengineering:wirecoil_structure_rope",
      B: "minecraft:crying_obsidian",
      C: "stevescarts:component_eye_of_galgador",
      D: "minecraft:crying_obsidian",
    })
    .id("ftbneotech:darkutils_crafting_charm_portal_eye_0");

  event
    .shaped("darkutils:charm_sleep", ["ACA", "CBC", "ACA"], {
      A: "modern_industrialization:bronze_ingot",
      B: "#minecraft:beds",
      C: "immersiveengineering:wirecoil_structure_rope",
    })
    .id("ftbneotech:darkutils_crafting_charm_sleep_0");

  event
    .shaped("darkutils:charm_warding", ["AAA", "BCB", " D "], {
      A: "immersiveengineering:wirecoil_structure_rope",
      B: "modern_industrialization:bronze_ingot",
      C: "minecraft:nether_star",
      D: "minecraft:totem_of_undying",
    })
    .id("ftbneotech:darkutils_crafting_charm_warding_0");

  event
    .shaped("darkutils:vector_plate", ["ADA", "BCB", "ABA"], {
      A: "darkutils:blank_plate",
      B: "playerplates:obsidian_plate",
      C: "modern_industrialization:rubber_sheet",
      D: "#bookshelf:slime_balls",
    })
    .id("ftbneotech:darkutils_crafting_vector_plate_0");

  event
    .shaped("darkutils:vector_plate_fast", ["AAA", "BCB", "AAA"], {
      A: "darkutils:vector_plate",
      B: "modern_industrialization:steel_plate",
      C: "pneumaticcraft:speed_upgrade",
    })
    .id("ftbneotech:darkutils_crafting_vector_plate_fast_0");

  event
    .shaped("darkutils:vector_plate_extreme", ["AAA", "BCB", "AAA"], {
      A: "darkutils:vector_plate_fast",
      B: "actuallyadditions:empowered_restonia_crystal",
      C: "pneumaticcraft:speed_upgrade",
    })
    .id("ftbneotech:darkutils_crafting_vector_plate_extreme_0");

  event
    .shaped("darkutils:damage_plate_maim", ["A B", " C ", "A A"], {
      A: "minecraft:shroomlight",
      B: "immersiveengineering:sword_steel",
      C: "darkutils:blank_plate",
    })
    .id("ftbneotech:darkutils_crafting_damage_plate_maim_0");

  event
    .shaped("darkutils:damage_plate", ["A B", " C ", "A A"], {
      A: "minecraft:crimson_fungus",
      B: "justdirethings:ferricore_sword",
      C: "darkutils:blank_plate",
    })
    .id("ftbneotech:darkutils_crafting_damage_plate_0");

  event
    .shaped("darkutils:flame_plate", ["A B", " C ", "A A"], {
      A: "minecraft:blaze_rod",
      B: "mob_grinding_utils:saw_upgrade_fire",
      C: "darkutils:blank_plate",
    })
    .id("ftbneotech:darkutils_crafting_flame_plate_0");

  event
    .shaped("darkutils:damage_plate_player", [" B ", "ACA", "DDD"], {
      A: "minecraft:warped_fungus",
      B: "justdirethings:celestigem_sword",
      C: "minecraft:phantom_membrane",
      D: "darkutils:damage_plate",
    })
    .id("ftbneotech:darkutils_crafting_damage_plate_player_from_phantom_0");

  event
    .shaped("darkutils:wither_plate", [" A ", "BCB", " D "], {
      A: "minecraft:flint",
      B: "minecraft:wither_rose",
      C: "darkutils:blank_plate",
      D: "cursedearth:cursed_earth",
    })
    .id("ftbneotech:darkutils_crafting_wither_plate_0");

  event
    .shaped("darkutils:slowness_plate", [" A ", "BCB", " D "], {
      A: "minecraft:soul_sand",
      B: "minecraft:snow_block",
      C: "darkutils:blank_plate",
      D: "cursedearth:cursed_earth",
    })
    .id("ftbneotech:darkutils_crafting_slowness_plate_0");

  event
    .shaped("darkutils:omen_plate", [" A ", "BCB", " D "], {
      A: "minecraft:nether_wart",
      B: "minecraft:totem_of_undying",
      C: "darkutils:blank_plate",
      D: "minecraft:nether_wart",
    })
    .id("ftbneotech:darkutils_crafting_ominous_plate_0");

  event
    .shaped("darkutils:bane_plate", [" A ", "BCB", " D "], {
      A: "minecraft:spider_eye",
      B: "ae2:fluix_sword",
      C: "darkutils:blank_plate",
      D: "minecraft:spider_eye",
    })
    .id("ftbneotech:darkutils_crafting_bane_plate_0");

  event
    .shaped("darkutils:smite_plate", [" A ", "BCB", " D "], {
      A: "minecraft:ghast_tear",
      B: "minecraft:iron_sword",
      C: "darkutils:blank_plate",
      D: "minecraft:ghast_tear",
    })
    .id("ftbneotech:darkutils_crafting_smite_plate_0");

  event
    .shaped("darkutils:weakness_plate", [" A ", "BCB", " D "], {
      A: "minecraft:brown_mushroom",
      B: "minecraft:fermented_spider_eye",
      C: "darkutils:blank_plate",
      D: "minecraft:brown_mushroom",
    })
    .id("ftbneotech:darkutils_crafting_weakness_plate_0");

  event
    .shaped("darkutils:frost_plate", [" A ", "BCB", " D "], {
      A: "minecraft:snowball",
      B: "minecraft:powder_snow_bucket",
      C: "darkutils:blank_plate",
      D: "minecraft:snowball",
    })
    .id("ftbneotech:darkutils_crafting_frost_plate_0");

  event
    .shaped("darkutils:anchor_plate", [" A ", "BCB", " D "], {
      A: "minecraft:slime_block",
      B: "minecraft:slime_ball",
      C: "darkutils:blank_plate",
      D: "minecraft:slime_block",
    })
    .id("ftbneotech:darkutils_crafting_anchor_plate_0");

  event
    .shaped("darkutils:slowfall_plate", [" A ", "BCB", " D "], {
      A: "minecraft:feather",
      B: "minecraft:phantom_membrane",
      C: "darkutils:blank_plate",
      D: "minecraft:feather",
    })
    .id("ftbneotech:darkutils_crafting_slowfall_plate_0");

  event
    .shaped("darkutils:levitation_plate", [" A ", "BCB", " D "], {
      A: "minecraft:feather",
      B: "minecraft:popped_chorus_fruit",
      C: "darkutils:blank_plate",
      D: "minecraft:feather",
    })
    .id("ftbneotech:darkutils_crafting_levitation_plate_0");

  event
    .shaped("darkutils:alert_plate", [" A ", "BCB", " D "], {
      A: "minecraft:glowstone_dust",
      B: "minecraft:glow_ink_sac",
      C: "darkutils:blank_plate",
      D: "minecraft:glowstone_dust",
    })
    .id("ftbneotech:darkutils_crafting_alert_plate_0");

  event
    .shaped("darkutils:misfortune_plate", [" A ", "BCB", " D "], {
      A: "minecraft:phantom_membrane",
      B: "minecraft:gold_ingot",
      C: "darkutils:blank_plate",
      D: "minecraft:phantom_membrane",
    })
    .id("ftbneotech:darkutils_crafting_misfortune_plate_0");

  const stew = Item.of(
    "minecraft:suspicious_stew",
    '{effects:[{duration:240,id:"minecraft:poison"}]}'
  );
  event
    .shaped("darkutils:poison_plate", [" A ", "BCB", " D "], {
      A: "minecraft:poisonous_potato",
      B: "minecraft:spider_eye",
      C: stew,
      D: "minecraft:poisonous_potato",
    })
    .id("ftbneotech:darkutils_crafting_poison_plate_0");

  event
    .shaped("darkutils:hunger_plate", [" A ", "BCB", " D "], {
      A: "minecraft:rotten_flesh",
      B: "minecraft:nether_wart",
      C: "darkutils:blank_plate",
      D: "minecraft:rotten_flesh",
    })
    .id("ftbneotech:darkutils_crafting_hunger_plate_0");

  event
    .shaped("darkutils:darkness_plate", [" A ", "BCB", " D "], {
      A: "minecraft:ink_sac",
      B: "minecraft:phantom_membrane",
      C: "darkutils:blank_plate",
      D: "minecraft:ink_sac",
    })
    .id("ftbneotech:darkutils_crafting_darkness_plate_0");

  event
    .shaped("darkutils:filter_player", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:golden_pickaxe",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_player_0");

  event
    .shaped("darkutils:filter_undead", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:bone",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_undead_0");

  event
    .shaped("darkutils:filter_arthropod", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:spider_eye",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_arthropod_0");

  event
    .shaped("darkutils:filter_illager", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:crossbow",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_illager_0");

  event
    .shaped("darkutils:filter_raider", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:bell",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_raid_0");

  event
    .shaped("darkutils:filter_hostile", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:rotten_flesh",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_hostile_0");

  event
    .shaped("darkutils:filter_animal", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:hay_block",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_animal_0");

  event
    .shaped("darkutils:filter_child", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:egg",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_child_0");

  event
    .shaped("darkutils:filter_pet", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:milk_bucket",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_pet_0");

  event
    .shaped("darkutils:filter_passenger", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:minecart",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_passenger_0");

  event
    .shaped("darkutils:filter_equipment", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:golden_chestplate",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_equipment_0");

  event
    .shaped("darkutils:filter_freeze_immune", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:powder_snow_bucket",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_freeze_immune_0");

  event
    .shaped("darkutils:filter_named", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:name_tag",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_named_0");

  event
    .shaped("darkutils:filter_water", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:water_bucket",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_water_0");

  event
    .shaped("darkutils:filter_golem", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:carved_pumpkin",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_golem_0");

  event
    .shaped("darkutils:filter_slime", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "#bookshelf:slime_balls",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_slime_0");

  event
    .shaped("darkutils:filter_villager", ["AAA", "BCB", "DDD"], {
      A: "#bookshelf:stones",
      B: "#minecraft:fence_gates",
      C: "minecraft:emerald",
      D: "#bookshelf:stones",
    })
    .id("ftbneotech:darkutils_crafting_filter_villager_0");
});
