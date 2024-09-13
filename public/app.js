// public/app.js

document.addEventListener('DOMContentLoaded', () => {
    loadItems();
    document.getElementById('search-input').addEventListener('input', searchItems);
  });
  
  const form = document.getElementById('item-form');
  form.addEventListener('submit', addItem);
  
  function loadItems() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        displayItems(data);
      });
  }
  
  function displayItems(items) {
    const tbody = document.querySelector('#inventory-table tbody');
    tbody.innerHTML = '';
    items.forEach(item => {
      const tr = document.createElement('tr');
  
      const tdName = document.createElement('td');
      tdName.textContent = item.name;
      tr.appendChild(tdName);
  
      const tdQuantity = document.createElement('td');
      tdQuantity.textContent = item.quantity;
      tr.appendChild(tdQuantity);
  
      const tdCategory = document.createElement('td');
      tdCategory.textContent = item.category || 'N/A';
      tr.appendChild(tdCategory);
  
      const tdActions = document.createElement('td');
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('action-btn', 'delete-btn');
      deleteBtn.onclick = () => deleteItem(item.id);
      tdActions.appendChild(deleteBtn);
  
      const updateBtn = document.createElement('button');
      updateBtn.textContent = 'Update';
      updateBtn.classList.add('action-btn', 'update-btn');
      updateBtn.onclick = () => updateItem(item.id);
      tdActions.appendChild(updateBtn);
  
      tr.appendChild(tdActions);
  
      tbody.appendChild(tr);
    });
  }
  
  function addItem(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value);
    const category = document.getElementById('category').value.trim();
  
    if (!name || isNaN(quantity) || !category) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, quantity, category })
    })
      .then(res => res.json())
      .then(() => {
        form.reset();
        loadItems();
      });
  }
  
  function deleteItem(id) {
    if (confirm('Are you sure you want to delete this item?')) {
      fetch(`/api/items/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => loadItems());
    }
  }
  
  function updateItem(id) {
    const newQuantity = prompt('Enter new quantity:');
    if (newQuantity !== null && !isNaN(parseInt(newQuantity))) {
      fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: parseInt(newQuantity) })
      })
        .then(res => res.json())
        .then(() => loadItems());
    } else {
      alert('Please enter a valid number.');
    }
  }
  
  function searchItems() {
    const query = document.getElementById('search-input').value.toLowerCase();
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const filteredItems = data.filter(item =>
          item.name.toLowerCase().includes(query) ||
          (item.category && item.category.toLowerCase().includes(query))
        );
        displayItems(filteredItems);
      });
  }
  