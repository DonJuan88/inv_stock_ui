import { Children } from "react";

export const MapsUtility = ({ of, render }) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};
