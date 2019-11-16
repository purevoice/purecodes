//<![CDATA[


$("#LinkList103").each(function() {
	var e = "<ul id='nav2'><li class='HOME'><a href='/'>home</a><li></li><li><ul id='sub-menu'>";
	$("#LinkList103 li").each(function() {
		var t = $(this).text(),
			n = t.substr(0, 1),
			r = t.substr(1);
		"_" == n ? (n = $(this).find("a").attr("href"), e += '<li><a href="' + n + '">' + r + "</a></li>") : (n = $(this).find("a").attr("href"), e += '</ul></li><li><a href="' + n + '">' + t + "</a><ul id='sub-menu'>")
	});
	e += "</ul></li></ul>";
	$(this).html(e);
	$("#LinkList103 ul").each(function() {
		var e = $(this);
		if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
	});
	$("#LinkList103 li").each(function() {
		var e = $(this);
		if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
	})
});
$(".menu li ").each(function() {
	var e = $(this).find("a").text();
	if (e.substr(0, 5).match("mega/")) {
		var t = e.replace("mega/", "");
		$(this).find("a").text(t), $(this).addClass("mega-menu"), $(this).append('<div class="mega-container"><div class="mega-menu-loader"><i class="fa fa-spinner fa-pulse fa-fw"></i></div></div>');
		var a = $(this).find("a").attr("href"),
			n = a.replace("/search/label/", "");
		$(this).each(function() {
			$.ajax({
				url: "/feeds/posts/default/-/" + n + "?alt=json-in-script&max-results=4",
				type: "get",
				dataType: "jsonp",
				success: function(json) {
					for (var t = "", n = '<div class="mega-posts">', r = 0; r < json.feed.entry.length; r++) {
						for (var s = 0; s < json.feed.entry[r].link.length; s++)
							if ("alternate" == json.feed.entry[r].link[s].rel) {
								t = json.feed.entry[r].link[s].href;
								break
							}
						var postTitle = json.feed.entry[r].title.$t;
						var postThumbSize = 600;
						var authorImg = " ";
						var postThumb = " ";
						postThumb = postThumb.replace('/s72-c/', '/s' + postThumbSize + '/');
						var postCategory = " ";
						var date = json.feed.entry[r].published.$t;
						try {
							postThumb = json.feed.entry[r].media$thumbnail.url;
						} catch (nl) {
							postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png";
						}
						try {
							postCategory = json.feed.entry[r].category[0].term;
						} catch (n) {
							postCategory = "uncategorized";
						}
						n += '<div class="mega-post"><div class="mega-menu-thumb"><div class="mega-thumb"><a href="' + t + '" style="background:url(' + postThumb + ') no-repeat center center;background-size: cover"/></div></div><div class="mega-content"><a class="mega-category" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><h3 class="mega-title"><a href="' + t  + '">' + postTitle + '</a></h3></div><div class="clear"/></div>'
					} // loop
					n += "</div>", $(".menu li").each(function() {
						var e = $(this).find("a").attr("href");
						e == a && ($(this).find(".mega-menu-loader").remove(), $(this).find(".mega-container").html(n), $(this).find(".mega-thumb a").each(function() {
							$(this).attr("style", function(e, t) {
								return t.replace("/default.jpg", "/mqdefault.jpg")
							}).attr("style", function(e, t) {
								return t.replace("s72-c", "s1600")
							})
						}))
					})
				}
			})
		})
	}
}), $(".menu li").each(function() {
	($(this).find("ul").length > 0 || $(this).find(".mega-container").length > 0) && $(this).addClass("drop-down"), $(this).find("ul").length > 0 && $(this).addClass("drop-down")
});








                                //]]>
