import React from 'react';
import MyBio from './MyBio';

const ClickMe = ({children, onClickBtn}) =>{
    return (
      <button type='button' onClick={()=> onClickBtn()}>
        {children}
      </button>
    )
}

const handlerHitme = () => {
    alert("Anda telah mengetuk saya");
};


const Profile = () => {
    const myData = {
        name: "Michael Fernandez",
        age: 21,
    }
    return (
        <div>
            <MyBio {...myData}/>
            <ClickMe onClickBtn={handlerHitme}>
                Klik Saya!
            </ClickMe>
        </div>
    );
}

export default Profile;
