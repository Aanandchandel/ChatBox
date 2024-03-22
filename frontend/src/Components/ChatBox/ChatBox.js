import "./ChatBox.css";
import "./ChatItem.css"
const ChatBox = () => {
  return (
    <div className="ChatBox">
      <Nav />
      <SearchBarr />
      <div className="ChatBoxChats">
      <ChatItem/>
      </div>

    </div>
  );
};
 
const ChatItem=()=>{

  return(
  <div className="ChatItem">
<img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="img" />
<div className="ChatItemBox"  >
  <div className="ChatTtemDeteail"> <h1 className="ChatItemName">name of per</h1> <span/>10:66</div>
  <p className="ChatItemLastMessage">lskadfsahdfl sdfhsklfdasjdfljasdlfjlasj sdlkfsldjfljsa ,sdfjljsljfd, ,sdfljlasldfljsladjflhjsadcjlkajfoaijclsadnfoialfjsadlfcjlsadjf;</p>
</div>
  </div>)

}


const SearchBarr = () => {
  return (
    <div className="SearchBarr">
      <div className="searchBarrInput">
        <button className="searchBarrbtn"></button>
        <input placeholder="Search or start new chat" className="searchBarrText" type="text" />
      </div>
      <div className="searchFilter"> 
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
const Nav = () => {
  return (
    <div className="chatBoxNav">
      <img
        src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
        alt="img"
      />
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkTt5AhTDazoXTd5IiM3dXax4BQGyQjTXSw&usqp=CAU"
          alt="ing"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/615/615075.png"
          alt="ing"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/ui-chat-app-1/32/24-status-update-512.png"
          alt="ing"
        />
        <img
          src="https://static.thenounproject.com/png/3750523-200.png"
          alt="ing"
        />
        <div className="navMoreIcon">
          {" "}
          <div></div>
          <div></div>
          <div></div>{" "}
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
