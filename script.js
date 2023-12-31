// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter-form").on("submit", function(e) {
    // Hindra formuläret från att skicka iväg användaren.
    e.preventDefault();

    // Validerings kod.
    let ok = true;

    $.each($("#newsletter-form input"), function() {
        if ($(this).val() === "") {
            $(this).css("background-color", "red");
            ok = false;
        } else {
            $(this).css("background-color", "white");
        }
    });

    console.log(ok);

    if (!ok) {
        return false;
    }

    // Om allting var korrekt - skicka vidare användaren.
    $("#newsletter-form")[0].submit();
});