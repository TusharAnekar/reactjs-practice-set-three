export function Bouquet ({bouquet}) {
    return(
        <section>
            <h1>Bouquet</h1>
            {
                bouquet.map(({flowers, price}) => 
                    flowers.filter((flower) => flower === "rose")
                    .map(() => <p>Price of bouquet with roses : {price}</p>)
                )
            }

            {
                bouquet.filter(({price}) => price>2000)
                .map(({flowers}) => 
                    <ol>
                        {flowers.map((flower) => <li>{flower}</li>)
                        }
                    </ol>
                )
            }
        </section>
    )
}