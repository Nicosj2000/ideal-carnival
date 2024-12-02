// priority: 1000

ServerEvents.recipes((event) => {

  event.custom({
    "type": "actuallyadditions:laser",
    "energy": 1000,
    "ingredient": {
      "item": "modern_industrialization:plutonium_ingot"
    },
    "result": {
      "count": 1,
      "result": "mekanism:pellet_plutonium"
    }
  }).id("ftbneotech:mekanism_pellet_plutonium");

  event
    .shaped("mekanism:steel_casing", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "modern_industrialization:electronic_circuit",
      C: "#forge:ingots/osmium",
      D: "#forge:glass/silica",
    })
    .id("ftbneotech:mekanism_steel_casing_0");

  event
    .shaped("mekanism:basic_tier_installer", ["ABA", "CDC", "ABA"], {
      A: "#mekanism:alloys/basic",
      B: "#forge:circuits/basic",
      C: "#forge:ingots/iron",
      D: "modern_industrialization:analog_circuit",
    })
    .id("ftbneotech:mekanism_tier_installer_basic_0");

  event
    .shaped("mekanism:sps_casing", ["HPH", "PUP", "HPH"], {
      H: "mekanism:hdpe_sheet",
      P: "mekanism:pellet_polonium",
      U: "modern_industrialization:plutonium_battery",
    })
    .id("ftbneotech:mekanism_sps_casing");

  event
    .shaped("mekanism:advanced_tier_installer", ["ABA", "CDC", "ABA"], {
      A: "#mekanism:alloys/infused",
      B: "#forge:circuits/advanced",
      C: "#forge:ingots/osmium",
      D: "modern_industrialization:electronic_circuit",
    })
    .id("ftbneotech:mekanism_tier_installer_advanced_0");

  event
    .shaped("mekanism:elite_tier_installer", ["ABA", "CDC", "ABA"], {
      A: "#mekanism:alloys/reinforced",
      B: "#forge:circuits/elite",
      C: "#forge:ingots/gold",
      D: "modern_industrialization:digital_circuit",
    })
    .id("ftbneotech:mekanism_tier_installer_elite_0");

  event
    .shaped("mekanism:ultimate_tier_installer", ["ABA", "CDC", "ABA"], {
      A: "#mekanism:alloys/atomic",
      B: "#forge:circuits/ultimate",
      C: "#forge:gems/diamond",
      D: "modern_industrialization:quantum_circuit",
    })
    .id("ftbneotech:mekanism_tier_installer_ultimate_0");

  event
    .shaped("mekanism:enrichment_chamber", ["ABA", "CDC", "EFE"], {
      A: "#forge:circuits/basic",
      B: "minecraft:redstone",
      C: "#forge:plates/steel",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
      F: "modern_industrialization:conveyor",
    })
    .id("ftbneotech:mekanism_enrichment_chamber_0");

  event
    .shaped("mekanism:osmium_compressor", ["ABA", "CDC", "AEA"], {
      A: "#mekanism:alloys/infused",
      B: "#forge:circuits/advanced",
      C: "modern_industrialization:conveyor",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:pump",
    })
    .id("ftbneotech:mekanism_osmium_compressor_0");

  event
    .shaped("mekanism:combiner", ["ABA", "CDC", "ABA"], {
      A: "#mekanism:alloys/reinforced",
      B: "#forge:circuits/elite",
      C: "modern_industrialization:advanced_motor",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_combiner_0");

  event
    .shaped("mekanism:crusher", ["ABA", "CDC", "EFE"], {
      A: "#forge:circuits/basic",
      B: "minecraft:redstone",
      C: "actuallyadditions:void_crystal",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
      F: "modern_industrialization:conveyor",
    })
    .id("ftbneotech:mekanism_crusher_0");

  event
    .shaped("mekanism:metallurgic_infuser", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/steel",
      B: "immersiveengineering:furnace_heater",
      C: "#forge:dusts/redstone",
      D: "modern_industrialization:electronic_circuit",
      E: "modern_industrialization:steel_furnace",
    })
    .id("ftbneotech:mekanism_metallurgic_infuser_0");

  event
    .shaped("mekanism:energized_smelter", ["ABA", "CDC", "EFE"], {
      A: "#forge:circuits/basic",
      B: "#forge:plates/steel",
      C: "actuallyadditions:basic_coil",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
      F: "modern_industrialization:conveyor",
    })
    .id("ftbneotech:mekanism_energized_smelter_0");

  event
    .shaped("mekanism:electric_pump", [" A ", "BCB", "DDD"], {
      A: "modern_industrialization:pump",
      B: "#mekanism:alloys/infused",
      C: "mekanism:steel_casing",
      D: "#forge:ingots/osmium",
    })
    .id("ftbneotech:mekanism_electric_pump_0");

  event
    .shaped("4x mekanism:logistical_sorter", ["ABA", "C C", "ABA"], {
      A: "#forge:plates/steel",
      B: "modern_industrialization:piston",
      C: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_logistical_sorter_0");

  event
    .shaped("mekanism:rotary_condensentrator", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: "#forge:circuits/basic",
      C: "mekanism:basic_chemical_tank",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
      F: "modern_industrialization:pump",
    })
    .id("ftbneotech:mekanism_rotary_condensentrator_0");

  event
    .shaped("mekanism:chemical_oxidizer", ["ABA", "CDC", "EFE"], {
      A: "mekanism:alloy_infused",
      B: "#forge:circuits/basic",
      C: "mekanism:personal_storage",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
      F: "mekanism:dynamic_tank",
    })
    .id("ftbneotech:mekanism_chemical_oxidizer_0");

  event
    .shaped("mekanism:chemical_infuser", ["ABA", "CDC", "EAE"], {
      A: "mekanism:alloy_infused",
      B: "#forge:circuits/basic",
      C: "mekanism:basic_chemical_tank",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:motor",
    })
    .id("ftbneotech:mekanism_chemical_infuser_0");

  event
    .shaped("mekanism:chemical_injection_chamber", ["ABA", "CDC", "ABA"], {
      A: "mekanism:alloy_reinforced",
      B: "#forge:circuits/elite",
      C: "#forge:plates/gold",
      D: "mekanism:purification_chamber",
    })
    .id("ftbneotech:mekanism_chemical_injection_chamber_0");

  event
    .shaped("mekanism:electrolytic_separator", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/steel",
      B: "modern_industrialization:pump",
      C: "#mekanism:alloys/infused",
      D: "mekanism:electrolytic_core",
      E: "modern_industrialization:bronze_tank",
    })
    .id("ftbneotech:mekanism_electrolytic_separator_0");

  event
    .shaped("mekanism:precision_sawmill", ["AEA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "#forge:circuits/basic",
      C: "modern_industrialization:conveyor",
      D: "mekanism:steel_casing",
      E: "immersiveengineering:sawblade",
    })
    .id("ftbneotech:mekanism_precision_sawmill_0");

  event
    .shaped("mekanism:seismic_vibrator", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/tin",
      B: "#forge:plates/lapis",
      C: "#forge:circuits/basic",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_seismic_vibrator_0");

  event
    .shaped("mekanism:pressurized_reaction_chamber", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: "#forge:alloys/advanced",
      C: "#forge:circuits/basic",
      D: "mekanism:enrichment_chamber",
      E: "mekanism:basic_chemical_tank",
      F: "modern_industrialization:pump",
    })
    .id("ftbneotech:mekanism_pressurized_reaction_chamber_0");

  event
    .shaped("mekanism:isotopic_centrifuge", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/lead",
      B: "modern_industrialization:motor",
      C: "#forge:circuits/ultimate",
      D: "mekanism:basic_chemical_tank",
    })
    .id("ftbneotech:crafting_isotopic_centrifuge_0");

  event
    .shaped("mekanism:nutritional_liquifier", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: "#forge:circuits/basic",
      C: "modern_industrialization:motor",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:bronze_rotor",
      F: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_nutritional_liquifier_0");

  event
    .shaped("mekanism:basic_fluid_tank", ["ABA", "B B", "ABA"], {
      A: "#mekanism:alloys/basic",
      B: "#forge:plates/iron",
    })
    .id("ftbneotech:mekanism_fluid_tank_basic_0");

  event
    .shaped("mekanism:advanced_fluid_tank", ["ABA", "BCB", "ABA"], {
      A: "#forge:alloys/advanced",
      B: "#forge:plates/iron",
      C: "mekanism:basic_fluid_tank",
    })
    .id("ftbneotech:mekanism_fluid_tank_advanced_0");

  event
    .shaped("mekanism:elite_fluid_tank", ["ABA", "BCB", "ABA"], {
      A: "#forge:alloys/elite",
      B: "#forge:plates/iron",
      C: "mekanism:advanced_fluid_tank",
    })
    .id("ftbneotech:mekanism_fluid_tank_elite_0");

  event
    .shaped("mekanism:ultimate_fluid_tank", ["ABA", "BCB", "ABA"], {
      A: "#forge:alloys/ultimate",
      B: "#forge:plates/iron",
      C: "mekanism:advanced_fluid_tank",
    })
    .id("ftbneotech:mekanism_fluid_tank_ultimate_0");

  event
    .shaped("mekanism:fluidic_plenisher", ["AAA", "BCB", "AAA"], {
      A: "#forge:plates/tin",
      B: "#forge:circuits/basic",
      C: "mekanism:electric_pump",
    })
    .id("ftbneotech:mekanism_fluidic_plenisher_0");

  event
    .shaped("mekanism:solar_neutron_activator", ["ABA", "CDC", "EEE"], {
      A: "#mekanism:alloys/reinforced",
      B: "stevescarts:component_solar_panel_component",
      C: "#forge:circuits/elite",
      D: "mekanism:steel_casing",
      E: "#forge:plates/bronze",
    })
    .id("ftbneotech:mekanism_solar_neutron_activator_0");

  event
    .shaped("mekanism:resistive_heater", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/tin",
      B: "minecraft:redstone",
      C: "actuallyadditions:basic_coil",
      D: "mekanism:steel_casing",
      E: "mekanism:energy_tablet",
      F: "#forge:plates/steel",
    })
    .id("ftbneotech:mekanism_resistive_heater_0");

  event
    .shaped("mekanism:formulaic_assemblicator", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/steel",
      B: "minecraft:crafting_table",
      C: "#forge:circuits/basic",
      D: "mekanism:steel_casing",
      E: "#forge:chests/wooden",
    })
    .id("ftbneotech:mekanism_formulaic_assemblicator_0");

  event
    .shaped("mekanism:pigment_extractor", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/steel",
      B: "#forge:circuits/basic",
      C: "mekanism:dye_base",
      D: "mekanism:steel_casing",
      E: "modern_industrialization:pump",
    })
    .id("ftbneotech:mekanism_pigment_extractor_0");

  event
    .shaped("mekanism:dimensional_stabilizer", ["ABA", "CDC", "ABA"], {
      A: "#forge:ingots/refined_obsidian",
      B: "#forge:circuits/ultimate",
      C: "#mekanism:alloys/atomic",
      D: "stevescarts:module_chunk_loader",
    })
    .id("ftbneotech:mekanism_dimensional_stabilizer_0");

  event
    .shaped("mekanism:basic_energy_cube", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "mekanism:energy_tablet",
      C: "minecraft:redstone",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_basic_energy_cube_0");

  event
    .shaped("mekanism:advanced_energy_cube", ["ABA", "CDC", "ABA"], {
      A: "#forge:alloys/advanced",
      B: "mekanism:energy_tablet",
      C: "#forge:ingots/osmium",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_advanced_energy_cube_0");

  event
    .shaped("mekanism:elite_energy_cube", ["ABA", "CDC", "ABA"], {
      A: "#forge:alloys/elite",
      B: "mekanism:energy_tablet",
      C: "#forge:plates/gold",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_elite_energy_cube_0");

  event
    .shaped("mekanism:ultimate_energy_cube", ["ABA", "CDC", "ABA"], {
      A: "#forge:alloys/ultimate",
      B: "mekanism:energy_tablet",
      C: "#forge:plates/diamond",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_ultimate_energy_cube_0");

  event
    .shaped("mekanism:basic_logistical_transporter", ["ABA"], {
      A: "modern_industrialization:steel_curved_plate",
      B: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_transmitter_logistical_transporter_basic_0");

  event
    .shaped("mekanism:restrictive_transporter", ["ABA"], {
      A: "modern_industrialization:steel_curved_plate",
      B: "minecraft:iron_bars",
    })
    .id("ftbneotech:mekanism_transmitter_restrictive_transporter_0");

  event
    .shaped("mekanism:diversion_transporter", ["AAA", "BCB", "AAA"], {
      A: "#forge:dusts/bronze",
      B: "modern_industrialization:steel_curved_plate",
      C: "minecraft:iron_bars",
    })
    .id("ftbneotech:mekanism_transmitter_diversion_transporter_0");

  event
    .shaped("4x mekanism:basic_thermodynamic_conductor", ["ABA"], {
      A: "modern_industrialization:steel_curved_plate",
      B: "modern_industrialization:inductor",
    })
    .id("ftbneotech:mekanism_transmitter_thermodynamic_conductor_basic_0");

  //osmium processing
  event
    .custom({
      type: "modern_industrialization:blast_furnace",
      duration: 400,
      eu: 128,
      item_inputs: [
        {
          amount: 1,
          item: "mekanism:dust_osmium",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "mekanism:ingot_osmium",
        },
      ],
    })
    .id("ftbneotech:osmium_ingot_from_dust");

  //universal cable
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 80,
      eu: 200,
      item_inputs: [
        {
          amount: 2,
          item: "modern_industrialization:stainless_steel_curved_plate",
        },
        {
          amount: 4,
          item: "modern_industrialization:aluminum_cable",
        },
        {
          amount: 4,
          item: "mekanism:alloy_infused",
        },
      ],
      item_outputs: [
        {
          amount: 16,
          item: "mekanism:basic_universal_cable",
        },
      ],
    })
    .id("ftbneotech:universal_cable");

  event
    .shaped("mekanism:security_desk", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/steel",
      B: "#forge:glass/silica",
      C: "#forge:circuits/elite",
      D: "mekanism:steel_casing",
      E: "mekanism:network_reader",
    })
    .id("ftbneotech:mekanism_security_desk_0");

  event
    .shaped("mekanism:radioactive_waste_barrel", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "#forge:plates/lead",
      C: "immersiveengineering:metal_barrel",
      D: "mekanism:alloy_reinforced",
    })
    .id("ftbneotech:mekanism_radioactive_waste_barrel_0");

  event
    .shaped("mekanism:personal_chest", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "#forge:glass/silica",
      C: "#forge:chests/wooden",
      D: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_personal_chest_0");

  event
    .shaped("mekanism:personal_barrel", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "#forge:glass/silica",
      C: "#forge:barrels/wooden",
      D: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_personal_barrel_0");

  event
    .shaped("mekanism:chargepad", ["AAA", "BCB"], {
      A: "minecraft:polished_blackstone_pressure_plate",
      B: "#forge:plates/steel",
      C: "#ftbneotech:mi_batteries",
    })
    .id("ftbneotech:mekanism_chargepad_0");

  event
    .shaped("mekanism:laser", ["ABA", "CDC", "AEA"], {
      A: "#forge:alloys/elite",
      B: "mekanism:energy_tablet",
      C: "mekanism:steel_casing",
      D: "actuallyadditions:lens",
      E: "modern_industrialization:steel_ring",
    })
    .id("ftbneotech:mekanism_laser_0");

  event
    .shaped("mekanism:laser_amplifier", ["AAA", "BDC", "AAA"], {
      A: "#forge:plates/steel",
      B: "mekanism:basic_energy_cube",
      C: "actuallyadditions:lens",
      D: "#forge:plates/steel",
    })
    .id("ftbneotech:mekanism_laser_amplifier_0");

  event
    .shaped("mekanism:fuelwood_heater", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "#forge:circuits/basic",
      C: "modern_industrialization:bronze_furnace",
      D: "mekanism:steel_casing",
    })
    .id("ftbneotech:mekanism_fuelwood_heater_0");

  event
    .shaped("mekanism:qio_dashboard", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/tungsten",
      B: "#forge:ender_pearls",
      C: "#forge:glass_panes",
      D: "mekanism:teleportation_core",
    })
    .id("ftbneotech:mekanism_qio_dashboard_0");

  event
    .shaped("mekanism:qio_exporter", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/tungsten",
      B: "mekanism:teleportation_core",
      C: "#forge:ender_pearls",
      D: "#forge:circuits/ultimate",
      E: "modern_industrialization:advanced_motor",
      F: "modern_industrialization:conveyor",
    })
    .id("ftbneotech:mekanism_qio_exporter_0");

  event
    .shaped("mekanism:qio_importer", ["EFE", "CDC", "ABA"], {
      A: "#forge:plates/tungsten",
      B: "mekanism:teleportation_core",
      C: "#forge:ender_pearls",
      D: "#forge:circuits/ultimate",
      E: "modern_industrialization:advanced_motor",
      F: "modern_industrialization:conveyor",
    })
    .id("ftbneotech:mekanism_qio_importer_0");

  event
    .shaped("mekanism:industrial_alarm", ["AAA", "BCB", "AAA"], {
      A: "#forge:plates/lead",
      B: "#forge:circuits/basic",
      C: "minecraft:redstone_lamp",
    })
    .id("ftbneotech:mekanism_industrial_alarm_0");

  event
    .shaped("mekanism:configurator", ["AB", "C ", "D "], {
      A: "modern_industrialization:iron_bolt",
      B: "#forge:rods/iron",
      C: "#forge:ingots/constantan",
      D: "#forge:plates/steel",
    })
    .id("ftbneotech:mekanism_configurator_0");

  event
    .shaped("mekanism:network_reader", ["ABA", "CDC", "AAA"], {
      A: "#forge:plates/steel",
      B: "#forge:glass/silica",
      C: "actuallyadditions:basic_coil",
      D: "mekanism:energy_tablet",
    })
    .id("ftbneotech:mekanism_network_reader_0");

  event
    .shaped("mekanism:dosimeter", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/bronze",
      B: "#forge:plates/lead",
      C: "#forge:dusts/redstone",
    })
    .id("ftbneotech:mekanism_dosimeter_0");

  event
    .shaped("mekanism:geiger_counter", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/bronze",
      B: "#forge:plates/lead",
      C: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_geiger_counter_0");

  event
    .shaped("mekanism:gauge_dropper", [" A ", "BCB", " B "], {
      A: "modern_industrialization:rubber_sheet",
      B: "#forge:glass_panes",
      C: "minecraft:bucket",
    })
    .id("ftbneotech:mekanism_gauge_dropper_0");

  event
    .shaped("mekanism:scuba_mask", [" A ", "BCB", " A "], {
      A: "#forge:plates/steel",
      B: "#forge:glass/silica",
      C: "#forge:circuits/basic",
    })
    .id("ftbneotech:mekanism_scuba_mask_0");

  event
    .shaped("mekanism:scuba_tank", [" A ", "BCB", " D "], {
      A: "#forge:circuits/basic",
      B: "#forge:alloys/advanced",
      C: "mekanism:basic_chemical_tank",
      D: "#forge:plates/steel",
    })
    .id("ftbneotech:mekanism_scuba_tank_0");

  event
    .shaped("mekanism:free_runners_armored", [" A ", "BCB", " D "], {
      A: "#forge:storage_blocks/steel",
      B: "#forge:dusts/diamond",
      C: "mekanism:free_runners",
      D: "#forge:plates/bronze",
    })
    .id("ftbneotech:mekanism_free_runners_armored_0");

  event
    .shaped("mekanism:jetpack", ["ABA", "CDC", " E "], {
      A: "#forge:plates/steel",
      B: "modern_industrialization:electronic_circuit",
      C: "#forge:plates/tin",
      D: "hangglider:glider_framework",
      E: "#forge:plates/tin",
    })
    .id("ftbneotech:mekanism_jetpack_0");

  event
    .shaped("mekanism:jetpack_armored", [" A ", "BCB", " D "], {
      A: "#forge:dusts/diamond",
      B: "#forge:plates/bronze",
      C: "mekanism:jetpack",
      D: "#forge:storage_blocks/steel",
    })
    .id("ftbneotech:mekanism_jetpack_armored_0");

  event
    .shaped("mekanism:hazmat_mask", ["AAA", "BCB", " A "], {
      A: "#forge:plates/lead",
      B: "#forge:dyes/orange",
      C: "modern_industrialization:rubber_sheet",
    })
    .id("ftbneotech:mekanism_hazmat_mask_0");

  event
    .shaped("mekanism:hazmat_gown", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/lead",
      B: "#forge:dyes/orange",
      C: "#forge:plates/lead",
    })
    .id("ftbneotech:mekanism_hazmat_gown_0");

  event
    .shaped("mekanism:hazmat_pants", ["AAA", "BCB", "C C"], {
      A: "#forge:plates/lead",
      B: "#forge:dyes/orange",
      C: "modern_industrialization:rubber_sheet",
    })
    .id("ftbneotech:mekanism_hazmat_pants_0");

  event
    .shaped("mekanism:hazmat_boots", ["   ", "B B", "BDB"], {
      B: "#forge:plates/lead",
      D: "modern_industrialization:rubber_sheet",
    })
    .id("ftbneotech:mekanism_hazmat_boots_0");

  event
    .shaped("mekanism:flamethrower", ["AAA", "BC ", "DEA"], {
      A: "#forge:plates/tin",
      B: "mekanism:basic_chemical_tank",
      C: "minecraft:flint_and_steel",
      D: "#forge:plates/bronze",
      E: "#forge:circuits/advanced",
    })
    .id("ftbneotech:mekanism_flamethrower_0");

  event
    .shaped("mekanism:canteen", [" A ", "BDB", " A "], {
      A: "#forge:plates/tin",
      B: "minecraft:bowl",
      D: "modern_industrialization:rubber_sheet",
    })
    .id("ftbneotech:mekanism_canteen_0");

  event
    .shaped("mekanism:module_base", ["ABA", "BCB", "ABA"], {
      A: "#forge:ingots/bronze",
      B: "#forge:plates/tin",
      C: "mekanism:hdpe_sheet",
    })
    .id("ftbneotech:mekanism_module_base_0");

  event
    .custom({
      type: "mekanism:oxidizing",
      input: {
        ingredient: { item: "mekanism:pellet_polonium" },
      },
      output: { amount: 1000, gas: "mekanism:polonium" },
    })
    .id("ftbneotech:mekanism_polonium_from_pellet");

  //polonium
  event
    .custom({
      type: "modern_industrialization:implosion_compressor",
      eu: 1,
      duration: 10,
      item_inputs: [
        {
          item: "modern_industrialization:plutonium_tiny_dust",
          amount: 3,
        },
        {
          item: "equivalentexchange:dark_matter",
          amount: 1,
        },
      ],
      item_outputs: {
        item: "mekanism:pellet_polonium",
        amount: 1,
      },
    })
    .id("ftbneotech:polonium_from_plutonium");

  //Converting Brine into MI's Salt
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 100,
          FluidName: "mekanism:brine",
        },
      },
      item_output: {
        Amount: 1,
        item: "modern_industrialization:salt_dust",
      },
      speed: 0.3,
      temperature: {
        min: 333,
      },
    })
    .id("ftbneotech:brine_to_salt");
});
