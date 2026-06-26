// Dismiss loader on DOMContentLoaded (don't wait for video/images)
// Hard cap of 800ms so it never idles longer than that
(function() {
    var MAX_WAIT = 800;
    var dismissed = false;

    function dismiss() {
        if (dismissed) return;
        dismissed = true;
        jQuery("#ju-loading-screen").addClass('ju-hide--loading-screen--');
    }

    // Fire as soon as DOM is parsed
    jQuery(document).ready(function() {
        dismiss();
    });

    // Absolute fallback — never wait more than 800ms
    setTimeout(dismiss, MAX_WAIT);
})();