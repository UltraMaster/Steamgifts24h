// ==UserScript==
// @name         Steamgifts 24H
// @description  Shows time in 24H and 'day month, year' format
// @author       UltraMaster
// @namespace    https://github.com/UltraMaster
// @downloadURL  https://github.com/UltraMaster/Steamgifts24h/raw/master/Steamgifts24h.user.js
// @license      MIT License
// @copyright    Copyright (C) 2018, by UltraMaster
// @version      1.0
// @updateURL    https://github.com/UltraMaster/Steamgifts24h/raw/master/Steamgifts24h.user.js
// @match        http*://www.steamgifts.com/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;

    $(function(){
        $(document).on("mouseenter", "[data-timestamp]", function() {
            var e = $(this).attr("title");
            if (void 0 === e || !1 === e) {
                var t = new Date(1e3 * $(this).data("timestamp"))
                , a = t.getDate()
                , s = t.getMonth()
                , i = t.getFullYear()
                , n = t.getHours()
                , o = t.getMinutes();
                if (a.toString() + s.toString() + i.toString() === date_today)
                    var d = "Today";
                else if (a.toString() + s.toString() + i.toString() === date_yesterday)
                    d = "Yesterday";
                else if (a.toString() + s.toString() + i.toString() === date_tomorrow)
                    d = "Tomorrow";
                else
                    d = a + " " + date_month_names[s] + ", " + i;
                "*" === $(this).text() && (d = "Edited: " + d),
                    n,
                    $(this).attr("data-ui-tooltip", '{"rows":[{"icon" : [{"class" : "fa-clock-o", "color" : "#84cfda"}], "columns":[{"name" : "' + d + ", " + n + ":" + ("0" + o).slice(-2)+ '"}]}]}')
            }
        })
    });

})();
