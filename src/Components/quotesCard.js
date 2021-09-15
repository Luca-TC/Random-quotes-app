import { connect } from "react-redux"
import fetchQuotes from "../services/QuotesService"



const QuotesCard = (props) => {
    return (
        <div id="quote-box">
        {props.text?
            <h1>{props.text}</h1>
            :<h2>{props.error}</h2>}
            <p id="text"><strong>{props.author}</strong></p>
            <span id="author"></span>
            <button onClick={props.getQuote} id="new-quote">new-quote</button>
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet it</a>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('-----',state.quote)
    return {
        text: state.quote.content,
        author: state.quote.author,
        error: state.error
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