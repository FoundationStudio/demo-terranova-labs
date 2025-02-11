export const GlowingLine = () => {
  return (
    <div className="absolute -bottom-0.5 left-1/3 h-[1px] w-[30rem] -translate-x-1/2 sm:-bottom-1 sm:w-[40rem] md:-bottom-2 md:w-[60rem]">
      <div className="via-primary-600 absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent to-transparent blur-sm"></div>
      <div className="via-primary-600 absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent to-transparent"></div>
      <div className="via-primary-400 absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent to-transparent blur-sm"></div>
      <div className="via-primary-400 absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent to-transparent"></div>
      <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
};
