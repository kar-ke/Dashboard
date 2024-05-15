
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll(".countries-dropdown, .mail-to-dropdown, .notifications-dropdown, .profile-dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.style.visibility = "hidden";
    });
}


// Primary header functionalities
function country_dropdown_handler() {
    const current_state = document.querySelector(".countries-dropdown");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

function mail_dropdown_handler() {
    const current_state = document.querySelector(".mail-to-dropdown");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

function notification_dropdown_handler() {
    const current_state = document.querySelector(".notifications-dropdown");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

function profile_dropdown_handler() {
    const current_state = document.querySelector(".profile-dropdown");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}


// Secondary header functionalities 
function settings_dropdown_handler() {
    const current_state = document.querySelector(".settings-dropdown");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

// chart dropdown 
function chart_dropdown_handler() {
    const current_state = document.querySelector(".revenue-dropdown-list");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

// summary chart dropdown 
function summary_dropdown_handler() {
    const current_state = document.querySelector(".summary-dropdown-list");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}