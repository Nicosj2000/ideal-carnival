// priority: 1000

ServerEvents.recipes((event) => {
  
  //Dimensional Core
event.shaped('dimstorage:dim_core', ['CBC','BAB','CBC'], {
  A: 'ae2:printed_engineering_processor',
  B: 'actuallyadditions:restonia_crystal',
  C: 'modern_industrialization:stainless_steel_plate'
}).id('ftbneotech:dimensional_core');

//Solid Dimensional Core
event.shaped('dimstorage:solid_dim_core', ['AAA','ABA','AAA'], {
  A: 'modern_industrialization:carbon_plate',
  B: 'dimstorage:dim_core'
}).id('ftbneotech:solid_dimensional_core');

//Dimensional Wall
event.shaped('4x dimstorage:dim_wall', ['ABA','BCB','ABA'], {
  A: 'modern_industrialization:carbon_plate',
  B: 'actuallyadditions:restonia_crystal',
  C: "ae2:fluix_pearl"
}).id('ftbneotech:dimensional_wall');

//Dimensional Tablet
event.shaped('dimstorage:dimensional_tablet', ['AAA','BCB','AAA'], {
  A: 'ae2:quartz_glass',
  B: 'modern_industrialization:aluminum_rod',
  C: 'dimstorage:solid_dim_core'
}).id('ftbneotech:dimensional_tablet');

});
