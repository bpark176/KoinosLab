// Edit this file first when updating site copy, cards, publications, devices, or team details.
window.koinosLabContent = {
  home: {
    eyebrow: "Research infrastructure for everyone",
    title: "Koinos Lab",
    lead:
      "Koinos Lab develops affordable, open-source scientific instruments and practical technical resources for students, schools, and researchers.",
    missionEyebrow: "Organization overview",
    missionTitle: "Shared tools for practical science.",
    missionCopy:
      "The initiative combines open-source scientific hardware, a device library, a community marketplace, and technical publications so useful instruments and knowledge can circulate beyond traditional lab settings.",
    previews: [
      {
        title: "Devices",
        label: "Shared instrument library",
        text: "Browse accessible scientific and engineering tools organized by use case, skill level, and project type.",
        image: "/assets/images/engineering-workstation-960.webp",
        imageSrcset:
          "/assets/images/engineering-workstation-960.webp 960w, /assets/images/engineering-workstation-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1281,
        imageAlt: "An engineer testing equipment at a laboratory workstation.",
        href: "/devices.html"
      },
      {
        title: "Marketplace",
        label: "Equipment exchange",
        text: "Support donations, lending, requests, and responsible reuse for lab equipment and educational tools.",
        image: "/assets/images/lab-glassware-960.webp",
        imageSrcset:
          "/assets/images/lab-glassware-960.webp 960w, /assets/images/lab-glassware-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1280,
        imageAlt: "Scientific glassware and research equipment in a laboratory.",
        href: "/marketplace.html"
      },
      {
        title: "Publications",
        label: "Technical notes and reports",
        text: "Read guides, device briefs, field reports, and research notes from the Koinos Lab community.",
        image: "/assets/images/research-documents-960.webp",
        imageSrcset:
          "/assets/images/research-documents-960.webp 960w, /assets/images/research-documents-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1281,
        imageAlt: "Research notes and documents spread across a worktable.",
        href: "/publications.html"
      },
      {
        title: "Vision",
        label: "Long-term direction",
        text: "Learn how Koinos Lab is building a practical network for accessible science, education, and engineering.",
        image: "/assets/images/open-landscape-960.webp",
        imageSrcset:
          "/assets/images/open-landscape-960.webp 960w, /assets/images/open-landscape-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1280,
        imageAlt: "A wide open landscape suggesting reach and possibility.",
        href: "/vision.html"
      }
    ]
  },

  devices: {
    eyebrow: "Devices",
    title: "Device library",
    lead:
      "Explore affordable, open-source scientific instruments for spectroscopy, environmental measurement, electrochemistry, learning, and research.",
    sidebar:
      "The device library is organized around practical use, not just equipment names. Each entry should eventually include setup requirements, safety notes, example experiments, and availability.",
    items: [
      {
        name: "Affordable Multispectral Spectrofluorometer",
        type: "Fluorescence Spectroscopy",
        status: "In development",
        href: "/devices/spectrofluorometer/",
        image: "/assets/images/fluorescent-samples-960.webp",
        imageSrcset:
          "/assets/images/fluorescent-samples-960.webp 960w, /assets/images/fluorescent-samples-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1920,
        imageAlt: "Fluorescent samples under controlled optical excitation.",
        description:
          "A low-cost optical instrument for measuring and comparing fluorescence emission from dyes, quantum dots, and other samples."
      },
      {
        name: "Open-Source Visible-Light Colorimeter",
        type: "Absorbance Spectroscopy",
        status: "Coming soon",
        href: "/devices/colorimeter/",
        image: "/assets/logos/koinos-reversed.svg",
        imageWidth: 460,
        imageHeight: 205,
        imageAlt: "Koinos Lab logo marking an upcoming colorimeter project.",
        description:
          "An educational instrument for estimating the concentration of colored solutions through visible-light absorption.",
        comingSoon: true
      },
      {
        name: "Portable Multiparameter Water-Quality Analyzer",
        type: "Environmental Instrumentation",
        status: "Coming soon",
        href: "/devices/water-quality-analyzer/",
        image: "/assets/logos/koinos-reversed.svg",
        imageWidth: 460,
        imageHeight: 205,
        imageAlt: "Koinos Lab logo marking an upcoming water-quality analyzer project.",
        description:
          "A field-ready platform planned for pH, conductivity, temperature, turbidity, and dissolved-solids measurements.",
        comingSoon: true
      },
      {
        name: "Open-Source Educational Potentiostat",
        type: "Electrochemical Instrumentation",
        status: "Coming soon",
        href: "/devices/potentiostat/",
        image: "/assets/logos/koinos-reversed.svg",
        imageWidth: 460,
        imageHeight: 205,
        imageAlt: "Koinos Lab logo marking an upcoming potentiostat project.",
        description:
          "A planned low-cost platform for controlled-potential electrochemistry and introductory voltammetry experiments.",
        comingSoon: true
      }
    ],
    pathway: [
      {
        step: "01",
        title: "Identify",
        text: "Identify a scientific tool or capability that is too expensive, inaccessible, or difficult to use, and define the problem it needs to solve."
      },
      {
        step: "02",
        title: "Develop & Validate",
        text: "Design, prototype, test, and refine an affordable alternative while comparing its performance against existing tools or accepted standards."
      },
      {
        step: "03",
        title: "Catalog",
        text: "Record the device’s purpose, specifications, cost, required materials, skill level, safety considerations, and possible applications."
      },
      {
        step: "04",
        title: "Document",
        text: "Create complete open-source assembly instructions, diagrams, parts lists, code, calibration procedures, and troubleshooting guides."
      },
      {
        step: "05",
        title: "Share",
        text: "Publish the device openly and make it accessible through downloads, demonstrations, workshops, schools, partners, or other distribution programs."
      },
      {
        step: "06",
        title: "Improve",
        text: "Collect feedback and performance data from users, publish lessons learned, and continuously refine future versions."
      }
    ]
  },

  marketplace: {
    eyebrow: "Marketplace",
    title: "Scientific equipment exchange",
    lead:
      "The Koinos Lab Marketplace helps equipment circulate through donations, lending, requests, and responsible reuse.",
    focusTitle: "Keeping useful tools in motion.",
    focusCopy:
      "Many scientific tools are underused because they are too specialized, too expensive, or simply stored out of sight. The marketplace creates a structured way to connect available equipment with people who can put it to work.",
    listings: [
      {
        tag: "Donate",
        title: "Unused lab glassware",
        image: "/assets/images/lab-glassware-960.webp",
        imageSrcset:
          "/assets/images/lab-glassware-960.webp 960w, /assets/images/lab-glassware-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1280,
        imageAlt: "Laboratory glassware ready for reuse.",
        description: "Beakers, flasks, and non-hazardous starter supplies for classroom demonstrations."
      },
      {
        tag: "Borrow",
        title: "Portable microscope",
        image: "/assets/images/fluorescent-samples-960.webp",
        imageSrcset:
          "/assets/images/fluorescent-samples-960.webp 960w, /assets/images/fluorescent-samples-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1920,
        imageAlt: "Fluorescent biological samples shown in a microscopy image.",
        description: "Short-term access for workshops, fairs, field projects, or student research."
      },
      {
        tag: "Request",
        title: "Sensor modules",
        image: "/assets/images/sensor-circuit-960.webp",
        imageSrcset:
          "/assets/images/sensor-circuit-960.webp 960w, /assets/images/sensor-circuit-1920.webp 1920w",
        imageWidth: 1920,
        imageHeight: 1280,
        imageAlt: "Electronic sensor and circuit components.",
        description: "Community requests for low-cost sensors, data loggers, and repairable parts."
      }
    ],
    principles: [
      {
        title: "Clear condition notes",
        text: "Listings should describe what is included, what is missing, and whether the item has been tested."
      },
      {
        title: "Safety boundaries",
        text: "Koinos Lab should avoid hazardous materials and make safety expectations visible before exchange."
      },
      {
        title: "Responsible handoff",
        text: "Each exchange should include basic setup information, contact details, and return expectations when relevant."
      }
    ]
  },

  publications: {
    eyebrow: "Publications",
    title: "Reports, guides, and technical notes",
    lead:
      "Koinos Lab publications document practical knowledge about accessible scientific tools, device reuse, and community research infrastructure.",
    sidebar:
      "This page is ready for real papers, PDFs, or project writeups. For now, it uses placeholder entries that can be replaced as Koinos Lab begins publishing.",
    items: [
      {
        type: "Technical note",
        title: "Designing a beginner-ready device entry",
        date: "Forthcoming",
        authors: "Koinos Lab",
        summary:
          "A framework for documenting device purpose, setup, materials, safety notes, and example experiments."
      },
      {
        type: "Field report",
        title: "Building a small shared instrument library",
        date: "Forthcoming",
        authors: "Koinos Lab",
        summary:
          "Early lessons from organizing scientific tools for lending, classroom use, and student-led research."
      },
      {
        type: "Guide",
        title: "Responsible reuse for educational lab equipment",
        date: "Forthcoming",
        authors: "Koinos Lab",
        summary:
          "A practical guide for evaluating donated or second-hand scientific tools before they are shared."
      }
    ],
    categories: [
      {
        title: "Device briefs",
        text: "Short documents explaining what a tool does, who it is for, and how to begin using it."
      },
      {
        title: "Technical guides",
        text: "Step-by-step resources for setup, maintenance, repair, calibration, and safe operation."
      },
      {
        title: "Research notes",
        text: "Project writeups, observations, and lessons from experiments or Koinos Lab-supported work."
      }
    ]
  },

  about: {
    eyebrow: "About Koinos Lab",
    title: "Building practical pathways into science",
    lead:
      "Koinos Lab is a scientific and engineering initiative designing affordable instruments, clear technical resources, and shared systems that help more people participate in practical science.",
    identityTitle: "A research organization built around access",
    identityCopy:
      "Koinos Lab brings together instrument design, validation, documentation, and community exchange. We focus on the practical barriers that keep students, educators, and early-stage researchers from using capable scientific tools.",
    purposeTitle: "Why Koinos Lab exists",
    purposeCopy:
      "Scientific curiosity is widely distributed, but equipment, guidance, and institutional support are not. We exist to narrow that gap by making useful instruments easier to build, understand, maintain, and share.",
    mission:
      "Our mission is to expand who can investigate, measure, test, and build by lowering the cost and complexity of dependable scientific instrumentation.",
    focusAreas: [
      {
        title: "Design useful instruments",
        text: "Develop affordable tools around real learning and research needs, with careful attention to performance, safety, and ease of use."
      },
      {
        title: "Document the full system",
        text: "Publish clear setup, calibration, maintenance, and validation guidance so an instrument remains useful beyond its original builder."
      },
      {
        title: "Support shared access",
        text: "Create pathways for equipment, knowledge, and practical experience to circulate through schools, project teams, and community partners."
      }
    ],
    approach: [
      {
        step: "01",
        title: "Begin with the scientific need",
        text: "Define the measurement, user, environment, and evidence standard before deciding what the instrument should become."
      },
      {
        step: "02",
        title: "Design for affordability and repair",
        text: "Use accessible components, transparent construction, and modular choices that make tools easier to reproduce and maintain."
      },
      {
        step: "03",
        title: "Validate and publish",
        text: "Test performance, document limitations, and share the methods needed for others to use the instrument responsibly."
      }
    ],
    vision:
      "We envision scientific infrastructure that is more open, distributed, and understandable: a world where cost or institutional access does not determine who gets to experiment, learn, and contribute."
  },

  vision: {
    eyebrow: "Vision",
    title: "An open network for practical science",
    lead:
      "Koinos Lab is built around a simple belief: more people can do meaningful science when tools, documentation, and community support are easier to reach.",
    quote:
      "The important thing is to never stop questioning. Curiosity has its own reason for existing.",
    quoteAttribution: "Albert Einstein",
    pillars: [
      {
        title: "Access over ownership",
        text: "Shared access lowers cost, reduces waste, and lets more people try serious scientific work."
      },
      {
        title: "Documentation as infrastructure",
        text: "Clear guides, setup notes, and examples make equipment useful beyond the person who first owned it."
      },
      {
        title: "Community-led reliability",
        text: "Koinos Lab grows through trust, maintenance habits, transparent exchange, and feedback from real users."
      }
    ],
    timeline: [
      {
        phase: "Pilot",
        title: "Build the first device catalog",
        text: "Create structured entries for accessible tools and test the first lending or workshop workflows."
      },
      {
        phase: "Exchange",
        title: "Launch marketplace requests",
        text: "Invite donations, lending offers, and community requests with clear condition and safety standards."
      },
      {
        phase: "Publish",
        title: "Release guides and field reports",
        text: "Document lessons learned so other student groups, classrooms, and makers can reuse the model."
      }
    ]
  },

  team: {
    eyebrow: "Leadership & mentors",
    title: "Leadership and technical guidance",
    lead:
      "Koinos Lab is primarily operated by Brennan Park, with periodic guidance from external scientific and engineering mentors.",
    governance: {
      eyebrow: "Operating structure",
      title: "Hands-on project leadership supported by external guidance.",
      copy:
        "Brennan Park leads Koinos Lab's day-to-day development work. External mentors may provide periodic technical or research guidance, but they are not employees, executives, founders, or operational team members.",
      roles: [
        {
          title: "Project leadership",
          text: "The Founder & Lead Engineer directs and carries out Koinos Lab's instrument development, validation, documentation, and publication work."
        },
        {
          title: "External mentorship",
          text: "Scientific and engineering mentors may provide periodic guidance when their expertise is relevant. Mentor profiles remain provisional pending explicit approval."
        }
      ]
    },
    groups: [
      {
        id: "leadership",
        eyebrow: "Leadership",
        title: "Founder and lead engineer",
        description:
          "Koinos Lab's active development and operations are led by its founder.",
        people: [
          {
            name: "Brennan Park",
            role: "Founder & Lead Engineer",
            affiliation: "Seoul International School",
            linkedIn: "https://www.linkedin.com/in/brennan-park7",
            photo: "/assets/logos/koinos-reversed.svg",
            imageWidth: 460,
            imageHeight: 205,
            photoAlt: "Koinos Lab logo placeholder for Brennan Park.",
            placeholder: true,
            bio: "Brennan founded Koinos Lab and personally leads its instrument design, embedded programming, prototyping, experimental validation, research, documentation, website development, and open-source publication efforts."
          }
        ]
      },
      {
        id: "mentors",
        eyebrow: "Mentors",
        title: "External technical mentors",
        description:
          "These provisional profiles are pending explicit approval. Mentors may provide periodic technical or research guidance and are not part of Koinos Lab's day-to-day operations.",
        people: [
          {
            name: "Prof. Gyuseok Kim",
            role: "Scientific Mentor",
            affiliation: "[CONFIRM AFFILIATION]",
            photo: "./assets/logos/koinos-reversed.svg",
            photoAlt: "Koinos Lab placeholder shown while an approved photo for Prof. Gyuseok Kim is pending.",
            photoNote: "[ADD APPROVED PHOTO]",
            placeholder: true,
            bio: "[CONFIRM BIO]"
          },
          {
            name: "Haocong Xu",
            role: "Engineering Mentor",
            affiliation: "[CONFIRM AFFILIATION]",
            photo: "./assets/logos/koinos-reversed.svg",
            photoAlt: "Koinos Lab placeholder shown while an approved photo for Haocong Xu is pending.",
            photoNote: "[ADD APPROVED PHOTO]",
            placeholder: true,
            bio: "[CONFIRM BIO]"
          }
        ]
      }
    ]
  }
};
