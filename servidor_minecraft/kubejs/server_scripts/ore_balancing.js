// priority: 2

const oresB = [
  "minecraft:coal_ore",
  "minecraft:deepslate_coal_ore",
  "minecraft:iron_ore",
  "minecraft:deepslate_iron_ore",
  "minecraft:copper_ore",
  "minecraft:deepslate_copper_ore",
  "minecraft:gold_ore",
  "minecraft:deepslate_gold_ore",
  "minecraft:redstone_ore",
  "minecraft:deepslate_redstone_ore",
  "minecraft:emerald_ore",
  "minecraft:deepslate_emerald_ore",
  "minecraft:lapis_ore",
  "minecraft:deepslate_lapis_ore",
  "minecraft:diamond_ore",
  "minecraft:deepslate_diamond_ore",
  "minecraft:nether_gold_ore",
  "minecraft:nether_quartz_ore",
  "mekanism:osmium_ore",
  "forcecraft:power_ore",
  "forcecraft:deepslate_power_ore",
  "immersiveengineering:ore_silver",
  "immersiveengineering:deepslate_ore_silver",
  "undergarden:depthrock_cloggrum_ore",
  "undergarden:shiverstone_cloggrum_ore",
  "undergarden:shiverstone_froststeel_ore",
  "undergarden:depthrock_utherium_ore",
  "undergarden:shiverstone_utherium_ore",
  "undergarden:depthrock_regalium_ore",
  "undergarden:shiverstone_regalium_ore",
  "modern_industrialization:antimony_ore",
  "modern_industrialization:deepslate_antimony_ore",
  "modern_industrialization:bauxite_ore",
  "modern_industrialization:deepslate_bauxite_ore",
  "modern_industrialization:deepslate_iridium_ore",
  "modern_industrialization:iridium_ore",
  "modern_industrialization:deepslate_lead_ore",
  "modern_industrialization:lead_ore",
  "modern_industrialization:deepslate_lignite_coal_ore",
  "modern_industrialization:lignite_coal_ore",
  "modern_industrialization:deepslate_monazite_ore",
  "modern_industrialization:monazite_ore",
  "modern_industrialization:deepslate_nickel_ore",
  "modern_industrialization:nickel_ore",
  "modern_industrialization:platinum_ore",
  "modern_industrialization:quartz_ore",
  "modern_industrialization:deepslate_salt_ore",
  "modern_industrialization:salt_ore",
  "modern_industrialization:deepslate_tin_ore",
  "modern_industrialization:tin_ore",
  "modern_industrialization:titanium_ore",
  "modern_industrialization:deepslate_tungsten_ore",
  "modern_industrialization:tungsten_ore",
  "modern_industrialization:deepslate_uranium_ore",
  "modern_industrialization:uranium_ore",
  "actuallyadditions:black_quartz_ore",
  "immersiveengineering:deepslate_ore_uranium",
  "minecraft:ancient_debris",
  "immersiveengineering:deepslate_ore_lead",
  "immersiveengineering:deepslate_ore_nickel",
  "immersiveengineering:ore_lead",
  "immersiveengineering:ore_aluminum",
  "immersiveengineering:deepslate_ore_aluminum",
  "immersiveengineering:ore_nickel",
  "immersiveengineering:ore_uranium",
  "minecraft:raw_iron",
  "minecraft:raw_copper",
  "minecraft:raw_gold",
  "mekanism:raw_osmium",
  "immersiveengineering:raw_aluminum",
  "undergarden:raw_cloggrum",
  "undergarden:raw_froststeel",
  "justdirethings:raw_blazegold",
  "justdirethings:raw_eclipsealloy",
  "modern_industrialization:raw_antimony",
  "modern_industrialization:raw_iridium",
  "modern_industrialization:raw_lead",
  "modern_industrialization:raw_nickel",
  "modern_industrialization:raw_silver",
  "modern_industrialization:raw_tin",
  "modern_industrialization:raw_uranium",
];

ServerEvents.recipes((event) => {
  oresB.forEach((ore) => {
    event.remove({ output: ore, type: "minecraft:blasting" });
    event.remove({ output: ore, type: "minecraft:smelting" });
  });

  //manual iron smashing
  event
    .custom({
      type: "immersiveengineering:hammer_crushing",
      input: { tag: "forge:raw_materials/iron" },
      result: {
        basePredicate: {
          tag: "forge:tiny_dusts/iron",
        },
        count: 5,
      },
    })
    .id("ftbneotech:iron_dust_from_hammer");

  //redstone from forge hammer
  event
    .custom({
      type: "modern_industrialization:forge_hammer",
      count: 3,
      damage: 30,
      ingredient: {
        tag: "forge:ores/redstone",
      },
      result: {
        count: 2,
        item: "minecraft:redstone",
      },
    })
    .id("ftbneotech:redstone_dust_from_hammer");
});
