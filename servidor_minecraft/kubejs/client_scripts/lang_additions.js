ClientEvents.lang("en_us", (event) => {
  const rename = (item, newName) => event.add(Item.of(item).item.getDescriptionId(), newName);

  //event.add("gas.kubejs.chlorine_infused_gas", "Chrlorine Infused Gas");
  //rename("create_new_age:overcharged_gold", "Overcharged Electrum");

});
