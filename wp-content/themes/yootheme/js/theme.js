/*! YOOtheme Pro v2.4.5 | https://yootheme.com */
!function(t,i){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a,r=e(t),n={update:[{read:function(){return!!d()&&{height:this.$el.offsetHeight}},write:function(t){var e=t.height,a=d(),r=a[0],n=a[1];i.hasClass(this.$el,"tm-header-transparent")||(i.addClass(this.$el,"tm-header-transparent tm-header-overlay"),i.addClass(i.$$(".tm-headerbar-top, .tm-headerbar-bottom, .tm-toolbar-transparent"),"uk-"+n),i.removeClass(i.$(".tm-toolbar-transparent.tm-toolbar-default"),"tm-toolbar-default"),i.$("[uk-sticky]",this.$el)||i.addClass(i.$(".uk-navbar-container",this.$el),"uk-navbar-transparent uk-"+n)),i.css(i.$(".tm-header-placeholder",r),{height:e})},events:["resize"]}]},s={update:{read:function(){var t=d()||[],e=t[0],a=t[1];a&&i.closest(this.$el,"[uk-header]")&&(this.animation="uk-animation-slide-top",this.clsInactive="uk-navbar-transparent uk-"+a,this.top=e.offsetHeight<=window.innerHeight?i.offset(e).bottom:i.offset(e).top+300)},events:["resize"]}},o={computed:{dropbarMode:function(t){var e=t.dropbarMode;return d()||i.closest(this.$el,"[uk-sticky]")?"slide":e}}};function d(){var t=i.$('.tm-header ~ [class*="uk-section"], .tm-header ~ :not(.tm-page) > [class*="uk-section"]'),e=i.attr(t,"tm-header-transparent");return t&&e&&[t,e]}r.default.component("header",n),r.default.mixin(s,"sticky"),r.default.mixin(o,"navbar"),i.isRtl&&(a={init:function(){this.$props.pos=i.swap(this.$props.pos,"left","right")}},r.default.mixin(a,"drop"),r.default.mixin(a,"tooltip")),i.ready(function(){var t=window,e=t.$load,a=void 0===e?[]:e,r=t.$theme;!function t(e,a){e.length&&e.shift()(a,function(){return t(e,a)})}(a,void 0===r?{}:r)})}(UIkit,UIkit.util);
