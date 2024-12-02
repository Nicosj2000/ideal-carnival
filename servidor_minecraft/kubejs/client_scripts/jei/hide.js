// priority: 0

const JEIhide = [
  "forcecraft:spoils_bag",
  "forcecraft:spoils_bag_t2",
  "forcecraft:spoils_bag_t3"
];

const JEIhideFluids = [
  "pneumaticcraft:plastic",
  "pneumaticcraft:biodiesel",
  "immersiveengineering:biodiesel",
  "pneumaticcraft:vegetable_oil",
  "immersiveengineering:ethanol",
  "modern_industrialization:creosote",
  "pneumaticcraft:ethanol",
  "mekanism:hydrogen",
  "mekanism:oxygen",
  "mekanism:chlorine",
  "mekanism:sulfuric_acid",
  "mekanism:ethene",
  "mekanism:steam"
];

JEIEvents.hideFluids((event) => {
  JEIhideFluids.forEach((id) => {
    console.log("Hiding fluid: " + id);
    event.hide(id);
  });
});

JEIEvents.hideItems((event) => {
  JEIhide.forEach((id) => {
    //   console.log('Hiding item: ' + id)
    event.hide(id);
  });

  JEIhideFluids.forEach((id) => {
    event.hide(Item.of("ceramicbucket:ceramic_bucket", `{Fluid:{Amount:1000,FluidName:"${id}"}}`));
  });

  global["hideOres"].forEach((hide) => {
    event.hide(hide);
  });

  global["unUnified"].forEach((unid) => {
    event.hide(unid);
  });

  
  event.hide(Item.of("gateways:gate_pearl").ignoreNBT());
});

JEIEvents.addItems((event) => {
  const reAddGateways = [
    Item.of("gateways:gate_pearl").withNBT('{gateway:"gateways:chicken_gate"}'),
    Item.of("gateways:gate_pearl").withNBT('{gateway:"gateways:endless_witch_gate"}'),
    Item.of("gateways:gate_pearl").withNBT('{gateway:"apotheosis:boss_gate_small"}'),
  ];
  reAddGateways.forEach((readd) => {
    event.add(readd);
  });
});

JEIEvents.removeCategories((event) => {
  //console.log(event.getCategoryIds())

  const removeCategories = [
    "ae2:charging",
    "ae2:inscriber",
    "immersiveengineering:aqueezer",
  ];

  removeCategories.forEach((catid) => {
    // console.log('Removing category id for: ' + catid)
    event.remove(catid);
  });
});
