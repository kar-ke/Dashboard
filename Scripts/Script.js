
$(document).ready(function () {
    
      // SideBar handler
        $('.sidebar-menu-button').click(function() {
            $('.sidebar-container').toggleClass("sidebar-close");
            $('.main-container').toggleClass('expand');
        });

      // Dropdown handler
        $('.btn-action').click(function() {
            $(this).parents('.dropdown-container').toggleClass('open_dropdown');
        });
})

