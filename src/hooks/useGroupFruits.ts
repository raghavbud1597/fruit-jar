import { useMemo } from "react";
import { Fruit } from "../reducers/types";

const useGroupFruits = (fruits: Fruit[], groupBy: string) => {
  const groupedFruits = useMemo(() => {
    if (groupBy === "none") {
      return { All: fruits };
    }

    return fruits.reduce((acc, fruit) => {
      const groupKey = fruit[groupBy as keyof Fruit] as string;
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(fruit);
      return acc;
    }, {} as Record<string, Fruit[]>);
  }, [fruits, groupBy]);

  return { groupedFruits };
};

export default useGroupFruits;
