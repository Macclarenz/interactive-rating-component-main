import gsap from "gsap";

// Rating page

const animate_open_rating = () => {
    const parentContainer = document.querySelector('.rating-container')
    const childrenEl = parentContainer.querySelectorAll('img, h1, p, ul, button')

    const tl = gsap.timeline()

    tl.from(parentContainer, {opacity: 0, y: 50, delay: .5})
    tl.from(childrenEl, {opacity: 0, y: 30, stagger: .1})
    return
}

const animate_close_rating = () => {
    const parentContainer = document.querySelector('.rating-container')
    let duration = .25
    gsap.to(parentContainer, {opacity: 0, y: 30, duration})
    return duration
}


// Thank you page

const animate_open_thankyou = () => {
    const thankyouContainer = document.querySelector('.thank-you-container')
    const thankyouChildren = thankyouContainer.children

    const tl = gsap.timeline()
    tl.from(thankyouContainer, {opacity: 0, y: 30})
    tl.from(thankyouChildren, {opacity: 0, y: 30, stagger: .1})
    return
}

export {
    animate_open_rating, 
    animate_open_thankyou, 
    animate_close_rating
}