import React from 'react'
import './Scroll.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '@chakra-ui/react';



const  ScrollBar = ({header,text,data,ind})=>{
  const toast = useToast()
    const Notify = ()=>{
       toast({
        position:'top',
        title: 'Wait',
        description: "it's Going to Play",
        status: 'success',
        duration: 2000,
        isClosable: true,
       })
    }


    return(
        <div className='Scroll-Header'>
            <div style={{width:'30px'}}>
            <ToastContainer />
            </div>
            
            <p style={{color:"white",fontSize:'24px',fontWeight:500}} >{header}</p>
            <p style={{color:"#B6BBC4",fontSize:'14px'}}>{text}</p>
        <section className="container">
     {data.map((el,ind)=>
     <div key={ind}>
        <div onClick={Notify} className='card' style={{background:`linear-gradient(to left, ${el.color}, #FFD6A5)`}}>

        </div>
        <p style={{color:"white",fontSize:'17px',fontWeight:'500'}}>{el.title}</p>
        <p style={{color:"#B6BBC4",fontSize:'14px'}}>{`${el.chapters} Chapters ${el.duration}`}</p>
        </div>
     )}
      </section>
      </div>
    )
}

export default ScrollBar