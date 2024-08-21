import React from 'react';
import FruitsList from '../components/FruitsList';
import FruitJar from '../components/FruitJar';
import useJar from '../hooks/useJar';
import { Fruit } from '../reducers/types';

const FruitPage: React.FC = () => {
    const { jarState, addToJar, removeFromJar, clearJar } = useJar();

    const addGroupToJar = (fruits: Fruit[]) => {
        fruits.forEach(addToJar);
    };

    return (
        <div>
            <FruitsList addToJar={addToJar} addGroupToJar={addGroupToJar} />
            <FruitJar jar={jarState.jar} onRemove={removeFromJar} onClear={clearJar} />
        </div>
    );
};

export default FruitPage;