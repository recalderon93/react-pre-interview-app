/* eslint-disable no-param-reassign */
import produce from 'immer';

const COUNT_INITIAL_STATE = {
    count: 0,
};

// eslint-disable-next-line consistent-return
const countReducer = produce((draft, action) => {
    const {type, payload} = action;
    if (type === 'increment') {
        draft.count++;
    }
    if (type === 'decrement') {
        draft.count--;
    }
}, COUNT_INITIAL_STATE);

export default countReducer;
