// Select all expandable topics
const toggles = document.querySelectorAll(".toggle");

// Add click event to each topic
toggles.forEach(toggle => {

    toggle.addEventListener("click", function () {

        // Find the content immediately after the clicked topic
        const content = this.nextElementSibling;

        // If there is no content, do nothing
        if (!content || !content.classList.contains("content")) {
            return;
        }

        // Toggle the content
        if (content.style.display === "block") {

            // Collapse
            content.style.display = "none";

            // Change ▼ back to ▶
            this.innerHTML = this.innerHTML.replace("▼", "▶");

            this.classList.remove("active");

        } else {

            // Expand
            content.style.display = "block";

            // Change ▶ to ▼
            this.innerHTML = this.innerHTML.replace("▶", "▼");

            this.classList.add("active");

        }

    });

});
