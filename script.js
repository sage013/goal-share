document.getElementById("goalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the goal title and description
    const title = document.getElementById("goalTitle").value;
    const description = document.getElementById("goalDescription").value;

    // Add new goal to the Goals section
    const goalCard = document.createElement("div");
    goalCard.classList.add("col-md-4");
    goalCard.innerHTML = `
        <div class="card mb-4">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Goal">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    `;
    document.getElementById("goalCards").appendChild(goalCard);

    // Reset the form
    document.getElementById("goalForm").reset();
    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addGoalModal'));
    modal.hide();
});
