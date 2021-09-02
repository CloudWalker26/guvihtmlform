let details = [];

function getData() {
  const Fname = document.querySelector("#inputFirstName").value;
  const Lname = document.querySelector("#inputLastName").value;
  const gender = document.getElementsByName("gender");
  const address = document.querySelector("#inputAddress").value;
  const country = document.querySelector("#inputCountry").value;
  const state = document.querySelector("#inputState").value;
  const pincode = document.querySelector("#inputZip").value;

  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      details.push({
        firstName: Fname,
        lastName: Lname,
        address: address,
        Gender: gender[i].value,
        Food: getFoodValue(),
        country: country,
        state: state,
        pincode: pincode,
      });
    }
  }

  document.querySelector("#my-form").reset();
  showTable();
}

// creating the table and adding values to it
function showTable() {
  if ($(".table").hasClass("hidden")) $(".table").removeClass("hidden");
  var table = $("#table-body");
  $("#table-body").empty();
  var list = details;
  for(var i=1 in details)
  {
    var row = `<tr>
                  <td>${list[i].firstName}</td>
                  <td>${list[i].lastName}</td>
                  <td>${list[i].address}</td>
                  <td>${list[i].country}</td>
                  <td>${list[i].state}</td>
                  <td>${list[i].pincode}</td>
                  <td>${list[i].Gender}</td>
                  <td>${list[i].Food}</td>
                  `;
    table.append(row);
  }
}

// Getting the food data
function getFoodValue() {
  var Food = [];
  var burger = document.getElementById("checkbox1");
  var pizza = document.getElementById("checkbox2");
  var pasta = document.getElementById("checkbox3");
  var biryani = document.getElementById("checkbox4");
  var northIndian = document.getElementById("checkbox5");

  if (burger.checked) {
    Food.push(burger.value);
  }
  if (pizza.checked) {
    Food.push(pizza.value);
  }
  if (pasta.checked) {
    Food.push(pasta.value);
  }
  if (biryani.checked) {
    Food.push(biryani.value);
  }
  if (northIndian.checked) {
    Food.push(northIndian.value);
  }

  if (Food.length > 1) {
    return Food;
  } else {
    document.getElementById("p1").innerHTML = "Select atleast two";
  }
}

$(document).ready(function () {
  $(document).on("submit", "#my-form", function () {
    return false;
  });
});
