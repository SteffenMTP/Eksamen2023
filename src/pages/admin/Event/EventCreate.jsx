import { useEffect, useRef, useState } from 'react'

import Loader from '../../../components/Loader';
import Error from '../../../components/Error';

// QUILL
// https://quilljs.com/docs/modules/toolbar/
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// IMPORT HOOK
import useRequestData from '../../../hooks/useRequestData';

const EventCreate = () => {
  
  // POST TO EVENTS
  const { error, loading, data, makeRequest } = useRequestData();
  // GET CATEGORIES
  const { error: errorC, loading: loadingC, data: dataC, makeRequest: makeRequestC } = useRequestData();
  
  //STATE TO CONTAIN CATEGORY (FROM INPUT)
  const [category, setCategory] = useState()
  
  useEffect(() => {
    makeRequestC("eventcategories")
  }, [])
  


  // Reference til quill
  const refQuill = useRef();
  const toolbarOptions = [['bold', 'italic', 'underline', 'strike'], [{'list': 'ordered'}, {'list': 'bullet'}]];

  const handleSubmit = (e) => {
    e.preventDefault() // STOP RELOAD OF PAGE

    // SEND TO API - AS POST 
    let fd = new FormData(e.target)
    fd.append("content", refQuill.current.value)

    console.log(refQuill.current.value)

    makeRequest("events/admin", null, null, "POST", fd)

    // EMPTIES FORM REGARDSLESS OF SUCCESS OR NOT {TO DO - BENYT EVT. UseEffect til at lytte på ændringer}
    e.target.reset();
    
    // EMPTY QUILL
    refQuill.current.getEditor().setText("")

  }

  return (
    <div>

      <h1>Opret nyt event</h1>

      {/* Error */}
      {(error || errorC) && <Error />}
      
      {/* Loading */}
      {(loading || loadingC) && <Loader />}

      {/* Data */}
      {data && <h3>Nyt event er oprettet</h3>}

      <form onSubmit={handleSubmit} className='form-group d-flex flex-column'>

        <label> Eventets titel
          <input type="text" name='title' placeholder='Titel' className='form-control my-3' required />
        </label>

        <label > Eventets tekst

          <ReactQuill
            theme="snow"
            placeholder='Nyhedstekst'
            className='my-3'
            ref={refQuill}
            modules={{ toolbar: toolbarOptions }}
          />
        </label>

        <label> Vælg kategori
          <select defaultValue="DEFAULT" onChange={e => setCategory(e.target.value)} className='form-select' name='category'>
            <option value="DEFAULT" disabled>Vælg en kategori</option>
            {
              dataC && dataC.map(c => (

                <option value={c._id} key={c._id}>
                  {c.category}
                </option>

              ))
            }

          </select>
        </label>

        <label> Event Dato (Vælg dato samt tidspunkt for start)
            <input type="datetime-local" name="eventdate" className='form-control' required />
        </label>

        <label> Destination (Vælg område)
            <input type="text" name="destination" className='form-control'  required/>
        </label>

        <label> Koordinater (Skal skrives fx. 53.00, 10.00)
            <input type="text" name="coordinates" className='form-control' required/>
        </label>

        <label> Distance (I hele km)
            <input type="number" name="distance" className='form-control' required/>
        </label>

        <label> Sværhedsgrad (Vælg mellem 1-10)
            <input type="number" name="difficulty" min={1} max={10} className='form-control' required/>
        </label>

        <label> Event billede
          <input type="file" name="image" className='form-control my-3' required/>
        </label>

        <button type="submit" className='form-control my-3 btn btn-primary'>Gem Event</button>


      </form>


    </div>
  )
}

export default EventCreate