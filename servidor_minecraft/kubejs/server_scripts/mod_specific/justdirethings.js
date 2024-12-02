// priority: 1000

ServerEvents.recipes((event) => {

//conversion
//primal coal from charcoal
event.custom({
  "type": "justdirethings:goospread",
  "craftingDuration": 2400,
  "id": "justdirethings:coal_block_t1",
  "input": {
    "Name": "mekanism:block_charcoal"
  },
  "output": {
    "Name": "justdirethings:raw_coal_t1_ore",
    "Properties": {
      "facing": "north"
    }
  },
  "tierRequirement": 1
}).id("justdirethings:charcoal_block_t1");


  // Blazegold Ingot
  event
    .custom({
      type: "immersiveengineering:alloy",
      input0: {
        basePredicate: { tag: "forge:dusts/coal_coke" },
        count: 1,
      },
      input1: { item: "justdirethings:raw_blazegold" },
      result: {
        basePredicate: { item: "justdirethings:blazegold_ingot" },
        count: 1,
      },
    })
    .id("ftbneotech:blaze_gold_ingot");


    event
    .custom({
      type: "immersiveengineering:arc_furnace",
      additives: [{ tag: "forge:dusts/coal_coke" }],
      energy: 204800,
      input: { item: "justdirethings:raw_blazegold" },
      results: [{ item: "justdirethings:blazegold_ingot" }],
      slag: { tag: "forge:slag" },
      time: 400,
    })
    .id("ftbneotech:blazegold_dust");

  event
    .custom({
      type: "modern_industrialization:blast_furnace",
      duration: 400,
      eu: 32,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:raw_eclipsealloy",
        },
        {
          amount: 1,
          tag: "forge:dusts/ender_pearl",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:eclipsealloy_ingot",
        },
      ],
    })
    .id("ftbneotech:eclipsealloy_ingot");

  event.custom({
    type: "modern_industrialization:mixer",
    eu: 2,
    duration: 100,
    item_inputs: [
      {
        item: "minecraft:clay_ball",
        amount: 4,
      },
      {
        tag: "forge:sugar",
        amount: 2,
      },
      {
        item: "minecraft:rotten_flesh",
        amount: 2,
      },
      {
        item: "minecraft:dirt",
        amount: 1,
      },
    ],
    fluid_inputs: [
      {
        amount: 1000,
        fluid: "minecraft:water",
        probability: 1.0,
      },
    ],
    item_outputs: {
      item: "justdirethings:gooblock_tier1",
      amount: 1,
    },
  });

  event.custom({
    type: "modern_industrialization:mixer",
    eu: 12,
    duration: 100,
    item_inputs: [
      {
        item: "minecraft:blaze_powder",
        amount: 4,
      },
      {
        tag: "forge:dusts/redstone",
        amount: 2,
      },
      {
        item: "minecraft:nether_wart",
        amount: 2,
      },
      {
        item: "justdirethings:gooblock_tier1",
        amount: 1,
      },
    ],
    fluid_inputs: [
      {
        amount: 1000,
        fluid: "minecraft:lava",
        probability: 1.0,
      },
    ],
    item_outputs: {
      item: "justdirethings:gooblock_tier2",
      amount: 1,
    },
  });

  event.custom({
    type: "modern_industrialization:mixer",
    eu: 36,
    duration: 100,
    item_inputs: [
      {
        item: "minecraft:ender_pearl",
        amount: 4,
      },
      {
        tag: "forge:end_stones",
        amount: 2,
      },
      {
        item: "minecraft:dragon_breath",
        amount: 2,
      },
      {
        item: "justdirethings:gooblock_tier2",
        amount: 1,
      },
    ],
    fluid_inputs: [
      {
        amount: 1000,
        fluid: "modern_industrialization:synthetic_rubber",
        probability: 1.0,
      },
    ],
    item_outputs: {
      item: "justdirethings:gooblock_tier3",
      amount: 1,
    },
  });

  event.custom({
    type: "modern_industrialization:mixer",
    eu: 164,
    duration: 100,
    item_inputs: [
      {
        item: "minecraft:sculk",
        amount: 4,
      },
      {
        item: "minecraft:echo_shard",
        amount: 2,
      },
      {
        item: "minecraft:sculk_shrieker",
        amount: 2,
      },
      {
        item: "justdirethings:gooblock_tier3",
        amount: 1,
      },
    ],
    fluid_inputs: [
      {
        amount: 100,
        fluid: "modern_industrialization:polyethylene",
        probability: 1.0,
      },
    ],
    item_outputs: {
      item: "justdirethings:gooblock_tier4",
      amount: 1,
    },
  });

  event.custom({
    type: "modern_industrialization:assembler",
    duration: 200,
    eu: 8,
    item_inputs: [
      {
        amount: 4,
        item: "justdirethings:ferricore_ingot",
      },
      {
        amount: 1,
        item: "modern_industrialization:motor",
      },
      {
        amount: 2,
        item: "modern_industrialization:carbon_plate",
      },
      {
        amount: 2,
        item: "minecraft:redstone_block",
      },
    ],
    item_outputs: [
      {
        amount: 1,
        item: "justdirethings:pocket_generator",
      },
    ],
  });
});
