import './style.css';
import Hero from '../../Components/local/Homepage/Hero/hero'
import Categories from '../../Components/local/Homepage/Categories/Categories'
import TopRR from '../../Components/local/Homepage/TopRR/TopRR'
import Cta from '../../Components/local/Homepage/CTA/Cta'
import Start from '../../Components/local/Homepage/Start/Start'

const Homepage =()=>{
 return <>
    <main>
      <Hero/>
      <Categories/>
      <TopRR/>
      <Start/>
      <Cta/>
    </main>
 </>
  }
export default Homepage;