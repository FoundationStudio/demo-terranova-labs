export const TextGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="from-primary-400 to-primary-800 bg-gradient-to-b bg-clip-text font-bold tracking-tight text-transparent">
      {children}
    </span>
  );
};
