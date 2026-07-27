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
  render("[data-vision-pillars]", content.vision?.pillars, principleCard);
  render("[data-timeline]", content.vision?.timeline, timelineItem);
  render("[data-governance-roles]", content.team?.governance?.roles, governanceRole);
  render("[data-team-groups]", content.team?.groups, teamGroup);
  setupTeamFilters();

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
        <p>${escapeHtml(item.label)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <span>${escapeHtml(item.text)}</span>
        <a href="${escapeHtml(item.href)}">Learn more</a>
      </article>
    `;
  }

  function deviceRecord(item) {
    return `
      <article class="record-card">
        <div>
          <p class="record-meta">${escapeHtml(item.type)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
        <span class="status-pill">${escapeHtml(item.status)}</span>
      </article>
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
      <article class="record-card">
        <div>
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
    return `
      <article class="profile-card">
        <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.photoAlt || `Profile photo placeholder for ${item.name}.`)}" loading="lazy" />
        <div class="profile-card-body">
          <p>${escapeHtml(item.role)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <span>${escapeHtml(item.bio)}</span>
        </div>
      </article>
    `;
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
    if (!filterButtons.length || !categories.length) return;

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
      });
    });
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
