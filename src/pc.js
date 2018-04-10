import './css/single.css';
import $ from 'expose-loader?$!jquery'; // 处理Jqery
import '../lib/jquery.lazyload.min.js';
import Pccon from './components/pc/content.js';

const Pc = function () {
    var main = document.getElementById('main');
    var pccon = new Pccon();
    /* 这里有个点需要注意下，就是new关键字是用来实例化一个对象的，*/
    /* 并且后面跟的对象名需要首字母是大写的，所以，在实例化的时候注意有没有首字母大写  */
    main.innerHTML = pccon.pc();
}

if (is_mobile()) {
    document.location.href = "./wap.html";
} else {
    //document.location.href = "";
}

$(function(){

    new Pc();

    // 延迟加载
    $("img.lazy").lazyload({
        event: 'scroll', // 触发事件
        threshold: 200, // 灵敏度
        container: $(".content"),  // 指定容器
        effect: "show", // 加载使用的动画效果，如 show, fadeIn, slideDown
    });

});

// is_mobile
function is_mobile() {
    var regex_match = /(ipad|nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    var result = regex_match.exec(u);
    if (null == result) {
        return false
    } else {
        return true
    }
}


