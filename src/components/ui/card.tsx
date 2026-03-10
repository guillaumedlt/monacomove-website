interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border-default bg-white p-6 transition-all duration-200 ${
        hover
          ? "hover:border-border-strong hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
