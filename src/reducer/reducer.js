const initialState = {
    products: [],
    basketItems: []
}

const reducer = (state = initialState, { type, payload }) => { // type === any "FETCHED_PRODUCT" .... payload === [{...}]
    switch(type){
        case "PRODUCTS_FETCHED": 
        return {
            ...state,
            products: payload
        }
        case "ADD_TO_BASKET": 
            const newArr = [...state.basketItems, payload]
            return {
                ...state,
                basketItems: newArr
            }
        case "REMOVE_FROM_CART":
            const newArrRemoved = state.basketItems.filter(item => item.id !== payload) // []
            return{
                ...state,
                basketItems: newArrRemoved
            }
        default:
            return state
    }
}

export default reducer