import { useState, useEffect } from "react";
import "./Home.css";
import ChatBox from "../../Components/ChatBox/ChatBox.js";
import Chat from "../../Components/Chat/Chat.js";


const Home = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen
            (window.innerWidth >= 10 && 
              window.innerWidth <= 600);
        };
  
        // Initial check on mount
        handleResize();
  
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
  
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
  return (
    <div className={`Home
     ${isSmallScreen ? 'Home-small-screen' : ''}
     `}>
      <ChatBox />
      
      {!isSmallScreen?<Chat />:""}
      


    </div>
  );
};

export default Home;
