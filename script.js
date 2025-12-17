const mobiles = [
  {
    name: "Pixel pro 9",
    chip: "Google Tensor G4",
    price: "₹1,09,999",
    badge: "5G",
    ram : "12GB",
    display : "6.7 inches",
    storage : "128GB",
    color : "Black",
    brand: "Google",
    image: "images/mobiles/pixel pro 9.png",
    camera: "50MP + 48MP",
    battery: "5050 mAh"
  },
  {
    name: "iphone 15",
    chip: "A17 Pro",
    price: "₹51,999",
    badge: "New",
    display : "6.1 inches",
    storage : "128GB",
    color : "white",
    brand: "Apple",
    image: "images/mobiles/iphone 15.png",
    camera: "48MP + 12MP",
    battery: "3349 mAh"
  },
  {
    name: "galaxy s24 ultra",
    chip: "Snapdragon 8 Gen 3",
    price: "₹1,11,999",
    badge: "Top Pick",
    display : "17.27 cm (6.8 inch) Quad HD+ Display",
    ram : "12GB",
    storage : "256GB",
    color : "Titanium Black",  
    brand: "Samsung",
    image: "images/mobiles/galaxy s24 ultra.jpg",
    camera: "200MP + 50MP + 12MP",
    battery: "5000 mAh"
  },
  {
    name: "oneplus 12",
    chip: "Snapdragon 8 Gen 3",
    price: "₹54,999",
    badge: "Value",
    ram : "12GB",
    display : "6.8.2 inches Full HD+ AMOLED Display",
    storage : "256GB",
    color : "Glacial White",
    brand: "OnePlus",
    image: "images/mobiles/oneplus 12.png",
    camera: "50MP + 64MP + 48MP",
    battery: "5400 mAh"
  },
  {
    name: "nothing phone 2",
    chip: "Snapdragon 8+ Gen 1",
    price: "₹25,000",
    badge: "Style",
    ram : "8GB",
    display : "17.02 cm (6.7 inch) Full HD+ Display",
    storage : "256GB",
    color : "white",
    brand: "Nothing",
    image: "images/mobiles/nothing Phone 2.png",
    camera: "50MP (OIS) + 50MP | 32MP Front Camera",
    battery: "5000 mAh"
  },
  {
    name: "redmi note 13 pro",
    chip: "Dimensity 7200",
    price: "₹17,999",
    badge: "Budget",
    ram : "8GB",
    display : "16.94 cm (6.67 inch) Display",
    storage : "128GB",
    color : "Arctic White",
    brand: "Xiaomi",
    image: "images/mobiles/redmi note 13 pro.png",
    camera: "200MP (OIS) + 8MP + 2MP | 16MP Front Camera",
    battery: "5100 mAh"
  },
  {
    name: "galaxy a55",
    chip: "Exynos 1480",
    price: "₹24,567",
    badge: "Best Seller",
    ram : "8GB",
    display : "16.76 cm (6.6 inch) Full HD+ Display",
    storage : "128GB",
    color : "Awesome Iceblue",
    brand: "Samsung",
    image: "images/mobiles/galaxy a55.png",
    camera: "50MP + 12MP + 5MP | 32MP Front Camera",
    battery: "5000 mAh"
  },
  {
    name: "moto edge 50",
    chip: "Snapdragon 7 Gen 3",
    price: "₹21,999",
    badge: "Clean OS",
    ram : "8GB",
    display : "16.94 cm (6.67 inch) Display",
    storage : "256GB",
    color : "Jungle Green",
    brand: "Motorola",
    image: "images/mobiles/moto edge 50.png",
    camera: "50MP + 13MP + 10MP | 32MP Front Camera",
    battery: "5000 mAh"
  },
  {
    name: "iphone 14 pro",
    chip: "A16 Bionic",
    price: "₹1,19,900",
    badge: "Premium",
    display : "5.49 cm (6.1 inch) Super Retina XDR Display",
    storage : "128GB",
    color : "Space Black",  
    brand: "Apple",
    image: "images/mobiles/iphone 14 pro.png",
    camera: "48MP + 12MP + 12MP | 12MP Front Camera",
    battery: "3200 mAh"
  },
  {
    name: "oneplus 11",
    chip: "Snapdragon 8 Gen 2",
    price: "₹32,839",
    badge: "Speed",
    ram : "8GB",
    display : "17.02 cm (6.7 inch) Display", 
    storage : "128GB",
    color : "Eternal Green",
    brand: "OnePlus",
    image: "images/mobiles/oneplus 11.png",
    camera: "50MP Rear Camera | 16MP Front Camera",
    battery: "5000 mAh"
  },
  {
    name: "xiaomi 14",
    chip: "Snapdragon 8 Gen 3",
    price: "₹59,999",
    badge: "Flagship",
    ram : "8GB",
    display : "16.15 cm (6.36 inch) Display AMOLED Display",
    storage : "512GB",
    color : "Black",
    brand: "Xiaomi",
    image: "images/mobiles/xiaomi 14.png",
    camera: "50MP + 50MP + 50MP | 32MP Front Camera",
    battery: "4610 mAh"
  },
  {
    name: "vivo y400 pro 5G",
    chip: "Dimensity 7300 Processor",
    price: "₹25,999",
    badge: "Pro Camera",
    ram : "8GB",
    display : "17.2 cm (6.77 inch) Display",
    storage : "128GB",
    color : "Freestyle White",
    brand: "Vivo",
    image: "images/mobiles/vivo y400 pro 5g.png",
    camera: "50MP + 64MP + 50MP",
    battery: "5400 mAh"
  },
  {
    name: "oppo k13 5g",
    chip: "Snapdragon 6 Gen 4",
    price: "₹19,999",
    badge: "Design",
    ram : "8GB",
    display : "16.55 cm (6.52 inch) Display",
    storage : "128GB",
    color : "white",
    brand: "Oppo",
    image: "images/mobiles/oppo k13 5g.png",
    camera: "50MP + 2MP | 16MP Front Camera",
    battery: "7000 mAh"
  },
  {
    name: "realme gt 6",
    chip: "Snapdragon 8s Gen 3",
    price: "₹27,999",
    badge: "Gaming",
    ram : "8GB",
    display : "16.56 cm (6.52 inch) AMOLED Display",
    storage : "256GB",
    color : "Razor Green",
    brand: "Realme",
    image: "images/mobiles/realme gt 6.png",
    camera: "50MP + 8MP + 50MP | 32MP Front",
    battery: "5500 mAh"
  },
  {
    name: "poco x6 pro",
    chip: "Dimensity 8300",
    price: "₹26,999",
    badge: "Value Pro",
    ram : "8GB",
    display : "16.94 cm (6.67 inch) Display AMOLED Display",    
    storage : "128GB",
    color : "Matte Black",
    brand: "Poco",
    image: "images/mobiles/poco x6 pro.png",
    camera: "64MP + 8MP + 2MP",
    battery: "5000 mAh"
  },
  {
    name: "poco m7 pro 5g",
    chip: "Snapdragon 8 Gen 3",
    price: "₹12,999",
    badge: "value",
    brand: "Honor",
    ram : "6GB",
    display : "16.76 cm (6.6 inch) Display",
    storage : "128GB",
    color : "Mystic Silver",
    brand: "POCO",
    image: "images/mobiles/poco m7 pro 5g.png",
    camera: "50MP + 50MP + 32MP",
    battery: "5450 mAh"
  },
  
];

const accessories = [
  {
    name: "CMF by Nothing 65 W GaN 3 A 3 Port Mobile Charger  (Dark Grey)",
    detail: "Fast charging for most phones",
    price: "₹2,299",
    image: "images/accessories/cmf.png"
  },
  {
    name: "boAt 10000 mAh Power Bank",
    detail: "10000mAh Magnetic Wireless Powerbank: With a 10000mAh capacity",
    image: "images/accessories/powerbank.png"
  },
  {
    name: "Back Cover for Apple iPhone 13",
    detail: "Shockproof, slim profile",
    price: "₹190",
    image: "images/accessories/back cover iphone 13.png"
  },
  {
    name: "boAt Airdopes Alpha",
    detail: "BEAST Mode: Experience lag-free high-quality gaming with low latency of up to 50 ms.",
    price: "₹799",
    image: "images/accessories/boat airpodes.png"
  },
  {
    name: "Tempered Glass",
    detail: "Edge-to-edge protection, easy install",
    price: "₹150",
    image: "images/accessories/glass.png"
  },
  {
    name: "USB-C Cable",
    detail: "Braided, fast data transfer",
    price: "₹150",
    image: "images/accessories/cable.png"
  },
  
  {
    name: "Camera Lens Protector",
    detail: "3-pack, crystal clear",
    price: "₹110",
    image: "images/accessories/lens.png"
  },

  {
    name: "OnePlus Bullets Wireless Z3",
    detail: "Wireless Z3 Bluetooth without Mic  (Crimson Eclipse, In the Ear",
    price: "₹1560",
    image: "images/accessories/one plus neckband.png"
  },
  
];

const mobileList = document.querySelector("#mobile-list");
const accessoryList = document.querySelector("#accessory-list");
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function renderCards(data, container, isMobile = false) {
  const fallback = isMobile
    ? "https://via.placeholder.com/320x200.png?text=Mobile+Photo"
    : "https://via.placeholder.com/320x200.png?text=Accessory+Photo";

  container.innerHTML = data
    .map(
      (item) => `
        <article class="card">
          <div class="card-media">
            <img src="${item.image || fallback}" alt="${item.name}">
          </div>
          ${isMobile ? `<span class="chip">${item.badge}</span>` : ""}
          <h3>${item.name}</h3>
          <p>${isMobile ? item.chip : item.detail}</p>
          <p class="price">${item.price}</p>
        </article>
      `
    )
    .join("");
}

function initNavToggle() {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

function initForm() {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, message })
      });

      const data = await response.json();

      if (response.ok) {
        formStatus.textContent = `✅ Thank you, ${name}! We will contact you shortly.`;
        contactForm.reset();
      } else {
        formStatus.textContent = "❌ Failed to send request.";
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      formStatus.textContent = "❌ Server error. Try again.";
    }
  });
}


// Global state
let filteredMobiles = [...mobiles];
let filteredAccessories = [...accessories];
let selectedForCompare = [];
let currentReviewIndex = 0;

// Reviews data
const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent service! Got my iPhone 15 with genuine warranty. Owner was very helpful in explaining features.",
    verified: true
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best mobile shop in town. They helped me choose the perfect phone within my budget. Highly recommended!",
    verified: true
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "Quick delivery and great prices. The owner personally helped with phone setup. Amazing experience!",
    verified: true
  },
  {
    name: "Sneha Reddy",
    rating: 4,
    text: "Good collection of accessories. Bought wireless earbuds and they work perfectly. Will visit again!",
    verified: true
  }
];

// FAQ data
const faqs = [
  {
    question: "Do you provide warranty?",
    answer: "Yes, all our mobile phones come with genuine manufacturer warranty. We also provide extended warranty options for additional protection."
  },
  {
    question: "Is EMI available?",
    answer: "Yes, we offer flexible EMI options through various financing partners. You can choose from 3, 6, 9, or 12 months EMI plans with zero interest options available."
  },
  {
    question: "Do you repair mobiles?",
    answer: "Yes, we provide mobile repair services for all brands. Our expert technicians can fix screen issues, battery problems, charging ports, and more. Same-day service available for most repairs."
  },
  {
    question: "What is your return policy?",
    answer: "We offer 7-day return policy for unopened products. For opened products, we provide exchange within 3 days if there's any manufacturing defect."
  },
  {
    question: "Do you offer doorstep delivery?",
    answer: "Yes, we provide same-day doorstep delivery within the city. Free delivery for orders above $500. Delivery charges apply for smaller orders."
  },
  {
    question: "Can I trade in my old phone?",
    answer: "Absolutely! We accept old phones as trade-in. Get the best value for your old device and use it as discount on your new purchase."
  }
];

// Enhanced renderCards with click handlers
function renderCards(data, container, isMobile = false) {
  const fallback = isMobile
    ? "https://via.placeholder.com/320x200.png?text=Mobile+Photo"
    : "https://via.placeholder.com/320x200.png?text=Accessory+Photo";

  container.innerHTML = data
    .map(
      (item, index) => `
        <article class="card" data-index="${index}" data-id="${isMobile ? item.name : item.name}">
          ${isMobile ? `<input type="checkbox" class="compare-checkbox" data-mobile="${index}">` : ""}
          <div class="card-media">
            <img src="${item.image || fallback}" alt="${item.name}">
          </div>
          ${isMobile ? `<span class="chip">${item.badge}</span>` : ""}
          <h3>${item.name}</h3>
          <p>${isMobile ? item.chip : item.detail}</p>
          <p class="price">${item.price}</p>
        </article>
      `
    )
    .join("");

  // Add click handlers
  container.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("compare-checkbox")) {
        const item = data[index];
        openModal(item, isMobile);
      }
    });
  });

  // Add compare checkbox handlers for mobiles
  if (isMobile) {
    container.querySelectorAll(".compare-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        e.stopPropagation();
        const index = parseInt(checkbox.dataset.mobile);
        toggleCompare(index);
      });
    });
  }
}

// Sticky Navigation
function initStickyNav() {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > hero.offsetHeight - 100) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
    updateActiveNav();
  });
}

// Active Navigation Highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-nav") === current) {
      link.classList.add("active");
    }
  });
}

// Filter and Search
function initFilters() {
  const mobileSearch = document.getElementById("mobile-search");
  const accessorySearch = document.getElementById("accessory-search");
  const brandFilter = document.getElementById("brand-filter");

  mobileSearch.addEventListener("input", (e) => {
    filterMobiles(e.target.value, brandFilter.value);
  });

  brandFilter.addEventListener("change", (e) => {
    filterMobiles(mobileSearch.value, e.target.value);
  });

  accessorySearch.addEventListener("input", (e) => {
    filterAccessories(e.target.value);
  });
}

function filterMobiles(searchTerm = "", brand = "") {
  filteredMobiles = mobiles.filter((mobile) => {
    const matchesSearch = mobile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mobile.chip.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !brand || mobile.brand === brand;
    return matchesSearch && matchesBrand;
  });
  renderCards(filteredMobiles, mobileList, true);
}

function filterAccessories(searchTerm = "") {
  filteredAccessories = accessories.filter((accessory) => {
    return accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           accessory.detail.toLowerCase().includes(searchTerm.toLowerCase());
  });
  renderCards(filteredAccessories, accessoryList, false);
}

// Product Modal
function openModal(item, isMobile) {
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body");
  
  modalBody.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="modal-image">
    <div class="modal-details">
      <h2>${item.name}</h2>
      ${isMobile ? `<p><strong>Processor:</strong> ${item.chip}</p>` : ""}
      ${isMobile ? `<p><strong>Camera:</strong> ${item.camera || "N/A"}</p>` : ""}
      ${isMobile ? `<p><strong>Battery:</strong> ${item.battery || "N/A"}</p>` : ""}
      ${isMobile ? `<p><strong>Display:</strong> ${item.display || "N/A"}</p>` : ""}
      ${isMobile ? `<p><strong>RAM:</strong> ${item.ram || "N/A"}</p>` : ""}
      ${isMobile ? `<p><strong>Storage:</strong> ${item.storage || "N/A"}</p>` : ""}
      ${isMobile ? `<p><strong>Color:</strong> ${item.color || "N/A"}</p>` : ""}
      ${!isMobile ? `<p>${item.detail}</p>` : ""}
      <p class="price" style="font-size: 24px; margin: 20px 0;">${item.price}</p>
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a href="tel:+917093484648" class="btn primary">Call Now</a>
        <a href="https://wa.me/917093484648?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(item.name)}" 
           target="_blank" 
           class="btn ghost">Enquire on WhatsApp</a>
      </div>
    </div>
  `;
  
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("active");
  document.getElementById("compare-modal").classList.remove("active");
}

// Compare Products
function toggleCompare(index) {
  const mobile = filteredMobiles[index];
  const compareIndex = selectedForCompare.indexOf(index);
  
  if (compareIndex > -1) {
    selectedForCompare.splice(compareIndex, 1);
  } else {
    if (selectedForCompare.length >= 2) {
      alert("You can compare only 2 mobiles at a time. Please deselect one first.");
      return;
    }
    selectedForCompare.push(index);
  }
  
  updateCompareUI();
}

function updateCompareUI() {
  const compareBtn = document.getElementById("compare-btn");
  const compareCount = document.getElementById("compare-count");
  
  compareCount.textContent = selectedForCompare.length;
  
  if (selectedForCompare.length > 0) {
    compareBtn.style.display = "inline-block";
  } else {
    compareBtn.style.display = "none";
  }
  
  // Update card selection state
  mobileList.querySelectorAll(".card").forEach((card, index) => {
    const checkbox = card.querySelector(".compare-checkbox");
    if (checkbox) {
      checkbox.checked = selectedForCompare.includes(index);
      card.classList.toggle("selected", selectedForCompare.includes(index));
    }
  });
}

function showCompareModal() {
  if (selectedForCompare.length !== 2) {
    alert("Please select exactly 2 mobiles to compare.");
    return;
  }
  
  const mobile1 = filteredMobiles[selectedForCompare[0]];
  const mobile2 = filteredMobiles[selectedForCompare[1]];
  const compareTable = document.getElementById("compare-table");
  
  compareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Specification</th>
          <th>${mobile1.name}</th>
          <th>${mobile2.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Price</strong></td>
          <td>${mobile1.price}</td>
          <td>${mobile2.price}</td>
        </tr>
        <tr>
          <td><strong>Processor</strong></td>
          <td>${mobile1.chip}</td>
          <td>${mobile2.chip}</td>
        </tr>
        <tr>
          <td><strong>Camera</strong></td>
          <td>${mobile1.camera || "N/A"}</td>
          <td>${mobile2.camera || "N/A"}</td>
        </tr>
        <tr>
          <td><strong>Battery</strong></td>
          <td>${mobile1.battery || "N/A"}</td>
          <td>${mobile2.battery || "N/A"}</td>
        </tr>
        <tr>
          <td><strong>Brand</strong></td>
          <td>${mobile1.brand}</td>
          <td>${mobile2.brand}</td>
        </tr>
      </tbody>
    </table>
  `;
  
  document.getElementById("compare-modal").classList.add("active");
}

// Reviews Carousel
function initReviews() {
  const container = document.getElementById("reviews-container");
  const prevBtn = document.getElementById("review-prev");
  const nextBtn = document.getElementById("review-next");
  
  function renderReviews() {
    container.innerHTML = reviews.map((review) => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${review.name.charAt(0)}</div>
          <div>
            <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <strong>${review.name}</strong>
            ${review.verified ? '<span class="verified-badge">✓ Verified Customer</span>' : ''}
          </div>
        </div>
        <p>${review.text}</p>
      </div>
    `).join("");
  }
  
  function scrollToReview(index) {
    const cardWidth = container.querySelector(".review-card").offsetWidth + 24;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
  }
  
  function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    scrollToReview(currentReviewIndex);
  }
  
  function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    scrollToReview(currentReviewIndex);
  }
  
  prevBtn.addEventListener("click", prevReview);
  nextBtn.addEventListener("click", nextReview);
  
  // Auto-rotate every 5 seconds
  setInterval(nextReview, 5000);
  
  renderReviews();
}

// FAQ Accordion
function initFAQ() {
  const container = document.getElementById("faq-container");
  
  container.innerHTML = faqs.map((faq, index) => `
    <div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    </div>
  `).join("");
  
  container.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const isActive = item.classList.contains("active");
      
      // Close all items
      container.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Initialize everything
renderCards(mobiles, mobileList, true);
renderCards(accessories, accessoryList);
initNavToggle();
initForm();
initStickyNav();
initFilters();
initReviews();
initFAQ();
initScrollReveal();

// Modal close handlers
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("compare-close").addEventListener("click", closeModal);
document.getElementById("compare-btn").addEventListener("click", showCompareModal);

// Close modal on outside click
document.getElementById("product-modal").addEventListener("click", (e) => {
  if (e.target.id === "product-modal") closeModal();
});
document.getElementById("compare-modal").addEventListener("click", (e) => {
  if (e.target.id === "compare-modal") closeModal();
});

// Scroll reveal animations for sections
function initScrollReveal() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((sec) => observer.observe(sec));
}
// WhatsApp open for mobile & desktop
function openWhatsApp() {
  const phone = "917093484648";
  const message = "Hi Sathish Mobiles, I saw your website and I am interested in your products";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
}
