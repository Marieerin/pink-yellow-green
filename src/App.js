import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Shape from './Shape';
import Counter from './Counter';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  // These three useStates hold the information on how many games played, failed and won.
  const [correctCounter, setCorrectCounter] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);
  const [totalTriesCounter, setTotalTriesCounter] = useState(0);


  const [currentWord, setCurrentWord] = useState({
    hex: '#72d979',
    name: 'pink'
  });

  const [colorArr, setColorArr] = useState([{hex: '#ff33d1', name: 'pink'}, {hex: '#ffe633', name: 'yellow'}, {hex: '#72d979', name: 'green'}]);

  const colors = {
    red: '#ff3333',
    orange: 'rgb(255, 156, 51)',
    yellow: '#ffe633',
    green: '#72d979',
    blue: '#3386ff',
    purple: 'rgb(182, 132, 248)',
    pink: '#ff33d1'
  };

  const keys = Object.keys(colors);

  const colorRandomizer = () => {
    const color0 = keys[Math.floor(Math.random() * keys.length)];
    const color1 = keys[Math.floor(Math.random() * keys.length)];
    const color2 = keys[Math.floor(Math.random() * keys.length)];
    const colorArray =[{hex: colors[color0], name: color0}, {hex: colors[color1], name: color1}, {hex: colors[color2], name: color2}];
    
    const randomName = colorArray[Math.floor(Math.random() * 3)];
    const randomHex = colorArray[Math.floor(Math.random() * 3)];


    setColorArr(colorArray);
    setCurrentWord({
        hex: `${randomHex.hex}`,
        name: `${randomName.name}`
      });
    proofColors(color0, color1, color2, randomHex, randomName);
  };

  const proofColors = (color0, color1, color2, hex, name) => {
    if (color0 === color2 || color0 === color1 || color1 === color2){
        colorRandomizer();
      };

    if (hex === name) {
      colorRandomizer();
    };
  };

  const shapeClicker = (color) => {
    const totalTries = totalTriesCounter + 1;
    setTotalTriesCounter(totalTries);
    if (color === currentWord.name){
      const correct = correctCounter + 1;
      colorRandomizer();
      setCorrectCounter(correct);
    } else {
      const wrong = errorCounter + 1;
      setErrorCounter(wrong);
    }
  };

  return (
    <div id="App">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Counter wins={correctCounter} loss={errorCounter} total={totalTriesCounter} /> 
      <div id="wordBox">
        <span style={{color:`${currentWord.hex}`}}>{currentWord.name}</span>
      </div>
      <div id='shapeBox' >
        {colorArr.map((shapeColor, i)=> {
          return (
            <Shape color={shapeColor.hex} name={shapeColor.name} key={i} shapeClicker={shapeClicker}  />
          );
        })}

      </div>
    </div>
  );
}

export default App;
