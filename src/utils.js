const fieldSize = 10;
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

const getPositions = (shipType) => {
        const layout = layoutJson.layout;
        let positions;
        for(let i = 0; i<layout.length; i++){
            const ship = layout[i];
            if (ship.ship === shipType){
                positions = ship.positions.map((item)=>{
                        return item[0]*fieldSize + item[1];
                    });
                break;
            }
        }
        return positions;
    }

const getInitialData = ()=>{
        const shipTypes =  layoutJson.shipTypes;
        let shipData = [];
        for (let key in shipTypes) {
            if (shipTypes.hasOwnProperty(key)) {
                const shipType = shipTypes[key];
                const ship = {
                        name: key,
                        src: icons[key],
                        health: Array.apply(null, {length: shipType.size}).map(() => {return -1;}),
                        positions: getPositions(key),
                    }
                shipData.push(ship);
            }
        }
        return shipData;
    }




export default getInitialData;
export {
    icons
}