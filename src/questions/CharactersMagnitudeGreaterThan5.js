export function CharactersMagnitudeGreaterThan5({ cartoons }) {
    return (
        <section>
            <h1>Characters Magnitude Greater Than 5</h1>
            <ol>
                {
                    cartoons.filter(({magnitude}) => magnitude> 5).map(({id, name, superpower, magnitude}) => <li key={id}>Name: {name}, Superpower: {superpower}, Magnitude: {magnitude
                    }</li>)
                }
            </ol>
        </section>
    )
}