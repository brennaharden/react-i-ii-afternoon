import React from 'react';

const Card = (props) => {
    let {employees, index} = props
        return (
            <div className="card">
               
                <h1 className="page-number">{index + 1}/{employees.length}</h1>
                <h1><span>{employees[index].name.first} {employees[index].name.last}</span></h1>
               
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
                    <h3 className="movies">Favorite Movies:</h3>
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