import React from 'react';
import ParticipantForm from './ParticipantForm'
// main container component
const App = () => {
    const containerStyle = {
        margin: '3rem'
      };
    return(
        <div className="ui text container" style={containerStyle} >
        
            <div className="ui segment"> 
                <div className="ui teal ribbon label">
                    <i className="big snowflake icon"></i> X-mas holiday form!
                </div>
                <ParticipantForm />
             </div>
        </div>
    );

};

export default App;