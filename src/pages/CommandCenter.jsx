import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaPlane,
  FaTools,
  FaBoxes,
  FaSatelliteDish,
  FaShieldAlt,
  FaDatabase,
  FaChartLine,
  FaServer,
  FaNetworkWired,
  FaCrosshairs,
  FaCogs,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaMicrochip,
} from "react-icons/fa";

import "../styles/CommandCenter.css";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";

function CommandCenter() {
  return (
    <main className="command-center">

      {/* TOP COMMAND BAR */}
      <header className="command-topbar">
        <Container fluid>

          <div className="command-topbar-inner">

            <div className="command-brand">
              <img src={iafLogo} alt="Indian Air Force" />

              <div>
                <span>BHARATIYA VAYU SENA</span>
                <strong>COMMAND & CONTROL SYSTEM</strong>
              </div>
            </div>

            <div className="command-status">
              <span className="online-dot"></span>
              SYSTEM ONLINE
            </div>

            <div className="command-time">
              <span>LOCAL TIME</span>
              <strong>18:42:09 IST</strong>
            </div>

          </div>

        </Container>
      </header>


      {/* COMMAND CONTENT */}
      <Container fluid className="command-main">

        {/* HEADER */}
        <div className="command-heading">

          <div>
            <div className="command-kicker">
              <span></span>
              SECURE DIGITAL AIR COMMAND
            </div>

            <h1>
              MISSION
              <span>CONTROL CENTER</span>
            </h1>

            <p>
              Centralized visualization of aircraft readiness,
              inventory intelligence, maintenance operations
              and aviation assets.
            </p>
          </div>

          <div className="classification-box">
            <FaShieldAlt />
            <div>
              <span>NETWORK STATUS</span>
              <strong>SECURE / ACTIVE</strong>
            </div>
          </div>

        </div>


        {/* SYSTEM METRICS */}
        <Row className="g-3 command-metrics">

          <Col xl={3} lg={6} md={6}>
            <Card className="command-metric-card">

              <div className="metric-icon">
                <FaPlane />
              </div>

              <div>
                <span>AIRCRAFT FLEET</span>
                <strong>240+</strong>
                <small>
                  PLATFORM INVENTORY
                </small>
              </div>

              <div className="metric-status">
                <FaCheckCircle />
                OPERATIONAL
              </div>

            </Card>
          </Col>


          <Col xl={3} lg={6} md={6}>
            <Card className="command-metric-card">

              <div className="metric-icon">
                <FaTools />
              </div>

              <div>
                <span>MAINTENANCE</span>
                <strong>86</strong>
                <small>
                  ACTIVE OPERATIONS
                </small>
              </div>

              <div className="metric-status warning">
                <FaClock />
                ACTIVE
              </div>

            </Card>
          </Col>


          <Col xl={3} lg={6} md={6}>
            <Card className="command-metric-card">

              <div className="metric-icon">
                <FaBoxes />
              </div>

              <div>
                <span>ASSET DATABASE</span>
                <strong>1.8K+</strong>
                <small>
                  REGISTERED ASSETS
                </small>
              </div>

              <div className="metric-status">
                <FaDatabase />
                SYNCED
              </div>

            </Card>
          </Col>


          <Col xl={3} lg={6} md={6}>
            <Card className="command-metric-card">

              <div className="metric-icon">
                <FaSatelliteDish />
              </div>

              <div>
                <span>NETWORK</span>
                <strong>24/7</strong>
                <small>
                  MONITORING STATUS
                </small>
              </div>

              <div className="metric-status">
                <FaNetworkWired />
                ONLINE
              </div>

            </Card>
          </Col>

        </Row>


        {/* MAIN GRID */}
        <Row className="g-4 command-dashboard-grid">

          {/* READINESS */}
          <Col xl={5} lg={12}>

            <Card className="command-panel readiness-panel">

              <div className="panel-header">

                <div>
                  <span>01 / READINESS</span>
                  <h2>AIR ASSET STATUS</h2>
                </div>

                <FaCrosshairs />

              </div>


              <div className="readiness-circle">

                <div className="circle-inner">
                  <strong>98.7%</strong>
                  <span>READY</span>
                </div>

              </div>


              <div className="readiness-details">

                <div>
                  <span>MISSION READY</span>
                  <strong>92%</strong>
                  <ProgressBar now={92} />
                </div>

                <div>
                  <span>MAINTENANCE</span>
                  <strong>6%</strong>
                  <ProgressBar now={6} />
                </div>

                <div>
                  <span>STANDBY</span>
                  <strong>2%</strong>
                  <ProgressBar now={2} />
                </div>

              </div>

            </Card>

          </Col>


          {/* LIVE NETWORK */}
          <Col xl={7} lg={12}>

            <Card className="command-panel network-panel">

              <div className="panel-header">

                <div>
                  <span>02 / NETWORK</span>
                  <h2>LIVE SYSTEM MONITOR</h2>
                </div>

                <div className="live-indicator">
                  <i></i>
                  LIVE
                </div>

              </div>


              <div className="network-map">

                <div className="radar-grid"></div>

                <div className="radar-circle circle-one"></div>
                <div className="radar-circle circle-two"></div>
                <div className="radar-circle circle-three"></div>

                <div className="radar-sweep"></div>

                <div className="radar-center">
                  <FaSatelliteDish />
                </div>

                <span className="radar-node node-one"></span>
                <span className="radar-node node-two"></span>
                <span className="radar-node node-three"></span>
                <span className="radar-node node-four"></span>

                <div className="radar-label label-one">
                  NORTH
                </div>

                <div className="radar-label label-two">
                  WEST
                </div>

                <div className="radar-label label-three">
                  EAST
                </div>

                <div className="radar-label label-four">
                  SOUTH
                </div>

              </div>

            </Card>

          </Col>


          {/* INVENTORY INTELLIGENCE */}
          <Col xl={7} lg={12}>

            <Card className="command-panel intelligence-panel">

              <div className="panel-header">

                <div>
                  <span>03 / INVENTORY</span>
                  <h2>ASSET INTELLIGENCE</h2>
                </div>

                <FaChartLine />

              </div>


              <div className="intelligence-grid">

                <div className="intel-item">
                  <FaPlane />
                  <span>AIRCRAFT</span>
                  <strong>240+</strong>
                  <small>PLATFORMS</small>
                </div>

                <div className="intel-item">
                  <FaCogs />
                  <span>COMPONENTS</span>
                  <strong>620+</strong>
                  <small>REGISTERED</small>
                </div>

                <div className="intel-item">
                  <FaBoxes />
                  <span>SPARES</span>
                  <strong>480+</strong>
                  <small>INVENTORY</small>
                </div>

                <div className="intel-item">
                  <FaMicrochip />
                  <span>SYSTEMS</span>
                  <strong>190+</strong>
                  <small>TRACKED</small>
                </div>

              </div>

            </Card>

          </Col>


          {/* ALERTS */}
          <Col xl={5} lg={12}>

            <Card className="command-panel alerts-panel">

              <div className="panel-header">

                <div>
                  <span>04 / ALERTS</span>
                  <h2>SYSTEM NOTIFICATIONS</h2>
                </div>

                <FaExclamationTriangle />

              </div>


              <div className="alert-list">

                <div className="system-alert">
                  <span className="alert-indicator warning"></span>

                  <div>
                    <strong>
                      MAINTENANCE WINDOW
                    </strong>

                    <span>
                      Scheduled inspection pending
                    </span>
                  </div>

                  <small>
                    02:14
                  </small>
                </div>


                <div className="system-alert">
                  <span className="alert-indicator"></span>

                  <div>
                    <strong>
                      DATABASE SYNC
                    </strong>

                    <span>
                      Asset database synchronized
                    </span>
                  </div>

                  <small>
                    05:32
                  </small>
                </div>


                <div className="system-alert">
                  <span className="alert-indicator"></span>

                  <div>
                    <strong>
                      NETWORK CHECK
                    </strong>

                    <span>
                      All monitored nodes responding
                    </span>
                  </div>

                  <small>
                    08:47
                  </small>
                </div>

              </div>

            </Card>

          </Col>

        </Row>


        {/* BOTTOM COMMAND NAVIGATION */}
        <div className="command-navigation">

          <Link to="/" className="command-back">
            <FaArrowLeft />
            RETURN TO HOME
          </Link>

          <div className="command-nav-status">
            <span></span>
            COMMAND SYSTEM ACTIVE
          </div>

          <div className="command-version">
            IA-IMS / SYSTEM 01
          </div>

        </div>

      </Container>

    </main>
  );
}

export default CommandCenter;