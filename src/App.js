import React, { useState, useEffect } from 'react';
import Shape from './Shape'
import './App.css';

function App() {
  const [currentWord, setCurrentWord] = useState({
    hex: '#72d979',
    name: 'pink'
  });

  const [colorArr, setColorArr] = useState([{hex: '#ff33d1', name: 'pink'}, {hex: '#ffe633', name: 'yellow'}, {hex: '#72d979', name: 'green'}]);

  const colors = {
    red: '#ff3333',
    orange: '#ff7433',
    yellow: '#ffe633',
    green: '#72d979',
    blue: '#3386ff',
    purple: '#8a33ff',
    pink: '#ff33d1'
  };

  const keys = Object.keys(colors);

  const colorRandomizer = () => {
    const color0 = keys[Math.floor(Math.random() * keys.length)];
    const color1 = keys[Math.floor(Math.random() * keys.length)];
    const color2 = keys[Math.floor(Math.random() * keys.length)];
    const colorArray =[{hex: colors[color0], name: color0}, {hex: colors[color1], name: color1}, {hex: colors[color2], name: color2}];
    const randomName = colorArray[Math.floor(Math.random() * 2)];
    const randomHex = colorArray[Math.floor(Math.random() * 2)];


    setColorArr(colorArray);
    setCurrentWord({
        hex: `${randomHex.hex}`,
        name: `${randomName.name}`
      });
  };

  const shapeClicker = (color) => {
    console.log(color, currentWord.name);
    if (color === currentWord.name){
      colorRandomizer();
    }
  };

  return (
    <div className="App">
      <div id="wordBox">
        <span style={{color:`${currentWord.hex}`}}>{currentWord.name}</span>
      </div>
      <div id='shapeBox'>
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
