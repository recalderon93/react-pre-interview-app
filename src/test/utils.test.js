/* eslint-disable no-plusplus */
import randomIndex from 'Utils/randomIndex';
import toggleSelectionArray from '../Utils';

describe('Testing Utils Functions', () => {
  test('Test the ToggleSelectionArray to splice if the Value Exists', () => {
    expect(toggleSelectionArray([0, 1, 2, 3], 2).indexOf(2)).toBe(-1);
  });
  test('Test the ToggleSelectionArray to push a value if the Value doesn\'t Exists', () => {
    expect(toggleSelectionArray([0, 1, 2, 3], 4).indexOf(4)).toBe(4);
  });
});

describe('Trivia function test', () => {
  const array = ['value3', 'value2', 'value3', 'value4'];
  const controlArray = [];
  const setUp = () => (randomIndex(array.length, controlArray));

  test('The returned value is a valid Index', () => {
    const index = setUp();
    expect(index >= 0 || index < array.length).toBeTruthy();
  });

  test('If the function is called several times, always returns different values', () => {
    function localSetUp(number) {
      for (let i = 0; i < number; i++) {
        controlArray.push(setUp());
      }
    }
    localSetUp(array.length);
    const response = controlArray.map((item) => {
      const filterValue = controlArray.filter((filterItem) => filterItem === item);
      return filterValue.length > 1;
    });
    expect(response).not.toContain(true);
  });
});
