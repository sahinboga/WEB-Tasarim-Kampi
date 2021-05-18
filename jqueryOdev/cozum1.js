// görev 1
$(document).ready(function () {

    var header = $("article h2").toArray();
    $("#gorev1 button").click(function () {
        for (var i = 0; i < 3; i++) {
            $("#gorev1 ul").append('<li> ' + header[i].innerHTML + '</li>');
        }

    });

    // görev 2
    $("#gorev2 button").click(function () {
        $("#gorev2 input").val(header.length);
    });

    // görev 3
    $("#gorev3 button").click(function () {
        $("#gorev3 input").val($("article h1").text());
    });

    // görev 4
    var texts = $("article p").toArray();
    $("#gorev4 button").click(function () {
        for (var i = 0; i < texts.length; i++)
            header[i].innerHTML += " (" + texts[i].innerHTML.length + " karakter)";
    });

    // görev 5
    $("#gorev5 button").click(function () {
        $("article h1").css("color", "red");
        $("article h2:odd").css("color", "blue");
        $("article h2:even").css("color", "orange");
    });

    // görev 6
    $("#gorev6 button").click(function () {
        $("article div:first").fadeOut();
    });

    // görev 7
    $("#gorev7 button").click(function () {
        for (var i = 0; i < header.length; i++) {
            if (header[i].innerHTML.includes("can"))
                $("#gorev7 ul").append('<li> ' + header[i].innerHTML + '</li>');
        }
    });

    // görev 8
    $("#gorev8 button").click(function () {

        $.ajax({
            url: "lorem.html",
            type: "get",
            success: function (sonuc) {
                $("article div:first").before("<div> <h2>Lorem</h2> <p>" + sonuc + "</p> </div>");
            }
        });

    })
    // görev 9

    $("h1,h2").mouseenter(function () {
        $("#gorev9 input").val(this.innerHTML);
    });

    // görev 10
    $("footer").before("<img id='check' src='check.png' width=100 height=100>");
    $("#check").css("position", "fixed").css("right", "0").css("bottom", "0");
});




