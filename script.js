document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const track = document.querySelector("#mentorTrack");
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!track) return;
      const direction = button.dataset.scroll === "left" ? -1 : 1;
      track.scrollBy({ left: direction * 430, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const list = button.closest("[data-faq-list]");
      const isOpen = item.classList.contains("is-open");

      list.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("is-open");
        const trigger = faq.querySelector("button");
        const icon = trigger.querySelector("svg");
        trigger.setAttribute("aria-expanded", "false");
        if (icon) {
          icon.outerHTML = '<i data-lucide="chevron-down"></i>';
        }
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        const icon = button.querySelector("svg, i");
        if (icon) {
          icon.outerHTML = '<i data-lucide="chevron-up"></i>';
        }
      }

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Thanks. The Waah School team will reach out shortly.";
      }
      form.reset();
    });
  });
});
