import React from "react";
import Button from "./Button";
const Home = () => {
    return (
        <>
          <div className="container">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction App</h1>
                <p className="lead text-light">The stock prdiction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django Rest framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
                <Button text="Explore Now" class="btn-info" url='/dashboard'/>
            </div>
          </div>
        </>
    )
}

export default Home