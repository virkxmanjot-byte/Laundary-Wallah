
const services = [
    { id: 1, name: "Dry Cleaning", price: 200 },
    { id: 2, name: "Wash & Fold", price: 100 },
    { id: 3, name: "Ironing", price: 30 },
    { id: 4, name: "Stain Removal", price: 500 },
    { id: 5, name: "Leather & Suede Cleaning", price: 999 },
    { id: 6, name: "Wedding Dress Cleaning", price: 2800 }
];

let cart = []; 

document.addEventListener('DOMContentLoaded', () => {

    
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => logo.classList.toggle('paused'));
    }

    
    const serviceList = document.getElementById('serviceList');

    function renderServices() {
        serviceList.innerHTML = '';
        services.forEach(service => {
            const inCart = cart.find(item => item.id === service.id);

            const li = document.createElement('li');
            li.innerHTML = `
                <span class="service-info">${service.name} &middot; <span class="price">&#8377;${service.price.toFixed(2)}</span></span>
                <button data-id="${service.id}" class="${inCart ? 'added' : ''}">
                    ${inCart ? 'Remove Item &ominus;' : 'Add Item &oplus;'}
                </button>
            `;
            serviceList.appendChild(li);
        });
    }

    
    const cartTable = document.getElementById('cartTable');
    const cartBody = document.getElementById('cartBody');
    const emptyCart = document.getElementById('emptyCart');
    const totalAmountEl = document.getElementById('totalAmount');
    const bookBtn = document.getElementById('bookBtn');

    function renderCart() {
        cartBody.innerHTML = '';

        if (cart.length === 0) {
            cartTable.classList.add('hidden');
            emptyCart.classList.remove('hidden');
        } else {
            cartTable.classList.remove('hidden');
            emptyCart.classList.add('hidden');

            cart.forEach((item, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>&#8377;${item.price.toFixed(2)}</td>
                `;
                cartBody.appendChild(tr);
            });
        }

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmountEl.textContent = total.toFixed(2);

        bookBtn.disabled = cart.length === 0;
    }

    // ── ADD / REMOVE ITEM ──
    serviceList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const id = Number(btn.dataset.id);
        const service = services.find(s => s.id === id);
        const existingIndex = cart.findIndex(item => item.id === id);

        if (existingIndex >= 0) {
            cart.splice(existingIndex, 1); // remove
        } else {
            cart.push(service); // add
        }

        renderServices();
        renderCart();
    });

    
    const bookMsg = document.getElementById('bookMsg');

   

    bookBtn.addEventListener('click', () => {
        const fullName = document.getElementById('fullName').value.trim();
        const emailId = document.getElementById('emailId').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();

        if (!fullName || !emailId || !phoneNumber) {
            bookMsg.style.color = '#d6296c';
            bookMsg.textContent = 'Please fill in your name, email, and phone number.';
            return;
        }

        if (cart.length === 0) {
            bookMsg.style.color = '#d6296c';
            bookMsg.textContent = 'Please add at least one service to the cart.';
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        
        bookMsg.style.color = '#1f9d55';
        bookMsg.textContent = 'Thank you for Booking the Service! We will get back to you soon.';

        cart = [];
        renderServices();
        renderCart();
    });

    // ── NEWSLETTER SUBSCRIPTION ──
    const newsletterForm = document.getElementById('newsletterForm');
    const nlMsg = document.getElementById('nlMsg');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nlName').value.trim();
        const email = document.getElementById('nlEmail').value.trim();

        if (!name || !email) return;

        nlMsg.textContent = `Thanks for subscribing, ${name}! Watch your inbox for updates.`;
        newsletterForm.reset();
    });

    
    renderServices();
    renderCart();
});
