/**
 * Macronutrients Component
 * Displays information about a specific macronutrient (calories, proteins, carbohydrates, lipids).
 *
 * @component
 * @param {string} props.icon - path to the macronutrient icon image
 * @param {number} props.data - Value of the macronutrient (calories in kCal, others in grams)
 * @param {string} props.text - Name of the macronutrient
 * @param {string} props.typeClass - CSS class for styling based on macronutrient type
 * @returns {JSX.Element} A box displaying macronutrient information
 */
function Macronutrients ({ icon, data, text, typeClass }) {

     return (
        <li className="infobox">
            <div className={`infobox__icon ${typeClass}`}>
                <img src={icon} alt=""/>
            </div>
            <div className="infobox__text">
                {typeClass === "calories" ? (
                    <p className="infobox__text-data">{data}kCal</p>
                ) : (
                    <p className="infobox__text-data">{data}g</p>
                )}
                <h3 className="infobox__text-datatype">{text}</h3>  
            </div>
        </li>
     )

}

export default Macronutrients