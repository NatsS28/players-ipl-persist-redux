
const initialState = []
const playerOperations = (state=initialState,action) => {
    switch (action.type) {
        case "ADD_NEW_USER":{
            
            let { player } = action.payload
            let targetArr = state;
            targetArr.push(player);
            console.log(targetArr);
            return [
                ...targetArr
            ];
        }
        case "EDIT_USER": {
            let { id, player } = action.payload;
            let targetArr = state.filter((player) => player.id !== id);
            console.log(targetArr);
            targetArr.push(player);
            return [
                ...targetArr
            ];
        }
        case "DELETE_USER": {
            let { id } = action.payload;
            let targetArr = state.filter((player) => player.id !== id);
            console.log(targetArr);
            return [
                ...targetArr
            ];
        }
        default: return state;
        
    }
}

export default playerOperations;