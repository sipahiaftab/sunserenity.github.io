const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {

  e.preventDefault();

  const formData = new FormData(form);

  await fetch(
    "https://script.google.com/macros/s/AKfycbx416ucN5vrD7ZoIMfSooS4z4R_8_SpzzAUd9FYMf44QktQjYhoX4M12i_S_kyDJO0r/exec",
    {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }
  );

  document.getElementById("status").innerText =
    "Message sent successfully!";

  form.reset();

});