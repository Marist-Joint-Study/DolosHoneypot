define(["app/yangui/yangui.module"],function(e){e.register.directive("sticky",["$timeout",function(e){return{restrict:"A",scope:{offset:"@"},link:function(t,n,r){e(function(){function c(){n.addClass("not-sticky"),n.wrap(l),h(),p()}function h(){u=$(n).offset().top-r}function p(){a=(window.pageYOffset||s.scrollTop)-(s.clientTop||0),a>=u?(n.css("position","fixed").removeClass("not-sticky").addClass("is-sticky"),$(".sticky-element"+f).css("height",parseInt(n.css("height"))===0?"auto":n.css("height"))):(n.css("position",o).removeClass("is-sticky").addClass("not-sticky"),$(".sticky-element"+f).css("height","auto"));var e=n.hasClass("not-sticky")?h():null}function d(){n.css("position",o),e(c)}var r=t.offset||0,i=angular.element(window),s=document.documentElement,o=n.css("position"),u,a,f=Math.floor(Math.random()*1e3+1),l=$('<div class="sticky-element'+f+' mt20"></div>');n.css("top",r+"px"),i.on("scroll",p),i.on("resize",d),c()})}}}])});