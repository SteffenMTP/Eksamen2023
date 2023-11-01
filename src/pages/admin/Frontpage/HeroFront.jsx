import { React, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

// IMPORT Hook
import useRequestData from '../../../hooks/useRequestData';

// QUILL
// https://quilljs.com/docs/modules/toolbar/
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const HeroFront = () => {

    // GET
    const { loading, error, data, makeRequest } = useRequestData();

    // PUT 
    const { loading: loadingP, error: errorP, data: dataP, makeRequest: makeRequestP } = useRequestData();

    useEffect(() => {
        makeRequest("heros/653f6245e25b4169522a4c23")
    }, [])

    // Reference til quill
    const refQuill = useRef();
    const toolbarOptions = [['bold', 'italic', 'underline', 'strike'], [{ 'list': 'ordered' }, { 'list': 'bullet' }]];

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() // STOP RELOAD OF PAGE

        // SEND TO API - AS POST 
        let fd = new FormData(e.target)
        fd.append("content", refQuill.current.value)

        makeRequestP("heors/admin/653f6245e25b4169522a4c23", null, null, "PUT", fd)
    }

    // Is Edit made then navigate user back to the adminpage
    useEffect(() => {
        if (dataP) {
            navigate("/admin")
        }

    }, [dataP])

    return (
        <>
            {/* Error */}
            {(error || errorP) && <Error />}

            {/* Loading */}
            {(loading || loadingP) && <Loader />}

            {/* Data */}
            {data &&

                <form onSubmit={handleSubmit} className='form-control d-flex flex-column'>
                    <label> Emne
                        <input type="text" defaultValue={data.subject} className='form-control' name="subject" />
                    </label>
                    <label> Suptitle
                        <input type="text" defaultValue={data.suptitle} className='form-control' name="suptitle" />
                    </label>
                    <label> Titel
                        <input type="text" defaultValue={data.title} className='form-control' name="title" />
                    </label>
                    <label> Beskrivelse
                        <ReactQuill
                            theme="snow"
                            placeholder='Nyhedstekst'
                            defaultValue={data.content}
                            className='my-3'
                            ref={refQuill}
                            modules={{ toolbar: toolbarOptions }}
                        />
                    </label>

                    <div>
                        <p>Nuværende billede:</p>
                        <img src={"http://localhost:5888/images/hero/" + data.image} style={{width: 400}} alt={data.title} />
                    </div>

                    <label> Vælg evt. et nyt billede (Overskriver det nuværende billede)
                        <input type="file" name="image" className='form-control my-3' />
                    </label>

                    <div>
                        <button type="submit" className='btn btn-primary'>Gem Rettelser</button>
                    </div>

                </form>

            }

        </>
    )
}

export default HeroFront