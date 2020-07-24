import React from 'react';

const Card = (props) => {
    let {employees, index} = props
        return (
            <div>
                <div className="page-number">
                <h1>{index + 1}/{employees.length}</h1>
                </div>
                <h1>{employees[index].name.first} {employees[index].name.last}</h1>
                <br/>
                <div className="info">
                    <h3>From: </h3>
                    <p>{employees[index].city}, {employees[index].country}</p>
                </div>
                <div className="info">
                    <h3>Job Title: </h3>
                    <p>{employees[index].title}</p>
                </div>
                <div className="info">
                    <h3>Employer: </h3>
                    <p>{employees[index].employer}</p>
                </div>
                <br/>
                <div>
                    <h3>Favorite Movies:</h3>
                        <ol>
                            <li>{employees[index].favoriteMovies[0]}</li>
                            <li>{employees[index].favoriteMovies[1]}</li>
                            <li>{employees[index].favoriteMovies[2]}</li>
                        </ol>
                </div>
            </div>
        )
    }


export default Card