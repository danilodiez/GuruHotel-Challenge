export const FETCH_STORE_BEGIN = 'FETCH_STORE_BEGIN';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';

export function fetchStoreBegin() {
    return {
        type: FETCH_STORE_BEGIN
    }
}

export function fetchStoreSuccess(stores) {
    return {
        type: FETCH_STORE_SUCCESS,
        stores: stores
    }
}

export function fetchStoreFailure(error) {
    return {
        type: FETCH_STORE_FAILURE,
        error: error
    }
}
