import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

// IMPORT HOOK
import useRequestData from '../hooks/useRequestData';

const Community = () => {

    // IMPORT COMMUNITY
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
                    <div className='row'>
                        <div className="col-6 col-md-3 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/community/" + data.image1}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Four images that together create on big image of 3 females riding bicycles"
                            />

                            <img
                                src={"http://localhost:5888/images/community/" + data.image3}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Four images that together create on big image of 3 females riding bicycles"
                            />
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-lg-0">
                            <img
                                src={"http://localhost:5888/images/community/" + data.image2}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Four images that together create on big image of 3 females riding bicycles"
                            />

                            <img
                                src={"http://localhost:5888/images/community/" + data.image4}
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Four images that together create on big image of 3 females riding bicycles"
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <h3 className='Highlight'>{data.suptitle}</h3>
                            <h2 className='Bold'>{data.title}</h2>
                            <p>{data.content}</p>
                            <div className="row row-cols-md-2">

                                {data.keypoints.map(k =>
                                    <div className='row' key={k._id}>
                                        <div>
                                            <p> &#x2713; {k.keypoint}</p>
                                        </div>
                                    </div>

                                )}
                            </div>

                        </div>

                    </div>
                </section>
            }


        </>
    )
}

export default Community