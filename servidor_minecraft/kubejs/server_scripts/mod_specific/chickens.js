// priority: 1000

ServerEvents.recipes((event) => {
    //breeder
    event.custom({
        type: "modern_industrialization:assembler",
        duration: 600,
        eu: 8,
        item_inputs: [
            {
                amount: 1,
                item: "immersiveengineering:reinforced_crate",
            },
            {
                amount: 4,
                item: "immersiveengineering:treated_wood_horizontal",
            },
            {
                amount: 1,
                item: "farmingforblockheads:feeding_trough",
            },
            {
                amount: 1,
                item: "modern_industrialization:motor",
            },
            {
                amount: 2,
                item: "immersiveengineering:electron_tube",
            },
        ],
        item_outputs: [
            {
                amount: 1,
                item: "chickens:breeder",
            },
        ],
    });

    event
        .shaped("chickens:catcher", ["A  ", " B ", " C "], {
            A: "minecraft:phantom_membrane",
            B: "immersiveengineering:stick_treated",
            C: "minecraft:feather",
        })
        .id("ftbneotech:chickens_catcher_0");

    event
        .shaped("chickens:ovoscope", ["AAA", "BCB", "ADA"], {
            A: "immersiveengineering:treated_wood_horizontal",
            B: "actuallyadditions:lens",
            C: "#chickens:mod_eggs",
            D: "modern_industrialization:analog_circuit",
        })
        .id("ftbneotech:chickens_ovoscope_0");

    event
        .shaped("chickens:incubator", ["ABA", "BCB", "AEA"], {
            A: "immersiveengineering:treated_wood_horizontal",
            B: "mekanism:structural_glass",
            C: "#chickens:mod_eggs",
            E: "farmingforblockheads:feeding_trough",
        })
        .id("ftbneotech:chickens_incubator_0");

    event.shaped("chickens:egg_cracker", ["ABA", "CDC", "AEA"], {
        A: "modern_industrialization:iron_plate",
        B: "minecraft:piston",
        C: "justdirethings:ferricore_ingot",
        D: "modern_industrialization:analog_circuit",
        E: "pneumaticcraft:omnidirectional_hopper",
    }).id("ftbneotech:chickens_egg_cracker_0");
});
