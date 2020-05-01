import Folders from "../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../components/shared/Cudzoziemcy/ForumLink";

const obywateleWB = () => {
  return (
    <BaseLayout>
      <FoldersHeaderBar />
      <Folders
        header="Obywatele Wielkiej Brytanii (Brexit)"
        type="obywatele_wb"
      />
      <ForumLink />
    </BaseLayout>
  );
};

export default obywateleWB;
