export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}
