import BaseLaytout from "../../../../components/Layouts/BaseLayout";
import FoldersHeaderBar from "../../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import PermitOptions from "../../../../components/shared/Cudzoziemcy/PermitOptions";

const Zezwolenie = () => {
  return (
    <BaseLaytout title="Zezwolenie na pobyt stały">
      <FoldersHeaderBar breadcrumb="Cudzoziemcy|Obywatele państw trzecich|Zezwolenie na pobyt stały" />
      <PermitOptions />
    </BaseLaytout>
  );
};

export default Zezwolenie;
