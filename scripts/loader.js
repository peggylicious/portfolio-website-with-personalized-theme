document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "lds-default").style.visibility = "visible";
    } else {
        document.querySelector(
          "lds-default").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};