import { React } from 'react';
import { Link } from 'react-router-dom';

//IMPORT COMPONENT
import NewsCard from '../components/NewsCard';

const News = () => {

  return (
    <>
      <div className='row g-3'>

        <div>

          <form className="form-inline d-flex justify-content-center md-form form-sm my-2">
            <input className="form-control form-control-sm mr-3 w-25" type="text" placeholder="Søg"
              aria-label="Search" />

          </form>
        </div>

        <div className='col-12 col-md-6'>
          <article>

            <div className='card'>
              <h2 className='card-title text-center Bold'>NYESTE NYHEDS TITLE</h2>
              <img src="https://images.pexels.com/photos/3569754/pexels-photo-3569754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="https://www.pexels.com/da-dk/foto/vej-mand-person-skov-3569754/" />
              <div className='card-body'>

                <section className='card-text p-2'>
                  <small className='Bold'>Udgivet: 3. november 2023 kl. 13:47</small>
                  <p className='Highlight'>FORFATTER: Christian Pedersen</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis labore quos doloribus vero. Quos amet minus iure soluta, neque officia aspernatur commodi at inventore odio repellendus aperiam nihil dignissimos. Esse deleniti odit exercitationem optio quod! Vel explicabo illo atque quae natus adipisci, ut nam debitis eius repudiandae. ...</p>
                </section>
                <hr />
                <div className='my-2 text-center'>
                  <Link to="newsdetail" className='text-decoration-none'>Læs mere om nyheden her</Link>
                </div>
              </div>

            </div>


          </article>
        </div>
        <div className='col-12 col-md-3'>
          <NewsCard />
        </div>
        <div className='col-12 col-md-3'>
          <NewsCard />
        </div>
        <div className='col-12 col-md-4'>
          <NewsCard />
        </div>
        <div className='col-12 col-md-4'>
          <NewsCard />
        </div>
        <div className='col-12 col-md-4'>
          <NewsCard />
        </div>
      </div>

      <div className='Pagination my-2'>
        <button className='btn btn-secondary me-1'>&#8592;</button>
        <button className='btn btn-secondary me-1'>1</button>
        <button className='btn btn-secondary me-1'>2</button>
        <button className='btn btn-secondary me-1'>3</button>
        <button className='btn btn-secondary me-1'>&#8594;</button>
      </div>


    </>
  )
}

export default News