import { useState } from 'react';
import { signup } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo-container">
          <div className="auth-logo"><span>A</span></div>
        </div>
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Start your journey today</p>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label">Full name</label>
            <input className="auth-input" name="name" type="text"
              value={form.name} onChange={handleChange}
              placeholder="Your name" required />
          </div>
          <div className="auth-field">
            <label className="auth-label">Email address</label>
            <input className="auth-input" name="email" type="email"
              value={form.email} onChange={handleChange}
              placeholder="you@example.com" required />
          </div>
          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input className="auth-input" name="password" type="password"
              value={form.password} onChange={handleChange}
              placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-btn">Create account</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}