const form=document.getElementById("userForm");
const error=document.getElementById("error");
const tableBody=document.getElementById("tableBody");

form.addEventListener("submit",function(e){
    e.preventDefault();

const firstname=document.getElementById("firstname").value.trim();
const lastname=document.getElementById("lastname").value.trim();
const age=document.getElementById("age").value;
const gender=document.getElementById("gender").value;

if(!firstname|| !lastname|| !age|| !gender){
    error.textContent= "All content is required!";
    return;
}

if(age <=0){
    error.textContent="Age must be greater than 0";
    return;
}

error.textContent="";

const row = document.createElement("tr");
row.innerHTML=`
<td>${firstname}</td>
<td>${lastname}</td>
<td>${age}</td>
<td>${gender}</td>
`;
tableBody.appendChild(row);
form.reset();
});
