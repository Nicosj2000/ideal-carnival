ServerEvents.recipes((event) => {

    //Blank Module
    event.shaped("8x modularrouters:blank_module", ["URU", "SCS", "WWW"], {
      C: "modern_industrialization:digital_circuit",
      W: "modern_industrialization:gold_bolt",
      S: "#forge:plates/stainless_steel",
      U: "modern_industrialization:stainless_steel_curved_plate",
      R: "minecraft:redstone_torch"
    }).id("ftbneotech:mr_blank_module");

    //Modular Router
    event.shaped("4x modularrouters:modular_router", ["SIS", "MBR", "SCS"], {
      B: "modularrouters:blank_module",
      S: "#forge:plates/stainless_steel",
      I: "minecraft:iron_bars",
      C: "#forge:chests",
      M: "modern_industrialization:large_motor",
      R: "modern_industrialization:redstone_battery"
    }).id("ftbneotech:mr_modular_router");

    //Blank Upgrade
    event.shaped("6x modularrouters:blank_upgrade", ["SSB", "SCB", " SB"], {
        S: "#forge:plates/stainless_steel",
        C: "modern_industrialization:digital_circuit",
        B: "modern_industrialization:gold_bolt"
    }).id("ftbneotech:mr_blank_upgrade");

    let modular_routers_upgrades = [
       ['modularrouters:puller_module_1', 'modularrouters:puller_module_2', 'modern_industrialization:digital_circuit'],
       ['modularrouters:sender_module_1', 'modularrouters:sender_module_2', 'modern_industrialization:digital_circuit'],
       ['modularrouters:fluid_module', 'modularrouters:fluid_module_2', 'modern_industrialization:digital_circuit'],
       ['modularrouters:extruder_module_1', 'modularrouters:extruder_module_2', 'modern_industrialization:digital_circuit'],

       ['modularrouters:sender_module_2', 'modularrouters:sender_module_3', 'modern_industrialization:quantum_circuit'],
    ];

    function upgradeRecipes(upgrades) {
        let clean_output = upgrades[1].replace("modularrouters:", "")
        event.shapeless(upgrades[1], [upgrades[0], upgrades[2]]).id("ftbneotech:" + clean_output + "_recipe");
        event.shapeless("4x " + upgrades[1], [upgrades[0], upgrades[0], upgrades[0], upgrades[0], upgrades[2]]).id("ftbneotech:" + clean_output + "_recipe_1");
    };
    
    modular_routers_upgrades.forEach(upgrades => {
        upgradeRecipes(upgrades);
    });

    //Activator Module
    event.shaped("modularrouters:activator_module", ["SLS", "DBD", "SES"], {
        E: "justdirethings:eclipsealloy_ingot",
        S: "#forge:plates/stainless_steel",
        L: "minecraft:lever",
        D: "minecraft:dispenser",
        B: "modularrouters:blank_module"
    }).id("ftbneotech:mr_activator_module");

    //Energy Upgrade
    event.shaped("modularrouters:energy_upgrade", ["SPS", "LBL", "SPS"], {
        P: "modern_industrialization:platinum_wire",
        S: "#forge:plates/stainless_steel",
        B: "modularrouters:blank_upgrade",
        L: "modern_industrialization:battery_alloy_large_plate"
    }).id("ftbneotech:mr_energy_upgrade");

    //Energy Output Module
    event.shaped("modularrouters:energy_output_module", ["SPS", "PBP", "SPS"], {
        P: "modern_industrialization:platinum_wire",
        S: "#forge:plates/stainless_steel",
        B: "modularrouters:blank_module"
    }).id("ftbneotech:mr_energy_output_module");

    //Speed Upgrade
    event.shaped("3x modularrouters:speed_upgrade", ["RPR", "NBN", "SWS"], {
        R: "#forge:dusts/redstone",
        P: "#forge:plates/electrum",
        N: "#forge:nuggets/electrum",
        B: "modularrouters:blank_upgrade",
        S: "#forge:sugar",
        W: "#forge:wires/electrum"
    }).id("ftbneotech:mr_speed_upgrade");
});