import Folders from "../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../components/shared/Cudzoziemcy/ForumLink";

const obywatelePT = () => {
  return (
    <BaseLayout>
      <FoldersHeaderBar />
      <Folders header="Obywatele państw trzecich" type="obywatele_pt" />
      <ForumLink />
    </BaseLayout>
  );
};

export default obywatelePT;
