let generatedNmbrsArr = [];
const rikaNipah = document.getElementById("nipah_audio");
const rikaMeep1 = document.getElementById("meep1_audio");
const rikaMeep2 = document.getElementById("meep2_audio");

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function changeBtnStatus(){
    const btnReset = document.getElementById("btn-reset");
    btnReset.removeAttribute("disabled");
    btnReset.classList.replace("container__button-disabled", "container__button");
}

function changeRikaImg(id, number) {
  let img = document.getElementById(id);
  img.src = `./assets/rika${number}.webp`;
}


function changeText (id, text){
    let type = document.getElementById(id);
    type.innerText = text;
}

function generateNmbr (){
    const amntNmbr = document.getElementById("amount").value;
    const fromNmbr = Number(document.getElementById("from").value);
    const toNmbr = Number(document.getElementById("to").value);
    
    generatedNmbrsArr = [];
    
    if (amntNmbr === "" || toNmbr === "" || fromNmbr === ""){
        changeText("result", "meep... please, fill all the fields")
        changeRikaImg("rika_img", 5)
        return;
    }


    if (fromNmbr > toNmbr) {
        changeText("result",  "Meep... 'from number' cant be higher than 'to number'...");
        changeRikaImg("rika_img", 4)
        return;
    }
    
    if (amntNmbr > (toNmbr - fromNmbr + 1)) {
        changeText("result", "Impossible to generate that many unique numbers nanodesu!");
        changeRikaImg("rika_img", 3)
        return;
    }

    for (let i = 0; i < amntNmbr; i++){
        const generatedNmbr = getRandomArbitrary(fromNmbr, toNmbr)
        
        if (generatedNmbrsArr.includes(generatedNmbr)){
            i--;
        } else{
            generatedNmbrsArr.push(generatedNmbr);
        }
    }
    
    rikaNipah.volume = 0.25;
    changeRikaImg("rika_img", 2)
    rikaNipah.play();
    changeText("result", `Generated numbers: "${generatedNmbrsArr}"`);
    changeBtnStatus();
}

function reset() {
    generatedNmbrsArr = [];
    changeText("result", "Waiting for the next number nanodesu~");
    changeRikaImg("rika_img", 3);
    document.getElementById("amount").value = '';
    document.getElementById("from").value = '';
    document.getElementById("to").value =  '';

}