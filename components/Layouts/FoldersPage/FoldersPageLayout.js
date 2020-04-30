import { Container } from "react-bootstrap";
import BaseLayout from "../BaseLayout";
import FoldersHeaderBar from "../../shared/Cudzoziemcy/FoldersHeaderBar";
import FoldersMainContent from "../../shared/Cudzoziemcy/FoldersMainContent";
import OriginMenu from "../../shared/Cudzoziemcy/OriginMenu";

class FoldersPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      header: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      origin: e.target.className,
      header: e.target.childNodes[0].innerHTML || e.target.childNodes[0].data,
    });
  };

  render() {
    return (
      <BaseLayout title={this.props.title}>
        <Container className="wrapper">
          <FoldersHeaderBar />
          {/* <OriginMenu /> */}
          <FoldersMainContent
            header={this.state.header}
            content={this.state.origin}
            onClick={this.handleChange}
          />
        </Container>
      </BaseLayout>
    );
  }
}

export default FoldersPageLayout;
