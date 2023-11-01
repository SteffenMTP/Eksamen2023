import { React } from 'react';

const AdminFooter = () => {

    return (
        <>

            <footer className="py-5 text-center">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <img src="./logo.png" className='logofooter' alt="Stroem logo" />
                    </div>
                </div>

                <div className="d-flex flex-sm-row justify-content-between py-4 my-4 border-top text-white">
                    <p>© Copyright 2012 Bikelane.</p>
                </div>
            </footer>

        </>
    )



}

export default AdminFooter;