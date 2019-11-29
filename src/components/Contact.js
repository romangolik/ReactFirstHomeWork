import React, {Component} from 'react'

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <h2>GOT QUESTIONS?</h2>
                    <p>The easiest thing to do is post on
                        our <a href="http://forum.kirupa.com">forums</a>.
                    </p>
                    <p>
                        Phone number: {this.props.myProps}.
                    </p>
                </div>
            </div>
        );
    }
}