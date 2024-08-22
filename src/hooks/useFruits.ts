import { useReducer, useCallback, useEffect } from 'react';
import { fruitReducer } from '../reducers/fruitReducer';
import { State as FruitState } from '../reducers/types';
import { fetchAllFruits } from '../services/api';

const useFruits = () => {
    const [fruitState, dispatchFruit] = useReducer(fruitReducer, {
        isLoading: false,
        isError: false,
        removeFruit: true,
        fruits: [],
    } as FruitState);

    const fetchFruits = useCallback(async () => {
        dispatchFruit({ type: 'FETCH_INIT' });
        try {
            const result = await fetchAllFruits();
            dispatchFruit({ type: 'FETCH_SUCCESS', payload: result });
        } catch (error) {
            dispatchFruit({ type: 'FETCH_FAILURE' });
        }
    }, []);

    const removeFruit = useCallback((id: number) => {
        dispatchFruit({ type: 'REMOVE_FRUIT', payload: id });
    }, []);

    const toggleRemoveFruit = () => {
        dispatchFruit({ type: 'TOGGLE_REMOVE_FRUIT'});
    }

    useEffect(() => {
        fetchFruits();
    }, [fetchFruits]);

    return { fruitState, removeFruit, toggleRemoveFruit };
};

export default useFruits;