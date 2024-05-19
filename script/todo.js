let ul = document.getElementById("list-container");
      let input = document.getElementById("input");
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && input.value.trim() !== "") {
          add();
        }
      });

      function add() {
        if (input.value.trim() === "") {
          return;
        }

        let listItem = document.createElement("li");
        let deleteButton = document.createElement("button");
        listItem.innerHTML = input.value + " ";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteItem;
        listItem.appendChild(deleteButton);
        ul.appendChild(listItem);
        input.value = "";
      }
      function deleteItem(event) {
        event.target.parentElement.remove();
      }