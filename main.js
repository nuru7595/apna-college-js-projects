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
    bio: "To educate someone is the highest privilege &#10084;"
};
// Profile Details
profileName.innerText = profile.name;
profileisFollowing.innerText = profile.isFollowing;
profilePosts.innerText = profile.posts;
profileFollowers.innerText = profile.followers;
profileFollowing.innerText = profile.following;
profileBio.innerHTML = profile.bio;
// Showing Values;