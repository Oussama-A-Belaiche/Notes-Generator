const add = () => { 

    const NotesBlock = document.getElementsByClassName ("NotesBlock")[0]

    let notediv = document.createElement ("div")
    let textarea =  document.createElement ("textarea")

    let deletebtn = document.createElement("button") 
    deletebtn.className  = "deletionBtn"
    deletebtn.textContent = "delete"

    deletebtn.onclick = () => { 
        NotesBlock.removeChild (notediv)
    }


    
    notediv.appendChild(textarea)
    notediv.appendChild(deletebtn)
    NotesBlock.appendChild(notediv) 

}