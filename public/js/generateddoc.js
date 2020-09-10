function setup() {

    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight)
}

function gotFile(file) {
    var img = createImg(file.data);
    img.size(600, 600);
    image(img, 0, 0, width, height);
}

function highlight() {
    dropzone.style('background-color', '#ccc');
}

function unhighlight() {
    dropzone.style("background-color", "#fff");
}