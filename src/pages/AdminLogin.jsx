import React, { useEffect, useState } from 'react';
import styles from './AdminLogin.module.css';
import { FaShieldAlt, FaUserShield, FaKey, FaExclamationTriangle, FaIdBadge, FaLock, FaMobileAlt, FaSignInAlt, FaPhone, FaEnvelope, FaClock, FaGlobe, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handlePasswordToggle = () => setShowPassword(prev => !prev);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZoneName: 'short',
      });
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTwoFactorInput = e => {
    const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 6);
    setTwoFactor(onlyNums);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (twoFactor.length !== 6) {
      alert('Please enter a valid 6-digit authentication code.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      alert('Authentication successful! Redirecting to admin dashboard...');
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className={`${styles.bgPattern} ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <FaShieldAlt className={styles.securityIndicator} />
          <span>Secure Administrative Access</span>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.adminBadge}>
            <FaUserShield />
          </div>
          <h1>Admin Portal</h1>
          <p>Authorized Personnel Only</p>
        </div>

        <div className={styles.adminCard}>
          <div className={styles.cardHeader}>
            <FaKey className={styles.icon} />
            Administrator Login
          </div>

          <div className={styles.securityNotice}>
            <FaExclamationTriangle className={styles.icon} />
            <p>
              <strong>Security Notice:</strong> All login attempts are monitored and logged.
              Unauthorized access is prohibited.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="adminId">Administrator ID</label>
              <div className={styles.inputGroup}>
                <FaIdBadge className={styles.icon} />
                <input type="text" id="adminId" required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputGroup}>
                <FaLock className={styles.icon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                />
                <button type="button" onClick={handlePasswordToggle}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? (
                <><FaSignInAlt className={styles.icon} /> Authenticating...</>
              ) : (
                <><FaSignInAlt className={styles.icon} /> Secure Login</>
              )}
            </button>
          </form>

          <div className={styles.footer}>
            <div className={styles.backLink}>
              <FaArrowLeft className={styles.icon} /> Back to User Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
