class Computer{
    constructor({
        computer,
        name,
        display,
        keyboard,
        mouse
    }){
        this._computer = computer;
        this._name = name;
        this._display = display;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }

    get computer(){
        return this._computer;
    }
    set computer(newComputer){
        return this._computer = newComputer;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        return this._name = newName;
    }

    get display(){
        return this._display;
    }
    set display(newDisplay){
        return this._display = newDisplay;
    }

    get keyboard(){
        return this._keyboard;
    }
    set keyboard(newKeyboard){
        return this._keyboard = newKeyboard;
    }

    get mouse(){
        return this._mouse;
    }
    set mouse(newMouse){
        return this._mouse = newMouse;
    }
}