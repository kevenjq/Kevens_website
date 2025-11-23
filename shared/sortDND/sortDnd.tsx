// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

export const sortDnd = <T,>(
  items: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const newArr = [...items];
  const [removed] = newArr.splice(startIndex, 1);
  newArr.splice(endIndex, 0, removed);

  return newArr;
};
