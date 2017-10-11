import { Feedback, FeedbackType } from 'nativescript-feedback'
const feedback: Feedback = new Feedback()

let page

export function onLoaded( args ) {
    page = args.object
}

export function showFeedback() {
    feedback.show( {
        message: 'I\'m feedback on main page' ,
        duration: 5000,
    } )
}

export function openModal() {
    const modal = 'modal-page'

    page.showModal( modal, {}, () => {
        page.closeModal()
    })
}