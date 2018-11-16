import { Component } from '@angular/core';
import Artyom from '../assets/libs/artyom/artyom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    artyom = new Artyom();

    luces:boolean = false;
    alarma:boolean = false;
    escuchando:boolean = false;

    constructor(){
        this.commandsArtyom();
        // Este interval funciona para refrescar las variables (Sin el los iconos solo cambiaban de color cuando se reiniciaba o detenia la grabación)
        setInterval( () => {
            this.luces = this.luces
            this.alarma = this.alarma
        },1000)
    }

    // Lista de comandos que podrá escuchar nuestro sistema
    commandsArtyom(){
        this.artyom.addCommands([
            {
                description: "El sistema te saluda",
                indexes:["hola","ey","hey"], // Lista de palabras para realizar la acción de saludo
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    this.artyom.say("¿Qué tal?, ¿en qué puedo ayudar?") 
                }
            },
            {
                description: "El sistema se despide",
                indexes:["chao","nos vemos"], // Lista de palabras para realizar la acción de despedida
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    this.artyom.say("Hasta otra ocasión") 
                }
            },
            {
                description: "Enciende la luz del sistema",
                indexes:["encender luz","encender luces","luz encendida","luces encendidas","luz prendida","luces prendidas","enciende la luz","enciende las luces","prende la luz","prende las luces"], // Lista de palabras para encender la luz
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    let random = Math.random()*10  // Genera un numero aleatorio y lo multiplica por 10 para que sea entre 1 y 10 
                    
                    if (this.luces == true) { // Si quieres encender la luz y ya está encendida te lo notifica
                        this.artyom.say("La luz ya está encendida")                            
                    }else{
                        // Condiciones para generar una respuesta aleatoria
                        if (random >0 && random <2.5) {
                            this.artyom.say("Entendido")                            
                        }
                        if (random >=2.5 && random <5) {
                            this.artyom.say("Trabajando")                            
                        }
                        if (random >=5 && random <7.5) {
                            this.artyom.say("Estoy en eso")                            
                        }
                        if (random >=7.5 && random <10) {
                            this.artyom.say("De inmediato")                            
                        }
                        this.luces = true; // Si la luz está apagada la enciende
                        console.log(this.luces);
                    }
                }
            },
            {
                description: "Apaga la luz del sistema",
                indexes:["apagar luz","apagar luces","luz apagada","luces apagadas","apaga la luz","apaga las luces"], // Lista de palabras para apagar la luz
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    let random = Math.random()*10 // Genera un numero aleatorio y lo multiplica por 10 para que sea entre 1 y 10 
                    
                    if (this.luces == false) { // Si quieres apagar la luz y ya está apagada te lo notifica
                        this.artyom.say("La luz ya está apagada")                            
                    }else{
                        // Condiciones para generar una respuesta aleatoria
                        if (random >0 && random <2.5) {
                            this.artyom.say("Entendido")                            
                        }
                        if (random >=2.5 && random <5) {
                            this.artyom.say("Trabajando")                            
                        }
                        if (random >=5 && random <7.5) {
                            this.artyom.say("Estoy en eso")                            
                        }
                        if (random >=7.5 && random <10) {
                            this.artyom.say("De inmediato")                            
                        }
                        this.luces = false; // Si la luz está encendida la apaga
                        console.log(this.luces);
                    }
                }
            },
            {
                description: "Enciende la alarma del sistema",
                indexes:["activar alarma","encender alarma","alarma activada","alarma encendida","alarma prendida","enciende la alarma","activa la alarma","prende la alarma"], // Lista de palabras para encenter la alarma
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    let random = Math.random()*10 // Genera un numero aleatorio y lo multiplica por 10 para que sea entre 1 y 10 
                    
                    if (this.alarma == true) { // Si quieres encender la alarma y ya está encendida te lo notifica
                        this.artyom.say("La alarma ya está activada")                            
                    }else{
                        // Condiciones para generar una respuesta aleatoria
                        if (random >0 && random <2.5) {
                            this.artyom.say("Entendido")                            
                        }
                        if (random >=2.5 && random <5) {
                            this.artyom.say("Trabajando")                            
                        }
                        if (random >=5 && random <7.5) {
                            this.artyom.say("Estoy en eso")                            
                        }
                        if (random >=7.5 && random <10) {
                            this.artyom.say("De inmediato")                            
                        }
                        this.alarma = true; // Si la alarma está apagada la enciende
                        console.log(this.alarma);
                    }
                }
            },
            {
                description: "Apaga la alarma del sistema",
                indexes:["desactivar alarma","apagar alarma","alarma apagada","alarma desactivada","apaga la alarma","desactiva la alarma"], // Lista de palabras para apagar la alarma
                action: () =>{ // Acción a realizar si se detecta una palabra de la lista
                    let random = Math.random()*10 // Genera un numero aleatorio y lo multiplica por 10 para que sea entre 1 y 10 
                    
                    if (this.alarma == false) { // Si quieres apagar la alarma y ya está encendida te lo notifica
                        this.artyom.say("La alarma ya está desactivada")                            
                    }else{
                        // Condiciones para generar una respuesta aleatoria
                        if (random >0 && random <2.5) {
                            this.artyom.say("Entendido")                            
                        }
                        if (random >=2.5 && random <5) {
                            this.artyom.say("Trabajando")                            
                        }
                        if (random >=5 && random <7.5) {
                            this.artyom.say("Estoy en eso")                            
                        }
                        if (random >=7.5 && random <10) {
                            this.artyom.say("De inmediato")                            
                        }
                        this.alarma = false; // Si la alarma está encendida la apaga
                        console.log(this.alarma);
                    }
                }
            }
        ])
    }

    startArtyom(){
        this.artyom.fatality() // Para detener cualquier proceso de Artyom iniciado
        this.escuchando = false
        this.artyom.initialize({ // Inicializa Artyom con los siguientes paramentros
            lang:"es-ES",
            continuous: true,
            debug: true,
            listen: true
        }).then( () => {
            this.escuchando = true
        }).catch( (err) => console.error("Artyom no iniciado: "+err))
    }
    
    stopArtyom(){
        this.escuchando = false
        this.artyom.fatality(); // Para detener cualquier proceso de Artyom
    }
}
