import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DisplayAllItems.css';

function DisplayAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/pizzas')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza items data', error);
            });
    }, []);

    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/pizzas/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the pizza item', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">All Pizza Items</h2>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card custom-card">
                            <img 
                                src={item.image} 
                                className="card-img-top" 
                                alt={item.name} 
                                style={{ height: '300px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Price: ${item.price}</li>
                                    </ul>
                                    <div className="button-container">
                                        <Link to={`/update-item/${item.id}`} className="btn btn-primary me-2">
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAllItems;