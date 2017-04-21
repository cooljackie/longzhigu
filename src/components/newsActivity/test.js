nie.define("Index",
function() {
    function e() {
        for (var e = $(".banner .bannerBd li").length, i = "", l = 0; e > l; l++) i += "<a></a>";
        $(".bannerHd").html(i)
    }
    function i() {
        var e, i, l = $(window),
        o = l.height(),
        n = $(".ui-animEle"),
        a = n.length;
        return $.browser.msie && 9 > parseInt($.browser.version) ? (console.log("broser,mise=" + $.browser.msie), void n.removeClass("ui-animEle")) : (i = function() {
            var t;
            $.each(n,
            function(e, i) {
                i._animed || (t = $(i), o > i.getBoundingClientRect().top && (t.removeClass("ui-animEle"), a--, i._animed = !0))
            }),
            a || (l.unbind("scroll", i), l.unbind("resize", e))
        },
        l.bind("scroll", i), e = function() {
            o = l.height()
        },
        l.bind("resize", e), void i())
    }
});
