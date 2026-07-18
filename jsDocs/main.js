const elements = document.querySelectorAll(".smooth-animation, .smooth-animation-left");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

elements.forEach((element) => {
    observer.observe(element);
});


const button = document.getElementById("checkAnswer");

button.addEventListener("click", function () {

    const answer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    const answers = ["бурмалда", "ель", "елка", "кетцалькоать"];

    if (answers.includes(answer)) {

        document.getElementById("winImages").style.display = "flex";

        document.getElementById("winSound").play();

    } else {

        document.getElementById("loseSound").play();

    }

});