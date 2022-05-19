// Library
import reactDom from "react-dom";

// React Components
import {Rating} from './components/app'

const ratingPage = async () => {
    return reactDom.render(<Rating />, document.querySelector('main'))
}

export default ratingPage