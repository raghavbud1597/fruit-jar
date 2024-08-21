// types.ts

export interface Fruit {
    name: string;
    id: number;
    family: string;
    genus: string;
    order: string;
    nutritions: {
        carbohydrates: number;
        protein: number;
        fat: number;
        calories: number;
        sugar: number;
    };
}

export type State = {
    isLoading: boolean;
    isError: boolean;
    fruits: Fruit[] | null;
};

export type Action =
    | { type: 'FETCH_INIT' }
    | { type: 'FETCH_SUCCESS'; payload: Fruit[] }
    | { type: 'FETCH_FAILURE' };

export type JarAction =
    | { type: 'ADD_FRUIT'; payload: Fruit }
    | { type: 'REMOVE_FRUIT'; payload: number }
    | { type: 'CLEAR_JAR' };

export type JarState = {
    jar: Fruit[];
};
