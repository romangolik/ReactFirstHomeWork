import React, {Component} from 'react'

export default class specialComponent extends Component{
    render() {
        return (
            <ul>
                {['a', 'b', 'c'].map(function(item) {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        );
    }
}