import React, { useState } from "react";
import { Text } from "troika-three-text";
import * as THREE from "three";
import "../style.css";

export default function Candle() {
  const [blown, setBlown] = useState(false);

  const blow = () => {
    setBlown(true);
  };

  const relight = () => {
    setBlown(false);
  };

  let myNum = new Text();
  var myScene = new THREE.Scene();
  myScene.add(myNum);
  myNum.text = "20";
  myNum.fontSize = 1;
  myNum.color = "white";

  myNum.sync();
  return (
    <div className="pt-11">
       

      {/* <h1 className=" mt-14 text-large font-bold drop-shadow-lg text-zinc-300">
        22
      </h1> */}
      <div className="m-12 p-11">
            <button
                onClick={relight}
                className=" bg-slate-100 mr-5 p-4 text-black text-center items-center rounded-2xl hover:font-semibold hover:zoom-out hover:bg-amber-300 hover:text-slate-950 hover:border-2"
            >
                Relight
            </button>
            <button
                onClick={blow}
                className=" bg-slate-100 ml-5 p-4 text-black text-center items-center rounded-2xl hover:font-semibold hover:zoom-out hover:border-2 hover:bg-black hover:text-white"
            >
                Blow
            </button>

        </div>

      <div class="holder bg-black w-full">
      <h1 className=" mt-14 text-large font-bold drop-shadow-lg text-zinc-300 h-36 max-w-full bg-red-500 ">
        22
      </h1>
        <div class="candle">
          ________________
          <div class={blown ? "" : "blinking-glow"}></div>
          <div class="thread"></div> 
          <div class={blown ? "" : "glow"}></div>
          <div class={blown ? "" : "flame"}></div>
        </div>
      </div>
    </div>
  );
}
