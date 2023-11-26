const Footer = ({ data }) => {
  const { text, title } = data;
  return (
    <div className="flex w-full flex-col gap-8 mt-4 items-center justify-center text-center pt-10 mt-5 mb-10">
      <h3
      className="text-2xl font-bold"
      >
        {title}
      </h3>
      <span
      className="text-sm px-8 lg:px-0 lg:text-base"
      >
        {text}
      </span>
    </div>
  );
};

export default Footer;