jQuery(document).ready(function(){document.querySelectorAll(".ez-toc-link").forEach(t=>{t=t.replaceWith(t.cloneNode(!0))}),document.querySelectorAll(".ez-toc-section").forEach(t=>{t.setAttribute("ez-toc-data-id","#"+decodeURI(t.getAttribute("id")))}),jQuery("a.ez-toc-link").click(function(){let t=jQuery(this).attr("href"),e=jQuery("#wpadminbar"),i=jQuery("header"),o=0;parseInt(eztoc_smooth_local.scroll_offset)>30&&(o=parseInt(eztoc_smooth_local.scroll_offset)),e.length&&(o+=e.height()),(i.length&&"fixed"==i.css("position")||"sticky"==i.css("position"))&&(o+=i.height()),jQuery('[ez-toc-data-id="'+decodeURI(t)+'"]').length>0&&(o=jQuery('[ez-toc-data-id="'+decodeURI(t)+'"]').offset().top-o),jQuery("html, body").animate({scrollTop:o},500)})});