import React from 'react';
import './About.css';
import photo from '../../images/about.png';

const About = () => {
    return (
        <section className="py-5 about-section" id="about">
            <a className="about-heading">About</a>
            <p>We work with you, Not for you</p>
            <div className="row p-5 my-5">
                <div className="col-md-5 offset-md-1">
                    <h3 className="alignment title">About Me</h3>
                    <p className="title-description alignment">I am Dynamic Creative Web Designer and Developer</p>
                    <br />
                    <p className="alignment">Impossible considered invitation him men instruiment saw celebr ated unpleasant. Put rest and must set kinid next many near nay. He exquisite continued explained middleton am. Voice hours you woody has she think equal. Estate in moment he at on wonder at season little. Six garden result summer.</p><br /><br />
                    <p className="alignment">Her extensive perceved may any sincerity extremity. Indeed add rather may pretty see. Old right these alone keeps. By sometime intention smallness he northward.</p>
                </div>
                <div className="col-md-6 picture-section ">
                    <img src={photo} className="img-fluid" alt="" />
                </div>

            </div>
        </section>
    );
};

export default About;