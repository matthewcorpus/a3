// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var rect = draw.rect(100,50).fill('red')
        var clickEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'blue'})
        })
        rect.mouseout(function(){
            this.fill({ color: 'red'})
        })
        rect.mouseup(function(){
            this.fill({ color: 'red'})
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }


    var TextBox = function(draw){
      var textbox = draw.group();
      var rect = textbox.rect(200, 30).fill("white").stroke("black")
      var text = textbox.text("hello").move(2,4);
      var caret = textbox.line(45, 2.5, 45, 25).stroke({ width: 1, color: "black" })
      return {
          move: function(x, y) {
              rect.move(x, y);
          },
          src: function(){
              return textbox;
          }
      }
    }


return {Button, TextBox}
}());

export{MyToolkit}
