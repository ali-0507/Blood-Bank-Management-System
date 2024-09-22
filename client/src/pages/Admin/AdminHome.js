import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to our state-of-the-art Blood Bank Management System, namely RED DROP DONORS APP, designed to streamline the entire blood donation and distribution process while ensuring safety, efficiency, and compliance. Our platform offers a comprehensive solution for managing blood collection, donor registrations, testing, inventory, and distribution to hospitals and clinics. With features like real-time inventory tracking, temperature and storage condition monitoring, and barcode/QR code integration, we ensure that each blood unit is safely stored and quickly accessible when needed. The system enables seamless appointment scheduling for donors, blood donation camp management, and donor eligibility verification. It also supports advanced blood testing and quality control by recording test results, classifying blood units, and quarantining unfit units. Hospitals and clinics can easily request, reserve, and track blood units, while our distribution logistics and documentation ensure compliance with regulations. Our analytics tools provide valuable insights into donor trends, blood usage, and inventory levels, while customizable reports facilitate data-driven decisions. Communication is enhanced with automated email and SMS notifications for donation reminders, low inventory alerts, and updates for medical personnel. Optional features like mobile app development, AI-powered predictive analytics, multilingual support, and IoT integration further extend the system’s capabilities, making it a versatile and secure solution for all stakeholders.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
