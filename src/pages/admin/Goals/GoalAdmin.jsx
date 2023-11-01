import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

import { AiFillEdit} from 'react-icons/ai'

// IMPORT Hook
import useRequestData from '../../../hooks/useRequestData';

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCrown, faBiking, faMap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCrown, faBiking, faMap, faHandshake)

const GoalsAdmin = () => {

    //request-hook
    const { loading, error, data, makeRequest } = useRequestData();

    useEffect(() => {

        makeRequest("goals")
    
      }, [])

    return (
        <div>

            {/* Error */}
            {error && <Error/>}

            {/* Loading */}
            {loading && <Loader />}

            <table className='table'>
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Icon</th>
                        <th>Nummer</th>
                        <th>Ret</th>
                        <th>Order</th>
                    </tr>
                </thead>

                <tbody>

                    {data && data.map((g) =>

                        <tr key={g._id}>
                            <td>{g.goal}</td>
                            <td><FontAwesomeIcon icon={g.icon}/></td>
                            <td>{g.goalcount}</td>
                            <td>
                                <Link to={"/admin/goalsadmin/edit/" + g._id}><AiFillEdit color='green' size={25} className='pointer' /></Link>
                            </td>
                            <td>{g.order}</td>
                        </tr>

                    )}
                </tbody>

            </table>
        </div>
    )
}

export default GoalsAdmin