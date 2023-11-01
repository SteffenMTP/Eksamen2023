import { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

import useRequestData from '../../../hooks/useRequestData';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';

// QUILL
// https://quilljs.com/docs/modules/toolbar/
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EventEdit = () => {

  // GET EVENTS
  const { error, loading, data, makeRequest } = useRequestData();
  // GET CATEGORIES
  const { error: errorC, loading: loadingC, data: dataC, makeRequest: makeRequestC } = useRequestData();

  const { error: errorEdit, loading: loadingEdit, data: dataEdit, makeRequest: makeRequestEdit } = useRequestData();

  //state til at rumme kategori (fra inputfelt)
  const [category, setCategory] = useState();
  
  const { eventID } = useParams() // Hent Event id i url'len
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(`events/${eventID}`)
    makeRequestC("eventcategories")
  }, [])

  // Reference til quill
  const refQuill = useRef();
  const toolbarOptions = [['bold', 'italic', 'underline', 'strike'], [{ 'list': 'ordered' }, { 'list': 'bullet' }]];

  const handleSubmit = (e) => {
    e.preventDefault() // STOP RELOAD OF PAGE

    // SEND TO API - AS POST 
    let fd = new FormData(e.target)
    fd.append("content", refQuill.current.value)

    makeRequestEdit("events/admin/" + eventID, null, null, "PUT", fd)

  }

  // Is Edit made then navigate user back to the adminpage
  useEffect(() => {
    if (dataEdit) {
      navigate("/admin/eventadmin")
    }

  }, [dataEdit])

  return (
    <>

      <h1>Ret event - {eventID} </h1>

      {/* Error */}
      {(error || errorEdit || errorC) && <Error />}
      
      {/* Loading */}
      {(loading || loadingEdit || loadingEdit) && <Loader />}

      {/* Data */}
      {data && dataC &&

        <form onSubmit={handleSubmit} className='form-group d-flex flex-column'>

          <label> Eventets titel
            <input type="text" name='title' defaultValue={data.title} placeholder='Titel' className='form-control my-3'/>
          </label>

          <label > Eventets tekst

            <ReactQuill
              theme="snow"
              placeholder='Nyhedstekst'
              defaultValue={data.content}
              className='my-3'
              ref={refQuill}
              modules={{ toolbar: toolbarOptions }}
            />
          </label>

          <label> Ret en Kategori
            <select defaultValue={data.category} onChange={e => setCategory(e.target.value)} className='form-select' name='category'>
              {
                dataC && dataC.map(c => (

                  <option value={c._id} key={c._id}>
                    {c.category}
                  </option>

                ))
              }

            </select>
          </label>

          <div className='mt-3'>
              <p>Nuværende dato og tid: {new Date(data.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })} </p>
          </div>
          
          <label> Skift evt. event dato (Overskriver det nuværende)
            <input type="datetime-local" name="eventdate" className='form-control' />
          </label>

          <label> Destination
            <input type="text" defaultValue={data.destination} name="destination" className='form-control'  />
          </label>

          <label> Koordinater
            <input type="text" defaultValue={data.coordinates} name="coordinates" className='form-control'  />
          </label>

          <label> Distance
            <input type="number" defaultValue={data.distance} name="distance" className='form-control'  />
          </label>

          <label> Sværhedsgrad
            <input type="number" defaultValue={data.difficulty} name="difficulty" min={1} max={10} className='form-control'  />
          </label>

              <div>
                <p>Nuværende billede</p>
                <img src={"http://localhost:5888/images/event/" + data.image} style={{width: 400}} alt={data.title} />
              </div>

          <label> Vælg evt. et nyt billede (Overskriver det nuværende billede)
            <input type="file" name="image" className='form-control my-3' />
          </label>

          <button type="submit" className='form-control my-3 btn btn-primary'>Gem rettet event</button>


        </form>
      }

    </>
  )
}

export default EventEdit