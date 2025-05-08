import "./style.css"

import trr1 from '../../../../assets/restaurants/location_list_1.jpg'
import trr2 from '../../../../assets/restaurants/location_list_2.jpg'
import trr3 from '../../../../assets/restaurants/location_list_3.jpg'
import trr4 from '../../../../assets/restaurants/location_list_4.jpg'
import trr5 from '../../../../assets/restaurants/location_list_5.jpg'
import trr6 from '../../../../assets/restaurants/location_list_5.jpg'
const TopRR=() =>{
    return(
    <>
     <section className="topRR flex alignCenter">
        <div className="topRRContainer">
          <h2>Top Rated Restaurants</h2>
          <p className="topRRDesc">
            Cum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
          <div className="topRRBoxes flex">
            <div className="topRRBoxesLeft flex">
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft">
                    <img src={trr1} />
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft">
                    <img src={trr2} />
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft">
                    <img src={trr3} />
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
            </div>
            <div className="topRRBoxesRight flex">
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft">
                    <img src={trr4}/>
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft">
                    <img src={trr5}/>
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
              <a href="/"
                ><div className="topRRBox flex">
                  <div className="topRRBoxLeft flex">
                    <img src={trr6} />
                  </div>
                  <div className="topRRBoxRight flex">
                    <span>Italian</span>
                    <h3>La Monnalisa</h3>
                    <p>8 Patriot Square E2 9NF</p>
                    <small>Average Price $30</small>
                  </div>
                </div></a
              >
            </div>
          </div>
        </div>
      </section>
    </>
    )
}
export default TopRR;