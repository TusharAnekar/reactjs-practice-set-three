import { useState } from "react"

export function VegetablesList ({vegetables}) {
    const [isFreshVegetables, setisFreshVegetables] = useState(false)
    return(
        <section>
            <h1>Vegetables</h1>
            <ol>
                {
                    vegetables.map(({id, name, pickDate}) => <li key={id} style={{color: (pickDate === "2023-03-30" && isFreshVegetables) ? "green" : "black"}}>Name: {name} Pick Date: {pickDate}</li>)
                }
            </ol>
            <button onClick={() => setisFreshVegetables((prev) => !prev)}>{isFreshVegetables ? "Unhighlight" : "Highlight"} Fresh Vegetables</button>
        </section>
    )
}