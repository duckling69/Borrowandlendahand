import React,{useState,useEffect} from 'react'  
import {Link} from 'react-router-dom'
import client from '../api/Api'
import {  Account, Databases, ID } from 'appwrite'
import { useAuth0 } from "@auth0/auth0-react";

const databases = new Databases(client);


const ExploreItem=({item,handleClick,setItemToBorrow})=>(
    <div className='bg-white text-gray-500 rounded-lg w-[20vw] h-[15vw] border-2 flex flex-col items-center text-center justify-around'>
        <div className='flex flex-row justify-around items-center w-[100%]'>
        <img src={item.image} className=' object-cover w-[50%] ' alt="" />
           
            <div>
            <h1 className='text-xl font-sans font-bold '>
                {item.title}
            </h1>
            <h2 className='text-md italic'>{item.discription}</h2>
            </div>
        </div>  

        <div className='text-end w-[100%] pr-5'>
            <button className='bg-purple-500 py-2 px-4 text-white rounded-lg hover:bg-purple-700' onClick={()=>{handleClick(); setItemToBorrow(item);}}> Borrow This item</button>
        </div>  
    </div>
)

const BorrowItem=({handleClick,itemToBorrow})=>{

    const [data, setData] = useState({phone:null,name:"",message:''})
    const addRequest=(itemToBorrow)=>{
       

    }

    return(
        <div className='w-[40vw] h-[50vh] m-auto z-20 absolute bottom-50 left-1/3 backdrop-blur-lg'>
            <div className=' shadow-2xl drop-shadow-2xl  w-[100%] h-[100%] rounded-xl bg-white border-2'>
    
            <div className='relative right-0 top-0 cursor-pointer text-3xl text-end mx-4 hover:text-purple-500' onClick={
                handleClick
            }>
            <i className="fa-solid fa-xmark"></i>
            </div>
        <div>
    <div className='grid place-items-center w-[100%] h-[100%]'>
            <h1 className='text-center text-2xl font-mono font-bold text-gray-500 mb-5'>
                Enter Your Details:
            </h1>
        </div>

    <form className='mx-10  w-[80%]' onSubmit={(e)=>{e.preventDefault()}}>
            <div className='flex flex-col gap-10'>
    
            <div><input required type="text" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="name" value={data.title} onChange={(e)=>{e.target.value(setData({...data,phone:e.target.value}))}} placeholder='Your Name*'/></div>

            <div><input required type="number" className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="phone" value={data.title} onChange={(e)=>{e.target.value(setData({...data,phone:e.target.value}))}} placeholder='Your Phone Number*'/></div>


            <div><textarea rows={3} className='w-[100%] border-2 active:border-purple-500 rounded-xl active:ring-purple-500 py-3 px-2' name="phone" value={data.title} onChange={(e)=>{e.target.value(setData({...data,phone:e.target.value}))}} placeholder='A message?'/></div>
                
            </div>

            <div className='text-center mt-5'>
            <button className='px-2 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white'  onClick={()=>{addRequest(itemToBorrow,data)}}> Add a Borrow Request </button>

            </div>

            </form>
            </div>
            </div>
    
           
    
        </div>
    )
}

const Explore = () => {
    const [itemToBorrow, setItemToBorrow] = useState()
    const [popupOpen, setPopupOpen] = useState(false)

    const [items,setItems] = useState();
    const handleClick=()=>{
     setPopupOpen(!popupOpen);   
    }
    useEffect(() => {
        console.log(popupOpen)
      
    }, [popupOpen])
    useEffect(() => {
        const getItems = databases.listDocuments("63b069123cd8a70b1a17", "63b0694cde603a87898c")
        getItems.then(
          function (response) {
            setItems(response.documents)
            console.log(items)
          },
          function (error) {
            console.log(error);
          }
        )
      }, [])

    
    
  return (
        <div className={`flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto `}>
            <div className='flex justify-between'> 
                <h1 className='text-5xl text-gray-500 text-left ml-5 font-sans font-bold'>
                    Explore items
                </h1>
            <Link to='/lend/add'>
            <button className='bg-purple-500 text-white hover:bg-purple-700 py-2 px-4 mr-5 rounded-lg'> Add Your Item for lending</button>
            </Link>
        </div>

        <div className='grid grid-cols-3 gap-4 width-[100%] p-10'>
            {items && items.map((item)=>(
                <ExploreItem key={item.$id} item={item} handleClick={handleClick} setItemToBorrow={setItemToBorrow}/>
            ))}
        </div>

        {popupOpen && <BorrowItem handleClick={handleClick} itemToBorrow={itemToBorrow} />}
    </div>
  )
}

export default Explore