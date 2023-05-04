import React from "react";
import { NavLink } from "react-router-dom";
import { MdSchool, MdComputer, MdDisplaySettings} from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoLogoElectron } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";



import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About() {
  
  return (
    <div className="mt-5">
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Ibtidai məktəb</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            Sumqayit/Azərbaycan
          </h6>
          <hr />
          <p>Texniki və Təbiət elmləri liseyi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Orta məktəb</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            Sumqayit/Azərbaycan
          </h6>
          <hr />
          <p>Təbiət elmləri təmayüllü gimnaziya </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdComputer />}
        >
          <h3 className="vertical-timeline-element-title">Proqramlaşdırma həytıma giriş </h3>
          <h6 className="vertical-timeline-element-subtitle text-base">C++ ilə tanıslıq</h6>
          <hr />
          <p>Proqramlaşdırma ilə bağlı olan həyatıma c++ ilə ilk addımı atdım.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiOutlineDesktopComputer />}
        >
          <h3 className="vertical-timeline-element-title">Front-End dəryasına giriş</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Hobby</h6>
          <hr />
          <p>
          Məktəbdən sonra olan yay tətilində React öyrənməyə və praktiki məşqlər edərək 
          öyrəndiklərimi təkmilləşdirdim.
          </p>
          <br />
          <button className="btn btn-primary">
            <NavLink to="/projects" className="nav-link text-light fw-bold">
              Yazdığım proyektlər
            </NavLink>
          </button>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdDisplaySettings />}
        >
          <h3 className="vertical-timeline-element-title">Təhlükəsizlik </h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Hobby</h6>
          <hr />
          <p>
            Kompüterlərlə işləyərkən bəzi risklər var.
            Zərərli proqramlardan və ya saytlardan ehtiyat etmək lazımdır.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoLogoElectron />}
        >
          <h3 className="vertical-timeline-element-title">Elektronika </h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Hobby</h6>
          <hr />
          <p>
            Uşaqlıqdan elektronikaya böyük marağım olub. Bu sahədə qarşıma çıxan
            təqaüd proqramı bu sahədə özümü sınamağa bir şans oldu.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    
    
  );
}
<style>
  div:empty {
}
</style>

export default About;
