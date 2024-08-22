// components/FruitCard.tsx
import React, { useState } from "react";
import { Fruit } from "../reducers/types";

interface FruitCardProps {
  fruit: Fruit;
  onAction: (fruit: Fruit) => void;
  actionType: "add" | "remove"; // Add new prop to handle button action
}

const FruitCard: React.FC<FruitCardProps> = ({
  fruit,
  onAction,
  actionType,
}) => {
  const [toggledFruit, setToggledFruit] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setToggledFruit(toggledFruit === id ? null : id);
  };

  return (
    <div
      key={fruit.id}
      className="border p-2 mx-1 my-2 rounded shadow-sm cursor-pointer"
      onClick={() => handleToggle(fruit.id)}
    >
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">{fruit.name}</span>
          <span className="text-sm text-gray-500">
            {" "}
            ({fruit.nutritions.calories} calories )
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent toggling on button click
            onAction(fruit);
          }}
          className={`p-2 m-1 ${
            actionType === "add" ? "bg-green-500" : "bg-red-500"
          } text-white rounded text-sm`}
        >
          {actionType === "add" ? "+" : "-"}
        </button>
      </div>
      {toggledFruit && (
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
