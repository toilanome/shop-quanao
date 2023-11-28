import React, { useReducer } from 'react'
import './CSS/Style.css'
import banner from "../Images/BannerHeader.png";
import product from "../Images/product.png";
import banner2 from "../Images/banner2.png";
import phay from "../Images/phay.svg";


const HomePage = () => {
    return (
        <>
            <section className='bg-color '>
                <div className='container mt-16 flex items-center justify-between'>
                <div className='des-banner '>
                <h2 className='text-color ' style={{fontSize:"70px"}}>Discover and <br /> Find Your Own <br /> Fashion!</h2>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, magni voluptas facere, debitis pariatur quod quia inventore adipisci rerum ea molestias quas. Debitis repellat eaque laboriosam fuga, maxime magnam voluptatum.</p>

                <div>
                    <button className='des-banner-btn'>Explore Now</button>
                </div>
                </div>

                <img src={banner} alt="" />
                </div>
                
               
            </section>

            <section className='container ' style={{marginTop:"80px" , marginBottom:"80px"}}>
                <div className="best-sell">
                    <div className="title center flex-col ">
                            <h2>Best selling</h2>
                            <p>Get in on the trend with our curated selection of best-selling styles.</p>
                    </div>

                    <div className="row">
                    <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-11 '>
                        <button className='btn-product'>All Product</button>
                    </div>
                </div>

            </section>


            <section className='container our-product' style={{marginTop:"80px" , marginBottom:"100px"}}>
            <div className="">
                    <div className="title center flex-col ">
                            <h2>Our products</h2>
                            <ul className='mt-8 flex'>
                                <li className='mr-12 ml-12'>SALE</li>
                                <li className='mr-12 ml-12'>HOT</li>
                                <li className='mr-12 ml-12 uppercase'>New Arrivals</li>
                                <li className='mr-12 ml-12 uppercase'>Accessories</li>
                            </ul>
                    </div>

                    <div className="row2">
                    <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span>Regular Fit Long Sleeve Top</span>
                                    <span>$38.99</span>
                                    
                            </div>
                        </div>
                    </div>

                   
                </div>
            </section>



            <section className='container bg-color'>
                <div  className='excluise flex justify-center gap-32'>
                <div className="">
                    <img src={banner2} alt="" />
                </div>
                    <div className="excluise-info">
                        <div className="excluise-title ">
                        <h3 className=' text-5xl font-bold color mb-8 '>Exclusive offer</h3>
                         <p className='mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Magnam voluptatem doloremque officia pariatur ipsum atque  <br /> distinctio, quidem animi, veritatis soluta  rem beatae vitae expedita <br /> libero quasi vel odio. Beatae, similique.</p>
                        </div>

                        <div className="excluise-day mb-9 flex">
                            <div className="box">
                                <span>06</span>
                                <span>Days</span>
                            </div>
                            <div className="box">
                                <span>06</span>
                                <span>Days</span>
                            </div>
                            <div className="box">
                                <span>06</span>
                                <span>Days</span>
                            </div>
                        </div>
                        <div>
                            <button className='des-banner-btn'>Buy Now</button>
                        </div>

                        
               
                    </div>

                
                </div>
               
            </section>


            <section className='container ' style={{marginTop:"80px" , marginBottom:"80px"}}>
                <div className="best-sell">
                    <div className="title center flex-col ">
                            <h2>Designer Clothes For You</h2>
                            <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!  </p>
                    </div>

                    <div className="row">
                    <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span className='font-semibold text-2xl'>Accessories</span>
                                    <span className='text-center '>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span className='font-semibold text-2xl'>Accessories</span>
                                    <span className='text-center '>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</span>
                                    
                            </div>
                        </div>
                        <div className="col ">
                            <div className='bg-color'>
                            <img src={product} alt="" />
                            </div>
                            

                            <div className="des-product">
                                <span className='font-semibold text-2xl'>Accessories</span>
                                    <span className='text-center '>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</span>
                                    
                            </div>
                        </div>
                    </div>

                   
                </div>

            </section>


            <section className='container '  style={{marginBottom:"200px"}}>
                <div className="feedback title">
                    <h2 className='text-center'>Feedback Corner</h2>
                    <div className="feedbox row">
                    <div className="feedback-conter p-4 ">
                            <div className="">
                                <div>
                                <img src={phay} alt="" />

                                </div>
                                <div className='mt-5 mb-5'>
                                <span className='text-xl color font-semibold'>Emily Wilson</span>

                                </div>

                                <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>

                            </div>
                    </div>
                    <div className="feedback-conter bg-color p-4  ">
                            <div className="">
                                <div>
                                <img src={phay} alt="" />

                                </div>
                                <div className='mt-5 mb-5'>
                                <span className='text-xl color font-semibold'>Emily Wilson</span>

                                </div>

                                <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>

                            </div>
                    </div>
                    <div className="feedback-conter  p-4">
                            <div className="">
                                <div>
                                <img src={phay} alt="" />

                                </div>
                                <div className='mt-5 mb-5'>
                                <span className='text-xl color font-semibold'>Emily Wilson</span>

                                </div>

                                <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>

                            </div>
                    </div>
                    </div>
                  
                    
                </div>
            </section>
        </>
        
    )
}

export default HomePage
