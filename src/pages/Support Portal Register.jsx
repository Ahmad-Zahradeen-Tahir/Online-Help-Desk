import  { useState } from 'react';
import styles from './SupportPortalRegister.module.css';
import { FaUser, FaEnvelope, FaBuilding, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaGoogle, FaMicrosoft, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SupportPortalRegister = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ level: 'Weak', percent: 0, color: 'red' });
  const [passwordMatch, setPasswordMatch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    if (name === 'password') {
      const val = value;
      let strength = 0;
      if (val.length >= 8) strength++;
      if (/[a-z]/.test(val)) strength++;
      if (/[A-Z]/.test(val)) strength++;
      if (/[0-9]/.test(val)) strength++;
      if (/[^a-zA-Z0-9]/.test(val)) strength++;

      const levels = ['Weak', 'Fair', 'Good', 'Strong'];
      const colors = ['red', 'orange', 'yellow', 'green'];
      const level = levels[Math.min(strength - 1, levels.length - 1)];
      const color = colors[Math.min(strength - 1, colors.length - 1)];

      setPasswordStrength({
        level,
        percent: (strength / 5) * 100,
        color,
      });
    }

    if (name === 'confirmPassword') {
      setPasswordMatch(value === form.password ? 'match' : 'mismatch');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert('Account created successfully! Please check your email for verification.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoIcon}><FaHeadset /></div>
          <h1 className={styles.title}>Support Portal</h1>
          <p className={styles.subtitle}>Create your support account</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2><FaUserPlus className="mr-2" />Create Account</h2>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <div className={styles.inputIcon}><FaUser /></div>
                <input type="text" name="firstName" required onChange={handleChange} />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <div className={styles.inputIcon}><FaUser /></div>
                <input type="text" name="lastName" required onChange={handleChange} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <div className={styles.inputIcon}><FaEnvelope /></div>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
              <label>Company <span className={styles.optional}>(Optional)</span></label>
              <div className={styles.inputIcon}><FaBuilding /></div>
              <input type="text" name="company" onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.inputIcon}><FaLock /></div>
              <input type={showPassword ? 'text' : 'password'} name="password" required onChange={handleChange} />
              <button type="button" className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className={styles.passwordStrengthWrapper}>
                <div style={{ width: `${passwordStrength.percent}%`, backgroundColor: passwordStrength.color }} className={styles.passwordStrength}></div>
                <p>Password strength: {passwordStrength.level}</p>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <div className={styles.inputIcon}><FaLock /></div>
              <input type="password" name="confirmPassword" required onChange={handleChange} />
              {passwordMatch && (
                <p className={passwordMatch === 'match' ? styles.match : styles.mismatch}>
                  {passwordMatch === 'match' ? '✓ Passwords match' : '✗ Passwords do not match'}
                </p>
              )}
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? <><FaUserPlus className="mr-2 animate-spin" />Creating account...</> : <><FaUserPlus className="mr-2" />Create Account</>}
            </button>
            
          </form>
          <div className={styles.cardFooter}>
            <p>Already have an account? <Link to="/">Sign in here</Link></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SupportPortalRegister;
