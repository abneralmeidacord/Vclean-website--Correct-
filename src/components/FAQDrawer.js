import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { IonIcon } from "@ionic/react";

const icon = (
  <IonIcon icon="chevron-down-outline" size="20px" color="#1d4878" />
);

export const FAQDrawer = () => {
  return (
    <div style={styles.container}>
      <Accordion style={styles.accordion}>
        <AccordionSummary expandIcon={icon} style={styles.summary}>
          <Typography style={styles.question}>
            1. Com que frequência devo fazer a higienização do meu estofado?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            Recomenda-se a cada 6 meses, mas pode variar conforme o uso e a
            presença de crianças ou animais de estimação.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary expandIcon={icon} style={styles.summary}>
          <Typography style={styles.question}>
            2. A higienização remove manchas antigas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            Manchas antigas podem ser removidas, mas o resultado depende do tipo
            de tecido e da profundidade da mancha.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary expandIcon={icon} style={styles.summary}>
          <Typography style={styles.question}>
            3. Quanto tempo o estofado leva para secar após a higienização?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.details}>
          <Typography style={styles.answer}>
            O tempo de secagem varia de 6 a 12 horas, dependendo do método
            utilizado e da ventilação do ambiente.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "80%",
    margin: "0 auto",
    padding: "25px",
    borderRadius: "8px",
  },
  accordion: {
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  summary: {
    padding: "10px 20px",
  },
  question: {
    fontWeight: "bold",
    color: "#1d4878",
  },
  details: {
    backgroundColor: "#f7fbfd",
    padding: "15px 20px",
  },
  answer: {
    color: "#333333",
    fontSize: "0.9em",
  },
};

export default FAQDrawer;
