import Nav from "../../Components/Nav/Nav";
import "./Login.css";

const Login = () => {
  let user = {};
  const submit = (e) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        // JSON.parse(localStorage.getItem("user"))
      })
    );
    // console.log(e)
    let a = localStorage.getItem("user");
    let rs = JSON.parse(a);
    console.log(rs);
  };
  return (
    <div className="Login">
      <Nav />

      <div className="LoginForm">
        <div className="LoginFormInput">
          <h1>Login</h1>
          <input
            placeholder="Enter name"
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                user.name = `${e.target.value}`;
              }
            }}
          />

          <input
            placeholder="Enter Password"
            onKeyUp={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                user.Password = `${e.target.value}`;
              }
            }}
            type="password"
          />
          <input
            placeholder="Enter Email"
            onKeyUp={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                user.Email = `${e.target.value}`;
              }
            }}
            type="email"
          />
          <button
            onClick={() => {
              submit(user);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
