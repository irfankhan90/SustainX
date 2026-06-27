import React from "react";

export interface FeatureCard {
  title: string;
  desc: string;
  iconName: string;
}

export interface ServiceCard {
  title: string;
  desc: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface CaseStudy {
  name: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SolutionData {
  slug: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  image: string;
  overview: string;
  whyChooseUs: FeatureCard[];
  services: ServiceCard[];
  process: ProcessStep[];
  industries: string[];
  benefits: FeatureCard[];
  stats: StatItem[];
  caseStudies: CaseStudy[];
  faqs: FAQItem[];
  metaTitle: string;
  metaDesc: string;
  keywords: string;
}

export const SOLUTIONS: Record<string, SolutionData> = {
  "strategic-advisory": {
    slug: "strategic-advisory",
    badge: "STRATEGIC ADVISORY",
    heroTitle: "Strategic Advisory for",
    heroHighlight: "a Sustainable Future",
    description: "We help organizations navigate the energy transition, strengthen ESG performance, reduce carbon emissions, and unlock long-term sustainable growth through data-driven strategies and global expertise.",
    image: "/sustainx_advisory.png",
    overview: "SustainX Strategic Advisory bridges the gap between vision and action. We guide corporations, utilities, and governments through complex energy transitions, enabling them to meet compliance mandates, reduce ESG risk, and identify high-yield investment options. By combining quantitative asset engineering with regulatory foresight, we build robust transformation frameworks.",
    metaTitle: "Strategic Advisory — Sustainable Business Transformation | SustainX",
    metaDesc: "Navigate energy transitions and ESG compliance with SustainX. Learn about our Net-Zero blueprints, carbon strategies, and risk feasibility models.",
    keywords: "decarbonization strategy, ESG advisory, Net-Zero roadmap, clean energy feasibility, carbon accounting compliance",
    whyChooseUs: [
      {
        title: "Strategic Insight",
        desc: "Data-driven insights to shape sustainable and resilient business strategies.",
        iconName: "strategic-insight"
      },
      {
        title: "ESG Excellence",
        desc: "Strengthen ESG performance with global frameworks and best practices.",
        iconName: "esg-excellence"
      },
      {
        title: "Decarbonization",
        desc: "Develop carbon reduction roadmaps aligned with Net-Zero goals.",
        iconName: "decarbonization"
      },
      {
        title: "Risk & Opportunity",
        desc: "Identify risks and unlock new opportunities in a changing energy landscape.",
        iconName: "risk-opportunity"
      },
      {
        title: "Global Expertise",
        desc: "Leverage international experience and cross-sector knowledge.",
        iconName: "global-expertise"
      },
      {
        title: "Sustainable Impact",
        desc: "Drive measurable impact for businesses, communities and the planet.",
        iconName: "sustainable-impact"
      }
    ],
    services: [
      {
        title: "Sustainability Strategy",
        desc: "Build long-term sustainability strategies aligned with your business vision.",
        iconName: "sustainability-strategy"
      },
      {
        title: "ESG Advisory",
        desc: "Enhance ESG performance and ensure regulatory compliance.",
        iconName: "esg-advisory"
      },
      {
        title: "Decarbonization Roadmap",
        desc: "Science-based roadmap towards Net-Zero and low-carbon future.",
        iconName: "decarbonization-roadmap"
      },
      {
        title: "Energy Transition Planning",
        desc: "Plan and integrate renewable energy for a resilient and clean energy future.",
        iconName: "energy-transition-planning"
      },
      {
        title: "Climate Risk Assessment",
        desc: "Assess climate-related risks and build resilience for sustainable growth.",
        iconName: "climate-risk-assessment"
      },
      {
        title: "Net-Zero Consulting",
        desc: "End-to-end support for your Net-Zero journey and sustainability reporting.",
        iconName: "net-zero-consulting"
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Discovery & Footprint Audit",
        desc: "Quantify current Scope 1–3 carbon emissions and identify compliance risks.",
        iconName: "search"
      },
      {
        step: "Step 2",
        title: "Yield & Cost Simulation",
        desc: "Model grid access capacity, solar/wind resource potential, and transition costs.",
        iconName: "cpu"
      },
      {
        step: "Step 3",
        title: "Roadmap Formulation",
        desc: "Draft a phased timeline mapping out capital deployment and decarbonization steps.",
        iconName: "map"
      },
      {
        step: "Step 4",
        title: "Policy & Integration",
        desc: "Establish reporting workflows, governance standards, and operational tools.",
        iconName: "adjustments"
      },
      {
        step: "Step 5",
        title: "Review & Performance Audit",
        desc: "Conduct annual audits to track offset efficacy and adjust for emerging technologies.",
        iconName: "check"
      }
    ],
    industries: [
      "Energy Utilities",
      "Heavy Manufacturing",
      "Commercial Real Estate",
      "Global Logistics",
      "Financial Institutions"
    ],
    benefits: [
      {
        title: "Mitigate Compliance Risks",
        desc: "Avoid severe regulatory penalties and audit failures via proactive ESG disclosures.",
        iconName: "check-circle"
      },
      {
        title: "Unlock Green Capital",
        desc: "Attract impact investors by certifying projects to international green financing standards.",
        iconName: "currency"
      },
      {
        title: "Cost & Waste Minimization",
        desc: "Lower utility expenses by identifying grid efficiency losses and energy leaks.",
        iconName: "trending-down"
      }
    ],
    stats: [
      { value: "150+", label: "Projects Advised" },
      { value: "18", label: "Countries Served" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "1.2M", label: "Tons CO₂ Reduced" },
      { value: "2.4 GW", label: "Energy Managed" }
    ],
    caseStudies: [
      {
        name: "Global Cement Manufacturer Decarbonization",
        industry: "Heavy Manufacturing",
        challenge: "High Scope 1 emissions risking $5M annually in carbon tax penalties.",
        solution: "Structured a waste heat recovery program and a transition roadmap to low-carbon fuels.",
        outcome: "Emissions fell by 35% over 3 years, eliminating compliance penalties entirely."
      },
      {
        name: "Commercial RE Portfolio CSRD Readiness",
        industry: "Commercial Real Estate",
        challenge: "Fragmented utility data across 80 retail properties delaying ESG filings.",
        solution: "Implemented automated telemetry trackers and unified Scope 2 accounting protocols.",
        outcome: "Achieved audit-ready status in 6 months, securing green bond financing."
      }
    ],
    faqs: [
      {
        question: "How does SustainX align strategies with global standards?",
        answer: "We structure Net-Zero roadmaps in accordance with the Science Based Targets initiative (SBTi), the Greenhouse Gas Protocol (GHG), and regional directives such as CSRD and SEC frameworks."
      },
      {
        question: "What modeling software is used for resource planning?",
        answer: "Our team uses PVsyst, HOMER Energy, and advanced machine learning models to simulate solar irradiance, wind profiles, and microgrid loads."
      }
    ]
  },
  "project-management": {
    slug: "project-management",
    badge: "PROJECT MANAGEMENT",
    heroTitle: "End-to-End Project Management for",
    heroHighlight: "Sustainable Infrastructure",
    description: "We deliver comprehensive project management consultancy (PMC) services, enforcing strict schedule baselines, optimizing site logistics, and mitigating risk on utility-scale renewable energy assets.",
    image: "/sustainx_pm.png",
    overview: "SustainX provides world-class Project Management Consultancy (PMC) services for green infrastructure. We bridge the gap between engineering plans and physical realization, managing contractors, budgets, and grid interconnection timelines. By enforcing strict quality protocols and safety parameters, we deliver assets that perform reliably over their multi-decade lifecycles.",
    metaTitle: "Project Management — Sustainable Infrastructure PMC | SustainX",
    metaDesc: "De-risk clean energy developments. Learn about SustainX PMC services, project execution models, and scheduling controls.",
    keywords: "project management consultancy, renewable energy construction, grid interconnection tracking, clean tech PMC",
    whyChooseUs: [
      {
        title: "Schedule Control",
        desc: "Enforce project critical paths and ensure timely milestone completion.",
        iconName: "strategic-insight"
      },
      {
        title: "PMC Oversight",
        desc: "Deploy experienced project management consultants to manage developers and builders.",
        iconName: "esg-excellence"
      },
      {
        title: "Quality Assurance",
        desc: "Rigorous civil and electrical site inspections to meet engineering standards.",
        iconName: "decarbonization"
      },
      {
        title: "Risk Mitigation",
        desc: "Early detection of supply chain bottlenecks and geotechnical challenges.",
        iconName: "risk-opportunity"
      },
      {
        title: "Resource Optimization",
        desc: "Efficient labor coordination and high-efficiency material logistics.",
        iconName: "global-expertise"
      },
      {
        title: "Budget Integrity",
        desc: "Contract audits and cost controls to prevent variance leaks.",
        iconName: "sustainable-impact"
      }
    ],
    services: [
      {
        title: "Project Planning",
        desc: "Detailed work breakdown structures, logistics blueprints, and scheduling.",
        iconName: "sustainability-strategy"
      },
      {
        title: "PMC Site Supervision",
        desc: "Daily on-site manager presence representing the developer's interests.",
        iconName: "esg-advisory"
      },
      {
        title: "Quality Inspections",
        desc: "Testing concrete compaction, torque settings, and cable insulation.",
        iconName: "decarbonization-roadmap"
      },
      {
        title: "Risk Analysis",
        desc: "Continuous evaluation of weather, permits, and supply chain delays.",
        iconName: "energy-transition-planning"
      },
      {
        title: "Budget Control",
        desc: "Ensuring builder billing aligns strictly with actual material delivery.",
        iconName: "climate-risk-assessment"
      },
      {
        title: "Contract Mediation",
        desc: "Objective technical dispute resolution and SLA enforcement.",
        iconName: "net-zero-consulting"
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Scope & Bid Alignment",
        desc: "Establish baseline budgets, select key contractors, and set execution parameters.",
        iconName: "search"
      },
      {
        step: "Step 2",
        title: "Logistics Mobilization",
        desc: "Manage structural equipment shipping, setup laydown yards, and mobilize crews.",
        iconName: "cpu"
      },
      {
        step: "Step 3",
        title: "Civil & Ground Grading",
        desc: "Audit site clearing, geotechnical leveling, and foundation drilling operations.",
        iconName: "map"
      },
      {
        step: "Step 4",
        title: "Mechanical Installation",
        desc: "Monitor module assembly, turbine erection, and primary cable layouts.",
        iconName: "adjustments"
      },
      {
        step: "Step 5",
        title: "Grid Sync & Sign-off",
        desc: "Conduct high-voltage checks, test substation relays, and execute commercial synchronization.",
        iconName: "check"
      }
    ],
    industries: [
      "Solar Farm Developers",
      "Wind Farm Consortia",
      "Utility Transmission Grids",
      "Battery Storage Developers",
      "Electric Vehicle Fleet Hubs"
    ],
    benefits: [
      {
        title: "Eliminate Cost Overruns",
        desc: "Rigorous milestone audits ensure payouts match completed work without budget leaks.",
        iconName: "check-circle"
      },
      {
        title: "Accelerate Grid Interconnection",
        desc: "Proactive substation coordination reduces transmission grid sync delays by up to 20%.",
        iconName: "currency"
      },
      {
        title: "Contractor Compliance",
        desc: "Ensure all civil and electrical builders adhere strictly to regional electric codes and environmental laws.",
        iconName: "trending-down"
      }
    ],
    stats: [
      { value: "85+", label: "Projects Completed" },
      { value: "12", label: "Countries Served" },
      { value: "99.2%", label: "On-Time Completion" },
      { value: "1.8 GW", label: "Energy Synchronized" },
      { value: "2M+", label: "Safe Man-Hours" }
    ],
    caseStudies: [
      {
        name: "50MW Utility Solar Site PMC",
        industry: "Solar Developers",
        challenge: "Subcontractor coordination failures causing a 3-month schedule delay.",
        solution: "Redesigned scheduling logic, deployed automated site-progress tracking.",
        outcome: "Grid connection achieved 10 days ahead of contract deadlines, saving $1.2M."
      },
      {
        name: "Substation Upgrade & Transmission Integration",
        industry: "Utility Grids",
        challenge: "Synchronizing a new wind-power substation without localized blackouts.",
        solution: "Established a phased synchronization flow and coordinated with transmission control.",
        outcome: "Successful hot-line integration completed with zero unscheduled downtime."
      }
    ],
    faqs: [
      {
        question: "How does SustainX manage project risk levels?",
        answer: "We utilize dynamic risk registers identifying weather, supply chain, and permit factors, implementing pre-approved mitigation paths."
      },
      {
        question: "What is your approach to quality assurance on-site?",
        answer: "We maintain independent QA/QC technicians on-site who inspect soil compaction, torque testing, and weld details before approving subsequent work."
      }
    ]
  },
  "turnkey-solution-epc": {
    slug: "turnkey-solution-epc",
    badge: "TURNKEY SOLUTION & EPC",
    heroTitle: "Complete Turnkey Energy Solutions & EPC from",
    heroHighlight: "Concept to Commissioning",
    description: "We provide fully engineered, procured, and constructed clean energy installations, taking full ownership of your project scope from engineering drafts to grid connection and handover.",
    image: "/sustainx_epc.png",
    overview: "SustainX provides end-to-end EPC (Engineering, Procurement, Construction) turnkey solutions. We handle the entire project cycle—from preliminary civil and electrical designs to high-efficiency module sourcing, site assembly, and grid commissioning. Clients receive a fully operational, grid-connected renewable asset with a single point of contract accountability.",
    metaTitle: "Turnkey Solutions & EPC — Renewable Energy EPC | SustainX",
    metaDesc: "End-to-end solar and microgrid EPC solutions. Discover our turnkey engineering, sourcing, and commissioning models.",
    keywords: "turnkey renewable energy, solar EPC contractor, microgrid construction, grid tie system assembly",
    whyChooseUs: [
      {
        title: "Single Contract",
        desc: "One point of responsibility from civil grading to final synchronization.",
        iconName: "strategic-insight"
      },
      {
        title: "Tier-1 Sourcing",
        desc: "Direct procurement channels with global solar and wind manufacturers.",
        iconName: "esg-excellence"
      },
      {
        title: "Expert Engineering",
        desc: "Licensed structural and electrical drafts complying with regional codes.",
        iconName: "decarbonization"
      },
      {
        title: "Grid Integration",
        desc: "Conduct harmonics audits and sync with local transmission authorities.",
        iconName: "risk-opportunity"
      },
      {
        title: "Operational Safety",
        desc: "Zero-incident policies and structured construction site hazards control.",
        iconName: "global-expertise"
      },
      {
        title: "Performance Guarantee",
        desc: "Binding asset efficiency ratios written directly into contracts.",
        iconName: "sustainable-impact"
      }
    ],
    services: [
      {
        title: "Concept Engineering",
        desc: "Creating 3D site designs, load profiles, and solar yield models.",
        iconName: "sustainability-strategy"
      },
      {
        title: "Direct Procurement",
        desc: "Sourcing panels, smart switchgear, and high-capacity inverters.",
        iconName: "esg-advisory"
      },
      {
        title: "Civil Works",
        desc: "Erecting structural piles, grading terrain, and leveling access roads.",
        iconName: "decarbonization-roadmap"
      },
      {
        title: "Electrical Installation",
        desc: "String wiring, inverter placement, and high-voltage connections.",
        iconName: "energy-transition-planning"
      },
      {
        title: "Substation Sync",
        desc: "Commissioning transmission line breakers and grid synchronization.",
        iconName: "climate-risk-assessment"
      },
      {
        title: "O&M Handover",
        desc: "Transferring a fully operational asset paired with long-term O&M SLAs.",
        iconName: "net-zero-consulting"
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "3D Engineering Design",
        desc: "Develop detailed civil blueprints and electrical single-line schematics.",
        iconName: "search"
      },
      {
        step: "Step 2",
        title: "Tier-1 Procurement",
        desc: "Secure high-grade materials, inverters, and modules directly from manufacturers.",
        iconName: "cpu"
      },
      {
        step: "Step 3",
        title: "Civil Preparation",
        desc: "Grade ground, lay roads, drive pile structures, and construct battery vaults.",
        iconName: "map"
      },
      {
        step: "Step 4",
        title: "Electrical Assembly",
        desc: "Mount components, run high-voltage wiring, and set grid switchgear.",
        iconName: "adjustments"
      },
      {
        step: "Step 5",
        title: "Commissioning & Sync",
        desc: "Execute insulation resistance checks, run performance ratios, and sync with local utility.",
        iconName: "check"
      }
    ],
    industries: [
      "Industrial Manufacturers",
      "Agricultural Complexes",
      "Utility Power Producers",
      "Commercial Megalopolises",
      "Remote Mining Operations"
    ],
    benefits: [
      {
        title: "Single Contract Point",
        desc: "Eliminate coordination disputes between design teams and site builders.",
        iconName: "check-circle"
      },
      {
        title: "Performance Guaranteed",
        desc: "All systems carry binding efficiency guarantees to secure project finance.",
        iconName: "currency"
      },
      {
        title: "Accelerated Capitalization",
        desc: "Streamlined logistics get your asset producing green power and savings faster.",
        iconName: "trending-down"
      }
    ],
    stats: [
      { value: "60+", label: "Assets Delivered" },
      { value: "15", label: "Microgrids Active" },
      { value: "84.2%", label: "Avg Performance Ratio" },
      { value: "1.1 GW", label: "Clean Capacity Built" },
      { value: "100%", label: "Interconnection Success" }
    ],
    caseStudies: [
      {
        name: "12MW Rooftop Solar EPC for Logistics Hub",
        industry: "Commercial Logistics",
        challenge: "Fragile roof panels and strict weight limitations preventing standard racking.",
        solution: "Engineered ultra-lightweight custom brackets and high-density cell modules.",
        outcome: "Successful delivery powering 45% of warehouse electricity, saving $1.4M per year."
      },
      {
        name: "Agri-Processing Hub Hybrid Microgrid",
        industry: "Agricultural Complexes",
        challenge: "Frequent local grid outages destroying crop storage and costing $150K per incident.",
        solution: "Built a 3MW solar plus 2MWh battery storage microgrid with automated transfer switchgear.",
        outcome: "Completely eliminated utility blackouts, providing 100% crop refrigeration safety."
      }
    ],
    faqs: [
      {
        question: "Do you offer post-construction maintenance?",
        answer: "Yes, all turnkey packages can be paired with our long-term Operations & Maintenance (O&M) contracts, providing real-time telemetry and periodic servicing."
      },
      {
        question: "Are structural engineering designs certified?",
        answer: "Absolutely. All layout schematics and foundation calculations are certified by licensed professional engineers (PE) complying with national codes."
      }
    ]
  },
  "capacity-building": {
    slug: "capacity-building",
    badge: "CAPACITY BUILDING",
    heroTitle: "Empowering Organizations through",
    heroHighlight: "Knowledge & Capacity Building",
    description: "We help organizations retrain engineering teams, upskill project managers, and build internal technical expertise using verified curriculums and simulator modeling programs.",
    image: "/sustainx_training.png",
    overview: "SustainX Capacity Building directly bridges the global green skills gap. We design custom corporate learning modules, field engineering labs, and simulator certifications (PVsyst, HOMER, grid flow analysis) to prepare teams to design and manage clean energy installations independently.",
    metaTitle: "Capacity Building — Clean Energy Training & Certifications | SustainX",
    metaDesc: "retrain engineering staff and managers in solar design, HOMER grids, and clean tech. Read about our certified learning tracks.",
    keywords: "clean energy capacity building, PVsyst modeling training, solar design retraining, green workforce credentials",
    whyChooseUs: [
      {
        title: "Interactive Labs",
        desc: "Practical design simulations using PVsyst, HOMER, and grid telemetry.",
        iconName: "strategic-insight"
      },
      {
        title: "Certified Tracks",
        desc: "Accredited credentials recognized by international engineering boards.",
        iconName: "esg-excellence"
      },
      {
        title: "VR Simulation",
        desc: "Immersive VR safety training for high-voltage substation tasks.",
        iconName: "decarbonization"
      },
      {
        title: "Expert Tutors",
        desc: "Learn from active renewable developers and climate finance directors.",
        iconName: "risk-opportunity"
      },
      {
        title: "Retraining Paths",
        desc: "Transition fossil-fuel workforces to active green infrastructure roles.",
        iconName: "global-expertise"
      },
      {
        title: "Career Growth",
        desc: "Upskill talent to execute in-house engineering and carbon audits.",
        iconName: "sustainable-impact"
      }
    ],
    services: [
      {
        title: "PVsyst Simulator Training",
        desc: "Professional solar system layout design and yield modeling.",
        iconName: "sustainability-strategy"
      },
      {
        title: "HOMER Energy Modeling",
        desc: "Microgrid hybrid sizing, battery storage optimization, and cost modeling.",
        iconName: "esg-advisory"
      },
      {
        title: "VR High-Voltage Safety",
        desc: "Immersive safety checklists for electrical grids and substations.",
        iconName: "decarbonization-roadmap"
      },
      {
        title: "ESG Corporate Leadership",
        desc: "Executive briefings on carbon taxes, offset protocols, and green bonds.",
        iconName: "energy-transition-planning"
      },
      {
        title: "Retraining Curriculums",
        desc: "Custom pathways retargeting industrial crews for renewable energy.",
        iconName: "climate-risk-assessment"
      },
      {
        title: "Continuing Education",
        desc: "Accredited tracks awarding continuing education units (CEU).",
        iconName: "net-zero-consulting"
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Competency Assessment",
        desc: "Map existing team software capabilities and identify operational skill deficits.",
        iconName: "search"
      },
      {
        step: "Step 2",
        title: "Curriculum Tailoring",
        desc: "Assemble custom course modules using local electrical codes and site designs.",
        iconName: "cpu"
      },
      {
        step: "Step 3",
        title: "Simulator & Lab Training",
        desc: "Conduct live design simulations, transient studies, and load matching audits.",
        iconName: "map"
      },
      {
        step: "Step 4",
        title: "Practical Site Project",
        desc: "Assign teams mock infrastructure briefs and evaluate their engineering layouts.",
        iconName: "adjustments"
      },
      {
        step: "Step 5",
        title: "Testing & Certification",
        desc: "Verify technical skills via exams and issue formal professional energy credentials.",
        iconName: "check"
      }
    ],
    industries: [
      "State Energy Ministries",
      "Utility Power Companies",
      "EPC Building Contractors",
      "Clean-Tech Asset Funders",
      "Industrial Aggregators"
    ],
    benefits: [
      {
        title: "Lower Consulting Overhead",
        desc: "Upskill internal design teams to handle modeling and audits without relying on external firms.",
        iconName: "check-circle"
      },
      {
        title: "Accreditation Edge",
        desc: "Win projects by bidding with internationally certified structural and electrical engineers.",
        iconName: "currency"
      },
      {
        title: "Reduce Site Risks",
        desc: "Interactive VR simulator practice dramatically drops practical high-voltage handling accidents.",
        iconName: "trending-down"
      }
    ],
    stats: [
      { value: "4,500+", label: "Leaders Trained" },
      { value: "15", label: "Simulator Labs Built" },
      { value: "75+", label: "Enterprise Clients" },
      { value: "88%", label: "Career Transition Rate" },
      { value: "100%", label: "Certification Credibility" }
    ],
    caseStudies: [
      {
        name: "National Grid Corporation Solar Audit Retraining",
        industry: "Utility Grids",
        challenge: "Utility engineers lacking the skills to audit complex solar designs, slowing approvals by 8 weeks.",
        solution: "Deployed a 4-month certification program centered on solar engineering and PVsyst modeling.",
        outcome: "120 engineers certified, reducing interconnection review times from 8 weeks to 18 days."
      },
      {
        name: "Fossil Workforce Transition Program",
        industry: "State Energy Ministries",
        challenge: "Retraining coal plant mechanical crews to transition into a new solar-plus-storage zone.",
        solution: "Developed custom retraining paths focusing on battery inverter safety and solar mechanical tracking.",
        outcome: "Successfully transitioned 92% of local staff to active green infrastructure operations."
      }
    ],
    faqs: [
      {
        question: "How do you supply the VR simulation hardware?",
        answer: "Yes, SustainX supplies both specialized software simulator packages and VR hardware options (headsets, trackers) for corporate campuses."
      },
      {
        question: "Do your training courses offer CEUs?",
        answer: "Yes, our certified tracks offer continuing education units (CEU) recognized by structural, electrical, and chemical engineering boards."
      }
    ]
  }
};
