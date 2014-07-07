$(document).ready(function () {

    //搜索框
    $(".con_top_sele_input").each(function () {
        var thisVal = $(this).val();
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
        if (thisVal != "") {
            $(this).siblings("span").hide();
        } else {
            $(this).siblings("span").show();
        }
        //聚焦型文本框验证	
        $(this).focus(function () {
            $(this).siblings("span").hide();
        }).blur(function () {
            var val = $(this).val();
            if (val != "") {
                $(this).siblings("span").hide();
            } else {
                $(this).siblings("span").show();
            }
        });
    });
    //图片变换
    $(".imgsrc").hover(function (event) {
        var imgsrc = $(event.currentTarget).attr("src");
        imgsrc = imgsrc.replace("img1.png", "img2.png");
        $(event.currentTarget).attr("src", imgsrc);
    }, function (event) {
        var imgsrc = $(event.currentTarget).attr("src");
        imgsrc = imgsrc.replace("img2.png", "img1.png");
        $(event.currentTarget).attr("src", imgsrc);
    });
    $(".imgsrcs").hover(function (event) {
        var imgsrc = $(event.currentTarget).attr("src");
        imgsrc = imgsrc.replace("1.png", "2.png");
        $(event.currentTarget).attr("src", imgsrc);
    }, function (event) {
        var imgsrc = $(event.currentTarget).attr("src");
        imgsrc = imgsrc.replace("2.png", "1.png");
        $(event.currentTarget).attr("src", imgsrc);
    });
});