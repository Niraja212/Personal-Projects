import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Addproduct() {
    const [product, setProduct] = useState({
        image: '',
        title: '',
        desc: '',
        price: ''
    })
     const [prodlist, setProdlist] = useState([])
     
      const handleChange = (e) => {
        const {name, value} = e.target
         setProduct({
            ...product,
            [name] : value
         })
      }

      const getproduct = async() => {
        const res = await axios.get("http://localhost:8000/product")
        setProdlist(res.data)
      }
    
      useEffect (() => {
        getproduct()
      }, [])
   

      const [edit, setEdit] = useState(null)
    const addClick = async() => {
    try{
        if(edit){
           await axios.put(`http://localhost:8000/product/${edit}`, product)
            alert("Updated successly!!!")
            setEdit(null)
            console.log(edit);

        }else{

         await axios.post("http://localhost:8000/product", product)
          alert("Product added successfully!!!")
        }

        setProduct({
            image: '',
            title: '',
            desc:'',
            price: ''
        })

        }catch (error) {
         console.error(error);
        }
    };
        
    // Show data on screen 
    const handleEdit = (index) => {
        setProduct({
            image: index.image,
            title : index.title,
            desc: index.desc,
            price: index.price

        })
        setEdit(index.id)

    }

    const handledelete = async (id) => {
       try {
        await axios.delete(`http://localhost:8000/product/${id}`)
        getproduct()

       } catch (error) {
        
       }
    }
    

  return (
   <>
    <div className='container d-flex justify-content-center align-items-start min-vh-100'>
        <div className='card justify-content-center p-4 shadow' style={{width: "24rem"}}>
            <h2 className='text-center mb-4'> Add Product </h2>
            

            <form method="post">
                <div className='mb-3'>
                <label className='form-label' >Img Link</label>
                <input className='form-control' type ="text"  name="image" placeholder='Add Image link here' value={product.image} onChange={handleChange} required /> 
                </div>

                <div className='mb-3'>
                <label className='foem-label'>Product Title</label>
                <input className='form-control' type ="text" name="title" placeholder='Add product title here' value={product.title} onChange={handleChange} required />
                </div>

                <div className='mb-3'>
                <label className='foem-label'>Product Description</label>
                <input className='form-control' type ="text" name="desc" placeholder='Add product decription here'value={product.desc} onChange={handleChange} required />
                </div>

                <div className='mb-3'>
                <label className='foem-label'>Price</label>
                <input className='form-control' type ="text" name="price" placeholder='Add product price here' value={product.price} onChange={handleChange} required />
                </div>
               
                <button type="button" className="btn btn-primary w-100" onClick={addClick}> {edit ? "Update" : "Add"}</button>
   
            </form>


        </div>
   </div>
      <div className='d-flex justify-content-evenly flex-wrap'>

    {
            prodlist.map((index, i) => (

            <div key={i} className='card shadow-lg border-0 ' style={{width: "420px", marginBottom: "20px", height: "600px"}}>
                <img src={index.image}   alt={index.image} className='img-fluid rounded mb-2' style={{height: "350px", width: "100%", objectFit: "cover"}} />
                <h4 className='p-3' >{index.title}</h4>
                <div className='p-3'>{index.desc}</div>
                <div className='p-3'>₹{index.price}</div>
                <button className='btn btn-success' onClick = {() => handleEdit(index)}>Edit</button>
                <button className='btn btn-danger' onClick = {() => handledelete(index.id)}>Delete </button>
            </div>
           
            ))
    }
    </div>
   </>
  )
}
export default Addproduct
