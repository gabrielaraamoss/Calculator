import React, { useState } from "react";
import "./styles.css";
//import boton from "./Botones";

export default function App() {
  const [resultado, setResultado] = useState("");

  const click = (b) => {
    setResultado(resultado.concat(b.target.name));
  };

  const clear = () => {
    setResultado("");
  };

  const clearE = () => {
    setResultado(resultado.substring(0, resultado.length - 1));
  };

  const boton = (resultado) => {
    //let r = resultado.split("");
    //console.log(r[0]);
    //console.log(r[1]);
    //console.log(r[2]);
    //for (let i = 0; i < r.length; i++) {
    //console.log("hola");
    //    switch (i) {
    //    case "+":
    //      setResultado(C);
    //    case "":
    //      setResultado("hola");
    //  }
    //}
  };

  return (
    <div className="container">
      <div>
        <h1 className="App">Welcome to Calculator!</h1>
      </div>

      <form>
        <input type="text" className="orientacion" value={resultado} />
      </form>

      <div className="App">
        <div>
          <button onClick={clear} className="tBoton color">
            {" "}
            clear{" "}
          </button>
          <button onClick={clearE} className="tBoton color">
            {" "}
            ←{" "}
          </button>
        </div>
        <div>
          <button onClick={click} className="tamaño" name="1">
            {" "}
            1{" "}
          </button>
          <button onClick={click} className="tamaño" name="2">
            {" "}
            2{" "}
          </button>
          <button onClick={click} className="tamaño" name="3">
            {" "}
            3{" "}
          </button>
          <button onClick={click} className="tamaño color" name="+">
            {" "}
            +{" "}
          </button>
        </div>

        <div>
          <button onClick={click} className="tamaño" name="4">
            {" "}
            4{" "}
          </button>
          <button onClick={click} className="tamaño" name="5">
            {" "}
            5{" "}
          </button>
          <button onClick={click} className="tamaño" name="6">
            {" "}
            6{" "}
          </button>
          <button onClick={click} className="tamaño color" name="-">
            {" "}
            -{" "}
          </button>
        </div>

        <div>
          <button onClick={click} className="tamaño" name="7">
            {" "}
            7{" "}
          </button>
          <button onClick={click} className="tamaño" name="8">
            {" "}
            8{" "}
          </button>
          <button onClick={click} className="tamaño" name="9">
            {" "}
            9{" "}
          </button>
          <button onClick={click} className="tamaño color" name="*">
            {" "}
            *{" "}
          </button>
        </div>

        <div>
          <button onClick={click} className="tamaño color" name="^">
            {" "}
            ^{" "}
          </button>
          <button onClick={click} className="tamaño" name="0">
            {" "}
            0{" "}
          </button>
          <button onClick={click} className="tamaño color" name="/">
            {" "}
            /{" "}
          </button>
          <button onClick={boton(resultado)} className="tamaño color" name="=">
            {" "}
            ={" "}
          </button>
        </div>
      </div>
    </div>
  );
}
