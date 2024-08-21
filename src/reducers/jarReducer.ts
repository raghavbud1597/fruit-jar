import { JarState, JarAction } from './types';

export const jarReducer = (state: JarState, action: JarAction): JarState => {
    switch (action.type) {
        case 'ADD_FRUIT':
            return { ...state, jar: [...state.jar, action.payload] };
        case 'REMOVE_FRUIT':
            return { ...state, jar: state.jar.filter(fruit => fruit.id !== action.payload) };
        case 'CLEAR_JAR':
            return { ...state, jar: [] };
        default:
            throw new Error('Unhandled action type');
    }
};
