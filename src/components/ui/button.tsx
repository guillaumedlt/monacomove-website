import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-monaco-500 text-white hover:bg-monaco-600 active:bg-monaco-700",
  secondary:
    "border border-border-default text-text-primary hover:border-border-strong hover:bg-surface-tertiary",
  ghost: "text-text-secondary hover:bg-surface-tertiary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-6 py-4 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
