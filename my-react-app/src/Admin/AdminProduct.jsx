import React from 'react'


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

    function AdminProduct() {
      return (
     <div className="container my-5">
     <div className='row g-4 justify-content-center'> 
      
      {/* 1st Card */}
      <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
      <Card number="3"
              title="Newly Launched Products"/>
      </div>

       {/* 2nd Card */}
       <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
      <Card number="5"
              title="Recent Orders"/>
      </div>
     </div>
     </div>
  )
}

export default AdminProduct
