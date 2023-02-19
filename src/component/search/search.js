import React from 'react'
import "./search.css"

export default function Search() {
    return (
        <div className='mt-4'>
            <form className="d-flex" role="search">
                <input className="form-control search-section" type="search" placeholder="Search here" aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
    )
}
