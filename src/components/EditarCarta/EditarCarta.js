import React, { useState, useEffect } from "react";
import axios from "axios";

const EditarCarta = () => {
  const [cartasBack, setCartasBack] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    axios
      .get("/cartas")
      .then(response => {
        setCartasBack(response.data);
        setIsLoad(true);
      })
      .catch(error => console.log(error));
  }, []);
  return <div>{cartasBack?.map()}</div>;
};

export default EditarCarta;
