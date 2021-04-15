import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  generatesTrivia, verifyAnswer, onChangeAnswer, revealAnswer,
} from 'Store/Trivia/trivia.actions';
import CONSTANTS from 'Utils/Constants';
import { useHistory } from 'react-router';
import ButtonStyled from 'Component/Elements/Button';
import InputFieldStyled from 'Component/Elements/Input/InputFieldStyled';
import TriviaResultsTable from './trivia.table';

const useStyles = makeStyles({
  container: {
    margin: '10vh 15vw',
    display: 'flex',
    aligItems: 'center',
    justtifyContent: 'center',
    flexWrap: 'wrap',
  },
  innerContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2vh',
  },
});

function TriviaPage() {
  const clasess = useStyles();
  const dispatch = useDispatch();
  const { trivia, countries } = useSelector((state) => state);
  const history = useHistory();
  useEffect(() => {
    if (countries.countriesList.length < 1) {
      history.push(CONSTANTS.ROUTES.SELECT_CONTINENTS);
      // eslint-disable-next-line no-alert
      alert('Invalid Countries List');
    } else {
      dispatch(generatesTrivia(trivia.controlArray, countries.countriesList));
    }
    return () => {
    };
  }, []);

  function onChangeHandler(e) {
    dispatch(onChangeAnswer(e.target.value));
  }
  function answerHandler() {
    dispatch(verifyAnswer());
  }
  return (
    <>
      <div className={clasess.container}>

        <div className={clasess.innerContainer}>
          {trivia.reveal && <Typography variant="h4">{trivia.correctAnswer}</Typography> }
          <img src={trivia.selectedCountry.flag} alt="trivia tag" width="300" />
          <InputFieldStyled value={trivia.userAnswer} label="Introducir Respuesta" handler={(e) => onChangeHandler(e)} />
          <ButtonStyled textValue="Responder" handler={(e) => { answerHandler(); }} />
          <ButtonStyled textValue="Revelar" handler={(e) => { dispatch(revealAnswer()); }} />

        </div>
        <div>
          <TriviaResultsTable />
        </div>
      </div>
    </>
  );
}

export default TriviaPage;
