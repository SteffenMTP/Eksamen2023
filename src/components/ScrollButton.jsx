import {React, useState, useEffect} from 'react'

const ScrollButton = () => {

  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 200) {
        setBackToTopButton(true)
      }
      else {
        setBackToTopButton(false)
      }
    })
  }, [])
  
  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }


  return (
    <>
    
    {backToTopButton && (

      <button onClick={scrollUp} className='ScrollToTopBtn'>
        &#8593;
      </button>

    )}
    
    </>
  )
}

export default ScrollButton