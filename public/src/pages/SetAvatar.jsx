import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {Await, useNavigate} from "react-router-dom";
import logo from '../assest/logo.svg';
import {ToastContainer,toast} from 'react-toastify';
import axios from "axios";
import axiosRetry from "axios-retry";
import "react-toastify/dist/ReactToastify.css"
import { Buffer } from 'buffer';
import  {setAvatarRoute}  from '../utils/APIRoutes';

export default function SetAvatar() {

   const api = "https://api.multiavatar.com/45678945";
   const navigate = useNavigate();
   const [avatars,setAvatars] = useState([]);
   const [isLoading,setIsLoading] = useState(true);
   const [selectedAvatar,setSelectedAvatar] = useState(undefined);
   const toastOptions = {
    position : "bottom-right",
    autoClose :8000,
    pauseOnHover:true,
    draggable:true,
    theme:'dark'
  };
  const setProfilePicture = async ()=> {};


  useEffect (()=> {
     const asyncfn = async()=>{
      const data = [];
       for(let i=0;i<4;i++){
       const image =  await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
       const buffer = new Buffer(image.data);
       data.push(buffer.toString("base64"));
       }
       setAvatars(data);
     setIsLoading(false);
   }
   asyncfn();
},[]);
  return ( <>
    <Container>
        <div className="title-container">
         <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">{
           avatars.map((avatar,index)=>{
            console.log(avatar);
            return(
               <div
               key={index} 
               className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                 <img 
                 src={`data:image/svg+xml;base64,${avatar}`} 
                 alt='avatar'
                  onClick={()=>setSelectedAvatar(index)}
                 />
                </div>
            );
           })}
           </div>
    </Container>;
    <ToastContainer />
  </>
  );
  }


 const Container = styled.div``;

