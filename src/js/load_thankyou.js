// Library
import reactDom from "react-dom";

// React components
import {ThankyouPage} from './components/app'

const thankyouPage = async (selectedRate, totalRate) => {
    // console.log(`You selected ${selectedRate} out of ${totalRate}`)
    
    return reactDom.render(<ThankyouPage selectedRate = {selectedRate} totalRate = {totalRate}/>, document.querySelector('main'))
}

export default thankyouPage