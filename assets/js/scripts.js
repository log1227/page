window.addEventListener("DOMContentLoaded", (event) => {
  // 设置背景图片
  const masthead = document.querySelector(".masthead");
  const images = [
    "assets/picture/DSC05952.jpg"
  ];
  const randomImage = images[0];
  masthead.style.backgroundImage = `url('${randomImage}')`;
  masthead.style.backgroundSize = "cover";
  masthead.style.backgroundPosition = "center center";
  masthead.style.backgroundRepeat = "no-repeat";
  
  // 移动端菜单自动收起
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link, #navbarResponsive .dropdown-item"),
  );
  responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });



});
