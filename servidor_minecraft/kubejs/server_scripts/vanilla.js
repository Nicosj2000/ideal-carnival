// priority: 1000

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "modern_industrialization:blast_furnace",
      duration: 400,
      eu: 32,
      item_inputs: [
        {
          amount: 1,
          item: "mekanism:dust_netherite",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "minecraft:netherite_ingot",
        },
      ],
    })
    .id("ftbneotech:netherite_ingot");

  //diamond from dust
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: {
          item: "modern_industrialization:diamond_dust",
        },
      },
    ],
    pressure: 4.0,
    results: [
      {
        item: "minecraft:diamond",
      },
    ],
  }).id("ftbneotech:diamond_from_dust");

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: {
          item: "modern_industrialization:emerald_dust",
        },
      },
    ],
    pressure: 4.0,
    results: [
      {
        item: "minecraft:emerald",
      },
    ],
  }).id("ftbneotech:emerald_from_dust");

  event.custom({
    type: "pneumaticcraft:explosion_crafting",
    input: {
      tag: "forge:skystone",
    },
    loss_rate: 20,
    results: [
      {
        item: "minecraft:obsidian",
      },
    ],
  }).id("ftbneotech:obsidian_from_skystone");

  event.custom({
    type: "modern_industrialization:mixer",
    eu: 4,
    duration: 100,
    item_inputs: [
      {
        item: "minecraft:netherite_scrap",
        amount: 4,
      },
      {
        tag: "forge:dusts/gold",
        amount: 4,
      },
    ],
    item_outputs: {
      item: "mekanism:dust_netherite",
      amount: 2,
    },
  }).id("ftbneotech:netherite_dust");

  //enchanting table
  // Accumulation Processor
  event
    .custom({
      type: "modern_industrialization:assembler",
      duration: 200,
      eu: 8,
      item_inputs: [
        {
          amount: 4,
          item: "minecraft:obsidian",
        },
        {
          amount: 4,
          item: "modern_industrialization:diamond_plate",
        },
        {
          amount: 1,
          item: "minecraft:writable_book",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "minecraft:enchanting_table",
        },
      ],
    })
    .id("ftbneotech:enchanting_table");

    //enchanted crafting table
    let enchantedCraftingTable = Item.of('minecraft:crafting_table').enchant('enchantableblocks:preservation', 1)
    event.shapeless(enchantedCraftingTable, ['minecraft:crafting_table', 'minecraft:chest'])
});
