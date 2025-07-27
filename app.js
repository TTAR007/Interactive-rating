const ratingBtns = document.querySelectorAll(".rating");

for (const rating of ratingBtns) {
    rating.addEventListener("click", (eventObj) => {
        // before click, remove style and class of another element that we have added first.
        // loop through all elements, but removeAttribute() if specified attribute does not exist It will not generate an error
        ratingBtns.forEach((rating) => {
            rating.removeAttribute("style");
            rating.classList.remove("selected");
        })

        // add style to rating button
        eventObj.currentTarget.style.color = "var(--Grey-950)";
        eventObj.currentTarget.style.backgroundColor = "var(--Orange)";
        // use "selected" class to track
        eventObj.currentTarget.classList.add("selected");
    })
}

const submitBtn = document.getElementById("submit-btn");
const h1 = document.getElementById("h1");
const description = document.getElementById("description-text");
const star = document.getElementById("star");
const ratings = document.getElementById("ratings");
const phoneImg = document.getElementById("phone");
const resultText = document.getElementById("result");

submitBtn.addEventListener("click", () => {
    // get a rating that user have selected
    // if a rating button has "selected" class, it means it has been selected.
    let selectedRate;
    for (const rating of ratingBtns) {
        if (rating.classList.contains("selected")) {
            selectedRate = rating.textContent;
            break;
        }
    }

    if (!selectedRate) {
        alert("Please select one");
    } else {
        // change text to thank you
        h1.textContent = "Thank you!";
        description.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
        h1.classList.add("text-center");
        description.classList.add("text-center");
    
        //display mobile img and rating result
        phoneImg.classList.remove("hide");
        resultText.classList.remove("hide");
        resultText.textContent = `You selected ${selectedRate} out of 5`;
    
        //display none of previous elements
        star.classList.add("hide");
        ratings.classList.add("hide");
        submitBtn.classList.add("hide");
    }

})