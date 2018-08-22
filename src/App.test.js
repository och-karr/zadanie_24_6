import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

const players = [
  {
      name: 'Kunegunda',
      score: 5
  }
]

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  // const mockedOnScoreUpdate = jest.fn();
  const appComponent = shallow(<App players={[]} />);
  appComponent.setState({ players }); //dodajemy players do stanu aplikacji
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().players;
  playersAfterUpdate[0].score;
  expect(playersAfterUpdate[0].score).toBe(10);
});

it('is new player add', () => {
  const appComponent = shallow(<App/>);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});