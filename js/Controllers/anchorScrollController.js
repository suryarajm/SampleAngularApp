
anchorapp.controller("AppCtrl", function ($location, $anchorScroll) {
    var anchorapp = this;

    anchorapp.elms = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    //https://github.com/bgrins/TinyColor#color-combinations
    var colors = tinycolor.analogous("steelblue", anchorapp.elms.length, anchorapp.elms.length);

    anchorapp.goToAnchor = function (elm) {
        $location.hash(elm);
        //call when you when it scroll
        $anchorScroll();
    };

    anchorapp.createStyle = function (index) {
        var color = colors[index]; //grabs a tinycolor of the array
        return {
            backgroundColor: color.toHexString(),
            borderBottom: "3px solid black",
            height: "100px"
        };
    };

});