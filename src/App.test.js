/* eslint-disable linebreak-style */
import {
  render, fireEvent, getByLabelText, getByText, getByTestId,
} from '@testing-library/react';
import continentSelectionHandler from 'Component/Prototypes/SelectContinents/ContinentsSelectionhandler';
import Context from 'Context/context';
import { MemoryRouter } from 'react-router';
import store from 'Store/store';

import App from './App';

const setContainer = (url) => {
  const { container } = render(
    <Context>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </Context>,
  );
  return container;
};
const setUp = () => {
  const container = setContainer('/');
  const inputName = getByLabelText(container, /Introduce Your UserName/i);
  const enterButton = getByText(container, /enter/i);
  return {
    container, inputName, enterButton,
  };
};

describe('Test the Landing Page Comnponent', () => {
  test('The Input field onChange Events dispatch the userNameChange action and Updates the state', () => {
    const { inputName } = setUp();
    fireEvent.input(inputName, { target: { value: 'Rafael' } });
    expect(inputName.value).toBe('Rafael');
    expect(store.getState().user.name).toBe('Rafael');
  });
});

describe('Test the Select Continent page', () => {
  function SetUpSelectPage() {
    const container = setContainer('/select');
    const americaCheck = getByText(container, /America/i);
    const selectBTN = getByText(container, /seleccionar/i);
    return {
      container, americaCheck, selectBTN,
    };
  }
  test('Test that the page elements are Rendered', () => {
    const { selectBTN, americaCheck } = SetUpSelectPage();
    expect(selectBTN).toBeInTheDocument();
    expect(americaCheck).toBeInTheDocument();
  });
  test('The click event on the Change Component modify the state', () => {
    const { americaCheck } = SetUpSelectPage();
    fireEvent.click(americaCheck);
    expect(store.getState().continents.continentsList).toContain('America');
  });
  test('Check if the selection Button fetch the Data from the API', async () => {
    const { selectBTN } = SetUpSelectPage();
    await fireEvent.click(selectBTN);
    const checkResponse = async (loader) => {
      await setTimeout(() => {
        console.log(store.getState);
      }, 5000);
      if (store.getState().ui.loader) {
        checkResponse(store.getState().ui.loader);
      }
      console.log(store.getState().ui.loader);
    };
    checkResponse(store.getState().ui.loader);
    console.log(store.getState());
  });
});
