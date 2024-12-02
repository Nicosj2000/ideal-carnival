// priority: 1

const reiBlacklist = [
  "ae2:facade",
  "darkutils:crafting/vector_plate_extreme",
  "darkutils:crafting/vector_plate_fast",
  "darkutils:crafting/vector_plate",
  "darkutils:vector_plate_ultra",
  "forcecraft:spoils_bag_t2",
  "forcecraft:spoils_bag_t3",
  "forcecraft:spoils_bag",
  "mekanism:creative_chemical_tank",
  "mekanism:creative_fluid_tank",
  "farmersdelight:bacon",
  "farmersdelight:cooked_bacon",
];

const yieldBlacklist = [
  "#forge:coals",
  "laserio:logic_chip",
  "#pneumaticcraft:plastic_sheets",
  "forcecraft:golden_power_source",
  "immersiveengineering:ingot_hop_graphite",
  "stevescarts:component_refined_hardener",
  "#forge:rods",
  "#forge:rods/all_metal",
  "#forge:wires",
  "stevescarts:component_galgadorian_metal",

]

const miHammers = [
  "justhammers:gold_reinforced_hammer",
  "justhammers:diamond_reinforced_hammer",
  "justhammers:netherite_reinforced_hammer",
  "justhammers:iron_reinforced_impact_hammer",
  "justhammers:gold_reinforced_impact_hammer",
  "justhammers:diamond_reinforced_impact_hammer",
  "justhammers:netherite_reinforced_impact_hammer",
  "justhammers:iron_destructor_hammer",
  "justhammers:gold_destructor_hammer",
  "justhammers:diamond_destructor_hammer",
  "justhammers:netherite_destructor_hammer",
  "justhammers:iron_reinforced_hammer",
  "justhammers:netherite_impact_hammer",
  "justhammers:diamond_impact_hammer",
  "justhammers:gold_impact_hammer",
  "justhammers:diamond_hammer",
  "justhammers:netherite_hammer",
  "justhammers:iron_impact_hammer",
  "justhammers:gold_hammer",
  "justhammers:iron_hammer",
  "modern_industrialization:steel_hammer"
];

const emcDenyList = [
  "modern_industrialization:nickel_ore",
  "modern_industrialization:antimony_ore",
  "modern_industrialization:monazite_ore",
  "modern_industrialization:lignite_coal_ore",
  "modern_industrialization:lead_ore",
  "modern_industrialization:iridium_ore",
  "modern_industrialization:bauxite_ore",
  "modern_industrialization:salt_ore",
  "modern_industrialization:tin_ore",
  "modern_industrialization:tungsten_ore",
  "modern_industrialization:uranium_ore",
  "modern_industrialization:antimony_dust",
  "modern_industrialization:antimony_tiny_dust",
  "modern_industrialization:battery_alloy_dust",
  "modern_industrialization:battery_alloy_tiny_dust",
  "modern_industrialization:bauxite_dust",
  "modern_industrialization:bauxite_tiny_dust",
  "modern_industrialization:beryllium_dust",
  "modern_industrialization:beryllium_tiny_dust",
  "modern_industrialization:brick_dust",
  "modern_industrialization:brick_tiny_dust",
  "modern_industrialization:bronze_dust",
  "modern_industrialization:bronze_tiny_dust",
  "modern_industrialization:cadmium_dust",
  "modern_industrialization:cadmium_tiny_dust",
  "modern_industrialization:carbon_dust",
  "modern_industrialization:carbon_tiny_dust",
  "modern_industrialization:chromium_dust",
  "modern_industrialization:chromium_tiny_dust",
  "modern_industrialization:coal_dust",
  "modern_industrialization:coal_tiny_dust",
  "modern_industrialization:copper_dust",
  "modern_industrialization:copper_tiny_dust",
  "modern_industrialization:cupronickel_dust",
  "modern_industrialization:cupronickel_tiny_dust",
  "modern_industrialization:diamond_dust",
  "modern_industrialization:diamond_tiny_dust",
  "mekanism:dust_obsidian",
  "mekanism:dust_lithium",
  "immersiveengineering:dust_saltpeter",
  "immersiveengineering:dust_constantan",
  "ae2:ender_dust",
  "modern_industrialization:aluminum_dust",
  "modern_industrialization:aluminum_tiny_dust",
  "modern_industrialization:annealed_copper_dust",
  "modern_industrialization:annealed_copper_tiny_dust",
  "modern_industrialization:electrum_dust",
  "modern_industrialization:electrum_tiny_dust",
  "modern_industrialization:emerald_dust",
  "modern_industrialization:emerald_tiny_dust",
  "modern_industrialization:fire_clay_dust",
  "modern_industrialization:gold_dust",
  "modern_industrialization:gold_tiny_dust",
  "modern_industrialization:he_mox_dust",
  "modern_industrialization:he_mox_tiny_dust",
  "modern_industrialization:he_uranium_dust",
  "modern_industrialization:he_uranium_tiny_dust",
  "modern_industrialization:invar_dust",
  "modern_industrialization:invar_tiny_dust",
  "modern_industrialization:iridium_dust",
  "modern_industrialization:iridium_tiny_dust",
  "modern_industrialization:iron_dust",
  "modern_industrialization:iron_tiny_dust",
  "modern_industrialization:kanthal_dust",
  "modern_industrialization:kanthal_tiny_dust",
  "modern_industrialization:lapis_dust",
  "modern_industrialization:lapis_tiny_dust",
  "modern_industrialization:le_mox_dust",
  "modern_industrialization:le_mox_tiny_dust",
  "modern_industrialization:le_uranium_dust",
  "modern_industrialization:le_uranium_tiny_dust",
  "modern_industrialization:lead_dust",
  "modern_industrialization:lead_tiny_dust",
  "modern_industrialization:lignite_coal_dust",
  "modern_industrialization:lignite_coal_tiny_dust",
  "modern_industrialization:manganese_dust",
  "modern_industrialization:manganese_tiny_dust",
  "modern_industrialization:monazite_dust",
  "modern_industrialization:monazite_tiny_dust",
  "modern_industrialization:neodymium_dust",
  "modern_industrialization:neodymium_tiny_dust",
  "modern_industrialization:ruby_tiny_dust",
  "modern_industrialization:salt_dust",
  "modern_industrialization:salt_tiny_dust",
  "modern_industrialization:silicon_dust",
  "modern_industrialization:silicon_tiny_dust",
  "modern_industrialization:silver_dust",
  "modern_industrialization:silver_tiny_dust",
  "modern_industrialization:sodium_dust",
  "modern_industrialization:sodium_tiny_dust",
  "modern_industrialization:soldering_alloy_dust",
  "modern_industrialization:soldering_alloy_tiny_dust",
  "modern_industrialization:stainless_steel_dust",
  "modern_industrialization:stainless_steel_tiny_dust",
  "modern_industrialization:uncooked_steel_dust",
  "modern_industrialization:steel_dust",
  "modern_industrialization:steel_tiny_dust",
  "modern_industrialization:sulfur_dust",
  "modern_industrialization:sulfur_tiny_dust",
  "modern_industrialization:superconductor_dust",
  "modern_industrialization:superconductor_tiny_dust",
  "modern_industrialization:tin_dust",
  "modern_industrialization:tin_tiny_dust",
  "modern_industrialization:titanium_dust",
  "modern_industrialization:titanium_tiny_dust",
  "modern_industrialization:tungsten_dust",
  "modern_industrialization:tungsten_tiny_dust",
  "modern_industrialization:uranium_tiny_dust",
  "modern_industrialization:nickel_dust",
  "modern_industrialization:nickel_tiny_dust",
  "modern_industrialization:platinum_dust",
  "modern_industrialization:platinum_tiny_dust",
  "modern_industrialization:plutonium_dust",
  "modern_industrialization:plutonium_tiny_dust",
  "modern_industrialization:quartz_dust",
  "modern_industrialization:quartz_tiny_dust",
  "modern_industrialization:redstone_tiny_dust",
  "jaopca:dusts.utherium",
  "modern_industrialization:uranium_235_dust",
  "modern_industrialization:uranium_235_tiny_dust",
  "modern_industrialization:uranium_238_dust",
  "modern_industrialization:uranium_238_tiny_dust",
  "modern_industrialization:yttrium_tiny_dust",
  "jaopca:dusts.cloggrum",
  "jaopca:dusts.froststeel",
  "jaopca:dusts.regalium",
  "modern_industrialization:yttrium_dust",
  "actuallyadditions:restonia_crystal",
  "actuallyadditions:palis_crystal",
  "actuallyadditions:diamatine_crystal",
  "actuallyadditions:void_crystal",
  "actuallyadditions:emeradic_crystal",
  "actuallyadditions:enori_crystal",
  "actuallyadditions:empowered_restonia_crystal",
  "actuallyadditions:empowered_emeradic_crystal",
  "actuallyadditions:empowered_enori_crystal",
  "actuallyadditions:handheld_filler",
  "actuallyadditions:ring_of_magnetizing",
  "actuallyadditions:teleport_staff",
  "actuallyadditions:drill_light_blue",
  "actuallyadditions:drill_black",
  "actuallyadditions:drill_blue",
  "actuallyadditions:drill_brown",
  "actuallyadditions:drill_cyan",
  "actuallyadditions:drill_gray",
  "actuallyadditions:drill_green",
  "actuallyadditions:drill_light_gray",
  "actuallyadditions:drill_lime",
  "actuallyadditions:drill_magenta",
  "actuallyadditions:drill_orange",
  "actuallyadditions:drill_pink",
  "actuallyadditions:drill_purple",
  "actuallyadditions:drill_red",
  "actuallyadditions:drill_white",
  "actuallyadditions:drill_yellow",
  "actuallyadditions:single_battery",
  "actuallyadditions:double_battery",
  "actuallyadditions:triple_battery",
  "actuallyadditions:quadruple_battery",
  "actuallyadditions:quintuple_battery",
  "actuallyadditions:restonia_crystal_shard",
  "actuallyadditions:palis_crystal_shard",
  "actuallyadditions:diamatine_crystal_shard",
  "actuallyadditions:void_crystal_shard",
  "actuallyadditions:emeradic_crystal_shard",
  "actuallyadditions:enori_crystal_shard",
  "actuallyadditions:empowered_palis_crystal",
  "actuallyadditions:empowered_diamatine_crystal",
  "actuallyadditions:empowered_void_crystal",
  "actuallyadditions:single_battery",
  "actuallyadditions:double_battery",
  "actuallyadditions:triple_battery",
  "actuallyadditions:quadruple_battery",
  "actuallyadditions:quintuple_battery",
  "actuallyadditions:drill_upgrade_speed",
  "actuallyadditions:drill_upgrade_speed_ii",
  "actuallyadditions:drill_upgrade_speed_iii",
  "actuallyadditions:drill_upgrade_silk_touch",
  "actuallyadditions:drill_upgrade_fortune",
  "actuallyadditions:drill_upgrade_fortune_ii",
  "actuallyadditions:drill_upgrade_three_by_three",
  "actuallyadditions:drill_upgrade_five_by_five",
  "actuallyadditions:drill_upgrade_block_placing",
  "actuallyadditions:phantom_connector",
  "actuallyadditions:leaf_blower",
  "actuallyadditions:advanced_leaf_blower",
  "actuallyadditions:wooden_aiot",
  "actuallyadditions:stone_aiot",
  "actuallyadditions:iron_aiot",
  "actuallyadditions:gold_aiot",
  "actuallyadditions:diamond_aiot",
  "actuallyadditions:netherite_aiot",
  "actuallyadditions:iron_casing",
  "actuallyadditions:ender_casing",
  "actuallyadditions:lava_factory_casing",
  "actuallyadditions:feeder",
  "actuallyadditions:crusher",
  "actuallyadditions:crusher_double",
  "actuallyadditions:energizer",
  "actuallyadditions:enervator",
  "actuallyadditions:lava_factory_controller",
  "actuallyadditions:lamp_controller",
  "actuallyadditions:canola_press",
  "actuallyadditions:oil_generator",
  "actuallyadditions:coal_generator",
  "actuallyadditions:vertical_digger",
  "actuallyadditions:atomic_reconstructor",
  "actuallyadditions:ranged_collector",
  "actuallyadditions:long_range_breaker",
  "actuallyadditions:coffee_machine",
  "actuallyadditions:powered_furnace",
  "actuallyadditions:enori_crystal_block",
  "actuallyadditions:restonia_crystal_block",
  "actuallyadditions:palis_crystal_block",
  "actuallyadditions:diamatine_crystal_block",
  "actuallyadditions:void_crystal_block",
  "actuallyadditions:emeradic_crystal_block",
  "actuallyadditions:empowered_enori_crystal_block",
  "actuallyadditions:empowered_restonia_crystal_block",
  "actuallyadditions:empowered_palis_crystal_block",
  "actuallyadditions:empowered_diamatine_crystal_block",
  "actuallyadditions:empowered_void_crystal_block",
  "actuallyadditions:empowered_emeradic_crystal_block",
  "actuallyadditions:empowerer",
  "actuallyadditions:display_stand",
  "actuallyadditions:player_interface",
  "actuallyadditions:item_interface",
  "actuallyadditions:hopping_item_interface",
  "actuallyadditions:phantom_breaker",
  "actuallyadditions:battery_box",
  "actuallyadditions:firework_box",
  "actuallyadditions:shock_suppressor",
  "actuallyadditions:coal_generator",
  "actuallyadditions:leaf_generator",
  "actuallyadditions:breaker",
  "actuallyadditions:placer",
  "actuallyadditions:dropper",
  "actuallyadditions:fluid_placer",
  "actuallyadditions:fluid_collector",
  "actuallyadditions:farmer",
  "actuallyadditions:bio_reactor",
  "actuallyadditions:black_quartz_brick_wall",
  "actuallyadditions:black_quartz_pillar_wall",
  "actuallyadditions:ethetic_green_slab",
  "actuallyadditions:ethetic_white_slab",
  "actuallyadditions:black_quartz_slab",
  "actuallyadditions:chiseled_black_quartz_slab",
  "actuallyadditions:black_quartz_pillar_slab",
  "actuallyadditions:smooth_black_quartz_slab",
  "actuallyadditions:black_quartz_brick_slab",
  "actuallyadditions:ethetic_green_stairs",
  "actuallyadditions:ethetic_white_stairs",
  "actuallyadditions:black_quartz_stair",
  "actuallyadditions:chiseled_black_quartz_stair",
  "actuallyadditions:black_quartz_pillar_stair",
  "actuallyadditions:smooth_black_quartz_stair",
  "actuallyadditions:black_quartz_brick_stair",
  "actuallyadditions:smooth_black_quartz_wall",
  "actuallyadditions:chiseled_black_quartz_wall",
  "actuallyadditions:black_quartz_wall",
  "actuallyadditions:ethetic_white_wall",
  "actuallyadditions:ethetic_green_wall",
  "actuallyadditions:chiseled_black_quartz_block",
  "actuallyadditions:black_quartz_pillar_block",
  "actuallyadditions:black_quartz_block",
  "actuallyadditions:heat_collector",
  "modern_industrialization:le_mox_ingot",
  "modern_industrialization:le_uranium_ingot",
  "modern_industrialization:kanthal_ingot",
  "modern_industrialization:iridium_ingot",
  "modern_industrialization:he_uranium_ingot",
  "modern_industrialization:superconductor_ingot",
  "modern_industrialization:titanium_ingot",
  "modern_industrialization:tungsten_ingot",
  "modern_industrialization:uranium_238_ingot",
  "modern_industrialization:uranium_ingot",
  "modern_industrialization:uranium_235_ingot",
  "modern_industrialization:steel_ingot",
  "modern_industrialization:stainless_steel_ingot",
  "modern_industrialization:plutonium_ingot",
  "undergarden:froststeel_ingot",
  "justdirethings:blazegold_ingot",
  "justdirethings:eclipsealloy_ingot",
  "undergarden:cloggrum_ingot",
  "mekanism:ingot_osmium",
  "mekanism:ingot_refined_glowstone",
  "mekanism:ingot_refined_obsidian",
  "modern_industrialization:aluminum_ingot",
  "modern_industrialization:annealed_copper_ingot",
  "modern_industrialization:battery_alloy_ingot",
  "modern_industrialization:beryllium_ingot",
  "modern_industrialization:blastproof_alloy_ingot",
  "modern_industrialization:cadmium_ingot",
  "undergarden:forgotten_ingot",
  "justdirethings:ferricore_ingot",
  "modern_industrialization:he_mox_ingot",
  "modern_industrialization:cupronickel_ingot",
  "modern_industrialization:chromium_ingot",
  "modern_industrialization:platinum_ingot",
];

const removeFromDarkPlates = [
  "minecraft:smooth_basalt",
  "minecraft:chiseled_deepslate",
  "minecraft:cracked_deepslate_tiles",
  "minecraft:polished_basalt",
  "minecraft:blackstone",
  "minecraft:deepslate",
  "minecraft:cobbled_deepslate",
  "minecraft:chiseled_polished_blackstone",
  "minecraft:polished_blackstone",
  "minecraft:polished_deepslate",
  "minecraft:deepslate_bricks",
  "minecraft:basalt",
  "minecraft:deepslate_tiles",
  "minecraft:cracked_deepslate_bricks",
  "minecraft:cracked_polished_blackstone_bricks",
  "minecraft:polished_blackstone_bricks",
];

const temporalBlacklist = [
  "pneumaticcraft:heat_pipe",
  "pneumaticcraft:pressure_tube",
  "pneumaticcraft:reinforced_pressure_tube",
  "pneumaticcraft:advanced_pressure_tube",
  "chickens:breeder",
  "forcecraft:time_torch",
];

const fibers = [
  "immersiveengineering:hemp_fiber",
  "pamhc2crops:cottonitem",
  "pamhc2crops:flaxitem",
  "pamhc2crops:juteitem",
  "pamhc2crops:kenafitem",
  "pamhc2crops:sisalitem",
  "pamhc2crops:yuccaitem",
];

const addRods = [
  "modern_industrialization:le_uranium_rod",
  "modern_industrialization:invar_rod",
  "modern_industrialization:le_mox_rod",
  "modern_industrialization:he_uranium_rod",
  "modern_industrialization:he_mox_rod",
  "modern_industrialization:gold_rod",
  "modern_industrialization:copper_rod",
  "modern_industrialization:cadmium_rod",
  "modern_industrialization:stainless_steel_rod",
  "modern_industrialization:steel_rod",
  "modern_industrialization:tin_rod",
  "modern_industrialization:titanium_rod",
  "modern_industrialization:tungsten_rod",
  "modern_industrialization:uranium_rod",
  "modern_industrialization:bronze_rod",
];

const removeFromBasePlates = [
  "minecraft:deepslate_bricks",
  "minecraft:cracked_deepslate_bricks",
  "minecraft:deepslate_tiles",
  "minecraft:cracked_deepslate_tiles",
  "minecraft:chiseled_deepslate",
  "minecraft:blackstone",
  "minecraft:polished_blackstone",
  "minecraft:chiseled_polished_blackstone",
  "minecraft:polished_blackstone_bricks",
  "minecraft:cracked_polished_blackstone_bricks",
  "minecraft:basalt",
  "minecraft:polished_basalt",
  "minecraft:smooth_basalt",
  "minecraft:deepslate",
  "minecraft:cobbled_deepslate",
  "minecraft:polished_deepslate",
];

ServerEvents.tags("block_entity_type", (event) => {
  temporalBlacklist.forEach((block) => {
    event.add("gag:do_not_accelerate", block);
  });
});

ServerEvents.tags("item", (event) => {
  emcDenyList.forEach((id) => {
    event.add("equivalentexchange:emcdenylist", id);
  });

  yieldBlacklist.forEach((id) => {
    event.add("enchantableblocks:yield_blacklist", id);
  });
  event.add("enchantableblocks:yield_blacklist", "#forge:ingots");
  event.add("enchantableblocks:yield_blacklist", "#forge:nuggets");

  removeFromDarkPlates.forEach((id) => {
    event.remove("darkutils:plate_base", id);
  });

  removeFromBasePlates.forEach((id) => {
    event.remove("darkutils:plate_base", id);
  });

  event.add("ftbneotech:miner_stones", "#forge:stone");
  event.remove("ftbneotech:miner_stones", "undergarden:depthrock");
  event.add("forge:skystone", ["ae2:sky_stone_block"]);
  event.add("neoforge:crops/coffeebean", ["actuallyadditions:coffee_beans"]);
  event.add("neoforge:seeds/coffeebean", ["actuallyadditions:coffee_beans"]);
  event.add("forge:understone", ["undergarden:depthrock"]);
  event.add("forge:dusts/flour", "pamhc2foodcore:flouritem");

  miHammers.forEach((hammer) => {
    event.add("modern_industrialization:forge_hammer_tools", hammer);
  });

  event.add("forge:coal_coke", ["modern_industrialization:coke"]);
  event.add("forge:dusts/coal_coke", ["modern_industrialization:coke_dust"]);
  event.add("forge:dusts/gold", ["modern_industrialization:gold_dust"]);
  event.add("forge:storage_blocks/coal_coke", [
    "modern_industrialization:coke_block",
  ]);

  //Unifying Salt
  event.add("neoforge:salt", ["modern_industrialization:salt_dust"]);
  event.add("forge:salt/salt", ["modern_industrialization:salt_dust"]);
  event.add("neoforge:salt/salt", ["modern_industrialization:salt_dust"]);
  event.add("cookingforblockheads:ingredients", ["modern_industrialization:salt_dust"]);
  event.add("c:salt", ["modern_industrialization:salt_dust"]);
  event.add("c:salt/salt", ["modern_industrialization:salt_dust"]);

  global["unUnified"].forEach((id) => {
    event.removeAllTagsFrom(id);
    event.add("c:hidden_from_recipe_viewers", id);
  });

  global["hideOres"].forEach((id) => {
    event.removeAllTagsFrom(id);
    event.add("c:hidden_from_recipe_viewers", id);
  });

  event.add(
    "ftb:spawn_eggs",
    /\b(?!(chicken|productivebees.)_spawn_egg)\w+_spawn_egg\b/
  );
  event.add("ftb:spawn_eggs", /^.*:spawn_egg.*/);
  event.add("forge:carbon_dusts", [
    "modern_industrialization:coal_dust",
    "mekanism:dust_charcoal",
  ]);

  fibers.forEach((fiber) => {
    event.add("forge:fiber", fiber);
  });

  event.add("neoforge:seeds", ["actuallyadditions:canola_seeds"]);
  event.add("neoforge:seeds/canola", ["actuallyadditions:canola_seeds"]);

  event.add("neoforge:seeds", ["actuallyadditions:rice_seeds"]);
  event.add("neoforge:seeds/rice", ["actuallyadditions:rice_seeds"]);

  event.add("neoforge:seeds", ["actuallyadditions:flax_seeds"]);
  event.add("neoforge:seeds/flax", ["actuallyadditions:flax_seeds"]);

  //Fixing Deepslate Tag
  event.add("forge:deepslate", ["minecraft:deepslate"]);

  //Bacon Unification
  event.remove("forge:raw_bacon", ["farmersdelight:bacon"]);
  event.remove("forge:raw_pork", ["farmersdelight:bacon"]);
  event.remove("farmersdelight:cabbage_roll_ingredients", [
    "farmersdelight:bacon",
  ]);
  event.remove("forge:cooked_bacon", ["farmersdelight:cooked_bacon"]);
  event.remove("forge:cooked_pork", ["farmersdelight:cooked_bacon"]);

  event.add("forge:raw_bacon", ["forcecraft:raw_bacon"]);
  event.add("forge:raw_pork", ["forcecraft:raw_bacon"]);
  event.add("farmersdelight:cabbage_roll_ingredients", [
    "forcecraft:raw_bacon",
  ]);
  event.add("forge:cooked_bacon", ["forcecraft:cooked_bacon"]);
  event.add("forge:cooked_pork", ["forcecraft:cooked_bacon"]);

  event.add("itemfilters:check_nbt", ["patchouli:guide_book"]);

  event.add("c:hidden_from_recipe_viewers", reiBlacklist);

  //rods
  addRods.forEach((rod) => {
    var rodName = rod.split("modern_industrialization:")[1].replace("_rod", "");
    event.add("forge:rods/" + rodName, rod);
    event.add("forge:rods/all_metal", rod);
  });

  event.add("forge:rods/iron", ["modern_industrialization:iron_rod"]);
  event.add("forge:rods/aluminum", ["modern_industrialization:aluminum_rod"]);
  event.add("forge:rods/steel", ["modern_industrialization:steel_rod"]);
  event.add("forge:rods/all_metal", [
    "modern_industrialization:iron_rod",
    "modern_industrialization:steel_rod",
    "modern_industrialization:aluminum_rod",
  ]);

  //Unifying Wires
  event.add("forge:wires", [
    "modern_industrialization:aluminum_wire",
    "modern_industrialization:annealed_copper_wire",
    "modern_industrialization:copper_wire",
    "modern_industrialization:cupronickel_wire",
    "modern_industrialization:cupronickel_wire_magnetic",
    "modern_industrialization:electrum_wire",
    "modern_industrialization:kanthal_wire",
    "modern_industrialization:platinum_wire",
    "modern_industrialization:silver_wire",
    "modern_industrialization:superconductor_wire",
    "modern_industrialization:tin_wire",
  ]);
  event.add("forge:wires/copper", "modern_industrialization:copper_wire");
  event.add("forge:wires/electrum", "modern_industrialization:electrum_wire");
  event.add("forge:wires/aluminum", "modern_industrialization:aluminum_wire");

  event.remove("forge:wires/copper", "immersiveengineering:wire_copper");
  event.remove("forge:wires/electrum", "immersiveengineering:wire_electrum");
  event.remove("forge:wires/aluminum", "immersiveengineering:wire_aluminum");
});

const buildingGadgetsBlacklist = [
  "pneumaticcraft:heat_pipe",
  "pneumaticcraft:heat_pipe",
  "pneumaticcraft:pressure_tube",
  "pneumaticcraft:reinforced_pressure_tube",
  "pneumaticcraft:advanced_pressure_tube",
];

ServerEvents.tags("block", (event) => {
  event.add("forge:understone", ["undergarden:depthrock"]);
  buildingGadgetsBlacklist.forEach((block) => {
    event.get("buildinggadgets:blacklist/generic").add(block);
  });

  event.add("forge:storage_blocks/uranium", ["modern_industrialization:uranium_block"]);

  addMineableTags.forEach((block) => {
    event.add("immersiveengineering:mineable/drill",block)
    event.add("minecraft:mineable/pickaxe",block)
    event.add("actuallyadditions:mineable/aio",block)
    event.add("actuallyadditions:mineable/drill",block)
    event.add("forcecraft:mineable_with_mitts",block)

  });

});

const notWater = [
  "mekanism:steam",
  "mekanism:water_vapor",
  "mekanism:heavy_water",
];

const hideFluids = [
  "pneumaticcraft:plastic",
  "pneumaticcraft:biodiesel",
  "immersiveengineering:biodiesel",
  "modern_industrialization:creosote",
  "pneumaticcraft:vegetable_oil",
  "immersiveengineering:ethanol",
  "pneumaticcraft:ethanol",
  "pneumaticcraft:memory_essence",
  "mekanism:hydrogen",
  "mekanism:oxygen",
  "mekanism:chlorine",
  "mekanism:sulfuric_acid",
  "mekanism:ethene",
  "mekanism:steam"
];

const addMineableTags = [
  "actuallyadditions:fluid_placer"
]

const mi_batteries = [
  "modern_industrialization:cadmium_battery",
  "modern_industrialization:plutonium_battery",
  "modern_industrialization:redstone_battery",
  "modern_industrialization:silicon_battery",
  "modern_industrialization:sodium_battery",
];

ServerEvents.tags("item", (event) => {
  mi_batteries.forEach((id) => {
    event.add("ftbneotech:mi_batteries", id);
  });
  event.add("minecraft:music_discs", "ftbneotech:music_disc")
});

ServerEvents.tags("fluid", (event) => {
  notWater.forEach((fluid) => {
    event.remove("minecraft:water", fluid);
  });

  event.add("forge:ethanol", ["modern_industrialization:ethanol"]);
  event.add("forge:plantoil", ["modern_industrialization:plant_oil"]);
  event.remove("forge:plantoil", ["immersiveengineering:plantoil"]);
  event.add("forge:synthetic_oil", ["modern_industrialization:synthetic_oil"]);
  event.add("forge:biodiesel", ["modern_industrialization:biodiesel"]);
  event.add("forge:polyethylene", ["modern_industrialization:polyethylene"]);
  event.add("c:hidden_from_recipe_viewers", [
    "pneumaticcraft:lubricant",
    "pneumaticcraft:oil",
    "pneumaticcraft:diesel",
  ]);
  event.add("ftbneotech:redstone", [
    "modern_industrialization:molten_redstone",
  ]);
  event.add("ftbneotech:lubricant", ["modern_industrialization:lubricant"]);

  event.add("forge:crude_oil", ["modern_industrialization:crude_oil"]);
  event.remove("forge:crude_oil", ["pneumaticcraft:oil"]);
  event.remove("forge:lubricant", ["pneumaticcraft:lubricant"]);
  event.remove("forge:diesel", ["pneumaticcraft:diesel"]);
  event.add("forge:diesel", ["modern_industrialization:diesel"]);
  event.remove("pneumaticcraft:seismic_sensor_interesting", [
    "pneumaticcraft:oil",
  ]);
  event.add("forge:lubricant", ["modern_industrialization:lubricant"]);
  event.add("forge:redstone_acid", ["immersiveengineering:redstone_acid"]);

  //Adding Tags to Modern Industrialization Fluids
  
  event.add("forge:refinedcanola", ["actuallyadditions:refined_canola_oil"]);
  event.add("forge:boosteddiesel", ["modern_industrialization:boosted_diesel"]);
  event.add("forge:forceddiesel", ["ftbneotech:force_infused_diesel"]);
  event.add("forge:hydrogen", ["modern_industrialization:hydrogen"]);
  event.add("forge:oxygen", ["modern_industrialization:oxygen"]);
  event.add("forge:chlorine", ["modern_industrialization:chlorine"]);
  event.add("forge:sulfuric_acid", ["modern_industrialization:sulfuric_acid"]);
  event.add("forge:ethylene", ["modern_industrialization:ethylene"]);
  event.add("forge:ethene", ["modern_industrialization:ethylene"]);
  event.add("forge:steam", ["modern_industrialization:steam"]);
  event.add("forge:heavy_water", ["modern_industrialization:heavy_water"]);

  hideFluids.forEach((fluid) => {
    event.removeAllTagsFrom(fluid);
    event.add("c:hidden_from_recipe_viewers", fluid);
  });
});
