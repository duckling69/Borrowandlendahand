import React from 'react'


const Lending = () => {
    const [data, setData] = useState({title:'',discription:'',image:'',credits:'',email:''})
  return (
    <div className='flex flex-col mt-[12vh] w-[100%]'>
        <div className='text-center text-5xl font-mono font-bold text-gray-500'>
            <h1>Add your item:</h1>
        </div>

        <form action="">
            <div><input type="text" name="title" value={data.title} placeholder='Title'/></div>
            <div><input type="text" name="title" value={data.discription} placeholder='Title'/></div>
            <div><input type="url" name="title" value={data.image} placeholder='fileURL'/></div>
            <div><input type="" name="title" value={data.title} placeholder='Title'/></div>
        </form>
    </div>
  )
}

export default Lending