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
                    <h3>Hvem vi er</h3>
                    <h2>Et udvalg af os i klubben</h2>
                    <p>Vi er over 1.400 medlemmer og tæller mange forskellige typer - lige fra mitionisten der elsker naturen til den ekstreme biker, hvor det ikke kan blive hurtigt eller farligt nok! Og en masse ind i mellem - og der er selvfølgelig også plads til børn og unge</p>
                    <div className='Testimonials row row-cols-1 row-cols-md-4 g-2 '>
                        {data && data.slice(0, 4).map(t =>

                            <div className='card col-2' key={t._id}>
                                <figure>
                                    <img src={"http://localhost:5888/images/testimonial/" + t.image} className='card-img img-fluid testimonialPic' alt="Various people from the community standing around their bicyles" />
                                </figure>
                                <div className='text-center'>
                                    <h3>{t.name}</h3>
                                    <p>{t.experience}</p>
                                    <p>{t.motivation}</p>
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