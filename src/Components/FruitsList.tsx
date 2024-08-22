import React, { useState } from "react";
import useFruits from "../hooks/useFruits";
import useGroupFruits from "../hooks/useGroupFruits";
import { Fruit } from "../reducers/types";
import FruitCard from "./FruitCard";
import Dropdown from "./Dropdown";
import { GROUP_BY_OPTIONS } from "../constants/groupByList";

interface FruitsListProps {
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
}

const FruitsList: React.FC<FruitsListProps> = ({ addToJar, addGroupToJar }) => {
  const { fruitState, removeFruit, toggleRemoveFruit } = useFruits();
  const [groupBy, setGroupBy] = useState<string>("none");
  const [toggledFruit, setToggledFruit] = useState<number | null>(null);

  // Integrating grouping logic
  const { groupedFruits } = useGroupFruits(fruitState.fruits || [], groupBy);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupBy(e.target.value);
  };

  const handleToggle = (id: number) => {
    setToggledFruit(toggledFruit === id ? null : id);
  };

  const handleAddToJar = (fruit: Fruit) => {
    addToJar(fruit);
    fruitState.removeFruit && removeFruit(fruit.id); // Remove fruit from the list
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
      <div className="mb-4 flex items-center justify-between">
        <Dropdown
          id="groupBy"
          value={groupBy}
          options={GROUP_BY_OPTIONS}
          onChange={handleGroupChange}
          className="mr-2"
          label="Group By:"
        />
        <button
          onClick={() => addGroupToJar(fruitState.fruits || [])}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add All
        </button>
      </div>
      <div className="flex items-center mb-3">
        <label htmlFor="removeFruit" className="mr-2 font-semibold">
          Add fruit once
        </label>
        <input
          type="checkbox"
          id="removeFruit"
          name="removeFruit"
          value="removeFruit"
          onChange={toggleRemoveFruit}
        />
      </div>

      {fruitState.isError && (
        <div className="text-red-500">Error loading fruits</div>
      )}
      {fruitState.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mb-6 overflow-scroll max-h-[400px]">
          {Object.entries(groupedFruits).map(([key, fruits]) => (
            <div key={key}>
              <h2 className="text-xl font-semibold mb-2">{key}</h2>
              <div className="py-2 m-4">
                {fruits.map((fruit) => (
                  <FruitCard
                    key={fruit.id}
                    fruit={fruit}
                    isToggled={toggledFruit === fruit.id}
                    onToggle={handleToggle}
                    onAction={handleAddToJar}
                    actionType="add"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FruitsList;
