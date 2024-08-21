import React, { useState } from 'react';
import useFruits from '../hooks/useFruits';
import { Fruit } from '../reducers/types';

interface FruitsListProps {
    addToJar: (fruit: Fruit) => void;
    addGroupToJar: (fruits: Fruit[]) => void;
}

const FruitsList: React.FC<FruitsListProps> = ({ addToJar, addGroupToJar }) => {
    const { fruitState } = useFruits();
    const [groupBy, setGroupBy] = useState<string>('none');

    const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGroupBy(e.target.value);
    };

    const groupedFruits = (fruits: Fruit[]) => {
        if (groupBy === 'none') return { 'All Fruits': fruits };
        return fruits.reduce((groups: { [key: string]: Fruit[] }, fruit) => {
            
            return groups;
        }, {});
    };

    return (
        <div>
            <h1>Fruits List</h1>
            <div>
                <label htmlFor="groupBy">Group By:</label>
                <select id="groupBy" value={groupBy} onChange={handleGroupChange}>
                    <option value="none">None</option>
                    <option value="family">Family</option>
                    <option value="order">Order</option>
                    <option value="genus">Genus</option>
                </select>
            </div>
            {fruitState.isError && <div>Error loading fruits</div>}
            {fruitState.isLoading ? (
                <div>Loading...</div>
            ) : (
                Object.entries(groupedFruits(fruitState.fruits || [])).map(([key, fruits]) => (
                    <div key={key}>
                        <h2>{key}</h2>
                        <button onClick={() => addGroupToJar(fruits)}>Add All {key} Fruits to Jar</button>
                        <ul>
                            {fruits.map(fruit => (
                                <li key={fruit.id}>
                                    {fruit.name} ({fruit.nutritions.calories} calories)
                                    <button onClick={() => addToJar(fruit)}>Add to Jar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
            <div />
        </div>
    );
};

export default FruitsList;