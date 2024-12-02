// priority: 1000

//Starter Items
PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starting_items")) {
    // Add the stage
    event.player.stages.add("starting_items");
    global["startingItems"].forEach((item) => {
      event.player.give(item);
    });
  }
});
