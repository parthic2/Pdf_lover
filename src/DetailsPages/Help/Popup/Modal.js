import { Box, Typography } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';

import style from "../Legal&Privacy/LegalPrivacy.module.css";

const ModalBox = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className={style.modal}
        ariaHideApp={false}
      >
        <Typography variant="h5">
          iLovePDF Information Security Policy
        </Typography>

        <Box height={20} />

        <p>
          iLovePDF is formed of a team of experienced professionals in the Information Technology sector,
          whose mission is to develop products that facilitate the conversion and management of PDF
          files.
        </p>

        <p>
          The organization's main objective is to comply with security policies and standards, with its
          main focus being the requirements established by the ISO / IEC 27001 Information Security
          standard.
        </p>

        <p>
          To do this, iLovePDF has an Information Security Management System put in place, basing their
          Information Security Policy on the following three main security objectives:
        </p>

        <ol className={style.listDot}>
          <li>Confidentiality: The information is only accessible to authorized personnel.</li>
          <li>Integrity: The information does not suffer unauthorized alterations or modifications</li>
          <li>Availability: The information is available when requested</li>
        </ol>

        <Box height={10} />

        <p>
          iLovePDF’s Management provides all interested parties the necessary resources to meet these
          objectives, complying with the ISMS policies and regulations.
        </p>

        <p>
          In addition, iLovePDF’s Management commits to monitoring and periodically reviewing the ISMS, to
          actively ensure its continuous improvement.
        </p>

        <Box height={30} />
        <p>Marco Grossi</p>
        <p>1 September, 2020<br />Barcelona</p>

        {/* <button onClick={handleClose}>Close Popup</button> */}
      </Modal>
    </div>
  )
}

export default ModalBox;