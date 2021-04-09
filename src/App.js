/* eslint-disable react/button-has-type */
import {useSelector, useDispatch} from 'react-redux';
import logo from './logo.svg';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const {count } = useSelector(state => state.count);
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
                        dispatch({type: 'increment'});
                    }}>
                    Increment
                </button>
                <button
                    onClick={() => {
                        dispatch({type: 'decrement'});
                    }}>
                    Decrement
                </button>
            </header>
        </div>
    );
}

export default App;
