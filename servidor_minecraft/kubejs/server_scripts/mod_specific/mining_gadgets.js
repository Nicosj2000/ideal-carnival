// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shaped("buildinggadgets2:gadget_building", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "#forge:plates/diamond",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_gadget_building_0");

  event
    .shaped("buildinggadgets2:template_manager", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "minecraft:paper",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_template_manager_0");

  event
    .shaped("buildinggadgets2:gadget_copy_paste", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "#forge:plates/emerald",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_gadget_copy_paste_0");

  event
    .shaped("buildinggadgets2:gadget_exchanging", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "#forge:plates/silver",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_gadget_exchanging_0");

  event
    .shaped("buildinggadgets2:gadget_cut_paste", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "minecraft:shears",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_gadget_cut_paste_0");

  event
    .shaped("buildinggadgets2:gadget_destruction", ["ABA", "CDC", "AEA"], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
      C: "#forge:ender_pearls",
      D: "modern_industrialization:analog_circuit",
      E: "#forge:plates/lapis",
    })
    .id("ftbneotech:buildinggadgets2_gadget_destruction_0");
});
