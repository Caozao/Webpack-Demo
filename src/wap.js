import './css/single-wap.css';
import $ from 'expose-loader?$!jquery'; // 处理Jqery
import '../lib/jquery.lazyload.min.js';
import Wapcon from './components/wap/content.js';

const Wap = function () {
    var main = document.getElementById('main');
    var wapcon = new Wapcon();
    /* 这里有个点需要注意下，就是new关键字是用来实例化一个对象的，*/
    /* 并且后面跟的对象名需要首字母是大写的，所以，在实例化的时候注意有没有首字母大写  */
    main.innerHTML = wapcon.wap();
}

$(function() {

    new Wap();
    // 延迟加载
    $("img.lazy").lazyload({
        event: 'scroll', // 触发事件
        threshold: 200, // 灵敏度
        container: $(".content"),  // 指定容器
        effect: "show", // 加载使用的动画效果，如 show, fadeIn, slideDown
    });
});