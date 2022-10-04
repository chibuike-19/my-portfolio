import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/task-front-page.png";
import projImg2 from "../assets/img/admin-dark.png";
import projImg3 from "../assets/img/fitness.png";
import projImg4 from "../assets/img/shop-everything.png";
import projImg5 from "../assets/img/pwa-weather.png";
import projImg6 from "../assets/img/foody.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tif Task Manager",
      description: "A web application built with Reactjs, tailwind css and firebase where users can manage their todos. It also comes with sign-in option ",
      imgUrl: projImg1,
    },
    {
      title: "Trendy Admin Dashboard",
      description: "A Very powerful admin dashboard that displays everything about a commercial business, like recent transactions, sales overview and so on. This web application also comes with multiple graphs for better analytics.",
      imgUrl: projImg2,
    },
    {
      title: "Fitness Club",
      description: "A web application built with Reactjs, tailwind Css and rapid api where users get easy access to various exercises grouped into several categories. It also has a very optimal search functionality that allows users to search through the entire library. ",
      imgUrl: projImg3,
    },

  ];
  const projects2 = [
    {
      title: "Shop Everything",
      description: "An E-commerce web application built with Reactjs, tailwind css and commerceJs that enables users to shop online with full payment validation.",
      imgUrl: projImg4,
    },
    {
      title: "PWA Weather App",
      description: "A Weather web application made with react and tailwind css that returns the weather condition of a place on search. It also has all the features of a progressive web application.",
      imgUrl: projImg5,
    },
    {
      title: "Foody",
      description: "A web application built with Reactjs, firebase and redux where users can purchase food items online . ",
      imgUrl: projImg6,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I curated a list of some of the recent projects i've worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="proj-row">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>{
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row>{
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='background'></img>
    </section>
  )
}