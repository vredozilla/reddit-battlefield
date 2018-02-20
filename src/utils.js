const layoutJson = require('./ShipLayoutData.json');

const icons ={
    carrier: require("./images/Aircraft Shape.png"),
    battleship: require("./images/Battleship Shape.png"),
    destroyer: require("./images/Carrier Shape.png"),
    cruiser: require("./images/Cruiser Shape.png"),
    submarine: require("./images/Submarine Shape.png"),
    hitSmall: require("./images/Hit small.png"),
    hit: require("./images/Hit.png"),
    missSmall: require("./images/Miss small.png"),
    miss: require("./images/Miss.png"),
}

let shipData = [];
const shipTypes =  layoutJson.shipTypes;
const layout = layoutJson.layout;
for (let key in shipTypes) {
    if (shipTypes.hasOwnProperty(key)) {
        const shipType = shipTypes[key];
        for (let i = 0; i<shipType.count; i++)
        {
            const ship = {
                    name: key + i,
                    src: icons[key],
                    health: Array.apply(null, {length: shipType.size}).map(() => {return -1;}),
                }
            shipData.push(ship);
        }
    }
}

export default shipData;
export {
    icons
}