// NAVIGATION laden

fetch("/assets/components/nav.html")

  .then(res => res.text())

  .then(data => {

    document.getElementById("nav").innerHTML = data;

  });

// WHATSAPP laden

fetch("/assets/components/whatsapp.html")

  .then(res => res.text())

  .then(data => {

    document.getElementById("whatsapp").innerHTML = data;

  });
