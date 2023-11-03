import React from 'react';

const Error = ({errormessage, children}) => {
  return (
    <div>
        <h2>Der er opstået en fejl ...</h2>
        {
            errormessage && <p>{errormessage}</p>
        }

        { children }

    </div>
  )
}

export default Error