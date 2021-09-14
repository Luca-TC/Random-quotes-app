import { GET_QUOTE_REQUEST, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from "./quotesActionTypes"


export const getRandomQuoteRequest = () => {
    return {
        type: GET_QUOTE_REQUEST
    }
}



export const getRandomQuoteSuccess = quotes => {
    return {
        type: GET_QUOTE_SUCCESS,
        payload: quotes

    }
}



export const getRandomQuoteFailure = error => {
    return {
        type: GET_QUOTE_FAILURE,
        payload: error
    }
}