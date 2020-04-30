import Link from "next/link";

const MenuBlock = (props) => {
  return (
    <a onClick={props.onClick} className={props.index}>
      <div className="block-option">
        <div id={props.title} className={props.index}>
          <h2 className={props.index}>{props.title}</h2>
        </div>
      </div>
    </a>
  );
};

export default MenuBlock;
