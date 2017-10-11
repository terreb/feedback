import { Feedback, FeedbackType } from 'nativescript-feedback'
const feedback: Feedback = new Feedback()

export function showFeedback() {
    feedback.show( {
        message: 'I\'m feedback on modal page' ,
        duration: 5000,
    } )
}