import React from "react";

const Login : React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Login</h2>
          <input type="email" placeholder="Email" className="input input-bordered focus:outline-none" />
          <input type="password" placeholder="Password" className="input input-bordered focus:outline-none" />
          <button className="btn btn-primary w-full mt-4">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;