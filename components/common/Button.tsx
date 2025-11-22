type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  className = "",
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`rounded-full py-3 px-5  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
