import React from 'react'
import Heading from '../../../common/heading/Heading'
import { tpost } from '../../../../dummyData'
import './tpost.css'

function Tpost() {
return (
    <>
        <section className="tpost">
            <Heading title= 'Tiktok Post' />

            {tpost.map((val) => {
                return (
                    <div className="box flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1 className='title'>{val.title.slice(0,35)}...</h1>
                            <span>a year ago</span>
                        </div>
                    </div>
                )
            })}
        </section>
    </>
)
}

export default Tpost
