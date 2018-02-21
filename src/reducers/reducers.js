export default function appReducers(state = [], action) {
    switch (action.type) {
        case 'CLICK_CELL': {
            const id = action.id;
            const newState = Object.assign({}, state);
            if(!newState.clickedCells.includes(id))
            {
                newState.clickedCells.push(id);
            }
            return newState;
        }
        default:
            return state;
    }
}
