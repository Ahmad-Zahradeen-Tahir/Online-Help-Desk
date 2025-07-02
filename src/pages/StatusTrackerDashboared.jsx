// StatusTrackerDashboard.jsx
import React from 'react';
import styles from './StatusTrackerDashboard.module.css';


const StatusTrackerDashboard = () => {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.mainTitle}>Status Tracker</h1>
                    <p className={styles.subtitle}>Track and manage ticket progress across different stages</p>
                </div>
                <div className={styles.totalTickets}>
                    <span className={styles.totalTicketsLabel}>Total Tickets:</span>
                    <span className={styles.totalTicketsCount}>6</span>
                </div>
            </div>

            {/* Kanban Board */}
            <div className={styles.kanbanBoard}>
                {/* Open Column */}
                <div className={styles.kanbanColumn}>
                    <div className={styles.columnWrapper}>
                        <div className={`${styles.columnHeader} ${styles.openHeader}`}>
                            <div className={styles.columnTitleContainer}>
                                <h2 className={styles.columnTitle}>
                                    <i className="fas fa-exclamation-circle"></i>
                                    Open
                                </h2>
                                <span className={styles.ticketCount}>2</span>
                            </div>
                        </div>
                        <div className={styles.ticketList}>
                            {/* Ticket 1 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Issue with login')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.openTicketId}`}>
                                        #001
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.highPriority}`}></div>
                                        <span className={styles.priorityText}>High</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Issue with login</h3>
                                <p className={styles.ticketDescription}>User unable to access their account</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>John Doe</span>
                                    </div>
                                    <span className={styles.ticketTime}>2 hours ago</span>
                                </div>
                            </div>

                            {/* Ticket 2 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Payment not processed')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.openTicketId}`}>
                                        #002
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.mediumPriority}`}></div>
                                        <span className={styles.priorityText}>Medium</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Payment not processed</h3>
                                <p className={styles.ticketDescription}>Transaction failed during checkout</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>Jane Smith</span>
                                    </div>
                                    <span className={styles.ticketTime}>4 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* In Progress Column */}
                <div className={styles.kanbanColumn}>
                    <div className={styles.columnWrapper}>
                        <div className={`${styles.columnHeader} ${styles.inProgressHeader}`}>
                            <div className={styles.columnTitleContainer}>
                                <h2 className={styles.columnTitle}>
                                    <i className="fas fa-clock"></i>
                                    In Progress
                                </h2>
                                <span className={styles.ticketCount}>2</span>
                            </div>
                        </div>
                        <div className={styles.ticketList}>
                            {/* Ticket 3 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Feature request')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.inProgressTicketId}`}>
                                        #003
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.lowPriority}`}></div>
                                        <span className={styles.priorityText}>Low</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Feature request</h3>
                                <p className={styles.ticketDescription}>Request for dark mode implementation</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>Mike Johnson</span>
                                    </div>
                                    <span className={styles.ticketTime}>1 day ago</span>
                                </div>
                            </div>

                            {/* Ticket 4 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Bug in the dashboard')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.inProgressTicketId}`}>
                                        #004
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.mediumPriority}`}></div>
                                        <span className={styles.priorityText}>Medium</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Bug in the dashboard</h3>
                                <p className={styles.ticketDescription}>Charts not loading properly on mobile</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>Sarah Wilson</span>
                                    </div>
                                    <span className={styles.ticketTime}>6 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resolved Column */}
                <div className={styles.kanbanColumn}>
                    <div className={styles.columnWrapper}>
                        <div className={`${styles.columnHeader} ${styles.resolvedHeader}`}>
                            <div className={styles.columnTitleContainer}>
                                <h2 className={styles.columnTitle}>
                                    <i className="fas fa-check-circle"></i>
                                    Resolved
                                </h2>
                                <span className={styles.ticketCount}>2</span>
                            </div>
                        </div>
                        <div className={styles.ticketList}>
                            {/* Ticket 5 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Password reset issue')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.resolvedTicketId}`}>
                                        #005
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.highPriority}`}></div>
                                        <span className={styles.priorityText}>High</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Password reset issue</h3>
                                <p className={styles.ticketDescription}>Email not being sent to users</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>Alex Brown</span>
                                    </div>
                                    <span className={styles.ticketTime}>2 days ago</span>
                                </div>
                            </div>

                            {/* Ticket 6 */}
                            <div className={styles.ticketCard} onClick={() => console.log('Ticket clicked: Account verification email')}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.ticketId} ${styles.resolvedTicketId}`}>
                                        #006
                                    </span>
                                    <div className={styles.priority}>
                                        <div className={`${styles.priorityDot} ${styles.lowPriority}`}></div>
                                        <span className={styles.priorityText}>Low</span>
                                    </div>
                                </div>
                                <h3 className={styles.ticketTitle}>Account verification email</h3>
                                <p className={styles.ticketDescription}>Update email template design</p>
                                <div className={styles.ticketFooter}>
                                    <div className={styles.assignee}>
                                        <img src="/placeholder.svg?height=24&width=24" alt="Assignee" className={styles.assigneeAvatar} />
                                        <span className={styles.assigneeName}>Emma Davis</span>
                                    </div>
                                    <span className={styles.ticketTime}>3 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
                <button className={styles.primaryButton} onClick={() => alert('Add new ticket functionality would be implemented here')}>
                    <i className="fas fa-plus"></i>
                    Add Ticket
                </button>
            </div>
        </div>
    );
};

export default StatusTrackerDashboard;