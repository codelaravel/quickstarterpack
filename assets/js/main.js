/*
* ----------------------------------------------------------------------------------------
    Author       : Shuvro Roy
    Template Name: * Template
    Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
;(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();




    });


    jQuery(window).load(function(){


    });


}(jQuery));
