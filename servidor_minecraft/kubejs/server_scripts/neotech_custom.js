// priority: 1000

ServerEvents.recipes((event) => {
  //ender apple
  event
    .custom({
      type: "immersiveengineering:alloy",
      input0: { basePredicate: { item: "minecraft:golden_apple" }, count: 1 },
      input1: {
        basePredicate: { item: "enderzoology:ender_fragment" },
        count: 3,
      },
      result: { basePredicate: { item: "ftbneotech:ender_apple" }, count: 1 },
    })
    .id("ftbneotech:ender_apple");

    //force infused diesel
    event.custom({
      "type": "modern_industrialization:mixer",
      "duration": 20,
      "eu": 64,
      "fluid_inputs": [
        {
          "amount": 5000,
          "fluid": "modern_industrialization:boosted_diesel",
          "probability": 1.0
        },
        {
          "amount": 10000,
          "fluid": "mffs:fortron_fluid",
          "probability": 1.0
        }        
      ],
      "item_inputs": [
        {
          "amount": 1,
          "item": "forcecraft:force_gem"
        },
        {
          "amount": 1,
          "item": "mekanism:yellow_cake_uranium"
        }
      ],
      "fluid_outputs": [
        {
          "amount": 5000,
          "fluid": "ftbneotech:force_infused_diesel",
        }
      ]
    }).id("ftbneotech:force_infused_diesel");

    event.custom({
      type: "modern_industrialization:mixer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          tag: "forge:glass",
          amount: 1,
        }
      ],
      fluid_inputs: [
        {
          amount: 1000,
          fluid: "integrateddynamics:menril_resin",
          probability: 1.0,
        },
      ],
      item_outputs: {
        item: "integratedterminals:menril_glass",
        amount: 1,
      },
    }).id("ftbneotech:menril_glass");

    event.custom({
      type: "modern_industrialization:mixer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          tag: "forge:glass",
          amount: 1,
        }
      ],
      fluid_inputs: [
        {
          amount: 1000,
          fluid: "integrateddynamics:liquid_chorus",
          probability: 1.0,
        },
      ],
      item_outputs: {
        item: "integratedterminals:chorus_glass",
        amount: 1,
      },
    }).id("ftbneotech:chorus_glass");

});
