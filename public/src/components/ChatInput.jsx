import React ,{useState} from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';

export default function ChatInput() {
    const [showEmojiPicker,setShowEmojiPicker] = useState(false);
    const[msg,setMsg] = useState("");

    const handleEmojiPickerHideShow = () =>{
        setShowEmojiPicker(!showEmojiPicker);
    };

   const handleEmojiClick = (event,emoji) =>{
    let message = msg;
    message += event.emoji;
    setMsg(message);
}
console.log()
    return (
  <Container>
    <div className='button-container'>
        <div className='emoji'>
            <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
            {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>}
        </div>
    </div>
    <form className='input-container'>
        <input type='text' placeholder='Type your message here' value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <button className='submit'>
            <IoMdSend/>
        </button>
    </form>
  </Container>
  )
}

const Container = styled.div`{
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    .button-container{
        display: flex;
        align-items: center;
        color: orange;
        gap: 1rem;
        .emoji{
            position: relative;
            svg{
               font-size: 1.5rem;
               color: : #9a86f3;
               cursor: pointer;
            }
        .EmojiPickerReact{
            position: absolute;
            top: -460px;
            background-color: #080420;
            box-shadow: 0 5px 10px;
            color: #9a86f3;
            border-color: #9186f3;
            .epr-category-nav{
                button{
                    filter:contrast(0);
                }
            }
            .epr-search-container{
                background-color:transparent;
                border-color:#9186f3;
            }
            .epr-body:before{
             background-color:#080420;
            }
        }
    }
}
    .input-container{
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-content: center;
        gap:2rem;
        background-color: #ffffff34;
        input{
            padding-top:0.5rem;
            width: 90%;
            height: 100%;
            background-color: transparent;
            color: orange;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection{
                background-color: #9a86f3;
            }
            &:focus{
                outline: none;
            }
        }
        button{

            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            svg{
                font-size: 2rem;
                color: orange;
            }
        }
    }
}`;