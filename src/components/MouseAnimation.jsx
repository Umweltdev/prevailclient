import { useEffect, useState } from "react";

const Follower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = (event) => event.clientX;
  const mouseY = (event) => event.clientY;

  const positionElement = (event) => {
    const mouse = {
      x: mouseX(event),
      y: mouseY(event),
    };

    setMousePosition(mouse);
  };

  useEffect(() => {
    let timer;

    const init = (event) => {
      clearTimeout(timer);
      timer = setTimeout(() => positionElement(event), 2);
    };

    window.addEventListener("mousemove", init);

    return () => {
      window.removeEventListener("mousemove", init);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div
      id="follower"
      style={{
        position: "absolute",
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    >
      <div id="circle1">Sales</div>
      <div id="circle2">Sales</div>
    </div>
  );
};

export default Follower;
