addLayer("1", {
    name: "ones", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#CFDC4F",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "ones", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "1", description: "1: Reset points for ones", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    js,
    upgrades: {
        js,
        11: {
            js,
            title: "More 1s",
            description: "Double your point gain.",
            cost: new Decimal(10),
        },
    },
    layerShown(){return true}

})
addLayer("2", {
    name: "twos", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "2", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(10),
    }},
    color: "#533CA2",
    requires: new Decimal(100, ones), // Can be a function that takes requirement increases into account
    resource: "twos", // Name of prestige currency
    baseResource: "ones", // Name of resource prestige is based on
    baseAmount() {return player.ones}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: (x/10)^0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "2", description: "2: Reset ones for twos", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

   

})