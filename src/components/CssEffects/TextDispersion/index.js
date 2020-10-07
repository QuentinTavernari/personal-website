// == Import npm
import React, { useEffect } from 'react';

// == Import
import './styles.scss';

// == Composant
const ConsoleEffect = () => {
  const text = $('.split');

  const split = new SplitText(text);

  function random(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  $(split.chars).each(function (i) {
    TweenMax.from($(this), 2.5, {
      opacity: 0,
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      scale: 0.1,
      delay: i * 0.02,
      yoyo: true,
      repeat: -1,
      repeatDelay: 10,
    });
  });
  return (
    <div className="console-container">
      <span id="text" />
      <div className="console-underscore" id="console">&#95;</div>
    </div>
  );
};

// == Export
export default ConsoleEffect;
