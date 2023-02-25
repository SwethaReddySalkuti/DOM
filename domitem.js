/*var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
*/

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

function addItem(e)
{
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));

  var delbut = document.createElement('button');

  delbut.className = 'btn btn-danger btn-sm float-right delete';

  delbut.appendChild(document.createTextNode('X'));

  li.appendChild(delbut);

  itemList.appendChild(li);
}

function removeItem(e)
{
  //e.preventDefault();

  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are you sure?'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e)
{
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function(item)
    {
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1)
      {
        item.style.display = 'block';
      }
      else
      {
        item.style.display = 'none';
      }
    })
}