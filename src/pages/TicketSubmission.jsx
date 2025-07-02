import React from "react";
import classes from "./TicketSubmission.module.css";
import { IoMdArrowRoundBack, IoMdContact } from "react-icons/io";
import { LuText, LuPaperclip } from "react-icons/lu";
import { FaTicketAlt, FaEdit, FaTags, FaClock, FaLightbulb, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const TicketSubmission = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <div className={classes.headerHolder}>
            <h2>Submit a ticket</h2>
            <span>
              Get help from our support team by submitting detailed ticket
            </span>
          </div>
          <Link to={"/adminLogin"} className={classes.btnHolder}>
            <span>
              <IoMdArrowRoundBack /> Back to Dashboard
            </span>
          </Link>
        </div>
        <div className={classes.main}>
          <div className={classes.ticketInfo}>
            <h3>
              <FaTicketAlt /> Ticket Information
            </h3>
            <form onSubmit={submitHandler} className={classes.form}>
              <div className={classes.inputHolder}>
                <label htmlFor="subject">Subject</label>
                <input
                  placeholder="Enter a clear and consice object"
                  id="subject"
                  type="text"
                  required
                />
                <span>
                  Be specific about your issues {"("}e.g., "Login error in
                  mobile app"{")"}
                </span>
              </div>
              <div className={classes.catPra}>
                <div className={classes.inputHolder}>
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category">
                    <option value="category">Category</option>
                  </select>
                </div>
                <div className={classes.inputHolder}>
                  <label htmlFor="priority">Priority</label>
                  <select required name="priority" id="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className={classes.inputHolder}>
                <label htmlFor="description">Description</label>
                <textarea
                  placeholder="Describe your issues in detail. Include steps to reproduce error messages, and any releveant information."
                  id="subject"
                  type="text"
                  required
                />
                <span>
                  Provide as much detail as possible to help resolve your issue
                  quickly.
                </span>
              </div>
              <div className={classes.attach}>
                <label htmlFor="attach">Attachments</label>
                <label className={classes.imgInputBody} htmlFor="attach">
                  <span>Click to Upload</span>
                  <span>PNG, JPG, PDF, DOC up to 10MB each</span>
                </label>
                <input type="file" accept="image/*" required name="image" id="attach" />
              </div>
              <div className={classes.contactInfo}>
                <span>
                  <IoMdContact /> Contact Information
                </span>
                <div className={classes.catPra}>
                  <div className={classes.inputHolder}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      placeholder="youremail@example.com"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className={classes.inputHolder}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      placeholder="+1 (555) 123-4567"
                      id="phone"
                      type="phone"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={classes.btnContainer}><button type="submit"><FaPaperPlane/> Submit Ticket</button></div>
            </form>
          </div>
          <div className={classes.submissionGuide}>
            <h3>
              <FaLightbulb /> Submission Guidelines
            </h3>
            <div className={classes.guides}>
              <div className={classes.guide}>
                <div className={classes.icon1}>
                  <FaEdit />
                </div>
                <div className={classes.text}>
                  <span className={classes.title}>Clear Subject Line</span>
                  <span className={classes.desc}>
                    Provide a clear and consice subject that summarizes your
                    issue.
                  </span>
                </div>
              </div>
              <div className={classes.guide}>
                <div className={classes.icon2}>
                  <FaTags />
                </div>
                <div className={classes.text}>
                  <span className={classes.title}>Choose Category</span>
                  <span className={classes.desc}>
                    Select the appropriate category to help us route your ticket
                    correctly.
                  </span>
                </div>
              </div>
              <div className={classes.guide}>
                <div className={classes.icon3}>
                  <LuText />
                </div>
                <div className={classes.text}>
                  <span className={classes.title}>Detailed Description</span>
                  <span className={classes.desc}>
                    Include as much detail as possible, including steps to
                    reproduce the issue.
                  </span>
                </div>
              </div>
              <div className={classes.guide}>
                <div className={classes.icon4}>
                  <LuPaperclip />
                </div>
                <div className={classes.text}>
                  <span className={classes.title}>Attach Files</span>
                  <span className={classes.desc}>
                    Attach relevant screenshots, logs, or documents to help us
                    understand your issue.
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.btm}>
                <h3><FaClock/> Response Times</h3>
                <div className={classes.times}>
                    <div className={classes.time}>
                        <span>Critical:</span>
                        <span style={{color: "red"}}>1 hour</span>
                    </div>
                    <div className={classes.time}>
                        <span>High:</span>
                        <span style={{color: "orange"}}>4 hours</span>
                    </div>
                    <div className={classes.time}>
                        <span>Medium:</span>
                        <span style={{color: "blue"}}>24 hours</span>
                    </div>
                    <div className={classes.time}>
                        <span>Low:</span>
                        <span>48 hours</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSubmission;
