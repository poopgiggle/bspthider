// ==UserScript==
// @name BSPTHider
// @description Hides point tracking thread posts on BS
// @namespace poopgiggle
// @version 0.1
// @include http*://www.boomershooter.com/forums/index.php?app=core&module=search&do=viewNewContent*
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==


$(document).ready(function() {
    $('tr._recordRow').each(function(){
        if( $(this).find('td h4 a')[0].text.search('| Point Tracking Threa') > 0 ){ $(this).remove(); }
     });
});
