import BaseLayout from "./BaseLayout";
import ForumLink from "../shared/Cudzoziemcy/ForumLink";
import FoldersHeaderBar from "../shared/Cudzoziemcy/FoldersHeaderBar";
import OriginMenu from "../shared/Cudzoziemcy/OriginMenu";

const FoldersPageLayout = (props) => {
  return (
    <BaseLayout title={props.title}>
      <FoldersHeaderBar />
      <OriginMenu />
      <ForumLink />
    </BaseLayout>
  );
};

export default FoldersPageLayout;
