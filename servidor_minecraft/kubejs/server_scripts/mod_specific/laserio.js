// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shaped("4x laserio:logic_chip_raw", ["ABA", "CDC", "ABA"], {
      A: "#forge:dusts/redstone",
      B: "justdirethings:blazegold_ingot",
      C: "actuallyadditions:ethetic_white_block",
      D: "ae2:printed_silicon",
    })
    .id("ftbneotech:laserio_logic_chip_raw_0");

  event
    .shaped("laserio:overclocker_card", [" A ", "BCB", "AAA"], {
      A: "modern_industrialization:electrum_plate",
      B: "actuallyadditions:restonia_crystal",
      C: "laserio:logic_chip",
    })
    .id("ftbneotech:laserio_overclocker_card_0");

  event
    .shaped("laserio:overclocker_node", [" A ", "BCB", "DED"], {
      A: "justdirethings:celestigem",
      B: "actuallyadditions:restonia_crystal",
      C: "laserio:logic_chip",
      D: "modern_industrialization:diamond_plate",
      E: "modern_industrialization:diamond_plate",
    })
    .id("ftbneotech:laserio_overclocker_node_0");

  event
    .shaped("laserio:laser_wrench", ["A A", " B ", " C "], {
      A: "justdirethings:ferricore_ingot",
      B: "laserio:logic_chip",
      C: "justdirethings:ferricore_ingot",
    })
    .id("ftbneotech:laserio_laser_wrench_0");

  event
    .shaped("laserio:laser_connector", [" A ", "BCB", "DED"], {
      A: "#forge:glass",
      B: "actuallyadditions:restonia_crystal",
      C: "laserio:logic_chip",
      D: "justdirethings:ferricore_ingot",
      E: "modern_industrialization:steel_ring",
    })
    .id("ftbneotech:laserio_laser_connector_0");

  event
    .shaped("laserio:laser_node", ["ABA", "CDC", "ABA"], {
      A: "modern_industrialization:tin_plate",
      B: "#forge:glass_panes",
      C: "laserio:laser_connector",
      D: "#forge:glass_panes",
    })
    .id("ftbneotech:laserio_laser_node_0");

  event
    .shaped("laserio:laser_connector_advanced", ["ABA", "CDC", "AEA"], {
      A: "#forge:ender_pearls",
      B: "justdirethings:celestigem",
      C: "actuallyadditions:restonia_crystal",
      D: "laserio:laser_connector",
      E: "modern_industrialization:electrum_plate",
    })
    .id("ftbneotech:laserio_laser_connector_advanced_0");

  event
    .shaped("laserio:card_holder", ["A A", "BCB", "ADA"], {
      A: "modern_industrialization:tin_plate",
      B: "#forge:chests",
      C: "laserio:logic_chip",
      D: "actuallyadditions:restonia_crystal",
    })
    .id("ftbneotech:laserio_card_holder_0");

  event
    .shaped("laserio:card_cloner", ["ABA", "CDC", "AEA"], {
      A: "modern_industrialization:tin_plate",
      B: "actuallyadditions:restonia_crystal",
      C: "minecraft:paper",
      D: "laserio:logic_chip",
      E: "actuallyadditions:palis_crystal",
    })
    .id("ftbneotech:laserio_card_cloner_0");
});
