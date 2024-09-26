function Submit(e){
e.preventDefault();
  var name=document.getElementById('name').value;
  var password=document.getElementById('password').value;
  var gender=document.getElementsByName('gender'); 
  for (i=0;i<gender.length;i++){
    if(gender[i].Checked=true){
       var  valueofgender=gender[i].value
    }
  }
  var w=document.getElementById("education");
  var value = w.value;
  var text = w.options[w.selectedIndex].text;
  var hobbies=document.getElementsByName('hobbies');
  for(i=0;i<hobbies.length;i++){
    if(hobbies[i].Checked=true){
      var hobbiesText=hobbies[i].value;
    }
  }
 
  var comment= document.getElementById('comment').value;


  document.getElementById('nameResult').innerHTML=name;
  document.getElementById('passwordResult').innerHTML=password;
   document.getElementById('genderResult').innerHTML=valueofgender;
   document.getElementById('educationResult').innerHTML=text;
   document.getElementById('hobbiesResult').innerHTML+=hobbiesText;
   document.getElementById('commentResult').innerHTML=comment;
}
