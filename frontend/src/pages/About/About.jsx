import './style.css'
import teamImg1 from '../../assets/james.png'
import teamImg2 from '../../assets/olivia.png'
import teamImg3 from '../../assets/michael.png'

import {ChevronDown} from "lucide-react"
const About=()=>{
 return (
 <>
 <section>
<div className='about'>
    <div className="container">

        <h1 className='heading'>About Us</h1>
        <ChevronDown size={36} />
    </div>

</div>
<div className="Box">
    <div className="boxleft">
    </div>
    <div className="boxright">
     <p>ChevronDown</p>
        <h1>Delicious Burgers Made from the Freshest Ingredients</h1>
        <small>Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</small>
    </div>
   
 
</div>
<div className="ourTeam">
    <div className="boxUp">
        <h6 id='h6'>Our Team</h6>
        <h2 id='h2'>Behind the taste</h2>
        <small id='small'>Meet the passionate and dedicated professionals behind Foolivery. Our team is committed to delivering exceptional dining experiences</small>
    </div>
 <div className="boxdown">
    <img src={teamImg1} />
    <img src={teamImg2} />
    <img src={teamImg3} />
 </div>
</div>
</section>
 </>
 )
};
export default About;