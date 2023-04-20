export function CartoonsMagnitudeEvenNumber ({cartoons}) {
    return(
        <section>
            <h1>Cartoons Magnitude Even Number</h1>
            <ol>
                {
                    cartoons.filter(({magnitude}) => magnitude%2===0).map(({id, name}) => <li key={id}>Name: {name}</li>)
                }
            </ol>
        </section>
    )
}