var custom = {
    init: function () {
        "use strict";

        var player = videojs('video_1', {
            'poster'        :   'images/video_cover.jpg',
            'flash'         :   {
                'swf'       :   'js/libs/video-js.swf'
            },
            'language'      :   'zh'
        }, function () {

            //this.play(); // if you don't trust autoplay for some reason

            // How about an event listener?
            this.on('ended', function () {
            });
        });


        custom.binding();
    },
    binding: function () {

        var bodyEl = document.getElementsByTagName("body")[0];
        var filterEl = document.getElementsByClassName("filter")[0];
        var filterListEl = document.getElementsByClassName("filter-list")[0];
        var filterTop = 710;

        document.onscroll = function(e){
            "use strict";
            var bodyScrollTop = bodyEl.scrollTop;
            var filterFloat= getStyle(filterEl)["float"];
            if(bodyScrollTop > filterTop && "none" != filterFloat){
                filterListEl.classList.add("fixed");
            }else{
                filterListEl.classList.remove("fixed");
            }
        };

        function getStyle(ele) {
            if(window.getComputedStyle) {
                return window.getComputedStyle(ele);
            }else{
                return ele.currentStyle;
            }
        }

    }

};


jQuery(document).ready(function ($) {
    custom.init();
});