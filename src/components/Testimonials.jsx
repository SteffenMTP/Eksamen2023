import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

//Import Hook
import useRequestData from '../hooks/useRequestData';

const Testimonials = () => {

    // GET TESTIMONIALS
    const { error, loading, data, makeRequest } = useRequestData();
    
    // GET HEROS
    const { error: errorH, loading: loadingH, data: dataH, makeRequest: makeRequestH } = useRequestData();

    useEffect(() => {
        makeRequest("testimonials")
        makeRequestH("heros")
    }, [])

    return (
        <>
            {/*Error*/}
            {(error || errorH) && <Error />}

            {/*Loading*/}
            {(loading || loadingH) && <Loader />}

            {/*Data*/}
            {dataH &&
                <section className='mb-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                        <h3 className='Highlight'>{dataH[8].suptitle}</h3>
                        <h2 className='Bold'>{dataH[8].title}</h2>
                        </div>
                    <div className='col-6'>
                        <p>{dataH[8].content}</p>
                    </div>
                    </div>
                    <div className='Testimonials row row-cols-1 row-cols-md-4 g-2 '>
                        {data && data.slice(0, 4).map(t =>

                            <div className='card col-12 col-md-6 col-lg-3' key={t._id}>
                                <figure className='card-img-top'>
                                    <img src={"http://localhost:5888/images/testimonial/" + t.image} className='testimonialPic position-relative' alt="Various people from the community standing around their bicyles" />
                                </figure>
                                <div className='card-body testimonialText position-absolute bottom-0'>
                                    <h3 className='Bold'>{t.name}</h3>
                                    <p className='Highlight'>{t.experience}</p>
                                    <p className='Cursive'>{t.motivation}</p>
                                </div>
                            </div>


                        )
                        }
                    </div>
                </section>



            }
        </>
    )
}

export default Testimonials