document.querySelector(".container").onmouseover = function (e) {
    let id = e.target.id;
    switch (id) {
        case "image1":
    document.querySelector("#image1").src = "images/image1_2.jpg";
    break;
    case "image2":
    document.querySelector("#image2").src = "images/image2_2.jpg";
    break;
    case "image3":
    document.querySelector("#image3").src = "images/image3_2.jpg";
    break;
    case "image4":
    document.querySelector("#image4").src = "images/image4_2.jpg";
    break;
    case "image5":
    document.querySelector("#image5").src = "images/image5_2.jpg";
    break;
}
}