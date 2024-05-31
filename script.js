document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tags span");
  const jobCards = document.querySelectorAll(".job-card");

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
});
