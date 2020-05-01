import { Card } from "react-bootstrap";
import Link from "next/link";

const Folder = ({ title, options }) => {
  return (
    <Card className="folder-card">
      <div className="header">
        <h4>{title}</h4>
      </div>
      <ul>
        {options.map((option) => (
          <Link
            href="/cudzoziemcy/[id]"
            as={`/cudzoziemcy/${option.split(" ").join("-").toLowerCase()}`}
          >
            <li>
              <a className={option}>{option}</a>
              <hr className="folder-separator" />
            </li>
          </Link>
        ))}
      </ul>
    </Card>
  );
};

export default Folder;
