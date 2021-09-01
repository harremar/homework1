import * as MODEL from "../model/model.js";


// import {getName as MODEL} from "../model/model.js";


function init () {
    let currentHeroImage = "home";

    // MODEL();

    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content"; 

        $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`);
        currentHeroImage = btnId;
        $(".hero-content .page-name").html(btnId)
    
        MODEL.getPageContent(contentID);
    });
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
});