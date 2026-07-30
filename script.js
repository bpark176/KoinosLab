(function () {
  const content = window.koinosLabContent || {};

  document.querySelectorAll("[data-field]").forEach((node) => {
    const value = getValue(content, node.dataset.field);
    if (typeof value === "string") node.textContent = value;
  });

  render("[data-home-previews]", content.home?.previews, previewCard);
  render("[data-publications-preview]", content.publications?.items?.slice(0, 2), publicationItem);
  render("[data-devices]", content.devices?.items, deviceRecord);
  render("[data-device-pathway]", content.devices?.pathway, processCard);
  render("[data-marketplace-listings]", content.marketplace?.listings, marketplaceRecord);
  render("[data-marketplace-principles]", content.marketplace?.principles, principleCard);
  render("[data-publications]", content.publications?.items, publicationItem);
  render("[data-publication-categories]", content.publications?.categories, principleCard);
  render("[data-about-focus]", content.about?.focusAreas, principleCard);
  render("[data-about-approach]", content.about?.approach, processCard);
  render("[data-vision-pillars]", content.vision?.pillars, principleCard);
  render("[data-timeline]", content.vision?.timeline, timelineItem);
  render("[data-governance-roles]", content.team?.governance?.roles, governanceRole);
  render("[data-team-groups]", content.team?.groups, teamGroup);
  setupTeamFilters();
  setupProjectScrollSpy();
  setupRevealAnimations();

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav-page]").forEach((link) => {
    if (link.dataset.navPage === page) link.setAttribute("aria-current", "page");
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function render(selector, items, template) {
    const target = document.querySelector(selector);
    if (!target || !Array.isArray(items)) return;
    target.innerHTML = items.map(template).join("");
  }

  function previewCard(item) {
    return `
      <article class="preview-card">
        <a class="preview-card-link" href="${escapeHtml(item.href)}">
          ${responsiveImage(item, "(max-width: 760px) 100vw, 50vw")}
          <span class="preview-card-body">
            <span class="preview-card-label">${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <span class="preview-card-copy">${escapeHtml(item.text)}</span>
            <span class="text-link">Explore ${escapeHtml(item.title.toLowerCase())}</span>
          </span>
        </a>
      </article>
    `;
  }

  function deviceRecord(item) {
    const comingSoonClass = item.comingSoon ? " is-coming-soon" : "";

    return `
      <a class="record-card record-card-link${comingSoonClass}" href="${escapeHtml(item.href)}" aria-label="View ${escapeHtml(item.name)} project">
        ${responsiveImage(item, "(max-width: 760px) 100vw, 36vw")}
        <div class="record-card-body">
          <p class="record-meta">${escapeHtml(item.type)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="record-card-footer">
            <span class="status-pill">${escapeHtml(item.status)}</span>
            <span class="record-card-action">View documentation <span aria-hidden="true">&rarr;</span></span>
          </div>
        </div>
      </a>
    `;
  }

  function processCard(item) {
    return `
      <article class="process-card">
        <span>${escapeHtml(item.step)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `;
  }

  function marketplaceRecord(item) {
    return `
      <article class="record-card marketplace-record">
        ${responsiveImage(item, "(max-width: 760px) 100vw, 36vw")}
        <div class="record-card-body">
          <p class="record-meta">${escapeHtml(item.tag)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </article>
    `;
  }

  function publicationItem(item) {
    return `
      <article class="publication-item">
        <div class="publication-kicker">
          <span>${escapeHtml(item.type)}</span>
          <span>${escapeHtml(item.date)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="authors">${escapeHtml(item.authors)}</p>
        <p>${escapeHtml(item.summary)}</p>
      </article>
    `;
  }

  function principleCard(item) {
    return `
      <article class="principle-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `;
  }

  function timelineItem(item) {
    return `
      <article class="timeline-item">
        <span>${escapeHtml(item.phase)}</span>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `;
  }

  function governanceRole(item) {
    return `
      <article class="governance-role">
        <span aria-hidden="true"></span>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `;
  }

  function teamGroup(group) {
    return `
      <section class="team-category" data-team-category="${escapeHtml(group.id)}">
        <div class="team-category-header">
          <p class="eyebrow">${escapeHtml(group.eyebrow)}</p>
          <h2>${escapeHtml(group.title)}</h2>
          <p>${escapeHtml(group.description)}</p>
        </div>
        <div class="profile-grid">
          ${group.people.map(profileCard).join("")}
        </div>
      </section>
    `;
  }

  function profileCard(item) {
    const affiliation = item.affiliation
      ? `<p class="profile-affiliation">${escapeHtml(item.affiliation)}</p>`
      : "";
    const placeholderClass = item.placeholder ? " profile-card-placeholder" : "";
    const chapterAttribute = item.chapter
      ? ` data-team-chapter="${escapeHtml(item.chapter)}"`
      : "";

    return `
      <article class="profile-card${placeholderClass}"${chapterAttribute}>
        ${responsiveImage(
          {
            image: item.photo,
            imageAlt: item.photoAlt || `Profile photo placeholder for ${item.name}.`,
            imageWidth: item.imageWidth || 460,
            imageHeight: item.imageHeight || 205
          },
          "(max-width: 760px) 100vw, 25vw"
        )}
        <div class="profile-card-body">
          <h3>${escapeHtml(item.name)}</h3>
          <p class="profile-role">${escapeHtml(item.role)}</p>
          ${affiliation}
        </div>
      </article>
    `;
  }

  function responsiveImage(item, sizes) {
    const srcset = item.imageSrcset
      ? ` srcset="${escapeHtml(item.imageSrcset)}" sizes="${escapeHtml(sizes)}"`
      : "";
    const width = Number(item.imageWidth) || 960;
    const height = Number(item.imageHeight) || 640;

    return `<img src="${escapeHtml(item.image)}"${srcset} width="${width}" height="${height}" alt="${escapeHtml(
      item.imageAlt || ""
    )}" loading="lazy" decoding="async" />`;
  }

  function getValue(source, path) {
    return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
  }

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  function setupTeamFilters() {
    const filterButtons = document.querySelectorAll("[data-team-filter]");
    const categories = document.querySelectorAll("[data-team-category]");
    const chapterFilters = document.querySelector("[data-team-chapter-filters]");
    const chapterButtons = document.querySelectorAll("[data-team-chapter]");
    const leadershipCategory = document.querySelector('[data-team-category="leadership"]');
    if (!filterButtons.length || !categories.length) return;

    const setChapter = (selectedButton) => {
      const selectedChapter = selectedButton.dataset.teamChapter;

      chapterButtons.forEach((item) => {
        const isActive = item === selectedButton;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      leadershipCategory?.querySelectorAll("[data-team-chapter]").forEach((profile) => {
        profile.hidden =
          selectedChapter !== "all" && profile.dataset.teamChapter !== selectedChapter;
      });
    };

    chapterButtons.forEach((button) => {
      button.addEventListener("click", () => setChapter(button));
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.teamFilter;
        filterButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        categories.forEach((category) => {
          const isVisible = selected === "all" || category.dataset.teamCategory === selected;
          category.hidden = !isVisible;
        });

        if (chapterFilters) {
          chapterFilters.hidden = selected !== "leadership";
        }

        if (selected === "leadership") {
          const allChaptersButton = document.querySelector('[data-team-chapter="all"]');
          if (allChaptersButton) setChapter(allChaptersButton);
        } else {
          leadershipCategory?.querySelectorAll("[data-team-chapter]").forEach((profile) => {
            profile.hidden = false;
          });
        }
      });
    });
  }

  function setupProjectScrollSpy() {
    const nav = document.querySelector(".project-index nav");
    if (!nav) return;

    const entries = Array.from(nav.querySelectorAll('a[href^="#"]'))
      .map((link) => {
        const id = decodeURIComponent(link.hash.slice(1));
        const section = document.getElementById(id);
        return section ? { id, link, section } : null;
      })
      .filter(Boolean);

    if (!entries.length) return;

    let activeId = "";
    let frameRequested = false;

    const setActive = (id) => {
      if (id === activeId) return;
      activeId = id;

      entries.forEach((entry) => {
        const isActive = entry.id === id;
        entry.link.classList.toggle("is-active", isActive);
        if (isActive) {
          entry.link.setAttribute("aria-current", "location");
        } else {
          entry.link.removeAttribute("aria-current");
        }
      });
    };

    const updateActiveSection = () => {
      frameRequested = false;
      const readingLine = Math.min(window.innerHeight * 0.32, 280);
      let current = entries[0];

      entries.forEach((entry) => {
        if (entry.section.getBoundingClientRect().top <= readingLine) current = entry;
      });

      const pageBottom = window.scrollY + window.innerHeight;
      if (pageBottom >= document.documentElement.scrollHeight - 4) {
        current = entries[entries.length - 1];
      }

      setActive(current.id);
    };

    const requestUpdate = () => {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    entries.forEach((entry) => {
      entry.link.addEventListener("click", () => setActive(entry.id));
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateActiveSection();
  }

  function setupRevealAnimations() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll(
      ".section-heading, .mission-layout, .record-card, .publication-item, .principle-card, .process-card, .profile-card, .timeline-item, .governance-role, .project-doc-section, .coming-doc-grid > div"
    );
    if (!targets.length || !("IntersectionObserver" in window)) return;

    targets.forEach((target) => target.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
