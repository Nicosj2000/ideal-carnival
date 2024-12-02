// priority: 1000

ServerEvents.recipes((event) => {
  //raw biodiesel
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 1000,
          FluidName: "pneumaticcraft:lpg",
        },
      },
      fluid_output: {
        Amount: 2000,
        FluidName: "modern_industrialization:raw_biodiesel",
      },
      item_input: {
        Amount: 1,
        item: "modern_industrialization:sulfur_dust",
      },
      speed: 0.3,
      temperature: {
        max: 450,
        min: 303,
      },
    })
    .id("ftbneotech:synthetic_rubber2");

  //synethtic rubber
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 150,
          FluidName: "modern_industrialization:raw_biodiesel",
        },
      },
      fluid_output: {
        Amount: 300,
        FluidName: "modern_industrialization:synthetic_rubber",
      },
      item_input: {
        Amount: 1,
        item: "modern_industrialization:sulfur_tiny_dust",
      },
      speed: 0.3,
      temperature: {
        min: 303,
      },
    })
    .id("ftbneotech:synthetic_rubber");

  //battery alloy
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 10,
          FluidName: "minecraft:lava",
        },
      },
      fluid_output: {
        Amount: 180,
        FluidName: "modern_industrialization:soldering_alloy",
      },
      item_input: {
        Amount: 1,
        item: "modern_industrialization:soldering_alloy_dust",
      },
      speed: 0.3,
      temperature: {
        min: 550,
      },
    })
    .id("ftbneotech:battery_alloy");

  //alternate lubricant
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 500,
          FluidName: "modern_industrialization:naphtha",
        },
      },
      fluid_output: {
        Amount: 500,
        FluidName: "modern_industrialization:lubricant",
      },
      item_input: {
        Amount: 1,
        item: "minecraft:redstone",
      },
      speed: 0.3,
      temperature: {
        max: 333,
        min: 1,
      },
    })
    .id("ftbneotech:alternate_lubricant2");

  //alternate deisel
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        Amount: 5000,
        tag: "forge:crude_oil",
      },
      fluid_output: {
        Amount: 2500,
        FluidName: "modern_industrialization:diesel",
      },
      pressure: 2.0,
      temperature: {
        min: 573,
      },
    })
    .id("ftbneotech:alternate_diesel_from_crude");

  //alternate crude
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 5000,
          FluidName: "modern_industrialization:sulfuric_crude_oil",
        },
      },
      fluid_output: {
        Amount: 5000,
        FluidName: "modern_industrialization:crude_oil",
      },
      item_output: {
        Amount: 1,
        item: "modern_industrialization:sulfur_dust",
      },
      pressure: 1.0,
      temperature: {
        min: 573,
      },
    })
    .id("ftbneotech:alternate_crude");

  //alternate lubricant
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 1000,
          FluidName: "modern_industrialization:plant_oil",
        },
      },
      fluid_output: {
        Amount: 500,
        FluidName: "modern_industrialization:lubricant",
      },
      item_input: {
        Amount: 1,
        item: "minecraft:redstone",
      },
      speed: 0.3,
      temperature: {
        max: 333,
        min: 1,
      },
    })
    .id("ftbneotech:alternate_lubricant3");

  //alternate lubricant
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        Amount: 500,
        tag: "forge:creosote",
      },
      fluid_output: {
        Amount: 500,
        FluidName: "modern_industrialization:lubricant",
      },
      item_input: {
        Amount: 1,
        item: "minecraft:redstone",
      },
      speed: 0.3,
      temperature: {
        max: 333,
        min: 1,
      },
    })
    .id("ftbneotech:alternate_lubricant_creosote");

  //macerate cola
  event
    .custom({
      type: "modern_industrialization:macerator",
      eu: 2,
      duration: 100,
      item_inputs: {
        item: "modern_industrialization:coal_crushed_dust",
        amount: 1,
      },
      item_outputs: [
        {
          item: "modern_industrialization:coal_dust",
          amount: 1,
        },
        {
          item: "modern_industrialization:coal_dust",
          amount: 1,
          probability: 0.5,
        },
        {
          item: "modern_industrialization:sulfur_dust",
          amount: 1,
          probability: 0.5,
        },
      ],
    })
    .id("ftbneotech:macerate_coal");

  //alternate coke
  event.custom({
    type: "modern_industrialization:coke_oven",
    eu: 2,
    duration: 600,
    item_inputs: {
      item: "justdirethings:coal_t1",
      amount: 1,
    },
    item_outputs: {
      item: "modern_industrialization:coke",
      amount: 2,
    },
  });

  //charcoal
  event.custom({
    type: "modern_industrialization:coke_oven",
    eu: 2,
    duration: 600,
    item_inputs: {
      tag: "minecraft:logs",
      amount: 1,
    },
    fluid_output: {
      Amount: 250,
      FluidName: "immersiveengineering:creosote",
    },
    item_outputs: {
      item: "minecraft:charcoal",
      amount: 1,
    },
  });

  //alternate molten redstone
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        fluid: {
          Amount: 10,
          FluidName: "minecraft:lava",
        },
      },
      fluid_output: {
        Amount: 180,
        FluidName: "modern_industrialization:molten_redstone",
      },
      item_input: {
        Amount: 1,
        item: "minecraft:redstone",
      },
      speed: 0.5,
      temperature: {
        min: 550,
      },
    })
    .id("ftbneotech:alternate_molten_redstone");

  //silicon dust
  event
    .custom({
      type: "modern_industrialization:mixer",
      eu: 12,
      duration: 80,
      item_inputs: [
        {
          item: "ae2:certus_quartz_dust",
          amount: 1,
        },
        {
          item: "modern_industrialization:quartz_dust",
          amount: 1,
        },
        {
          tag: "forge:sand",
          amount: 1,
        },
      ],
      item_outputs: {
        item: "modern_industrialization:silicon_dust",
        amount: 3,
      },
    })
    .id("ftbneotech:silicon_dust");

  // Accumulation Press
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 8,
      duration: 200,
      item_inputs: [
        {
          amount: 1,
          item: "ae2:calculation_processor_press",
        },
        {
          amount: 1,
          item: "ae2:singularity",
        },
        {
          amount: 1,
          item: "ae2:engineering_processor_press",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "megacells:accumulation_processor_press",
        },
      ],
    })
    .id("ftbneotech:accumulation_press_with_mi");

  // Accumulation Press Dupe
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 8,
      duration: 400,
      item_inputs: [
        {
          amount: 1,
          item: "megacells:accumulation_processor_press",
          probability: 0.0,
        },
        {
          amount: 1,
          item: "minecraft:iron_block",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "megacells:accumulation_processor_press",
        },
      ],
    })
    .id("ftbneotech:accumulation_press_dupe_with_mi");

  // Printed Accumulation
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 8,
      duration: 200,
      item_inputs: [
        {
          amount: 1,
          item: "megacells:sky_steel_ingot",
        },
        {
          amount: 1,
          item: "megacells:accumulation_processor_press",
          probability: 0.0,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "megacells:printed_accumulation_processor",
        },
      ],
    })
    .id("ftbneotech:printed_accumulation_processor_with_mi");

  // Accumulation Processor
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 1,
          item: "megacells:printed_accumulation_processor",
        },
        {
          amount: 1,
          item: "ae2:fluix_dust",
        },
        {
          amount: 1,
          item: "ae2:printed_silicon",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "megacells:accumulation_processor",
        },
      ],
    })
    .id("ftbneotech:accumulation_processor_with_mi");

  // Charcoal Compressing
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          amount: 9,
          tag: "forge:charcoal",
        },
        {
          amount: 1,
          item: "modern_industrialization:packer_block_template",
          probability: 0.0,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "mekanism:block_charcoal",
        },
      ],
    })
    .id("ftbneotech:charcoal_packing");

  // Heavy Water 10000
  event
    .custom({
      type: "modern_industrialization:centrifuge",
      eu: 2,
      duration: 100,
      fluid_inputs: [
        {
          amount: 10000,
          fluid: "mekanism:heavy_water",
        },
      ],
      fluid_outputs: [
        {
          amount: 10000,
          fluid: "modern_industrialization:heavy_water",
        },
      ],
    })
    .id("ftbneotech:heavy_water_convertion");

  //oil from vm
  event
    .custom({
      type: "pneumaticcraft:thermo_plant",
      fluid_input: {
        Amount: 5000,
        tag: "undergarden:virulent",
      },
      fluid_output: {
        Amount: 5000,
        FluidName: "modern_industrialization:crude_oil",
      },
      item_input: {
        tag: "forge:carbon_dusts",
      },
      speed: 0.1,
      temperature: {
        max: 333,
        min: 250,
      },
    })
    .id("ftbneotech:oil_from_vm");
});
