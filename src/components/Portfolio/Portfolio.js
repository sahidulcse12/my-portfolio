import React from 'react';
import vehicle from '../../images/car.png';
import food from '../../images/food.png';
import football from '../../images/sports.png';
import './Portfolio.css';

const portfolioData = [
    {
        name: 'Vehicles',
        description: 'You can travel using this car of any country',
        image: vehicle
    },
    {
        name: 'Food Search',
        description: 'Find delicious food, we provide various items of food',
        image: food
    },
    {
        name: 'Team Tracker',
        description: 'Football is a fantastic game nowadays, specially EPL',
        image: football
    }

]

const Portfolio = () => {
    return (
        <section className="container portfolio-section" id="portfolio">
            <h2 className="text-uppercase pb-3">Projects</h2>
            <div className="row">
                {
                    portfolioData.map(data => {
                        return (
                            <div className="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.name}</h5>
                                        <p class="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;