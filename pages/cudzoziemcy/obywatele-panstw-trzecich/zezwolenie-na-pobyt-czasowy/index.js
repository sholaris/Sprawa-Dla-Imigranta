import Folders from "../../../../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../../../../components/shared/Cudzoziemcy/ForumLink";

const PobytCzasowy = () => {
  return (
    <BaseLayout title="Zezwolenie na pobyt czasowy | Obywatele państw trzecich">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele państw trzecich|Zezwolenie na pobyt czasowy" />
      <Folders
        category="Obywatele państw trzecich"
        header="Zezwolenie na pobyt czasowy"
        type="pobyt_czasowy"
      />
      <ForumLink />
    </BaseLayout>
  );
};

export default PobytCzasowy;
