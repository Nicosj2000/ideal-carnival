// priority: 1000

ServerEvents.recipes((event) => {

    event
    .shaped("hangglider:glider_framework", [" A ", " B ", "CCC"], {
      A: "#forge:rods/invar",
      B: "#forge:rods/invar",
      C: "#forge:plates/invar",
    })
    .id("ftbneotech:hangglider_glider_framework_0");

  event
    .shaped("hangglider:glider_wing", ["  A", " B ", "CD "], {
      A: "#forge:rods/invar",
      B: "immersiveengineering:ersatz_leather",
      C: "immersiveengineering:ersatz_leather",
      D: "modern_industrialization:rubber_sheet",
    })
    .id("ftbneotech:hangglider_glider_wing_0");

});