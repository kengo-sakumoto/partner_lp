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

// 追尾ボタン
const btn = document.getElementById('js-btn');
const keyv = document.getElementById('js-keyv');
const footer = document.getElementById('js-footer');

// 追尾ボタンが存在する場合のみ実行
if (btn && keyv && footer) {

  const updateBtnVisibility = () => {
    // ファーストビュー内にいるか
    const isFirstView = keyv.getBoundingClientRect().bottom > 0;

    // 追尾ボタンがフッターに到達したか
    const isAtFooter =
      footer.getBoundingClientRect().top <=
      btn.getBoundingClientRect().bottom;

    // 非表示条件
    const shouldHide = isFirstView || isAtFooter;

    btn.classList.toggle('opacity-0', shouldHide);
    btn.classList.toggle('pointer-events-none', shouldHide);
  };

  // スクロール・画面サイズ変更時に判定
  window.addEventListener('scroll', updateBtnVisibility, { passive: true });
  window.addEventListener('resize', updateBtnVisibility);

  // ページ読み込み時にも判定
  updateBtnVisibility();
}


// //アコーディオン
const openContent = (target) => {
  target.classList.toggle("open");
}

//タブ切り替え
// ボタンとコンテンツを取得
const buttons = document.querySelectorAll('.tab-button-container button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 全てのボタンから active を外す
    buttons.forEach(btn => btn.classList.remove('active'));
    // 全てのコンテンツから active を外す
    contents.forEach(content => content.classList.remove('active'));

    // クリックしたボタンを active に
    button.classList.add('active');
    // 対応するコンテンツを表示
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});


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