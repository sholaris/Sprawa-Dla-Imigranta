import { Row, Col } from "react-bootstrap";

const Tab = (props) => {
  return (
    <Col className="tab-col">
      <div
        onClick={props.onClick}
        id={props.id}
        className={props.active == true ? "tab active" : "tab"}
      >
        <h3 className={props.active == true ? "active" : ""} id={props.id}>
          {props.title}
        </h3>
      </div>
    </Col>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
    };
  }

  activeToggle = () => {
    const current_state = this.state;
    this.setState({ tab1: !current_state.tab1, tab2: !current_state.tab2 });
  };

  onClick = (event) => {
    this.props.onClick(event);
    if (!event.target.className.split(" ").includes("active")) {
      this.activeToggle();
    }
  };

  render() {
    return (
      <Row>
        <Tab
          active={this.state.tab1}
          onClick={this.onClick}
          id="do pobrania"
          title="Wnioski do pobrania"
        />
        <Tab
          active={this.state.tab2}
          onClick={this.onClick}
          id="interaktywne"
          title="Interaktywne formularze"
        />
      </Row>
    );
  }
}

export default Tabs;
