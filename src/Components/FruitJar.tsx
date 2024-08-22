import React from "react";
import { Fruit } from "../reducers/types";
import FruitCard from "./FruitCard";

interface FruitJarProps {
  jar: Fruit[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

const FruitJar: React.FC<FruitJarProps> = ({ jar, onRemove, onClear }) => {
  const totalCalories = jar.reduce(
    (sum, fruit) => sum + fruit.nutritions.calories,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Fruit Jar</h2>
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-semibold">
          Total Calories: {totalCalories}
        </div>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Jar
        </button>
      </div>
      {jar.length > 0 ? (
        <div className="mb-6">
          <div className="py-2 max-h-[400px] overflow-y-auto">
            {jar.map((fruit) => (
              <FruitCard
                key={fruit.id}
                fruit={fruit}
                onAction={() => onRemove(fruit.id)}
                actionType="remove"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-500">Your jar is empty.</div>
      )}
    </div>
  );
};

export default FruitJar;
