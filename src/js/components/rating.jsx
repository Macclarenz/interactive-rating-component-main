import react from "react";

// Icons
import star from '../../../images/icon-star.svg'

// Modules
import {thankyouPage} from '../index'
import {animate_open_rating, animate_close_rating} from "./animation";

export default class Rating extends react.Component {
    constructor(props) {
        super(props)
        this.ratingNumbers = [
            1, 2, 3, 4, 5
        ]
        this.state = {
            currentRate: null
        }
        this.submitRating = this.submitRating.bind(this)
    }

    get ratingElements() {
        return this.ratingNumbers.map((el, i) => {
            const idValue = i + 1
            return (
                <button type='button' key={i} data-value = {idValue} className="circle rating-number" onClick={this.changeRate}>{el}</button>
            )
        })
    }

    changeRate = (e) => {
        const currentRateEl = e.target
        const newRating = this.state.currentRate = currentRateEl.dataset.value
        this.setState({currentRate: newRating})

        const ratings = document.querySelectorAll('.rating-number')
        ratings.forEach(el => {
            el.removeAttribute('current-rate')
        })

        currentRateEl.setAttribute('current-rate', true)
        return
    }

    submitRating = async () => {
        const ratingSelection = Array.from(document.querySelectorAll('.rating-number'))
        const selectedRateEl = ratingSelection.find(el => el.hasAttribute('current-rate'))
        
        if (!selectedRateEl) return console.error('Rate the service first!')

        return new Promise(res => {
            res(animate_close_rating())
        }).then(res => {
            const delay = res * 1000
            return setTimeout(() => thankyouPage(selectedRateEl.dataset.value, this.ratingNumbers.length), delay)
        })
    }

    render() {
        return (
            <div className="box-container rating-container">
                <img src={star} alt="orange star icon" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <ul className="rating-list">
                    {this.ratingElements}
                </ul>
                <button type="submit" className="rating-submit-button" onClick={this.submitRating}>Submit</button>
            </div>
        )
    }

    componentDidMount() {
        animate_open_rating()
    }
}