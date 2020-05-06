import Folders from "../../../../components/shared/Cudzoziemcy/Folders";
import BaseLayout from "../../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import ForumLink from "../../../../components/shared/Cudzoziemcy/ForumLink";

const PobytCzasowy = () => {
  return (
    <BaseLayout title="Obywatele państw trzecich">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele państw trzecich|Zezwolenie na pobyt czasowy" />
      <Folders header="Zezwolenie na pobyt czasowy" type="pobyt_czasowy" />
      <ForumLink />
    </BaseLayout>
  );
};

export default PobytCzasowy;
