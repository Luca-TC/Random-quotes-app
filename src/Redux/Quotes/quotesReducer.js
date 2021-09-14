import { GET_QUOTE_FAILURE, GET_QUOTE_REQUEST, GET_QUOTE_SUCCESS } from "./Actions/quotesActionTypes"



const initialState = {
    loading: false,
    quote: {
        text:'',
        author:''
    },
    error: ''
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            }
            break
        case GET_QUOTE_SUCCESS:
            return {
                loading: false,
                quote: action.payload,
                error: ''
            }
        case GET_QUOTE_FAILURE:
            return {
                loading: false,
                quote: '',
                error: action.payload
            }
        default:
            return state
            break
    }
}





