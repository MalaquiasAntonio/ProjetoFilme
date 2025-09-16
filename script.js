let images = ['url("./assets/promoções.png")','url("./assets/medo.png")']
let balls = ["./assets/selecionado.png","./assets/sele.png"]
let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");
let fundo = document.getElementById("fundo");
let car = document.getElementById("car");
let arrowLeft = document.getElementById("ArrowLeft");
let arrowRight = document.getElementById("ArrowRight");
let ArrowDestaque_right = document.getElementById("Arrow_right");
let ArrowDestaque_left = document.getElementById("Arrow_left");
let titulo = [document.getElementById("titulo1"),document.getElementById("titulo2"),document.getElementById("titulo3")];
let genero = [document.getElementById("terror"),document.getElementById("comedia"),document.getElementById("acao"),document.getElementById("romance")];

car.addEventListener("mouseenter",()  =>{
    car.setAttribute("src","./assets/car.png");
    });
    car.addEventListener("mouseleave",() =>{
        car.setAttribute("src","./assets/shopping_cart_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png");
    });
    arrowLeft.addEventListener("mouseover",()=>{
        arrowLeft.setAttribute("src","./assets/pinta_left.png");
    });
    arrowLeft.addEventListener("mouseout",()=>{
        arrowLeft.setAttribute("src","./assets/chevron_left_34dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png");
    });
    arrowRight.addEventListener("mouseout",()=>{
        arrowRight.setAttribute("src","./assets/chevron_right_34dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png");
    });
    arrowRight.addEventListener("mouseover",()=>{
        arrowRight.setAttribute("src","./assets/pinta_right.png");
    });
    ArrowDestaque_right.addEventListener("mouseover",()=>{
        if(ArrowDestaque_right.src != "http://127.0.0.1:5500/assets/Arrow_black_right_gray.png"){
            ArrowDestaque_right.setAttribute("src","./assets/pinta_right.png")
        }
    });
    if(ArrowDestaque_right.src != "http://127.0.0.1:5500/assets/Arrow_black_right_gray.png"){
        ArrowDestaque_right.addEventListener("mouseout",()=>{
            ArrowDestaque_right.setAttribute("src","./assets/Arrow_black_right_gray.png");
        });
    }
    ArrowDestaque_right.addEventListener("click",()=>{
        ArrowDestaque_left.setAttribute("src","/assets/Arrow_black_left.png");
        ArrowDestaque_right.setAttribute("src","/assets/Arrow_black_right_gray.png");
        for(let i =0;titulo.length >= i;i++){
                titulo[i].innerText = "Outro Nome Filme";
            }

        console.log(ArrowDestaque_left.src);
        });
    ArrowDestaque_left.addEventListener("mouseover",()=>{
        if(ArrowDestaque_left.src != "http://127.0.0.1:5500/assets/Arrow_black_left_gray.png"){
            ArrowDestaque_left.setAttribute("src","./assets/pinta_left.png")
                
        }
    });
    ArrowDestaque_left.addEventListener("mouseout",()=>{
        if(ArrowDestaque_left.src != "http://127.0.0.1:5500/assets/Arrow_black_left_gray.png"){
            ArrowDestaque_left.setAttribute("src","/assets/Arrow_black_left.png")
        }
    });
    ArrowDestaque_left.addEventListener("click",()=>{
        if(ArrowDestaque_left.src != "http://127.0.0.1:5500/assets/Arrow_black_left_gray.png"){
            ArrowDestaque_right.setAttribute("src","/assets/Arrow_black_right.png");
            ArrowDestaque_left.setAttribute("src","/assets/Arrow_black_left_gray.png");
            for(let y =0;titulo.length >= y;y++){
                titulo[y].innerText = "Nome Filme";
            }
        }
    });
    genero[0].addEventListener("mouseover",()=>{
        document.getElementById("genero1").style.color = "#FF006F";
    });
    genero[0].addEventListener("mouseout",()=>{
        document.getElementById("genero1").style.color = "white";
    });
    genero[1].addEventListener("mouseover",()=>{
        document.getElementById("genero2").style.color = "#FF006F";
    });
    genero[1].addEventListener("mouseout",()=>{
        document.getElementById("genero2").style.color = "white";
    });
    genero[2].addEventListener("mouseover",()=>{
        document.getElementById("genero3").style.color = "#FF006F";
    });
    genero[2].addEventListener("mouseout",()=>{
        document.getElementById("genero3").style.color = "white";
    });
    genero[3].addEventListener("mouseover",()=>{
        document.getElementById("genero4").style.color = "#FF006F";
    });
    genero[3].addEventListener("mouseout",()=>{
        document.getElementById("genero4").style.color = "white";
    });
    function mudar(){
        for(let x = 0;x < images.length;x++){
            if (fundo.style.backgroundImage != images[x]){
                fundo.style.backgroundImage = images[x];
                if(ball1.src != balls[x]){
                    ball2.setAttribute("src",ball1.src);
                    ball1.setAttribute("src",balls[x]);
                }
                console.log(x);
                break;
                    // console.log(fundo.style.backgroundImage);
            }
        }
    }