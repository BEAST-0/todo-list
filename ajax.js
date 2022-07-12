
function validate(mycallback){
    let user=document.getElementById("user");
    let password=document.getElementById("password");

if(user.value==='admin' && password.value==12345){
  mycallback();

}
else{
      Swal.fire("User Id or password is wrong");
}


}



function input(){

    var x=document.getElementById("content");
    x.innerHTML=`    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h5>TO-DO-LIST</h5></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="./index.html"><h3>Log Out</h3></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>   



<table class="table table-dark table-striped">
<thead>
<tr>
  <th scope="col">Id</th>
  <th scope="col">Title</th>
  <th scope="col">Completed</th>
</tr>
</thead>
<tbody id="list">
</table>


`
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState==4 && this.status==200){
    var response = JSON.parse(this.responseText);

    for(let i=0;i<response.length;i++){
     document.getElementById("list").innerHTML+=` <tr style="border: 10px solid rgb(75, 46, 204); border-radius: 1rem;">
     <td style="width:200px;">${response[i].id}</td>
     <td>${response[i].title}</td>
     <td style="width:40px;";><input type="checkbox" class="check"></td>
     </tr>`
      }


     }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();



}



// #todoList{
//   border: 10px solid rgb(75, 46, 204);
//   border-radius: 1rem;
// }