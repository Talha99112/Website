// Portfolio Data
const portfolioItems = [
  {
    title: "Corporate Essentials",
    category: "stock",
    desc: "Professional stock footage edit showcasing modern business environments and team collaboration.",
    tags: ["Corporate", "Stock Footage", "Business"],
    videoId: "1108892671"
  },
  {
    title: "From Credit Repair to Business Launch",
    category: "ui",
    desc: "Dynamic UI animation sequence illustrating financial transformation through interactive elements.",
    tags: ["UI/UX", "Financial", "Micro-interactions"],
    videoId: "1108892715"
  },
  {
    title: "Airbnb Growth Simplified",
    category: "motion",
    desc: "Motion graphic explainer visualizing rental business growth through animated data storytelling.",
    tags: ["Explainer", "Data Visualization", "After Effects"],
    videoId: "1108892817"
  },
  {
    title: "30 Minutes to the Top",
    category: "motion",
    desc: "Fast-paced motion graphics piece demonstrating rapid business growth strategies.",
    tags: ["Business", "Fast-cut", "Kinetic Typography"],
    videoId: "1108892839"
  },
  {
    title: "Who I Am (Motion)",
    category: "motion",
    desc: "Personal brand motion piece combining psychological storytelling with kinetic typography.",
    tags: ["Personal Brand", "Typography", "Storytelling"],
    videoId: "1108892883"
  },
  {
    title: "Who I Am (UI)",
    category: "ui",
    desc: "Interactive UI version of personal brand story with animated interface elements.",
    tags: ["Interactive", "Personal Brand", "UI Design"],
    videoId: "1108892942"
  }
];

// Initialize Portfolio Grid
function initPortfolio() {
  const grid = document.querySelector('.portfolio-grid');
  portfolioItems.forEach(item => {
    const project = document.createElement('div');
    project.className = `portfolio-item`;
    project.dataset.category = item.category;

    project.innerHTML = `
      <img src="https://i.vimeocdn.com/video/${item.videoId}_640.jpg" alt="${item.title}" class="portfolio-thumbnail" />
      <div class="portfolio-overlay">
        <span class="portfolio-category">${item.category === 'motion' ? 'Motion Graphics' : item.category === 'ui' ? 'UI Animations' : 'Stock Video Edits'}</span>
        <h3 class="portfolio-title">${item.title}</h3>
        <p class="portfolio-desc">${item.desc}</p>
        <div class="portfolio-tags">
          ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="#" class="view-btn" data-video="${item.videoId}">View Project</a>
      </div>
    `;
    grid.appendChild(project);
  });
}

// Filter Portfolio Items
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter items
      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Video Modal setup for Vimeo
function setupModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const viewBtns = document.querySelectorAll('.view-btn');
  const closeModal = document.querySelector('.close-modal');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = btn.dataset.video;
      modalVideo.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalVideo.src = '';
    document.body.style.overflow = 'auto';
  });
  
  modal.addEventListener('click', (e)
