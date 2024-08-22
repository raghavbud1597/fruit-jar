import React from "react";
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

  // Integrating grouping logic
  const {
    groupedFruits,
    collapsedGroups,
    groupBy,
    toggleGroupVisibility,
    handleGroupChange,
  } = useGroupFruits(fruitState.fruits || []);

  const handleAddToJar = (fruit: Fruit) => {
    addToJar(fruit);
    fruitState.removeFruit && removeFruit(fruit.id);
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
          onClick={() => { 
            addGroupToJar(fruitState.fruits || [])
            fruitState.removeFruit && fruitState.fruits.forEach((fruit) => removeFruit(fruit.id));
          }}
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
          checked={fruitState.removeFruit}
          onChange={toggleRemoveFruit}
        />
      </div>
      {fruitState.isError && (
        <div className="text-red-500">Error loading fruits</div>
      )}
      {fruitState.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mb-6 overflow-y-scroll max-h-[400px]">
          {Object.entries(groupedFruits).map(([key, fruits]) => (
            <div key={key} className="my-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">{key}</h2>
                <div>
                  <button
                    onClick={() => toggleGroupVisibility(key)}
                    className="px-2 py-1 bg-gray-300 rounded mr-2"
                  >
                    {collapsedGroups[key] ? "Expand" : "Collapse"}
                  </button>
                  <button
                    onClick={() => {
                        addGroupToJar(fruits);
                        fruitState.removeFruit && fruits.forEach((fruit) => removeFruit(fruit.id));
                    }}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Add Group
                  </button>
                </div>
              </div>
              {!collapsedGroups[key] && (
                <div className="py-2">
                  {fruits.length > 0 ? fruits.map((fruit) => (
                    <FruitCard
                      key={fruit.id}
                      fruit={fruit}
                      onAction={handleAddToJar}
                      actionType="add"
                    />
                  )) : (<div>List Empty...</div>)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FruitsList;
