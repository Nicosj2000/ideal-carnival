// priority: 1000

ServerEvents.recipes((event) => {
    //condensor
    event.custom({
        type: "modern_industrialization:assembler",
        duration: 600,
        eu: 24,
        item_inputs: [
            {
                amount: 1,
                item: "modern_industrialization:digital_circuit",
            },
            {
                amount: 4,
                item: "justdirethings:eclipsealloy_ingot",
            },
            {
                amount: 4,
                item: "modern_industrialization:diamond_plate",
            },
            {
                amount: 1,
                item: "minecraft:nether_star",
            }
        ],
        fluid_inputs: [
            {
                amount: 1000,
                fluid: "modern_industrialization:synthetic_rubber",
                probability: 1.0,
            },
        ],
        item_outputs: [
            {
                amount: 1,
                item: "equivalentexchange:condenser",
            },
        ],
    });

    event
        .shaped(
            "equivalentexchange:philosophers_stone",
            ["ABA", "BCB", "ABA"],
            {
                A: "justdirethings:blazegold_ingot",
                B: "justdirethings:coal_t2",
                C: "actuallyadditions:empowered_diamatine_crystal",
            }
        )
        .id("ftbneotech:equivalentexchange_philosophers_stone_0");

    event
        .shaped("equivalentexchange:repair_talisman", ["ABC", "DEF", "CBA"], {
            A: "equivalentexchange:covalence_dust_low",
            B: "equivalentexchange:covalence_dust_medium",
            C: "equivalentexchange:covalence_dust_high",
            D: "actuallyadditions:empowered_emeradic_crystal",
            E: "minecraft:nether_star",
            F: "actuallyadditions:empowered_palis_crystal",
        })
        .id("ftbneotech:equivalentexchange_repair_talisman_0");

    event
        .shaped(
            "equivalentexchange:transmutation_table",
            ["ABA", "CDC", "ABA"],
            {
                A: "modern_industrialization:stainless_steel_plate",
                B: "actuallyadditions:empowered_void_crystal",
                C: "mekanism:ingot_refined_obsidian",
                D: "minecraft:nether_star",
            }
        )
        .id("ftbneotech:equivalentexchange_transmutation_table_0");

    event
        .shaped("equivalentexchange:alchemical_chest", ["ABC", "DEF", "GHI"], {
            A: "equivalentexchange:covalence_dust_low",
            B: "equivalentexchange:covalence_dust_medium",
            C: "equivalentexchange:covalence_dust_high",
            D: "pneumaticcraft:ingot_iron_compressed",
            E: "#forge:gems/diamond",
            F: "pneumaticcraft:ingot_iron_compressed",
            G: "#forge:ingots/iron",
            H: "minecraft:chest",
            I: "#forge:ingots/iron",
        })
        .id("ftbneotech:equivalentexchange_alchemical_chest_0");
      
    event.remove({id: "equivalentexchange:basic_collector"})
    event
        .shaped("equivalentexchange:basic_collector", ["ABA", "CDC", "AEA"], {
            A: "minecraft:glowstone",
            B: "modern_industrialization:electronic_circuit",
            C: "modern_industrialization:diamond_large_plate",
            D: "forcecraft:force_furnace",
            E: "pneumaticcraft:heat_frame",
        })
        .id("ftbneotech:equivalentexchange_basic_collector_0");
});
