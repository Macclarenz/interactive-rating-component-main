// Library
import react from "react";

// Illustrations
import thankyou from '../../../images/illustration-thank-you.svg'

// Animation modules
import { animate_open_thankyou } from "./animation";

export default class ThankyouPage extends react.Component {
    render() {
        return (
            <div className="box-container thank-you-container">
                <img src={thankyou} alt="thank you illustration" />
                <p className="selected-rate">You selected <span id="selectedRate">{this.props.selectedRate}</span> out of <span id="totalRate">{this.props.totalRate}</span></p>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
            </div>
        )
    }

    componentDidMount() {
        animate_open_thankyou()
    }
}

ThankyouPage.defaultProps = {
    selectedRate: '-',
    totalRate: '-'
}