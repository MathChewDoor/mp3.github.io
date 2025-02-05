function showBox(day) {
    let box = document.getElementById("animated-box");

    box.style.transform = "translateY(-50px)";
    box.style.opacity = "0";

    let borderColors = {
        "Monday": "blue",
        "Tuesday": "red",
        "Wednesday": "yellow",
        "Thursday": "green",
        "Friday": "orange",
        "Saturday": "purple",
        "Sunday": "brown"
    };

    setTimeout(() => {
        box.style.border = `5px solid ${borderColors[day]}`;
        box.style.transform = "translateY(0)";
        box.style.opacity = "1";
    }, 100);
}