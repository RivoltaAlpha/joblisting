document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tags span");
  const jobCards = document.querySelectorAll(".job-card");
  const searchBox = document.getElementById("searchBox");
  const backButton = document.getElementById("backButton");

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedTag = this.textContent;
      if (selectedTag) {
        jobCards.forEach((card) => {
          const cardTags = card.querySelectorAll(".tags span");
          let matchFound = false;
          cardTags.forEach((cardTag) => {
            if (cardTag.textContent === selectedTag) {
              matchFound = true;
            }
          });
          if (matchFound) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
  searchBox.addEventListener("input", filterJobs);

  function filterJobs() {
    const filter = searchBox.value.trim().toLowerCase();
    let filtered = false;

    jobCards.forEach((card) => {
      const role = card.getAttribute("data-role").toLowerCase();
      const level = card.getAttribute("data-level").toLowerCase();
      const languages = card.getAttribute("data-languages").toLowerCase();
      const tools = card.getAttribute("data-tools").toLowerCase();

      if (
        role.includes(filter) ||
        level.includes(filter) ||
        languages.includes(filter) ||
        tools.includes(filter)
      ) {
        card.style.display = "";
        filtered = true;
      } else {
        card.style.display = "none";
      }
    });

    // Toggle back button visibility
    if (filtered) {
      backButton.style.display = "inline-block";
    } else {
      backButton.style.display = "none";
    }
  }

  backButton.addEventListener("click", function () {
    searchBox.value = "";
    filterJobs();
    window.location.reload();
  });
});
