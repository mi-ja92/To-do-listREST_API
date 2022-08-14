const baseUrl = "http://localhost:3000";

const getTask = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const postTask = async (task) => {
  const data = { description: task, done: false };
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
