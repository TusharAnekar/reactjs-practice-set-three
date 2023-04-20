export function CarsCategories ({cars}) {
    return(
        <section>
            <h1>Cars count by categories</h1>
            <p>Luxury: {
                    cars.filter(({category}) => category === "luxury").length
                }</p>
            <p>Sports: {
                    cars.filter(({category}) => category === "sports").length
                }</p>
        </section>
    )
}