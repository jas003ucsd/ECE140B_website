function get_week() {
    let the_week = document.getElementById('weeks').value; // plate id
    console.log("Submit clicked");

    let theURL = '/week/'+the_week
    fetch(theURL)
//    .then(response=>response.json())
//        .then(function(response) {
//           console.log(response);
//           let a_div = document.getElementById('object_location')
//           a_div.innerHTML = response['map']
//           });
//

}
//function save_object() {
//    let theURL = '/save_object/1'
//    fetch(theURL)
//    .then(response=>response.json())
//        .then(function(response) {
//           console.log(response);
//           let a_div = document.getElementById('object_location')
//           a_div.innerHTML = response['map']
//           });
//}
