export const addProduct = (product) => {
    return {type: "ADD_PRODUCT", payload: product}
}

export const addSearch = (search) => {
    return {type: "ADD_SEARCH", payload: search}
}