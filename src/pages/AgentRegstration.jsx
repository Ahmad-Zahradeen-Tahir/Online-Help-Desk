"use client"

import React, { useState } from "react"
import styles from "./AgentRegistration.module.css"
import { Link } from "react-router-dom"

const AgentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    preferredAgentId: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.category) {
      newErrors.category = "Please select a category"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Registration submitted successfully!")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <h1 className={styles.title}>Agent Registration</h1>
        <p className={styles.subtitle}>Join our support team and help customers succeed</p>
      </div>

      <div className={styles.sectionLabel}>Personal Information</div>

      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <svg className={styles.formIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          New Agent Registration
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>
                First Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}
              />
              {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                Last Name <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className={`${styles.input} ${styles.inputWithIcon} ${errors.lastName ? styles.inputError : ""}`}
                />
              </div>
              {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  className={`${styles.input} ${styles.inputWithIcon} ${errors.email ? styles.inputError : ""}`}
                />
              </div>
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className={`${styles.input} ${styles.inputWithIcon} ${errors.phone ? styles.inputError : ""}`}
                />
              </div>
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`${styles.select} ${errors.category ? styles.inputError : ""}`}
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Support</option>
                <option value="general">General Support</option>
                <option value="sales">Sales Support</option>
              </select>
              {errors.category && <span className={styles.errorText}>{errors.category}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Preferred Agent ID</label>
              <div className={styles.inputContainer}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <input
                  type="text"
                  name="preferredAgentId"
                  value={formData.preferredAgentId}
                  onChange={handleInputChange}
                  placeholder="AGT001 (auto-generated if empty)"
                  className={`${styles.input} ${styles.inputWithIcon}`}
                />
              </div>
              <div className={styles.helperText}>Leave empty for auto-generation</div>
            </div>
          </div>
          <Link  to="/agentLogin">
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AgentRegistration
