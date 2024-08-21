import { useReducer } from 'react';
import { jarReducer } from '../reducers/jarReducer';
import { JarState, JarAction } from '../reducers/types';
import { Fruit } from '../reducers/types';

const useJar = () => {
    const [jarState, dispatchJar] = useReducer(jarReducer, { jar: [] } as JarState);

    const addToJar = (fruit: Fruit) => {
        dispatchJar({ type: 'ADD_FRUIT', payload: fruit });
    };

    const removeFromJar = (id: number) => {
        dispatchJar({ type: 'REMOVE_FRUIT', payload: id });
    };

    const clearJar = () => {
        dispatchJar({ type: 'CLEAR_JAR' });
    };

    return { jarState, addToJar, removeFromJar, clearJar };
};

export default useJar;
