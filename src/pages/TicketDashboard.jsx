import React from 'react';
import styles from './TicketDashboard.module.css';

const TicketDashboard = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.sidebarTitle}>Dashboard</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <i className="fas fa-home"></i> Dashboard
          </a>
          <a href="#" className={styles.navItem}>
            <i className="fas fa-ticket-alt"></i> Tickets
          </a>
          <a href="#" className={styles.navItem}>
            <i className="fas fa-chart-bar"></i> Reports
          </a>
          <a href="#" className={styles.navItem}>
            <i className="fas fa-users"></i> Users
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>Ticket Management</h2>
          <p>Manage and track support tickets efficiently</p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label>Status</label>
            <select>
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Date</label>
            <input type="date" />
          </div>
          <div className={styles.filterGroup}>
            <label>Priority</label>
            <select>
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button className={styles.filterButton}>
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>

        {/* Ticket Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: '#001',
                  subject: 'Issue with login',
                  detail: 'User unable to access account',
                  status: 'Open',
                  priority: 'High',
                  color: 'red'
                },
                {
                  id: '#002',
                  subject: 'Payment not processed',
                  detail: 'Transaction failed during checkout',
                  status: 'In Progress',
                  priority: 'Medium',
                  color: 'yellow'
                },
                {
                  id: '#003',
                  subject: 'Feature request',
                  detail: 'Request for dark mode implementation',
                  status: 'Closed',
                  priority: 'Low',
                  color: 'green'
                }
              ].map((ticket, i) => (
                <tr key={i}>
                  <td>{ticket.id}</td>
                  <td>
                    <div>{ticket.subject}</div>
                    <div className={styles.textMuted}>{ticket.detail}</div>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles[ticket.color]}`}>
                      <div className={styles.dot + ' ' + styles[`${ticket.color}Dot`]}></div>
                      {ticket.status}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles[ticket.color]}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.view}><i className="fas fa-eye"></i> View</button>
                      <button className={styles.assign}><i className="fas fa-user-plus"></i> Assign</button>
                      <button className={styles.update}><i className="fas fa-edit"></i> Update</button>
                      <button className={styles.close}><i className="fas fa-times"></i> Close</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <p>Showing <strong>1</strong> to <strong>3</strong> of <strong>3</strong> results</p>
          <div className={styles.paginationButtons}>
            <button>Previous</button>
            <button className={styles.currentPage}>1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDashboard;
