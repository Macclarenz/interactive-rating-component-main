import '../sass/style.scss'

// module
import ratingPage from './load_rating'
import thankyouPage from './load_thankyou'

export {
    ratingPage,
    thankyouPage
}

const initPage = () => {
    return ratingPage()
}

initPage()