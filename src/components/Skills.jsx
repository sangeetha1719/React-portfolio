import React from 'react'
import { motion } from "motion/react"
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase
} from "react-icons/fa"

const skillsData = [
  { name: "Python", icon: FaPython, color: "#068cfa" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1083d6" },
  { name: "Javascript", icon: FaJsSquare, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
]

const cardStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  padding: "28px 20px",
  width: "140px",
  textAlign: "center",
  cursor: "default",
}

const Skills = () => {
  return (
    <section id="skills" className="px-4 w-100 my-5 mw-100 mx-auto">
      <h2 className="text-center text-white mb-5" style={{ fontSize: "2.2rem" }}>
        My Skills
      </h2>
      <div className="d-flex gap-4 justify-content-center flex-wrap mx-auto"
           style={{ maxWidth: "720px" }}>
        {skillsData.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              style={cardStyle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 24px ${skill.color}55`,
                borderColor: skill.color,
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <Icon size={48} color={skill.color} />
              </motion.div>
              <p className="mt-3 mb-0 text-white fw-semibold"
                 style={{ fontSize: "0.95rem", letterSpacing: "0.5px" }}>
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
