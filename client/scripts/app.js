$(document).ready(function(){
    $("#examplecheck").click(function (){
        //$(".animate-if").toggle(this.checked);
        if($("#examplecheck").is(':checked')) {
            $(".animate-if").show();
        } else {
            $(".animate-if").hide();
        }
    });
});
