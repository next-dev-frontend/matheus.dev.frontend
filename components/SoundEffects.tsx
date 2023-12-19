import { useState } from 'react';
import { Howl } from 'howler';

export const useSoundEffects = () => {
  const [clickFx] = useState(
    new Howl({
      src: ['../effects/clickFx.mp3'],
      volume: 1.0,
    })
  );

  const [clickCvFx] = useState(
    new Howl({
      src: ['../effects/clickCvFx.mp3'],
      volume: 2.0,
    })
  );

  const [hoverFx] = useState(
    new Howl({
      src: ['../effects/hoverFx.mp3'],
      volume: 1.0,
    })
  );

  const [whatsFx] = useState(
    new Howl({
      src: ['../effects/whatsFx2.mp3'],
      volume: 0.3,
    })
  );

  const playClickFx = () => {
    clickFx.play();
  };

  const playClickCvFx = () => {
    clickCvFx.play();
  };

  const playHoverFx = () => {
    hoverFx.play();
  };

  const playWhatsFx = () => {
    whatsFx.play();
  };

  return {
    playClickFx,
    playClickCvFx,
    playHoverFx,
    playWhatsFx,
  };
};