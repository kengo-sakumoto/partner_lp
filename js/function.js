AOS.init({
  once: true,
});

let ele01 = document.getElementsByClassName('anime-balloon01');
setTimeout(() => {
  for (let index = 0; index < ele01.length; index++) {
    ele01[index].style.opacity = 1;
  }
}, 2600);

let ele02 = document.getElementsByClassName('anime-balloon02');
setTimeout(() => {
  for (let index = 0; index < ele02.length; index++) {
    ele02[index].style.opacity = 1;
  }
}, 2800);

let ele03 = document.getElementsByClassName('anime-balloon03');
setTimeout(() => {
  for (let index = 0; index < ele03.length; index++) {
    ele03[index].style.opacity = 1;
  }
}, 3000);

let ele04 = document.getElementsByClassName('anime-balloon04');
setTimeout(() => {
  for (let index = 0; index < ele04.length; index++) {
    ele04[index].style.opacity = 1;
  }
}, 3200);

//追尾ボタン
const btn = document.getElementById('js-btn');
//位置取得
//body
const body_h = document.getElementById('js-body').clientHeight;
//header
//fv
const keyv_h = document.getElementById('js-keyv').clientHeight;
//company
const hiddenArea_h = document.getElementById('js-hiddenArea').clientHeight;
//footer
const footer_h = document.getElementById('js-footer').clientHeight;
//holdbtn
const holdbtn_h = btn.clientHeight;
addEventListener('scroll', () => {
  scroll_position = window.pageYOffset;
  //fvの時消す
  if (scroll_position < (keyv_h)) {
    btn.classList.add('opacity-0');
    btn.classList.add('pointer-events-none');
    //formに入ったの時消す
  } else if ((body_h - hiddenArea_h - holdbtn_h - footer_h) < scroll_position) {
    btn.classList.add('opacity-0');
    btn.classList.add('pointer-events-none');
  } else {
    btn.classList.remove('opacity-0');
    btn.classList.remove('pointer-events-none');
  }
});

// //アコーディオン
const openContent = (target) => {
  target.classList.toggle("open");
}


//スライダー
// const swiperOuter = document.getElementById('swiper-outer');
// const swiperSlides = document.getElementsByClassName('swiper-slide');



const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
  centeredSlides: true,
  loopAdditionalSlides: 3, // 無限ループさせる場合に複製するスライド数
  slidesPerView: 1.2,
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: { // ブレークポイント
    768: { // 画面幅600px以上で適用
      slidesPerView: 1.7,
      spaceBetween: 48,
    },
  },
});