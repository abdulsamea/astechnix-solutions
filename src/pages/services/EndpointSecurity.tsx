import { ServicePageTemplate } from "./ServicePageTemplate";
import { heroImages, sectionImages } from "../../config/images";

export default function EndpointSecurity() {
  return (
    <ServicePageTemplate
      slug="security-compliance-ip-protection"
      title="Endpoint Security"
      shortTitle="Endpoint Security"
      heroDescription="We secure your workstations and mobile assets with advanced threat protection, behavioral monitoring, endpoint detection and response, and rigorous compliance enforcement."
      heroImage={heroImages.managedIT}
      sectionImage={sectionImages.dataCenter}
      sectionImageAlt="Cybersecurity monitoring screen and threat defense"
      businessProblem="Modern organizations face sophisticated malware, ransomware, and phishing threats targeting employee endpoints. Traditional antivirus tools are no longer sufficient to detect zero day exploits or fileless attacks. Internal teams often lack the capacity to monitor real time security alerts 24 hours a day, leaving gaps where unauthorized access or malicious payloads can compromise corporate data."
      whatWeOwn={[
        {
          title: "Threat detection and defense",
          description:
            "We deploy and manage next generation protection tools to intercept malware and malicious activity before execution.",
        },
        {
          title: "Incident containment",
          description:
            "When suspicious endpoint behavior occurs, we take immediate action to isolate infected devices from the corporate network.",
        },
        {
          title: "Security posture monitoring",
          description:
            "Continuous oversight of endpoint security health, compliance metrics, and agent status across the entire fleet.",
        },
        {
          title: "Policy enforcement",
          description:
            "Consistent application of security rules, firewall configurations, and access restrictions across all workstations.",
        },
      ]}
      capabilities={[
        {
          title: "EDR administration",
          description:
            "Deploying and managing Endpoint Detection and Response agents to track process execution and behavioral anomalies.",
        },
        {
          title: "Ransomware protection",
          description:
            "Behavioral analysis and automated rollback capabilities to neutralize ransomware attempts instantly.",
        },
        {
          title: "Vulnerability remediation",
          description:
            "Identifying and patching vulnerable operating system components and third party applications on endpoints.",
        },
        {
          title: "Device isolation protocols",
          description:
            "Instantly disconnecting compromised systems from the network while preserving forensic evidence.",
        },
        {
          title: "Firewall management",
          description:
            "Centralized configuration and monitoring of host-based firewalls to block unauthorized inbound and outbound traffic.",
        },
        {
          title: "Security event reporting",
          description:
            "Regular logging and reporting of intercepted threats, security events, and posture compliance scores.",
        },
      ]}
      scope={[
        "Next-generation antivirus and EDR agent deployment",
        "24/7 threat monitoring and alert triaging",
        "Instant endpoint isolation for compromised devices",
        "Host-based firewall and attack surface reduction rules",
        "Third-party application vulnerability patching",
        "USB and external storage access control policies",
        "Monthly endpoint security and threat posture reports",
        "Incident investigation and root cause summaries",
      ]}
      technology={[
        "CrowdStrike",
        "Microsoft Defender for Endpoint",
        "SentinelOne",
        "Intune",
        "Sysmon",
        "Elastic Security",
        "SIEM Tools",
      ]}
      process={[
        {
          step: "01",
          title: "Assess",
          description:
            "Evaluate existing endpoint defenses, security gaps, and visibility blind spots.",
        },
        {
          step: "02",
          title: "Deploy",
          description:
            "Install unified EDR and advanced protection agents across all workstations.",
        },
        {
          step: "03",
          title: "Configure",
          description:
            "Establish strict security policies, behavioral rules, and automated isolation protocols.",
        },
        {
          step: "04",
          title: "Monitor",
          description:
            "Continuous surveillance of endpoint telemetry, threat alerts, and anomaly detection.",
        },
        {
          step: "05",
          title: "Respond",
          description:
            "Immediate triage, containment, and remediation when security alerts are triggered.",
        },
      ]}
      securityPrinciples={[
        {
          title: "Defense in depth",
          description:
            "Layered security controls combining prevention, detection, behavioral analysis, and rapid containment.",
        },
        {
          title: "Zero trust principles",
          description:
            "Continuously verifying device trust and posture before granting access to internal applications.",
        },
        {
          title: "Automated containment",
          description:
            "Configuring automated isolation rules to stop lateral movement during active cyber attacks.",
        },
        {
          title: "Encrypted telemetry",
          description:
            "All security logs and endpoint data encrypted securely in transit and at rest.",
        },
      ]}
      faqs={[
        {
          question: "How quickly do you respond to critical security alerts?",
          answer:
            "Critical endpoint alerts are triaged immediately with automated or manual isolation protocols executed within minutes.",
        },
        {
          question: "Does EDR slow down employee workstations?",
          answer:
            "Modern lightweight EDR agents operate quietly in the background with minimal CPU and memory impact.",
        },
        {
          question: "Can you block unauthorized USB drives and peripherals?",
          answer:
            "Yes. We configure device control policies to restrict unauthorized USB storage media and untrusted peripherals.",
        },
        {
          question: "What happens if an endpoint is infected while offline?",
          answer:
            "Agents enforce local protection policies immediately and sync telemetry logs back to the monitoring center once reconnected.",
        },
        {
          question: "Do you provide regulatory compliance reporting?",
          answer:
            "Yes. We provide documentation and reports confirming endpoint security controls for frameworks like ISO 27001 and SOC 2.",
        },
      ]}
      seoDescription="Managed endpoint security services: EDR deployment, 24/7 threat monitoring, ransomware protection, and device isolation for business workstations."
      contextualCtaLabel="Discuss Endpoint Security"
    />
  );
}
