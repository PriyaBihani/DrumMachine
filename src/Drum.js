import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";

const Drum = () => {
  const keys = [
    {
      key: "Q",
      pad: 81,
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      pad: 87,
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      pad: 69,
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      pad: 65,
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      pad: 83,
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      pad: 68,
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      pad: 90,
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      pad: 88,
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      pad: 67,
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const [display, setDisplay] = useState("");

  const handleKeyPress = (e) => {
    console.log(e);
    var keyCode = e.keyCode || e.target.getAttribute("data-key");
    console.log(keyCode);
    var key = keys.find(function (key) {
      return key.pad === parseInt(keyCode);
    });
    if (key && key.url) {
      var audio = $(`audio#${key.key}`)[0];
      console.log(audio);
      setDisplay(key.id);
      document.getElementById("Pad" + keyCode).classList.add("press");
      audio.play();

      setTimeout(function () {
        document.getElementById("Pad" + keyCode).classList.remove("press");
      }, 400);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  return (
    <div id="drum-machine">
      <div id="main">
        <div className="row">
          <div id="display">{display}</div>
        </div>
        <div className="row">
          {keys.map((key) => {
            return (
              <div
                key={key.id}
                data-key={key.pad}
                className="drum-pad btn"
                id={"Pad" + key.pad}
                onClick={handleKeyPress}
              >
                {key.key}
                <audio src={key.url} className="clip" id={key.key}></audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drum;
