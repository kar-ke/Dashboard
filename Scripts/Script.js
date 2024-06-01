$(document).ready(function() {

    // SideBar handler
    $('.sidebar-menu-button').click(function() {
        $('.sidebar-container').toggleClass("sidebar-close");
        $('.main-container').toggleClass('expand');
    });

    // Dropdown handler
    $('.btn-action').click(function() {
        $(this).parents('.dropdown-container').toggleClass('open_dropdown');
    });

    // accordian 
    $('.accordian').click(function () {
        $(this).find('.submenu').slideToggle();
        $(this).find('.sidebar-arrow').toggleClass('rotate-arrow');
    });
})



// change page 
function navigateTo(page) {

    $.ajax({
        url: page + ".html",
        success: function(result) {
            $(".main-container").html(result)
            addCard();
        },
        error: function(err) {
            console.log(err)
        }
    });
};


// add new card button function 
function addCard() {

    const template = $(".note-template")

    $(".open-popup").click(function() {
        $(".overlay").addClass("popup-trigger");
    });

    $(".popup-close-button").click(function() {
        $(".overlay").removeClass("popup-trigger");
        $('.note-title').val('');
        $('.note-description').val('');
    });


    $(".add-note").click(function() {

        let title = $(".note-title").val();
        let description = $(".note-description").val();

        if (title && description) {
            const clone = template.contents().clone();
            clone.find(".note-title-text").text(title);
            clone.find(".note-message-text").text(description);
            $(".no-card-message").hide();
            $(".notes-container").append(clone);

            // favourite button 
            $(".favourite-btn").click(function() {
                $(".favourite-btn").toggleClass("selected")
            })

            // delete button 
            $(clone.find('.delete-btn')).click(function() {
                $(this).closest('.note-card').remove();
            });

            // dropdown button 
            $(clone.find('.btn-action')).click(function() {
                $(this).parents('.dropdown-container').toggleClass('open_dropdown');
            });

            $(clone.find('.dropdown-link')).click(function() {
                let value = $(this).data('name');
                $(this).closest('.note-card').attr('data-filter', value)
                $(this).closest('.dropdown-container').toggleClass('open_dropdown')
            })
        }

        $('.overlay').removeClass("popup-trigger");
        $('.note-title').val('');
        $('.note-description').val('');
    });


    $(".discard-note").click(function() {
        $('.note-title').val('');
        $('.note-description').val('');
    })

    // filter notes 
    $(".filter").click(function() {
        const filter_as = $(this).data('type');

        $('.filter').removeClass('active');
        $(this).addClass("active");

        $('.note-card').each(function() {
            const cardValue = $(this).data("filter");
            if (filter_as === cardValue || filter_as === "all") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
};

// this comment is for a empty git PushManager, cause simply i dont want to break my git streak 