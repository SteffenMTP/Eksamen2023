import React, { useEffect } from 'react'

import useRequestData from '../../../hooks/useRequestData';

const Inquiries = () => {

    // GET HERO
    const { error, loading, data, makeRequest } = useRequestData();

    useEffect(() => {
      makeRequest("inqueries/admin")
    }, [])
    

    return (
        <>

            {/*Error*/}
            {error}

            {/*Loading*/}
            {loading}

            {/* Data */}
            {data &&
            
                <h2>Her kommer dine Inquiries til at være</h2>
            
            }

        </>
    )
}

export default Inquiries