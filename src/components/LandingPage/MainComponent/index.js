import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Monitore Cryptos
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Em Tempo Real.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Monitore cryptos por meio de uma API pública em tempo real. Visite o painel para
          faça isso!{" "}
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Painel"} />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard utilizando React JS.",
              url: "",
              title: "CryptoPage.",
            }}
            onClick={() => toast.info("Compartilhando")}
          >
            <Button text={"Compartilhar"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      
      </div>
  );
}

export default MainComponent;
