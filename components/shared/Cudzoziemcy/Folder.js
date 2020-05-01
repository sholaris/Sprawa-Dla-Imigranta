import { Card } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

const Folder = ({ title, options, onClick }) => {
  const [id, setId] = useState([]);

  return (
    <Card className="folder-card">
      <div className="header">
        <h4>{title}</h4>
      </div>
      <ul>
        {options.map((option) => (
          <Link href="/cudzoziemcy/[id]" as={`/cudzoziemcy/${id}`}>
            <li key={option}>
              <a onClick={onClick} className={option}>
                {option}
              </a>
              <hr className="folder-separator" />
            </li>
          </Link>
        ))}
      </ul>
    </Card>
  );
};

export default Folder;
