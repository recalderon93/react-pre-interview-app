import React from 'react';
import store from 'Store/store';
import {Provider} from 'react-redux';

export default function Context(props) {
    // eslint-disable-next-line react/destructuring-assignment
    return <Provider store={store}>{props.children}</Provider>;
}
