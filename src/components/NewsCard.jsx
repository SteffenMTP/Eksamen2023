import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = () => {
    return (
        <>
            <article>

                <div className='card'>
                    <h2 className='card-title text-center'>NYHEDS TITLE</h2>
                    <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="https://www.pexels.com/da-dk/foto/vej-skov-traeer-sti-100582/" />
                    <div className='card-body'>

                        <section className='card-text p-2'>
                            <small className='Bold'>Udgivet: 2. november 2023 kl. 12:34</small>
                            <p className='Highlight'>FORFATTER: Bjørk Hansen</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis labore perferendis cum, reprehenderit dolorum quos doloribus vero. Quos amet minus iure soluta, neque officia aspernatur commodi at inventore odio repellendus aperiam nihil dignissimos. Esse deleniti odit exercitationem optio quod! Vel explicabo illo atque quae natus adipisci, ut nam debitis eius repudiandae. ...</p>
                        </section>
                        <hr />
                        <div className='my-2 text-center'>
                            <Link to="newsdetail" className='text-decoration-none'>Læs mere om nyheden her</Link>
                        </div>
                    </div>

                </div>


            </article>
        </>
    )
}

export default NewsCard