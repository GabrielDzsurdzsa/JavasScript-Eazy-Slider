document.addEventListener("DOMContentLoaded", function (event) {

    request("GET", slider.href, carousel_container, true);
    request("GET", add_slider.href, add_slides_container, true);
    document.forms.namedItem("create_slider").addEventListener("submit", function (event) {

        event.preventDefault();
        var form = document.getElementById("create_slider");
        var slidesContainer = document.getElementById("slides_container");
        for (var key in form.childNodes) {
            if (typeof form[key] != "undefined") {
                if (form[key].type == "text" || form[key].type == "file") {
                    array.push(new Array(form[key].id, form[key].value));
                }
                else if (form[key].type == "checkbox") {
                    if (form[key].checked) {
                        array.push(new Array(form[key].id, form[key].checked));
                    }
                };
                if (form[key].tagName && form[key].tagName.toLowerCase() == "select") {
                    array.push(new Array(form[key].id, form[key].options[form[key].selectedIndex].value));
                }
            }
        }

        var stringify = JSON.stringify(array);                
        request("GET", slider_item.href, slidesContainer, true);        


    })


})

