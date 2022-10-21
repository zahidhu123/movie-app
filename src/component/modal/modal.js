import React from 'react'

export default function Modal(props) {

    console.log(props.movieData)


    return (
        <>
           
            {/* Modal */}
            <div className="modal" style={{ display : props.openModal ? 'block' : 'none'}} >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Movie Detail</h5>
                            <button type="button" className="btn-close" onClick={()=> props.onClose()}></button>
                        </div>
                        <div className="modal-body">
                            <div className='big-wrapper'>
                                <img src={'https://image.tmdb.org/t/p/original' + props.movieData.backdrop_path} alt="" className='card-img' />
                            </div>
                            <div className="row justify-conternt-between">
                                <div className="col-12 mt-3">
                                    <p className='card-text'>{props.movieData.original_title}</p>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='pe-2 language'>Language:</p>
                                        <p className='language1'>{props.movieData.original_language}</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='language pe-2'>Overview:</p>
                                        <p className='overview'>{props.movieData.overview}</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='pe-2 language'>Popularity:</p>
                                        <span className='language1'>{props.movieData.popularity}</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='pe-2 language'>Release Date:</p>
                                        <span className='language1'>{props.movieData.release_date}</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='pe-2 language'>Rating:</p>
                                        <span className='language1'>{props.movieData.vote_average}/10</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex'>
                                        <p className='pe-2 language'>Vote:</p>
                                        <span className='language1'>{props.movieData.vote_count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
