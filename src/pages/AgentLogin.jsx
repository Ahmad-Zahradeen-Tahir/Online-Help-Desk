import React, { useState, useEffect } from 'react';
import styles from './AgentLogin.module.css';
import { FaUserTie, FaSignInAlt, FaIdBadge, FaLock, FaEye, FaEyeSlash, FaClock, FaShieldAlt, FaCalendarCheck, FaHeadset, FaUsers, FaTicketAlt, FaUserPlus, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgentPortalLogin = () => {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [shift, setShift] = useState('');
  const [status, setStatus] = useState('available');
  const [showPassword, setShowPassword] = useState(false);
  const [agentsOnline, setAgentsOnline] = useState(12);
  const [pendingTickets, setPendingTickets] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgentsOnline(Math.floor(Math.random() * 5) + 10);
      setPendingTickets(Math.floor(Math.random() * 10) + 20);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.getElementById('agentId')?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agentId || !password || !shift) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting Shift...';
    setTimeout(() => {
      console.log('Agent login:', { agentId, shift, status });
      showNotification(`Welcome back! Starting your ${shift} shift.`, 'success');
      setTimeout(() => {
        window.location.href = '/agent-dashboard.html';
      }, 1500);
    }, 2000);
  };

  const showNotification = (message, type = 'info') => {
    const notif = document.createElement('div');
    notif.className = `${styles.notification} ${
      type === 'success' ? styles.success : type === 'error' ? styles.error : styles.info
    }`;
    notif.innerHTML = `<div>${message}</div>`;
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.style.transform = 'translateX(100%)';
      notif.style.opacity = '0';
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <div className={styles.badge}><FaUserTie /></div>
          <h1>Agent Portal</h1>
          <p>Sign in to access your support dashboard</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2><FaSignInAlt /> Agent Sign In</h2>
          </div>
          <div className={styles.statusBanner}>
            <span className={styles.statusDot}></span>
            <p><strong>System Status:</strong> All services operational</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="agentId">Agent ID</label>
              <div className={styles.inputIcon}><FaIdBadge /></div>
              <input type="text" id="agentId" name="agentId" placeholder="Enter your agent ID" value={agentId} onChange={(e) => setAgentId(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputIcon}><FaLock /></div>
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.eyeToggle}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Link to="/agentDashBoard">
            <button type="submit" id="submitBtn" className={styles.submitBtn}>
              <FaSignInAlt /> Login
            </button>
            </Link>
          </form>

          

          <div className={styles.cardFooter}>
            <div className={styles.footerLinks}>
              <Link to="/agentRegistration"><FaUserPlus /> Register</Link>
              <Link to="/adminLogin"><FaUserShield /> Admin Portal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPortalLogin;
