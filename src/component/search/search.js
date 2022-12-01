import React from 'react'

export default function Search() {
    return (
        <div className='mt-3'>
            <form className="d-flex" role="search">
                <input className="form-control search-section" type="search" placeholder="Search" aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
    )
}
