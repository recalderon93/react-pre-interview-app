/* eslint-disable linebreak-style */
import {
  render, fireEvent, getByLabelText, getByText,
} from '@testing-library/react';
import Context from 'Context/context';
import { MemoryRouter } from 'react-router';
import store from 'Store/store';

import CONSTANTS from 'Utils/Constants';
import App from '../App';

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
  const container = setContainer(CONSTANTS.ROUTES.LOGIN);
  const inputName = getByLabelText(container, /Nombre de Usuario/i);
  const enterButton = getByText(container, /aceptar/i);
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
    const container = setContainer(CONSTANTS.ROUTES.SELECT_CONTINENTS);
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
});
