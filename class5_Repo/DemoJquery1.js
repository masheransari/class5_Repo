$(document).ready(function()
{
   $("p").click(function()
   {
           $(this).hide();
   });
    $("h1").dblclick(function()
    {
       $(this).hide();
    }
    );
    $("#alert").hover(function()
    {
      alert("Please Don't Click here");
    },
        function()
        {
            alert("Ok Next Time Dont Click");
        }
    );
    $("#nameShow").click(function()
    {
        $("#name").show();
    });
    $("#nameHide").click(function()
    {
        $("#name").hide();
    });
    $("button").click(function(){
        $(this).fadeIn();
        /*  hide ke liye use kr rhe hai  */
        $("#nameShow").fadeOut("slow");
        $("#nameHide").fadeToggle(3000);
    });
    $("i").append("   ===Some Append Here's");

    $("i").prepend(" Not Here ===");

    $("#a1").click(function()
    {
        $("p").remove(".italic");
    });

$("#submit").click(function()
{
    $("h3").addClass("blue");
    $("#123").addClass("important");
});

    $("#BottomBtn").click(function()
    {
        $("#p1, #p2").css("backgroundColor","yellow");
    });

});