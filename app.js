let generatedNmbrsArr = [];
const rikaImg = document.getElementById("rika_img");
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
        rikaImg.src = "./assets/rika5.webp";
        return;
    }


    if (fromNmbr > toNmbr) {
        changeText("result",  "Meep... 'from number' cant be higher than 'to number'...");
        rikaImg.src = "./assets/rika4.webp";
        return;
    }
    
    if (amntNmbr > (toNmbr - fromNmbr + 1)) {
        changeText("result", "Impossible to generate that many unique numbers nanodesu!");
        rikaImg.src = "./assets/rika3.webp";
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
    rikaImg.src = "./assets/rika2.webp";
    rikaNipah.play();
    changeText("result", `Generated numbers: "${generatedNmbrsArr}"`);
    changeBtnStatus();
}

function reset() {
    generatedNmbrsArr = [];
    changeText("result", "Waiting for the next number nanodesu~");
    rikaImg.src = "/assets/rika3.webp";
    document.getElementById("amount").value = '';
    document.getElementById("from").value = '';
    document.getElementById("to").value =  '';

}