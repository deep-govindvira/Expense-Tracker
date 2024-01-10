function insert_() {
  if(document.getElementById("note").value == "" || document.getElementById("cost").value == "" || document.getElementById("cost").value == 0) {return;}
  $.ajax({
    type: "POST",
    url: "insert.php",
    data: {
      note: document.getElementById("note").value,
      cost: document.getElementById("cost").value,
    },
  });
  location.reload();
}

function update_(id) {
  if(document.getElementById("" + id + "note").value == "" || document.getElementById("" + id + "cost").value == "" || document.getElementById("" + id + "cost").value == 0) {return;}
  $.ajax({
    type: "POST",
    url: "update.php",
    data: {
      id : id,
      note: document.getElementById("" + id + "note").value,
      cost: document.getElementById("" + id + "cost").value,
    },
  });
  location.reload();
}

function delete_(id) {
  $.ajax({
    type: "POST",
    url: "delete.php",
    data: {
      id : id,
    },
  });
  location.reload();
}

function delete_all_() {
  $.ajax({
    type: "POST",
    url: "delete_all.php",
    data: {},
  });
  location.reload();
}