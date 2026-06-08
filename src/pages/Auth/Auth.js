import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    navigate("/account");
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        {/* زر العودة للرئيسية */}
        <Link to="/" className="auth-home-back-btn" title="Back to Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>

        {/* الشعار */}
        <h1 className="auth-brand-logo">Sema Shop</h1>

        {/* العناوين الديناميكية حسب الحالة */}
        <h2 className="auth-title">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="auth-subtitle">
          {isLogin
            ? "Great to have you back! Please enter your details."
            : "Join us today! Please fill in your information below."}
        </p>

        {/* نموذج إدخال البيانات */}
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="E.g., Reem Hassan"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isLogin && (
            <div className="forgot-password-link">
              <span>Forgot password?</span>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        {/* التبديل بين التسجيل وتدشين الدخول */}
        <div className="auth-toggle-footer">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            className="toggle-auth-state-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create one" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
