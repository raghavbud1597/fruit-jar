import React from 'react';
import { Fruit } from '../reducers/types';

interface FruitJarProps {
    jar: Fruit[];
    onRemove: (id: number) => void;
    onClear: () => void;
}

const FruitJar: React.FC<FruitJarProps> = ({ jar, onRemove, onClear }) => {
    const totalCalories = jar.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0);

    return (
        <div>
            <h2>Fruit Jar</h2>
            <ul>
                {jar.map(fruit => (
                    <li key={fruit.id}>
                        {fruit.name} ({fruit.nutritions.calories} calories)
                        <button onClick={() => onRemove(fruit.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>Total Calories: {totalCalories}</div>
            <button onClick={onClear}>Clear Jar</button>
        </div>
    );
};

export default FruitJar;