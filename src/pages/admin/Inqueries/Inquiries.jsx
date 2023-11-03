import React, { useEffect, useState } from 'react';
import useRequestData from '../../../hooks/useRequestData';

const Inquiries = () => {
    const { error, loading, data, makeRequest } = useRequestData();
    const { error: errorP, loading: loadingP, data: dataP, makeRequest: makeRequestP } = useRequestData();

    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        makeRequest("inqueries/admin");
    }, []);

    useEffect(() => {
        makeRequestP("inquires/admin", null, null, "PATCH");
    }, [dataP]);

    useEffect(() => {
        if (data) {
            setInquiries(data);
        }
    }, [data]);

    const toggleRead = (inq) => {
        const updatedInquiries = inquiries.map((item) => {
            if (item._id === inq._id) {
                item.read = !item.read;
            }
            return item;
        });
        setInquiries(updatedInquiries);
        // Make a PATCH request to update the 'read' property in your API
        makeRequestP(`inquires/admin/${inq._id}`, null, null, "PATCH", { read: inq.read });
    };

    return (
        <>
            {error || errorP}

            {loading || loadingP}

            {inquiries && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Navn</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Besked</th>
                            <th>Læst</th>
                        </tr>
                    </thead>

                    <tbody>
                        {inquiries
                            .sort((a, b) => new Date(b.received) - new Date(a.received))
                            .map((inq) => (
                                <tr key={inq._id}>
                                    <td>{inq.name}</td>
                                    <td>{inq.email}</td>
                                    <td>{inq.phone}</td>
                                    <td>{inq.message}</td>
                                    <td>{inq.read ? "Read" : "Unread"}</td>
                                    <td>
                                        <button className='btn btn-secondary' onClick={() => toggleRead(inq)}>
                                            Toggle read
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Inquiries;
