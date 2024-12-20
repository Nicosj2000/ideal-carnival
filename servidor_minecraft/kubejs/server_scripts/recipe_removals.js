// priority: 0

const removeRecipesById = [
  "mob_grinding_utils:recipe_nutritious_feed",
  "mob_grinding_utils:recipe_cursed_feed",
  "comforts:rope_and_nail_shapeless",
  "immersiveengineering:crafting/hammercrushing_osmium",
  "immersiveengineering:crafting/raw_hammercrushing_osmium",
  "immersiveengineering:crafting/plate_uranium_hammering",
  "immersiveengineering:crafting/plate_constantan_hammering",
  "immersiveengineering:crafting/raw_hammercrushing_aluminum",
  "immersiveengineering:crafting/raw_hammercrushing_copper",
  "immersiveengineering:crafting/hammercrushing_copper",
  "immersiveengineering:crafting/plate_aluminum_hammering",
  "immersiveengineering:crafting/hammercrushing_aluminum",
  "immersiveengineering:crafting/plate_copper_hammering",
  "immersiveengineering:crafting/plate_electrum_hammering",
  "immersiveengineering:crafting/hammercrushing_gold",
  "immersiveengineering:crafting/raw_hammercrushing_gold",
  "immersiveengineering:crafting/plate_gold_hammering",
  "immersiveengineering:crafting/hammercrushing_iron",
  "immersiveengineering:crafting/raw_hammercrushing_iron",
  "immersiveengineering:crafting/plate_iron_hammering",
  "immersiveengineering:crafting/hammercrushing_lead",
  "actuallyadditions:rice_paper",
  "immersiveengineering:crafting/raw_hammercrushing_lead",
  "immersiveengineering:crafting/plate_lead_hammering",
  "mekanism:processing/steel/ingot/from_dust_smelting",
  "immersiveengineering:crafting/raw_hammercrushing_nickel",
  "immersiveengineering:crafting/hammercrushing_nickel",
  "integrateddynamics:crafting/logic_programmer",
  "immersiveengineering:crafting/plate_nickel_hammering",
  "immersiveengineering:crafting/hammercrushing_platinum",
  "immersiveengineering:crafting/raw_hammercrushing_platinum",
  "immersiveengineering:crafting/hammercrushing_silver",
  "immersiveengineering:crafting/raw_hammercrushing_silver",
  "immersiveengineering:crafting/plate_silver_hammering",
  "immersiveengineering:crafting/plate_steel_hammering",
  "immersiveengineering:crafting/hammercrushing_tin",
  "immersiveengineering:crafting/raw_hammercrushing_tin",
  "immersiveengineering:crafting/hammercrushing_tungsten",
  "immersiveengineering:crafting/raw_hammercrushing_tungsten",
  "immersiveengineering:crafting/hammercrushing_uranium",
  "immersiveengineering:crafting/raw_hammercrushing_uranium",
  "immersiveengineering:crafting/toolupgrade_revolver_electro",
  "sophisticatedbackpacks:backpack",
  "immersiveengineering:crafting/electrum_mix",
  "justhammers:netherite_impact_hammer",
  "justhammers:stone_destructor_hammer",
  "justhammers:stone_reinforced_impact_hammer",
  "justhammers:diamond_impact_hammer",
  "justhammers:iron_destructor_hammer",
  "justhammers:iron_reinforced_impact_hammer",
  "justhammers:gold_reinforced_impact_hammer",
  "justhammers:diamond_destructor_hammer",
  "justhammers:gold_impact_hammer",
  "justhammers:diamond_reinforced_impact_hammer",
  "justhammers:gold_destructor_hammer",
  "justhammers:iron_impact_hammer",
  "mekanism:sps_casing",
  "mekanism:processing/lategame/plutonium_pellet/from_reaction",
  "justhammers:netherite_reinforced_impact_hammer",
  "justhammers:netherite_destructor_hammer",
  "justhammers:stone_impact_hammer",
  "justhammers:netherite_reinforced_hammer",
  "justhammers:diamond_reinforced_hammer",
  "justhammers:gold_reinforced_hammer",
  "justhammers:iron_reinforced_hammer",
  "justhammers:stone_reinforced_hammer",
  "modern_industrialization:tools/diesel_mining_drill",
  "modern_industrialization:materials/bronze_dust",
  "jaopca:storage_blocks.to_storage_block.flour",
  "pamhc2crops:bread_grain",
  "minecraft:bread",
  "immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum",
  "immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum",
  "ae2:network/blocks/crystal_processing_charger",
  "jaopca:storage_blocks.to_storage_block.ender_pearl",
  "mekanism:storage_blocks/salt",
  "minecraft:netherite_ingot",
  "equiconstentexchange:philosophers_stone",
  "equivalentexchange:repair_talisman",
  "equivalentexchange:transmutation_table",
  "equivalentexchange:alchemical_chest",
  "immersiveengineering:crafting/blastbrick",
  "actuallyadditions:lens_of_the_miner",
  "justdirethings:gooblock_tier1",
  "justdirethings:gooblock_tier2",
  "justdirethings:gooblock_tier3",
  "justdirethings:gooblock_tier4",
  "farmingforblockheads:market",
  "justdirethings:pocket_generator",
  "actuallyadditions:iron_casing",
  "actuallyadditions:atomic_reconstructor",
  "tempad:tempad",
  "actuallyadditions:lens",
  "pamhc2crops:coffeebeanseeditem",
  "actuallyadditions:lava_factory_casing",
  "actuallyadditions:ender_casing",
  "actuallyadditions:wings_of_the_bats",
  "actuallyadditions:empowerer",
  "chickens:egg_cracker",
  "chickens:breeder",
  "chickens:catcher",
  "chickens:ovoscope",
  "chickens:incubator",
  "actuallyadditions:wood_casing",
  "actuallyadditions:canola_press",
  "actuallyadditions:crusher",
  "actuallyadditions:crusher_double",
  "actuallyadditions:oil_generator",
  "actuallyadditions:leaf_generator",
  "actuallyadditions:coal_generator",
  "actuallyadditions:breaker",
  "actuallyadditions:long_range_breaker",
  "copper_amulets:amulet_of_amulets_recipe",
  "copper_amulets:slime_amulet_recipe",
  "copper_amulets:obsidian_amulet_recipe",
  "copper_amulets:ocean_amulet_recipe",
  "copper_amulets:amethyst_amulet_recipe",
  "copper_amulets:end_amulet_recipe",
  "copper_amulets:emerald_amulet_recipe",
  "copper_amulets:diamond_amulet_recipe",
  "copper_amulets:quartz_amulet_recipe",
  "copper_amulets:redstone_amulet_recipe",
  "copper_amulets:lapis_amulet_recipe",
  "copper_amulets:gold_amulet_recipe",
  "copper_amulets:iron_amulet_recipe",
  "copper_amulets:empty_amulet_recipe",
  "undergarden:catalyst",
  "actuallyadditions:quintuple_battery",
  "actuallyadditions:quadruple_battery",
  "actuallyadditions:triple_battery",
  "actuallyadditions:laser_relay",
  "simplemagnets:advancedmagnet",
  "simplemagnets:basicmagnet",
  "actuallyadditions:heat_collector",
  "actuallyadditions:battery_box",
  "actuallyadditions:powered_furnace",
  "actuallyadditions:dropper",
  "actuallyadditions:farmer",
  "actuallyadditions:placer",
  "minecraft:slime_block",
  "immersiveengineering:crafting/capacitor_lv",
  "ae2:network/blocks/inscribers",
  "modern_industrialization:materials/bronze_tiny_dust",
  "mekanism:nuggets/steel",
  "immersiveengineering:crafting/ingot_steel_to_nugget_steel",
  "mekanism:nuggets/bronze",
  "mekanism:processing/tin/nugget/from_ingot",
  "mekanism:processing/lead/nugget/from_ingot",
  "mekanism:processing/uranium/nugget/from_ingot",
  "immersiveengineering:crafting/copper_ingot_to_nugget_copper",
  "pneumaticcraft:copper_nugget",
  "immersiveengineering:crafting/ingot_lead_to_nugget_lead",
  "immersiveengineering:crafting/ingot_silver_to_nugget_silver",
  "immersiveengineering:crafting/ingot_nickel_to_nugget_nickel",
  "immersiveengineering:crafting/ingot_uranium_to_nugget_uranium",
  "immersiveengineering:crafting/ingot_electrum_to_nugget_electrum",
  "mekanism:processing/uranium/raw_storage_blocks/from_raw",
  "immersiveengineering:crafting/coal_coke_to_coke",
  "immersiveengineering:crafting/raw_silver_to_raw_block_silver",
  "immersiveengineering:crafting/raw_lead_to_raw_block_lead",
  "immersiveengineering:crafting/raw_nickel_to_raw_block_nickel",
  "immersiveengineering:crafting/ingot_silver_to_storage_silver",
  "immersiveengineering:crafting/ingot_lead_to_storage_lead",
  "immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum",
  "immersiveengineering:crafting/raw_uranium_to_raw_block_uranium",
  "immersiveengineering:crafting/ingot_nickel_to_storage_nickel",
  "mekanism:storage_blocks/bronze",
  "mekanism:storage_blocks/steel",
  "mekanism:processing/tin/storage_blocks/from_ingots",
  "mekanism:processing/lead/storage_blocks/from_ingots",
  "mekanism:processing/steel/ingot/from_block",
  "mekanism:processing/steel/ingot/from_nuggets",
  "mekanism:processing/uranium/storage_blocks/from_ingots",
  "mekanism:processing/tin/raw_storage_blocks/from_raw",
  "mekanism:processing/lead/raw_storage_blocks/from_raw",
  "immersiveengineering:crafting/string",
  "entangled:block",
  "immersiveengineering:crafting/wire_copper",
  "immersiveengineering:crafting/wire_electrum",
  "immersiveengineering:crafting/wire_aluminum",
  "immersiveengineering:crafting/wire_lead",
  "immersiveengineering:crafting/wirecutter",
  "immersiveengineering:crafting/screwdriver",
  "immersiveengineering:crafting/toolbox",
  "entangled:block",
  "immersiveengineering:crafting/wire_copper",
  "immersiveengineering:crafting/wire_electrum",
  "immersiveengineering:crafting/wire_aluminum",
  "immersiveengineering:crafting/screwdriver",
  "immersiveengineering:crafting/wirecutter",
  "immersiveengineering:crafting/wire_lead",
  "immersiveengineering:crafting/toolbox",
  "javd:portal_block",
  "shrink:shrinking_device",
  "mekanism:steel_casing",
  "mekanism:tier_installer/basic",
  "mekanism:tier_installer/advanced",
  "mekanism:tier_installer/elite",
  "mekanism:tier_installer/ultimate",
  "mekanism:enrichment_chamber",
  "mekanism:osmium_compressor",
  "mekanism:combiner",
  "mekanism:crusher",
  "mekanism:metallurgic_infuser",
  "mekanism:energized_smelter",
  "mekanism:electric_pump",
  "mekanism:logistical_sorter",
  "mekanism:rotary_condensentrator",
  "mekanism:chemical_oxidizer",
  "mekanism:chemical_infuser",
  "mekanism:chemical_injection_chamber",
  "mekanism:electrolytic_separator",
  "mekanism:precision_sawmill",
  "mekanism:seismic_vibrator",
  "mekanism:pressurized_reaction_chamber",
  "mekanism:isotopic_centrifuge",
  "mekanism:nutritional_liquifier",
  "mekanism:fluid_tank/basic",
  "mekanism:fluid_tank/advanced",
  "mekanism:fluid_tank/elite",
  "mekanism:fluid_tank/ultimate",
  "mekanism:fluidic_plenisher",
  "mekanism:solar_neutron_activator",
  "mekanism:resistive_heater",
  "mekanism:formulaic_assemblicator",
  "mekanism:pigment_extractor",
  "mekanism:dimensional_stabilizer",
  "mekanism:energy_cube/basic",
  "mekanism:energy_cube/advanced",
  "mekanism:energy_cube/elite",
  "mekanism:energy_cube/ultimate",
  "mekanism:transmitter/universal_cable/basic",
  "mekanism:transmitter/logistical_transporter/basic",
  "mekanism:transmitter/restrictive_transporter",
  "mekanism:transmitter/diversion_transporter",
  "mekanism:transmitter/thermodynamic_conductor/basic",
  "mekanism:security_desk",
  "mekanism:radioactive_waste_barrel",
  "mekanism:personal_chest",
  "mekanism:personal_barrel",
  "mekanism:chargepad",
  "mekanism:laser",
  "mekanism:laser_amplifier",
  "mekanism:oredictionificator",
  "mekanism:fuelwood_heater",
  "mekanism:qio_dashboard",
  "mekanism:qio_exporter",
  "mekanism:qio_importer",
  "mekanism:industrial_alarm",
  "mekanism:configurator",
  "mekanism:network_reader",
  "mekanism:dosimeter",
  "mekanism:geiger_counter",
  "mekanism:gauge_dropper",
  "mekanism:scuba_mask",
  "mekanism:scuba_tank",
  "mekanism:free_runners_armored",
  "mekanism:jetpack",
  "mekanism:jetpack_armored",
  "mekanism:hazmat_mask",
  "mekanism:hazmat_gown",
  "mekanism:hazmat_pants",
  "mekanism:hazmat_boots",
  "mekanism:flamethrower",
  "mekanism:canteen",
  "mekanism:module_base",
  "laserio:logic_chip_raw",
  "laserio:overclocker_card",
  "laserio:overclocker_node",
  "laserio:laser_wrench",
  "laserio:laser_connector",
  "laserio:laser_node",
  "laserio:laser_connector_advanced",
  "laserio:card_holder",
  "laserio:card_cloner",
  "immersiveengineering:crafting/hammer",
  "immersiveengineering:crafting/cokebrick",
  "hangglider:glider_framework",
  "hangglider:glider_wing",
  "buildinggadgets2:gadget_building",
  "buildinggadgets2:template_manager",
  "buildinggadgets2:gadget_copy_paste",
  "buildinggadgets2:gadget_exchanging",
  "buildinggadgets2:gadget_cut_paste",
  "buildinggadgets2:gadget_destruction",
  "actuallyadditions:empty_cup",
  "actuallyadditions:ring",
  "actuallyadditions:basic_coil",
  "actuallyadditions:advanced_coil",
  "actuallyadditions:rice_slime",
  "actuallyadditions:rice_slime_potion",
  "actuallyadditions:drill_core",
  "actuallyadditions:engineers_goggles",
  "actuallyadditions:laser_upgrade_range",
  "actuallyadditions:laser_upgrade_invisibility",
  "actuallyadditions:handheld_filler",
  "actuallyadditions:travelers_sack",
  "actuallyadditions:player_probe",
  "actuallyadditions:crate_keeper",
  "actuallyadditions:laser_wrench",
  "actuallyadditions:ring_of_magnetizing",
  "actuallyadditions:teleport_staff",
  "actuallyadditions:drill_light_blue",
  "actuallyadditions:single_battery",
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
  "sfm:manager",
  "sfm:cable",
  "sfm:water_tank",
  "sfm:labelgun",
  "sfm:network_tool",
  "sfm:printing_press",
  "sophisticatedstorage:storage_input",
  "sophisticatedstorage:storage_output",
  "sophisticatedstorage:storage_io",
  "sophisticatedstorage:storage_link_from_controller",
  "sophisticatedstorage:storage_link",
  "sophisticatedstorage:controller",
  "mffs:focus_matrix",
  "mffs:battery",
  "mffs:projector",
  "mffs:coercion_deriver",
  "mffs:fortron_capacitor",
  "mffs:biometric_identifier",
  "mffs:remote_controller",
  "mffs:shock_module",
  "mffs:stabilization_module",
  "mffs:blank_card",
  "mob_grinding_utils:recipe_jumbotank",
  "mob_grinding_utils:recipe_xp_tap",
  "mob_grinding_utils:recipe_mould_blank",
  "mob_grinding_utils:recipe_absorbtion_hopper",
  "mob_grinding_utils:recipe_spikes",
  "mob_grinding_utils:recipe_saw",
  "mob_grinding_utils:recipe_fan",
  "mob_grinding_utils:recipe_solidifier",
  "mob_grinding_utils:recipe_entity_conveyor",
  "mob_grinding_utils:recipe_entity_spawner",
  "mob_grinding_utils:recipe_mob_swab",
  "mob_grinding_utils:recipe_tintedglass",
  "mob_grinding_utils:recipe_ender_inhibitor",
  "mob_grinding_utils:recipe_saw_upgrade_arthropod",
  "mob_grinding_utils:recipe_saw_upgrade_beheading",
  "mob_grinding_utils:recipe_saw_upgrade_smite",
  "mob_grinding_utils:recipe_saw_upgrade_fire",
  "mob_grinding_utils:recipe_saw_upgrade_sharpness",
  "mob_grinding_utils:recipe_saw_upgrade_looting",
  "mob_grinding_utils:recipe_absorbtion_upgrade",
  "mob_grinding_utils:recipe_spawner_upgrade_width",
  "mob_grinding_utils:recipe_spawner_upgrade_height",
  "mob_grinding_utils:recipe_xpsolidifier_upgrade",
  "mob_grinding_utils:recipe_fan_upgrade_width",
  "mob_grinding_utils:recipe_fan_upgrade_height",
  "mob_grinding_utils:recipe_fan_upgrade_speed",
  "gag:time_sand_pouch",
  "darkutils:crafting/vector_plate",
  "minecraft:tnt",
  "equivalentexchange:condenser",
  "immersiveengineering:crafting/thermoelectric_generator",
  "immersiveengineering:crafting/dynamo",
  "mekanism:processing/uranium/ingot/from_raw_smelting",
  "mekanism:processing/uranium/ingot/from_ore_smelting",
  "mekanism:processing/uranium/ingot/from_ore_blasting",
  "mekanism:processing/uranium/ingot/from_raw_blasting",
  "dimstorage:dim_core",
  "dimstorage:dim_wall",
  "dimstorage:dimensional_tablet",
  "dimstorage:solid_dim_core",
  "ae2:network/blocks/controller",
  "ae2:network/blocks/energy_energy_acceptor",
  "dimstorage:dimensional_tablet",
  "minecraft:enchanting_table",
  "ae2:materials/formationcore",
  "ae2:materials/annihilationcore",
  "ae2:network/crafting/cpu_crafting_unit",
  "ae2:network/blocks/energy_vibration_chamber",
  "ae2things:cells/disk_drive_1k",
  "ae2things:cells/disk_drive_4k",
  "ae2things:cells/disk_drive_16k",
  "ae2things:cells/disk_drive_64k",
  "ae2things:cells/disk_drive_256k",
  "ae2things:cells/disk_housing",
  "modern_industrialization:materials/coal/macerator/crushed_dust",
  "minecraft:iron_ingot_from_smelting_iron_ore",
  "minecraft:iron_ingot_from_smelting_deepslate_iron_ore",
  "minecraft:iron_ingot_from_smelting_raw_iron",
  "minecraft:iron_ingot_from_blasting_iron_ore",
  "minecraft:iron_ingot_from_blasting_deepslate_iron_ore",
  "minecraft:iron_ingot_from_blasting_raw_iron",
  "minecraft:copper_ingot_from_smelting_copper_ore",
  "minecraft:copper_ingot_from_smelting_deepslate_copper_ore",
  "minecraft:copper_ingot_from_smelting_raw_copper",
  "minecraft:gold_ingot_from_smelting_gold_ore",
  "minecraft:gold_ingot_from_smelting_deepslate_gold_ore",
  "minecraft:gold_ingot_from_smelting_nether_gold_ore",
  "minecraft:gold_ingot_from_smelting_raw_gold",
  "mekanism:processing/osmium/ingot/from_ore_smelting",
  "mekanism:processing/osmium/ingot/from_dust_smelting",
  "mekanism:processing/osmium/ingot/from_raw_smelting",
  "mekanism:processing/osmium/ingot/from_ore_blasting",
  "mekanism:processing/osmium/ingot/from_dust_blasting",
  "mekanism:processing/osmium/ingot/from_raw_blasting",
  "justdirethings:blazegold_ingot_smelted",
  "justdirethings:eclipsealloy_ingot_smelted",
  "modern_industrialization:materials/antimony/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/antimony/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/antimony/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:/mekanism_generated/materials/lead/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:/mekanism_generated/materials/lead/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:/mekanism_generated/materials/lead/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/nickel/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/silver/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/silver/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/tin/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/tin/smelting/raw_metal_to_ingot_smelting",
  "immersiveengineering:crafting/constantan_mix",
  "immersiveengineering:smelting/ingot_silver_from_blasting2",
  "mekanism:processing/lead/ingot/from_ore_blasting",
  "immersiveengineering:smelting/ingot_uranium_from_blasting2",
  "minecraft:gold_ingot_from_blasting_raw_gold",
  "modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_blasting",
  "minecraft:gold_ingot_from_blasting_nether_gold_ore",
  "minecraft:gold_ingot_from_blasting_gold_ore",
  "immersiveengineering:smelting/ingot_nickel_from_blasting",
  "immersiveengineering:smelting/ingot_aluminum_from_blasting2",
  "immersiveengineering:smelting/ingot_aluminum_from_blasting3",
  "immersiveengineering:smelting/ingot_aluminum_from_blasting",
  "immersiveengineering:smelting/ingot_lead_from_blasting",
  "immersiveengineering:smelting/ingot_uranium_from_blasting",
  "mekanism:processing/tin/ingot/from_raw_blasting",
  "modern_industrialization:materials/lignite_coal/smelting/ore_deepslate_to_gem_blasting",
  "minecraft:copper_ingot_from_blasting_copper_ore",
  "mekanism:processing/tin/ingot/from_ore_blasting",
  "minecraft:copper_ingot_from_blasting_deepslate_copper_ore",
  "immersiveengineering:smelting/ingot_nickel_from_blasting2",
  "immersiveengineering:smelting/ingot_silver_from_blasting",
  "modern_industrialization:materials/iridium/smelting/ore_to_ingot_blasting",
  "immersiveengineering:smelting/ingot_lead_from_blasting2",
  "mekanism:processing/lead/ingot/from_raw_blasting",
  "immersiveengineering:smelting/ingot_silver2",
  "immersiveengineering:/mekanism_generated/smelting/ingot_silver2",
  "immersiveengineering:smelting/ingot_silver2_exported_mi_furnace",
  "modern_industrialization:materials/lignite_coal/smelting/ore_to_gem_blasting",
  "minecraft:copper_ingot_from_blasting_raw_copper",
  "minecraft:gold_ingot_from_blasting_deepslate_gold_ore",
  "equivalentexchange:philosophers_stone",
  "modern_industrialization:materials/silver/craft/raw_metal_block_from_raw_metal",
  "immersiveengineering:smelting/ingot_silver",
  "immersiveengineering:smelting/ingot_silver_exported_mi_furnace",
  "modularrouters:blank_module",
  "modularrouters:modular_router",
  "modularrouters:blank_upgrade",
  "modularrouters:extruder_module_2",
  "modularrouters:fluid_module_2",
  "modularrouters:fluid_module_2_x4",
  "modularrouters:puller_module_2",
  "modularrouters:puller_module_2_x4",
  "modularrouters:sender_module_2",
  "modularrouters:sender_module_2_x4",
  "modularrouters:sender_module_3",
  "modularrouters:activator_module",
  "modularrouters:energy_output_module",
  "modularrouters:energy_upgrade",
  "modularrouters:speed_upgrade",
  "mekanism:processing/tin/ingot/from_ore_smelting",
  "mekanism:mekanism_generated/processing/tin/ingot/from_ore_smelting",
  "mekanism:processing/tin/ingot/from_ore_smelting",
  "modern_industrialization:materials/lead/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/ore_to_ingot_smelting",
  "modern_industrialization:mekanism_generated/materials/lead/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:mekanism_generated/materials/lead/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/ore_deepslate_to_ingot_smelting_exported_mi_furnace",
  "modern_industrialization:materials/lead/smelting/ore_to_ingot_smelting_exported_mi_furnace",
  "pneumaticcraft:liquid_hopper",
  "mekanism:processing/tin/ingot/from_nuggets",
  "mekanism:processing/tin/ingot/from_block",
  "mekanism:processing/tin/ingot/from_dust_smelting",
  "mekanism:processing/lead/ingot/from_block",
  "mekanism:processing/lead/ingot/from_nuggets",
  "mekanism:processing/lead/ingot/from_ore_smelting",
  "mekanism:processing/lead/ingot/from_dust_smelting",
  "mekanism:processing/uranium/ingot/from_nuggets",
  "mekanism:processing/uranium/ingot/from_block",
  "prettypipes:pipe",
  "prettypipes:pressurizer",
  "prettypipes:crafting_terminal",
  "prettypipes:item_terminal",
  "prettypipes:medium_crafting_module",
  "prettypipes:low_crafting_module",
  "prettypipes:high_crafting_module",
  "prettypipes:medium_extraction_module",
  "prettypipes:low_extraction_module",
  "prettypipes:high_extraction_module",
  "prettypipes:filter_increase_modifier",
  "prettypipes:damage_filter_modifier",
  "prettypipes:tag_filter_modifier",
  "prettypipes:mod_filter_modifier",
  "prettypipes:nbt_filter_modifier",
  "prettypipes:high_filter_module",
  "prettypipes:low_filter_module",
  "prettypipes:medium_filter_module",
  "prettypipes:medium_high_priority_module",
  "prettypipes:high_high_priority_module",
  "prettypipes:low_high_priority_module",
  "prettypipes:blank_module",
  "prettypipes:medium_low_priority_module",
  "prettypipes:low_low_priority_module",
  "prettypipes:redstone_module",
  "prettypipes:medium_retrieval_module",
  "prettypipes:high_retrieval_module",
  "prettypipes:low_retrieval_module",
  "prettypipes:round_robin_sorting_modifier",
  "prettypipes:random_sorting_modifier",
  "prettypipes:medium_speed_module",
  "prettypipes:low_speed_module",
  "prettypipes:high_speed_module",
  "prettypipes:stack_size_module",
  "prettypipes:wrench",
  "modern_industrialization:materials/heat_exchanger/lava",
  "pamhc2crops:cactus_x2_cactus_plants",
  "pamhc2crops:paper_x2_paper_plants",
  "mekanism:processing/lategame/polonium_pellet/from_reaction",
  "pneumaticcraft:pressure_tube",
  "modern_industrialization:materials/lignite_coal/compressor/lignite_coal",
  "justanotherchiselmod:marble/marble",
  "justanotherchiselmod:factory/factory_stonecutting",
  "modern_industrialization:materials/lignite_coal/forge_hammer/ore_to_crushed_dust",
  "modern_industrialization:materials/lignite_coal/forge_hammer/ore_to_crushed_dust_with_tool",
  "modern_industrialization:materials/lignite_coal/forge_hammer/ore_to_dust_with_tool",
  "modern_industrialization:materials/lignite_coal/compressor/lignite_coal",
  "modern_industrialization:materials/lignite_coal/macerator/ore_to_crushed",
  "modern_industrialization:materials/lignite_coal/packer/dust",
  "modern_industrialization:materials/lignite_coal/unpacker/gem",
  "modern_industrialization:materials/lignite_coal/unpacker/tiny_dust",
  "immersiveengineering:crusher/raw_ore_aluminum",
  "solonion:lunchbag",
  "solonion:golden_lunchbox",
  "solonion:lunchbox",
  "immersiveengineering:smelting/ingot_uranium",
  "mekanism:processing/bronze/ingot/from_nuggets",
  "mekanism:processing/bronze/ingot/from_block",
  "mekanism:processing/bronze/ingot/from_infusing",
  "mekanism:processing/lead/raw/from_raw_block",
  "mekanism:processing/tin/raw/from_raw_block",
  "mekanism:processing/uranium/raw/from_raw_block",
  "extendedae:inscriber/concurrent_process",
  "extendedae:inscriber/concurrent_print",
  "extendedae:inscriber/crush_entro",
  "extendedae:cutter/accumulation_processor",
  "extendedae:cutter/logic_processor",
  "extendedae:cutter/fishbig_destroy",
  "extendedae:cutter/calculation_processor",
  "extendedae:cutter/engineering_processor",
  "extendedae:cutter/concurrent_processor",
  "extendedae:cutter/silicon_print",
];

const IECrushingRemovebyID = [
  "immersiveengineering:crusher/ore_aluminum",
  "immersiveengineering:crusher/raw_block_aluminum",
  "immersiveengineering:crusher/ore_nickel",
  "immersiveengineering:crusher/raw_block_nickel",
  "immersiveengineering:crusher/ore_silver",
  "immersiveengineering:crusher/raw_block_silver",
  "immersiveengineering:crusher/raw_block_uranium",
  "immersiveengineering:crusher/ore_uranium",
  "immersiveengineering:crusher/raw_block_lead",
  "immersiveengineering:crusher/ore_lead",
  "immersiveengineering:crusher/ore_tin",
  "immersiveengineering:crusher/raw_block_tin",
  "immersiveengineering:crusher/raw_block_copper",
  "immersiveengineering:crusher/ore_copper",
  "immersiveengineering:crusher/ore_gold",
  "immersiveengineering:crusher/raw_block_gold",
  "immersiveengineering:crusher/raw_block_iron",
  "immersiveengineering:crusher/ore_iron",
  "immersiveengineering:crusher/ore_diamond",
  "immersiveengineering:crusher/ore_emerald",
  "immersiveengineering:crusher/ore_lapis",
  "immersiveengineering:crusher/ore_quartz",
  "immersiveengineering:crusher/raw_ore_iron",
  "immersiveengineering:crusher/raw_ore_copper",
  "immersiveengineering:crusher/raw_ore_gold",
  "immersiveengineering:crusher/raw_ore_lead",
  "immersiveengineering:crusher/raw_ore_nickel",
  "immersiveengineering:crusher/raw_ore_silver",
  "immersiveengineering:crusher/raw_ore_uranium",
];

const arcFurnaceRemoveByID = [
  "immersiveengineering:arcfurnace/ore_aluminum",
  "immersiveengineering:arcfurnace/raw_ore_aluminum",
  "immersiveengineering:arcfurnace/raw_block_aluminum",
  "immersiveengineering:arcfurnace/raw_ore_tungsten",
  "immersiveengineering:arcfurnace/raw_block_tungsten",
  "immersiveengineering:arcfurnace/dust_tungsten",
  "immersiveengineering:arcfurnace/ore_tungsten",
  "immersiveengineering:arcfurnace/raw_ore_iron",
  "immersiveengineering:arcfurnace/raw_ore_copper",
  "immersiveengineering:arcfurnace/raw_ore_gold",
  "immersiveengineering:arcfurnace/raw_ore_lead",
  "immersiveengineering:arcfurnace/raw_ore_nickel",
  "immersiveengineering:arcfurnace/raw_ore_silver",
  "immersiveengineering:arcfurnace/raw_ore_uranium",
  "immersiveengineering:arcfurnace/raw_block_iron",
  "immersiveengineering:arcfurnace/raw_block_gold",
  "immersiveengineering:arcfurnace/raw_block_copper",
  "immersiveengineering:arcfurnace/raw_block_lead",
  "immersiveengineering:arcfurnace/raw_block_nickel",
  "immersiveengineering:arcfurnace/raw_block_silver",
  "immersiveengineering:arcfurnace/raw_block_uranium",
];

const removeSmeltingByID = [
  "mekanism:processing/iron/ingot/from_dust_smelting",
  "undergarden:smelt_shiverstone_iron_ore",
  "undergarden:smelt_depthrock_iron_ore",
  "immersiveengineering:smelting/iron_ingot_from_dust",
  "mekanism:processing/copper/ingot/from_dust_smelting",
  "immersiveengineering:smelting/copper_ingot_from_dust",
  "modern_industrialization:materials/gold/smelting/dust_to_ingot_smelting",
  "immersiveengineering:smelting/gold_ingot_from_dust",
  "undergarden:smelt_depthrock_gold_ore",
  "immersiveengineering:smelting/lead_red",
  "undergarden:smelt_catalyst",
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "immersiveengineering:smelting/nugget_steel_recycle_pick",
  "immersiveengineering:smelting/nugget_steel_recycle_shovel",
  "immersiveengineering:smelting/nugget_steel_recycle_axe",
  "immersiveengineering:smelting/nugget_steel_recycle_sword",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_helmet",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_chestplate",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_leggings",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_boots",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_helmet",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_chestplate",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_leggings",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_boots",
  "mekanism:processing/uranium/ingot/from_dust_smelting",
  "immersiveengineering:smelting/ingot_uranium_from_dust",
  "immersiveengineering:smelting/ingot_lead3",
  "immersiveengineering:smelting/ingot_electrum_from_dust",
  "immersiveengineering:smelting/ingot_lead_from_dust",
  "immersiveengineering:smelting/ingot_nickel3",
  "immersiveengineering:smelting/ingot_steel_from_dust",
  "immersiveengineering:smelting/ingot_uranium3",
  "immersiveengineering:smelting/ingot_silver_from_dust",
  "immersiveengineering:smelting/ingot_aluminum_from_dust",
  "immersiveengineering:smelting/ingot_silver3",
  "immersiveengineering:smelting/ingot_nickel_from_dust",
  "mekanism:processing/netherite/ingot_from_dust_smelting",
  "pneumaticcraft:thermopneumatic_processing_plant",
  "sophisticatedstorage:controller",
  "sophisticatedstorage:storage_link",
  "sophisticatedstorage:storage_link_from_controller",
  "minecraft:lapis_lazuli_from_smelting_lapis_ore",
  "minecraft:lapis_lazuli_from_blasting_lapis_ore",
  "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore",
  "minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore",
  "minecraft:emerald_from_smelting_emerald_ore",
  "minecraft:emerald_from_smelting_deepslate_emerald_ore",
  "minecraft:emerald_from_blasting_emerald_ore",
  "minecraft:emerald_from_blasting_deepslate_emerald_ore",
  "minecraft:redstone_from_smelting_redstone_ore",
  "minecraft:redstone_from_smelting_deepslate_redstone_ore",
  "minecraft:redstone_from_blasting_redstone_ore",
  "minecraft:redstone_from_blasting_deepslate_redstone_ore",
  "minecraft:diamond_from_smelting_diamond_ore",
  "minecraft:diamond_from_smelting_deepslate_diamond_ore",
  "undergarden:smelt_catalyst",
  "minecraft:diamond_from_blasting_diamond_ore",
  "minecraft:diamond_from_blasting_deepslate_diamond_ore",
  "undergarden:blast_catalyst",
  "immersiveengineering:crafting/stick_steel",
  "minecraft:quartz",
  "actuallyadditions:black_quartz_ore_smelting",
  "undergarden:smelt_raw_cloggrum",
  "undergarden:smelt_raw_froststeel",
  "modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/raw_metal_to_ingot_smelting",
  "mekanism:processing/lead/ingot/from_raw_smelting",
  "mekanism:processing/tin/ingot/from_raw_smelting",
];

const removeSqueezingByID = [
  "immersiveengineering:squeezer/wheat_seeds",
  "immersiveengineering:squeezer/hemp_seeds",
  "immersiveengineering:squeezer/beetroot_seeds",
  "immersiveengineering:squeezer/melon_seeds",
  "immersiveengineering:squeezer/pumpkin_seeds",
  "immersiveengineering:squeezer/graphite_dust",
];

const removeBlastingByID = [
  "immersiveengineering:smelting/nugget_steel_recycle_pick_from_blasting",
  "mekanism:processing/netherite/ingot_from_dust_blasting",
  "undergarden:blast_depthrock_iron_ore",
  "immersiveengineering:smelting/iron_ingot_from_dust_from_blasting",
  "undergarden:blast_shiverstone_iron_ore",
  "undergarden:blast_catalyst",
  "minecraft:iron_nugget_from_blasting",
  "minecraft:gold_nugget_from_blasting",
  "immersiveengineering:smelting/copper_ingot_from_dust_from_blasting",
  "immersiveengineering:smelting/gold_ingot_from_dust_from_blasting",
  "mekanism:processing/gold/ingot/from_dust_blasting",
  "mekanism:processing/copper/ingot/from_dust_blasting",
  "mekanism:processing/iron/ingot/from_dust_blasting",
  "undergarden:blast_depthrock_gold_ore",
  "immersiveengineering:smelting/nugget_steel_recycle_shovel_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_axe_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_sword_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_helmet_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_chestplate_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_leggings_from_blasting",
  "immersiveengineering:smelting/nugget_steel_recycle_steel_boots_from_blasting",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_helmet_from_blasting",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_chestplate_from_blasting",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_leggings_from_blasting",
  "immersiveengineering:smelting/nugget_aluminum_recycle_faraday_boots_from_blasting",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "mekanism:processing/lead/ingot/from_dust_blasting",
  "mekanism:processing/bronze/ingot/from_dust_blasting",
  "mekanism:processing/steel/ingot/from_dust_blasting",
  "mekanism:processing/tin/ingot/from_dust_blasting",
  "mekanism:processing/uranium/ingot/from_dust_blasting",
  "immersiveengineering:smelting/ingot_silver_from_blasting3",
  "immersiveengineering:smelting/ingot_uranium_from_blasting3",
  "immersiveengineering:smelting/ingot_electrum_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_silver_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_lead_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_nickel_from_blasting3",
  "immersiveengineering:smelting/ingot_lead_from_blasting3",
  "immersiveengineering:smelting/ingot_steel_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting",
  "immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting",
  "minecraft:gold_ingot_from_blasting_raw_gold",
  "minecraft:copper_ingot_from_blasting_raw_copper",
  "actuallyadditions:black_quartz_ore_blasting",
  "minecraft:quartz_from_blasting",
  "undergarden:blast_raw_cloggrum",
  "undergarden:blast_raw_froststeel",
  "modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_blasting",
  "mekanism:processing/lead/ingot/from_raw_blasting",
  "mekanism:processing/tin/ingot/from_raw_blasting",
];

const removeElectrolyzerByID = [
  "modern_industrialization:compat/ae2/electrolyzer/ae2_certus_quartz_crystal_to_ae2_charged_certus_quartz_crystal",
];

const mixerRemoveByID = [
  "modern_industrialization:vanilla_recipes/mixer/netherite",
];
const removeFromMarketByID = [
  "farmingforblockheads:market/pamhc2crops/coffeebeanseeditem",
];

const removeFromMetalPressById = [
  "immersiveengineering:metalpress/plate_uranium",
];

ServerEvents.recipes((event) => {
  removeRecipesById.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  IECrushingRemovebyID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  arcFurnaceRemoveByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeSmeltingByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeSqueezingByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeBlastingByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeElectrolyzerByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  mixerRemoveByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeFromMarketByID.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
  removeFromMetalPressById.forEach((recipe) => {
    console.log("Removing Recipe: " + recipe);
    event.remove({ id: recipe });
  });
});
