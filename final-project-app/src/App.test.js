import { render, screen } from '@testing-library/react';
import {initializeTimes, updateTimes} from './components/Reservations';

it('should return a non-empty array', () => {
  const result = initializeTimes();
  expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
});

it('should return the same state if action type is not "UPDATE_TIMES"', () => {
  const state = initializeTimes();
  const action = { type: 'SOME_OTHER_ACTION_TYPE' };
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});