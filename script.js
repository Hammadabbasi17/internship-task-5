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

    // Optional: Close sidebar on outside click
    window.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });