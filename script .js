document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const list = button.closest("[data-faq-list]");
      const isOpen = item.classList.contains("is-open");

      list.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("is-open");
        const trigger = faq.querySelector("button");
        trigger.setAttribute("aria-expanded", "false");
        const icon = trigger.querySelector("svg, i");
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
        note.textContent =
          "Thanks. We will reach out with the next workshop details shortly.";
      }
      form.reset();
    });
  });
});
