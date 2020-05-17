// 轮播图
bannerPlugin('#banner', {
    initialSlide: 1,
    autoplay: 3000,
    navigation: null
});

//导航条鼠标移入效果
let nav = document.querySelector('#nav '),
    navList = Array.from(nav.querySelectorAll('.nLi')),
    sub = document.querySelectorAll('.sub'),
    navBg = document.querySelector('.nav-bg');
navList.shift();
nav.addEventListener('mouseenter', function () {
    navBg.style.display = 'block';
});
nav.addEventListener('mouseleave', function () {
    navBg.style.display = 'none';
});
navList.forEach(item => {
    item.addEventListener('mouseenter', function () {
        let ul = item.querySelector('.sub');
        ul.classList.add('subactive');
    });
    item.addEventListener('mouseleave', function () {
        let ul = item.querySelector('.sub');
        ul.classList.remove('subactive');
    });
});

//咨询弹出框
let centerBox = document.querySelector('.fixedBox .center'),
    colseBtn = centerBox.querySelector('span'),
    laterBtn = centerBox.querySelector('.btn-l');

function close() {
    centerBox.style.display = 'none';
}
colseBtn.addEventListener('click', close);
laterBtn.addEventListener('click', close);

let timer = setInterval(() => {
    centerBox.style.display = 'block';
}, 50000);


//地图（根据鼠标位置显示信息）
let $cityBox = $('.china-map-label'),
    $cityList = $cityBox.children('a');
let $messBox = $('.china-map-list'),
    $messList = $messBox.children('.china-map-box');

$cityList.each((index, item) => {
    $(item).on('mouseover', function () {
        $messList.eq(index).css('display', 'block')
        .siblings().css('display', 'none');
    });
});