import React, { useState,useEffect } from 'react';
import client from '../api/Api'
import {  Account, Databases, ID } from 'appwrite'
import { useAuth0 } from "@auth0/auth0-react";

const account = new Account(client);
const databases = new Databases(client);
const credits = 0;

const Data = ()=>{
    const {user} = useAuth0();
    const [items,setItems] = useState();
    const data = {
        title: 'Bat',
        image: 'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/b/u/bull-31-david-warner-english-willow-cricket-bat.jpg',
        credits: 10,
        discription: "I'm lazy",
        email: 'vivekjha3080@gmail.com'
    }
    const handleSubmit=()=>{
        const promise = databases.createDocument("63b069123cd8a70b1a17", "63b0694cde603a87898c", ID.unique(),
          {title: 'Bat',
          image: 'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/b/u/bull-31-david-warner-english-willow-cricket-bat.jpg',
          credits: 10,
          discription: "I'm lazy",
          email: user.email})
          console.log(promise);
          promise.then(
            function (response) {
              console.log(response);
      
            },
            function (error) {
              console.log(error);
            }
          );
          window.location.reload();
    }
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
        <div>
           <div className="grid grid-cols-3 gap-4">
            {items && items.map(item => (
                <Card
                key={item.id}
                imageUrl={item.image}
                price={item.credits}
                description={item.description}
                email={item.email}
                />
            ))}
        </div> 
        <button onClick={handleSubmit}>click</button>
        </div>
        
    
    );
}


const Card = ({ imageUrl, price, description, email }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative" onClick={handleClick}>
      <img className="w-full" src={imageUrl} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{description}</div>
        <p className="text-gray-700 text-base">
          {email}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          ${price}
        </span>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>
          Buy Now
        </button>
      </div>
      {showForm && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-75">
          <form className="mx-auto my-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Buy Now</h2>
            <label className="block mb-2 text-gray-700 font-bold">
              Name
              <input className="w-full py-2 px-3 text-gray-700 leading-tight" type="text" />
            </label>
            <label className="block mb-2 text-gray-700 font-bold">
              Email
              <input cassName="w-full py-2 px-3 text-gray-700 leading-tight" type="email" />
            </label>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};


export default Data;
