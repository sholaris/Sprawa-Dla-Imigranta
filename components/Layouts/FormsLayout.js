import BaseLayout from "../Layouts/BaseLayout";
import Tabs from "../shared/Wnioski/Tabs";
import PhotoBanner from "../shared/Wnioski/PhotoBanner";
import FormsMainContent from "../shared/Wnioski/FormsMainContent";
import "../../static/fontawesome/fontawesome";

class FormsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forms: "do pobrania" };
  }

  handleChange = (e) => {
    this.setState({ forms: e.target.id });
  };

  render() {
    return (
      <BaseLayout title={this.props.title}>
        <Tabs onClick={this.handleChange} />
        <PhotoBanner />
        <FormsMainContent
          onClick={this.handleChange}
          content={this.state.forms}
        />
      </BaseLayout>
    );
  }
}

export default FormsLayout;
