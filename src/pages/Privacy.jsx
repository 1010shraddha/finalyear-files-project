import '../style/privacy.css';
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, User, Lock, FileText, Mail, CreditCard, Star } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="privacy-header"
      >
        <h1>Privacy Policy</h1>
        <p>Effective Date: February 9, 2025</p>
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="privacy-section"
        >
          <div className="privacy-title">
            <section.icon className="text-blue-500 w-6 h-6" />
            {section.title}
          </div>
          <p>{section.content}</p>
          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Sections Data (Updated)
const sections = [
  {
    title: "Introduction",
    content:
      "Welcome to Shrinath Furnitures! We are committed to protecting your privacy and ensuring your data is handled securely.",
    icon: ShieldCheck,
  },
  {
    title: "Information We Collect",
    content: "We collect the following types of information:",
    list: [
      "Personal Data: Name, email, phone number, billing/shipping address.",
      "Non-Personal Data: IP address, browser type, device information.",
      
    ],
    icon: User,
  },
  {
    title: "How We Use Your Information",
    content: "We use your data to improve our services and provide a better experience.",
    list: [
      "Processing orders and customer support.",
      "Improving website performance and services.",
      "Sending promotional offers (opt-out anytime).",
      "Preventing fraud and ensuring security.",
    ],
    icon: FileText,
  },
  {
    title: "User Account & Registration",
    content:
      "When you create an account with us, we store your username, email, and password in a secure environment. We recommend using a strong password to protect your account.",
    icon: User,
  },
  {
    title: "Payment Information Handling",
    content:
      "All payment transactions are processed through secure third-party payment gateways. We do not store your card details on our servers.",
    icon: CreditCard,
  },
  {
    title: "Customer Reviews & Testimonials",
    content:
      "By submitting a review or testimonial, you grant us permission to display it on our website and promotional materials.",
    icon: Star,
  },
  {
    title: "Data Security",
    content:
      "We implement security measures to protect your data, but no method is 100% secure.",
    icon: Lock,
  },
  {
    title: "Contact Us",
    content: (
      <>
        For privacy-related inquiries, contact us at{" "}
        <span className="highlight-email">arvindh12@gmail.com</span>.
      </>
    ),
    icon: Mail,
  },
  
];

export default PrivacyPolicy;
