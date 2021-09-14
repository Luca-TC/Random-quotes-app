import { getRandomQuoteFailure, getRandomQuoteRequest, getRandomQuoteSuccess } from "./Actions/quoteActions"

const fetchQuotes = () => {
    return function (dispatch) {
        dispatch(getRandomQuoteRequest())
        axios.get('https://api.quotable.io/random')
            .then(res => {
                const quote = res.data
                dispatch(getRandomQuoteSuccess(quote))
            })
            .catch(err => {
                dispatch(getRandomQuoteFailure(err.message))
            })
    }
}
