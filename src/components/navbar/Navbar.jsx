import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { Sidebar } from "../index";
import "./navbar.scss";

const variants = {
  init: { opacity: 0, scale: 0.5 },
  final: { opacity: 1, scale: 1 },
  duration: { duration: 0.5 },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      {/* Navbar */}
      <div className="wrapper">
        <motion.span
          initial="init"
          animate="final"
          transition="duration"
          variants={variants}
        >
          Capamir
        </motion.span>
        <div className="social">
          <motion.a
            href="#"
            initial="init"
            animate="final"
            transition="duration"
            variants={variants}
          >
            <AiFillGithub size="2rem" />
          </motion.a>
          <motion.a
            href="#"
            initial="init"
            animate="final"
            transition="duration"
            variants={variants}
          >
            <AiFillLinkedin size="2rem" />
          </motion.a>
          <motion.a href="#" initial="init" animate="final" variants={variants}>
            <AiFillInstagram size="2rem" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
