import React from 'react'

export default function Modal() {

    
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn more" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Movie Details
            </button>

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="row justify-conternt-between">
                                <div className="col-6">
                                    <p>zahid</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>hussain</p>
                                </div>
                                <div className="col-6">
                                    <p className=''>hussain</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>hussain</p>
                                </div>
                                <div className="col-6">
                                    <p className=''>hussain</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>hussain</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
