import Folders from "../../../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../../../components/shared/Cudzoziemcy/ForumLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const obywateleWB = () => {
  return (
    <BaseLayout title="Obywatele Wielkiej Brytanii (Brexit) | SprawaDlaImigranta.pl">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele Wielkiej Brytanii (Brexit)" />
      <Folders
        header="Obywatele Wielkiej Brytanii (Brexit)"
        category="Obywatele Wielkiej Brytanii (Brexit)"
        type="obywatele_wb"
      />
      <ForumLink />
    </BaseLayout>
  );
};

export default obywateleWB;
