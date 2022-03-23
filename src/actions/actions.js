// action = function  ===  {type: "REMOVE_FROM_CART", payload: id}

export const productsFetched = (products) => {  
    return {
        type: "PRODUCTS_FETCHED",
        payload: products // res.data === 15
    }
} 
