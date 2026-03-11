import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProductCard({ image, title, description, price, onAddToCart}) {
  return (
    <div className="card shadow-lg rounded-4 h-100" style={{ width: '22rem' }}>
      <img src={image} className="card-img-top rounded-top-4" alt={title}  style={{height:'450px' , width:'100%'}}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fs-5 fw-bold">₹{price}</span>
        </div>

        <button
          onClick={onAddToCart}
          className="btn btn-dark w-100 rounded-pill ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function ShopCard ({image, text}){
  return (
    <div className="card shadow-lg h-100 rounded-0 " style={{ width: '22rem' }}>
      <img className="card-img-top " style={{ objectFit: 'cover' }} src={image} alt={text} />
    <div className="card-body d-flex flex-column">
    <p className='d-flex justify-content-center mb-0 fw-semibold'>{text}</p>
    </div>
    </div>
    );
}


function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  return (
    <>
    <div className="container">
      <section className='collection position-relative p-5'>
      <h1 className="text-center mb-3">Welcome To KAIRA!!!</h1>
      <h2 className="text-center mb-3" style={{ fontFamily: 'sans-serif' }}>
        New Collections
      </h2>

      <p className="fs-5 text-center mx-auto mb-5" style={{ color: '#82B2C0', maxWidth: '900px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima corporis est possimus non ipsum <br></br> quia, quae quaerat beatae. 
        Ipsum repudiandae consequatur possimus minus maiores <br></br>ipsam minima optio voluptatibus itaque.Ipsum repudiandae consequatur possimus 
        minus maiores ipsam minima optio voluptatibus itaque.
      </p>
      </section>
      </div>

{/* --------------------------------------------------------------------------------------------------------------------------------------------*/}
    <div className="carousel slide" id="productCarousel"> 
    <div className="carousel-inner">

      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="row g-4 justify-content-center mb-5">

          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProductCard
              image="https://img105.savana.com/goods-pic/af2a30eb44ce4711b6a28d41720cb2ad_w540_h720_q85.webp"
              title="Kaira Cozy Winter Knit Top"
              description="Newly launched soft-knit winter top designed for everyday winter wearing."
              price="1499"
              onAddToCart={() => alert("Added to cart!")}
            />
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProductCard
              image="https://i.pinimg.com/236x/16/92/29/1692297af45384fcfd5979978bb7c506.jpg"
              title="Kaira Floral Evening top"
              description="Newly launched premium floral evening top designed for casual outings."
              price="1299"
              onAddToCart={() => alert("Added to cart!")}
            />
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProductCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDd1US7f1077OxNMJnrgCUPNG4aWCmoQtzQw&s"
              title="Classic One Shoulder Top"
              description="A chic one-shoulder top with a modern cut."
              price="999"
              onAddToCart={() => alert("Added to cart!")}/>
          </div>
          </div>
          </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row g-4 justify-content-center mb-5">

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <ProductCard
                image="https://tse4.mm.bing.net/th/id/OIP.5AbclxA-KlHHaT9MMQ55NAHaKG?pid=Api&P=0&h=220"
                title="Classic Regular-wear Top"
                description="A classic regular fit top with a modern cut."
                price="499"
                onAddToCart={() => alert("Added to cart!")}/>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <ProductCard
                image="https://i5.walmartimages.com/asr/1e6e7bc3-46e7-45dc-a500-3b717ff2f2f0.adc2b321342d9bde8aab1212f2305b48.jpeg?odnHeight=711&odnWidth=711&odnBg=FFFFFF&odnDynImageQuality=70"
                title="Classic Casual-wear Top"
                description="A classic regular fit top with a modern cut."
                price="899"
                onAddToCart={() => alert("Added to cart!")}/>
            </div>

            {/* Card 6 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <ProductCard
                image="https://tse3.mm.bing.net/th/id/OIP.UD2IquXPggGq8ttXm0H7YAHaHa?pid=Api&P=0&h=220"
                title="Fancy Casual-wear Top"
                description="A classic r fit top with a modern cut."
                price="1199"
                onAddToCart={() => alert("Added to cart!")} />
            </div>
          </div>
        </div>
      </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
          </div>
   
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
    <section className='collection position-relative py-5'>
        <div className="container mb-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-3 " data-aos="fade-in" data-aos-delay="0">
            <i className="bi bi-truck fs-1"></i>
              <h5 className="mt-3">Free Shipping</h5>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe accusantium, id exercitationem </p>
            </div>

            <div className="col-md-3">
              <i className='bi bi-gift fs-1' alt="Support" />
              <h5 className="mt-3 " data-aos="fade-in" data-aos-delay="300">Special Packaging</h5>
              <p className='text-secondary'>velit itaque natus, sed repellendus nam, animi tempore atque quo. In impedit velit rerum Repellendus, laboriosam neque</p>
            </div>

            <div className="col-md-3">
              <i className='bi bi-laptop fs-1' alt="Support" />
              <h5 className="mt-3 " data-aos="fade-in" data-aos-delay="600">24/7 Support</h5>
              <p className='text-secondary'>velit itaque natus, sed repellendus nam, animi tempore atque quo. In impedit velit rerum Repellendus, laboriosam neque</p>
            </div>

            <div className="col-md-3">
              <i  className='bi bi-cash-stack fs-1' alt="Secure Payment" />
              <h5 className="mt-3 " data-aos="fade-in" data-aos-delay="900">Secure Payment</h5>
              <p className='text-secondary'>velit itaque natus, sed repellendus nam, animi tempore atque quo. In impedit velit rerum Repellendus, laboriosam neque</p>
            </div>
          </div>
        </div>
        </section>
     
     {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="collection bg-light position-relative p-5">
      <div className='row g-4 justify-content-center'>
      {/* 7th Card */}
      <div className="col-md-6 d-flex justify-content-center">
          <ShopCard
            image="https://www.bewakoof.com/blog/wp-content/uploads/2023/03/image-98.png"
            text="Shop for Women"
          />
          {/* <p className=' d-flex justify-content-center mb-0 fw-semibold fs-5 text-uppercase'>Shop for Women</p> */}
        </div>

          {/* 8th Card */}
      <div className="col-md-6 d-flex justify-content-center">
          <ShopCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCO896cQH9td9QIvPk9sAdgh_nwzmKXxeoQ&s"
            text="Shop Accessories"
          />

          {/* <p className=" d-flex justify-content-center mb-0 fw-semibold fs-5 text-uppercase">
          Shop Accessories
          </p> */}
      </div>
      </div>
      </section>
      
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
    <section className="collection bg-light position-relative" style={{padding:'80px'}}>
    <div className="container-fluid">
        <div className="row align-items-center g-0 bg-light">
          <div className="col-md-6">
            <div className="image-holder">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0mOFcWnwgpBDkpdJxi-agmKy3ItrqlZr0A&s" 
              alt="collection" 
              className="product-image img-fluid w-100"  style={{maxHeight:"700px", objectFit:"cover"}}/>
            </div>
            </div>
          

          <div className="col-md-6 column-container bg-white">
            <div className="collection-content p-5">
              <h1 className="element-title text-uppercase mb-4">Classic Ethnic collection</h1>
              <p  className="text-muted mb-4">Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
                fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam
                nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis
                diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
              <button className="btn btn-dark text-uppercase px-4 py-2">Shop Collection</button>
            </div>
          </div>
          

        </div>
        </div>
        </section>

      {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className='m-5 p-5'>
          <div className='container'>
            <div className="row">
              <div className="col ">
              <div className="logo-wrapper "  style={{
              width: "max-content",
              animation: "moveLeftToRight 20s linear infinite",
             }}>
              <div className='d-flex justify-content-between gap-4'>
              <img src="images/logo.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo2.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo3.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo4.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo5.png" alt="logo" className="img-fluid"></img>

              <img src="images/logo.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo2.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo3.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo4.png" alt="logo" className="img-fluid"></img>
              <img src="images/logo5.png" alt="logo" className="img-fluid"></img>

              <style>
                {`
                  @keyframes moveLeftToRight {
                    0% {
                      transform: translateX(-50%);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                `}
              </style>    
              </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        

       
    </>
  );
}

export default Home;


