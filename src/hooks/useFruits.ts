import { useReducer, useCallback, useEffect } from 'react';
import { fruitReducer } from '../reducers/fruitReducer';
import { State as FruitState } from '../reducers/types';
import { fetchAllFruits } from '../services/api';

const useFruits = () => {
    const [fruitState, dispatchFruit] = useReducer(fruitReducer, {
        isLoading: false,
        isError: false,
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

    useEffect(() => {
        fetchFruits();
    }, [fetchFruits]);

    return { fruitState };
};

export default useFruits;