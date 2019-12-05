let Masyvas = new Array();
    Masyvas[0] = new Image()
    Masyvas[0].src ="https://i.pinimg.com/600x315/04/28/3e/04283e1a751ead27a75b13895119d6bc.jpg";
    Masyvas[1] = new Image()
    Masyvas[1].src ="https://thefunnybeaver.com/wp-content/uploads/2015/02/funny-dog-barking.jpg";
    Masyvas[2] = new Image()
    Masyvas[2].src ="https://cdn.ebaumsworld.com/mediaFiles/picture/2453506/85677236.png";
    Masyvas[3] = new Image()
    Masyvas[3].src ="https://blukel.com/wp-content/uploads/2019/10/Random-Funny-Pictures-10.jpg";
    Masyvas[4] = new Image()
    Masyvas[4].src ="https://thechive.files.wordpress.com/2019/10/marriage-memes2.jpg?quality=100&strip=info&w=600";
    Masyvas[5] = new Image()
    Masyvas[5].src ="https://i.kym-cdn.com/photos/images/newsfeed/001/622/123/d9e.jpg";
    Masyvas[6] = new Image()
    Masyvas[6].src ="https://i.imgur.com/EqIyF7E.png",
    Masyvas[7] = new Image()
    Masyvas[7].src = "https://i.kym-cdn.com/photos/images/newsfeed/001/504/739/5c0.jpg";
    Masyvas[8] = new Image()
    Masyvas[8].src ="https://fossbytes.com/wp-content/uploads/2019/07/meme-sharing-ban.jpg";
    Masyvas[9] = new Image()
    Masyvas[9].src ="https://media.farandwide.com/4e/50/4e505d7c1c3a4f64917a70d40ee1385c.jpeg";
    Masyvas[10] = new Image()
    Masyvas[10].src ="https://www.washingtonpost.com/resizer/QZnZZF9FhcQVBHhqBzBEUqCMJGs=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3ORNMTD4CE3EBAGAWDAHECMM4E.jpg";
    Masyvas[11] = new Image()
    Masyvas[11].src ="https://i.ytimg.com/vi/XZaJ59qtct8/maxresdefault.jpg";

const rodyti = document.querySelector("#rodyti");
const maisyti = document.querySelector("#maisyti");
const nuotraukos = document.querySelector("#nuotraukos");

rodyti.addEventListener('click', galerija);
function galerija(){
     for(let i = 0; i < Masyvas.length; i++){
         let li = document.createElement('li');
         let nuotrauka = document.createElement('img');
         li.appendChild(nuotrauka);
         nuotraukos.appendChild(li);
         li.className = "col-3";
         nuotrauka.src = Masyvas[i].src;
         rodyti.remove();
 }
}
 maisyti.addEventListener('click', sumaiso);
 function sumaiso(){
    const list = document.querySelectorAll('img');
    sumaisyti(Masyvas);
    for(let i = 0; i <list.length; i++){
        list[i].src = Masyvas[i].src;
    }
}
function sumaisyti(a) {
    for (let b = a.length - 1; b > 0; b--) {
        let random = Math.floor(Math.random() * (b + 1));
        let labas = a[b];
        a[b] = a[random];
        a[random] = labas;
    }
    return a;
}
