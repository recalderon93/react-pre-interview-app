/* eslint-disable react/button-has-type */
import {useSelector, useDispatch} from 'react-redux';
import { DECREMENT_COUNT, INCREMENT_COUNT } from 'Store/actions/count.actions';
import constants, * as constant from 'Store/constants'
import { apiRequest } from 'Store/actions/api.actions';
import logo from './logo.svg';
import './App.css';

const {actions} = constants
function App() {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.count);
    console.log(actions.COUNT)
    const fetchAction = apiRequest('https://restcountries.eu/rest/v2/name/aruba?fullText=true', 'get', null, 'countries');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {count}
                </a>
                <button
                    onClick={() => {
                        dispatch({type: INCREMENT_COUNT});
                    }}>
                    Increment
                </button>
                <button
                    onClick={() => {
                        dispatch({type: DECREMENT_COUNT});
                    }}>
                    Decrement
                </button>
                <button onClick={
                    () => {
                        dispatch(fetchAction);
                    }
                }>Call the API</button>
            </header>
        </div>
    );
}

export default App;
