import React from 'react';
import picture from '../../../images/muhit.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="home-background">
            <div className="row d-flex align-items-center container-fluid">
                <div className="col-md-6 text-center">
                    <h1 className="text-white text-uppercase">Hi, I am muhit</h1>
                    <p className="text-white">I'm a web designer and developer</p>
                    <a href="https://drive.google.com/uc?export=download&id=1fSN4H9Buak4du6R6pOca2_9-A3vIIUy5" className="btn btn-success">Download My Resume</a>

                </div>
                <div className="col-md-4 offset-md-1  py-5">
                    <img src={picture} className="img-fluid" alt="..." />

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;