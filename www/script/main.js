(function(){

    //set upp stuff.
    var balloon = document.getElementById('balloon');
    balloon.style.top = window.getComputedStyle(balloon).getPropertyValue('top');
    balloon.style.left = window.getComputedStyle(balloon).getPropertyValue('left');

    console.log(balloon);

    function moveUp(){
        console.log('move up');
        var newTop = (parseInt(balloon.style.top.replace('px','')) - 10) + 'px';
        balloon.style.top = newTop;
    }

    function moveDown(){
        console.log('move down');
        var newTop = (parseInt(balloon.style.top.replace('px','')) + 10) + 'px';
        balloon.style.top = newTop;
    }

    function moveLeft(){
        console.log('move left');
        var newLeft = (parseInt(balloon.style.left.replace('px','')) - 10) + 'px';
        balloon.style.left = newLeft;

    }

    function moveRight(){
        console.log('move right');
        var newLeft = (parseInt(balloon.style.left.replace('px','')) + 10) + 'px';
        balloon.style.left = newLeft;

    }

    function keyDown(event) {
        //console.log(event.keyIdentifier);
        if(event.keyIdentifier === 'Up'){
            moveUp();
        }
        if(event.keyIdentifier === 'Down'){
            moveDown();
        }
        if(event.keyIdentifier === 'Left'){
            moveLeft();
        }
        if(event.keyIdentifier === 'Right'){
            moveRight();
        }
    }

    window.addEventListener("keydown", keyDown, false);

}())