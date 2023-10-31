import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';

const Testimonials = () => {

    const { error, loading, data, makeRequest } = useRequestData();
    const { error: errorH, loading: loadingH, data: dataH, makeRequest: makeRequestH } = useRequestData();

    useEffect(() => {
        makeRequest("testimonials")
    }, [])

    useEffect(() => {
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
                <section>
                    <div className='d-flex'>
                        <h3 className='Highlight'>Hvem vi er</h3>
                        <h2 className='Bold'>Et udvalg af os i klubben</h2>
                    <div className='d-flex'>
                        <p>Vi er over 1.400 medlemmer og tæller mange forskellige typer - lige fra mitionisten der elsker naturen til den ekstreme biker, hvor det ikke kan blive hurtigt eller farligt nok! Og en masse ind i mellem - og der er selvfølgelig også plads til børn og unge</p>
                    </div>
                    </div>
                    <div className='Testimonials row row-cols-1 row-cols-md-4 g-2 '>
                        {data && data.slice(0, 4).map(t =>

                            <div className='card col-2' key={t._id}>
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