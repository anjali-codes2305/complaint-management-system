import { useState } from "react";

function Register() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className={`relative w-96 h-[500px] perspective`}>
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style ${flip ? "rotate-y-180" : ""}`}>
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
              <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded" />
              <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Sign Up</button>
            </form>
            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <button className="text-purple-600 font-semibold hover:underline" onClick={() => setFlip(true)}>
                Login here
              </button>
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Login</button>
            </form>
            <p className="mt-4 text-sm text-center">
              Don’t have an account?{" "}
              <button className="text-indigo-600 font-semibold hover:underline" onClick={() => setFlip(false)}>
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
