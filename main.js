function createtable(){
    var table = document.getElementById("tableau");
    var newrow = table.insertRow(table.length);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);

    var type=document.getElementsByClassName("radio");
    titre = document.getElementById("Titre").value,
    auteur = document.getElementById("Auteur").value,
    prix = document.getElementById("Prix").value,
    pub = document.getElementById("pub").value,
    langue = document.getElementById("Langue").value;
    var test="";
    for(i=0;i<type.length;i++){
        if(type[i].checked)
        {
            test=type[i].value;
        }
    }
    cell1.innerHTML= titre;
    cell2.innerHTML= auteur;
    cell3.innerHTML= prix;
    cell4.innerHTML= pub ;
    cell5.innerHTML= langue;
    cell6.innerHTML= test;
    cell7.innerHTML= '<input  style="width:188px"type="submit" onclick="deleterow(this)" value="Supprimer">'+'<input style="width:188px" type="submit" onclick="EditRow(this)" id="btnEdit"  value="Modifier">'
    
                              
}
var table = document.getElementById("tableau");
function deleterow(r)
{
    var i =r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);

}
function deleterow(td){
    if(confirm('Vous êtes sure?')){
        row = td.parentElement.parentElement;
        document.getElementById('tableau').deleteRow(row.rowIndex);
    }
    resetForm();

}
function EditRow(r){
    var type=document.getElementsByClassName("radio");
var i = r.parentNode.parentNode.rowIndex;
var R=table.rows[i];
if(document.getElementById("btnEdit").value=="Modifier"  ){   
    document.getElementById("Titre").value = R.cells[0].innerHTML;
    document.getElementById("Auteur").value= R.cells[1].innerHTML;
    document.getElementById("Prix").value= R.cells[2].innerHTML;
    document.getElementById("pub").value= R.cells[3].innerHTML;
    document.getElementById("Langue").value=R.cells[4].innerHTML;
    for(i=0;i<type.length;i++)
    {
        if(R.cells[5].innerHTML==type[i].value)
        {
            type[i].checked=true;
        }
    }  
    document.getElementById("btnEdit").value="save"
    document.getElementById('btn').setAttribute("disabled","true");         
} 
         
else{
    R.cells[0].innerHTML = document.getElementById("Titre").value;
    R.cells[1].innerHTML =  document.getElementById("Auteur").value;
    R.cells[2].innerHTML =   document.getElementById("Prix").value;
    R.cells[3].innerHTML =  document.getElementById("pub").value;
    R.cells[4].innerHTML =  document.getElementById("Langue").value;
    for(i=0;i<type.length;i++)
    {
        if(type[i].checked==true)
        {
            R.cells[5].innerHTML=type[i].value;
        }
    } 
    document.getElementById("btnEdit").value="Modifier"
    document.getElementById('btn').removeAttribute("disabled");  
    resetForm();          
} 
}






