import React from 'react'
import { NavLink } from "react-router-dom";

const NoMatch = () => {
  return (
    <section>
      <h2 className='text-center'>OBS! Der er desværre ingen match på den side, De forsøger at få adgang til. <br/><br/>
        Tjek evt. om De har skrevet forkert URL i toppen af websiden ellers benyt logoet herunder eller vælg fra navigationsmenuen, som fører Dem videre herfra. <br/>
      </h2>

      <figure className='bg-dark text-white text-center py-5'>
        <NavLink end className="nav-link" aria-current="page" to="/"><img src='./logo.png' alt="Stroem logo" /></NavLink>
      </figure>
    </section>
  )
}

export default NoMatch;