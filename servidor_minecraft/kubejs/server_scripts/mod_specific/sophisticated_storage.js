// priority: 1000

ServerEvents.recipes((event) => {

  event.replaceInput({ mod: "sophisticatedstorage" }, "minecraft:iron_ingot", "#forge:plates/iron" );
  event.replaceInput({ mod: "sophisticatedstorage" }, "minecraft:gold_ingot", "#forge:plates/gold" );
  event.replaceInput({ mod: "sophisticatedstorage" }, "minecraft:copper_ingot", "#forge:plates/copper" );
  event.replaceInput({ mod: "sophisticatedstorage" }, "minecraft:iron_ingot", "#forge:plates/iron" );
  event.replaceInput({ mod: "sophisticatedbackpacks" }, "minecraft:iron_ingot", "#forge:plates/iron" );
  event.replaceInput({ mod: "sophisticatedbackpacks" }, "minecraft:gold_ingot", "#forge:plates/gold" );
  event.replaceInput({ mod: "sophisticatedbackpacks" }, "minecraft:copper_ingot", "#forge:plates/copper" );
  event.replaceInput({ mod: "sophisticatedbackpacks" }, "minecraft:iron_ingot", "#forge:plates/iron" );
        
    
  event
  .shaped("sophisticatedbackpacks:backpack", ["ABA", "BCB", "BDB"], {
    A: "#forge:leather",
    B: "#forge:fabric_hemp",
    C: "#forge:barrels",
    D: "minecraft:hopper",
  })
  .id("ftbneotech:ftbneotech_backpack");
 
  event
    .shaped("sophisticatedstorage:storage_io", ["AEA", "CDC", "ABA"], {
      A: "pneumaticcraft:reinforced_stone",
      B: "immersiveengineering:treated_wood_horizontal",
      C: "modern_industrialization:analog_circuit",
      D: "#forge:barrels",
      E: "modern_industrialization:electrum_plate",
    })
    .id("ftbneotech:sophisticatedstorage_storage_io_0");

  event
    .shaped("sophisticatedstorage:controller", ["SDS", "WCW", "SHS"], {
      S: "pneumaticcraft:reinforced_stone_slab",
      D: "minecraft:diamond",
      W: "immersiveengineering:treated_wood_horizontal",
      C: "modern_industrialization:analog_circuit",
      H: "pneumaticcraft:omnidirectional_hopper",
    })
    .id("ftbneotech:sophisticatedstorage_controller");

    

  //Storage link
  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 80,
    "eu": 8,
    "item_inputs": [
      {
        "amount": 1,
        "item": "wirelessredstone:circuit"
      },
      {
        "amount": 1,
        "item": "pneumaticcraft:reinforced_stone_slab"
      },
      {
        "amount": 1,
        "item": "sophisticatedstorage:upgrade_base"
      },      
    ],
    "item_outputs": [
      {
        "item": "sophisticatedstorage:storage_link"
      }
    ]
  }).id('ftbneotech:storage_link');

});