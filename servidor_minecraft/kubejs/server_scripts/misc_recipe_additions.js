// priority: 1000

ServerEvents.recipes((event) => {
    event
        .shaped("javd:portal_block", ["ABA", "CDC", "AEA"], {
            A: "megacells:sky_steel_block",
            B: "modern_industrialization:diamond_dust",
            C: "actuallyadditions:void_crystal",
            D: "simpleteleporters:ender_shard",
            E: "actuallyadditions:void_crystal",
        })
        .id("ftbneotech:javd_portal_block_0");

    event
        .shaped("justhammers:iron_hammer", ["AAA", "ABA", " C "], {
            A: "minecraft:raw_iron",
            B: "minecraft:stick",
            C: "minecraft:stick",
        })
        .id("ftbneotech:justhammers_iron_hammer_0");

    event
        .shaped("tempad:tempad", ["AAA", "ABA", "ACA"], {
            A: "justdirethings:eclipsealloy_ingot",
            B: "mekanism:teleportation_core",
            C: "modern_industrialization:quantum_circuit",
        })
        .id("ftbneotech:neotech_temppad");

    event
        .shaped("simplemagnets:basicmagnet", ["AAB", "CEC", "DAD"], {
            A: "#forge:ingots/iron",
            B: "#forge:gems/lapis",
            C: "modern_industrialization:steel_rod_magnetic",
            D: "#forge:dusts/redstone",
            E: "#forge:ender_pearls",
        })
        .id("ftbneotech:simplemagnets_basicmagnet_0");

    event
        .shaped("integrateddynamics:logic_programmer", ["MDM", "MCM", "LLL"], {
            M: "integratedterminals:menril_glass",
            D: "actuallyadditions:diamatine_crystal",
            C: "modern_industrialization:electronic_circuit",
            L: "#integrateddynamics:menril_logs",
        })
        .id("ftbneotech:logic_programmer");

    //force blocks
    event.shaped("jaopca:storage_blocks.force", ["AAA", "AAA", "AAA"], {
        A: "forcecraft:force_gem"
    }).id("ftbneotech:forcecraft_force_block_0");

    event.shapeless("9x forcecraft:force_gem", ["jaopca:storage_blocks.force"]).id("ftbneotech:forcecraft_force_gem_0");
    event.shapeless("stevescarts:component_tri_torch", ["3x minecraft:torch", "minecraft:iron_ingot"]).id("ftbneotech:tritorch");
    event
        .shaped("simplemagnets:advancedmagnet", ["ABA", "BCD", "EAE"], {
            A: "modern_industrialization:electrum_fine_wire",
            B: "actuallyadditions:basicmagnet",
            C: "minecraft:ender_eye",
            D: "#forge:gems/diamond",
            E: "#forge:dusts/redstone",
        })
        .id("ftbneotech:simplemagnets_advancedmagnet_0");

    event
        .shaped("undergarden:catalyst", ["ABA", "CDC", "AEA"], {
            A: "modern_industrialization:gold_curved_plate",
            B: "modern_industrialization:tin_large_plate",
            C: "modern_industrialization:diamond_plate",
            D: "modern_industrialization:tin_large_plate",
            E: "modern_industrialization:gold_curved_plate",
        })
        .id("ftbneotech:undergarden_catalyst_0");

    event
        .shaped("shrink:shrinking_device", ["ABA", "ACA", "ADA"], {
            A: "#forge:plates/iron",
            B: "#forge:ender_pearls",
            C: "immersiveengineering:insulating_glass",
            D: "modern_industrialization:analog_circuit",
        })
        .id("ftbneotech:shrink_shrinking_device_0");
    event.remove({id: "easy_villagers:iron_farm"})
    event
        .shaped("easy_villagers:iron_farm", ["AAA", "ABA", "CDC"], {
            A: "ae2:quartz_glass",
            B: "forcecraft:iron_golem_flask",
            C: "undergarden:cloggrum_ingot",
            D: "minecraft:lava_bucket",
        })
        .id("ftbneotech:iron_farm");

    event.shaped("minecraft:hopper", [
        "ABA",
        "ABA",
        " A "
    ], {
        A: "#forge:ingots/iron",
        B: "#minecraft:logs"
    }).id("ftbneotech:hopper");

    event.shaped("16x minecraft:stick", [
        "A",
        "A"
    ], {
        A: "#minecraft:logs"
    }).id("ftbneotech:sticks");

    event.shaped("ftbneotech:music_disc", [
        "CPC",
        "PDP",
        "CPC"],
        {
            C: "minecraft:cactus",
            P: "minecraft:paper",
            D: "#minecraft:music_discs"
        }
    ).id("ftbneotech:music_disc");
});
