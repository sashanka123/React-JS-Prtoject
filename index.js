function additem()
{
    var  inp=document.getElementById('in').value;
    var newdiv=document.getElementById('todo');
    var newdiv1=document.createElement('div');
    newdiv1.classList.add('div11');
    var newli=document.createElement('li');
    newli.innerHTML=inp;
    var icon=document.createElement('i');
    icon.classList.add("fas");
    icon.classList.add("fa-trash-alt");
    newdiv1.appendChild(newli);
    newdiv1.appendChild(icon);
    newdiv.appendChild(newdiv1);
}