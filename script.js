const input_text = document.getElementsByClassName("input-text")[0];
const input_btn = document.getElementsByClassName("input-btn")[0];
const box_container = document.getElementsByClassName("history-box")[0];
const display_button = document.getElementById("all");
const active_button = document.getElementById("active");
const complete_button = document.getElementById("complete");
const clear = document.getElementById("clear");
const arr = [];

function create_element() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        const newDiv = document.createElement('div');
        const get_value = item.value;
        const textNode = document.createElement('p');
        textNode.textContent = get_value;

        const text_container = document.createElement('div');
        text_container.appendChild(textNode);
        text_container.setAttribute("class", "text_container");


        const complete_button = document.createElement("button");
        const delet_button = document.createElement("button");

        const complete_img = document.createElement("img");
        complete_img.src = "images/complete.png";
        complete_img.style.width = '40px';

        complete_button.appendChild(complete_img);

        const delet_img = document.createElement("img");
        delet_img.src = "images/delet.jpg";
        delet_img.style.width = '40px';
        delet_button.appendChild(delet_img);


        const child_div = document.createElement('div');
        child_div.appendChild(complete_button);
        complete_button.style.marginRight = "10px";
        delet_button.style.marginRight = "10px";
        child_div.appendChild(delet_button);

        newDiv.setAttribute("class", "newdiv");

        newDiv.appendChild(text_container);
        newDiv.appendChild(child_div);
        newDiv.style.width = "100%";
        child_div.style.display = "flex";
        box_container.appendChild(newDiv);
        newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
        newDiv.style.border = "1px solid black";

        text_container.style.width = "90%";
        text_container.style.overflow = "scroll";
        textNode.style.padding = " 2px 10px";
        textNode.style.marginTop = "12px";
        input_text.value = "";

        if (arr[index].completed === true) {
            textNode.style.textDecoration = "line-through"
            console.log(arr);
        }
        else {
            textNode.style.textDecoration = "none";
        }

        complete_button.setAttribute("onClick", `complete(${index})`);
        delet_button.setAttribute("onClick", `delet(${index})`);

    });
}

function complete(index) {
    arr[index].completed = !arr[index].completed;
    create_element();
}

function delet(index) {
    arr.splice(index, 1);
    create_element();
}

function match() {
    const input_val = input_text.value;
    let count = 0;
    const empty_check = input_val.trim();
    if (empty_check.length === 0) {
        alert("please enter a valid name");
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value === empty_check) {
                count++;
            }
        }

        if (count === 0) {
            arr.push({
                "completed": false,
                "value": empty_check
            });
        }
        else {
            alert("element is already present");
        }
    }
    create_element();

}

function showall() {
    box_container.innerHTML = "";
    create_element();
}

function activeitem() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        if (arr[index].completed === false) {
            const newDiv = document.createElement('div');
            const get_value = item.value;
            console.log(get_value);
            const textNode = document.createElement('p');
            textNode.textContent = get_value;

            const text_container = document.createElement('div');
            text_container.appendChild(textNode);
            text_container.setAttribute("class", "text_container");


            const complete_button = document.createElement("button");
            const delet_button = document.createElement("button");

            const complete_img = document.createElement("img");
            complete_img.src = "images/complete.png";
            complete_img.style.width = '40px';

            complete_button.appendChild(complete_img);

            const delet_img = document.createElement("img");
            delet_img.src = "images/delet.jpg";
            delet_img.style.width = '40px';
            delet_button.appendChild(delet_img);


            const child_div = document.createElement('div');
            child_div.appendChild(complete_button);
            complete_button.style.marginRight = "10px";
            delet_button.style.marginRight = "10px";
            child_div.appendChild(delet_button);

            newDiv.setAttribute("class", "newdiv");

            newDiv.appendChild(text_container);
            newDiv.appendChild(child_div);
            newDiv.style.width = "100%";
            child_div.style.display = "flex";
            box_container.appendChild(newDiv);
            newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
            newDiv.style.border = "1px solid black";

            text_container.style.width = "90%";
            text_container.style.overflow = "scroll";
            textNode.style.padding = " 2px 10px";
            textNode.style.marginTop = "12px";
            input_text.value = "";

            if (arr[index].completed === true) {
                textNode.style.textDecoration = "line-through"
            }
            else {
                textNode.style.textDecoration = "none";
            }

            complete_button.setAttribute("onClick", `complete(${index})`);


            delet_button.setAttribute("onClick", `delet(${index})`);


        }
    });
}

function completeTask() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        if (arr[index].completed === true) {
            const newDiv = document.createElement('div');
            const get_value = item.value;
            const textNode = document.createElement('p');
            textNode.textContent = get_value;
            newDiv.appendChild(textNode);
            box_container.appendChild(newDiv);
            newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
            newDiv.style.border = "1px solid black";
            newDiv.style.overflowX = "scroll";
            textNode.style.padding = "10px";
            textNode.style.marginTop = "12px";
            input_text.value = "";
        }
    });
}

function clearComplete() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        if (arr[index].completed === true) {
            arr.splice(index, 1);
        }
    });
}

input_btn.addEventListener("click", match);
display_button.addEventListener("click", showall);
active_button.addEventListener("click", activeitem);
complete_button.addEventListener("click", completeTask);
clear.addEventListener("click", clearComplete);