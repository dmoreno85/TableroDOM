document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tema1').addEventListener('click',()=>{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        
       document.querySelector('.inputTareas').className+=" darkInput"
       document.querySelector('body').className+=" darkTarea"
    })
    // document.querySelector('.tema2').addEventListener('click',()=>{// en construccion
    //     document.body.style.backgroundColor="white";
    //     document.body.style.color="black";
        
    //    document.querySelector('.inputTareas').className+=" claroInput"
    //    document.querySelector('body').className+=" claroTarea"
    // })

    document.querySelector('.tema3').addEventListener('click',()=>{
        
        document.body.style.backgroundColor=" rgb(243, 229, 147)";
        document.body.style.color="black";
        document.querySelector(".darkInput"," .claroInput").classList.remove("darkInput","claroInput");//en construccion
    })
    document.querySelector('.inputTareas').addEventListener('keyup', event => {
        if (event.keyCode === 13) { //aqui le dices que actue en caso de presionar enter
            ///Tarea
            let tarea = document.createElement('div');

            let tituloTarea = document.createElement('span');
            tituloTarea.innerText = event.target.value; // asignas el texto del input al div
            event.target.value = "" // limpiamos input
            tarea.className = 'tarea';

            // tituloTarea.setAttribute('contenteditable','true');// tiene bug

            ///Tarea

            let completedButton = document.createElement('i');
            // completedButton.innerText = '✔️';
            completedButton.className = 'fas fa-check doneButton';
            completedButton.addEventListener('click', event => {
                event.target.parentNode.parentNode.classList.toggle('completed')

            })



            let quitButton = document.createElement('i');
            quitButton.className = "fas fa-trash removeButton"
            quitButton.addEventListener('click', event => {
                if (confirm('Seguro que quieres eliminar la Tarea? ') ) {
                    event.target.parentNode.parentNode.remove();
                }
            })

            let description = document.createElement('textarea')
            description.className = 'description'
            description.placeholder = 'Añade un comentario'


            let listButton = document.createElement('i')
            // listButton.innerText = '📜'; //para añadir caracteres o emojis
            listButton.className = "fas fa-list-ol Lista";

          

            
            let buttonsGeneral = document.createElement('div')
            buttonsGeneral.className = "buttonsGeneral"
            let optionButton = document.createElement('div') // en contruccion
            optionButton.innerHTML = `
            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href='mailto:' >Enviar por Email</a>
              <a class="dropdown-item" href="https://bit.ly/1eyOBPE" target='_blank'>Otras Aplicaciones</a>`
            optionButton.className = "dropdown"

        
            let count = 0
            listButton.addEventListener('click', event => {
                let Lista = document.createElement('ol');
                Lista.className = "listaSubtareas"
                let inputLista = document.createElement('input');
                inputLista.className = 'inputListaButton';
                inputLista.placeholder = 'Añade una lista..'

                inputLista.addEventListener('keyup', event => {
                    if (event.keyCode === 13) {
                        let subTarea = document.createElement('li');
                        subTarea.className = 'lista1'
                        subTarea.innerText += event.target.value; // asignas el texto del input al div
                        event.target.value = ""

                        ////botones dentro de lista

                        let quitButtonList = document.createElement('i');
                        quitButtonList.className = 'fas fa-times removeButtonList';
                        quitButtonList.addEventListener('click', event => {
                            if (confirm('Se eliminará la Lista, está seguro?') ) {
                                event.target.parentNode.remove();
                            }

                        })

                        ///
                        subTarea.appendChild(quitButtonList)
                        Lista.appendChild(subTarea)
                    }
                })
                console.log(count)
                count++
                if (count < 2) {
                    tarea.appendChild(inputLista)
                    tarea.appendChild(Lista)
                } else {

                }
            })
           
            tarea.appendChild(optionButton) // en construccion
            tarea.appendChild(tituloTarea);
            tarea.appendChild(description);
            buttonsGeneral.append(completedButton, quitButton, listButton) // añado el boton completar a la tarea
            console.log(buttonsGeneral)
            tarea.appendChild(buttonsGeneral)
            document.querySelector('.Tareas').appendChild(tarea)
        }

    });


});