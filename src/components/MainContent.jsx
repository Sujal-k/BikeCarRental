import React from 'react';
import ImageSlider from './ImageSlider'; // Import your ImageSlider component
import '../styles/MainContent.css';

function MainContent() {
    return (
        <div className="main-container">
            <div className="left-column">
                <h1>Looking to <span>rent a car or bike?</span></h1>
                <p>Find nearby rental shops for cars and bikes with ease!</p>
                <p>The all new bikes and cars with fantastic condition, let's make driving popular!</p>
                <br />
                <div className="form-section">
                    <input type="text" placeholder="Search Location" />
                    <input type="date" />
                    <input type="date" />
                    <button>Submit</button>
                </div>
            </div>
            <div className="right-column">
                <ImageSlider /> {/* Embed the ImageSlider component here */}
            </div>
        </div>
    );
}

export default MainContent;
