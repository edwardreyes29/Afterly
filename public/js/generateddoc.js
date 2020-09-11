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

$(document).ready(() => {
    // Global variables
    // =======================================
    // const tableNames = ['Hospice', 'Lawyers', 'Funeral', 'LifeInsurance'];
    const tableNames = ["lawyers", "insurances", "funerals", "hospices"];

    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = url.searchParams.get("caseId")
    const zip = url.searchParams.get("zipCode");

    const createDoc = table => {
        $.get(`/api/cases/${table}/${id}`).then(data => {
            console.log(data);
            console.log(data.location)
            // $("#doc-create-div").append(
            //     `<div class="four wide column center aligned">
            //         <div class="ui raised card">
            //         <div class="content">
            //             <div class="header">Estate Planning</div>
            //             <div class="meta">
            //             <span class="category estateName">${data.name}</span>
            //             </div>
            //             <div class="description">
            //             <p class="estateAddress">Address goes Here</p>
            //             </div>
            //         </div>
            //         <div class="extra content">
            //             <div class="right floated author">
            //             <i class="balance scale icon"></i>
            //             </div>
            //         </div>
            //         </div>
            //     </div>`
            // )
        })
    }

}); // end document.ready

