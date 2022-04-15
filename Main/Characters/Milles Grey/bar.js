CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};

class Bar {
  constructor(x, y, w, h, maxVal, color, text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxVal = maxVal;
    this.maxWidth = w;
    this.value = maxVal;
    this.color = color;
    this.text = text;
  }

  show(context) {
    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.roundRect(this.x, this.y, this.w, this.h, 30).fill();
    context.roundRect(this.x, this.y, this.maxWidth, this.h, 30).stroke();
    context.font = "23px Roboto";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "rgba(234, 234, 234, 0.5)";
    context.fillText(
      this.text,
      this.x + this.maxWidth / 2,
      this.y + this.h / 2,
      this.maxWidth
    );
  }

  updateVal(name, val) {
    if (this.value > 0) {
      this.name = name;
      this.value = val;
      this.text = `             ${name + this.value}            `;
      this.w = (this.value / this.maxVal) * this.maxWidth;
    }
  }

  updateColor(newColor) {
    this.color = newColor;
  }
}
