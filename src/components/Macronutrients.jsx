
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
                <h4 className="infobox__text-datatype">{text}</h4>  
            </div>
        </li>
     )

}

export default Macronutrients