import { useMemo, useState } from "react";
import { Fruit } from "../reducers/types";

const useGroupFruits = (fruits: Fruit[]) => {
  const [groupBy, setGroupBy] = useState<string>("none");
  const [collapsedGroups, setCollapsedGroups] = useState<
    Record<string, boolean>
  >({});

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

  const toggleGroupVisibility = (group: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  return { groupedFruits, collapsedGroups, groupBy, setGroupBy, toggleGroupVisibility };
};



export default useGroupFruits;
