import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania'; //zmienna z przykładowym imieniem
  const playerComponent = shallow(<Player name={playerNamePassed} />);
  //renderujemy komponent za pomocą funkcji shallow
  const playerNameRendered = playerComponent.find('.Player__name').text();
  //szukamy w wyrenderowanym komponencie elementu z klasą
  //Player__name, a następnie wyciągamy tekst 
  expect(playerNameRendered).toEqual(playerNamePassed);
  //porójemy dwie wartości: tę, którą przekazaliśmy
  //do komponentu i tę, która się wyświetli
});

it('renders correct score', () => {
  const playerScorePassed = 24; //zmienna z przykładowym wynikiem
  const playerComponent = shallow(<Player score={playerScorePassed} />);
  const playerScoreRendered = playerComponent.find('.Player__score').text();
  const playerScoreRenderedToNumber = Number(playerScoreRendered);
  expect(playerScoreRenderedToNumber).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').first();
  plusButton.simulate('click');
  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.Player__button').last();
  minusButton.simulate('click');
  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});