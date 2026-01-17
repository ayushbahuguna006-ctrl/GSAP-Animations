import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";


function App() {
  
  useGSAP(()=>{
     gsap.fromTo(".box",{
      backgroundColor:'red'
     },{
      backgroundColor:'green',
      x:1000,
      duration:2,
      rotate:360,
      borderRadius:"100%",
      yoyo:true,
      repeat:-1
     })

  },[])
  useGSAP(()=>{
     gsap.fromTo(".lines",{
      opacity:0
     },{
      opacity:1,
      duration:15,
      delay:4,
      color:'green'
     })

  },[])
    



  return (
    <>
      <div className='p-10'>
        <div className="box bg-red-500 h-34 w-34">

        </div>
      </div>
      <div className='lines'>
        <h1>unt! Fugiat, reiciendis ipsum pariatur quam eaque iure at, quis a vel voluptate nemo illo eum consequuntur placeat! Aperiam enim veritatis vel officia nulla laborum atque nisi necessitatibus, molestias sequi aliquam praesentium quam. Eius possimus exercitationem ex ratione, laudantium fugiat, et quos consequatur ad illo asperiores esse ea? Iusto tempora aperiam in nostrum beatae quaerat at odio id perferendis. Exercitationem quasi assumenda non culpa enim adipisci nisi eligendi maxime, omnis aspernatur cupiditate, impedit expedita dicta, ipsa obcaecati. Commodi ullam nobis deserunt, repellendus et eius accusamus. Hic, voluptatum quisquam iusto ullam totam maiores dolorem alias iste consequuntur, quibusdam aliquam earum sit nisi? Minus est, obcaecati quas dicta asperiores consectetur aperiam molestiae incidunt deserunt, eligendi accusantium optio rem doloribus similique dolorem laudantium error corporis nostrum praesentium explicabo! Quis asperiores harum sit tempore maxime ea! Dolorum facilis odio sapiente aliquid? Dolore aperiam numquam alias dignissimos mollitia voluptatibus, obcaecati nobis illo, aliquid dolores, non magni atque consectetur optio porro dolor? Optio quasi modi mollitia repellendus? Voluptates aliquam minima nostrum officiis accusamus repudiandae ab accusantium id corrupti necessitatibus totam exercitationem suscipit, aut quisquam perspiciatis ipsam voluptate qui ipsum! Autem molestiae quia, vero saepe assumenda veritatis modi vitae, earum iste maiores exercitationem dolorem laboriosam temporibus? Laborum perferendis rerum corporis vel soluta, odit quis iusto esse? Exercitationem adipisci laudantium quae facilis. Vitae minus aut eveniet in quisquam ut illum voluptates dolorem. Magni impedit incidunt, excepturi adipisci voluptatum eos? Esse provident quaerat commodi sequi culpa aspernatur! Dolorem ab odit at officia quo, suscipit eligendi magnam voluptas, veritatis voluptatem mollitia dicta vel tenetur optio modi quidem consequatur deleniti consectetur. Velit esse impedit aliquam veritatis facilis obcaecati dolores numquam qui, voluptatibus at labore nemo quibusdam, corporis, ducimus exercitationem quaerat dolorum. Totam, odit distinctio? Atque saepe enim ad iste dolor alias architecto reprehenderit eveniet, voluptates rem? Atque culpa ab pariatur laboriosam debitis perspiciatis in ducimus eius accusantium necessitatibus repellat, possimus vitae adipisci voluptatibus repellendus doloribus numquam distinctio blanditiis iste. Mollitia, eum obcaecati! Possimus similique iure porro dolorum, quos corporis odio ipsum quidem molestias expedita vitae dolores esse dolor commodi deserunt quis, sed repellat ipsa. Sint, voluptatum veniam possimus voluptate, error quas pariatur illo libero aliquam autem repellat officiis, omnis incidunt eos et nisi minima. Quisquam, sit officiis blanditiis repellendus quam id odit consequatur vitae neque quia. Modi eum necessitatibus fugit iste hic vel nemo nihil reiciendis eius ipsam quae officia, incidunt voluptate quasi est dolores nam? Totam fugit qui enim laboriosam dolorum eligendi officia repellendus facere illo hic nulla, nesciunt temporibus similique asperiores sunt, illum inventore eveniet necessitatibus! Laborum sapiente obcaecati id optio illum voluptatem maiores officia reiciendis necessitatibus aliquid! Consectetur voluptatibus nihil perferendis veritatis, nostrum vero magnam id, architecto incidunt officiis cupiditate animi velit eaque explicabo beatae! Saepe illum impedit laboriosam harum ut ipsa magni, ea eum sit laudantium ullam? Harum ut dolor laudantium, voluptatem, sit provident deleniti reiciendis optio cumque sunt assumenda repudiandae, sed incidunt eaque laborum accusamus ipsum in ipsam natus. Quas nesciunt minima autem ullam, tempora obcaecati dicta, ea veniam consectetur cupiditate, itaque ratione repellat placeat quod suscipit odit recusandae dolores adipisci iste alias nostrum enim at quasi? Officiis sapiente maiores voluptatem ipsam amet illum quis consequuntur voluptates, distinctio, nobis reiciendis veritatis dolores sit est voluptate. Accusamus nihil quasi, doloribus quas animi quia distinctio porro vel minus? Neque impedit ex cupiditate illum quibusdam fuga dolorem recusandae, nisi vel sunt unde? Iste nemo dolores aliquid deserunt eius perspiciatis saepe quis adipisci eum sint aperiam enim neque quam natus, qui architecto repellendus modi atque, ea quod laudantium officia ipsam? Vitae in eligendi iusto id, corporis corrupti quidem adipisci hic, nulla aperiam voluptatum? Expedita sunt quam adipisci quia facere modi sapiente, voluptatem suscipit? Nemo, error officiis. Corrupti hic in quisquam ipsa fugiat atque provident, nisi perspiciatis ducimus voluptate. Commodi qui illum nesciunt provident facilis cumque minus ipsam repellat laborum? Ex adipisci hic asperiores corporis est eum laudantium unde, beatae expedita id corrupti quos repellendus accusamus impedit ipsam quo quam sit tenetur perferendis vero laboriosam. Commodi, minima! Exercitationem cupiditate dignissimos, illo, eveniet perferendis excepturi nesciunt vel repellendus iure libero qui. In recusandae voluptatibus harum optio necessitatibus, esse quos nisi qui dolorem odit eaque similique consequuntur alias libero ad? Earum culpa itaque dolor vel. Amet obcaecati, eveniet adipisci, vero doloremque corrupti repellendus odit iste, quo illum laudantium ab dolorem iusto rerum soluta blanditiis id quam? Ipsam doloremque itaque vitae quo tempore nesciunt reiciendis optio dolores nostrum deserunt laboriosam, suscipit distinctio praesentium officia minus aliquam magni, error similique voluptate voluptates nisi. Amet aliquam voluptate sed dolor dolorum provident ea ipsam maxime asperiores, non cumque dolores. Culpa a quibusdam error pariatur asperiores quisquam explicabo rerum odit ex obcaecati ducimus numquam ut quae reiciendis eum voluptatum, dicta fugiat quia? In quod modi aliquid dolor repudiandae dolore reprehenderit enim excepturi sit quasi perspiciatis, ipsam facilis, ducimus distinctio minus. Odio ad non tenetur voluptates nostrum?</h1>
      </div>
    </>
  )
}

export default App
