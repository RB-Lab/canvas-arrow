/**
 * @function applyStrokeStyle - apply stroke styles form styles object for current context
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {Object} style - css-like style object
 */

module.exports = function applyStrokeStyle(ctx, style) {
	if(style.strokeColor && style.strokeWidth){
		if(style.strokeColor){
			ctx.strokeStyle = style.strokeColor;
		}
		if(style.strokeWidth){
			ctx.lineWidth = style.strokeWidth;
			if(style.strokeStyle === 'dashed'){
				ctx.setLineDash([style.strokeWidth * 5, style.strokeWidth * 2]);
			} else {
				ctx.setLineDash([]);
			}
		}
	}
};
