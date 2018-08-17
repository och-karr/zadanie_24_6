import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
  shallow(<Player />);
});


it('renders correct name', () => {
  const playerNamePassed = 'Ania'; //zmiena z przykładowym imieniem
  const playerComponent = shallow(<Player name={playerNamePassed} />);
  //renderujemy komponent za pomocą funkcji shallow
  const playerNameRendered = playerComponent.find('.Player__name').text();
  //szukamy w wyrenderowanym komponencie elementu z klasą
  //Player__name, a następnie wyciągamy tekst 
  expect(playerNameRendered).toEqual(playerNamePassed);
  //porójemy dwie wartości: tę, którą przekazaliśmy
  //do komponentu i tę, która się wyświetli
});