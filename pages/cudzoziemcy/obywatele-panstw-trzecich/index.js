import Folders from "../../../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../../../components/shared/Cudzoziemcy/ForumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const obywatelePT = () => {
  return (
    <BaseLayout title="Obywatele państw trzecich">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele państw trzecich" />
      <Folders
        category="Obywatele państw trzecich"
        header="Obywatele państw trzecich"
        type="obywatele_pt"
      />
      <ForumLink />
    </BaseLayout>
  );
};

export default obywatelePT;
