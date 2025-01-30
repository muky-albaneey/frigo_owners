import React from "react";
import { G, Line } from "react-native-svg";

const CustomGrid = ({ x, y, data, ticks }) => {
  return (
    <G>
      {/* Horizontal Lines */}
      {ticks.map((tick, index) => (
        <Line
          key={`horizontal-line-${index}`}
          x1="0"
          x2="100%"
          y1={y(tick)}
          y2={y(tick)}
          stroke="#ccc"
          strokeWidth={0.5}
        />
      ))}
      {/* Vertical Lines */}
      {data.map((_, index) => (
        <Line
          key={`vertical-line-${index}`}
          y1="0"
          y2="100%"
          x1={x(index)}
          x2={x(index)}
          stroke="#ccc"
          strokeWidth={0.5}
        />
      ))}
    </G>
  );
};

export default CustomGrid;
