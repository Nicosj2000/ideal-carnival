ItemEvents.modification(event => {
    event.modify('enderzoology:ender_fragment', item => {
        item.fireResistant = true
      })
      event.modify('minecraft:ender_pearl', item => {
        item.fireResistant = true
      })
      event.modify('minecraft:quartz', item => {
        item.fireResistant = true
      })
}) 