import React from 'react';
import { useData } from "../Context/DataContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import { contact } from "./lang/Langs";

function Contact() {
  const { data} = useData();
  return (
    <div>
      <IntlProvider locale={data} messages={contact[data]}> 
      <h2><FormattedMessage id="reachMe"/></h2>
      <ul className='d-flex justify-centers contact'>
        <li className='me-4 fs-1'><a href="https://github.com/mammadlihamid" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a></li>
        <li className='me-4 fs-1'><a href="https://www.instagram.com/azveoz001/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
        <li className='me-4 fs-1'><a href="https://www.linkedin.com/in/hamid-mammadli-913b4b254/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
        <li className='me-4 fs-1'><a href="https://discord.com/users/821760729191415829" target="_blank" rel="noopener noreferrer"><i class="fa fa-github-alt"></i></a></li>
      </ul>
      </IntlProvider>
    </div>
  )
}

export default Contact