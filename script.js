const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');

    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 920) {
        sidebar.classList.remove('active')

      }
    })


        closeSidebar.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });

  //   // Optional: Close sidebar on outside click
  //   window.addEventListener('click', (e) => {
  //     if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
  //       sidebar.classList.remove('active');
  //     }
  //   });

  // const sections = document.querySelectorAll('.fade-section');

  //   function showOnScroll() {
  //     sections.forEach(section => {
  //       const sectionTop = section.getBoundingClientRect().top;
  //       const triggerPoint = window.innerHeight - 400;

  //       if (sectionTop < triggerPoint) {
  //         section.classList.add('show');
  //       }
  //     });
  //   }

  //   // Run on scroll and on page load
  //   window.addEventListener('scroll', showOnScroll);
  //   window.addEventListener('load', showOnScroll);
const sections = document.querySelectorAll('.fade-section');

    function showOnScroll() {
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
          setTimeout(() => {
            section.classList.add('show');
          }, index * 150);
        }
      });
    }

    // Trigger when:
    window.addEventListener('scroll', showOnScroll);        // User scrolls
    window.addEventListener('load', showOnScroll);          // Page loads
    document.addEventListener('visibilitychange', () => {   // Tab becomes visible again
      if (document.visibilityState === 'visible') {
        showOnScroll();
      }
    });
  