import React, { useEffect, useState } from 'react'
import { getNewsApi } from '../../apiService';

export default function TopRated(props) {

    const { data } = props
    const [newsCard, setNewsCard] = useState([])

    useEffect(() => {
        console.log('zahid');
        getNewsCardApi();
    }, []);



    function getNewsCardApi() {
        getNewsApi().then((result) => {
            console.log(result);
            setNewsCard(result.data.data.results);
            console.log(result.data.data.results);
        })
    }


    return (
        <>
            <div className='p-4'>
                <h2 className='fs-4 mb-5'>Trending movies</h2> 
                <div className='scroll-area'>
                    <div className="row mt-3 mx-0">
                        {newsCard.map((data) => {
                            return (<div className="col-md-4 mb-4">
                                <div className="card1 shadow-lg">
                                    <div className='img-wrapper'>
                                        <img src={'https://image.tmdb.org/t/p/original' + data.poster_path} className="card-img-top card-img" alt="House Image" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{data.title}</p>
                                        <p className='card-text'>{data.release_date}</p>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
