import React from "react";
import {
  Blocks,
  Network,
  Users,
  Rocket,
  Lightbulb,
  Wallet,
} from "lucide-react";

/**
 * Services list
 */
const iconSize = 24;

export const services = [
  {
    name: "Smart Infrastructure",
    desc: "Buildings that adapt, optimize, and reduce waste. AI-driven city planning for a seamless urban experience.",
    icon: React.createElement(Blocks, { size: iconSize, strokeWidth: 1 }),
  },
  {
    name: "Clean Energy",
    desc: "Renewable energy solutions built for maximum efficiency. Intelligent power grids that reduce carbon footprints.",
    icon: React.createElement(Network, { size: iconSize, strokeWidth: 1 }),
  },
  {
    name: "Sustainable Technology",
    desc: "Waste-to-resource innovations. Regenerative design for long-lasting impact.",
    icon: React.createElement(Users, { size: iconSize, strokeWidth: 1 }),
  },
  {
    name: "Next-Gen Mobility",
    desc: "Smarter transport that moves people and goods with zero emissions. Connected logistics for a frictionless supply chain.",
    icon: React.createElement(Rocket, { size: iconSize, strokeWidth: 1 }),
  },
  {
    name: "AI & Automation",
    desc: "Intelligent systems for predictive analytics and smart decision-making. Automated solutions to optimize energy and resource efficiency.",
    icon: React.createElement(Lightbulb, { size: iconSize, strokeWidth: 1 }),
  },
  {
    name: "Planetary Engineering",
    desc: "Large-scale environmental restoration and climate resilience projects. Terraforming research for sustainable off-world living.",
    icon: React.createElement(Wallet, { size: iconSize, strokeWidth: 1 }),
  },
];

/**
 * Images lists
 */
export type ImagesItem = {
  title: string;
  img: string;
  url?: string;
};

export const partners = [
  {
    title: "Tesla",
    img: "/img/tesla.svg",
    url: "#",
  },
  {
    title: "SpaceX",
    img: "/img/spacex.png",
    url: "#",
  },
  {
    title: "Siemens Energy",
    img: "/img/siemens-energy.svg",
    url: "#",
  },

  {
    title: "Vestas (wind energy)",
    img: "/img/vestas.svg",
    url: "#",
  },
  {
    title: "NextEra Energy",
    img: "/img/nextera-energy.svg",
    url: "#",
  },
  {
    title: "Ørsted (offshore wind power)",
    img: "/img/orsted.svg",
    url: "#",
  },

  { title: "First Solar", img: "/img/first-solar.svg", url: "#" },
  {
    title: "Enphase Energy",
    img: "/img/enphase.svg",
    url: "#",
  },

  {
    title: "Schneider Electric",
    img: "/img/schneider-electric.png",
    url: "#",
  },
  {
    title: "Beyond Meat",
    img: "/img/beyond-meat.png",
    url: "#",
  },
  {
    title: "Climeworks",
    img: "/img/climeworks.svg",
    url: "#",
  },

  { title: "Rivian", img: "/img/rivian.svg", url: "#" },
  {
    title: "Bloom Energy",
    img: "/img/bloom-energy.svg",
    url: "#",
  },
  // {
  //   title: "SunPower",
  //   img: "/img/sunpower.svg",
  //   url: "#",
  // },
];
