export function Certification ({students}) {
    return(
        <section>
            <h1>Certification Result</h1>
            <p>Certification   {
                (students.reduce((sum, {marks}) => sum+=marks, 0)/students.length) > 80 ? "" : "Not"
            } Apporoved</p>
           
        </section>
    )
}