
import ImageComponent from "../components/ImageComponent";
import Details from "../components/Details";

export default function Home({item}) {
  return (
    <div className='main'>
      <div className="mx-auto col-sm-12 col-xl-10 pt-2 content">
         <div className="row g-0">
             <ImageComponent images={item.images}/>
             <Details data={item}/>
         </div>
      </div>
     
    </div>
  )
}

export async function getStaticProps(){
    const data = {
        title: 'Host Lequite Artisic',
        details: ['Formal Wears', 'Available', '100 Cotton'],
        colors: ['#ffffff', "#ce9314", "#CE1F14FF"],
        sizes : [11,12,13,15] ,
        images : ['/images/bg1.jpeg' , '/images/bg2.jpg', '/images/bg1.jpeg' ,],
        description : `orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.`

    }

    return {
        props : {
            item: data
        }
    }
}
