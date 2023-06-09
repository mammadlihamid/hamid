import React from 'react'
import { useData } from "../Context/DataContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import { home } from "./lang/Langs";


function Home() {
  const { data} = useData();
  return (
    <div>
      <IntlProvider locale={data} messages={home[data]}> 
        <h2> <span className='darkmode-ignore'>👋 </span><FormattedMessage id="hii"/></h2>
        <h4><FormattedMessage id="bio"/></h4>
        <br />
        <p>- <span className='noDark'>🌱 </span><FormattedMessage id="learning"/></p>
        <p>- <span className='noDark'>📫 </span><FormattedMessage id="reachMe"/> <a href="mailto:hemid359@gmail.com">Gmail</a></p>
      </IntlProvider>
    </div>
  )
}

export default Home