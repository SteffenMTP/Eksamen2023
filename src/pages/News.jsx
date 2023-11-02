import { React } from 'react';

import NewsCard from '../components/NewsCard';

const News = () => {

  return (
    <>
      <div className='row g-3'>

        <div>
          
          <form className="form-inline d-flex justify-content-center md-form form-sm my-2">
            <input className="form-control form-control-sm mr-3 w-25" type="text" placeholder="Søg"
              aria-label="Search"/>
              
          </form>
        </div>

        <div className='col-12 col-md-6'>
          <NewsCard />
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