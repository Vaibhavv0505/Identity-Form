var row=1; // Create row Element which increase by one when a user Enrolled . 


var Entry=document.getElementById("entry"); 
Entry.addEventListener("click",DisplayDetails);

function DisplayDetails() {
    
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var website=document.getElementById("website").value;
    var link=document.getElementById("link").value;
    var skills=document.querySelectorAll('input[type="checkbox"]');

    //Regular Expression 
    var WebLinkRegExp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
    
    if(!name || !email.match(mailformat) || !website || !link || !(document.getElementById("male").checked || document.getElementById("female").checked)){
        if(name == ""){
            alert(" ** Please fill the Name field** ");
            return ;
        }else if(email == ""){
            alert(" ** Please fill the Email Id field ** ");
            return  ;
        }else if(!email.match(mailformat)){
            alert(" ** Invalid Email Id ! Please Enter Valid Format ** ");
            return  ;
        }else if (!website){
            alert(" ** Please fill the Website field ** ");
            return  ;
        }else if (!WebLinkRegExp.test(website)){
            alert(" ** Please fill the Vallid Website Address ** ");
            return  ;
        }
        else if (!link){
            alert(" ** Please fill the Image Link field ** ");
            return  ;
        }else if (!WebLinkRegExp.test(link)){
            alert(" ** Please fill the Valid Image Link field ** ");
            return  ;
        }
        else if(!(document.getElementById("male").checked || document.getElementById("female").checked)){
            alert("** Check The Gender Column ** ");
            return  ;
        }
    }

    // 
    var display=document.getElementById("display");
    var newRow=display.insertRow(row);   
    fadeIn(newRow);
    var b1=newRow.insertCell(0);       
    var b2=newRow.insertCell(1);    
    // GenderDescription 
    var GenderDescription=""; 
    if(document.getElementById("male").checked == true){
        GenderDescription+="Male";
    }else{
        GenderDescription+="Female";
    }

    //SkillString 
    var skillString="";
    for(let i=0;i<skills.length;i++){
        if(skills[i].checked)
        {  
            skillString+=skills[i].value+" ";      
        }
    } 
    //Create Image Element and Set Attribute Source to Link
    var x = document.createElement("IMG");
    x.setAttribute("src", link); 
    name="<b>"+name+"</b>"; 
    b1.innerHTML=name+"<br>"+GenderDescription+'<br>'+email+'<br><a href="'+website+'" target="'+website+'">'+website+'</a><br>'+skillString;
    b2.appendChild(x); 
    row++; 
    ResetAllDetails();
       
}
// Clear All The Value From the Input Form
function ResetAllDetails() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("link").value = "";
    var radio = document.querySelector('input[type=radio][name=gender]:checked');
    if (radio.checked) {
        radio.checked = false;
    }
    var skills = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < skills.length; i++) { 
        if (skills[i].checked) {
            skills[i].checked = false;
        }
    } 
}
//For Fade-In Transition
function fadeIn(el){
    el.classList.add('show');
    el.classList.remove('hide');  
  }