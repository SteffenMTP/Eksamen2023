import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import "../assets/Fonts/thin/style.css";

// IMPORT HOOK
import useRequestData from '../hooks/useRequestData';

const Interests = () => {

    // GET INTEREST
    const { error, loading, data, makeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("interest")
    }, [])

    return (
        <>

            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
            {data &&

                <section className='d-flex'>
                    <div className='row'>

                        <div className='col-12 col-md-6'>
                            <h3 className='Highlight'>{data.suptitle}</h3>
                            <h2 className='Bold'>{data.title}</h2>
                            <p>{data.content}</p>
                            <div className="row row-cols-1 row-cols-md-2 g-2">

                                {data.keypoints.map(k =>
                                    <div className='row' key={k._id}>
                                        <div className='col'>
                                            <i className={k.icon}></i>
                                            <p>{k.keypoint}</p>
                                            <p>{k.description}</p>
                                        </div>
                                    </div>

                                )}
                            </div>

                        </div>

                        <div className="col-6 col-md-3 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/interest/" + data.image1}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={"http://localhost:5888/images/interest/" + data.image3}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/interest/" + data.image2}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Mountains in the Clouds"
                            />

                            <img
                                src={"http://localhost:5888/images/interest/" + data.image4}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />
                        </div>




                    </div>
                </section>
            }



        </>
    )
}

export default Interests