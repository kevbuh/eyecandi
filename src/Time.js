import React  from 'react';
import Moment from 'react-moment';

export default class Time extends React.Component {
    render() {
        return (
            <Moment from="${Date.now()}">2021-12-19T12:59-0500</Moment>
        );
    }
}