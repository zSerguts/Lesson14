'use strict';

function DomElements(selector = '.someclass', height = '100px', width = '100px', bg = 'gray', fontSize = '20px', 
message = 'Получилось!'){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.message = message;
}

DomElements.prototype.createElement = function(){
    //let classname = '';
    if(this.selector[0] === '.'){   
        let div = document.createElement('div');
        div.className = this.selector.substr(1);
        div.innerHTML = this.message;
        div.style.cssText = `height:${this.height}; width:${this.width}; background:${this.bg}; font-size:${this.fontSize};`;
        document.body.append(div);
    } else if (this.selector[0] === '#'){
        let p = document.createElement('p');
        p.className = this.selector.substr(1);
        p.innerHTML = this.message;
        p.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        `;
        document.body.append(p);
    }
};

// для cssText надо создать строку в которой по очереди будет содержаться
// bg-color, width, height, fontSize

const  newElem = new DomElements('.newElem', '250px', '200px', 'green', '25px');


newElem.createElement();