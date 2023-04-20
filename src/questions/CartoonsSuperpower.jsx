export function CartoonsSuperpower ({cartoons, filterSuperpower}) {
    return(
        <section>
            <h1>Cartoons with superpower intelligence</h1>
            <ol>
                {
                    cartoons.filter(({superpower}) => superpower===filterSuperpower).map(({id, name, superpower, magnitude}) => <li key={id}>{name} - {superpower} - {magnitude}</li>)
                }
            </ol>
        </section>
    )
}