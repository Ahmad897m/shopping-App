import React from 'react'
import Heading from '../../../common/heading/Heading'
import { ppost } from '../../../../dummyData'
import Slider from "react-slick";
import './ppost.css';



const Ppost = () => {

    const settings = {
        dots: false,
        infinity: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }

return (
    <>
        <section className="popularPost">
            <Heading title='Popular Posts' />
            <div className="content">
            <Slider {...settings}> 
            {
                ppost.map((val) =>{
                    return (
                    <div className="items">
                        <div className="box shadow">
                            <div className="images">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="category category1">
                                    <span>{val.catgeory}</span>
                                </div>
                            </div>
                            <div className="text">
                                <h1 className="title">{val.title.slice(0, 40)}...</h1>
                                <div className="date">
                                    <i className="fas fa-calendar-days"></i>
                                    <label htmlFor="">{val.date}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )})
            }
            </Slider>
            </div> 
        </section>
    </>
  )
}


export default Ppost