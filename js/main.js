// Fungsi untuk mobile menu (akan bekerja di layar kecil)
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu untuk mobile
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(hamburger);
    
    const nav = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    // Animasi scroll halus untuk semua link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Simulasi data produk untuk halaman kategori
    if (window.location.pathname.includes('kategori.html')) {
        const categories = {
            laptop: [
                { name: 'Laptop Gaming Pro', price: 'Rp 15.999.000', image: 'assets/images/laptop1.jpg' },
                { name: 'Laptop Ultra Slim', price: 'Rp 12.500.000', image: 'assets/images/laptop2.jpg' },
                { name: 'Laptop Bisnis', price: 'Rp 10.750.000', image: 'assets/images/laptop3.jpg' }
            ],
            handphone: [
                { name: 'Smartphone Flagship', price: 'Rp 12.499.000', image: 'assets/images/phone1.jpg' },
                { name: 'Smartphone Mid-range', price: 'Rp 6.999.000', image: 'assets/images/phone2.jpg' },
                { name: 'Smartphone Budget', price: 'Rp 3.499.000', image: 'assets/images/phone3.jpg' }
            ],
            tablet: [
                { name: 'Tablet Premium', price: 'Rp 8.799.000', image: 'assets/images/tablet1.jpg' },
                { name: 'Tablet Android', price: 'Rp 5.299.000', image: 'assets/images/tablet2.jpg' },
                { name: 'Tablet Entry-level', price: 'Rp 2.999.000', image: 'assets/images/tablet3.jpg' }
            ]
        };
        
        // Render produk ke halaman
        for (const category in categories) {
            const container = document.querySelector(`.category-section:nth-of-type(${
                category === 'laptop' ? 1 : category === 'handphone' ? 2 : 3
            }) .products`);
            
            categories[category].forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button>Lihat Detail</button>
                `;
                container.appendChild(productCard);
            });
        }
    }
    
    // Form submission untuk halaman karier
    const careerForm = document.querySelector('.application-form form');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Lamaran Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.');
            this.reset();
        });
    }

    // Set active menu berdasarkan halaman saat ini
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (currentPage === linkPage || 
        (currentPage.includes('laptop.html') && linkPage === 'kategori.html') ||
        (currentPage.includes('handphone.html') && linkPage === 'kategori.html') ||
        (currentPage.includes('tablet.html') && linkPage === 'kategori.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Set active dropdown item
if (currentPage.includes('laptop.html') || currentPage.includes('handphone.html') || currentPage.includes('tablet.html')) {
    document.querySelector('.dropdown a').classList.add('active');
}
});