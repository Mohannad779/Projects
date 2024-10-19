// Array of task items with 9 tasks
let items = [
    {
      itemName: "Take the dog for a walk",
      image: "Photos/dog.webp", 
      description: "Take the dog for a 30-minute walk around the park.",
      importance: 0,
    },
    {
      itemName: "Buy groceries",
      image: "Photos/groceries.webp", 
      description: "Buy milk, eggs, bread, and vegetables for the week.",
      importance: 0,
    },
    {
      itemName: "Complete homework",
      image: "Photos/Complete homework.webp", 
      description: "Finish the math and science assignments due tomorrow.",
      importance: 0,
    },
    {
      itemName: "Call mom",
      image: "Photos/Call mom.webp",  
      description: "Give mom a call to check how she is doing.",
      importance: 0,
    },
    {
      itemName: "Clean the house",
      image: "Photos/Clean the house.webp",  
      description: "Clean the living room and kitchen.",
      importance: 0,
    },
    {
      itemName: "Go to the gym",
      image: "Photos/Go to the gym.webp",  
      description: "Complete a one-hour workout session at the gym.",
      importance: 0,
    },
    {
      itemName: "Read a book",
      image: "Photos/Read a book.webp", 
      description: "Read 20 pages of the current book.",
      importance: 0,
    },
    {
      itemName: "Plan the weekend",
      image: "Photos/Plan the weekend.webp",  
      description: "Organize activities for the weekend trip.",
      importance: 0,
    },
    {
      itemName: "Prepare dinner",
      image: "Photos/Prepare dinner.webp",  
      description: "Cook pasta and salad for dinner.",
      importance: 0,
    }
  ];
  
  // Function to generate the task cards dynamically
  function generateTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = ''; 
  
    items.forEach((item, index) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("col-md-4", "mb-4");
      taskCard.innerHTML = `
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="${item.itemName}">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <span class="badge bg-info">Task</span>
              <!-- Dropdown for Priority -->
              <div class="dropdown">
                <button class="btn btn-light btn-sm" type="button" id="dropdownMenuButton-${index}" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-${index}">
                  <li><button class="dropdown-item increase-btn" data-index="${index}">Increase Priority</button></li>
                </ul>
              </div>
            </div>
            <h5 class="card-title">${item.itemName}</h5>
            <p class="card-text">${item.description}</p>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span class="me-2">Priority level:</span>
                <span id="priority-${index}" class="priority-badge bg-success">${item.importance}</span>
              </div>
              <span>Deadline: 27.01.2022</span>
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
              <button class="btn btn-success">Done</button>
            </div>
          </div>
        </div>
      `;
      tasksContainer.appendChild(taskCard);
    });
  
    attachEventListeners();
  }
  
  // Function to attach event listeners to buttons
  function attachEventListeners() {
    const increaseButtons = document.querySelectorAll(".increase-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");
  
    increaseButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        increasePriority(index);
      });
    });
  
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        deleteTask(index);
      });
    });
  }
  
  // Function to increase priority
  function increasePriority(index) {
    if (items[index].importance < 5) {
      items[index].importance += 1;
    }
  
    updatePriorityBadge(index);
  }
  
  // Function to update priority badge and color
  function updatePriorityBadge(index) {
    const priorityBadge = document.getElementById(`priority-${index}`);
    const importance = items[index].importance;
  
    priorityBadge.textContent = importance;
  
    if (importance <= 1) {
      priorityBadge.classList.remove("bg-warning", "bg-danger");
      priorityBadge.classList.add("bg-success");
    } else if (importance <= 3) {
      priorityBadge.classList.remove("bg-success", "bg-danger");
      priorityBadge.classList.add("bg-warning");
    } else {
      priorityBadge.classList.remove("bg-success", "bg-warning");
      priorityBadge.classList.add("bg-danger");
    }
  }
  
  // Function to delete task
  function deleteTask(index) {
    items.splice(index, 1); 
    generateTasks(); 
  }
  
  // Sorting tasks based on priority
  document.getElementById("sort-btn").addEventListener("click", function () {
    items.sort((a, b) => a.importance - b.importance);
    generateTasks();
  });
  
  
  generateTasks();
  