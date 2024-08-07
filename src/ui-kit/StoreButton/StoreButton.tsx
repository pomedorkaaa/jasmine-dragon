const StoreButton = ({
  children,
  className,
  onClick,
}: {
  children: string;
  className: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full _1024:text-p1 _768:p-[10px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default StoreButton;
