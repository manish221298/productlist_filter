let initialState = []
 const productReducer = (state= initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT' : {
            return state.concat(action.payload)
        }

        default: {
            return [...state]
        }
    }
}



export default productReducer