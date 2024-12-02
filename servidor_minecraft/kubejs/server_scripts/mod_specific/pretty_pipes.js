// priority: 1000
function makeLowUpgradeRecipe(
  event,
  outputUpgrade,
  mainItem,
  catalyst,
  additionalItem
) {
  event
    .shaped(outputUpgrade, [
      ["#forge:plates/iron", catalyst, "#forge:plates/iron"],
      [additionalItem, mainItem, additionalItem],
      ["#forge:plates/iron", "#forge:dusts/redstone", "#forge:plates/iron"],
    ])
    .id(
      "ftbneotech:" + outputUpgrade.replace(":", "_") + "_low_upgrade_recipe"
    );
}

function makeMediumUpgradeRecipe(event, outputUpgrade, mainItem) {
  event
    .shaped(outputUpgrade, [
      ["#forge:nuggets/steel", "#forge:plates/gold", "#forge:nuggets/steel"],
      ["#forge:plates/gold", mainItem, "#forge:plates/gold"],
      ["#forge:nuggets/steel", "#forge:plates/gold", "#forge:nuggets/steel"],
    ])
    .id(
      "ftbneotech:" + outputUpgrade.replace(":", "_") + "_medium_upgrade_recipe"
    );
}

function makeHighUpgradeRecipe(event, outputUpgrade, mainItem) {
  event
    .shaped(outputUpgrade, [
      [
        "#forge:nuggets/aluminum",
        "#forge:plates/electrum",
        "#forge:nuggets/aluminum",
      ],
      ["#forge:plates/electrum", mainItem, "#forge:plates/electrum"],
      [
        "#forge:nuggets/aluminum",
        "#forge:plates/electrum",
        "#forge:nuggets/aluminum",
      ],
    ])
    .id(
      "ftbneotech:" + outputUpgrade.replace(":", "_") + "_high_upgrade_recipe"
    );
}

ServerEvents.recipes((event) => {
  makeLowUpgradeRecipe(
    event,
    "prettypipes:low_crafting_module",
    "prettypipes:blank_module",
    "immersiveengineering:craftingtable",
    "minecraft:redstone"
  );
  makeMediumUpgradeRecipe(
    event,
    "prettypipes:medium_crafting_module",
    "prettypipes:low_crafting_module"
  );
  makeHighUpgradeRecipe(
    event,
    "prettypipes:high_crafting_module",
    "prettypipes:medium_crafting_module"
  );

  makeLowUpgradeRecipe(
    event,
    "prettypipes:low_extraction_module",
    "prettypipes:blank_module",
    "minecraft:piston",
    "modern_industrialization:motor"
  );
  makeMediumUpgradeRecipe(
    event,
    "prettypipes:medium_extraction_module",
    "prettypipes:low_extraction_module"
  );
  makeHighUpgradeRecipe(
    event,
    "prettypipes:high_extraction_module",
    "prettypipes:medium_extraction_module"
  );

  makeLowUpgradeRecipe(
    event,
    "prettypipes:low_retrieval_module",
    "prettypipes:blank_module",
    "#forge:ender_pearls",
    "modern_industrialization:motor"
  );
  makeMediumUpgradeRecipe(
    event,
    "prettypipes:medium_retrieval_module",
    "prettypipes:low_retrieval_module"
  );
  makeHighUpgradeRecipe(
    event,
    "prettypipes:high_retrieval_module",
    "prettypipes:medium_retrieval_module"
  );

  makeLowUpgradeRecipe(
    event,
    "prettypipes:low_speed_module",
    "prettypipes:blank_module",
    "minecraft:sugar",
    "minecraft:sugar"
  );
  makeMediumUpgradeRecipe(
    event,
    "prettypipes:medium_speed_module",
    "prettypipes:low_speed_module"
  );
  makeHighUpgradeRecipe(
    event,
    "prettypipes:high_speed_module",
    "prettypipes:medium_speed_module"
  );

  makeLowUpgradeRecipe(
    event,
    "prettypipes:low_filter_module",
    "prettypipes:blank_module",
    "minecraft:hopper",
    "minecraft:redstone"
  );
  makeMediumUpgradeRecipe(
    event,
    "prettypipes:medium_filter_module",
    "prettypipes:low_filter_module"
  );
  makeHighUpgradeRecipe(
    event,
    "prettypipes:high_filter_module",
    "prettypipes:medium_filter_module"
  );

  //pretty pipe module
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 2,
      duration: 120,
      item_inputs: [
        {
          amount: 2,
          item: "modern_industrialization:rubber_sheet",
        },
        {
          amount: 1,
          item: "prettypipes:pipe",
        },
        {
          amount: 2,
          tag: "forge:plates/gold",
        },
      ],
      item_outputs: [
        {
          amount: 4,
          item: "prettypipes:blank_module",
        },
      ],
    })
    .id("ftbneotech:blank_module");

  //shaped recipes
  event
    .shaped("32x prettypipes:pipe", ["ABA", "ABE", "AGA"], {
      A: "modern_industrialization:steel_rod",
      B: "modern_industrialization:copper_cable",
      E: "mekanism:structural_glass",
      G: "modern_industrialization:copper_cable",

    })
    .id("ftbneotech:prettypipes_pipe_0");

  event
    .shaped("prettypipes:item_terminal", ["ABA", "CFC", "AEA"], {
      A: "modern_industrialization:steel_large_plate",
      B: "modern_industrialization:motor",
      C: "prettypipes:medium_retrieval_module",
      E: "prettypipes:medium_extraction_module",
      F: "modern_industrialization:analog_circuit",
    })
    .id("ftbneotech:prettypipes_item_terminal_0");

  event
    .shaped("prettypipes:pressurizer", ["ABA", "CDC", "ABA"], {
      A: "modern_industrialization:steel_plate",
      B: "prettypipes:medium_speed_module",
      C: "justdirethings:fuel_canister",
      D: "prettypipes:medium_speed_module",
    })
    .id("ftbneotech:prettypipes_pressurizer_0");

  event
    .shaped("prettypipes:crafting_terminal", [" A ", "BCB", " D "], {
      A: "immersiveengineering:craftingtable",
      B: "minecraft:redstone",
      C: "prettypipes:item_terminal",
      D: "minecraft:redstone",
    })
    .id("ftbneotech:prettypipes_crafting_terminal_0");

  event
    .shaped("prettypipes:low_high_priority_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:paper",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_low_high_priority_module");

  event
    .shaped("prettypipes:medium_high_priority_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:paper",
      C: "prettypipes:low_high_priority_module",
    })
    .id("ftbneotech:prettypipes_medium_high_priority_module_0");

  event
    .shaped("prettypipes:low_low_priority_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "#forge:cobblestone",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_low_low_priority_module");

  event
    .shaped("prettypipes:medium_low_priority_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "#forge:cobblestone",
      C: "prettypipes:low_low_priority_module",
    })
    .id("ftbneotech:prettypipes_medium_low_priority_module_0");

  event
    .shaped("prettypipes:redstone_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:redstone_torch",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_redstone_module_0");

  event
    .shaped("prettypipes:filter_increase_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:iron_bars",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_filter_increase_modifier_0");

  event
    .shaped("prettypipes:tag_filter_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "#balm:ores",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_tag_filter_modifier_0");

  event
    .shaped("prettypipes:damage_filter_modifier", ["ABA", "BCB", "ADA"], {
      A: "#forge:plates/iron",
      B: "#minecraft:pickaxes",
      C: "prettypipes:blank_module",
      D: "minecraft:redstone",
    })
    .id("ftbneotech:prettypipes_damage_filter_modifier_0");

  event
    .shaped("prettypipes:nbt_filter_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "#forge:books",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_nbt_filter_modifier_0");

  event
    .shaped("prettypipes:mod_filter_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "#minecraft:anvil",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_mod_filter_modifier_0");

  event
    .shaped("prettypipes:random_sorting_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:dispenser",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_random_sorting_modifier_0");

  event
    .shaped("prettypipes:round_robin_sorting_modifier", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:arrow",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_round_robin_sorting_modifier_0");

  event
    .shaped("prettypipes:stack_size_module", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/iron",
      B: "minecraft:dropper",
      C: "prettypipes:blank_module",
    })
    .id("ftbneotech:prettypipes_stack_size_module_0");

  event
    .shaped("prettypipes:wrench", ["ABB", "DEF", " G "], {
      A: "prettypipes:pipe",
      B: "#forge:plates/iron",
      D: "#forge:plates/iron",
      E: "modern_industrialization:iron_ring",
      F: "#forge:rods/iron",
      G: "#forge:dyes/red",
    })
    .id("ftbneotech:prettypipes_wrench_0");
});
