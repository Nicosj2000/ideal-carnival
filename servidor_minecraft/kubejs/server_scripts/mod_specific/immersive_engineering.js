// priority: 1000

ServerEvents.recipes((event) => {
  const addPlates = [
    ["modern_industrialization:emerald_plate", "minecraft:emerald"],
    [
      "modern_industrialization:kanthal_plate",
      "modern_industrialization:kanthal_ingot",
    ],
    ["modern_industrialization:lapis_plate", "minecraft:lapis_lazuli"],
    [
      "modern_industrialization:silicon_plate",
      "modern_industrialization:silicon_ingot",
    ],
    [
      "modern_industrialization:stainless_steel_plate",
      "modern_industrialization:stainless_steel_ingot",
    ],
    [
      "modern_industrialization:superconductor_plate",
      "modern_industrialization:superconductor_ingot",
    ],
    [
      "modern_industrialization:titanium_plate",
      "modern_industrialization:titanium_ingot",
    ],
    ["modern_industrialization:diamond_plate", "minecraft:diamond"],
    [
      "modern_industrialization:cupronickel_plate",
      "modern_industrialization:cupronickel_ingot",
    ],
    [
      "modern_industrialization:chromium_plate",
      "modern_industrialization:chromium_ingot",
    ],
    [
      "modern_industrialization:carbon_plate",
      "modern_industrialization:carbon_dust",
    ],
    [
      "modern_industrialization:cadmium_plate",
      "modern_industrialization:cadmium_ingot",
    ],
    [
      "modern_industrialization:beryllium_plate",
      "modern_industrialization:beryllium_ingot",
    ],
    [
      "modern_industrialization:battery_alloy_plate",
      "modern_industrialization:battery_alloy_ingot",
    ],
    [
      "modern_industrialization:annealed_copper_plate",
      "modern_industrialization:annealed_copper_ingot",
    ],
    [
      "modern_industrialization:invar_plate",
      "modern_industrialization:invar_ingot",
    ],
    [
      "modern_industrialization:blastproof_alloy_plate",
      "modern_industrialization:blastproof_alloy_ingot",
    ],
    [
      "modern_industrialization:bronze_plate",
      "modern_industrialization:bronze_ingot",
    ],
    [
      "modern_industrialization:platinum_plate",
      "modern_industrialization:platinum_ingot",
    ],
    [
      "modern_industrialization:tin_plate",
      "modern_industrialization:tin_ingot",
    ],
    [
      "modern_industrialization:tungsten_plate",
      "modern_industrialization:tungsten_ingot",
    ],
  ];

  const addRods = [
    [
      "modern_industrialization:cadmium_rod",
      "modern_industrialization:cadmium_ingot",
    ],
    [
      "modern_industrialization:he_mox_rod",
      "modern_industrialization:he_mox_ingot",
    ],
    [
      "modern_industrialization:he_uranium_rod",
      "modern_industrialization:he_uranium_ingot",
    ],
    [
      "modern_industrialization:le_mox_rod",
      "modern_industrialization:le_mox_ingot",
    ],
    [
      "modern_industrialization:le_uranium_rod",
      "modern_industrialization:le_uranium_ingot",
    ],
    [
      "modern_industrialization:stainless_steel_rod",
      "modern_industrialization:stainless_steel_ingot",
    ],
    [
      "modern_industrialization:titanium_rod",
      "modern_industrialization:titanium_ingot",
    ],
  ];

  addPlates.forEach(([output, input]) => {
    event
      .custom({
        type: "immersiveengineering:metal_press",
        energy: 2400,
        input: { item: input },
        mold: "immersiveengineering:mold_plate",
        result: { item: output },
      })
      .id(`ftbneotech:ftbneotech_plate_${output.replace(":", "_")}`);
  });

  addRods.forEach(([output, input]) => {
    event
      .custom({
        type: "immersiveengineering:metal_press",
        energy: 9600,
        input: { item: input },
        mold: "immersiveengineering:mold_rod",
        result: { item: output },
      })
      .id(`ftbneotech:ftbneotech_rod_${output.replace(":", "_")}`);
  });

  event
    .custom({
      type: "modern_industrialization:blast_furnace",
      eu: 2,
      duration: 100,
      item_inputs: {
        item: "minecraft:nether_bricks",
        amount: 1,
      },
      item_outputs: {
        item: "immersiveengineering:blastbrick",
        amount: 1,
      },
    })
    .id("ftbneotech:blastbrick");

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        count: 8,
        tag: "forge:dusts/coal_coke",
      },
    ],
    pressure: 4.0,
    results: [
      {
        item: "immersiveengineering:dust_hop_graphite",
      },
    ],
  });

  //redstone engineering block
  event.custom({
    type: "modern_industrialization:assembler",
    duration: 300,
    eu: 24,
    item_inputs: [
      {
        amount: 1,
        item: "modern_industrialization:analog_circuit",
      },
      {
        amount: 4,
        item: "modern_industrialization:steel_plate",
      },
      {
        amount: 1,
        item: "minecraft:redstone_block",
      },
    ],
    item_outputs: [
      {
        amount: 1,
        item: "immersiveengineering:rs_engineering",
      },
    ],
  });

  //alternate coke
  event
    .custom({
      type: "immersiveengineering:coke_oven",
      creosote: 0,
      input: { item: "justdirethings:coal_t1" },
      result: {
        basePredicate: {
          item: "modern_industrialization:coke",
        },
        count: 2,
      },
      time: 1800,
    })
    .id("ftbneotech:alternate_coke_ie");

  //Packing mold 4
  event.custom({
    type: "immersiveengineering:bottling_machine",
    fluid: { amount: 200, tag: "forge:synthetic_oil" },
    input: { item: "immersiveengineering:mold_packing_4" },
    results: [
      {
        basePredicate: {
          item: "modern_industrialization:rubber_sheet",
        },
        count: 4,
      },
      { item: "immersiveengineering:mold_packing_4" },
    ],
  });

  // Shapeless Recipe for Cokebrick from Brick
  event
    .shapeless("minecraft:bricks", ["immersiveengineering:cokebrick"])
    .id("ftbneotech:cokebrick_from_brick");

  //shaped recipes
  event
    .shaped("immersiveengineering:wirecutter", ["A B", " C "], {
      A: "immersiveengineering:stick_treated",
      B: "modern_industrialization:steel_ingot",
      C: "immersiveengineering:stick_treated",
    })
    .id("ftbneotech:immersiveengineering_crafting_wirecutter");

  //thermoelectric generator
  event
    .shaped(
      "immersiveengineering:thermoelectric_generator",
      ["SAS", "SBS", "SCS"],
      {
        A: "modern_industrialization:electronic_circuit",
        B: "modern_industrialization:he_uranium_rod",
        C: "immersiveengineering:coil_lv",
        S: "modern_industrialization:steel_large_plate",
      }
    )
    .id("ftbneotech:immersiveengineering_crafting_thermoelectric_generator");

  //kinetic dynamo
  event
    .shaped("immersiveengineering:dynamo", ["ARA", "CBC", "SSS"], {
      A: "immersiveengineering:component_iron",
      R: "actuallyadditions:restonia_crystal",
      B: "modern_industrialization:steel_rod_magnetic",
      C: "immersiveengineering:coil_lv",
      S: "modern_industrialization:steel_large_plate",
    })
    .id("ftbneotech:immersiveengineering_crafting_kinetic_dynamo");

  event
    .shaped("immersiveengineering:screwdriver", [" A ", "B  "], {
      A: "#forge:rods/iron",
      B: "immersiveengineering:stick_treated",
    })
    .id("ftbneotech:immersiveengineering_crafting_screwdriver");

  event
    .shaped("immersiveengineering:toolbox", ["AAA", "BCB"], {
      A: "modern_industrialization:invar_plate",
      B: "#forge:dyes/red",
      C: "immersiveengineering:crate",
    })
    .id("ftbneotech:immersiveengineering_crafting_toolbox");

  event
    .shaped("immersiveengineering:hammer", [" AB", "ACA", "CA "], {
      A: "minecraft:raw_iron",
      B: "#forge:string",
      C: "#forge:rods/wooden",
    })
    .id("ftbneotech:immersiveengineering_crafting_hammer");

  event
    .shaped("immersiveengineering:capacitor_lv", ["ABA", "BCB", "ABA"], {
      A: "#forge:treated_wood",
      B: "modern_industrialization:steel_plate",
      C: "modern_industrialization:redstone_battery",
    })
    .id("ftbneotech:immersiveengineering_crafting_capacitor_lv");

  //Bronze Alloying ===============================================================================

  //With Ingots
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:ingots/copper" }, count: 3 },
    input1: { tag: "forge:ingots/tin" },
    result: { basePredicate: { tag: "forge:ingots/bronze" }, count: 4 },
  });

  //With Dusts
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:dusts/copper" }, count: 3 },
    input1: { tag: "forge:dusts/tin" },
    result: { basePredicate: { tag: "forge:ingots/bronze" }, count: 4 },
  });

  // ==============================================================================================

  //Constantan Alloying ===============================================================================

  //With Dusts
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:dusts/copper" }, count: 1 },
    input1: { basePredicate: { tag: "forge:dusts/nickel" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/constantan" }, count: 2 },
  });

  //With Nickel Dust
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:ingots/copper" }, count: 1 },
    input1: { basePredicate: { tag: "forge:dusts/nickel" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/constantan" }, count: 2 },
  });

  //With Copper Dust
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:dusts/copper" }, count: 1 },
    input1: { basePredicate: { tag: "forge:ingots/nickel" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/constantan" }, count: 2 },
  });

  // ==============================================================================================

  //Electrum Alloying ===============================================================================

  //With Dusts
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:dusts/gold" }, count: 1 },
    input1: { basePredicate: { tag: "forge:dusts/silver" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/electrum" }, count: 2 },
  });

  //With Gold Dust
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:dusts/gold" }, count: 1 },
    input1: { basePredicate: { tag: "forge:ingots/silver" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/electrum" }, count: 2 },
  });

  //With Silver Dust
  event.custom({
    type: "immersiveengineering:alloy",
    input0: { basePredicate: { tag: "forge:ingots/gold" }, count: 1 },
    input1: { basePredicate: { tag: "forge:dusts/silver" }, count: 1 },
    result: { basePredicate: { tag: "forge:ingots/electrum" }, count: 2 },
  });

  // ==============================================================================================

  //Fixing Amplifier Tube
  event
    .shaped(
      "immersiveengineering:toolupgrade_revolver_electro",
      ["EEE", "RCR", "   "],
      {
        E: "immersiveengineering:electron_tube",
        R: "#forge:rods/steel",
        C: "#forge:wires/copper",
      }
    )
    .id(
      "ftbneotech:immersiveengineering_crafting_toolupgrade_revolver_electro"
    );

  //gear additions
  const gearMap = {
    "modern_industrialization:tin_gear": "modern_industrialization:tin_ingot",
    "modern_industrialization:titanium_gear":
      "modern_industrialization:titanium_ingot",
    "modern_industrialization:aluminum_gear":
      "modern_industrialization:aluminum_ingot",
    "modern_industrialization:bronze_gear":
      "modern_industrialization:bronze_ingot",
    "modern_industrialization:copper_gear": "minecraft:copper_ingot",
    "modern_industrialization:gold_gear": "minecraft:gold_ingot",
    "modern_industrialization:invar_gear":
      "modern_industrialization:invar_ingot",
    "modern_industrialization:iron_gear": "minecraft:iron_ingot",
    "modern_industrialization:stainless_steel_gear":
      "modern_industrialization:stainless_steel_ingot",
    "modern_industrialization:steel_gear":
      "modern_industrialization:steel_ingot",
  };

  Object.entries(gearMap).forEach(([gear, ingot]) => {
    event
      .custom({
        type: "immersiveengineering:metal_press",
        energy: 2400,
        input: { basePredicate: { item: ingot }, count: 6 },
        mold: "immersiveengineering:mold_gear",
        result: { item: gear },
      })
      .id(`ftbneotech:ftbneotech_gear_${gear.replace(":", "_")}`);
  });

  //Rod additions
  const rodMap = {
    "modern_industrialization:aluminum_rod":
      "modern_industrialization:aluminum_ingot",
    "modern_industrialization:bronze_rod":
      "modern_industrialization:bronze_ingot",
    "modern_industrialization:copper_rod": "minecraft:copper_ingot",
    "modern_industrialization:gold_rod": "minecraft:gold_ingot",
    "modern_industrialization:invar_rod":
      "modern_industrialization:invar_ingot",
    "modern_industrialization:iron_rod": "minecraft:iron_ingot",
    "modern_industrialization:tin_rod": "modern_industrialization:tin_ingot",
    "modern_industrialization:steel_rod":
      "modern_industrialization:steel_ingot",
    "modern_industrialization:tungsten_rod":
      "modern_industrialization:tungsten_ingot",
    "modern_industrialization:uranium_rod":
      "modern_industrialization:uranium_ingot",
  };

  Object.entries(rodMap).forEach(([rod, ingot]) => {
    event
      .custom({
        type: "immersiveengineering:metal_press",
        energy: 9600,
        input: { basePredicate: { item: ingot }, count: 1 },
        mold: "immersiveengineering:mold_rod",
        result: { item: rod },
      })
      .id(`ftbneotech:ftbneotech_rod_${rod.replace(":", "_")}`);
  });

  //fuels
  event.custom({
    type: "immersiveengineering:generator_fuel",
    burnTime: 200,
    fluidTag: "forge:boosteddiesel",
  }).id("ftbneotech:boosteddiesel");

  //fuels
  event.custom({
    type: "immersiveengineering:generator_fuel",
    burnTime: 100,
    fluidTag: "forge:diesel",
  }).id("ftbneotech:iediesel");

  event.custom({
    type: "immersiveengineering:generator_fuel",
    burnTime: 450,  
    fluidTag: "forge:forceddiesel",
  }).id("ftbneotech:forcediesel");

  event.custom({
    type: "immersiveengineering:generator_fuel",
    burnTime: 20,  
    fluidTag: "forge:refinedcanola",
  }).id("ftbneotech:refinedcanola");
  
  event
  .custom({
    type: "modern_industrialization:assembler",
    duration: 10,
    eu: 8,
    fluid_inputs: [
      {
        amount: 125,
        fluid: "immersiveengineering:creosote",
        probability: 1.0,
      },
    ],
    item_inputs: [
      {
        amount: 1,
        tag: "minecraft:planks",
      }
    ],
    item_outputs: [
      {
        amount: 1,
        item: "immersiveengineering:treated_wood_horizontal",
      },
    ],
  })
  .id("ftbneotech:treated_wood");

});
