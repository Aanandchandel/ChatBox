const getCurrentDateTime = () => {
    const now = new Date();
  
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
  
    const time = `${hours}:${minutes}`;
    const date = `${day}/${month}/${year}`;
  
    return  `${time}, ${date} `;
  };

const sendMessage=(e)=>{
    
    console.log("sendmmmmmm message",e)
}
const componentMethods={sendMessage,getCurrentDateTime}
export default componentMethods;