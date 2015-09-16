/**
 * @function arrowHead - draws head for arrow (pointing to right)
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {Number} x - arrowhead tip x coordinate
 * @param {Number} x - arrowhead tip y coordinate
 * @param {Object} style - css-like style object
 */

module.exports = function arrowHead(ctx, x, y, style){
	var l = style.length || 15;
	var h = l / 3;
	var c = l - l / 4;
	ctx.beginPath();
	ctx.moveTo(x - l, y - h);
	ctx.lineTo(x, y);
	ctx.lineTo(x - l, y + h);
	ctx.quadraticCurveTo(x - c, y, x - l, y - h);
	ctx.fillStyle = style.fillColor;
	ctx.fill();
	ctx.closePath();
};
