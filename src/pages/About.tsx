import { Row } from "react-bootstrap"
import "./About.css"

function About() {
  return (
    <div className="min_height abt_cont">
      <h1>About</h1>
      <Row lg={2} xs={1}>
        <div>
          <h2 className="mb-4">Stockphotos von:</h2>
          <ul className="about_ul">
            <li>Julian Goldbach</li>
            <li>Andrey Matveev</li>
            <li>Bogdan Orunov</li>
            <li>Daria Shevtsova</li>
            <li>Denis Zagorodniuc</li>
            <li>Designecologist</li>
            <li>Eneida Nieves</li>
            <li>Godisable Jacob</li>
            <li>Javier Aguilera</li>
            <li>Johnmark Smith</li>
            <li>Miriam Alonso</li>
            <li>Pixabay</li>
            <li>Vishven Solanki</li>
            <li>Tyler Lastovich</li>
            <li>Svitlana Myslyvets</li>
            <li>Thorn Yang</li>
          </ul>
        </div>
        <div className="techn_cont p-0">
          <h2 className="mb-4">Benutzte Technologien:</h2>
            <Row className="m-0 gap-3 align-items-center">
              <img title="React.js" src="/imgs/usedTech/ReactLogo.png"></img>
              <img title="TypeScript" src="/imgs/usedTech/TypeScriptLogo.png"></img>
              <img title="Bootstrap" className="img_sized" src="/imgs/usedTech/bootstrap-logo-shadow.png"></img>
              <img title="Vite" className="img_sized" src="/imgs/usedTech/logo-with-shadow.png"></img>
            </Row>
        </div>
      </Row>
      
    </div>
  )
}

export default About