"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/styles.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"code" | "publish" | "diagram">("code");

  const tabContent: Record<"code" | "publish" | "diagram", { title: string; text: string; image: string; }> = {
    code: {
      title: "Ops Teams Write IaC",
      text: "DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.\n\nYour IaC is no longer just config, it's a functional software asset. Policy and cost tools are embedded, cutting down maintenance for Ops teams.",
      image: "/images/publish.png"
    },
    publish: {
      title: "Publishing Infrastructure",
      text: "Teams can publish infrastructure modules with built-in governance and security best practices, ensuring deployment consistency and compliance.",
      image: "/images/code.png"
    },
    diagram: {
      title: "Visualizing Infrastructure",
      text: "Gain full visibility into your infrastructure through interactive diagrams that showcase dependencies and real-time status updates.",
      image: "/images/diagram.png"
    }
  };

  return (
    <div className="page-wrapper">
      {/* Alert Banner */}
      <div className="alert-banner">
        <p>
          Take a look at our latest blog post! <Link href="#" className="alert-link">The Case for Abstractions in IaC</Link>
        </p>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content container">
          <div className="logo">
          <Image 
  src="/logo.jpg" 
  width={50} 
  height={25} 
  alt="Massdriver Logo" 
  className="logo-img" 
  layout="intrinsic"
/>            <span className="logo-text">massdriver</span>
          </div>
          <nav className="nav">
            <button className="menu-toggle" aria-label="Toggle navigation">☰</button>
            <div className="nav-links">
              <Link href="#features" className="nav-link">Features</Link>
              <Link href="#solutions" className="nav-link">Solutions</Link>
              <Link href="#pricing" className="nav-link">Pricing</Link>
              <Link href="#blog" className="nav-link">Blog</Link>
              <Link href="#docs" className="nav-link">Docs</Link>
              <Link href="#community" className="nav-link">Community</Link>
            </div>
          </nav>
          <div className="auth-buttons">
            <Link href="#signin" className="signin-link">Sign In</Link>
            <button className="gradient-button">Try Free →</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <h1 className="hero-title">DevOps Without the Red Tape</h1>
        <p className="hero-text">
          At Massdriver, we believe in prevention, not permission&rdquo;. Our platform lets &ldquo;ops&rdquo; teams encode their expertise and your organization’s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know.
        </p>
        <p className="hero-subtext">Massdriver—Fast by default. Safe by design.</p>
        <div className="hero-buttons">
          <button className="outline-button">See a demo</button>
          <button className="gradient-button">Start free trial →</button>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How it Works</h2>
          <div className="tab-buttons">
            <button className={activeTab === "code" ? "active" : ""} onClick={() => setActiveTab("code")}>1. Code</button>
            <button className={activeTab === "publish" ? "active" : ""} onClick={() => setActiveTab("publish")}>2. Publish</button>
            <button className={activeTab === "diagram" ? "active" : ""} onClick={() => setActiveTab("diagram")}>3. Diagram</button>
          </div>
          <div className="tab-content">
            <div className="tab-text" style={{ marginRight: "40px" }}>
              <h3>{tabContent[activeTab].title}</h3>
              <p>{tabContent[activeTab].text}</p>
            </div>
            <div className="tab-image">
              <Image src={tabContent[activeTab].image} width={500} height={300} alt={tabContent[activeTab].title} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Button Floating */}
      <button className="floating-contact-button" aria-label="Contact">
        💬
      </button>
    </div>
  );
}
