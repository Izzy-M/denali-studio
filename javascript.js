$("document").ready(
    function () {
        $("#design").click(
            function () {
                $("#des-icon").toggle();
                $("#des-content").toggle();

            }
        );
        $("#development").click(
            function () {
                $("#dev-icon").toggle();
                $("#dev-content").toggle();
            }
        );
        $("#management").click(
            function () {
                $("#m-icon").toggle();
                $("#m-content").toggle();
            }
        );
        $("#project1").on(
            {
                mouseenter: function () {
                    $("#project1name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover1").toggle();
                    $("#project1name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover1").toggle();
                    $("#project1name").toggle();
                }
            }
        );
        $("#project2").on(
            {
                mouseenter: function () {
                    $("#project2name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover2").toggle();
                    $("#project2name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover2").toggle();
                    $("#project2name").toggle();
                }
            }
        );
        $("#project3").on(
            {
                mouseenter: function () {
                    $("#project3name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover3").toggle();
                    $("#project3name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover3").toggle();
                    $("#project3name").toggle();
                }
            }
        );
        $("#project4").on(
            {
                mouseenter: function () {
                    $("#project4name").css('background', 'rgba(38, 31, 15,0.2)');
                    $("#cover4").toggle();
                    $("#project4name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover4").toggle();
                    $("#project4name").toggle();
                }
            }
        );
        $("#project5").on(
            {
                mouseenter: function () {
                    $("#project5name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover5").toggle();
                    $("#project5name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover5").toggle();
                    $("#project5name").toggle();
                }
            }
        );
        $("#project6").on(
            {
                mouseenter: function () {
                    $("#project6name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover6").toggle();
                    $("#project6name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover6").toggle();
                    $("#project6name").toggle();
                }
            }
        );
        $("#project7").on(
            {
                mouseenter: function () {
                    $("#project7name").css('background', 'rgba(38, 31, 15,0.2)');
                    $("#cover7").toggle();
                    $("#project7name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover7").toggle();
                    $("#project7name").toggle();
                }
            }
        );
        $("#project8").on(
            {
                mouseenter: function () {
                    $("#project8name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#cover8").toggle();
                    $("#project8name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#cover8").toggle();
                    $("#project8name").toggle();
                }
            }
        );
    }
);