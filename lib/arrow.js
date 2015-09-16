var applyStrokeStyle = require('./apply-stroke');
var arrowHead = require('./arrow-head');


/**
 * @function arrow - draws S-curved arrow
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {Number} fromx - arrows tail x coordinate
 * @param {Number} fromy - arrows tail y coordinate
 * @param {Number} tox - arrows head x coordinate
 * @param {Number} toy - arrows head y coordinate
 * @param {Object} style - css-like style object
 *
 * @returns {Path2D|undefined} - Path2D object if supported (undefined otherwise)
 */

module.exports = function arrow(ctx, fromx, fromy, tox, toy, style){
	var cp1x = fromx + (tox - fromx) / 2;
	var cp2x = tox - (tox - fromx) / 2;
	var lineWidth = 2;
	if(style.strokeWidth !== undefined){
		lineWidth = style.strokeWidth;
	}

	var path, pathSupported = 'Path2D' in window;
	if(pathSupported){
		path = new window.Path2D();
	} else {
		ctx.beginPath();
		path = ctx;
	}

	path.moveTo(fromx, fromy);
	path.bezierCurveTo(cp1x, fromy, cp2x, toy, tox - lineWidth, toy);

	applyStrokeStyle(ctx, {strokeWidth: lineWidth, strokeColor: style.color, strokeStyle: style.strokeStyle});

	if(pathSupported){
		ctx.stroke(path);
	} else {
		ctx.stroke();
	}

	arrowHead(ctx, tox, toy, {fillColor: style.color, length: style.arrowLength});

	return pathSupported ? path : undefined;
};
