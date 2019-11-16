//<![CDATA[	
									$( "body" ).addClass( "por-style" );
// Custom Load More Post's
! function(a) {
	function j(b) {
		a.getScript("http://" + b + ".disqus.com/blogger_index.js")
	}

	function k() {
		if (!f) {
			if (f = !0, !c) return void d.html("<span>No More <i class='fa fa-frown-o' aria-hidden='true'></i></span>");
			d.find("a").hide(), d.find(".sp-load").show(), a.ajax(c, {
				dataType: "html"
			}).done(function(b) {
				var g = a("<div></div>").append(b.replace(i, "")),
					h = g.find("a.blog-pager-older-link");
				h ? c = h.attr("href") : (c = "", d.hide());
				var k = g.find(e).children();
				a(e).append(k), $(".post-outer").each(function() {
					var a = $(this),
						b = a.find(".post-url").attr("data-url");
					$.get(b, function(b) {
						$(b).find('.post-body iframe[src*="youtube.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>'),
							$(b).find('.post-body iframe[src*="google.com/maps"]').length && a.find(".post-thumb").after('<div class="post-format"><i id="map-icon" class="fa fa-map-marker"></i></div>'),
							$(b).find('.post-body iframe[src*="player.vimeo.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-vimeo-square" aria-hidden="true"></i><div>'),
							$(b).find('.post-body iframe[src*="w.soundcloud.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-soundcloud" aria-hidden="true"></i></div>'),
							$(b).find(".post-body .twitter-tweet").length && (a.find(".post-thumb").after('<div class="post-format"><i id="tw" class="fa fa-twitter"></i></div>'), a.find(".post-type-twitter").html($(b).find(".post-body .twitter-tweet"))),
							$(b).find(".post-body .instagram-media").length && (a.find(".post-thumb").after('<div class="post-format"><i id="ins" class="fa fa-instagram"></i></div>'), a.find(".post-type-instagram").html($(b).find(".post-body .instagram-media")))
					}, "html")
				}), window._gaq && window._gaq.push(["_trackPageview", c]), window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(), window.disqus_shortname && j(window.disqus_shortname), window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse(), window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load(), d.find(".sp-load").hide(), d.find("a").show(), f = !1, a(".post-thumb a").attr("style", function(a, b) {
					return b.replace("/s72-c", "/s1600")
				}), a(".post-thumb a").attr("style", function(a, b) {
					return b.replace("/default.jpg", "/hqdefault.jpg")
				})
			})
		}
	}

	function l() {
		return Math.max(g.height(), h.height(), document.documentElement.clientHeight)
	}

	function m() {
		var a = l(),
			b = g.scrollTop() + g.height();
		a - b < 0 && mor()
	}

	function n() {
		if ("item" != _WidgetManager._GetAllData().blog.pageType && (c = a("a.blog-pager-older-link").attr("href"))) {
			var e = a('<a href="javascript:;">Load More</a>');
			e.click(k);
          var f = a('<div class="sp-load" style="display:none;"><i class="fa fa-spinner fa-spin"></i></div>');
			g.scroll(m), d = a('<div class="morepost bounce"></div>'), d.append(e), d.append(f), d.insertBefore(a("#blog-pager")), a("#blog-pager").hide()
		}
	}
	var b = "http://4.bp.blogspot.com/-LXuJ61J2cKc/VAaHQrehOZI/AAAAAAAAEps/-MRpMHlq6W4/s1600/loader.gif",
		c = "",
		d = null,
		e = ".blog-posts",
		f = !1,
		g = a(window),
		h = a(document),
		i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	a(document).ready(n)
}(jQuery);
                                //]]>
