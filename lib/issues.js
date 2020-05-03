import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

// export function getIssuesIdsByDir(dir){
//   const issuesDirectory = path.join(process.cwd(), "issues", dir);
//   const fileNames = fs.readdirSync(issuesDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

export function getAllIssuesIds() {
  const issuesDirectory = path.join(process.cwd(), "issues");
  const fileNames = fs.readdirSync(issuesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getIssueData(id) {
  const issuesDirectory = path.join(process.cwd(), "issues");
  const fullPath = path.join(issuesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
