import React,{useState,useRef} from 'react'
import client from '../api/Api'
import {  Account, Databases, ID } from 'appwrite'
import { useAuth0 } from "@auth0/auth0-react";

const databases = new Databases(client);


const Lending = () => {

    const {user} = useAuth0();
    const [data, setData] = useState({title:'',discription:'',image:'',credits:'',email:'',phone:0})
    const handleSubmit=(event)=>{
        event.preventDefault();
        const promise = databases.createDocument("63b069123cd8a70b1a17", "63b0694cde603a87898c", ID.unique(),
          {title: data.title,
          image: data.image,
          credits: data.credits,
          discription: data.discription,
          email: user.email,
          Phone: data.phone
        })
        const lendItems = databases.createDocument("63b069123cd8a70b1a17", "63b09c016fb4b6d60704", ID.unique(),
          {title: data.title,
          image: data.image,
          credits: data.credits,
          discription: data.discription,
          email: user.email,
          Phone: data.phone
        })
        console.log(lendItems);
        lendItems.then(
          function (response) {
            console.log(response);
    
          },
          function (error) {
            console.log(error);
          }
        );
          console.log(promise);
          promise.then(
            function (response) {
              console.log(response);
      
            },
            function (error) {
              console.log(error);
            }
          );
    }
    

    // const phoneRef=useRef(null);
    // const phoneInput = window.intlTelInput(phoneRef, {
    //     utilsScript:
    //       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    //   });

    // const phoneNumber=phoneInput.getNumber


    
  return (
    <div className='flex flex-col mt-[12vh] w-[100%] items-center'>
        <div className='text-center text-5xl font-mono font-bold text-gray-500'>
            <h1>Add your item:</h1>
        </div>

        <form action="" className='my-10 w-[50%] text-xl'>
        <div className='flex flex-col gap-10 text-center w-[100%]'>
            <div><input type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="title" value={data.title} onChange={(e)=>{setData({...data,title:e.target.value})}} placeholder='Title'/></div>
            <div><input type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="discription" value={data.discription} placeholder='Description'  onChange={(e)=>{setData({...data,discription:e.target.value})}}/></div>
            <div><input type="url" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="image" value={data.image} placeholder='fileURL' onChange={(e)=>{setData({...data,image:e.target.value})}}/></div>
            <div className='flex justify-start'>
                <span className='border-2 bg-slate-100 rounded-lg rounded-r-none grid place-items-center px-3'>+91</span>
                <input type="number"  className='w-[100%] rounded-l-none   inline border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="phone" value={data.phone} placeholder='Your Phone Number' onChange={(e)=>{setData({...data,phone:e.target.value})}}/></div>
            <div><input type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="credits" value={data.credits} placeholder='Credits' onChange={(e)=>{setData({...data,credits:e.target.value})}}/></div>
            
        </div>
            <div className='text-center my-5'>

        <button className='px-2 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white' onClick={handleSubmit}>Add This Item</button>

            </div>
        </form>
    </div>
  )
}

export default Lending