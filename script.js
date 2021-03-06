'use strict';

function DomElements(selector, height, width, bg, fontSize, cssStyle){

    this.selector = selector || undefined;
    this.height = 'height: ' + height || undefined;
    this.width = 'width: ' + width || undefined;
    this.bg = 'background-color: ' + bg || undefined;
    this.fontSize = 'font-size: ' + fontSize || undefined;

    this.cssStyle = this.height + '; ' + this.width + '; ' + this.bg + 
    '; ' + this.fontSize + ';';

}

const selector = prompt('Какой элемент вы хотите создать?'),
    height = prompt('Введите высоту элемента в пикселях'),
    width =  prompt('Введите ширину элемента в пикселях'),
    bg = prompt('Введите цвет элемента на английском'),
    fontSize = prompt('Введите шрифт для текста элемента'),
    message = prompt('Введите текст элемента');

DomElements.prototype.createElement = function(){
    let classname = '';
    for (let i = 1; i < selector.lenght; i++){
        classname += selector[i];
    }
    if(selector[0] === '.'){
        let div = document.createElement('div');
        div.className = classname;
        div.innerHTML = message;
        div.style.cssText = this.cssStyle;
        document.body.append(div);
    } else if (selector[0] === '#'){
        let p = document.createElement('p');
        p.className = classname;
        p.innerHTML = message;
        p.style.cssText = this.cssStyle;
        document.body.append(p);
    }
    console.log(this.cssStyle);
};

// для cssText надо создать строку в которой по очереди будет содержаться
// bg-color, width, height, fontSize

const  newElem = new DomElements(selector, height, width, bg, fontSize);

console.log(newElem.selector);

newElem.createElement(selector, height, width, bg, fontSize);
console.log(newElem);