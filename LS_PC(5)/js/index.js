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

//鼠标移入显示对应图片
/* let $imgBox = $('.eight-img-group-box'),
    $showImg = $imgBox.children('.service-img');
$showImg.each((index, item) => {
    let pre = null;
    $(item).on('mouseenter', function () {
        let $hiddenImg = $(this).siblings();
        $hiddenImg.css('display', 'block');
        pre = $(this);
    });
    $(item).on('mouseleave', function () {
        let $hiddenImg = pre.siblings();
        $hiddenImg.css('display', 'none');
        pre = null;
    });
}); */

