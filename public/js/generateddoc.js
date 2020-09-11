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
    const titleNames = ["Estate Planning", "Life Insurance", "Mortuary", "Hospice"]
    const icons = ["balance scale icon", "money bill alternate outline icon", "cloud upload icon", "heartbeat icon"]
    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = url.searchParams.get("caseId")
    const zip = url.searchParams.get("zipCode");

    const createDoc = (table, title, icon) => {
        console.log(icon);
        $.get(`/api/cases/${table}/${id}`).then(data => {
            console.log(data);
            console.log(data[0].location)
            jsonLocation = JSON.parse(data[0].location);
            $("#doc-create-div").append(
                `<div class="four wide column center aligned">
                    <div class="ui raised card">
                    <div class="content">
                        <div class="header">${title}</div>
                        <div class="meta">
                        <span class="category estateName">${data[0].name}</span>
                        </div>
                        <div class="description">
                        <p class="estateAddress">${jsonLocation.display_address}</p>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="right floated author">
                        <i class="${icon}"></i>
                        </div>
                    </div>
                    </div>
                </div>`
            )
        })
    }
    // createDoc(tableNames[0]);
    // tableNames.forEach(tableName => createDoc(tableName));
    for (let i = 0; i < tableNames.length; i++) {
        createDoc(tableNames[i], titleNames[i], icons[i])
    }

}); // end document.ready

