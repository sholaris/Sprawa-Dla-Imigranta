import BaseLayout from "./BaseLayout";
import ForumLink from "../shared/Cudzoziemcy/ForumLink";
import FoldersHeaderBar from "../shared/Cudzoziemcy/FoldersHeaderBar";
import OriginMenu from "../shared/Cudzoziemcy/OriginMenu";
import "../../public/static/fontawesome/fontawesome";

const FoldersPageLayout = (props) => {
  return (
    <BaseLayout title={props.title}>
      <FoldersHeaderBar breadcrumb="Cudzoziemcy" />
      <OriginMenu />
      <ForumLink />
    </BaseLayout>
  );
};

export default FoldersPageLayout;
