import FoldersHeaderBar from "../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import { getAllIssuesIds, getIssueData } from "../../../lib/issues";
import { Compress } from "../../../lib/utils";

export async function getStaticPaths() {
  const paths = getAllIssuesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const issueData = await getIssueData(params.id);
  return {
    props: {
      issueData,
    },
  };
}

const Issue = ({ issueData }) => {
  return (
    <BaseLayout title={`${issueData.title} | Sprawa Dla Imigranta`}>
      <FoldersHeaderBar
        breadcrumb={`Cudzoziemcy|Obywatele Wielkiej Brytanii (Brexit)|${
          issueData.title.split(" ").length > 5
            ? Compress(issueData.title, 5) + `...`
            : issueData.title
        }`}
      />
      <div className="grey-box issue">
        <div className="issue-content">
          <h1 className="issue-title">{issueData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: issueData.contentHtml }} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Issue;
