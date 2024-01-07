
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



export default function Home() {



  const [id, setId] = useState()
  const [input, setInput] = useState('')

  const handleEvent = function (e) {
    setInput(e.target.value)
  }

  try {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url).then((json) => {
      return json.json()
    }).then((data) => {
      setId(data[input].url)
    })

  } catch (err) {
    if (err instanceof TypeError) {
      console.log('')
    }
  }


  return (
    <>

      <nav className="navbar navbar-expand  p-0 col-6" style={{ position: 'fixed', top: '0px', width: '100%', zIndex: '1000' }}>
        <div className="container rounded-2 pt-1 p-0 px-4 pb-1">
          <a className="navbar-brand fs-2 p-1 mb-2" style={{ color: 'black' }} href="https://github.com/Meshojs">ɥ</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* GitHub link */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item  py-0">
                <a href="https://github.com/Meshojs">


                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">



        <div className="row">
          <div className="col-12 display-2 text-center mx-auto fw-bold text-black " style={{ marginTop: '250px' }}>
            Fetch API App ッ
          </div>
          <div className="fs-6 mx-auto text-center pe-5 text-black fw-bold">
            Web-App using Next.js For Beginners. <br /> Change Value and you will notice Changing of the images.
          </div>
        </div>

        <div className="row">
          <input type="text" onChange={handleEvent} className='col-4 p-2 mx-auto text-start mt-5 rounded-3 ' placeholder='Change Id Value {Number Only }' />
        </div>




        <div className="row mx-auto mt-5 ">
          <img src={id} alt="" className='mx-auto text-center' style={{ height: '250px', width: '300px', borderRadius: '20px' }} />
        </div>

      </div>

    </>
  )
}