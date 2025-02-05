// get references to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');

// handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload

    // collect input data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profilePicture = document.getElementById('profile-picture').files[0];
    const objective = document.getElementById('objective').value;
    const education = document.getElementById('education').value;
    const customEducation = document.getElementById('custom-education').value;
    const experience = document.getElementById('experience').value;
    const experienceYears = document.getElementById('experience-years').value;
    const customExperience = document.getElementById('custom-experience').value;
    const skills = Array.from(document.getElementById('skills').selectedOptions).map(option => option.value);
    const customSkills = document.getElementById('custom-skills').value;

    // generate the resume content dynamically
    let resumeHTML = `
        <div class="resume-container" contenteditable="true">
            <div class="left-section">
                ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" class="profile-picture">` : ''}
                <h2 class="name">${name}</h2>
                <p class="profession">Software Engineer</p>

                <section id="contact-info">
                    <h3>Contact Information</h3>
                    <p><b>Phone:</b> ${phone}</p>
                    <p><b>Email:</b> ${email}</p>
                </section>
            </div>

            <div class="right-section">
                <section id="objective">
                    <h3>Career Objective</h3>
                    <p>${objective}</p>
                </section>
    `;

    if (education || customEducation) {
        resumeHTML += `
            <section id="education">
                <h3>Education</h3>
                <p>${education}</p>
                <p>${customEducation}</p>
            </section>
        `;
    }

    if (experience || customExperience) {
        resumeHTML += `
            <section id="experience">
                <h3>Experience</h3>
                <p>${experience}</p>
                <p>${experienceYears} years</p>
                <p>${customExperience}</p>
            </section>
        `;
    }

    if (skills.length > 0 || customSkills) {
        resumeHTML += `
            <section id="skills">
                <h3>Skills</h3>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                    ${customSkills ? `<li>${customSkills}</li>` : ''}
                </ul>
            </section>
        `;
    }

    resumeHTML += `
            </div>
        </div>
    `;

    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('The resume display element is missing');
    }
});

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