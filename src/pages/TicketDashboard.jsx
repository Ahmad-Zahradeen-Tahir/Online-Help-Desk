"use client";

import React, { useState, useMemo } from "react";
import styles from "./TicketDashboard.module.css";

const TicketDashboard = () => {
  const [tickets, setTickets] = useState([
    {
      id: "#001",
      subject: "Issue with login",
      description: "User unable to access account",
      status: "Open",
      priority: "High",
      createdDate: "2024-01-15",
    },
    {
      id: "#002",
      subject: "Payment not processed",
      description: "Transaction failed during checkout",
      status: "In Progress",
      priority: "Medium",
      assignee: {
        name: "John Doe",
        initials: "JD",
      },
      createdDate: "2024-01-14",
    },
    {
      id: "#003",
      subject: "Feature request",
      description: "Request for dark mode implementation",
      status: "Closed",
      priority: "Low",
      createdDate: "2024-01-13",
    },
  ]);

  const [filters, setFilters] = useState({
    status: "All Statuses",
    priority: "All Priorities",
    date: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [activeNav, setActiveNav] = useState("Dashboard");

  const itemsPerPage = 10;

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const statusMatch =
        filters.status === "All Statuses" || ticket.status === filters.status;
      const priorityMatch =
        filters.priority === "All Priorities" ||
        ticket.priority === filters.priority;
      const dateMatch = !filters.date || ticket.createdDate === filters.date;

      return statusMatch && priorityMatch && dateMatch;
    });
  }, [tickets, filters]);

  const paginatedTickets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTickets.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTickets, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1);
  };

  const handleAction = (action, ticketId) => {
    console.log(`${action} action for ticket ${ticketId}`);

    if (action === "assign" || action === "reassign") {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketId
            ? {
                ...ticket,
                assignee: ticket.assignee
                  ? undefined
                  : { name: "Sarah Agent", initials: "SA" },
                status: ticket.assignee ? ticket.status : "In Progress",
              }
            : ticket
        )
      );
    }

    if (action === "close") {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: "Closed" } : ticket
        )
      );
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return styles.statusOpen;
      case "In Progress":
        return styles.statusInProgress;
      case "Closed":
        return styles.statusClosed;
      default:
        return styles.statusOpen;
    }
  };

  const getStatusDotClass = (status) => {
    switch (status) {
      case "Open":
        return styles.statusDotOpen;
      case "In Progress":
        return styles.statusDotInProgress;
      case "Closed":
        return styles.statusDotClosed;
      default:
        return styles.statusDotOpen;
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return styles.priorityHigh;
      case "Medium":
        return styles.priorityMedium;
      case "Low":
        return styles.priorityLow;
      default:
        return styles.priorityMedium;
    }
  };

  const navItems = [
    { name: "Dashboard", icon: "fas fa-tachometer-alt" },
    { name: "Tickets", icon: "fas fa-ticket-alt" },
    { name: "Reports", icon: "fas fa-chart-bar" },
    { name: "Users", icon: "fas fa-users" },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h1 className={styles.sidebarTitle}>Dashboard</h1>
        <nav>
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <a
                  href="#"
                  className={`${styles.navLink} ${activeNav === item.name ? styles.active : ""}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveNav(item.name)
                  }}
                >
                  <i className={`${item.icon} ${styles.navIcon}`}></i>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Ticket Management</h1>
          <p className={styles.subtitle}>Manage and track support tickets efficiently</p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Status</label>
            <select
              className={styles.filterSelect}
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Date</label>
            <input
              type="date"
              className={styles.filterInput}
              value={filters.date}
              onChange={(e) => handleFilterChange("date", e.target.value)}
              placeholder="mm/dd/yyyy"
            />
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Priority</label>
            <select
              className={styles.filterSelect}
              value={filters.priority}
              onChange={(e) => handleFilterChange("priority", e.target.value)}
            >
              <option value="All Priorities">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <button className={styles.filterButton}>
            <i className="fas fa-filter"></i>
            Filter
          </button>
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th className={styles.tableHeaderCell}>Ticket ID</th>
                <th className={styles.tableHeaderCell}>Subject</th>
                <th className={styles.tableHeaderCell}>Status</th>
                <th className={styles.tableHeaderCell}>Priority</th>
                <th className={styles.tableHeaderCell}>Assignee</th>
                <th className={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTickets.map((ticket) => (
                <tr key={ticket.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.ticketId}>{ticket.id}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.ticketSubject}>{ticket.subject}</div>
                    <div className={styles.ticketDescription}>{ticket.description}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.statusBadge} ${getStatusClass(ticket.status)}`}>
                      <div className={`${styles.statusDot} ${getStatusDotClass(ticket.status)}`}></div>
                      {ticket.status}
                    </span>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.priorityBadge} ${getPriorityClass(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.assignee}>
                      <div className={`${styles.assigneeAvatar} ${!ticket.assignee ? styles.assigneeUnassigned : ""}`}>
                        {ticket.assignee?.initials || "U"}
                      </div>
                      <span className={styles.assigneeName}>{ticket.assignee?.name || "Unassigned"}</span>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.actions}>
                      <button
                        className={`${styles.actionButton} ${styles.actionView}`}
                        onClick={() => handleAction("view", ticket.id)}
                      >
                        <i className="fas fa-eye"></i>
                        View
                      </button>
                      <button
                        className={`${styles.actionButton} ${styles.actionAssign}`}
                        onClick={() => handleAction(ticket.assignee ? "reassign" : "assign", ticket.id)}
                      >
                        <i className="fas fa-user-edit"></i>
                        {ticket.assignee ? "Reassign" : "Assign"}
                      </button>
                      <button
                        className={`${styles.actionButton} ${styles.actionUpdate}`}
                        onClick={() => handleAction("update", ticket.id)}
                      >
                        <i className="fas fa-edit"></i>
                        Update
                      </button>
                      <button
                        className={`${styles.actionButton} ${styles.actionClose}`}
                        onClick={() => handleAction("close", ticket.id)}
                        disabled={ticket.status === "Closed"}
                      >
                        <i className="fas fa-times"></i>
                        Close
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className={styles.pagination}>
            <div className={styles.paginationInfo}>
              Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredTickets.length)} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredTickets.length)} of {filteredTickets.length} results
            </div>
            <div className={styles.paginationControls}>
              <button
                className={styles.paginationButton}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`${styles.paginationButton} ${page === currentPage ? styles.active : ""}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className={styles.paginationButton}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TicketDashboard
