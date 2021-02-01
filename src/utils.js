const fieldSize = 10;
const layoutJson = require('./ShipLayoutData.json');
// comment from github
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
    empty: require("./images/Empty.png"),
}

const getShipPositions = (shipType) => {
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

const getShipData = ()=>{
        const shipTypes =  layoutJson.shipTypes;
        let shipData = [];
        for (let key in shipTypes) {
            if (shipTypes.hasOwnProperty(key)) {
                const ship = {
                        name: key,
                        src: icons[key],
                        positions: getShipPositions(key),
                    }
                shipData.push(ship);
            }
        }
        return shipData;
    }

const getOccupiedPositions = (shipsData)=>{
        let allPositions = [];
        shipsData.map((item)=>{
                item.positions.map((value)=>{
                    allPositions.push(value);
                })
            });
        return allPositions;
    }

const getInitialData = ()=>{
        const shipsData = getShipData();
        return {
            ships: shipsData,
            clickedCells: [],
            occupiedCells: getOccupiedPositions(shipsData),
            players: [
                {
                    name: "player 1",
                    score: 0
                },
                {
                    name:"player 2",
                    score: 0
                }
            ]
         }   
    }

export default getInitialData;
export {
    icons
}