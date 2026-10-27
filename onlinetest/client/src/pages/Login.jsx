
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const role = e.target.role.value;

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/student");
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Online Test App</h1>
        <p>Sign in to continue</p>

        <input
          type="email"
          placeholder="Email address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <select name="role" defaultValue="student">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
