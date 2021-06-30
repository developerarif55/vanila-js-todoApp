// intial declaration

const form = document.getElementById('addForm');
const itemList =document.getElementById('items');
const filter = document.getElementById('filter');



// form submit event 
form.addEventListener('submit', (e) =>{
e.preventDefault();
console.log(e)

const newItem = document.getElementById('item').value;


if (newItem === '') {
    msg= "Enter your Task"
        alert(msg)
       
}else{
    const li = document.createElement('li');
    li.className ='list-group-item';
      // add node text with input value
   li.appendChild(document.createTextNode(newItem));
   itemList.appendChild(li);
       // Create del button element
  const deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Remove'));

  // Append button to li
  li.appendChild(deleteBtn);

}
}); 

