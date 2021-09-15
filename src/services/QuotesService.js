import axios from "axios"
import { getRandomQuoteFailure, getRandomQuoteRequest, getRandomQuoteSuccess } from "../Redux/Quotes/Actions/quoteActions"

const fetchQuotes = () => {
    return function (dispatch) {
        dispatch(getRandomQuoteRequest())
        axios.get('https://api.quotable.io/randm')
            .then(res => {
                const quote = res.data
                dispatch(getRandomQuoteSuccess(quote))
            })
            .catch(err => {
                dispatch(getRandomQuoteFailure(err.message))
            })
    }
}

export default fetchQuotes