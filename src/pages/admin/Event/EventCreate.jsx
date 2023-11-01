import { useRef } from 'react'

import useRequestData from '../../../hooks/useRequestData';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';

// QUILL
// https://quilljs.com/docs/modules/toolbar/
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const EventCreate = () => {

  // POST data
  const { loading, error, data, makeRequest } = useRequestData();

  // Reference til quill
  const refQuill = useRef();
  const toolbarOptions = ['bold', 'italic', 'underline', 'strike'];
  // Kan evt. skrives således hvis der ønskes lidt form for gruppering.
  // const toolbarOptions = [['bold', 'italic', 'underline', 'strike'], [{'list': 'ordered'}, {'list': 'bullet'}]];

  const handleSubmit = (e) => {
    e.preventDefault() // Stop reload af side

    // Send formdata til API'et - som POST - e.target er fomularens indhold 
    let fd = new FormData(e.target)
    fd.append("content", refQuill.current.value)

    console.log(refQuill.current.value)

    makeRequest("news/admin", null, null, "POST", fd)

    // Tøm formularen - OBS! Tømmes uanset om der er fejl eller ej - benyt evt. useEffect til at lytte på Data?
    e.target.reset();
    // Tøm quill
    refQuill.current.getEditor().setText("")


  }

  return (
    <div>


      <h1>Opret ny nyhed</h1>

      {/* Loading */}
      {loading && <Loader />}

      {/* Error */}
      {error && <Error />}

      {data && <h3>Ny er oprettet</h3>}

      <form onSubmit={handleSubmit} className='form-group d-flex flex-column'>

        <label> Nyhedens titel
          <input type="text" name='title' placeholder='Titel' className='form-control my-3' required />
        </label>

        <label > Nyhedens tekst
          {/* <textarea name="content" id="content" placeholder='Nyhedstekst' className='form-control'></textarea> */}

          <ReactQuill
            theme="snow"
            placeholder='Nyhedstekst'
            className='my-3'
            ref={refQuill}
            modules={{ toolbar: toolbarOptions }}
          />
        </label>

        <label> Kategori

        </label>

        <label> Event Dato

        </label>

        <label> Destination

        </label>

        <label> Koordinater

        </label>

        <label> Distance

        </label>

        <label> Sværhedsgrad

        </label>

        <label> Event billede
          <input type="file" name="image" className='form-control my-3' />
        </label>

        <button type="submit" className='form-control my-3 btn btn-primary'>Gem Nyhed</button>


      </form>


    </div>
  )
}

export default EventCreate