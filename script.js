const input_text = document.getElementsByClassName("input-text")[0];
const input_btn = document.getElementsByClassName("input-btn")[0];
const box_container = document.getElementsByClassName("history-box")[0];
const all_button = document.getElementById("all");
const active_button = document.getElementById("active");
const complete_button = document.getElementById("complete");
const clear = document.getElementById("clear");
const arr = [];
const complete_task = [];
const delet_task = [];

// function box_element(){

//     const newDiv = document.createElement('div');
//         const get_value = item.value;
//         console.log(get_value);

//         const textNode = document.createElement('p');
//         textNode.textContent = get_value;

//         const complete_img = document.createElement("img");
//         complete_img.src = "images/complete.png";
//         complete_img.style.width = '30px';
//         complete_img.style.marginRight = '10px';

//         const delet_img = document.createElement("img");
//         delet_img.src = "images/delet.jpg";
//         delet_img.style.width = '30px';


//         const child_div = document.createElement('div');
//         child_div.appendChild(complete_img);
//         complete_img.style.marginLeft = "10px";
//         delet_img.style.marginRight = "10px";
//         child_div.appendChild(delet_img);
//         newDiv.appendChild(textNode);
//         newDiv.appendChild(child_div);
//         child_div.style.display = "flex";
//         box_container.appendChild(newDiv);
//         newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
//         newDiv.style.border = "1px solid black";
//         newDiv.style.overflowX = "scroll";
//         textNode.style.padding = "10px";
//         textNode.style.marginTop = "12px";
//         input_text.value = "";

//         complete_img.addEventListener('click', function () {
//             if (arr[index].completed === false) {
//                 textNode.style.textDecoration = "line-through"
//                 arr[index].completed = !arr[index].completed;
//                 console.log(arr);
//             }
//             else {
//                 arr[index].completed = !arr[index].completed;
//                 textNode.style.textDecoration = "none";
//             }
//         });

//         delet_img.addEventListener('click', function () {
//             arr.forEach((item, index) => {
//                 if (item.value === get_value) {
//                     arr.splice(index, 1);
//                     box_container.removeChild(newDiv);
//                 }
//             });

//             console.log(arr);
//         });
// }

function match() {
    const input_val = input_text.value;
    // const index1= arr.indexOf(val);
    if(arr.length===0){
        arr.push({
            "completed": false,
            "value": input_val
        });
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(arr[i].value===input_val){
                arr.push({
                    "completed": false,
                    "value": input_val
                });
    
            }
            else {
                console.log("list is already found");
            }
        }
    }

    // if (!arr.includes(input_val)) {
    //     arr.push({
    //         "completed": false,
    //         "value": input_val
    //     });

    // }
    // else {
    //     console.log("list is already found");
    // }

    box_container.innerHTML = "";

    arr.forEach((item, index) => {

        const newDiv = document.createElement('div');
        const get_value = item.value;
        console.log(get_value);

        const textNode = document.createElement('p');
        textNode.textContent = get_value;

        const complete_img = document.createElement("img");
        complete_img.src = "images/complete.png";
        complete_img.style.width = '30px';
        complete_img.style.marginRight = '10px';

        const delet_img = document.createElement("img");
        delet_img.src = "images/delet.jpg";
        delet_img.style.width = '30px';


        const child_div = document.createElement('div');
        child_div.appendChild(complete_img);
        complete_img.style.marginLeft = "10px";
        delet_img.style.marginRight = "10px";
        child_div.appendChild(delet_img);
        newDiv.appendChild(textNode);
        newDiv.appendChild(child_div);
        child_div.style.display = "flex";
        box_container.appendChild(newDiv);
        newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
        newDiv.style.border = "1px solid black";
        newDiv.style.overflowX = "scroll";
        textNode.style.padding = "10px";
        textNode.style.marginTop = "12px";
        input_text.value = "";

        complete_img.addEventListener('click', function () {
            if (arr[index].completed === false) {
                textNode.style.textDecoration = "line-through"
                arr[index].completed = !arr[index].completed;
                console.log(arr);
            }
            else {
                arr[index].completed = !arr[index].completed;
                textNode.style.textDecoration = "none";
            }
        });

        delet_img.addEventListener('click', function () {
            arr.forEach((item, index) => {
                if (item.value === get_value) {
                    arr.splice(index, 1);
                    box_container.removeChild(newDiv);
                }
            });

            console.log(arr);
        });

    });

}



function showall() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        const newDiv = document.createElement('div');
        const get_value = item.value;
        console.log(get_value);

        const textNode = document.createElement('p');
        textNode.textContent = get_value;

        const complete_img = document.createElement("img");
        complete_img.src = "images/complete.png";
        complete_img.style.width = '30px';
        complete_img.style.marginRight = '10px';

        const delet_img = document.createElement("img");
        delet_img.src = "images/delet.jpg";
        delet_img.style.width = '30px';


        const child_div = document.createElement('div');
        child_div.appendChild(complete_img);
        complete_img.style.marginLeft = "10px";
        delet_img.style.marginRight = "10px";
        child_div.appendChild(delet_img);
        newDiv.appendChild(textNode);
        newDiv.appendChild(child_div);
        child_div.style.display = "flex";
        box_container.appendChild(newDiv);
        newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
        newDiv.style.border = "1px solid black";
        newDiv.style.overflowX = "scroll";
        textNode.style.padding = "10px";
        textNode.style.marginTop = "12px";
        input_text.value = "";

        complete_img.addEventListener('click', function () {
            if (arr[index].completed === false) {
                textNode.style.textDecoration = "line-through"
                arr[index].completed = !arr[index].completed;
                console.log(arr);
            }
            else {
                arr[index].completed = !arr[index].completed;
                textNode.style.textDecoration = "none";
            }
        });

        delet_img.addEventListener('click', function () {
            arr.forEach((item, index) => {
                if (item.value === get_value) {
                    arr.splice(index, 1);
                    box_container.removeChild(newDiv);
                }
            });

            console.log(arr);
        });

    });
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

            const complete_img = document.createElement("img");
            complete_img.src = "images/complete.png";
            complete_img.style.width = '30px';
            complete_img.style.marginRight = '10px';

            const delet_img = document.createElement("img");
            delet_img.src = "images/delet.jpg";
            delet_img.style.width = '30px';


            const child_div = document.createElement('div');
            child_div.appendChild(complete_img);
            complete_img.style.marginLeft = "10px";
            delet_img.style.marginRight = "10px";
            child_div.appendChild(delet_img);
            newDiv.appendChild(textNode);
            newDiv.appendChild(child_div);
            child_div.style.display = "flex";
            box_container.appendChild(newDiv);
            newDiv.setAttribute("class", "d-flex gap-5 justify-content-between align-items-center mt-4");
            newDiv.style.border = "1px solid black";
            newDiv.style.overflowX = "scroll";
            textNode.style.padding = "10px";
            textNode.style.marginTop = "12px";
            input_text.value = "";

            complete_img.addEventListener('click', function () {
                if (arr[index].completed === false) {
                    textNode.style.textDecoration = "line-through"
                    arr[index].completed = !arr[index].completed;
                    console.log(arr);
                }
                else {
                    arr[index].completed = !arr[index].completed;
                    textNode.style.textDecoration = "none";
                }
            });

            delet_img.addEventListener('click', function () {
                arr.forEach((item, index) => {
                    if (item.value === get_value) {
                        arr.splice(index, 1);
                        box_container.removeChild(newDiv);
                    }
                });

                console.log(arr);
            });

        }
    });
}

function completeTask() {
    box_container.innerHTML = "";
    arr.forEach((item, index) => {
        if (arr[index].completed === true) {
            const newDiv = document.createElement('div');
            const get_value = item.value;
            console.log(get_value);

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

all_button.addEventListener("click", showall);

active_button.addEventListener("click", activeitem);

complete_button.addEventListener("click", completeTask);

clear.addEventListener("click", clearComplete);