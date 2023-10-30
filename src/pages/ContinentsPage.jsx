import ButtonsOptions from "../components/continents/ButtonsOptions"
import ContinentsOptions from "../components/continents/ContinentsOptions"
import Points from "../components/continents/Points"

const ContinentsPage = () => {

    return (
        <section className="options">
            <div className="container container--options">
                <ButtonsOptions />
                <ContinentsOptions />
                <Points />
            </div>
        </section>
    )
}

export default ContinentsPage