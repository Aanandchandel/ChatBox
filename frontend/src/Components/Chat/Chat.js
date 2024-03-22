import "./Chat.css";
import "./ChatNav.css";
import "./ChatMessage.css";
import "./ChatFooter.css";
import React, { useState,useEffect,useRef } from 'react';
import componentMethods from "../../AppFuntions/apiMethods/ComponentMethods/componentMethod";
const Chat = () => {
    const [message,SetMessage]=useState("null")
    const textAreaRef = useRef(null);
    const [data,setData]=useState([{message:"not defind"
        ,time:componentMethods.getCurrentDateTime()}])

    useEffect(() => {
        // Focus on the textarea when component mounts or when message state changes
        textAreaRef.current.focus();

      }, [message]);


  const Nav = () => {
    return (
      <div className="ChatNavBarr">
        <div className="ChatPersonDetails">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="img"
          />
          <h1 className="ChatPersonName">name of person</h1>
        </div>
        <div className="ChatOptions">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvMAaPMq4coPZJbQkXRhuz0tzXnx4Q_Luhq2dbtYb-A&s"
            alt="img"
          />
          <div className="Chatmoreicon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };

  const MessageBox = () => {
    const RecivedMessage = () => {
      return (
        <p className="RecivedMessage">
          hh*sdfsdfsdafsadfsafsadfsadffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </p>
      );
    };
    const Timestamp=()=>{
        return(<div className="ChatTimestamp" >
        {componentMethods.getCurrentDateTime()}
        </div>)
    }
    const SentMessage = () => {
      return (
        <div className="SentMessage">
          dfgjdlfgjdskfkjfdglkdsfjlgjsdlfgjlsdfjgl dlfsjglkdsjfgljfl ldfjgldjfs
          dfglkjdsfkjgldsfjjjjjjjjjjjjjjjjjjjjjjjjjjj jdhdfkgkdfg
        </div>
      );
    };
    return (
      <div className="ChatMessageBox">
        <RecivedMessage />
        <SentMessage />
        <Timestamp/>
        <RecivedMessage />
        <SentMessage />
        <RecivedMessage />
        <SentMessage />
        <RecivedMessage />
        <SentMessage />
        <RecivedMessage />
        <SentMessage />
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="ChatMessage">
        <div className="ChatMessageinput">
          <img src="https://cdn-icons-png.flaticon.com/256/3917/3917099.png" />
          <input className="ChatMessageFileInputbtn" type="file" />
        </div>
        <textarea 
         ref={textAreaRef}
        // value={message}
          placeholder="Type a message"
          onKeyUp={(e) => {
            if (e.key === 'Enter'&& !e.shiftKey){


                setData([ ...data,{message:e.target.value}])
                console.log(`${e.target.value} and ${[ data[0].message]}`)

                SetMessage(e.target.value)

            }
            // componentMethods.sendMessage(e.target.value);
          }}
          className="ChatMessagetext"
          rows="1"
          cols="1"
        >
          {" "}
        </textarea>
        {/* <input   type="text"/> */}
        <img
          alt="img"
          src="https://static-00.iconduck.com/assets.00/mic-icon-358x512-o7rb029b.png"
        />
      </div>
    );
  };

  return (
    <div className="Chat">
      <Nav />
      <MessageBox />
      <Footer />
    </div>
  );
};

export default Chat;
