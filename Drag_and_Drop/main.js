const fill = document.querySelector('.fill');
// Select all of the empty classes and put them in a node list in the empties variable that we can loop through
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}


//Drag Functions
function dragStart() {
    //appending 'hold' class
    this.className += ' hold';
    //timeout prevents image from doubling up
    setTimeout(() => (this.className = 'invisible'),0);
}

function dragEnd() {
    //keeps the image from disappearing
    this.className = 'fill';
}
function dragOver (e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    //move fill and append it to empty div
    this.append(fill);
}