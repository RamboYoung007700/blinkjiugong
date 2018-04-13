/*
 * @Author: lenovo
 * @Date:   2018-04-13 19:10:33
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-04-13 20:19:51
 */
//全局变量chongfu，用来设置函数重复执行。
var chongfu = "";

function cc() {
    for (i = 1; i < 10; i++) {
        var t1 = document.getElementById(i);
        t1.style.backgroundColor = "orange";
    }


    var temp = new Array(3);
    temp[0] = 1;
    temp[1] = 1;
    while (temp[0] == temp[1] || temp[1] == temp[2] || temp[2] == temp[0]) {
        temp[0] = Math.round(Math.random() * 8) + 1;
        temp[1] = Math.round(Math.random() * 8) + 1;
        temp[2] = Math.round(Math.random() * 8) + 1;
    }

    for (i = 0; i < 3; i++) {
        var t1 = document.getElementById(temp[i]);
        var r = Math.round(Math.random() * 254);
        var g = Math.round(Math.random() * 254);
        var b = Math.round(Math.random() * 254);
        var color = "rgb(" + r + "," + g + "," + b + ")";
        t1.style.backgroundColor = color;
    }
}
// 启动cc函数，每秒执行一次。
function start() {
    clearInterval(chongfu);
    chongfu = setInterval("cc()", 1000);
}
// 结束cc函数，九宫格恢复橙色
function end() {
    clearInterval(chongfu);
    for (i = 1; i < 10; i++) {
        var t1 = document.getElementById(i);
        t1.style.backgroundColor = "orange";
    }
}