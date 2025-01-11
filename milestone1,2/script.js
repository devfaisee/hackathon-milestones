var toggleButtton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButtton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
