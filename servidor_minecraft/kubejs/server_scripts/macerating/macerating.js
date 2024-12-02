// priority: 5

const DEFAULT_DURATION = 200;
const DEFAULT_EU = 1500;
const DEFAULT_DAMAGE = 0;
//If not specified, the Forge Hammer Recipe will not require a tool (cuz 0 means no tool).

//Also, currenty there' no Shapeless Recipe beind added, cause we don't need at the moment, but its quite simple to add it back.

const maceratingMap = {
  // example:
  // "item": {
  //     aa: true,   // Actually Additions
  //     ie: true,   // Immersive Engineering
  //     mc: true,   // Mekanism Crushing
  //     me: true,   // Mekanism Enriching
  //     mi: true,   // Modern Industrialization
  //     fh: true,   // Forge Hammer
  //     output: "item", // output item
  //     duration: 200,  // default 200
  //     eu: 2,         // default 2
  // }
  "undergarden:froststeel_ingot": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: true,
    fh: true,
    output: "jaopca:dusts.froststeel",
  },
  "undergarden:cloggrum_ingot": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: true,
    fh: true,
    output: "jaopca:dusts.cloggrum",
  },
  "3x undergarden:raw_cloggrum": {
    aa: false,
    ie: false,
    mc: false,
    me: true,
    mi: false,
    fh: false,
    output: "4x jaopca:dusts.cloggrum",
  },
  "3x undergarden:raw_froststeel": {
    aa: false,
    ie: false,
    mc: false,
    me: true,
    mi: false,
    fh: false,
    output: "4x jaopca:dusts.froststeel",
  },
  "mekanism:fluorite_gem": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: true,
    output: "mekanism:dust_fluorite",
  },
  "minecraft:netherite_ingot": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: true,
    damage: 100,
    output: "mekanism:dust_netherite",
  },
  "minecraft:charcoal": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: true,
    output: "mekanism:dust_charcoal",
  },
  "minecraft:obsidian": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: true,
    output: "4x mekanism:dust_obsidian",
    duration: 300,
    damage: 100,
    eu: 4,
  },
  "minecraft:diamond_ore": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: false,
    fh: false,
    output: "3x modern_industrialization:diamond_crushed_dust",
    duration: 800,
    eu: 2,
  },
  "minecraft:emerald_ore": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: false,
    fh: false,
    output: "3x modern_industrialization:emerald_crushed_dust",
    duration: 800,
    eu: 2,
  },
  "minecraft:lapis_ore": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: false,
    fh: false,
    output: "16x modern_industrialization:lapis_crushed_dust",
    duration: 800,
    eu: 2,
  },
  "minecraft:nether_quartz_ore": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: false,
    fh: false,
    output: "4x modern_industrialization:quartz_crushed_dust",
    duration: 800,
    eu: 2,
  },
  "actuallyadditions:black_quartz_ore": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: true,
    fh: false,
    output: "4x ftbneotech:black_quartz_crushed_dust",
    duration: 800,
    eu: 2,
  },
  "ftbneotech:black_quartz_crushed_dust": {
    aa: false,
    ie: false,
    mc: false,
    me: false,
    mi: true,
    fh: false,
    output: "ftbneotech:black_quartz_dust",
    duration: 50,
    eu: 2,
    extra_output: "ftbneotech:black_quartz_dust",
    extra_output_chance: 0.5,
  },
  "actuallyadditions:black_quartz": {
    aa: true,
    ie: true,
    mc: true,
    me: false,
    mi: true,
    fh: false,
    output: "ftbneotech:black_quartz_dust",
    duration: 100,
    eu: 2,
  },
  "minecraft:diamond": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:diamond_dust",
    duration: 100,
    eu: 2,
  },
  "minecraft:lapis_lazuli": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:lapis_dust",
    duration: 100,
    eu: 2,
  },
  "minecraft:quartz": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:quartz_dust",
    duration: 100,
    eu: 2,
  },
  "minecraft:emerald": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:emerald_dust",
    duration: 100,
    eu: 2,
  },
  "minecraft:coal": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:coal_dust",
    duration: 100,
    eu: 2,
  },
  "immersiveengineering:ingot_constantan": {
    aa: true,
    ie: false,
    mc: true,
    me: false,
    mi: true,
    fh: false,
    output: "immersiveengineering:dust_constantan",
    duration: 100,
    eu: 2,
  },

  //Raw Ores ======================================================================================
  "minecraft:raw_iron": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:iron_dust",
    extra_output: "modern_industrialization:iron_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "minecraft:raw_gold": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:gold_dust",
    extra_output: "modern_industrialization:gold_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "minecraft:raw_copper": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:copper_dust",
    extra_output: "modern_industrialization:copper_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "mekanism:raw_osmium": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "mekanism:dust_osmium",
    extra_output: "mekanism:dust_osmium",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_antimony": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:antimony_dust",
    extra_output: "modern_industrialization:antimony_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_iridium": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:iridium_dust",
    extra_output: "modern_industrialization:iridium_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_lead": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:lead_dust",
    extra_output: "modern_industrialization:lead_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_nickel": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:nickel_dust",
    extra_output: "modern_industrialization:nickel_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_tungsten": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:tungsten_dust",
    extra_output: "modern_industrialization:tungsten_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_tin": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:tin_dust",
    extra_output: "modern_industrialization:tin_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_silver": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:silver_dust",
    extra_output: "modern_industrialization:silver_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "undergarden:raw_cloggrum": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: false,
    output: "jaopca:dusts.cloggrum",
    extra_output: "jaopca:dusts.cloggrum",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "undergarden:raw_froststeel": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: false,
    output: "jaopca:dusts.froststeel",
    extra_output: "jaopca:dusts.froststeel",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "modern_industrialization:raw_uranium": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: false,
    fh: false,
    output: "modern_industrialization:uranium_dust",
    extra_output: "modern_industrialization:uranium_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "immersiveengineering:ore_silver": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: false,
    output: "modern_industrialization:raw_silver",
    extra_output: "modern_industrialization:uranium_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },
  "immersiveengineering:deepslate_ore_silver": {
    aa: true,
    ie: true,
    mc: false,
    me: false,
    mi: true,
    fh: false,
    output: "modern_industrialization:raw_silver",
    extra_output: "modern_industrialization:uranium_dust",
    extra_output_chance: 0.5,
    duration: 100,
    eu: 2,
  },

  // ==============================================================================================
};

function parseAmount(itemString) {
  const match = itemString.match(/^(\d+)x\s(.+)/);
  if (match) {
    return { amount: parseInt(match[1]), item: match[2] };
  } else {
    return { amount: 1, item: itemString };
  }
}

function createActuallyAdditionsRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);

  const recipe = {
    type: "actuallyadditions:crushing",
    ingredient: {
      item: input.item,
    },
    result: [
      {
        result: {
          Count: output.amount,
          id: output.item,
        },
      },
    ],
    duration: entry.duration || DEFAULT_DURATION,
    eu: entry.eu || DEFAULT_EU,
  };

  if (entry.extra_output) {
    recipe.result.push({
      chance: entry.extra_output_chance || 0.1,
      result: {
        Count: 1,
        id: entry.extra_output,
      },
    });
    console.log(recipe.result);
  }

  console.log(`Final recipe: ${JSON.stringify(recipe)}`);
  event.custom(recipe);
}
/*
{
  "type": "immersiveengineering:crusher",
  "energy": 6000,
  "input": { "tag": "forge:ores/lead" },
  "result": { "basePredicate": { "tag": "forge:dusts/lead" }, "count": 2 },
    "result": { "basePredicate": { "tag": "forge:dusts/coal" }, "count": 9 }
}
  "secondaries": [
    {
      "chance": 0.1,
      "output": { "tag": "forge:dusts/silver" }
    }
  ]
}

*/
function createImmersiveEngineeringRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);
  let energy = DEFAULT_EU * 4;

  console.log(`Creating Immersive Engineering recipe for: ${key}`);

  const recipe = {
    type: "immersiveengineering:crusher",
    input: {
      item: input.item,
    },
    result: {
      item: output.item,
      count: output.amount,
    },
    energy: energy,
  };

  if (entry.extra_output) {
    recipe.secondaries = [];
    recipe.secondaries.push({
      chance: entry.extra_output_chance || 0.1,
      output: {
        item: entry.extra_output,
      },
    });
  }

  console.log(`Final recipe: ${JSON.stringify(recipe)}`);
  event.custom(recipe);
}

function createMekanismCrushingRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: input.item,
      },
      amount: input.amount,
    },
    output: {
      item: output.item,
      count: output.amount,
    },
  });
}

function createMekanismEnrichingRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);

  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: {
        item: input.item,
      },
      amount: input.amount,
    },
    output: {
      item: output.item,
      count: output.amount,
    },
  });
}

function createModernIndustrializationCrushingRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);

  const recipe = {
    type: "modern_industrialization:macerator",
    eu: entry.eu || DEFAULT_EU,
    item_inputs: [
      {
        item: input.item,
        amount: input.amount,
      },
    ],
    item_outputs: [
      {
        item: output.item,
        amount: output.amount,
      },
    ],
    duration: entry.duration || DEFAULT_DURATION,
  };

  if (entry.extra_output) {
    recipe.item_outputs.push({
      item: entry.extra_output,
      amount: 1,
      probability: entry.extra_output_chance || 0.1,
    });
  }

  event.custom(recipe);
}

function createForgeHammerRecipe(event, key, entry) {
  const input = parseAmount(key);
  const output = parseAmount(entry.output);

  event.custom({
    type: "modern_industrialization:forge_hammer",
    count: input.amount,
    damage: entry.damage || DEFAULT_DAMAGE,
    ingredient: {
      item: input.item,
    },
    result: {
      count: output.amount,
      item: output.item,
    },
  });
}

ServerEvents.recipes((event) => {
  Object.keys(maceratingMap).forEach((key) => {
    const entry = maceratingMap[key];
    console.log(`Processing recipe for: ${key}`);
    if (entry.aa) {
      createActuallyAdditionsRecipe(event, key, entry);
    }
    if (entry.ie) {
      createImmersiveEngineeringRecipe(event, key, entry);
    }
    if (entry.mc) {
      createMekanismCrushingRecipe(event, key, entry);
    }
    if (entry.me) {
      createMekanismEnrichingRecipe(event, key, entry);
    }
    if (entry.mi) {
      createModernIndustrializationCrushingRecipe(event, key, entry);
    }
    if (entry.fh) {
      createForgeHammerRecipe(event, key, entry);
    }
  });
});
