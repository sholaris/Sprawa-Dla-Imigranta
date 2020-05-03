import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getAllIssuesIds() {
  const issuesDirectory = path.join(process.cwd(), "issues");
  const foldersNames = fs.readdirSync(issuesDirectory);
  var allFiles = [];
  foldersNames.forEach((folder) => {
    const folderPath = path.join(issuesDirectory, folder);
    const fileNames = fs.readdirSync(folderPath);
    allFiles.concat(fileNames);
  });
  return allFiles.map((File) => {
    return {
      params: {
        id: File.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getIssueData(id) {
  const issuesDirectory = path.join(process.cwd(), "issues");
  const foldersNames = fs.readdirSync(issuesDirectory);
  var fullPath = "";
  foldersNames.forEach((folder) => {
    const folderPath = path.join(issuesDirectory, folder);
    const fileNames = fs.readdirSync(folderPath);
    fileNames.forEach((file) => {
      if (file.replace(/\.md$/, "") == id) {
        fullPath = path.join(issuesDirectory, folder, `${id}.md`);
      }
    });
  });
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
