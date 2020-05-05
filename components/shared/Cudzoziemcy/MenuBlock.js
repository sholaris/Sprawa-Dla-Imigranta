const MenuBlock = React.forwardRef(({ index, title, onClick, href }, ref) => {
  return (
    <a href={href} ref={ref} onClick={onClick} className={index}>
      <div className="block-option">
        <div className={index}>
          <h2>{title}</h2>
        </div>
      </div>
    </a>
  );
});

export default MenuBlock;
