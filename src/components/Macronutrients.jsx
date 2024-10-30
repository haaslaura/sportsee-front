function Macronutrients ({ icon, data, datatype }) {

     return (
        <div className="infobox">
            <div className="infobox__icon">
                <img src={icon} alt=""/>
            </div>
            <div className="infobox__text">
                <p className="infobox__text-data">{data}</p>
                <h4 className="infobox__text-datatype">{datatype}</h4>
                
            </div>
        </div>
     )

}

export default Macronutrients