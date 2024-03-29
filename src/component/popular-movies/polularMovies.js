import React, { useEffect, useState } from 'react'
import { getNewsApi } from '../../apiService';
import Modal from '../modal/modal';
// import '../popular-movies/popularMovies.css'


export default function PopularMovies(props) {

    const { data } = props
    const [newsCard, setNewsCard] = useState([])
    const [shariq, setshariq] = useState('')
    const [activeModal, setActiveModal] = useState(false)
    const [addData, setAddData] = useState('')
    const [active, setActive] = useState('')

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

   function sendData(data){
     console.log(data)
     setshariq(data)
     setActiveModal(true) 
   }
   function closeModal(){
    setActiveModal(false)
   }

    return (
        <>
            <div className='p-4'>
                <h2 className='trending mb-5'>Popular movies</h2>
                <div className='scroll-area'>
                    <div className="row mt-3 mx-0">
                        {newsCard.map((data) => {
                            return (<div className="col-md-4 mb-3 ">
                                <div className="card1 shadow-lg" onClick={()=> sendData(data)}>
                                    <div className='img-wrapper'>
                                        <img src={'https://image.tmdb.org/t/p/original' + data.poster_path} className="card-img-top card-img img-fluid" alt="Movie Picture" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{data.title}</p>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <Modal movieData={shariq} openModal={activeModal} onClose={()=>closeModal()}/>
        </>
    )
}
