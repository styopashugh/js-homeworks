function Humen(name,surname){
    this.name =name;
    this.surname =surname;
    this.speed =0;
    this.state =undefined
    
}
Humen.prototype.run =function(speed){
    this.speed =speed;
    alert(`${this.name} is running at ${this.speed} speed`);
}


Humen.prototype.stop =function(){
    this.speed =0;
    alert(`the runner  ${this.name} stoopd`);
}

Humen.prototype.changeState =function(state){
    this.state =state
    console.log(state);
    
}

const man =new Humen('jon','smit')
man.run(10)
man.stop()
man.changeState("go");