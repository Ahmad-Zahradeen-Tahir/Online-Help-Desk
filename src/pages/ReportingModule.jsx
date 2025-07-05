import React from "react";
import classes from "./ReportingModule.module.css";
import catimg from "../assets/Screenshot 2025-07-04 at 21.19.53.png";
import satimg from "../assets/Screenshot 2025-07-04 at 21.20.23.png";
import agtimg from "../assets/Screenshot 2025-07-04 at 21.20.44.png";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartBar,
  FaCheckCircle,
  FaClock,
  FaFileExcel,
  FaFilter,
  FaPrint,
  FaTags,
  FaTicketAlt,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { FaChartPie } from "react-icons/fa6";
import { BsEmojiSmileFill, BsFileEarmarkPdfFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const areaData = [
    { week: 'Week 1', value: 0.5 },
    { week: 'Week 2', value: 2.1 },
    { week: 'Week 3', value: 0.8 },
  ];

const barData = [
  { month: "JAN", value: 32 },
  { month: "FEB", value: 47 },
  { month: "MAR", value: 18 },
  { month: "APR", value: 31 },
  { month: "MAY", value: 68 },
];

const donutData = [
  { name: "Resolved", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Failed", value: 15 },
];

const SmoothAreaChart =(
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#e91e63"
          fill="#f8bbd0"
          strokeWidth={2}
          dot={{ r: 4, fill: '#e91e63', stroke: '#fff', strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );

const COLORS = ["#28a745", "#f0ad4e", "#dc3545"];

const DonutChart = (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={donutData}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={120}
        dataKey="value"
        paddingAngle={3}
      >
        {donutData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" align="center" iconType="circle" />
    </PieChart>
  </ResponsiveContainer>
);

const MyBarChart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={barData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#00AEEF" barSize={40} radius={[5, 5, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

const ReportingModule = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <div className={classes.headerHolder}>
            <h2>Reporting Module</h2>
            <span>
              Comprehensive analytics and insights for support operations
            </span>
          </div>
          <span>Last Updated: {new Date().toDateString()}</span>
        </div>
        <div className={classes.firstCard}>
          <div className={classes.inputHolder}>
            <label htmlFor="dateRange">Date Range</label>
            <input id="dateRange" type="date" required />
          </div>
          <div className={classes.inputHolder}>
            <label htmlFor="to">To</label>
            <input id="to" type="date" required />
          </div>
          <div className={classes.inputHolder}>
            <label htmlFor="departments">Departments</label>
            <select name="departments" id="departments">
              <option value="all">All Departments</option>
              <option value="customerSupport">Customer Support</option>
              <option value="technicalSupport">Technical Support</option>
              <option value="billing">Billing</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <div className={classes.inputHolder}>
            <label htmlFor="statuses">Statuses</label>
            <select name="statuses" id="statuses">
              <option value="all">All Statuses</option>
              <option value="opened">Opened</option>
              <option value="In Progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <button className={classes.filterBtn}>
            <FaFilter /> Apply Filter
          </button>
        </div>
        <div className={classes.dashData}>
          <div className={classes.dashCard}>
            <div
              className={classes.iconBg}
              style={{ background: "rgba(224, 242, 254, 1)" }}
            >
              <FaTicketAlt style={{ color: "rgba(2, 132, 199, 1)" }} />
            </div>
            <div className={classes.txtHolder}>
              <span>Total Tickets</span>
              <span>248</span>
              <span style={{ color: "rgba(2, 132, 199, 1)" }}>
                <FaArrowUp /> 12% from last month
              </span>
            </div>
          </div>
          <div className={classes.dashCard}>
            <div
              className={classes.iconBg}
              style={{ background: "rgba(220, 252, 231, 1)" }}
            >
              <FaCheckCircle style={{ color: "rgba(22, 163, 74, 1)" }} />
            </div>
            <div className={classes.txtHolder}>
              <span>Resolved</span>
              <span>142</span>
              <span style={{ color: "rgba(2, 132, 199, 1)" }}>
                <FaArrowUp /> 8% from last month
              </span>
            </div>
          </div>
          <div className={classes.dashCard}>
            <div
              className={classes.iconBg}
              style={{ background: "rgba(254, 249, 195, 1)" }}
            >
              <FaClock style={{ color: "rgba(202, 138, 4, 1)" }} />
            </div>
            <div className={classes.txtHolder}>
              <span>Pending</span>
              <span>65</span>
              <span style={{ color: "rgba(202, 138, 4, 1)" }}>
                <GoDash /> same as the last month
              </span>
            </div>
          </div>
          <div className={classes.dashCard}>
            <div
              className={classes.iconBg}
              style={{ background: "rgba(254, 226, 226, 1)" }}
            >
              <MdCancel style={{ color: "rgba(220, 38, 38, 1)" }} />
            </div>
            <div className={classes.txtHolder}>
              <span>Failed</span>
              <span>41</span>
              <span style={{ color: "rgba(220, 38, 38, 1)" }}>
                <FaArrowDown /> 5% from last month
              </span>
            </div>
          </div>
        </div>
        <div className={classes.volRes}>
          <div className={classes.volResCard}>
            <h3>
              <FaChartBar /> Monthly Ticket Volume
            </h3>
            <div className={classes.chartContainer}>{MyBarChart}</div>
          </div>
          <div className={classes.volResCard}>
            <h3>
              <FaChartPie /> Resolutions
            </h3>
            <div className={classes.chartContainer}>{DonutChart}</div>
          </div>
        </div>
        <div className={classes.graphCard}>
          <h3>
            <FaClock /> Response Time
          </h3>
          <div className={classes.chartContainer}>{SmoothAreaChart}</div>
        </div>
        <div className={classes.volRes}>
          <div style={{ height: "15rem" }} className={classes.volResCard}>
            <h3>
              <FaTags /> Ticket Categories
            </h3>
            <div className={classes.chartContainer}>
              <img src={catimg} alt="" />
            </div>
          </div>
          <div style={{ height: "15rem" }} className={classes.volResCard}>
            <h3>
              <BsEmojiSmileFill /> Customer Satisfaction
            </h3>
            <div className={classes.chartContainer}>
              <img src={satimg} alt="" />
            </div>
          </div>
          <div style={{ height: "15rem" }} className={classes.volResCard}>
            <h3>
              <HiUsers /> Top Performing Agents
            </h3>
            <div className={classes.chartContainer}>
              <img src={agtimg} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.exp}>
          <div className={classes.expL}>
            <button>
              <BsFileEarmarkPdfFill style={{ color: "red" }} /> Export as PDF
            </button>
            <button>
              <FaFileExcel style={{ color: "green" }} /> Export as Excel
            </button>
            <button>
              <FaPrint style={{ color: "rgba(71, 85, 105, 1)" }} /> Print Report
            </button>
          </div>
          <Link to="/agentDashboard" className={classes.backBtn}>
            <IoArrowBackSharp /> Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReportingModule;
