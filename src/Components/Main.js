import React, { useState, useEffect } from 'react'


const Main = () => {
    const [places, setPlaces] = useState([])
    const [selectedPlace, setSlectedPlace] = useState(null)
    const placeSelected = (place) => {
        setSlectedPlace(place)
    }
    useEffect(() => {
        fetch('https://places-api-2021.herokuapp.com/walid-places/allplaces')
            .then((response) => {
                if (response.status !== 200) {
                    console.log(`'There was a problem. Status Code: ${response.status}.`);
                    return;
                }
                // Examine the text in the response
                response.json().then((data) => {
                    console.log(data);
                    setPlaces(data)
                });
            })
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }, [])

    return (
        <div className='container' >
            <section id='tablePlace' >
                <div className='card p-3 bg-light' >
                    <table className='table table-bordered table-striped table-hovered' >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Place</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                places.map((val) => {
                                    return (
                                        <tr key={val.id} onClick={() => placeSelected(val)} >
                                            <td><img src={val.imageUrl} width='200px' /></td>
                                            <td >{val.name}</td>
                                            <td> {val.country} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            {/* {
                ( selectedPlace )
                    ? <section id='detailPlace' >
                        <h6> {selectedPlace.name} </h6>
                        <p> {selectedPlace.description} </p>
                    </section>
                    : <div></div>
            } */}
        </div>
    )
}

export default Main
