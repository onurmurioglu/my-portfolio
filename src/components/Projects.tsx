import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Electric Vehicle Charging Station",
    // description: "Özellikler: ödeme, rezervasyon, şarj başlatma ve tamamlama.",
    description: "Payment, reservation, charging initiation, and completion.",
  },
  {
    title: "AI-powered Photo Editing App",
    // description:
    //   "Özellikler: Yapay zeka destekli fotoğraf filtreleri uygulama.",
    description: "Allows users to apply AI-supported filters to their photos.",
  },
  {
    title: "Task Management and Tracking Application",
    // description:
    //   "Özellikler: İç üretim verimliliğini artırma, görev takibi, atama ve iş iletişimi için sohbet özellikleri.",
    description:
      "Increases in-company production efficiency, job tracking, assignment, and includes chat features for business communication.",
  },
  {
    title: "Web Documentation Application with React",
    // description: "Özellikler: Rapor detay sayfası ile Ant Design kullanımı.",
    description: "Report detail page with the use of Ant Design.",
  },
  {
    title: "Yapıkredi Posnet Payment System Integration for E-commerce App",
    // description:
    //   "Özellikler: Yapı Kredi Bankası'nın sanal POS sistemi ile entegre edilmiş çevrimiçi ödeme sistemi; veri güvenliği için Base64 ve SHA256 şifrelemeleri.",
    description:
      "Integration of Yapı Kredi Bank's virtual POS system for online payments; data security using Base64 and SHA256 encryptions.",
  },
  {
    title: "E-Commerce Mobile App with React Native",
    // description:
    //   "Özellikler: Farklı kategorilerde ürün satışı yapabilen bir e-ticaret mobil uygulaması.",
    description:
      "A mobile application that can sell products across various categories.",
  },
  {
    title: "RFID Card Management Mobile Application",
    // description:
    //   "Özellikler: RFID kartlarına NFC ile veri yazma, okuma ve formatlama yetenekleri.",
    description:
      "Allows writing, reading, and formatting data to RFID cards via NFC.",
  },
  {
    title: "School Management Platform Web Project",
    // description:
    //   "Özellikler: React ile okul yönetimi web projesinin geliştirilmesine katkı.",
    description:
      "Contributed to the development of a school management web project using React.",
  },
  {
    title: "'Okulyo' Mobile Application",
    // description:
    //   "Okul yönetimi için NFC işlemleri, ödeme işlemleri, PDKS arayüzleri.",
    description:
      "NFC transactions, payment transactions, attendance interfaces for school management.",
  },
  {
    title:
      "Real-time Foreign Currency Translation Application with React Native",
    // description:
    //   "Özellikler: SocketIO kütüphanesi ile kripto para birimi dönüştürücü uygulaması.",
    description:
      "Cryptocurrency converter application made with the SocketIO library.",
  },
  {
    title: "Real-time Chat App with React Native",
    // description:
    //   "Özellikler: Kullanıcıların Firebase kullanarak gerçek zamanlı mesajlaşmasına olanak tanıyan uygulama.",
    description:
      "An application that allows users to message in real time using Firebase.",
  },
  {
    title: "Map and Geolocation App with React Native",
    // description:
    //   "Özellikler: Google Maps API kullanarak oluşturulan harita ve coğrafi konum uygulaması.",
    description:
      "Made using the Google Maps API for map and geolocation functionality.",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
