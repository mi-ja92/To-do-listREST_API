const getTasks = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const postSth = async (task) => {
  const data = { description: task, done: false };
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

getTasks();

const list = document.getElementById("list");
const container = document.getElementById("container");

const addToDom = async () => {
  list.innerHTML = "";
  const data = await getTasks();
  console.log(data);
  data.forEach((task) => {
    const addLi = document.createElement("li");
    addLi.setAttribute("class", "newclass");
    addLi.innerHTML = task.description;
    const deletebtn = document.createElement("img");
    deletebtn.src = "https://cdn-icons-png.flaticon.com/512/3481/3481306.png";
    deletebtn.setAttribute("id", task._id);
    const extraDiv = document.createElement("div");
    extraDiv.setAttribute("class", "container3");
    extraDiv.appendChild(deletebtn);
    list.appendChild(addLi);
    addLi.appendChild(extraDiv);
    // deletebtn.innerHTML = "Delete";
    deletebtn.addEventListener("click", (event) => {
      console.log(event.target.id);
      const deleteTask = async (id) => {
        try {
          const response = await fetch(`${"http://localhost:3000"}/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            console.log(response.status);
          }
        } catch (error) {
          console.log("Your task has not been deleted" + error);
        }
      };
      deleteTask(event.target.id);
      addToDom();
    });
  });
};

addToDom();

const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => {
  const taskInput = document.getElementById("inputfield").value;
  if (taskInput === "") {
    alert("You have to type a task!");
  } else {
    postSth(taskInput);
    addToDom();
  }
});
