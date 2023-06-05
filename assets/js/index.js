$('#log_user').submit(function(event){
    event.preventDefault();

    var unIndexedArray = $(this).serializeArray();
    var data={};
    
    $.map(unIndexedArray,function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data)

    var request = {
        "url":`http://localhost:8080/api/ulogin`,
        "headers": { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        if(response.message == "Validated"){
            // console.log(response);
            alert("Logged IN!");
            window.location = "/user_home";
        }
    }).catch(function(err){
        alert("Email or Password is wrong!")
    })
})


$('#reg_user').submit(function(event){
    event.preventDefault();

    var unIndexedArray = $(this).serializeArray();
    var data={};
    
    $.map(unIndexedArray,function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data)

    var request = {
        "url":`http://localhost:8080/api/user`,
        "headers": { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("User Created Successfuly!");
        window.location = "/user_login";
    })
})

$('#log_rider').submit(function(event){
    event.preventDefault();

    var unIndexedArray = $(this).serializeArray();
    var data={};
    
    $.map(unIndexedArray,function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data)

    var request = {
        "url":`http://localhost:8080/api/rlogin`,
        "headers": { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        if(response.message == "Validated"){
            alert("Logged IN!");
            // console.log(response);
            window.location = '/rider_home';
        }
    }).catch(function(err){
        alert("Email or Password is wrong!")
    })
})


$('#reg_rider').submit(function(event){
    event.preventDefault();

    var unIndexedArray = $(this).serializeArray();
    var data={};
    
    $.map(unIndexedArray,function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data)

    var request = {
        "url":`http://localhost:8080/api/rider`,
        "headers": { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("User Created Successfuly!");
        window.location = "/rider_login";
    })
})

$('#new_ride').submit(function(event){
    event.preventDefault();

    var unIndexedArray = $(this).serializeArray();
    var data={};
    
    $.map(unIndexedArray,function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data)

    var request = {
        "url":`http://localhost:8080/api/setride`,
        "headers": { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Ride added Successfuly!");
        window.location = "/rider_home";
    })
})


// if(window.location.pathname == "/"){
//     $on_delete = $(".table tbody td a.delete");
//     console.log("IN HERE")
//     $on_delete.click(function(){
//         var id = $(this).attr("data-id");

//         var request = {
//             "url":`http://localhost:3000/api/user/${id}`,
//             "method":"DELETE"
//         }
        
//         if(confirm("Do you really want to delete this record.")){
//                 $.ajax(request).done(function(response){
//                     alert("Record Deleted Successfully!");
//                     location.reload()
//                 })
//             }
//         })
// }
