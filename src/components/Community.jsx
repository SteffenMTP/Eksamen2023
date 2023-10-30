import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';

const Community = () => {

    const { error, loading, data, makeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("community")
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
                    <div className='Gallery row'>
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/community/" + data.image1}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={"http://localhost:5888/images/community/" + data.image3}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/community/" + data.image2}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Mountains in the Clouds"
                            />

                            <img
                                src={"http://localhost:5888/images/community/" + data.image4}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />
                        </div>
                    </div>
                    <div>
                        <h3>{data.suptitle}</h3>
                        <h2>{data.title}</h2>
                        <p>{data.content}</p>

                        {data.keypoints.map(k =>
                            <div className='row'>
                                <div className='col'>
                                    <p> &#x2713; {k.keypoint}</p>
                                </div>
                            </div>

                        )}

                    </div>

                </section>
            }


        </>
    )
}

export default Community