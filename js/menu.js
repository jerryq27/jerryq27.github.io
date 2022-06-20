---
---

$(document).ready(function($) {
    $("#my-menu").mmenu().on( "closed.mm", function() {
        $(".menu-button").show();
    });
    $("#back-button").click(function() {
        $("#my-menu").trigger("close.mm");
    })
    $(".menu-button").click(function() {
        $(".menu-button").hide();
        $("#my-menu").trigger("open.mm");
    });
});