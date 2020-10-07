// == Import npm
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

// == Import
import './styles.scss';

// == Composant
const ConsoleEffect = () => {
  useEffect(() => {
    consoleText(['Bonne visite !'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  });
  console.log(emailjs);
  // function([string1, string2],target id,[color1,color2])

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', `color:${colors[0]}`);
    window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', `color:${colors[0]}`);
          letterCount += x;
          waiting = false;
        }, 1000);
      }
      else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      }
      else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(() => {
      if (visible === true) {
        con.className = 'console-underscore hidden';
        visible = false;
      }
      else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);
  }
  return (
    <div className="console-container">
      <span id="text" />
      <div className="console-underscore" id="console">&#95;</div>
    </div>
  );
};

// == Export
export default ConsoleEffect;
