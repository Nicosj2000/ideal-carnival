// priority: 1000

ServerEvents.recipes((event) => {
  event
    .shaped("mffs:projector", ["ABA", "CCC", "DED"], {
      A: "modern_industrialization:steel_curved_plate",
      B: "actuallyadditions:lens",
      C: "mffs:focus_matrix",
      D: "#immersiveengineering:scaffoldings/steel",
      E: "mffs:battery",
    })
    .id("ftbneotech:mffs_projector_0");

  event
    .shaped("mffs:coercion_deriver", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "actuallyadditions:advanced_coil",
      C: "mffs:focus_matrix",
      D: "mffs:battery"
    })
    .id("ftbneotech:mffs_coercion_deriver_0");

  event
    .shaped("mffs:fortron_capacitor", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/steel",
      B: "mffs:focus_matrix",
      C: "mffs:battery",
      D: "mffs:focus_matrix",
    })
    .id("ftbneotech:mffs_fortron_capacitor_0");

  event
    .shaped("mffs:biometric_identifier", ["ABA", "CDC", "EFE"], {
      A: "modern_industrialization:steel_ring",
      B: "mffs:focus_matrix",
      C: "mffs:blank_card",
      D: "#forge:plates/steel",
      E: "mffs:focus_matrix",
      F: "#forge:gears/steel",
    })
    .id("ftbneotech:mffs_biometric_identifier_0");

  event
    .shaped("mffs:remote_controller", ["ABA", "CDC", "CCC"], {
      A: "actuallyadditions:advanced_coil",
      B: "modern_industrialization:copper_cable",
      C: "#forge:plates/steel",
      D: "mffs:battery",
    })
    .id("ftbneotech:mffs_remote_controller_0");

  event
    .shaped("mffs:shock_module", ["AAA", " B ", "AAA"], {
      A: "mffs:focus_matrix",
      B: "immersiveengineering:tesla_coil",
    })
    .id("ftbneotech:mffs_shock_module_0");

  event
    .shaped("mffs:stabilization_module", ["AAA", " B ", "ACA"], {
      A: "mffs:focus_matrix",
      B: "#forge:plates/steel",
      C: "minecraft:diamond_pickaxe"
    })
    .id("ftbneotech:mffs_stabilization_module_0");

  event
    .shaped("mffs:blank_card", ["AAA", "ABA", "AAA"], {
      A: "minecraft:paper",
      B: "#forge:plates/steel",
    })
    .id("ftbneotech:mffs_blank_card_0");

  //mffs battery
  event
    .custom({
      type: "modern_industrialization:packer",
      eu: 30,
      duration: 80,
      item_inputs: [
        {
          amount: 1,
          item: "modern_industrialization:rubber_sheet",
        },
        {
          amount: 1,
          tag: "ftbneotech:mi_batteries",
        },
        {
          amount: 1,
          item: "mffs:focus_matrix",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "mffs:battery",
        },
      ],
    })
    .id("ftbneotech:mffsbattery");

    //focus matrix
  event
  .custom({
    type: "modern_industrialization:assembler",
    eu: 30,
    duration: 100,
    item_inputs: [
      {
        amount: 2,
        item: "modern_industrialization:redstone_battery",
      },
      {
        amount: 1,
        item: "modern_industrialization:steel_large_plate",
      },
      {
        amount: 1,
        tag: "forge:plates/diamond",
      },
    ],
    item_outputs: [
      {
        amount: 6,
        item: "mffs:focus_matrix",
      },
    ],
  })
  .id("ftbneotech:focus_matrix");
  
});
