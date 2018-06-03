function new1()
{
    var a=alert("It will only give you a preview of your profile after editing .It will not edit your profile.")
    var uname=prompt("enter user name");
    var bio=prompt("enter bio");
    var cover=prompt("enter url of cover photo");
    var picture=prompt("enter url for profile picture");


    $("#uname").text(uname);
    $("#bio").text(bio);    
    $("#cover").css("background","url('"+cover+"')");
    $("#pro").attr("src",picture);
   

}
function new2()
{
    var bla = $('#T').val();
    var cln=$("#item").clone();
    cln.attr("id","z1");
    $("#D").append(cln);
   
    $("#z1 #E").text(bla);
    $( ".media-list" ).remove();
}

function new3()
{
    var b=alert("You followed Peter Richards");
}