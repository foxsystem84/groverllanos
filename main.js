// MENUBAR
const menu= document.querySelector("nav");                
const barToggle = document.querySelector('.bar-toggle');
const btnToggle = document.querySelector('.button-toggle');
    
window.addEventListener("scroll", function(){        
    menu.classList.toggle("fixed-top", window.scrollY > 100)
    /*if(this.window.scrollY >100){
        barToggle.classList.add("color")
    }     
    if(this.window.scrollY <100 ){
        barToggle.classList.remove("color")
        
    }*/    
})
/*const menu= document.querySelector("nav");                
const barToggle = document.querySelector('.bar-toggle');
const btnToggle = document.querySelector('.button-toggle');

    
window.addEventListener("scroll", function(){        
    menu.classList.toggle("sticky", window.scrollY > 100)
    if(this.window.scrollY >100){
        barToggle.classList.add("color")
    }     
    if(this.window.scrollY <100 ){
        barToggle.classList.remove("color")
        
    }
    
})    
*/
var contador=1;
btnToggle.addEventListener("click", function(){        
    if (contador == 1){
        btnToggle.classList.add("open") 
        menu.classList.add("sticky")
        menu.classList.add("active")   
        barToggle.classList.add("color")        
        contador = 0          
    }else{
        btnToggle.classList.remove("open")
        menu.classList.add("sticky")      
        menu.classList.remove("active")    
        barToggle.classList.add("color")         
        contador = 1           
    }  
})



// Skill barrs
$(window).on('scroll', function () {
    $(".skills__progress--bar").each(function () {
        let $this = $(this);
        let per = $this.data('num');
        let bottom_object = $this.offset().top + $this.outerHeight();
        let bottom_window = $(window).scrollTop() + $(window).height();        
      
        if (bottom_window > bottom_object) {            
            $this.animate({ animatedValue: per }, {
                duration: 1000,
                step: function() {
                    $this.attr("data-num", Math.floor(this.animatedValue) + '%');
                    $this.css("width", Math.floor(this.animatedValue) + '%');
                                        
                },
                complete: function() {
                    $this.attr("data-num", Math.floor(this.animatedValue) + '%');
                }                    
            });      
                
        }
    });
    
});

// Porfolio isotope and filter
$(window).on('load', function() {
    var projectIsotope = $('.grid').isotope({
        itemSelector: '.grid-item'
    });
    $('.filter-button-group li').on('click', function() {
        $(".filter-button-group li").removeClass('filter-active');
        $(this).addClass('filter-active');
        projectIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
});

var wow=new WOW({
    boxClass:'wow',
    animateClass:'animated',
    offset:0,
    mobile:false,
    live:true
});
wow.init();

//FadeIn
/*
const service = document.getElementById("service")
const about = document.getElementById("about")
const skills = document.getElementById("skills")
const portafolio = document.getElementById("portafolio")
const contacto = document.getElementById("contact")

var item_service = document.querySelectorAll(".item-service")
var about_col1 = document.querySelector(".about__col1")
var about_col2 = document.querySelector(".about__col2")
var skills_col1 = document.querySelector(".skills__col1")
var skills_row = document.querySelectorAll(".skills__row--items")
var project_list = document.querySelector(".project__list")
var project_container = document.querySelector(".project__container")
var form = document.querySelector(".form")

window.addEventListener("scroll", function(){
    const service_x = window.innerHeight - service.getBoundingClientRect().top
    const about_x = window.innerHeight - about.getBoundingClientRect().top
    const skills_x = window.innerHeight - skills.getBoundingClientRect().top
    const portafolio_x = window.innerHeight - portafolio.getBoundingClientRect().top
    const contacto_x = window.innerHeight - contacto.getBoundingClientRect().top

    if(service_x >=200){             
        item_service.forEach(item=>{
            item.classList.add("fadeInLeft")
        })
    }
    if(about_x >=200){     
        about_col1.classList.add("fadeInLeft")      
        about_col2.classList.add("fadeInRight")       
    }
    if(skills_x >=200){     
        skills_col1.classList.add("fadeInUp")
        skills_row.forEach(rows=>{
            rows.classList.add("fadeInUp")
        })            
    }
    if(portafolio_x >=200){
        project_list.classList.add("fadeInUp")
        project_container.classList.add("fadeInUp")
    }
    if(contacto_x >=200){
        form.classList.add("fadeInUp")
        
    }
})
*/

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const enviar = document.getElementById("form")
    const nombre = document.getElementById("name")
    const asunto = document.getElementById("subject")
    const correo = document.getElementById("mail")
    const mensaje = document.getElementById("msg")
    const inputs = document.querySelectorAll('#form .input')

    const campos = {	
    name: false,
	subject: false,
	mail: false,
	msg: false
    }

    const validar = (event)=>{                    
        event.preventDefault()
        if(campos.name && campos.subject && campos.mail && campos.msg){            
            
            var xml = new XMLHttpRequest()
            const data = 'name='+ nombre.value + '&subject='+asunto.value + '&email='+correo.value + '&msg='+mensaje.value 
            xml.open('POST', 'email.php', true)
            xml.setRequestHeader("content-type", "application/x-www-form-urlencoded")
            xml.onreadystatechange = ()=> {
                if(xml.status === 200){
                    document.getElementById('formMensaje').innerHTML=xml.responseText
                    document.getElementById('formMensaje').classList.add('active')
                    setTimeout(()=>{
                        document.getElementById('formMensaje').innerHTML="" 
                        document.getElementById('formMensaje').classList.remove('active')       
                    }, 5000)
                }else{
                    document.getElementById('formMensaje').innerHTML="Peticion erronea"
                }
            }
            xml.send(data)
            enviar.reset()

            campos.name = false , campos.subject=false, campos.mail=false, campos.msg=false
        }else{            
            if(nombre.value.length == 0 ){            
                document.querySelector("#nameError").innerHTML = "Este campo es obligatorio"    
            }         
            if(asunto.value.length == 0){
                document.querySelector("#subjectError").innerHTML = "Este campo es obligatorio"           
            }
            if(correo.value.length == 0){
                document.querySelector("#mailError").innerHTML = "Este campo es obligatorio"           
            }
            if(mensaje.value.length == 0){
                document.querySelector("#msgError").innerHTML = "Este campo es obligatorio"           
            }
        }
        
    }

    const validarCampo = (input, name, expresion)=>{        
        
        if(input.value.length == 0){
            document.querySelector(`#${name}Error`).innerHTML = "Este campo es obligatorio"
            campos[name] = false
        }else{
            document.querySelector(`#${name}Error`).innerHTML = ""
            campos[name] = true
            if(expresion !== undefined){
                if(expresion.test(input.value)){
                document.querySelector(`#${name}Error`).innerHTML = ""
                campos[name] = true
                }else{
                    document.querySelector(`#${name}Error`).innerHTML = `${name} invalido`
                    campos[name] = false
                }
            }
        }
    }    
    
    const validarFormulario = (e) =>{             
        if(e.target.name=="name"){           
            validarCampo(e.target, 'name')
        }
        if(e.target.name=="subject"){            
            validarCampo(e.target, 'subject')
        }
        if(e.target.name=="email"){            
            validarCampo(e.target, 'mail', expresiones.correo)
        }    
        if(e.target.name=="msg"){            
            validarCampo(e.target, 'msg')
        }          
    }

    enviar.addEventListener("submit", validar)

    inputs.forEach((input) => {
	    input.addEventListener("keyup", validarFormulario)
        input.addEventListener("blur", validarFormulario)
    }) 