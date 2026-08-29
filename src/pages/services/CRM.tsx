import { ServicePageTemplate } from "./ServicePageTemplate";
import { heroImages, sectionImages } from "../../config/images";

export default function CRM() {
  return (
    <ServicePageTemplate
      slug="crm-solutions"
      title="CRM Solutions"
      shortTitle="CRM"
      isAcronym={true}
      heroDescription="Customer relationship management software that helps your sales, marketing, and support teams work together. We build and customize CRM platforms that fit how your business actually runs."
      heroImage={heroImages.crm}
      sectionImage={sectionImages.crmDashboard}
      sectionImageAlt="CRM dashboard showing customer analytics and sales pipeline"
      businessProblem="Your customer data lives in spreadsheets, email inboxes, and sticky notes. Sales reps lose track of follow-ups, marketing can't measure what's working, and support teams can't see what the customer already discussed with sales. Off-the-shelf CRM tools promise to fix this but come with setup complexity, customization costs, and a learning curve that leaves teams frustrated. Most CRM projects fail not because the software is bad, but because nobody owns the setup, training, and ongoing improvements."
      whatWeOwn={[
        {
          title: "System setup and customization",
          description:
            "We configure the CRM to match your sales process, marketing workflows, and customer service routines — not the other way around.",
        },
        {
          title: "Data migration",
          description:
            "We move your existing customer data from spreadsheets, legacy systems, and email tools into the new CRM cleanly and accurately.",
        },
        {
          title: "Team adoption",
          description:
            "We train your team, create usage guides, and provide ongoing support so people actually use the system instead of going back to spreadsheets.",
        },
        {
          title: "Ongoing improvements",
          description:
            "As your business grows, we add new fields, automations, and reports so the CRM keeps up with your changing needs.",
        },
      ]}
      capabilities={[
        {
          title: "Sales pipeline management",
          description:
            "Track every deal from first contact to close with visual pipelines, follow-up reminders, and revenue forecasting.",
        },
        {
          title: "Marketing automation",
          description:
            "Email campaigns, lead scoring, and nurture sequences that move prospects through your funnel without manual follow-up.",
        },
        {
          title: "Customer support tracking",
          description:
            "Ticket management, response time tracking, and customer history so your support team has full context on every conversation.",
        },
        {
          title: "Reporting and dashboards",
          description:
            "Custom dashboards showing sales performance, campaign results, and customer health — updated in real time, no manual exports.",
        },
        {
          title: "Third-party integrations",
          description:
            "Connect your CRM with email, accounting, marketing, and communication tools so data flows automatically between systems.",
        },
        {
          title: "Mobile access",
          description:
            "Your team can update deals, log calls, and check customer history from their phones — keeping CRM data current even on the road.",
        },
      ]}
      scope={[
        "CRM platform selection and licensing guidance",
        "Custom configuration matching your sales and support processes",
        "Customer data migration from existing systems",
        "Email and calendar integration",
        "Marketing automation and campaign setup",
        "Custom dashboard and report creation",
        "Team training and adoption support",
        "Ongoing configuration updates and improvements",
      ]}
      technology={[
        "Salesforce",
        "HubSpot",
        "Zoho CRM",
        "Microsoft Dynamics 365",
        "Pipedrive",
        "Freshsales",
        "SugarCRM",
        "Zendesk",
        "Intercom",
        "Mailchimp",
        "ActiveCampaign",
        "Make",
        "Zapier",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery",
          description:
            "We map your sales process, customer journey, and team workflows to design the right CRM setup.",
        },
        {
          step: "02",
          title: "Setup",
          description:
            "We configure the CRM, migrate your data, and connect it with your existing tools.",
        },
        {
          step: "03",
          title: "Training",
          description:
            "We train your team with hands-on sessions and create simple usage guides for everyday tasks.",
        },
        {
          step: "04",
          title: "Optimize",
          description:
            "After launch, we monitor usage, fix friction points, and add automations that save your team time.",
        },
      ]}
      securityPrinciples={[
        {
          title: "Data privacy compliance",
          description:
            "Customer data is handled in line with GDPR, CCPA, and your industry's privacy requirements.",
        },
        {
          title: "Role-based access",
          description:
            "Team members only see the customer data relevant to their role — no broad access by default.",
        },
        {
          title: "Audit trails",
          description:
            "Every change to customer records is logged, so you can trace who updated what and when.",
        },
        {
          title: "Secure integrations",
          description:
            "All third-party connections use encrypted authentication and are reviewed for data exposure risks.",
        },
      ]}
      faqs={[
        {
          question: "Which CRM platform should we choose?",
          answer:
            "It depends on your team size, budget, and how complex your sales process is. We help you compare options like Salesforce, HubSpot, and Zoho based on your specific needs — then set up whichever one fits best. We're platform-agnostic and recommend based on your business, not vendor partnerships.",
        },
        {
          question: "Can you move our existing customer data into the new CRM?",
          answer:
            "Yes. We migrate customer data from spreadsheets, older CRM systems, email tools, and databases. We clean and deduplicate records during migration so your new CRM starts with accurate, usable data.",
        },
        {
          question: "How long does a CRM setup take?",
          answer:
            "A typical small to mid-size CRM setup takes 4–8 weeks from discovery to team training. Larger organizations with complex integrations may take 8–12 weeks. We give you a specific timeline after the discovery phase.",
        },
        {
          question: "What if our team doesn't use the CRM after it's set up?",
          answer:
            "Adoption is the most common CRM failure. That's why we include training, simple usage guides, and follow-up sessions in every project. We also monitor usage patterns after launch and address friction points before they become habits.",
        },
        {
          question: "Do you provide ongoing support after launch?",
          answer:
            "Yes. We offer monthly support plans that cover configuration updates, new automations, additional reports, and user questions. As your business changes, your CRM should change with it.",
        },
      ]}
      seoDescription="CRM solutions: sales pipeline management, marketing automation, and customer support tracking. We set up, customize, and support CRM platforms that fit your business."
      contextualCtaLabel="Discuss CRM Setup"
    />
  );
}
