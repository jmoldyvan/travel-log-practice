import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    let dataElements = data.map(obj => {
        return(
        <Card 
            key = {obj.id}
            item = {obj}
        />
        )
    })

    return (

        <div className="InfoContainer">
            <div className="content">
            <Navbar />

            <section className="cards-list">
            {dataElements}
            </section>
            </div>
        </div>
    )
}