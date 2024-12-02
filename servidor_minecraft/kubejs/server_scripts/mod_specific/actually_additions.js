// priority: 1000

ServerEvents.recipes((event) => {
  //rice slimeball
  event
    .custom({
      type: "modern_industrialization:mixer",
      eu: 4,
      duration: 80,
      item_inputs: {
        item: "actuallyadditions:rice_dough",
        amount: 2,
      },
      fluid_inputs: {
        fluid: "minecraft:water",
        amount: 250,
      },
      item_outputs: {
        item: "actuallyadditions:rice_slimeball",
        amount: 1,
      },
    })
    .id("ftbneotech:rice_slimeball");

  //AA Drill
  event
    .custom({
      type: "modern_industrialization:assembler",
      eu: 12,
      duration: 180,
      item_inputs: [
        {
          item: "modern_industrialization:steam_mining_drill",
          amount: 1,
        },
        {
          item: "actuallyadditions:advanced_coil",
          amount: 1,
        },
        {
          item: "actuallyadditions:drill_core",
          amount: 1,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "actuallyadditions:drill_light_blue",
        },
      ],      
    })
    .id("ftbneotech:drill_light_blue");

  //Atomic reconstructor
  event.custom({
    type: "modern_industrialization:assembler",
    duration: 400,
    eu: 8,
    item_inputs: [
      {
        amount: 4,
        item: "modern_industrialization:steel_large_plate",
      },
      {
        amount: 1,
        item: "actuallyadditions:lens",
      },
      {
        amount: 1,
        item: "actuallyadditions:iron_casing",
      },
    ],
    fluid_inputs: [
      {
        amount: 360,
        fluid: "modern_industrialization:molten_redstone",
        probability: 1.0,
      },
    ],
    item_outputs: [
      {
        amount: 1,
        item: "actuallyadditions:atomic_reconstructor",
      },
    ],
  });

  // Shapeless Recipe for Battery Box
  event
    .shapeless("actuallyadditions:battery_box", [
      "actuallyadditions:energizer",
      "actuallyadditions:enervator",
      "actuallyadditions:basic_coil",
      "2x modern_industrialization:steel_rod_magnetic",
      "modern_industrialization:silicon_battery",
      "3x modern_industrialization:battery_alloy_plate",
    ])
    .id("ftbneotech:battery_box_0");

  //shaped recipes
  event
    .shaped("actuallyadditions:lens_of_the_miner", ["A B", "CDC", "AEA"], {
      A: "modern_industrialization:steel_plate",
      B: "minecraft:netherite_pickaxe",
      C: "actuallyadditions:black_quartz",
      D: "actuallyadditions:lens",
      E: "actuallyadditions:black_quartz",
    })
    .id("ftbneotech:actuallyadditions_lens_of_the_miner_0");

  event
    .shaped("actuallyadditions:iron_casing", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:iron_large_plate",
      B: "immersiveengineering:stick_treated",
      C: "actuallyadditions:black_quartz",
    })
    .id("ftbneotech:actuallyadditions_iron_casing_0");

  event
    .shaped("actuallyadditions:lens", ["ABA", "BCB", "ABA"], {
      A: "#forge:glass",
      B: "actuallyadditions:black_quartz",
      C: "modern_industrialization:diamond_plate",
    })
    .id("ftbneotech:actuallyadditions_lens_0");

  event
    .shaped("actuallyadditions:empowerer", [" A ", "BCB", "DED"], {
      A: "actuallyadditions:restonia_crystal",
      B: "modern_industrialization:aluminum_curved_plate",
      C: "actuallyadditions:double_battery",
      D: "actuallyadditions:iron_casing",
      E: "actuallyadditions:display_stand",
    })
    .id("ftbneotech:actuallyadditions_empowerer_0");

  event
    .shaped("actuallyadditions:wood_casing", ["ABA", "BCB", "ABA"], {
      A: "immersiveengineering:treated_wood_horizontal",
      B: "immersiveengineering:stick_treated",
      C: "#minecraft:logs",
    })
    .id("ftbneotech:actuallyadditions_wood_casing_0");

  event
    .shaped("actuallyadditions:ender_casing", ["ADA", "BCB", "ABA"], {
      A: "#forge:ender_pearls",
      B: "justdirethings:celestigem",
      C: "actuallyadditions:black_quartz_block",
      D: "actuallyadditions:empowered_diamatine_crystal",
    })
    .id("ftbneotech:actuallyadditions_ender_casing_0");

  event
    .shaped("actuallyadditions:lava_factory_casing", ["ABA"], {
      A: "actuallyadditions:enori_crystal_block",
      B: "actuallyadditions:iron_casing",
    })
    .id("ftbneotech:actuallyadditions_lava_factory_casing_0");

  event
    .shaped("actuallyadditions:canola_press", ["ABA", " C ", "ABA"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "minecraft:piston",
      C: "actuallyadditions:canola",
    })
    .id("ftbneotech:actuallyadditions_canola_press_0");

  event
    .shaped("actuallyadditions:crusher", ["ABA", "BCB", "EDE"], {
      A: "actuallyadditions:restonia_crystal",
      B: "minecraft:flint",
      C: "actuallyadditions:basic_coil",
      D: "actuallyadditions:iron_casing",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_crusher_0");

  event
    .shaped("actuallyadditions:crusher_double", ["ABA", "BCB", "EDE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "actuallyadditions:advanced_coil",
      C: "actuallyadditions:crusher",
      D: "actuallyadditions:iron_casing",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_crusher_double_0");

  event
    .shaped("actuallyadditions:oil_generator", ["ABA", "BCB", "ADE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "modern_industrialization:electronic_circuit",
      C: "actuallyadditions:canola",
      D: "actuallyadditions:iron_casing",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_oil_generator_0");

  event
    .shaped("actuallyadditions:coal_generator", ["ABA", "BCD", "ADE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "modern_industrialization:analog_circuit",
      C: "minecraft:blast_furnace",
      D: "actuallyadditions:iron_casing",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_coal_generator_0");

  event
    .shaped("actuallyadditions:breaker", ["AAA", "BCD", "EAE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "justdirethings:ferricore_ingot",
      C: "actuallyadditions:basic_coil",
      D: "actuallyadditions:void_crystal",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_breaker_0");

  event
    .shaped("actuallyadditions:long_range_breaker", ["ABA", " C ", "ADA"], {
      A: "actuallyadditions:breaker",
      B: "justdirethings:blazegold_ingot",
      C: "actuallyadditions:void_crystal",
      D: "justdirethings:ferricore_ingot",
    })
    .id("ftbneotech:actuallyadditions_long_range_breaker_0");

  event
    .shaped("actuallyadditions:farmer", ["ABA", "BCB", "AEA"], {
      A: "actuallyadditions:enori_crystal_block",
      B: "modern_industrialization:analog_circuit",
      C: "actuallyadditions:iron_casing",
      E: "justdirethings:ferricore_ingot",
    })
    .id("ftbneotech:actuallyadditions_farmer_0");

  event
    .shaped("actuallyadditions:placer", ["AAA", "BCD", "EAE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "justdirethings:ferricore_ingot",
      C: "actuallyadditions:basic_coil",
      D: "actuallyadditions:palis_crystal",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_placer_0");

  event
    .shaped("actuallyadditions:dropper", ["ABA", "BCD", "EAE"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "actuallyadditions:palis_crystal",
      C: "minecraft:dropper",
      D: "modern_industrialization:analog_circuit",
      E: "actuallyadditions:advanced_coil",
    })
    .id("ftbneotech:actuallyadditions_dropper_0");

  event
    .shaped("actuallyadditions:powered_furnace", ["ABA", "BCD", "EAE"], {
      A: "actuallyadditions:enori_crystal",
      B: "actuallyadditions:basic_coil",
      C: "minecraft:furnace",
      D: "modern_industrialization:analog_circuit",
      E: "pneumaticcraft:reinforced_stone",
    })
    .id("ftbneotech:actuallyadditions_powered_furnace_0");

  event
    .shaped("actuallyadditions:heat_collector", ["ABA", "BCD", "EAE"], {
      A: "minecraft:iron_bars",
      B: "modern_industrialization:electronic_circuit",
      C: "actuallyadditions:enori_crystal",
      D: "actuallyadditions:advanced_coil",
      E: "actuallyadditions:iron_casing",
    })
    .id("ftbneotech:actuallyadditions_heat_collector_0");

  event
    .shaped("actuallyadditions:laser_relay", ["ABA", "CDC", "AEA"], {
      A: "modern_industrialization:aluminum_plate",
      B: "wirelessredstone:circuit",
      C: "actuallyadditions:restonia_crystal",
      D: "actuallyadditions:advanced_coil",
      E: "#forge:storage_blocks/redstone",
    })
    .id("ftbneotech:actuallyadditions_laser_relay_0");

  event
    .shaped("actuallyadditions:triple_battery", ["ABA", "BCD", "EAE"], {
      A: "modern_industrialization:silicon_plate",
      B: "actuallyadditions:empowered_enori_crystal",
      C: "actuallyadditions:double_battery",
      D: "actuallyadditions:advanced_coil",
      E: "actuallyadditions:empowered_enori_crystal",
    })
    .id("ftbneotech:actuallyadditions_triple_battery_0");

  event
    .shaped("actuallyadditions:quadruple_battery", ["ABA", "BCD", "EAE"], {
      A: "modern_industrialization:stainless_steel_plate",
      B: "actuallyadditions:empowered_enori_crystal",
      C: "actuallyadditions:triple_battery",
      D: "actuallyadditions:advanced_coil",
      E: "actuallyadditions:empowered_enori_crystal",
    })
    .id("ftbneotech:actuallyadditions_quadruple_battery_0");

  event
    .shaped("actuallyadditions:quintuple_battery", ["ABA", "BCD", "EAE"], {
      A: "modern_industrialization:titanium_plate",
      B: "actuallyadditions:empowered_diamatine_crystal",
      C: "actuallyadditions:quadruple_battery",
      D: "actuallyadditions:advanced_coil",
      E: "actuallyadditions:empowered_diamatine_crystal",
    })
    .id("ftbneotech:actuallyadditions_quintuple_battery_0");

  event
    .shaped("actuallyadditions:empty_cup", ["A A", "BCB", "DDD"], {
      A: "minecraft:stone_slab",
      B: "#forge:stone",
      C: "actuallyadditions:coffee_beans",
      D: "#forge:stone",
    })
    .id("ftbneotech:actuallyadditions_empty_cup_0");

  event
    .shaped("actuallyadditions:ring", [" A ", " B "], {
      A: "modern_industrialization:gold_plate",
      B: "modern_industrialization:iron_ring",
    })
    .id("ftbneotech:actuallyadditions_ring_0");

  event
    .shaped("actuallyadditions:basic_coil", [" A ", "BCB", " A "], {
      A: "actuallyadditions:restonia_crystal",
      B: "modern_industrialization:copper_wire",
      C: "actuallyadditions:black_quartz",
    })
    .id("ftbneotech:actuallyadditions_basic_coil_0");

  event
    .shaped("actuallyadditions:advanced_coil", [" A ", "BCB", " A "], {
      A: "modern_industrialization:electrum_wire",
      B: "modern_industrialization:steel_rod_magnetic",
      C: "actuallyadditions:basic_coil",
    })
    .id("ftbneotech:actuallyadditions_advanced_coil_0");

  event
    .shaped("actuallyadditions:drill_core", ["ABC", "DEF", "GHI"], {
      A: "modern_industrialization:iron_large_plate",
      B: "actuallyadditions:basic_coil",
      C: "actuallyadditions:restonia_crystal",
      D: "actuallyadditions:enori_crystal",
      E: "modern_industrialization:analog_circuit",
      F: "actuallyadditions:basic_coil",
      G: "modern_industrialization:iron_large_plate",
      H: "actuallyadditions:enori_crystal",
      I: "modern_industrialization:iron_large_plate",
    })
    .id("ftbneotech:actuallyadditions_drill_core_0");

  event
    .shaped("actuallyadditions:engineers_goggles", ["ABA", "CDC", "EAE"], {
      A: "immersiveengineering:ersatz_leather",
      B: "actuallyadditions:restonia_crystal",
      C: "#forge:rods/iron",
      D: "modern_industrialization:tin_curved_plate",
      E: "actuallyadditions:lens",
    })
    .id("ftbneotech:actuallyadditions_engineers_goggles_0");

  event
    .shaped("actuallyadditions:laser_upgrade_range", ["AAA", "BCB", "DED"], {
      A: "modern_industrialization:steel_plate",
      B: "minecraft:ender_pearl",
      C: "modern_industrialization:electronic_circuit",
      D: "actuallyadditions:advanced_coil",
      E: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:actuallyadditions_laser_upgrade_range_0");

  event
    .shaped(
      "actuallyadditions:laser_upgrade_invisibility",
      ["AAA", "BCB", "DED"],
      {
        A: "modern_industrialization:steel_plate",
        B: "minecraft:glass",
        C: "stevescarts:module_invisibility_core",
        D: "actuallyadditions:advanced_coil",
        E: "actuallyadditions:restonia_crystal",
      }
    )
    .id("ftbneotech:actuallyadditions_laser_upgrade_invisibility_0");

  event
    .shaped("actuallyadditions:handheld_filler", ["ABA", "CDC", "EFE"], {
      A: "actuallyadditions:empowered_enori_crystal",
      B: "actuallyadditions:advanced_coil",
      C: "actuallyadditions:diamatine_crystal",
      D: "modern_industrialization:electronic_circuit",
      E: "actuallyadditions:triple_battery",
      F: "actuallyadditions:empowered_enori_crystal",
    })
    .id("ftbneotech:actuallyadditions_handheld_filler_0");

  event
    .shaped("actuallyadditions:travelers_sack", ["ABA", "BCB", "DBD"], {
      A: "immersiveengineering:hemp_fiber",
      B: "immersiveengineering:ersatz_leather",
      C: "immersiveengineering:crate",
      D: "actuallyadditions:void_crystal_block",
    })
    .id("ftbneotech:actuallyadditions_travelers_sack_0");

  event
    .shaped("actuallyadditions:player_probe", ["A A", "BCB", "DED"], {
      A: "actuallyadditions:empowered_restonia_crystal",
      B: "modern_industrialization:steel_rod",
      C: "immersiveengineering:armor_steel_helmet",
      D: "modern_industrialization:steel_plate",
      E: "#forge:heads",
    })
    .id("ftbneotech:actuallyadditions_player_probe_0");

  event
    .shaped("actuallyadditions:crate_keeper", ["ABA", "BCB", "ABA"], {
      A: "#minecraft:planks",
      B: "modern_industrialization:steel_plate",
      C: "actuallyadditions:black_quartz",
    })
    .id("ftbneotech:actuallyadditions_crate_keeper_0");

  event
    .shaped("actuallyadditions:laser_wrench", [" A ", " B ", "C D"], {
      A: "actuallyadditions:black_quartz",
      B: "modern_industrialization:aluminum_plate",
      C: "modern_industrialization:aluminum_rod",
      D: "modern_industrialization:electrum_wire",
    })
    .id("ftbneotech:actuallyadditions_laser_wrench_0");

  event
    .shaped("actuallyadditions:ring_of_magnetizing", ["ABC", "DED", "CBA"], {
      A: "actuallyadditions:restonia_crystal",
      B: "modern_industrialization:steel_rod_magnetic",
      C: "modern_industrialization:lapis_plate",
      D: "actuallyadditions:ring",
      E: "modern_industrialization:steel_rod_magnetic",
    })
    .id("ftbneotech:actuallyadditions_ring_of_magnetizing_0");

  event
    .shaped("actuallyadditions:teleport_staff", [" A ", " B ", "C D"], {
      A: "actuallyadditions:diamatine_crystal",
      B: "#forge:rods/steel",
      C: "actuallyadditions:single_battery",
      D: "modern_industrialization:capacitor",
    })
    .id("ftbneotech:actuallyadditions_teleport_staff_0");

  event
    .shaped("actuallyadditions:single_battery", [" A ", "BCB", "DBD"], {
      A: "actuallyadditions:restonia_crystal",
      B: "modern_industrialization:battery_alloy_curved_plate",
      C: "actuallyadditions:advanced_coil",
      D: "actuallyadditions:enori_crystal",
    })
    .id("ftbneotech:actuallyadditions_single_battery_0");

  event
    .shaped("actuallyadditions:drill_upgrade_speed", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:iron_large_plate",
      B: "minecraft:sugar",
      C: "modern_industrialization:redstone_battery",
    })
    .id("ftbneotech:actuallyadditions_drill_upgrade_speed_0");

  event
    .shaped("actuallyadditions:drill_upgrade_speed_ii", ["ABA", "BCB", "ABA"], {
      A: "actuallyadditions:enori_crystal",
      B: "modern_industrialization:electrum_wire",
      C: "actuallyadditions:drill_upgrade_speed",
    })
    .id("ftbneotech:actuallyadditions_drill_upgrade_speed_ii_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_speed_iii",
      ["ABA", "BCB", "ABA"],
      {
        A: "actuallyadditions:empowered_enori_crystal",
        B: "modern_industrialization:kanthal_wire",
        C: "actuallyadditions:drill_upgrade_speed_ii",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_speed_iii_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_silk_touch",
      ["ABA", "BCB", "ABA"],
      {
        A: "modern_industrialization:emerald_plate",
        B: "actuallyadditions:diamatine_crystal",
        C: "actuallyadditions:advanced_coil",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_silk_touch_0");

  event
    .shaped("actuallyadditions:drill_upgrade_fortune", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:lapis_plate",
      B: "mekanism:enriched_redstone",
      C: "actuallyadditions:empowered_diamatine_crystal_block",
    })
    .id("ftbneotech:actuallyadditions_drill_upgrade_fortune_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_fortune_ii",
      ["ABA", "BCB", "ABA"],
      {
        A: "actuallyadditions:empowered_palis_crystal_block",
        B: "actuallyadditions:empowered_restonia_crystal",
        C: "actuallyadditions:drill_upgrade_fortune",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_fortune_ii_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_three_by_three",
      ["ABA", "BCB", "ADA"],
      {
        A: "actuallyadditions:diamatine_crystal",
        B: "actuallyadditions:enori_crystal",
        C: "justhammers:iron_hammer",
        D: "actuallyadditions:advanced_coil",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_three_by_three_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_five_by_five",
      ["ADA", "BCB", "ABA"],
      {
        A: "actuallyadditions:empowered_diamatine_crystal",
        B: "actuallyadditions:empowered_enori_crystal",
        C: "justhammers:diamond_hammer",
        D: "actuallyadditions:drill_upgrade_three_by_three",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_five_by_five_0");

  event
    .shaped(
      "actuallyadditions:drill_upgrade_block_placing",
      ["ABA", "BCB", "ABA"],
      {
        A: "#forge:cobblestone",
        B: "actuallyadditions:enori_crystal",
        C: "actuallyadditions:basic_coil",
      }
    )
    .id("ftbneotech:actuallyadditions_drill_upgrade_block_placing_0");

  event
    .shaped("actuallyadditions:phantom_connector", [" A ", "BCB", "D D"], {
      A: "minecraft:ender_eye",
      B: "#forge:ender_pearls",
      C: "modern_industrialization:stainless_steel_ring",
      D: "modern_industrialization:stainless_steel_rod",
    })
    .id("ftbneotech:actuallyadditions_phantom_connector_0");

  event
    .shaped("actuallyadditions:leaf_blower", ["ABA", "BCD", "EFD"], {
      A: "modern_industrialization:bronze_curved_plate",
      B: "actuallyadditions:enori_crystal",
      C: "modern_industrialization:motor",
      D: "modern_industrialization:bronze_plate",
      E: "modern_industrialization:bronze_rotor",
      F: "actuallyadditions:advanced_coil",
    })
    .id("ftbneotech:actuallyadditions_leaf_blower_0");

  event
    .shaped("actuallyadditions:advanced_leaf_blower", ["ABA", "BCD", "EFD"], {
      A: "modern_industrialization:bronze_curved_plate",
      B: "actuallyadditions:diamatine_crystal",
      C: "modern_industrialization:advanced_motor",
      D: "modern_industrialization:bronze_plate",
      E: "modern_industrialization:bronze_rotor",
      F: "actuallyadditions:advanced_coil",
    })
    .id("ftbneotech:actuallyadditions_advanced_leaf_blower_0");

    //Adding an Enriching Recipe to the Black Quartz Ore
    event.custom({
      type: "mekanism:enriching",
      input: {
        ingredient: {
          item: "actuallyadditions:black_quartz_ore"
        },
        amount: 1
      },
      output: {
        item: "actuallyadditions:black_quartz",
        count: 6
      }
    }).id("ftbneotech:black_quartz_ore_enriching");

    //Adding a Compressor Recipe to Black Quartz Dust to Gem
    event.custom({
      type: "modern_industrialization:compressor",
      eu: 2,
      item_inputs: [
        {
          item: 'ftbneotech:black_quartz_dust',
          amount: 1
        }
      ],
      item_outputs: [
        {
          item: 'actuallyadditions:black_quartz',
          amount: 1
        }
      ],
      duration: 100
    }).id("ftbneotech:black_quartz_compression");

    event.custom({
      "type": "actuallyadditions:empowering",
      "base": {
        "item": "modern_industrialization:singularity"
      },
      "color": 11952235,
      "energy": 80000,
      "modifiers": [
        {
          "item": "mekanism:pellet_antimatter"
        },
        {
          "item": "modern_industrialization:qbit"
        },
        {
          "item": "mekanism:pellet_antimatter"
        },
        {
          "item": "modern_industrialization:qbit"
        }
      ],
      "result": {
        "item": "ftbneotech:ultimate_singularity"
      },
      "time": 1200
    }).id("ftbneotech:ultimate_singularity_empowering");
});
