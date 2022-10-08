import React, { useEffect, useState } from 'react'
import { getNewsApi } from '../../apiService';

export default function TopRated(props) {

    const { data } = props
    const [newsCard, setNewsCard] = useState([])

    useEffect (() =>{
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
                <h2 className='fs-4 '>Top Rated</h2>
                <div className='row justify-content-between'>
                    <div className="col-6">
                        <p className='m-0'>Discover</p>
                    </div>
                </div>
                <div className='scroll-area'>
                    <div className="row mt-3 mx-0">
                        {newsCard.map((data) => {
                            return (<div className="col-md-4 mb-4">
                                <div className="card1">
                                    <img src={data.backdrop_path} className="card-img-top" alt="House Image" />
                                    <div className="card-body">
                                        <p className="card-text">{data.title}</p>
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
