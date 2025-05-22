 // Handle main nav click (non dropdown)
  function setActive(event) {
    event.preventDefault();

    // close all dropdown menus
    closeDropdowns();

    // Remove active from main nav links and dropdown toggles
    const links = document.querySelectorAll('nav > a, nav > .dropdown > a');
    links.forEach(link => link.classList.remove('active'));

    // Remove active from all dropdown submenu links
    document.querySelectorAll('.dropdown-menu a').forEach(a => a.classList.remove('active'));

    event.target.classList.add('active');

    // Hide all sections
    const sections = document.querySelectorAll('main .section');
    sections.forEach(section => section.style.display = 'none');

    const id = event.target.getAttribute('href').substring(1);
    const activeSection = document.getElementById(id);
    if(activeSection) {
      activeSection.style.display = 'block';
      window.scrollTo(0,0);
    }
  }

  // Handle submenu click (profil, akademik, info siswa)
  function setSubActive(event) {
    event.preventDefault();

    // close dropdown menus
    closeDropdowns();

    // Remove active from main nav links and dropdown toggles
    const links = document.querySelectorAll('nav > a, nav > .dropdown > a');
    links.forEach(link => link.classList.remove('active'));

    // Remove active from all dropdown submenu links
    document.querySelectorAll('.dropdown-menu a').forEach(a => a.classList.remove('active'));

    // Set active on dropdown toggle and clicked submenu item
    const parentDropdown = event.target.closest('.dropdown');
    if(parentDropdown) {
      const dropdownToggle = parentDropdown.querySelector('a');
      dropdownToggle.classList.add('active');
    }
    event.target.classList.add('active');

    // Hide all sections
    const sections = document.querySelectorAll('main .section');
    sections.forEach(section => section.style.display = 'none');

    const id = event.target.getAttribute('href').substring(1);
    const activeSection = document.getElementById(id);
    if(activeSection) {
      activeSection.style.display = 'block';
      window.scrollTo(0,0);
    }
  }

  // For mobile: toggle dropdown menu open/close on click on dropdown toggle
  const dropdownToggles = document.querySelectorAll('.dropdown > a');
  dropdownToggles.forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(event){
      const isMobile = window.matchMedia("(max-width: 700px)").matches;
      if(isMobile) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (!dropdownMenu) return;
        const visible = dropdownMenu.style.display === 'flex';
        if(visible) {
          dropdownMenu.style.display = 'none';
        } else {
          closeDropdowns();
          dropdownMenu.style.display = 'flex';
          dropdownMenu.style.flexDirection = 'column';
        }
      }
    });
  });

  // Close all dropdown menus
  function closeDropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => menu.style.display = 'none');
  }

  // Close dropdown if clicked outside (mobile)
  document.addEventListener('click', function(event){
    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    if(!isMobile) return;

    let closeMenus = true;
    document.querySelectorAll('.dropdown').forEach(dropdown=>{
      if(dropdown.contains(event.target)) {
        closeMenus = false;
      }
    });
    if(closeMenus) {
      closeDropdowns();
    }
  });

//   part II 
function toggleDropdown(event) {
  event.preventDefault();
  const targetId = event.target.id + "Menu";
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    if (menu.id !== targetId) {
      menu.style.display = "none";
    }
  });
  const dropdown = document.getElementById(targetId);
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function setActive(event) {
  document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
  event.target.classList.add("active");
  document.querySelectorAll(".dropdown-menu").forEach(menu => menu.style.display = "none");
}

function setSubActive(event) {
  event.stopPropagation();
  document.querySelectorAll(".dropdown-menu a").forEach(link => link.classList.remove("active"));
  event.target.classList.add("active");
}
