
$(document).ready(function() {
    $("#clicker").on("click", function() {
        $.ajax({
            method: "GET",
            url: "stuff.json",
        }).then(function(data) {
            console.log(data);
            console.log("Navigating ...");
            window.location.href = 'another.html';
        });
    });

    console.log("Document Loaded");
});

console.log("JavaScript Loaded");

