// priority: 0


StartupEvents.registry('item', event => {
	event.create('ftbneotech:ender_apple').displayName('Ender Apple')
	event.create('ftbneotech:black_quartz_crushed_dust').displayName('Black Quartz Crushed Dust')
	event.create('ftbneotech:black_quartz_dust').displayName('Black Quartz Dust')
	event.create('ftbneotech:active_singularity').displayName('Unstable Singularity')
	event.create('ftbneotech:compressed_iron_curved_plate').displayName('Compressed Iron Curved Plate')
	event.create('ftbneotech:compressed_iron_plate').displayName('Compressed Iron Plate')
	event.create('ftbneotech:ultimate_singularity').displayName('Ultimate Singularity')
	event.create('ftbneotech:music_disc', "music_disc").displayName(`Teknoaxe - Edge of Tomorrow`).song('ftbneotech:edgeoftomorrow', 5760).analogOutput(2)

})

