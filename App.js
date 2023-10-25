import React from 'react'
import JournalEntry from './Components/JournalEntry'
import NavBar from './Components/NavBar'
import data from './data'

export default function App(){
    console.log(data)
    const journalEntries = data.map((entry)=> {
        return (
            <JournalEntry
            key={entry.id}
            {...entry}
            />
        )
    } )
    
    return(
        <>
            <NavBar />
            <div className="journal-list">
                {journalEntries}
            </div>
        </>
    )
}