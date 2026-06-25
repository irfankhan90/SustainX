import advisoryImage from "../../public/sustainx_advisory.png";
import pmImage from "../../public/sustainx_pm.png";
import epcImage from "../../public/sustainx_epc.png";
import trainingImage from "../../public/sustainx_training.png";

export interface PillarData {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  heroDesc: string;
  image: string;
}

export const PILLARS: PillarData[] = [
  {
    id: "strategy",
    name: "Strategy",
    tagline: "Blueprinting the future",
    desc: "Macro-planning, feasibility mapping, and grid integration design. De-risks the capital.",
    heroDesc: "Feasibility studies, roadmap development, sustainability strategy, and execution planning.",
    image: advisoryImage.src,
  },
  {
    id: "project-management",
    name: "Project Management",
    tagline: "Orchestrating execution",
    desc: "Capital deployment, timeline enforcement, and multi-stakeholder alignment. Accelerates the timeline.",
    heroDesc: "Project scheduling, stakeholder coordination, milestone tracking, and execution oversight.",
    image: pmImage.src,
  },
  {
    id: "turnkey-solutions",
    name: "Turnkey Solutions",
    tagline: "Delivering ready-to-operate assets",
    desc: "End-to-end design, construction, and physical handover. Guarantees the execution.",
    heroDesc: "Engineering, procurement, construction, commissioning, and deployment support.",
    image: epcImage.src,
  },
  {
    id: "capacity-building",
    name: "Capacity Building",
    tagline: "Sustaining the legacy",
    desc: "Workforce upskilling, operational readiness, and community impact. Sustains the operation.",
    heroDesc: "Training, certification, workforce development, and operational readiness.",
    image: trainingImage.src,
  },
];
