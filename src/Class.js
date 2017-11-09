
import React from 'react';
import Testing from './Functional';


// Class, Container, Smart, and Stateful component
class Receiver extends React.Component{


    render(){

        const user = this.props.fullState;

        const data = 'I am happy';
        const data1 = "I am sad";

        return(
            <div>
                <p>I am the Receiver { user.username }</p>
                <p>I am the Receiver of { user.age}</p>
                <p>I am the Receiver of { user.secondCount } ( - )</p>
                <p>I am the Receiver of </p>

                 <Testing second ={ data } first = { data1} />

            </div>
        );
    }
}




export default Receiver;