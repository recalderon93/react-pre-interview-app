import toggleSelectionArray from '../Utils';

describe('Testing Utils Functions', () => {
  test('Test the ToggleSelectionArray to splice if the Value Exists', () => {
    expect(toggleSelectionArray([0, 1, 2, 3], 2).indexOf(2)).toBe(-1);
  });
  test('Test the ToggleSelectionArray to push a value if the Value doesn\'t Exists', () => {
    expect(toggleSelectionArray([0, 1, 2, 3], 4).indexOf(4)).toBe(4);
  });
});
