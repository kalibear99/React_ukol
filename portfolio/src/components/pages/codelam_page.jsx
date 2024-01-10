import "./codelam_page.css"

export default function Service() {
    return (
        <div id="codelam">
             <div className="TitleService">
                <h1>Co dělám</h1>
            </div>

            <div className="containerService">
                <div className="TypeService">
                    <img className="IconService" src="/Vector.png" alt="" />
                    <h1>Software <br /> Development</h1>
                </div>
                <div className="TypeService">
                    <img className="IconService" src="/Vector1.png" alt="" />
                    <h1>Web <br /> Development</h1>
                </div>
                <div className="TypeService">
                    <img className="IconService" src="/Vector2.png" alt="" />
                    <h1>Web <br /> Design</h1>
                </div>
            </div>

        </div>
    )   
}