(function initPortfolio() {
  /* 1. Mobile Navigation Toggle */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* 2. Resume Modal Viewer */
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.open-resume-btn');
  const closeModalBtn = document.getElementById('close-modal');

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (resumeModal) {
        resumeModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeResumeModal);
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
      closeResumeModal();
    }
  });

  /* 3. Contact Form & Character Counter */
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('char-count');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
      charCount.textContent = `${messageInput.value.length}/1000`;
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = document.getElementById('name').value.trim();
      const senderEmail = document.getElementById('email').value.trim();
      const messageText = messageInput.value.trim();

      const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName}`);
      const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\n${messageText}`);

      if (formFeedback) {
        formFeedback.textContent = 'Opening your email client to send message to Lana...';
      }
      window.location.href = `mailto:castillolanalee@gmail.com?subject=${subject}&body=${body}`;
      contactForm.reset();
      if (charCount) charCount.textContent = '0/1000';
    });
  }
})();