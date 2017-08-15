$.ajax({
    url : 'url'
    , type : 'POST'
    , dataType : 'json'
    , success: function (result) {
        console.log("success"+JSON.stringify(result.data));
        console.log("msg"+result.msg );
    }
   , error:function(request,status,error){
        console.log("error");
    }
});
