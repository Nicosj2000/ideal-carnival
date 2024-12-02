// priority: 1000

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:iron_ingot",
    "#forge:plates/steel"
  );
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:gold_ingot",
    "#forge:plates/electrum"
  );
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:redstone",
    "actuallyadditions:restonia_crystal"
  );
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:copper_ingot",
    "#forge:plates/copper"
  );
  event.replaceInput(
    { mod: "ae2things" },
    "minecraft:iron_ingot",
    "#forge:plates/steel"
  );
  event.replaceInput(
    { mod: "ae2things" },
    "minecraft:gold_ingot",
    "#forge:plates/electrum"
  );
  event.replaceInput(
    { mod: "ae2things" },
    "minecraft:redstone",
    "actuallyadditions:restonia_crystal"
  );
  event.replaceInput(
    { mod: "ae2things" },
    "minecraft:copper_ingot",
    "#forge:plates/copper"
  );
  event.replaceInput(
    { mod: "megacells" },
    "minecraft:iron_ingot",
    "#forge:ingots/steel"
  );
  event.replaceInput(
    { mod: "megacells" },
    "minecraft:gold_ingot",
    "#forge:plates/electrum"
  );
  event.replaceInput(
    { mod: "megacells" },
    "minecraft:redstone",
    "actuallyadditions:restonia_crystal"
  );
  event.replaceInput(
    { mod: "megacells" },
    "minecraft:copper_ingot",
    "#forge:plates/copper"
  );

  event
    .custom({
      type: "modern_industrialization:polarizer",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          item: "ae2:certus_quartz_crystal",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ae2:charged_certus_quartz_crystal",
        },
      ],
    })
    .id("ftbneotech:charged_certus_quartz_crystal");

  event
    .custom({
      type: "modern_industrialization:polarizer",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          item: "minecraft:compass",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ae2:meteorite_compass",
        },
      ],
    })
    .id("ftbneotech:meteorite_compass");

  event.custom({
    type: "modern_industrialization:polarizer",
    duration: 200,
    eu: 8,
    item_inputs: [
      {
        amount: 1,
        item: "minecraft:book",
      },
    ],
    item_outputs: [
      {
        amount: 1,
        item: "ae2:guide",
      },
    ],
  });

  //entro dust
  event
    .custom({
      type: "modern_industrialization:macerator",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          tag: "forge:gems/entro",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "extendedae:entro_dust",
        },
      ],
    })
    .id("ftbneotech:ae2_entro_dust");

  //entro printed
  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          item: "extendedae:entro_crystal",
        },
        {
          amount: 1,
          item: "extendedae:concurrent_processor_press",
          probability: 0.0,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "extendedae:concurrent_processor_print",
        },
      ],
    })
    .id("ftbneotech:ae2_entro_printed");

  //entro processor
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 200,
      eu: 8,
      fluid_inputs: [
        {
          amount: 90,
          fluid: "modern_industrialization:molten_redstone",
        },
      ],
      item_inputs: [
        {
          amount: 1,
          item: "extendedae:concurrent_processor_print",
        },
        {
          amount: 1,
          item: "ae2:printed_silicon",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "extendedae:concurrent_processor",
        },
      ],
    })
    .id("ftbneotech:ae2_entro_processor");

  //controller
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 600,
      eu: 16,
      item_inputs: [
        {
          amount: 1,
          item: "ae2:engineering_processor",
        },
        {
          amount: 2,
          item: "modern_industrialization:electronic_circuit",
        },
        {
          amount: 4,
          item: "megacells:sky_steel_ingot",
        },
        {
          amount: 16,
          item: "ae2:fluix_crystal",
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
          item: "ae2:controller",
        },
      ],
    })
    .id("ftbneotech:ae2_controller");

  //netherite drives
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 100,
      eu: 112,
      item_inputs: [
        {
          amount: 4,
          item: "ae2:quartz_vibrant_glass",
        },
        {
          amount: 2,
          item: "minecraft:amethyst_shard",
        },
        {
          amount: 1,
          item: "minecraft:netherite_ingot",
        },
      ],
      fluid_inputs: [
        {
          amount: 180,
          fluid: "modern_industrialization:molten_redstone",
          probability: 1.0,
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: "ae2things:disk_housing",
        },
      ],
    })
    .id("ftbneotech:ae2_disk_housing_netherrite");

  //crafting unit
  event.custom({
    type: "modern_industrialization:assembler",
    duration: 600,
    eu: 16,
    item_inputs: [
      {
        amount: 2,
        item: "modern_industrialization:digital_circuit",
      },
      {
        amount: 2,
        item: "ae2:calculation_processor",
      },
      {
        amount: 1,
        item: "modern_industrialization:arithmetic_logic_unit",
      },
      {
        amount: 1,
        item: "modern_industrialization:random_access_memory",
      },
    ],
    fluid_inputs: [
      {
        amount: 180,
        fluid: "modern_industrialization:molten_redstone",
        probability: 1.0,
      },
    ],
    item_outputs: [
      {
        amount: 1,
        item: "ae2:crafting_unit",
      },
    ],
  });

  //formation core
  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          tag: "ae2:all_certus_quartz",
        },
        {
          amount: 1,
          tag: "forge:dusts/fluix",
        },
        {
          amount: 1,
          item: "ae2:logic_processor",
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: "ae2:formation_core",
        },
      ],
    })
    .id("ftbneotech:ae2_formation_core");

  //annihilation core
  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          item: "minecraft:quartz",
        },
        {
          amount: 1,
          tag: "forge:dusts/fluix",
        },
        {
          amount: 1,
          item: "ae2:logic_processor",
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: "ae2:annihilation_core",
        },
      ],
    })
    .id("ftbneotech:ae2_annihilation_core");

  event
    .shaped("ae2:energy_acceptor", ["ABA", "BCB", "ABA"], {
      A: "modern_industrialization:steel_plate",
      B: "ae2:quartz_glass",
      C: "modern_industrialization:analog_circuit",
    })
    .id("ftbneotech:ae2_energy_acceptor");

  //Activating the Singularity for the Quantum Entanglement
  event
    .custom({
      type: "modern_industrialization:implosion_compressor",
      eu: 4,
      duration: 10,
      item_inputs: [
        {
          item: "ae2:singularity",
          amount: 1,
        },
        {
          item: "modern_industrialization:industrial_tnt",
          amount: 1,
        },
      ],
      item_outputs: {
        item: "ftbneotech:active_singularity",
        amount: 1,
      },
    })
    .id("ftbneotech:singularity_activation");
});
