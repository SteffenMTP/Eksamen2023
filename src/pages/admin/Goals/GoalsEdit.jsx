import { React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

// IMPORT Hook
import useRequestData from '../../../hooks/useRequestData';

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCrown, faBiking, faMap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCrown, faBiking, faMap, faHandshake)



const GoalsEdit = () => {

    //request-hook
    const { loading, error, data, makeRequest } = useRequestData();

    //PUT data
    const { loading: loadingEdit, error: errorEdit, data: dataEdit, makeRequest: makeRequestEdit } = useRequestData();

    const { goalID } = useParams() // Hent nyhedes id i url'len
    const navigate = useNavigate();

    useEffect(() => {

        makeRequest(`goals/${goalID}`)

    }, [])

    // Send Form data
    const handleSubmit = (e) => {
        e.preventDefault()

        let fd = new FormData(e.target)

        makeRequestEdit("goals/admin/" + goalID, null, null, "PUT", fd)

    }

    // Is Edit made then navigate user back to the adminpage
    useEffect(() => {
        if (dataEdit) {
            navigate("/admin/goalsadmin")
        }

    }, [dataEdit])

    return (
        <div>

            {/* Error */}
            {(error || errorEdit) && <Error />}

            {/* Loading */}
            {(loading || loadingEdit) && <Loader />}
            {data &&
                <form onSubmit={handleSubmit} className='form-control d-flex flex-column'>

                    <label> Goal
                        <input type="text" defaultValue={data.goal} className='form-control' name="goal" />
                    </label>
                    <label> Goalcount
                        <input type="number" defaultValue={data.goalcount} className='form-control' name="goalcount" />
                    </label>
                    <div>
                        <p>Nuværende logo: <FontAwesomeIcon icon={data.icon} /> </p>
                    </div>
                    <label> Icon
                        <input type="text" className='form-control' name="icon" />
                    </label>
                    <label> Order
                        <input type="number" defaultValue={data.order} className='form-control' name="order" />
                    </label>

                    <div className='mt-2'>
                        <button type="submit" className='btn btn-primary'>Gem rettelser</button>
                    </div>


                </form>
            }


        </div>
    )
}

export default GoalsEdit