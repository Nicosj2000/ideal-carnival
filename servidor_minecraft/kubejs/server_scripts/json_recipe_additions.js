// priority: 1000

ServerEvents.recipes((event) => {
  //Entangled Block
  event.custom({
    type: "modern_industrialization:assembler",
    duration: 300,
    eu: 248,
    item_inputs: [
      {
        amount: 2,
        item: "modern_industrialization:iridium_plate",
      },
      {
        amount: 4,
        item: "ae2:fluix_pearl",
      },
      {
        amount: 4,
        item: "actuallyadditions:empowered_void_crystal",
      },
      {
        amount: 2,
        item: "stevescarts:component_enhanced_galgadorian_metal",
      },
    ],
    item_outputs: [
      {
        amount: 2,
        item: "entangled:block",
      },
    ],
  });

  //Temporal Pouch
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: {
          count: 5,
          item: "immersiveengineering:ersatz_leather",
        },
      },
      {
        item: {
          count: 2,
          item: "forcecraft:force_ingot",
        },
      },
      {
        item: {
          item: "stevescarts:component_eye_of_galgador",
        },
      },
      {
        item: {
          count: 2,
          item: "actuallyadditions:palis_crystal",
        },
      },
    ],
    pressure: 3.5,
    results: [
      {
        item: "gag:time_sand_pouch",
      },
    ],
  });
});
