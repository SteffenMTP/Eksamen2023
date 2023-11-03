import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

// IMPORT ICONS
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai'

// IMPORT Hook
import useRequestData from '../../../hooks/useRequestData';

const EventAdmin = () => {

  //GET EVENTS
  const { loading, error, data, makeRequest } = useRequestData();

  // DELETE EVENTS
  const { loading:loadingDel, error: errorDel, data: dataDel, makeRequest: makeRequestDelete } = useRequestData();

  useEffect(() => {

    makeRequest("events")

  }, [dataDel])

  //DELETE EVENT OBS!!! LOOK AT POTENTIAL DIALOG BOX
  const handleDelete = (eventID, eventTitle) => {

    if (window.confirm("Er du sikker på du vil slette? " + eventTitle)) {
      makeRequestDelete("events/admin/" + eventID, null, null, "DELETE")
    }

    console.log("Der er slettet: " + eventID)
  }

  return (
    <>
      <div>
        {/* Error */}
        {(error || errorDel) && <Error errormessage="Admin nyheder" />}

        {/* Loading */}
        {(loading || loadingDel) && <Loader />}

        {/* Data */}
        <table className='table'> 
          <thead>

            <tr>
              <th></th>
              <th>
                <Link to="create">
                  Opret ny <AiFillPlusCircle />
                </Link>
              </th>
              <th></th>
            </tr>

            <tr>

              <th>Eventtitel</th>
              <th>Ret</th>
              <th>Slet</th>
            </tr>
          </thead>

          <tbody>

            {data && data.map((e) =>

              <tr key={e._id}>
                <td>{e.title}</td>
                <td>
                  <Link to={"/admin/eventadmin/edit/" + e._id}><AiFillEdit color='green' size={25} className='pointer' /></Link>
                  
                </td>
                <td>
                  <AiFillDelete onClick={() => handleDelete(e._id, e.title)} color='darkred' size={25} className='pointer' />
                </td>
              </tr>

            )}
          </tbody>

        </table>
      </div>

    </>
  )
}

export default EventAdmin