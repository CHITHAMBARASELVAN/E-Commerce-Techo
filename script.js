// Sample product data
const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, image: "images/smartphone.jpg" },
    { id: 2, name: 'Laptop', category: 'electronics', price: 899, image: "images/laptop.jpg" },
    { id: 3, name: 'T-Shirt', category: 'fashion', price: 19, image: "images/tshirt.jpg" },
    { id: 4, name: 'Washing Machine', category: 'home', price: 499, image: "images/washing1.jpg" },
    { id: 5, name: 'Headphones', category: 'electronics', price: 99, image: "images/headphone.jpg" },
    { id: 6, name: 'Jacket', category: 'fashion', price: 59, image: "images/jacket.jpg" },
  ];
  
  // Function to render products
  function renderProducts(filteredProducts) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products
  
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">$${product.price}</p>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Function to handle search
  document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
  
  // Function to handle filter and sorting
  document.getElementById('categoryFilter').addEventListener('change', filterProducts);
  document.getElementById('priceSort').addEventListener('change', filterProducts);
  
  function filterProducts() {
    let filteredProducts = [...products];
  
    // Filter by category
    const categoryFilter = document.getElementById('categoryFilter').value;
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
  
    // Sort by price
    const priceSort = document.getElementById('priceSort').value;
    if (priceSort === 'lowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'highToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  
    renderProducts(filteredProducts);
  }
  
  // Initial render of products
  renderProducts(products);
  