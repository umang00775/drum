// const images = ["crash","kick","snare","tom1","tom2","tom3","tom4"];
// const chars = ['w','a','s','d','j','k','l'];

// let path = "";

// for(let i=0; i<images.length; i++){
//     path = 'url("Images/"' + images[i] + ')';
//     document.getElementById(chars[i]).style.backgroundImage = path;
// }

// let inner_part = "<h1>Drum 🥁 Kit</h1><div class=\"container\"><div id=\"w\" class=\"drum\"><span>W</span></div><div id=\"a\" class=\"drum\">" +
//         "<span>A</span></div><div id=\"s\" class=\"drum\"><span>S</span></div><div id=\"d\" class=\"drum\"><span>D</span>" +
//     "</div><div id=\"j\" class=\"drum\"><span>J</span></div><div id=\"k\" class=\"drum\"><span>K</span></div><div id=\"l\" class=\"drum\">" +
//         "<span>L</span></div></div>";

// document.getElementById('all').innerHTML = inner_part;


const chars = ['w','a','s','d','j','k','l'];
const sounds = ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"];
let w="tom-1",a="tom-2",s="tom-3",d="tom-4",j="snare",k="crash",l="kick-bass";

let n = document.querySelectorAll(".drum").length;
let audiopath = "";
for (let i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        audiopath = "Sounds/" + sounds[i] + ".mp3";
        let audio = new Audio(audiopath);
        audio.play();
        // console.log(x);

    });
}


document.addEventListener("keypress",(event)=>{
    const x = event.key;
    audiopath = "Sounds/" + soundName(x) + ".mp3";
    let audio = new Audio(audiopath);
    audio.play();
    console.log(x);
})

function soundName(k){
    if(k=='w' || k=="W"){
        return "tom-1";
    }
    else if(k=='a' || k=="A"){
        return "tom-2";
    }
    else if(k=='s' || k=="S"){
        return "tom-3";
    }
    else if(k=='d' || k=="D"){
        return "tom-4";
    }
    else if(k=='j' || k=="J"){
        return "snare";
    }
    else if(k=='k' || k=="K"){
        return "crash";
    }
    else{
        return "kick-bass"
    }
}

