import Axios from 'axios'

const initialState = {
    loading: false,
    articles: []
}

// action types
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

//action creators
export function requestArticles () {
    let articles = Axios.get('/api/medium').then(res => {
        return res.data
    })
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ARTICLES + `_PENDING`:
            return {...state, loading:true}
        case REQUEST_ARTICLES + `_FULFILLED`:
            return { articles: action.payload, loading:false}
        default:
            return state
    }
    
}