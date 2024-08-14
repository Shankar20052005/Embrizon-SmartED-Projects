import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
    return (
        <>
            <div style={{ maxWidth: '80%', margin: 'auto' }}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img 
                                src="https://wallpaper.forfun.com/fetch/60/6097a5e72da684293dd5bc5a5e6bb653.jpeg" 
                                className="d-block w-100" 
                                style={{ height: '400px', objectFit: 'cover' }} 
                                alt="Pizza 1"
                            />
                        </div>
                        <div className="carousel-item">
                            <img 
                                src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                className="d-block w-100" 
                                style={{ height: '400px', objectFit: 'cover' }} 
                                alt="Pizza 2"
                            />
                        </div>
                        <div className="carousel-item">
                            <img 
                                src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg" 
                                className="d-block w-100" 
                                style={{ height: '400px', objectFit: 'cover' }} 
                                alt="Pizza 3"
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div style={{ textAlign: 'center', padding: '50px', overflow:'hidden' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to Pizza Paradise!</h1>
                <p style={{ fontSize: '1.25rem', marginTop: '20px', maxWidth: '800px', margin: 'auto' }}>
                    Indulge in the best pizzas crafted with love and the finest ingredients. 
                    Whether you crave a classic Margherita, a spicy Pepperoni, or a custom creation, 
                    we've got something for everyone. Dive into our menu and discover your new favorite slice!
                </p>
            </div>
        </>
    );
}

export default Home;