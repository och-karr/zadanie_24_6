import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />); //przyjmujemy, że będziemy mapować pustą tablicę graczy
});

const players = [
  {
      name: 'Kunegunda',
      score: 5
  },
  {
      name: 'Antoś',
      score: 0
  }
]

it('renders correct number of players', () => {
  const playerComponent = shallow(<PlayersList players={players} />);
  const expectedPlayersNumber = playerComponent.find(Player).length;//liczymy ile z przyjętymi players, utworzy się elementów Player?
  expect(expectedPlayersNumber).toEqual(2);
});

it('the score is updated', () => {
  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(10);//ogolnie jest 1 ale udajemy ze nie wiemy
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);//0 to first gracz
});