

let paveiksliukai = [
    "https://i.pinimg.com/600x315/04/28/3e/04283e1a751ead27a75b13895119d6bc.jpg",
    "https://thefunnybeaver.com/wp-content/uploads/2015/02/funny-dog-barking.jpg",
    "https://cdn.ebaumsworld.com/mediaFiles/picture/2453506/85677236.png",
    "https://blukel.com/wp-content/uploads/2019/10/Random-Funny-Pictures-10.jpg",
    "https://thechive.files.wordpress.com/2019/10/marriage-memes2.jpg?quality=100&strip=info&w=600",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/622/123/d9e.jpg",
    "https://i.imgur.com/EqIyF7E.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/504/739/5c0.jpg",
    "https://fossbytes.com/wp-content/uploads/2019/07/meme-sharing-ban.jpg",
    "https://media.farandwide.com/4e/50/4e505d7c1c3a4f64917a70d40ee1385c.jpeg",
    "https://www.washingtonpost.com/resizer/QZnZZF9FhcQVBHhqBzBEUqCMJGs=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3ORNMTD4CE3EBAGAWDAHECMM4E.jpg",
    "https://i.ytimg.com/vi/XZaJ59qtct8/maxresdefault.jpg",
];


const rodyti = document.querySelector("#rodyti");
const maisyti = document.querySelector("#maisyti");
const photoList = document.querySelector("#nuotraukos");


rodyti.addEventListener("click", () => {
    paveiksliukai.forEach(photo => {
       const listItem = document.createElement("li");
       const paveiksliukas = document.createElement("img");
       paveiksliukas.src = photo;
       listItem.className = "col-3";
       listItem.appendChild(paveiksliukas);
       photoList.appendChild(listItem);
    });
    rodyti.remove();
});


maisyti.addEventListener("click", () => {
    paveiksliukai = sumaisyti(paveiksliukai);
      images = document.querySelectorAll("img");

    images.forEach((image, i) => {
        image.src = paveiksliukai[i];
    });
});


function sumaisyti(a) {
    for (let b = a.length - 1; b > 0; b--) {
        let rand = Math.floor(Math.random() * (b + 1));
        let temp = a[b];
        a[b] = a[rand];
        a[rand] = temp;
    }
    return a;
}