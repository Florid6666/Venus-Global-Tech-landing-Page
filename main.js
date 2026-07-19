// main interactivity script for venus global tech landing page

document.addEventListener('DOMContentLoaded', () => {

  // add header shadow when scrolling down a bit
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // hamburger menu toggle for mobile screen sizes
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // tab switcher for the 3-step working process section
  const pipelineTabs = document.querySelectorAll('.pipeline-tab-btn');
  const pipelineTitle = document.getElementById('pipelineTitle');
  const pipelineDesc = document.getElementById('pipelineDesc');
  const pipelineTags = document.getElementById('pipelineTags');

  const processData = {
    1: {
      title: "01. Discovery & Strategy",
      desc: "Understanding vision, goals, and target audience to build a comprehensive roadmap aligned with business objectives.",
      tags: ["Vision Mapping", "Target Analysis", "Architecture Blueprints", "Tech Alignment"]
    },
    2: {
      title: "02. Design & Development",
      desc: "Creating modern, user-centric designs and building robust, scalable solutions using state-of-the-art tech stacks.",
      tags: ["UI/UX Architecture", "Cloud Engine", "AI Integration", "API Engineering"]
    },
    3: {
      title: "03. Launch & Optimize",
      desc: "Launching with precision engineering, real-time monitoring, and continuously optimizing for long-term impact.",
      tags: ["Zero-Downtime Deploy", "Realtime Analytics", "24/7 SLA", "Performance Tuning"]
    }
  };

  pipelineTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      pipelineTabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const step = btn.getAttribute('data-step');
      if (processData[step]) {
        pipelineTitle.innerText = processData[step].title;
        pipelineDesc.innerText = processData[step].desc;
        pipelineTags.innerHTML = processData[step].tags.map(t => `<span class="pipeline-tag-item">${t}</span>`).join('');
      }
    });
  });

  // office location switcher - updates address & phone number dynamically
  const officeTabs = document.querySelectorAll('.office-tab-btn');
  const officeName = document.getElementById('officeName');
  const officeAddress = document.getElementById('officeAddress');
  const officePhone = document.getElementById('officePhone');
  const officeHours = document.getElementById('officeHours');
  const officeCopyBtn = document.getElementById('officeCopyBtn');

  const officeData = {
    toronto: {
      name: "Toronto, Canada Headquarters",
      address: "#205 - 1085 Bellamy Road North, Toronto, ON",
      phone: "647-722-0837",
      tel: "tel:6477220837",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM EST"
    },
    michigan: {
      name: "Michigan, USA Regional Office",
      address: "880 W Long Lake Rd Ste 225, Troy, MI 48098",
      phone: "248-275-1077 / 718-715-0770",
      tel: "tel:2482751077",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM EST"
    },
    india: {
      name: "India Technology Innovation Hub",
      address: "Mumbai, Surat, Chennai, Hyderabad",
      phone: "+91-261-2601177 / +91-261-391177",
      tel: "tel:+912612601177",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM IST"
    }
  };

  officeTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      officeTabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const officeKey = btn.getAttribute('data-office');
      if (officeData[officeKey]) {
        const data = officeData[officeKey];
        officeName.innerText = data.name;
        officeAddress.innerText = data.address;
        officePhone.innerText = data.phone;
        officePhone.setAttribute('href', data.tel);
        officeHours.innerText = data.hours;
        if (officeCopyBtn) {
          officeCopyBtn.setAttribute('data-copy', data.phone);
        }
      }
    });
  });

  // toast popup feedback
  window.showToast = function(msg) {
    const toast = document.getElementById('copyToast');
    const toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
      toastMsg.innerText = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  };

  // click to copy phone or address
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-text-btn');
    if (copyBtn) {
      e.stopPropagation();
      const textToCopy = copyBtn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast(`Copied to clipboard!`);
        });
      }
    }
  });

  // quote form popup modal handler
  const quoteModal = document.getElementById('quoteModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const openModalBtns = document.querySelectorAll('.open-quote-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (quoteModal) {
        quoteModal.classList.add('active');
      }
    });
  });

  if (closeModalBtn && quoteModal) {
    closeModalBtn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
    });

    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        quoteModal.classList.remove('active');
      }
    });
  }

  // highlight active navbar item on scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // reveal elements on scroll using intersection observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // check items already visible on page load
  setTimeout(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed');
      }
    });
  }, 100);

  // spotlight radial glow following mouse cursor
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // simulate live agent activity ticker
  const activeAgentCountEl = document.querySelector('.dash-metric-val');
  if (activeAgentCountEl) {
    setInterval(() => {
      const base = 1248;
      const variation = Math.floor(Math.random() * 14) - 6;
      activeAgentCountEl.innerText = (base + variation).toLocaleString();
    }, 3500);
  }

});
