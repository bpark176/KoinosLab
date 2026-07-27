export const baseUrl = "https://www.koinoslab.org";

export const organization = {
  name: "Koinos Lab",
  alternateName: "KoinosLab",
  email: "contact@koinoslab.org",
  description:
    "Koinos Lab develops affordable, open-source scientific instruments and technical resources for students, schools, and researchers."
};

export const pages = [
  {
    file: "index.html",
    path: "/",
    title: "Koinos Lab | Affordable Open-Source Scientific Instruments",
    description:
      "Koinos Lab develops affordable, open-source scientific instruments for students, schools, and researchers. Explore our devices, research, publications, and technical documentation.",
    h1: "Koinos Lab",
    schemaType: "WebPage",
    image: "/assets/images/koinos-lab-open-source-scientific-instruments-social.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Koinos Lab branding over laboratory glassware",
    searchConsolePlaceholder: true
  },
  {
    file: "about.html",
    path: "/about.html",
    title: "About Koinos Lab | Accessible Scientific Instrumentation",
    description:
      "Learn how Koinos Lab designs affordable scientific instruments, publishes open technical documentation, and expands access to practical science.",
    h1: "Building practical pathways into science",
    schemaType: "AboutPage",
    breadcrumbLabel: "About",
    image: "/assets/images/engineering-workstation-1920.webp",
    imageWidth: 1920,
    imageHeight: 1281,
    imageAlt: "Engineer working with scientific equipment and electronics"
  },
  {
    file: "devices.html",
    path: "/devices.html",
    title: "Open-Source Scientific Instruments | Koinos Lab",
    description:
      "Explore Koinos Lab open-source scientific instruments, including affordable spectroscopy, environmental measurement, and electrochemistry projects.",
    h1: "Device library",
    schemaType: "CollectionPage",
    breadcrumbLabel: "Devices",
    image: "/assets/images/engineering-workstation-1920.webp",
    imageWidth: 1920,
    imageHeight: 1281,
    imageAlt: "Engineering workstation used to develop accessible scientific instruments"
  },
  {
    file: "marketplace.html",
    path: "/marketplace.html",
    title: "Scientific Equipment Exchange | Koinos Lab",
    description:
      "Explore the Koinos Lab scientific equipment exchange for responsible donations, lending, requests, and reuse of educational laboratory tools.",
    h1: "Scientific equipment exchange",
    schemaType: "CollectionPage",
    breadcrumbLabel: "Marketplace",
    image: "/assets/images/lab-glassware-1920.webp",
    imageWidth: 1920,
    imageHeight: 1280,
    imageAlt: "Laboratory glassware prepared for scientific use"
  },
  {
    file: "publications.html",
    path: "/publications.html",
    title: "Research & Publications | Koinos Lab",
    description:
      "Read Koinos Lab research notes, technical guides, device briefs, and field reports about affordable instruments and open scientific hardware.",
    h1: "Reports, guides, and technical notes",
    schemaType: "CollectionPage",
    breadcrumbLabel: "Publications",
    image: "/assets/images/research-documents-1920.webp",
    imageWidth: 1920,
    imageHeight: 1281,
    imageAlt: "Research documents and technical notes arranged on a worktable"
  },
  {
    file: "vision.html",
    path: "/vision.html",
    title: "Our Vision for Accessible Science | Koinos Lab",
    description:
      "Discover Koinos Lab's vision for open, distributed scientific infrastructure built on affordable instruments, clear documentation, and shared access.",
    h1: "An open network for practical science",
    schemaType: "WebPage",
    breadcrumbLabel: "Vision",
    image: "/assets/images/open-landscape-1920.webp",
    imageWidth: 1920,
    imageHeight: 1280,
    imageAlt: "Open landscape representing the broader reach of accessible science"
  },
  {
    file: "team.html",
    path: "/team.html",
    title: "Our Team | Koinos Lab",
    description:
      "Meet the Koinos Lab leadership and learn how its engineering, research, advisory, and outreach roles support accessible scientific instrumentation.",
    h1: "Governance and team",
    schemaType: "AboutPage",
    breadcrumbLabel: "Our Team",
    image: "/assets/images/research-team-1920.webp",
    imageWidth: 1920,
    imageHeight: 1281,
    imageAlt: "Research and engineering team collaborating around computers"
  },
  {
    file: "devices/spectrofluorometer/index.html",
    path: "/devices/spectrofluorometer/",
    title: "Affordable Open-Source Spectrofluorometer | Koinos Lab",
    description:
      "Explore Koinos Lab's affordable open-source spectrofluorometer, including its design, specifications, bill of materials, calibration, safety, and validation plan.",
    h1: "Affordable Multispectral Spectrofluorometer",
    schemaType: "TechArticle",
    breadcrumbLabel: "Spectrofluorometer",
    parent: { name: "Devices", path: "/devices.html" },
    image: "/assets/images/affordable-multispectral-spectrofluorometer-social.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Fluorescent samples with Koinos Lab branding",
    keywords: [
      "affordable spectrofluorometer",
      "open-source spectrofluorometer",
      "low-cost fluorescence spectrometer",
      "fluorescence spectroscopy for schools"
    ]
  },
  {
    file: "devices/colorimeter/index.html",
    path: "/devices/colorimeter/",
    title: "Open-Source Visible-Light Colorimeter | Koinos Lab",
    description:
      "Follow Koinos Lab's planned open-source visible-light colorimeter for educational absorbance spectroscopy and accessible concentration measurements.",
    h1: "Open-Source Visible-Light Colorimeter",
    schemaType: "WebPage",
    breadcrumbLabel: "Visible-Light Colorimeter",
    parent: { name: "Devices", path: "/devices.html" },
    image: "/assets/images/koinos-lab-open-source-scientific-instruments-social.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Koinos Lab branding over laboratory glassware"
  },
  {
    file: "devices/water-quality-analyzer/index.html",
    path: "/devices/water-quality-analyzer/",
    title: "Portable Water-Quality Analyzer | Koinos Lab",
    description:
      "Follow Koinos Lab's planned portable water-quality analyzer for accessible pH, conductivity, temperature, turbidity, and dissolved-solids measurements.",
    h1: "Portable Multiparameter Water-Quality Analyzer",
    schemaType: "WebPage",
    breadcrumbLabel: "Water-Quality Analyzer",
    parent: { name: "Devices", path: "/devices.html" },
    image: "/assets/images/koinos-lab-open-source-scientific-instruments-social.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Koinos Lab branding over laboratory glassware"
  },
  {
    file: "devices/potentiostat/index.html",
    path: "/devices/potentiostat/",
    title: "Open-Source Educational Potentiostat | Koinos Lab",
    description:
      "Follow Koinos Lab's planned open-source educational potentiostat for accessible controlled-potential electrochemistry and voltammetry experiments.",
    h1: "Open-Source Educational Potentiostat",
    schemaType: "WebPage",
    breadcrumbLabel: "Educational Potentiostat",
    parent: { name: "Devices", path: "/devices.html" },
    image: "/assets/images/koinos-lab-open-source-scientific-instruments-social.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Koinos Lab branding over laboratory glassware"
  }
];

export const redirects = [
  {
    file: "device-spectrofluorometer.html",
    target: "/devices/spectrofluorometer/",
    label: "affordable open-source spectrofluorometer documentation"
  },
  {
    file: "device-colorimeter.html",
    target: "/devices/colorimeter/",
    label: "open-source visible-light colorimeter project"
  },
  {
    file: "device-water-quality-analyzer.html",
    target: "/devices/water-quality-analyzer/",
    label: "portable water-quality analyzer project"
  },
  {
    file: "device-potentiostat.html",
    target: "/devices/potentiostat/",
    label: "open-source educational potentiostat project"
  }
];
