/* eslint-disable no-param-reassign */
import produce from 'immer';
import { DECREMENT_COUNT, INCREMENT_COUNT } from 'Store/actions/count.actions';

const COUNT_INITIAL_STATE = {
    count: 0,
};
const COUNT = '[COUNT]';

// eslint-disable-next-line consistent-return
const countReducer = produce((draft, action) => {
    const {type, payload} = action;
    if (type === INCREMENT_COUNT) {
        draft.count++;
    }
    if (type === DECREMENT_COUNT) {
        draft.count--;
    }
}, COUNT_INITIAL_STATE);

export default countReducer;
