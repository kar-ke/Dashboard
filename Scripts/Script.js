
$(document).ready(function(){

    // Active NavBar
      $('.nav-link').click(function() {
          $('.nav-link').removeClass('active');
          $(this).addClass('active');
          
          // SideBar Accordion
          const menu = $('.sidebar-menu-items')
          const scrollHeight = $(menu)[0].scrollHeight;
          $(this).next('.sidebar-menu-items').css('height', menu.height() == 0 ? scrollHeight + 'px' : '0px')
          $(this).find('i').toggleClass('bx-chevron-down bx-chevron-right')
      });
  
      // Close SideBar
      $('.menu-icon').click(function() {
          $('.sidebar').toggleClass("sidebar-close");
          $('.main-container').toggleClass('expand');
      });
  
      // Dropdown
        $('.btn-action').click(function() {
            $(this).parents('.dropdown-container').toggleClass('open_dropdown');
        });


})




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


// summary chart dropdown 
function summary_dropdown_handler() {
    const current_state = document.querySelector(".summary-dropdown-list");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}

// Transaction chart dropdown 
function Transaction_dropdown_handler() {
    const current_state = document.querySelector(".transaction-dropdown-list");
    current_state.style.visibility = (current_state.style.visibility === "visible") ? "hidden" : "visible";
}