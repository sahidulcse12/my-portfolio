import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="my-5 container" id="resume">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-uppercase text-success">Skills</h2>
                    <div className="front-end">
                        <h4 className="text-uppercase pt-2">front-end</h4>
                        <ul className="dynamic-text py-5">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                        </ul>
                    </div>
                    <div className="backend mt-2">
                        <h4 className="text-uppercase pt-2">Backend</h4>
                        <ul className="dynamic-text py-5">
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="others mt-2">
                        <h4 className="text-uppercase pt-2">Others</h4>
                        <ul className="dynamic-text py-5">
                            <li>C</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="text-uppercase text-success">Education & Others</h2>
                    <div className="institution">
                        <h4 className="text-uppercase pt-2">Education</h4>
                        <p>B.Sc in computer science and engineering.</p>
                        <p className="text-info">Mawlana Bhashani Science and Technology University</p>
                    </div>
                    <div className="activities mt-4">
                        <h4 className="text-uppercase pt-2">Languages</h4>
                        <ul className="dynamic-text py-5">
                            <li>Bangla</li>
                            <li>English</li>
                            <li>Hindi</li>
                        </ul>
                    </div>
                    <div className="hobbies mt-4">
                        <h4 className="text-uppercase pt-2">Hobbies</h4>
                        <ul className="dynamic-text py-5">
                            <li>Reading</li>
                            <li>Playing</li>
                            <li>Travelling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;