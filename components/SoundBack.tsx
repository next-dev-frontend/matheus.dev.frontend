import React, { useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Howl, Howler } from 'howler';

const SoundBack: React.FC = () => {
  const [muted, setMuted] = useState(true);
  const [sound, setSound] = useState<Howl | null>(null);

  // UseEffect para pré-carregar e repetir música de fundo
  useEffect(() => {
    function preloadSound() {
      const soundToPreload = 'sound3.mp3';
      const newSound = new Howl({
        src: [`/sounds/${soundToPreload}`],
        volume: 0.6,
        loop: true,
      });
      setSound(newSound);
    }
    preloadSound();
  }, []);

  // Controle do botão de música e efeitos
  const toggleMute = () => {
    const newMuted = !Howler._muted;
    Howler.mute(newMuted);
    setMuted(newMuted);

    if (newMuted) {
      if (sound) {
        sound.stop();
      }
    } else {
      if (sound) {
        sound.play();
      }
    }
  };

  // Forçar Howler ser iniciado com o estado de 'muted'.
  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  return (
    <button onClick={toggleMute} title='Audio'>
      {muted ? (
        <FaVolumeMute title='Ativar Efeitos Sonoros' className='text-gray-500 w-10 h-10 p-2 rounded-full hover:bg-white' />
      ) : (
        <FaVolumeUp title="Desativar Efeitos Sonoros" className='text-purple-500 w-10 h-10 p-2 rounded-full hover:bg-white' />
      )}
    </button>
  );
};

export default SoundBack;