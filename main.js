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
    discount: 5,
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
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
const l4q3Result = document.getElementById("l4q3Result");
l4q3Result.innerText = `Answer: [${companies}]`;
// level 4 qeustion 3;
