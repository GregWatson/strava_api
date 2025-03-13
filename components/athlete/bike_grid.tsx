"use client";
import React from "react";

export function BikeGrid({ bikes }: { bikes: any[] }) {
  const bikesLen = bikes.length;

  return (
    <div>
      {bikesLen == 0 && <p>No bikes</p>}
      {bikes.length && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${bikes.length}, 1fr)`,
            gap: "10px",
          }}
        >
          {bikes.map((bike, index) => (
            <div
              key={index}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              Name = {bike.name}
              <br />
              Distance = {bike.converted_distance}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
