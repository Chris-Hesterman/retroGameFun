import AlienShip from '../components/AlienShip/AlienShip';
import { Howl } from 'howler';
import { initialState } from './initialState';

export const makeShips = () => {
  return initialState.fleet.map((ship, index) => {
    return (
      <AlienShip
        status={initialState.fleet[index]}
        id={index}
        key={index}
        type={index <= 10 ? 'e' : index <= 32 ? 'b' : 'f'}
      />
    );
  });
};

export const generateSoundModels = (array, paths) => {
  return array.map((sound, index) => {
    return new Howl({
      src: [paths[index]],
      format: ['mp3'],
      html5: true
    });
  });
};
