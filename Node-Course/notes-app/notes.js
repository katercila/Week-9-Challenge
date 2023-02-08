//new file, create getNotes functino returns 'Your notes...'

const fs = require('fs')
const chalk = require('chalk')
// const { command } = require('yargs')

// const getNotes = () => {
//     return 'Your notes...'
// }

//ADD
const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {    //! means not true
        notes.push({
        title: title,
        body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!')) //if there is a duplicate run this 
    }
}
//REMOVE 
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}
const listNotes = () => {
    const notes = loadNotes ()
    console.log(chalk.inverse('Your notes'))
    
    notes.forEach((note) => {
        console.log(note.title)
    })
} 
//READ NOTE 
const readNote = (title) => { //which note to fetch
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) //search the one we are looking for 

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

    
//SAVE NOTE
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//LOAD NOTE
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] 
    }
}

//both getting exportes
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote, //this exports 
    listNotes: listNotes,
    readNote: readNote
}

