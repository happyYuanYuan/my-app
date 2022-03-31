import axios from 'axios';
import {
    EXAMPLES_FETCH_LIST_BEGIN,
    EXAMPLES_FETCH_LIST_SUCCESS,
    EXAMPLES_FETCH_LIST_FAILURE,
    EXAMPLES_FETCH_LIST_DISMISS_ERROR,
} from './constants';

export function fetchRedditList( args = {} ) {
    return (dispatch: (arg0: { type: any; data?: any; }) => void) => {
        dispatch({
            type: EXAMPLES_FETCH_LIST_BEGIN
        });

        const promise = new Promise((resolve, reject) => {
            const doRequest = axios.get('http://www.reddit.com/r/reactjs.json');
            doRequest.then(
                res => {
                    dispatch({
                        type: EXAMPLES_FETCH_LIST_SUCCESS,
                        data: res.data
                    });
                    resolve(res);
                },
                err => {
                    dispatch({
                        type: EXAMPLES_FETCH_LIST_FAILURE,
                        data: {error: err}
                    });
                    reject(err);
                }
            )
        });
        return promise;
    }
}
export function dismissFetchRedditListError() {
    return {
        type: EXAMPLES_FETCH_LIST_DISMISS_ERROR
    }
}

export function reducer(state: any, action: { type: any; data: { data: { children: any; }; error: any; }; }) {
    switch (action.type) {
        case EXAMPLES_FETCH_LIST_BEGIN:
            return {
                ...state,
                fetchRedditListPedding: true,
                fetchRedditListError: null
            }
        case EXAMPLES_FETCH_LIST_SUCCESS:
            return {
                ...state,
                redditList: action.data.data.children,
                fetchRedditListPedding: false,
                fetchRedditListError: null
            }
        case EXAMPLES_FETCH_LIST_FAILURE:
            return {
                ...state,
                fetchRedditListPedding: false,
                fetchRedditListError: action.data.error,
            }
        case EXAMPLES_FETCH_LIST_DISMISS_ERROR:
            return {
                ...state,
                fetchRedditListError: null
            }
        default:
            return state;
    }
}