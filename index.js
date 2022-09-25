var drumNum = document.querySelectorAll(".drum").length // 7

// QUANDO MOUSE FOR CLICKADO

for (var i = 0; i < drumNum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //aqui foi selecionado apenas os botões com a class '.drum'
        //'i' começa valendo 0 e vai aumentando até ser menor que 'drumNum' que vale 7

        var buttonInnerHtml = this.innerHTML // isso ira selecionar oq estiver dentro da tag que no caso é a button com a class .drum
        // 'this' refere se ao document.querySelectorAll(".drum")

        makeSound(buttonInnerHtml) // nota que quando chamamos uma função eu posso passar qualquer input(parametro), então o 'buttonInnerHtml' substitui o 'keyOrClick'(que poderia ser qualquer nome) de quanto eu criei a função la em baixo e isso vai servir para todas as funções quando for chamadas.

        buttonAnimation(buttonInnerHtml)

    });
}

// QUANDO O TECLADO FOR APERTADO

document.addEventListener("keydown", function (event) {
    //aqui foi selecionado todo o codigo html por isso apenas o 'document'.
    //o parametro da função pode ser qualquer nome mas é mais comum ver 'event', 'evt' ou 'e' apenas nesses casos de keydown.

    var keyPressed = event.key  // .key vai apenas mostrar as teclas que forem apertadas, o 'event' puro ira mostrar todos os elementos mas so queremos o elemento key que são as teclas

    makeSound(keyPressed)

    buttonAnimation(keyPressed)

})

function makeSound(keyOrClick) {

    switch (keyOrClick) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break

        default: // default é como se fosse o else 
            console.log("You pressed the wrong key on keyboard!")
    }
}

function buttonAnimation(keyOrClick) {

    var activeButton = document.querySelector("." + keyOrClick) // vai pegar o botao que for apertado e ira passar a ser o valor da variavel 'activeButton'(ex: se eu apertar 'k' ira ficar '.k'). Isso é uma concatenação e quando se usa o querySelector é preciso adcionar o '.'(ponto) como se fosse no css por que é uma classe, se fosse um id seria '#'

    activeButton.classList.add("pressed") // assim é adcionado uma class no javascript. (obs: Essa classe está somente no css)

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
    // setTimout serve para adcionar um 'delay', no caso desse exemplo ela vai remover a class 'pressed' depois de 100 milisemos que eu apertar ou clicar no botão.

    // 1000 milesimos é igual a 1 segundo e assim por diante
}
