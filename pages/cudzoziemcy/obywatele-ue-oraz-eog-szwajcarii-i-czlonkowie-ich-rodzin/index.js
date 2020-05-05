import Folders from "../../../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../../../components/shared/Cudzoziemcy/ForumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const obywateleUE = () => {
  return (
    <BaseLayout title="Obywatele UE (oraz EOG/Szwajcarii) i członkowie ich rodzin">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele UE (oraz EOG/Szwajcarii) i członkowie ich rodzin" />
      <Folders
        header="Obywatele UE (oraz EOG/Szwajcarii) i członkowie ich rodzin"
        type="obywatele_ue"
      />
      <ForumLink />
    </BaseLayout>
  );
};

export default obywateleUE;
