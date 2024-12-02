// priority: 1000

ServerEvents.recipes((event) => {
  //sfm water tank
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 8,
      duration: 120,
      item_inputs: [
        {
          item: "modern_industrialization:steel_water_pump",
          amount: 1,
        },
        {
          item: "modern_industrialization:lapis_plate",
          amount: 2,
        }
      ],
      item_outputs: {
        item: "sfm:water_tank",
        amount: 1,
      },
    })
    .id("ftbneotech:water_tank");
  event
    .shaped("sfm:disk", ["A C", "BDB", "C E"], {
      A: ["modern_industrialization:capacitor", "pneumaticcraft:capacitor"],
      B: "#forge:dyes/green",
      C: "#forge:dyes/red",
      D: "immersiveengineering:rs_engineering",
      E: "#forge:dyes/blue",
      F: "immersiveengineering:wirecoil_redstone",
      G: "modern_industrialization:redstone_battery",
    })
    .id("ftbneotech:sfm_disk_0");

  event
    .shaped("sfm:labelgun", [" A ", " B ", " C "], {
      A: "#forge:dyes/blue",
      B: "minecraft:brush",
      C: "#forge:rods/iron",
    })
    .id("ftbneotech:sfm_labelgun_0");

  event
    .shaped("sfm:network_tool", ["AAA", "BCB", "AAA"], {
      A: "#forge:plates/iron",
      B: "mekanism:network_reader",
      C: "sfm:cable",
    })
    .id("ftbneotech:sfm_network_tool_0");

  event
    .shaped("sfm:printing_press", ["A A", "BCB", "AAA"], {
      A: "#forge:rods/iron",
      B: "modern_industrialization:steel_large_plate",
      C: "immersiveengineering:steel_scaffolding_standard"
    })
    .id("ftbneotech:sfm_printing_press");

    event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 360,
      eu: 42,
      item_inputs: [
        {
          amount: 4,
          item: "immersiveengineering:component_steel",
        },
        {
          amount: 1,
          item: "modern_industrialization:electronic_circuit",
        },
        {
          amount: 2,
          item: "pneumaticcraft:plastic",
        },
        {
          amount: 2,
          item: "sfm:cable",
        },        
      ],
      item_outputs: [
        {
          amount: 1,
          item: "sfm:manager",
        },
      ],
    })
    .id("ftbneotech:sfm_manager");

    event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 80,
      eu: 24,
      fluid_inputs: [
        {
          amount: 180,
          fluid: "modern_industrialization:molten_redstone",
          probability: 1.0,
        },
      ],
      item_inputs: [
        {
          amount: 1,
          item: "modern_industrialization:fluid_pipe",
        },
        {
          amount: 1,
          item: "modern_industrialization:item_pipe",
        },
        {
          amount: 1,
          item: "modern_industrialization:aluminum_cable",
        },        
      ],
      item_outputs: [
        {
          amount: 8,
          item: "sfm:cable",
        },
      ],
    })
    .id("ftbneotech:sfm_cable");


});
