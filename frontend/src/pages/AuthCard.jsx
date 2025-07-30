import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleFlip = () => setFlipped(!flipped);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", loginData);
    // navigate("/dashboard/user");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", registerData);
    // navigate("/dashboard/user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-sm perspective">
        <div
          className={`relative w-full h-[400px] transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Login Card */}
          <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600 mt-2">
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={toggleFlip}
                >
                  Register
                </span>
              </p>
            </form>
          </div>

          {/* Register Card */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Register
            </h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Register
              </button>
              <p className="text-center text-sm text-gray-600 mt-2">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={toggleFlip}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
