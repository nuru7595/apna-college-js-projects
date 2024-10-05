const penName = document.getElementById("penName");
const penColor = document.getElementById("penColor");
const penRating = document.getElementById("penRating");
const penDeal = document.getElementById("penDeal");
const penPrice = document.getElementById("penPrice");
const penDiscount = document.getElementById("penDiscount");
// Pen Containers
const pen = {
    name: "Parker Jotter Standard CT Ball Pen",
    color: "Black",
    rating: 4,
    isDeal: true,
    price: 270,
    discount: 5
};
// Pen Details
penName.innerText = pen.name;
penColor.innerText = pen.color;
penRating.innerText = pen.rating;
penDeal.innerText = pen.isDeal;
penPrice.innerText = pen.price;
penDiscount.innerText = pen.discount;
// Showing Values;
const profileName = document.getElementById("profileName");
const profileisFollowing = document.getElementById("profileisFollowing");
const profilePosts = document.getElementById("profilePosts");
const profileFollowers = document.getElementById("profileFollowers");
const profileFollowing = document.getElementById("profileFollowing");
const profileBio = document.getElementById("profileBio");
// Profile Containers
const profile = {
    name: "@shradhakhapra",
    isFollowing: false,
    posts: 195,
    followers: 569,
    following: 4,
    bio: "To educate someone is the highest privilege &#10084;",
};
// Profile Details
profileName.innerText = profile.name;
profileisFollowing.innerText = profile.isFollowing;
profilePosts.innerText = profile.posts;
profileFollowers.innerText = profile.followers;
profileFollowing.innerText = profile.following;
profileBio.innerHTML = profile.bio;
// Showing Values;
const l2q1Btn = document.getElementById("l2q1Btn");
let l2q1Result = document.getElementById("l2q1Result");
l2q1Btn.addEventListener("click", () => {
    let l2q1Num = document.getElementById("l2q1Input").value;
    if (l2q1Num == "") {
        l2q1Result.innerText = "Please enter a number!";
    } else if (l2q1Num == 0) {
        l2q1Result.innerText = "Please enter a number!";
    } else if (l2q1Num % 5 == 0) {
        l2q1Result.innerText = "Yes, " + l2q1Num + " is a multiple of 5.";
    } else {
        l2q1Result.innerText = "No, " + l2q1Num + " is not a multiple of 5.";
    }
});
// level 2 Question 1
const l2q2Btn = document.getElementById("l2q2Btn");
const l2q2Result = document.getElementById("l2q2Result");
l2q2Btn.addEventListener("click", () => {
    let l2q2Num = document.getElementById("l2q2Input").value;
    l2q2Num = Number(l2q2Num);
    if (l2q2Num <= 100 && l2q2Num >= 80) {
        l2q2Result.innerHTML = "Congratulations, You have got: A+";
    } else if (l2q2Num <= 79 && l2q2Num >= 70) {
        l2q2Result.innerHTML = "You have got: A";
    } else if (l2q2Num <= 69 && l2q2Num >= 60) {
        l2q2Result.innerHTML = "You have got: A-";
    } else if (l2q2Num <= 59 && l2q2Num >= 50) {
        l2q2Result.innerHTML = "You have got: B";
    } else if (l2q2Num <= 49 && l2q2Num >= 40) {
        l2q2Result.innerHTML = "You have got: C";
    } else if (l2q2Num <= 39 && l2q2Num >= 33) {
        l2q2Result.innerHTML = "You have got: D";
    } else if (l2q2Num >= 0 && l2q2Num <= 32) {
        l2q2Result.innerHTML = "You have got: F";
    } else {
        l2q2Result.innerHTML = "Please enter a valid mark";
    }
});
// Grade Calculator;
const l3q1Btn = document.getElementById("l3q1Btn");
const l3q1Result = document.getElementById("l3q1Result");
l3q1Btn.addEventListener("click", () => {
    l3q1Result.innerText = "";
    let l3q1Num = document.getElementById("l3q1Input").value;
    l3q1Num = Number(l3q1Num);
    if (l3q1Num >= 0 && l3q1Num <= 200) {
        for (let i = 0; i <= l3q1Num; i++) {
            if (i % 2 == 0) {
                l3q1Result.append(i + ", ");
            }
        }
    } else {
        l3q1Result.innerText = "Please enter a number between 0 - 200";
    }
});
// Even number genarator;
const l3q2Btn = document.getElementById("l3q2Btn");
const l3q2Result = document.getElementById("l3q2Result");
l3q2Btn.addEventListener("click", () => {
    let l3q2Num = prompt("Enter a number...");
    l3q2Num = Number(l3q2Num);
    const x = 7;
    let i;
    for (i = 1; l3q2Num != x; i++) {
        l3q2Num = prompt("Attempt no " + i + " failed! Try again.");
    }
    if (i == 1) {
        l3q2Result.innerText = "Correct! you did it in 1st try!";
    } else if (i == 2) {
        l3q2Result.innerText = "Correct! you did it in 2nd try!";
    } else if (i == 3) {
        l3q2Result.innerText = "Correct! you did it in 3rd try!";
    } else {
        l3q2Result.innerText = "Correct! you did it in " + i + "th try!";
    }
});
// Nuru's favorite number;
const l3q3Btn = document.getElementById("l3q3Btn");
const l3q3Result = document.getElementById("l3q3Result");
l3q3Btn.addEventListener("click", () => {
    let l3q3Input = document.getElementById("l3q3Input").value;
    l3q3Input = l3q3Input.toLowerCase();
    let len = l3q3Input.length;
    if (len < 3 || len > 16) {
        l3q3Result.innerText = "Allowed charecter range 3-16.";
    } else {
        l3q3Result.innerText = `@${l3q3Input}${len}`;
    }
});
// Username;
const l4q1Result = document.getElementById("l4q1Result");
const marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
l4q1Result.innerText = `The average mark of the class is ${sum / marks.length}`;
// Average mark;
const l4q2Result = document.getElementById("l4q2Result");
const prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
    prices[i] -= prices[i] / 10;
}
l4q2Result.innerText = `After applying offer new prices will be [${prices}]`;
// 10% Discount on products;
const companies = [
    "Bloomberg",
    "Microsoft",
    "Uber",
    "Google",
    "IBM",
    "Netflix",
];
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
const l4q3Result = document.getElementById("l4q3Result");
l4q3Result.append("Answer: [ ");
companies.forEach((val, i) => {
    if (i == companies.length - 1) {
        l4q3Result.append(val);
    } else {
        l4q3Result.append(val + ", ");
    }
});
l4q3Result.append(" ]");
// level 4 qeustion 3;
const l5q1Btn = document.getElementById("l5q1Btn");
const l5q1Result = document.getElementById("l5q1Result");
l5q1Btn.addEventListener("click", () => {
    let l5q1Input = document.getElementById("l5q1Input").value;
    let output = vowelFunc(l5q1Input);
    l5q1Result.innerText = output;
});
function vowelFunc(input) {
    let count = 0;
    let msg;
    for (let i of input) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            count++;
        }
    }
    if (count == 0) {
        msg = `There is no vowel in your text`;
    } else if (count == 1) {
        msg = `There is a vowel in your text`;
    } else {
        msg = `There are ${count} vowels in your text`;
    }
    return msg;
}
// Vowel Calculator;
const l5q2Btn = document.getElementById("l5q2Btn");
const l5q2Result = document.getElementById("l5q2Result");
l5q2Btn.addEventListener("click", () => {
    let l5q2Input = document.getElementById("l5q2Input").value;
    let outPut = vowelArrowFunc(l5q2Input);
    l5q2Result.innerText = outPut;
});
const vowelArrowFunc = (input) => {
    let count = 0;
    let msg;
    for (let i of input) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            count++;
        }
    }
    if (count == 0) {
        msg = `There is no vowel in your text`;
    } else if (count == 1) {
        msg = `There is a vowel in your text`;
    } else {
        msg = `There are ${count} vowels in your text`;
    }
    return msg;
};
// Vowel Calculator using arrow function;
let l5q3Result = document.getElementById("l5q3Result");
const numArray = [1, 2, 3, 4, 5, 6];
l5q3Result.append("Answer: [ ");
numArray.forEach((val, i) => {
    if (i == numArray.length - 1) {
        l5q3Result.append(`${val * val}`);
    } else {
        l5q3Result.append(`${val * val} ,`);
    }
});
l5q3Result.append(" ]");
// Level 5 Question 3;
const l5q4Ans = document.getElementById("l5q4Ans");
const l5q4Arr = [84, 91, 96, 88, 90, 99, 79, 86];
const l5q4NewArr = l5q4Arr.filter((val) => {
    return val >= 90;
});
l5q4Ans.append(` [ ${l5q4NewArr} ]`);
// Level 5 Question 4;
const l5q5Btn = document.getElementById("l5q5Btn");
const l5q5Err = document.getElementById("l5q5Err");
const l5q5R1 = document.getElementById("l5q5R1");
const l5q5R2 = document.getElementById("l5q5R2");
const l5q5R3 = document.getElementById("l5q5R3");
l5q5Btn.addEventListener("click", () => {
    const l5q5Input = document.getElementById("l5q5Input").value;
    let l5q5Arr = [];
    if (l5q5Input < 2 || l5q5Input > 16) {
        l5q5Err.innerText = "Invalid Range!!";
        l5q5R1.innerText = "";
        l5q5R2.innerText = "";
        l5q5R3.innerText = "";
    } else {
        l5q5Err.innerText = "";
        for (let i = 1; i <= l5q5Input; i++) {
            l5q5Arr[i - 1] = i;
        }
        l5q5R1.innerText = `Genarated Array: [${l5q5Arr}]`;
        let sum = l5q5Arr.reduce((res, curr) => {
            return res + curr;
        });
        l5q5R2.innerText = `Summation: ${sum}`;
        let mul = l5q5Arr.reduce((res, curr) => {
            return res * curr;
        });
        l5q5R3.innerText = `Multiplication: ${mul}`;
    }
});
// Level 5 Question 5;
const l6q1 = document.getElementById("l6q1");
l6q1.innerHTML +=
    " <span class='text-yellow-500'>from Apna College Students.</span>";
// Level 6 Question 1;
const l6q2 = document.querySelectorAll(".box");
l6q2.forEach((div, i) => {
    div.innerText = `Box ${i + 1}`;
});
// Level 6 Question 2;
const l7q1Btn = document.createElement("button");
l7q1Btn.innerText = "Click me";
l7q1Btn.style.backgroundColor = "red";
l7q1Btn.style.color = "white";
l7q1Btn.style.padding = "4px 12px";
l7q1Btn.style.borderRadius = "6px";
document.getElementById("l7q1").prepend(l7q1Btn);
// Level 7 Question 1;
const l7q2 = document.getElementById("l7q2");
l7q2.classList.add("bg-yellow-300");
// Level 7 Question 2;
const mode = document.querySelectorAll(".mode");
const l8q1Btn = document.querySelector("#l8q1Btn");
let dark = false;
l8q1Btn.addEventListener("click", () => {
    if (dark == false) {
        mode.forEach((i) => {
            i.style.color = "white";
            i.style.backgroundColor = "black";
            i.style.borderColor = "white";
            l8q1Btn.innerText = "Light Mode";
        });
        dark = true;
    } else {
        mode.forEach((i) => {
            i.style.color = "black";
            i.style.backgroundColor = "white";
            i.style.borderColor = "black";
            l8q1Btn.innerText = "Dark Mode";
        });
        dark = false;
    }
});
// Level 8;
const choices = document.querySelectorAll(".choice");
// event;
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user = choice.getAttribute("id");
        // Got user value;
        const com = random();
        // Got com value;
        const win = compare(user, com);
        // Got compare value;
        scoreCount(win, user, com);
        // Score Updated;
    });
});
// com random;
const random = () => {
    const arr = ["rock", "paper", "scissors"];
    const ran = Math.floor(Math.random() * arr.length);
    return arr[ran];
}
// compare;
const compare = (user, com) => {
    let win;
    if (user === com) {
        win = "draw";
    } else if (user === "rock") {
        if (com === "paper") {
            win = false;
        } else {
            win = true;
        }
    } else if (user === "paper") {
        if (com === "rock") {
            win = true;
        } else {
            win = false;
        }
    } else {
        if (com === "rock") {
            win = false;
        } else {
            win = true;
        }
    }
    return win;
}
// Score count;
let userScore = 0;
let comScore = 0;
const info = document.getElementById("info");
const scoreCount = (win, user, com) => {
    if (win == true) {
        document.getElementById("correct").play();
        userScore++;
        document.getElementById("user").innerText = userScore;
        info.innerText = `${user} beats ${com}`;
        info.classList.remove("bg-yellow-500");
        info.classList.remove("bg-red-500");
        info.classList.add("bg-green-500");
    } else if (win == false) {
        document.getElementById("wrong").play();
        comScore++;
        document.getElementById("com").innerText = comScore;
        info.innerText = `${com} beats ${user}`;
        info.classList.remove("bg-yellow-500");
        info.classList.remove("bg-green-500");
        info.classList.add("bg-red-500");
    } else {
        document.getElementById("draw").play();
        info.innerText = `Both ${user}, Draw`;
        info.classList.remove("bg-green-500");
        info.classList.remove("bg-red-500");
        info.classList.add("bg-yellow-500");
    }
}
