// components/FruitCard.tsx
import React from 'react';
import { Fruit } from '../reducers/types';

interface FruitCardProps {
    fruit: Fruit;
    isToggled: boolean;
    onToggle: (id: number) => void;
    onAction: (fruit: Fruit) => void;
    actionType: 'add' | 'remove'; // Add new prop to handle button action
}

const FruitCard: React.FC<FruitCardProps> = ({ fruit, isToggled, onToggle, onAction, actionType }) => {
    return (
        <div
            key={fruit.id}
            className="border p-4 m-4 rounded shadow-sm cursor-pointer"
            onClick={() => onToggle(fruit.id)}
        >
            <div className="flex justify-between items-center">
                <span className="font-bold">{fruit.name}</span>
                <span>
                    {fruit.nutritions.calories} calories{' '}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent toggling on button click
                            onAction(fruit);
                        }}
                        className={`p-2 m-1 ${actionType === 'add' ? 'bg-green-500' : 'bg-red-500'} text-white rounded text-sm`}
                    >
                        {actionType === 'add' ? '+' : '-'}
                    </button>
                </span>
            </div>
            {isToggled && (
                <div className="mt-2 text-sm text-gray-600">
                    <p>
                        <strong>Family:</strong> {fruit.family}
                    </p>
                    <p>
                        <strong>Genus:</strong> {fruit.genus}
                    </p>
                    <p>
                        <strong>Order:</strong> {fruit.order}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FruitCard;
