(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    console.error("PORTFOLIO_CONTENT is missing. Check content.js.");
    return;
  }

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const setLink = (selector, url) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!url) {
        element.hidden = true;
        return;
      }

      element.href = url;
    });
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const getYouTubeId = (url) => {
    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1).split("/")[0];
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/")[2];
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/")[2];
      }

      return parsed.searchParams.get("v");
    } catch {
      return "";
    }
  };

  const renderMedia = (project) => {
    const media = project.media ?? { type: "placeholder" };

    if (media.type === "youtube") {
      const videoId = getYouTubeId(media.url);

      if (videoId) {
        return `
          <div class="project-media project-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}"
              title="${escapeHtml(project.title)} video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </div>
        `;
      }
    }

    if (media.type === "image" && media.url) {
      const image = `
        <img
          src="${escapeHtml(media.url)}"
          alt="${escapeHtml(media.alt || project.title)}"
          loading="lazy">
      `;

      /*
        media.link is preferred for the image click.
        If it is omitted, projectUrl is used as a fallback.
      */
      const mediaLink = media.link || project.projectUrl;

      if (mediaLink) {
        return `
          <a
            class="project-media project-image-link"
            href="${escapeHtml(mediaLink)}"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch ${escapeHtml(project.title)} video">
            ${image}
            <span class="project-play-badge" aria-hidden="true">▶</span>
          </a>
        `;
      }

      return `<div class="project-media">${image}</div>`;
    }

    return `
      <div class="project-media project-placeholder">
        <img src="assets/project-placeholder.svg" alt="" aria-hidden="true">
        <span>${escapeHtml(media.label || "Add project media")}</span>
      </div>
    `;
  };

  const renderProfile = () => {
    const profile = content.profile;

    setText('[data-profile="name"]', profile.name);
    setText('[data-profile="availability"]', profile.availability);
    setText('[data-profile="intro"]', profile.intro);
    setText('[data-profile="aboutTitle"]', profile.aboutTitle);
    setText('[data-profile="about"]', profile.about);
    setText('[data-profile="contactLabel"]', profile.contactLabel);

    setLink('[data-link="roblox"]', profile.robloxUrl);
    setLink('[data-link="contact"]', profile.contactUrl);

    document.title = `${profile.name} — Roblox Scripter`;

    const facts = document.querySelector("#quick-facts");
    facts.innerHTML = profile.quickFacts
      .map((fact) => `<li>${escapeHtml(fact)}</li>`)
      .join("");
  };

  const renderProjects = () => {
    const grid = document.querySelector("#projects-grid");

    grid.innerHTML = content.projects
      .map((project, index) => {
        const tags = project.tags
          .map((tag) => `<li>${escapeHtml(tag)}</li>`)
          .join("");

        const title = project.projectUrl
          ? `<a href="${escapeHtml(project.projectUrl)}" target="_blank" rel="noreferrer">${escapeHtml(project.title)} <span aria-hidden="true">↗</span></a>`
          : escapeHtml(project.title);

        return `
          <article class="project-card">
            ${renderMedia(project)}
            <div class="project-content">
              <p class="project-number">0${index + 1}</p>
              <h3>${title}</h3>
              <p>${escapeHtml(project.description)}</p>
              <ul class="tag-list">${tags}</ul>
            </div>
          </article>
        `;
      })
      .join("");
  };

  const renderServices = () => {
    const grid = document.querySelector("#services-grid");

    grid.innerHTML = content.services
      .map(
        (service) => `
          <article class="service-card">
            <span>${escapeHtml(service.number)}</span>
            <h3>${escapeHtml(service.title)}</h3>
            <p>${escapeHtml(service.description)}</p>
          </article>
        `
      )
      .join("");
  };

  const renderProcess = () => {
    const list = document.querySelector("#process-list");

    list.innerHTML = content.process
      .map(
        (step, index) => `
          <li>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${escapeHtml(step.title)}</strong>
              <p>${escapeHtml(step.description)}</p>
            </div>
          </li>
        `
      )
      .join("");
  };

  const setupTheme = () => {
    const root = document.documentElement;
    const button = document.querySelector("#theme-button");
    const storedTheme = localStorage.getItem("portfolio-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      root.dataset.theme = storedTheme;
    }

    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  };

  renderProfile();
  renderProjects();
  renderServices();
  renderProcess();
  setupTheme();

  document.querySelector("#year").textContent = new Date().getFullYear();
})();
