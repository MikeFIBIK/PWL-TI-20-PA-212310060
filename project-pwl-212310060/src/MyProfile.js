import React, { Component } from 'react';
import MyBio from './MyBio';

class MyProfile extends Component {
    render() {
        return (
            <div>
                {/* <h1>Biodata</h1>
                <MyName/> */}
                <MyBio name="Michael Fernandez" age="21"/>
            </div>
        );
    }
}

export default MyProfile;
