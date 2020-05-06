import { Card } from "react-bootstrap";
import Link from "next/link";
import { convertCategory } from "../../../lib/utils";

const Folder = ({ title, options, category, type }) => {
  category = convertCategory(category);
  return (
    <Card className={`folder-card ${type}`}>
      <div className="header">
        <h4>{title}</h4>
      </div>
      <ul>
        {options.map((option) => (
          <Link
            key={option}
            href={
              option == "Zezwolenie na pobyt stały"
                ? `/cudzoziemcy/${category}/zezwolenie-na-pobyt-staly`
                : `/cudzoziemcy/${category}/[id]`
            }
            as={
              option == "Zezwolenie na pobyt stały"
                ? `/cudzoziemcy/${category}/zezwolenie-na-pobyt-staly`
                : `/cudzoziemcy/${category}/${option
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`
            }
          >
            <li>
              <a>{option}</a>
              <hr className="folder-separator" />
            </li>
          </Link>
        ))}
      </ul>
    </Card>
  );
};

export default Folder;
