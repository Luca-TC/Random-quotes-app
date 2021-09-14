import { connect } from "react-redux"
import fetchQuotes from "../services/QuotesService"



const QuotesCard = (props) => {
    return (
        <div id="quote-box">
            <h1>Sono una macchina inutile</h1>
            <p id="text"><strong>NON È VERO</strong></p>
            <span id="author"></span>
            <button onClick={props.getQuote} id="new-quote">new-quote</button>
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet it</a>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.quote.text,
        author: state.quote.author
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuote: () => {
            dispatch(fetchQuotes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesCard)