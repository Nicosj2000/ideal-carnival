// priority: 1000

ServerEvents.recipes((event) => {
  const addSeedstoMarket = [
    "pamhc2foodcore:sunflowerseedsitem",
    "pamhc2crops:sunchokeseeditem",
    "immersiveengineering:seed",
    "actuallyadditions:flax_seeds",
    "actuallyadditions:canola_seeds",
    "actuallyadditions:coffee_beans",
    "actuallyadditions:rice_seeds",
  ];
  addSeedstoMarket.forEach((seed) => {
    event
      .custom({
        type: "farmingforblockheads:market",
        category: "farmingforblockheads:seeds",
        preset: "minecraft:seeds",
        result: { item: seed },
      })
      .id(`ftbneotech:market/${seed.replace(":", "_")}`);
  });

  event
  .shaped("farmingforblockheads:market", ["ABA", "BFB", "CEC"], {
    A: "immersiveengineering:slab_sheetmetal_iron",
    B: "justdirethings:blazegold_ingot",
    C: "immersiveengineering:stick_treated",
    E: "undergarden:gloomgourd",
    F: "easy_villagers:villager"
  })
  .id("ftbneotech:farmingforblockheads_market_0");

  
});
