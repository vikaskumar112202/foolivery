import './style.css';
import { LifeBuoy, MapPin , CloudUpload} from "lucide-react";
const Contact=()=>{
 return (
    <>
    <section className='contactHero'>
   
    <div className="contactHeroContainer">

    <h1 className='heading'>Contact Foolivery</h1>
   <p className='para'>A successful restaurant experience</p>


</div>
</section>
<section className='container'>
    <div className="boxes">
<div className="box1">
<LifeBuoy size={40} />
 <h2>Help Center</h2>
<a href="/">+94 423-23-221</a>
 <a href="/">- help@fooyes.com</a>
 <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
</div>
<div className="box2">
<MapPin size={40} />
<h2>Address</h2>
<p>6th Forrest Ray, London - 10001 UK</p>
<small>MON to FRI 9am-6pm SAT 9am-2pm</small>
</div>
<div className="box3">
<CloudUpload size={40} />
<h2>Submissions</h2>
<a href="/">+94 423-23-221 </a>
<a href="/">- order@fooyes.com</a>
<small>MON to FRI 9am-6pm SAT 9am-2pm</small>
</div>
</div>
   </section>
    </>
 )
 
};
export default Contact;