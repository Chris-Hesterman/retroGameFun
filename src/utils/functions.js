import AlienShip from '../components/AlienShip/AlienShip';
import { Howl } from 'howler';

export const makeShips = (fleet, ref) => {
  return fleet.map((ship, index, array) => {
    return (
      <AlienShip
        status={fleet[index]}
        id={index}
        key={index}
        type={index <= 10 ? 'e' : index <= 32 ? 'b' : 'f'}
        ref={ref}
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
