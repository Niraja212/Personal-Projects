import React from 'react'
import AdminNavbar from './AdminNavbar'

function Card({number,title}){
  return(
    <div className="card shadow-lg rounded-4 h-100" style={{ width: '22rem' }}>
    <div className="card-body d-flex flex-column">
        <h3 className="card-title fw-semibold">{number}</h3>
    <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="card-text text-muted flex-grow-1">
          {title}
        </h5>
    </div>
    </div>
    </div>
  );
}

function Dashboard() {
  const bgStyle = {
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20250506/pngtree-vibrant-digital-dashboard-with-graphs-and-charts-image_17226132.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    margin: 0,     
    paddingTop: '20px'
  };
  
  return (
    <div style={bgStyle}>
    <div className='container'>
      <h2 className="text-center mb-3" style={{color:'white'}}>Admin Dashboard</h2>

      <div className='row g-4 justify-content-center'>

        {/* 1st Card */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <Card number="3"
              title="Total Products"
        />
        </div>
        
        {/* 2nd Card */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <Card number="1"
              title="Low stock Product"
        />
        </div>

        {/* 3rd Card */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <Card number="35"
            title="Added To Cart"
        />
        </div>

        {/* 4th Card */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <Card number="70"
            title="Wishlisted Products"
        />
       </div>

        {/* 5th Card */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <Card number="100"
            title="Total Number of Users"
        />
        </div>

        </div>
    </div>
    </div>
  )
}

export default Dashboard
