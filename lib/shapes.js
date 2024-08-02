
class Logo {
    constructor(text, textColor){
        this.text = text
        this.textColor = textColor
    }    
        
}

class Triangle extends Logo{
    constructor(text, textColor, shapeColor){
        super(text, textColor)
        this.shapeColor = shapeColor
    }
}

class Square extends Logo{
    constructor(text, textColor, shapeColor){
        super(text, textColor)
        this.shapeColor = shapeColor
    }

}

class Circle extends Logo{
    constructor(text, textColor, shapeColor){
        super(text, textColor)
        this.shapeColor = shapeColor
    }

}

function generateSVG(data){
        if(data.shape == 'Triangle'){
            const newTriangle = new Triangle(data.text, data.textColor, data.shapeColor)
            console.log(newTriangle)
            return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <polygon points="150, 18 244, 182 56, 182" fill="${newTriangle.shapeColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newTriangle.textColor}">${newTriangle.text}</text>

</svg>`
        } else if(data.shape == 'Square'){
            const newSquare = new Square(data.text, data.textColor, data.shapeColor)
            return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="150" height="150" x="10" y="10" fill="${newSquare.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newSquare.textColor}">${newSquare.text}</text>

</svg>`
        } else if(data.shape == 'Circle'){
            const newCircle = new Circle(data.text, data.textColor, data.shapeColor)
            return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${newCircle.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newCircle.textColor}">${newCircle.text}</text>

</svg>`
        }
}

module.exports = {
    generateSVG
}