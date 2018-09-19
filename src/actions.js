import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchField = (text) => {
    // console.log(text)
    return {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text
    }
}
// Another way to do it
// ({type: 'CHANGE_SEARCH_FIELD',
//         payload: text
// })