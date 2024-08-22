import React from "react";
import FruitsList from "../components/FruitsList";
import FruitJar from "../components/FruitJar";
import useJar from "../hooks/useJar";
import { Fruit } from "../reducers/types";
import { fruitPageLayout } from "../style";

const FruitPage: React.FC = () => {
  const { jarState, addToJar, removeFromJar, clearJar } = useJar();

  const addGroupToJar = (fruits: Fruit[]) => {
    fruits.forEach(addToJar);
  };

  return (
    <div className={`${fruitPageLayout.pageWrapper}`}>
      <div className={`${fruitPageLayout.sectionWrapper}`}>
        <FruitsList addToJar={addToJar} addGroupToJar={addGroupToJar} />
      </div>
      <div className={`${fruitPageLayout.sectionWrapper}`}>
        <FruitJar
          jar={jarState.jar}
          onRemove={removeFromJar}
          onClear={clearJar}
        />
      </div>
    </div>
  );
};

export default FruitPage;
