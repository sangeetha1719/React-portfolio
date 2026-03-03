

import React from 'react'
import { motion } from "motion/react"

const Skills = () => {
   const skills = ["Python", "HTML", "CSS", "Javascript", "React", "MongoDB"];
//    const box = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#ff0088",
//     borderRadius: 5,
// }
const ball = {
    width: 80,
    height: 100,
    backgroundColor: " #038FD2",
    borderRadius: "70%",
    
}
    return (
        <section id="skills"
            className=" px-4  w-100 my-4 mw-100 mx-auto">
            <h2 className="skill text-center  text-lg font-bold">
                My Skills...
            </h2>
            <div className="mt-10 w-25 d-flex gap-5 justify-content-center 
                            flex-wrap mx-auto ">
                {skills.map((skill, index) => {
                    return (
                        // <div key={index}
                        //      className="pe-auto px-2 py-1 my-2 w-25
                        //                 rounded-pill bg-success-subtle text-lg 
                        //                 d-flex align-items-center justify-content-center 
                        //                 font-bold hover:shadow-xl">
                        //                     {/* <motion.div
                        //                         style={box}
                        //                         animate={{ rotate: 360 }}
                        //                         transition={{ duration: 1 }}
                        //                     />  */}

                        //     {skill}
                        // </div>
                         <motion.div
                         key={index}  
                         className='d-flex align-items-center justify-content-center bg-success-subtle text-lg fw-bold py-3'  
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        style={ball}
                    >{
                        skill} 
                    </motion.div>   
                    )})}
            </div>
        </section>
    )
}

export default Skills

 

