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
                    $("#project1name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project1name").toggle();
                }
            }
        );
        $("#project2").on(
            {
                mouseenter: function () {
                    $("#project2name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#project2name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project2name").toggle();
                }
            }
        );
        $("#project3").on(
            {
                mouseenter: function () {
                    $("#project3name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#project3name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project3name").toggle();
                }
            }
        );
        $("#project4").on(
            {
                mouseenter: function () {
                    $("#project4name").css('background', 'rgba(38, 31, 15,0.2)');
                    $("#project4name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project4name").toggle();
                }
            }
        );
        $("#project5").on(
            {
                mouseenter: function () {
                    $("#project5name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#project5name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project5name").toggle();
                }
            }
        );
        $("#project6").on(
            {
                mouseenter: function () {
                    $("#project6name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#project6name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project6name").toggle();
                }
            }
        );
        $("#project7").on(
            {
                mouseenter: function () {
                    $("#project7name").css('background', 'rgba(38, 31, 15,0.2)');
                    $("#project7name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project7name").toggle();
                }
            }
        );
        $("#project8").on(
            {
                mouseenter: function () {
                    $("#project8name").css('background', 'rgba(38, 31, 15,0.5)');
                    $("#project8name").toggle();
                },
                mouseleave: function () {
                    $(this).css('background', 'transparent');
                    $("#project8name").toggle();
                }
            }
        );
    }
);