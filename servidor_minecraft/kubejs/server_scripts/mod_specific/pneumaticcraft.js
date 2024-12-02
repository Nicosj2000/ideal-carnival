// priority: 1000

//Amadron Trades
const addBasicAmadronTrades = [
  "pamhc2crops:aridgarden",
  "pamhc2crops:frostgarden",
  "pamhc2crops:shadedgarden",
  "pamhc2crops:soggygarden",
  "pamhc2crops:tropicalgarden",
  "pamhc2crops:windygarden",
  "chickens:catcher",
];

ServerEvents.recipes((event) => {
  event
    .shapeless("pneumaticcraft:liquid_hopper", [
      "pneumaticcraft:small_tank",
      "minecraft:hopper",
    ])
    .id("ftbneotech:liquid_hopper");

  //TPP
  //Simple compact machines
  event
    .shaped(
      "pneumaticcraft:thermopneumatic_processing_plant",
      ["SSS", "TPT", "SSS"],
      {
        S: "#pneumaticcraft:slabs",
        T: "pneumaticcraft:small_tank",
        P: "pneumaticcraft:pressure_tube",
      }
    )
    .id("ftbneotech:tpp");

  //compressed irom
  event.custom({
    type: "modern_industrialization:compressor",
    eu: 4,
    duration: 400,
    item_inputs: {
      item: "justdirethings:ferricore_ingot",
      amount: 1,
    },
    item_outputs: {
      item: "pneumaticcraft:ingot_iron_compressed",
      amount: 1,
    },
  });

  //plastic
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    fluid_input: {
      fluid: {
        Amount: 100,
        FluidName: "modern_industrialization:polyethylene",
      },
    },
    item_output: {
      Amount: 10,
      item: "pneumaticcraft:plastic",
    },
    speed: 0.3,
    temperature: {
      max: 333,
      min: 1,
    },
  });

  //Compressed Iron Custom Components ===========================================================

  //Plate
  event
    .custom({
      type: "modern_industrialization:compressor",
      eu: 2,
      duration: 140,
      item_inputs: [
        {
          amount: 1,
          tag: "forge:ingots/compressed_iron",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ftbneotech:compressed_iron_plate",
        },
      ],
    })
    .id("ftbneotech:compressed_iron_plate");

  //Curved Plate
  event
    .custom({
      type: "modern_industrialization:compressor",
      eu: 2,
      duration: 140,
      item_inputs: [
        {
          amount: 1,
          item: "ftbneotech:compressed_iron_plate",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ftbneotech:compressed_iron_curved_plate",
        },
      ],
    })
    .id("ftbneotech:curved_compressed_iron_plate");

  //Basic Pressure Tube
  event
    .shaped("8x pneumaticcraft:pressure_tube", ["   ", "PGP", "   "], {
      P: "ftbneotech:compressed_iron_curved_plate",
      G: "#forge:glass",
    })
    .id("ftbneotech:basic_pressre_tube");

  // ============================================================================================
  //custom trades
/*
  addBasicAmadronTrades.forEach((trade) => {
    event.custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          count: 1,
          item: "minecraft:emerald",
        },
      },
      level: 0,
      offer_id: "neotech:amadron/" + trade.replace(":", "_"),
      output: {
        resource: {
          item: trade,
        },
      },
    });
  });

  //Step assist
  event.custom({
    type: "pneumaticcraft:amadron",
    input: {
      resource: {
        count: 1,
        item: "ftbneotech:ender_apple",
      },
    },
    level: 0,
    offer_id: "neotech:amadron/steps",
    output: {
      resource: {
        item: "minecraft:enchanted_book",
        nbt: '{StoredEnchantments:[{id:"step:stepping",lvl:1s}]}',
      },
    },
  });

  event
    .custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          Amount: 5000,
          FluidName: "modern_industrialization:crude_oil",
        },
      },
      level: 0,
      offer_id: "pneumaticcraft:amadron/oil_to_emerald",
      output: {
        resource: {
          item: "minecraft:emerald",
        },
      },
    })
    .id("ftbneotech:trade_oil_to_emerald");

  event
    .custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          Amount: 2500,
          FluidName: "modern_industrialization:lubricant",
        },
      },
      level: 0,
      offer_id: "pneumaticcraft:amadron/lubricant_to_emerald",
      output: {
        resource: {
          item: "minecraft:emerald",
        },
      },
    })
    .id("ftbneotech:trade_lubricant_to_emerald");

  event
    .custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          item: "minecraft:emerald",
        },
      },
      level: 0,
      offer_id: "pneumaticcraft:amadron/emerald_to_oil",
      output: {
        resource: {
          Amount: 1000,
          FluidName: "modern_industrialization:crude_oil",
        },
      },
    })
    .id("ftbneotech:trade_emerald_to_oil");

  event
    .custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          count: 5,
          item: "minecraft:emerald",
        },
      },
      level: 0,
      offer_id: "pneumaticcraft:amadron/emerald_to_lubricant",
      output: {
        resource: {
          Amount: 1000,
          FluidName: "modern_industrialization:lubricant",
        },
      },
    })
    .id("ftbneotech:trade_emerald_to_lubricant");

  event
    .custom({
      type: "pneumaticcraft:amadron",
      input: {
        resource: {
          Amount: 4000,
          FluidName: "modern_industrialization:diesel",
        },
      },
      level: 0,
      offer_id: "pneumaticcraft:amadron/diesel_to_emerald",
      output: {
        resource: {
          item: "minecraft:emerald",
        },
      },
    })
    .id("ftbneotech:trade_diesel_to_emerald");

    */
});
