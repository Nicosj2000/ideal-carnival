// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shapeless("copper_amulets:empty_amulet", [
      "4x justdirethings:blazegold_ingot",
      "4x modern_industrialization:rubber_sheet",
      "modern_industrialization:copper_ring",
    ])
    .id("ftbneotech:empty_amulet_recipe_0");

  // Shapeless Recipe for Amulet of Amulets
  event
    .shapeless("copper_amulets:amulet_of_amulets", [
      "copper_amulets:amethyst_amulet",
      "copper_amulets:ocean_amulet",
      "copper_amulets:lucky_amulet",
      "copper_amulets:gold_amulet",
      "copper_amulets:end_amulet",
      "copper_amulets:emerald_amulet",
      "copper_amulets:netherite_amulety",
      "modern_industrialization:singularity",
      "copper_amulets:redstone_amulet",
    ])
    .id("ftbneotech:amulet_of_amulets_recipe_0");

  event
    .shaped("copper_amulets:iron_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:enori_crystal",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_iron_amulet_recipe_0");

  event
    .shaped("copper_amulets:gold_amulet", [" A ", "ABA", " A "], {
      A: "justdirethings:blazegold_ingot",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_gold_amulet_recipe_0");

  event
    .shaped("copper_amulets:lapis_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:palis_crystal",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_lapis_amulet_recipe_0");

  event
    .shaped("copper_amulets:redstone_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:restonia_crystal",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_redstone_amulet_recipe_0");

  event
    .shaped("copper_amulets:quartz_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:ethetic_white_block",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_quartz_amulet_recipe_0");

  event
    .shaped("copper_amulets:diamond_amulet", [" A ", "ABA", " A "], {
      A: "justdirethings:celestigem",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_diamond_amulet_recipe_0");

  event
    .shaped("copper_amulets:emerald_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:emeradic_crystal",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_emerald_amulet_recipe_0");

  event
    .shaped("copper_amulets:end_amulet", ["ABC", "DEF", "GHI"], {
      A: "minecraft:chorus_fruit",
      B: "minecraft:ender_pearl",
      C: "minecraft:dragon_breath",
      D: "minecraft:end_stone",
      E: "copper_amulets:empty_amulet",
      F: "minecraft:ender_pearl",
      G: "justdirethings:eclipsealloy_ingot",
      H: "minecraft:end_stone",
      I: "minecraft:chorus_fruit",
    })
    .id("ftbneotech:copper_amulets_end_amulet_recipe_0");

  event
    .shaped("copper_amulets:amethyst_amulet", [" A ", "ABA", " A "], {
      A: "minecraft:amethyst_shard",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_amethyst_amulet_recipe_0");

  event
    .shaped("copper_amulets:ocean_amulet", [" A ", "ABA", " A "], {
      A: "actuallyadditions:palis_crystal_shard",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_ocean_amulet_recipe_0");

  event
    .shaped("copper_amulets:obsidian_amulet", [" A ", "ABA", " A "], {
      A: "minecraft:obsidian",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_obsidian_amulet_recipe_0");

  event
    .shaped("copper_amulets:slime_amulet", [" A ", "ABA", " A "], {
      A: "minecraft:slime_block",
      B: "copper_amulets:empty_amulet",
    })
    .id("ftbneotech:copper_amulets_slime_amulet_recipe_0");
});
