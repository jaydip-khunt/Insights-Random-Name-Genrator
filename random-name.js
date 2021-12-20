document.getElementById("button-random-name-123").addEventListener("click", loadDoc)
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://randomuser.me/api?nationality=US", true);
    xhttp.onload = function(e){
        if(xhttp.responseText){
            var rObj = JSON.parse(xhttp.responseText);
            var rHTML = '';
            rHTML += '<table id="random-name-table">';
                rHTML += '<tr><th>Label</th><th>Value</th></tr>';
                rHTML += '<tr>';
                    rHTML += '<td>First Name</td> <td>'+rObj.results[0].name.first+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Last Name</td> <td>'+rObj.results[0].name.last+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Gender</td> <td>'+rObj.results[0].gender+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    var randomEmail = rObj.results[0].email;
                    rHTML += '<td>Email</td> <td>'+randomEmail.replace('example', 'yopmail')+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Phone</td> <td>'+rObj.results[0].phone+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Address</td> <td>'+rObj.results[0].location.street.number+", "+rObj.results[0].location.street.name+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>City</td> <td>'+rObj.results[0].location.city+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>State</td> <td>'+rObj.results[0].location.state+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Country</td> <td>'+rObj.results[0].location.country+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td>Postcode</td> <td>'+rObj.results[0].location.postcode+'</td>';
                rHTML += '</tr>';
                rHTML += '<tr>';
                    rHTML += '<td colspan="2"> <a href="https://yopmail.com/en/?login='+randomEmail.replace('@example.com', '')+'" target="_blank">Click here to create email</a></td>';
                rHTML += '</tr>';
            rHTML += '</table>';
            // localStorage.setItem("randomNameObj", rObj.results[0]);
            localStorage.setItem("randomName", rHTML);
            document.getElementById("random-name-123").innerHTML = rHTML;
            // chrome.tabs.executeScript({
            //     code: '(' + modifyDOM + ')();'
            // });
        }
    }
    xhttp.send();
}
if(localStorage.getItem("randomName")){
    document.getElementById("random-name-123").innerHTML = localStorage.getItem("randomName");
}
else{
    window.loadDoc();
}

// function modifyDOM() {
//     if(localStorage.getItem("randomName")){
//         document.getElementsByName("first_name")[0].value = "Johnny Bravo";
//     }
// }