class paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.crumbledPaper=loadImage("paper.png");
        this.crumbledPaper.scale=0.5;
    }
    display(){
        image(this.crumbledPaper,200,500);
    }
        
}