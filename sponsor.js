// "<div class='row text-center'><h3>Platinum Sponsors</h3><div class='col-md-4'>\
// <img src='img/border2.png' class='border2 border2a' alt='sponsor-border'>\
// <img src='img/micro.png' alt='sponsor-image' class='img-responsive sponsora center-block'>\
// </div></div>";
$(document).ready(()=>{

    $.ajax({
        url:'./assets/sponsors.json',
        beforeSend: (xhr)=>{
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        }  
    }).done((response,status,xhr)=>{
        if(match(status,"success")){
            findandseparate(response);
        }
        console.log("status not OK",status);
    }).fail((err)=>{
        console.log("Error",err);
    }).always(()=>{

    });
});

match = function(str1,str2){
    return str1 === str2;
}

findandseparate = function(response){
        //console.log("results ", response);
        let text = "";
        $.each(response,(key,value) => {
            let title=  "<div class='row text-center'><h3>" + key +" Sponsors</h3>";
            $.each(value,(key,item) => {
                //console.log("item",value["imgsrc"]);
                let str = "<div class='col-md-4'><img src='"+ item.imgsrc +"' class='border2 border2a' alt='"+item.altext+"'>\
                <img src='"+ item.imgmicro +"' alt='"+item.altext+"' class='img-responsive sponsora center-block'></div>";
                title +=str;
                str = "";
            });
            text += title + "</div><br><br /><br /><br />";
            title = "";
        })
            
        $("#sponsors-content").append(text);
}