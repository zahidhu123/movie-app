import React from 'react';
import { MdDashboardCustomize, MdNotificationsActive, MdSensors } from 'react-icons/md';
import "./header.css"



export default function Header() {

    // const { data } = props
    // const [newsCard, setNewsCard] = useState([])


    // useEffect(() => {
    //     console.log('zahid');
    //     getNewsCardApi();
    // }, []);

    // function getNewsCardApi() {
    //     getNewsApi().then((result) => {
    //         console.log(result);
    //         setNewsCard(result.data);
    //         console.log(result.data);
    //     })
    // }


    return (

        <div className='px-4 pt-2'>
            <div className="row justify-content-between">
                <div className="col-lg-4">
                    <div className='d-flex justify-content-between'>
                        <p className='m-title'>Movies</p>
                        <p className='m-title'>series</p>
                        <p className='m-title'>TvShows</p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className='d-flex justify-content-between'>
                        <MdSensors size={20} className="m-title" />
                        <MdNotificationsActive size={20} className="m-title" />
                        <MdDashboardCustomize size={20} className="m-title" />
                    </div>
                </div>
            </div>
            <p className='m-title'>Header 1</p>
            <p className='m-title'>Header 2</p>
            <p className='m-title'>Header 3</p>
        </div>


        // <div className='p-4'>
        //     <p>zahid</p>
        //     <div className='row justify-content-between'>
        //         <div className="col-6">
        //             <p className='m-0'>Discover</p>
        //         </div>
        //     </div>
        //     <div className='scroll-area'>
        //         <div className="row mt-3 mx-0">
        //             {newsCard.map((data) => {
        //                 return (<div className="col-md-4 mb-4">
        //                     <div className="card1">
        //                         <img src={data.coverImageUrl} className="card-img-top" alt="House Image" />
        //                         <div className="card-body">
        //                             <p className="card-text">{data.title}</p>
        //                         </div>
        //                     </div>
        //                 </div>)
        //             })}
        //         </div>
        //     </div>
        // </div>
    )
}
