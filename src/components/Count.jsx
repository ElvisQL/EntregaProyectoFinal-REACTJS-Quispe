import { useState } from "react";
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const Count = () => {
  const [counter, setCounter] = useState(1);

  const decrementar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const incrementar = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="count">
      <span>Cantidad</span>
      <div className="count-body">
        <BsDashCircleFill className="boton-plus-less" onClick={decrementar} />
        <span>{counter}</span>
        <BsPlusCircleFill className="boton-plus-less" onClick={incrementar} />
      </div>
    </div>
  );
};

export default Count;
