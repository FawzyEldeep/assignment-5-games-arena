

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // بيعرض الـ Slide الواحد (اللي جوه الـ 3 صور مع بعض)
    spaceBetween: 20,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });
});

// 1. إعدادات الصف الأول (بيتحرك للشمال)
const topLogosSwiper = new Swiper('.top-logos-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    speed: 5000, // سرعة الحركة المستمرة
    allowTouchMove: false, // لمنع التقطيع أثناء اللف
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

// 2. إعدادات الصف الثاني (بيتحرك لليمين عكس الأول عشان يعطي شكل جمالي ممتاز)
const bottomLogosSwiper = new Swiper('.bottom-logos-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true, // بيخلي الصف التاني يتحرك بالعكس لليمين
    },
});