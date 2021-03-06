// HTML5 Canvas animation library
// http://edmoremoyo.com
// Credits : Paul Irish for shim layer

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
}());


var animation = function(spec){
    var that = Object.create(null),
        d = document,
        canvas = d.body.appendChild(d.createElement('canvas'));

    canvas.id = spec.canvasID || "";
    canvas.width = spec.width || 300;
    canvas.height = spec.height || 150;

    that.getCanvasID = function(){
        return spec.canvasID
    };

    that.getCanvas = function(){
        return document.getElementById(spec.canvasID);
    };

    that.getContext = function(){
        return that.getCanvas().getContext(spec.context);
    };
    return that;
};
