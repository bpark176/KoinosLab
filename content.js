// Edit this file first when updating site copy, cards, publications, devices, or team details.
window.koinosLabContent = {
  home: {
    eyebrow: "Research infrastructure for everyone",
    title: "Koinos Lab",
    lead:
      "Koinos Lab is a scientific and engineering organization making devices, research tools, and practical learning resources more accessible to students and early-stage builders.",
    missionEyebrow: "Organization overview",
    missionTitle: "Shared tools for practical science.",
    missionCopy:
      "The initiative combines a device library, community marketplace, publication program, and open learning network so useful scientific equipment can circulate beyond traditional lab settings.",
    previews: [
      {
        title: "Devices",
        label: "Shared instrument library",
        text: "Browse accessible scientific and engineering tools organized by use case, skill level, and project type.",
        image:
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=82",
        imageAlt: "An engineer testing equipment at a laboratory workstation.",
        href: "./devices.html"
      },
      {
        title: "Marketplace",
        label: "Equipment exchange",
        text: "Support donations, lending, requests, and responsible reuse for lab equipment and educational tools.",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=82",
        imageAlt: "Scientific glassware and research equipment in a laboratory.",
        href: "./marketplace.html"
      },
      {
        title: "Publications",
        label: "Technical notes and reports",
        text: "Read guides, device briefs, field reports, and research notes from the Koinos Lab community.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
        imageAlt: "Research notes and documents spread across a worktable.",
        href: "./publications.html"
      },
      {
        title: "Vision",
        label: "Long-term direction",
        text: "Learn how Koinos Lab is building a practical network for accessible science, education, and engineering.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
        imageAlt: "A wide open landscape suggesting reach and possibility.",
        href: "./vision.html"
      }
    ]
  },

  devices: {
    eyebrow: "Devices",
    title: "Device library",
    lead:
      "Koinos Lab catalogs and shares scientific tools that help learners move from curiosity to measurement, prototyping, and experimentation.",
    sidebar:
      "The device library is organized around practical use, not just equipment names. Each entry should eventually include setup requirements, safety notes, example experiments, and availability.",
    items: [
      {
        name: "Microscopy kit",
        type: "Observation and imaging",
        status: "Pilot catalog",
        image:
          "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "A microscope prepared for scientific observation.",
        description:
          "Entry-level microscopes, prepared slides, phone mounts, and beginner guides for classroom or independent observation."
      },
      {
        name: "Electronics bench",
        type: "Sensors and prototyping",
        status: "Pilot catalog",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "Close-up view of electronics and circuit components.",
        description:
          "Microcontrollers, breadboards, meters, reusable components, and starter workflows for building simple scientific instruments."
      },
      {
        name: "Field testing set",
        type: "Environmental measurement",
        status: "In development",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "A natural landscape used for environmental field observation.",
        description:
          "Portable kits for water, soil, and air measurements that support local data collection and community science projects."
      },
      {
        name: "Fabrication toolkit",
        type: "Design and repair",
        status: "Planned",
        image:
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "An engineering workbench used for prototyping and repair.",
        description:
          "Basic tools for enclosures, fixtures, repairs, and low-cost custom parts that keep scientific projects moving."
      }
    ],
    pathway: [
      {
        step: "01",
        title: "Catalog",
        text: "Document the device, required materials, skill level, safety constraints, and project examples."
      },
      {
        step: "02",
        title: "Prepare",
        text: "Create beginner-friendly instructions, checklists, and maintenance notes before circulation."
      },
      {
        step: "03",
        title: "Share",
        text: "Make the device available through lending, workshops, demonstrations, or partner programs."
      },
      {
        step: "04",
        title: "Improve",
        text: "Collect feedback, publish lessons learned, and refine the device entry for the next user."
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
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "Laboratory glassware ready for reuse.",
        description: "Beakers, flasks, and non-hazardous starter supplies for classroom demonstrations."
      },
      {
        tag: "Borrow",
        title: "Portable microscope",
        image:
          "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=82",
        imageAlt: "A portable microscope for scientific observation.",
        description: "Short-term access for workshops, fairs, field projects, or student research."
      },
      {
        tag: "Request",
        title: "Sensor modules",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=82",
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
    eyebrow: "Our team",
    title: "Governance and team",
    lead:
      "Koinos Lab is organized as a research and engineering initiative with defined leadership, advisory oversight, and project teams focused on scientific access.",
    governance: {
      eyebrow: "Governance structure",
      title: "A clear operating model for research, validation, and outreach.",
      copy:
        "The organization is led by the Founder & CEO, supported by directors responsible for research validation and outreach. Advisors provide technical, scientific, and community guidance, while members contribute to device documentation, marketplace operations, and publications.",
      roles: [
        {
          title: "Executive leadership",
          text: "Founder & CEO sets organizational direction, partnerships, and program priorities."
        },
        {
          title: "Research & validation",
          text: "The research director establishes evidence standards, device review practices, and publication quality."
        },
        {
          title: "Outreach",
          text: "The outreach director manages community relationships, partner engagement, and public-facing programs."
        },
        {
          title: "Advisory board",
          text: "Advisors review technical decisions and help connect Koinos Lab with scientific and engineering communities."
        }
      ]
    },
    groups: [
      {
        id: "leadership",
        eyebrow: "Leadership",
        title: "Executive and program directors",
        description:
          "Leadership is responsible for institutional direction, research standards, partner relationships, and the quality of public-facing programs.",
        people: [
          {
            name: "Brennan Park",
            role: "Founder & CEO",
            photo:
              "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for Brennan Park."
          },
          {
            name: "Ian Kim",
            role: "Director of Research & Validation",
            photo:
              "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for the Director of Research and Validation."
          },
          {
            name: "Outreach Lead",
            role: "Director of Outreach",
            photo:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for the Director of Outreach."
          }
        ]
      },
      {
        id: "advisors",
        eyebrow: "Advisors",
        title: "Scientific and engineering advisors",
        description:
          "Advisors provide outside perspective on technical rigor, safety, feasibility, and responsible growth.",
        people: [
          {
            name: "Scientific Advisor",
            role: "Advisor, Scientific Review",
            photo:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for a scientific advisor."
          },
          {
            name: "Engineering Advisor",
            role: "Advisor, Engineering Systems",
            photo:
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for an engineering advisor."
          },
          {
            name: "Community Advisor",
            role: "Advisor, Partnerships",
            photo:
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Professional portrait placeholder for a community advisor."
          }
        ]
      },
      {
        id: "members",
        eyebrow: "Members",
        title: "Project and research team",
        description:
          "Members contribute to the device library, marketplace operations, publications, and practical research projects.",
        people: [
          {
            name: "Device Library Member",
            role: "Device Documentation",
            photo:
              "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Project team photo placeholder for device documentation."
          },
          {
            name: "Marketplace Member",
            role: "Equipment Exchange",
            photo:
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Project team photo placeholder for marketplace operations."
          },
          {
            name: "Publications Member",
            role: "Research Communication",
            photo:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
            photoAlt: "Project team photo placeholder for publications work."
          }
        ]
      }
    ]
  }
};
