import { State, Action } from './types';

export const fruitReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, isLoading: true, isError: false };
        case 'FETCH_SUCCESS':
            return { ...state, isLoading: false, fruits: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, isLoading: false, isError: true };
        default:
            throw new Error('Unhandled action type');
    }
};
