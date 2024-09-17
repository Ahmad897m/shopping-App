import React from 'react'
import Popular from '../popular/Popular'
import './style.css'
import Ppost from '../Ppost/Ppost'
import Life from '../life/Life'
import Musics from '../musics/Musics'
import Side from '../../SideContent/Side/Side'


const Homes = () => {
  return (
    <>
        <main>
            <div className="container">
                <section className="mainContent">
                  <Popular />
                  <Ppost />
                  <Life />
                  <Musics />
                  </section>
                <section className="sideContent">
                  <Side />
                </section>
            </div>
        </main>
    </>
  )
}

export default Homes
