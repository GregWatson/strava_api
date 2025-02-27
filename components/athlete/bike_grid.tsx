import React from "react";

interface BikeGridProps {
  bikes: any[];
}

const BikeGrid: React.FC<BikeGridProps> = ({ bikes }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${bikes.length}, 1fr)`,
        gap: "10px",
      }}
    >
      {bikes.map((bike, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px" }}>
          Name = {bike.name}
          <br />
          Distance = {bike.converted_distance}
        </div>
      ))}
    </div>
  );
};

export default BikeGrid;
