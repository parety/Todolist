tags = tags || {};
tags = (function() {
    let Tags = [];
    var Frequency = 0;
    var config = {
        showCount: 4,
    };
    // 修改操作
    var edit = function(str) {

    };
    // 读操作
    var getAll = function() {
        return Tags;
    };
    //存入操作
    var push = function(str) {
        //判断标签不是重复的
        if (Tags.indexOf(str) === -1) {
            return Tags.push(str);
        }
    };
    //排序操作，将用户最常使用的标签排在前面
    var sort = function() {
        Tags.sort();
    }
    var inputClear = function() {
        var tagContent = document.querySelector('#tag');
        tagContent.value = '';
    }
    var htmlAddTag = function() {
        var hasAddTag = document.querySelector('#hasAddTag');
        var tagContent = document.querySelector('#tag');
        tags.push(tagContent.value);
        var tagText = document.createTextNode(tagContent.value);
        var span = document.createElement('span');
        span.appendChild(tagText);
        hasAddTag.appendChild(span);
    }
    return {
        htmlAddTag: htmlAddTag,
        push: push,
        inputClear: inputClear,
        getAll: getAll
    }
}());
//对于标签的处理
//按空格键提交
document.getElementById('tag').addEventListener('keydown', function(e) {
    var keycode = e.keyCode;
    if (keycode == 32) {
        tags.htmlAddTag();
        tags.inputClear();
    }
}, false);