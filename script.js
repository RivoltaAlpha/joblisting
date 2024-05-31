document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tags span");
  const jobCards = document.querySelectorAll(".job-card");
  const searchBox = document.getElementById('searchBox');

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

  searchBox.addEventListener('keyup', filterJobs);

    function filterJobs() {
        const filter = searchBox.value.trim().toLowerCase();

        jobCards.forEach(card => {
            const role = card.getAttribute('data-role').toLowerCase();
            const languages = card.getAttribute('data-languages').toLowerCase();

            if (role.includes(filter) || languages.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
