// Theme Toggle Functionality
const toggleThemeButton = document.getElementById("toggle-theme");
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.textContent = `
    .dark-mode {
        background: #212529;
        color: white;
    }
    .dark-mode .resume-container {
        background: #2C2F33;
    }
    .dark-mode .right-section h3 {
        color: #FFD700;
    }
    .dark-mode .left-section {
        background: #004AAD;
    }
    .dark-mode button {
        background: #FF6B00;
    }
    .dark-mode button:hover {
        background: #D95A00;
    }
`;
document.head.appendChild(darkModeStyles);

// Toggle Skills Section
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});

// Download Resume as PDF
const downloadButton = document.getElementById("download-resume");
downloadButton.addEventListener("click", () => {
    alert("This feature requires PDF generation (e.g., html2pdf.js).");
});