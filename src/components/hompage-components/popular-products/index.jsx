import React from 'react'
// import scss file 
import './popular.scss'
// import  img
import cardImg from './img/cardimg.png'
import addCartImg from './img/add-cart-img.svg'
// import react icons
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const Popular = () => {
  return (
            <section className='popular-products'>
                <div className="container">

                    <div className="popular-top">
                        <h4>Popular products</h4>
                        <div className="popular-right">
                                <button>Cameras</button>
                                <button>Laptops</button>
                                <button>Tablets</button>
                                <button>Mouse</button>
                            </div>
                    </div>

                    <div className="popular-cards">

                        <div className="popular-card">
                            <div className="card-top">
                                <button className='add-like'><GoHeart /></button>
                                <img src={cardImg} alt="" />
                            </div>
                            <div className="card-bottom">
                                <button className='add-cart'>Add to cart <img src={addCartImg} alt="" /> </button>
                                <button className='see'><IoEyeOutline /></button>
                            </div>
                        </div>
                        <div className="popular-card">
                            <div className="card-top">
                                <button className='add-like'><GoHeart /></button>
                                <img src={cardImg} alt="" />
                            </div>
                            <div className="card-bottom">
                                <button className='add-cart'>Add to cart <img src={addCartImg} alt="" /> </button>
                                <button className='see'><IoEyeOutline /></button>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="card-top">
                                <button className='add-like'><GoHeart /></button>
                                <img src={cardImg} alt="" />
                            </div>
                            <div className="card-bottom">
                                <button className='add-cart'>Add to cart <img src={addCartImg} alt="" /> </button>
                                <button className='see'><IoEyeOutline /></button>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="card-top">
                                <button className='add-like'><GoHeart /></button>
                                <img src={cardImg} alt="" />
                            </div>
                            <div className="card-bottom">
                                <button className='add-cart'>Add to cart <img src={addCartImg} alt="" /> </button>
                                <button className='see'><IoEyeOutline /></button>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
  )
}

export default Popular