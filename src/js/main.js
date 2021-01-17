import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
import Axios from "axios";
const tab = () => {
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function() {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
};
const scroll = () => {
    window.onscroll = function() {
        scrollFunction();
    };
    const button = document.querySelector("#go-top");
    const headermenu = document.querySelector("#header-sroll");

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            button.style.display = "block";
            headermenu.classList.add("active");
        } else {
            button.style.display = "none";
            headermenu.classList.remove("active");
        }
    }

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    scroll();
    tab();
});