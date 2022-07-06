import React, { useState } from "react";

const TrafficLight = () => {
  const [trafficColor, setTrafficColor] = useState({
    activeItem: null,
    objects: [
      { color: "bg-danger" },
      { color: "bg-warning" },
      { color: "bg-success" },
    ],
  });

  const toggleSelected = (index) => {
    setTrafficColor({
      ...trafficColor,
      activeItem: trafficColor.objects[index],
    });
  };

  const toggleStyles = (index) => {
    if (trafficColor.objects[index] === trafficColor.activeItem) {
        return `rounded-circle ${trafficColor.objects[index].color} selected`;
    } else {
        return `rounded-circle ${trafficColor.objects[index].color}`;
    }
  }
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="traffic-top"></div>
      <div className="traffic-container px-4 py-5">
        {trafficColor.objects.map((element, index) => (
          <div
            key={index}
            className={toggleStyles(index)}
            onClick={() => {
              toggleSelected(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
