const open_menu_btn = document.querySelector('#open__nav-btn');
const close_menu_btn = document.querySelector('#close__nav-btn');
const menu__selection = document.querySelector('.menu__selection');
const employee_profile_btn = document.querySelector('#employee_profile_btn');
const employee_modal = document.querySelector('.employee_modal');
const main_section = document.querySelector('.main_section');
const close_profile = document.querySelector('.overlay')
const ShowNav = () => {
    menu__selection.style.top = "0.1rem";
    open_menu_btn.style.display = "none";
    close_menu_btn.style.display = "block"
  };
  const HideNav = () => {
    open_menu_btn.style.display = "block";
    close_menu_btn.style.display = "none";
    menu__selection.style.top = "-5rem";
  
  }

  open_menu_btn.addEventListener("click", ShowNav);
  close_menu_btn.addEventListener("click", HideNav);

// Show Modal

const showModal = () => {
    employee_modal.classList.remove("hidden");
    employee_modal.classList.add("overlay");
};

const closeModal = () => {
    employee_modal.classList.remove("overlay");
    employee_modal.classList.add("hidden");
};

employee_profile_btn.addEventListener("click", showModal);
employee_modal.addEventListener("click", closeModal);