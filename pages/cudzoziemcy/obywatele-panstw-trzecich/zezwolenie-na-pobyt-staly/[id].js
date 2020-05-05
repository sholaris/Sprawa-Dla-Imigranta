import FoldersHeaderBar from "../../../../components/shared/Cudzoziemcy/FoldersHeaderBar";
import BaseLayout from "../../../../components/Layouts/BaseLayout";
import { getAllIssuesIds, getIssueData } from "../../../../lib/issues";

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
        breadcrumb={`Cudzoziemcy|Obywatele państw trzecich|Zezwolenie na pobyt stały|${issueData.title}`}
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