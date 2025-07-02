"use client";

import React, { useState } from "react";
import styles from "./AgentDashboard.module.css";

const AgentDashboard = () => {
  const [stats, setStats] = useState({
    activeTickets: 12,
    resolvedToday: 47,
    availableTickets: 23,
    avgRating: 4.8,
  });

  const [availableTickets, setAvailableTickets] = useState([
    {
      id: "PTK-001",
      title: "Email not working on mobile device",
      description:
        "Hi, I'm having trouble accessing my email on my iPhone. The app keeps crashing when I try to open it.",
      priority: "High",
      status: "New",
      customerEmail: "john.smith@email.company.com",
      timeAgo: "2 hours ago",
    },
    {
      id: "PTK-002",
      title: "Password reset request",
      description:
        "I forgot my password and the reset email isn't coming through. I've checked my spam folder and it's not there either.",
      priority: "Medium",
      status: "New",
      customerEmail: "alice.johnson@email.company.com",
      timeAgo: "4 hours ago",
    },
    {
      id: "PTK-003",
      title: "Software installation help needed",
      description:
        "I need help installing the new software update. The installation keeps failing at 50% completion.",
      priority: "Low",
      status: "New",
      customerEmail: "bob.wilson@email.company.com",
      timeAgo: "6 hours ago",
    },
  ]);

  const [myTickets, setMyTickets] = useState([
    {
      id: "PTK-101",
      title: "VPN connection issues",
      description:
        "Customer is unable to connect to VPN from home office. Error message shows 'Connection timeout'.",
      priority: "High",
      status: "In Progress",
      customerEmail: "emma.davis@email.company.com",
      timeAgo: "1 hour ago",
      assignedTo: "Sarah Agent",
    },
    {
      id: "PTK-102",
      title: "Printer not responding",
      description:
        "Office printer is not responding to print jobs. All computers show the printer as offline.",
      priority: "Medium",
      status: "Open",
      customerEmail: "mike.brown@email.company.com",
      timeAgo: "3 hours ago",
      assignedTo: "Sarah Agent",
    },
  ]);

  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const handleAssignTicket = (ticketId) => {
    const ticket = availableTickets.find((t) => t.id === ticketId);
    if (ticket) {
      const assignedTicket = { ...ticket, assignedTo: "Sarah Agent", status: "Open" };
      setMyTickets((prev) => [assignedTicket, ...prev]);
      setAvailableTickets((prev) => prev.filter((t) => t.id !== ticketId));
      setStats((prev) => ({
        ...prev,
        activeTickets: prev.activeTickets + 1,
        availableTickets: prev.availableTickets - 1,
      }));
    }
  };

  const handleViewDetails = (ticketId) => {
    console.log("Viewing details for ticket:", ticketId);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return styles.tagHigh;
      case "Medium":
        return styles.tagMedium;
      case "Low":
        return styles.tagLow;
      default:
        return styles.tagMedium;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return styles.tagNew;
      case "Open":
        return styles.tagOpen;
      case "In Progress":
        return styles.tagInProgress;
      default:
        return styles.tagOpen;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>Dashboard</a>
          <a href="#" className={styles.navItem}>Status Tracker</a>
          <a href="#" className={styles.navItem}>Reports</a>
        </nav>
        <div className={styles.userInfo}>
          <div className={styles.statusIndicator}>
            <div className={styles.statusDot}></div> Online
          </div>
          <div className={styles.avatar}>SA</div>
          <span>Sarah Agent</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Agent Dashboard</h1>
          <p className={styles.pageSubtitle}>Manage your tickets and help customers efficiently</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.activeTickets}</div>
            <div className={styles.statLabel}>My Active Tickets</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.resolvedToday}</div>
            <div className={styles.statLabel}>Resolved Today</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.availableTickets}</div>
            <div className={styles.statLabel}>Available Tickets</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.avgRating}</div>
            <div className={styles.statLabel}>Avg Rating</div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Available Tickets */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Available Tickets <span className={styles.badge}>{availableTickets.length}</span>
              </h2>
              <button className={styles.filter}>{priorityFilter} <i className="fas fa-chevron-down"></i></button>
            </div>
            <div className={styles.ticketList}>
              {availableTickets.length > 0 ? (
                availableTickets.map((ticket) => (
                  <div key={ticket.id} className={styles.ticketCard}>
                    <div className={styles.ticketHeader}>
                      <a href="#" className={styles.ticketId}>{ticket.id}</a>
                      <span className={styles.ticketTime}>{ticket.timeAgo}</span>
                    </div>
                    <h3 className={styles.ticketTitle}>{ticket.title}</h3>
                    <p className={styles.ticketDescription}>{ticket.description}</p>
                    <div className={styles.ticketMeta}>
                      <div className={styles.ticketTags}>
                        <span className={`${styles.tag} ${getPriorityClass(ticket.priority)}`}>{ticket.priority}</span>
                        <span className={`${styles.tag} ${getStatusClass(ticket.status)}`}>{ticket.status}</span>
                      </div>
                      <span className={styles.customerEmail}>{ticket.customerEmail}</span>
                    </div>
                    <div className={styles.ticketActions}>
                      <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => handleAssignTicket(ticket.id)}>
                        <i className="fas fa-plus"></i> Assign Task
                      </button>
                      <button className={`${styles.button} ${styles.buttonSecondary}`} onClick={() => handleViewDetails(ticket.id)}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}><i className="fas fa-inbox"></i></div>
                  <p className={styles.emptyText}>No available tickets</p>
                </div>
              )}
            </div>
          </div>

          {/* My Tickets */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                My Tickets <span className={styles.badge}>{myTickets.length}</span>
              </h2>
              <button className={styles.filter}>{statusFilter} <i className="fas fa-chevron-down"></i></button>
            </div>
            <div className={styles.ticketList}>
              {myTickets.length > 0 ? (
                myTickets.map((ticket) => (
                  <div key={ticket.id} className={styles.ticketCard}>
                    <div className={styles.ticketHeader}>
                      <a href="#" className={styles.ticketId}>{ticket.id}</a>
                      <span className={styles.ticketTime}>{ticket.timeAgo}</span>
                    </div>
                    <h3 className={styles.ticketTitle}>{ticket.title}</h3>
                    <p className={styles.ticketDescription}>{ticket.description}</p>
                    <div className={styles.ticketMeta}>
                      <div className={styles.ticketTags}>
                        <span className={`${styles.tag} ${getPriorityClass(ticket.priority)}`}>{ticket.priority}</span>
                        <span className={`${styles.tag} ${getStatusClass(ticket.status)}`}>{ticket.status}</span>
                      </div>
                      <span className={styles.customerEmail}>{ticket.customerEmail}</span>
                    </div>
                    <div className={styles.ticketActions}>
                      <button className={`${styles.button} ${styles.buttonSuccess}`} onClick={() => handleViewDetails(ticket.id)}>
                        <i className="fas fa-eye"></i> View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}><i className="fas fa-tasks"></i></div>
                  <p className={styles.emptyText}>No assigned tickets</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;
