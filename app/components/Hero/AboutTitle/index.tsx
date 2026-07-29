const AboutTitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="text-center hidden sm:block text-lg text-black mt-52 font-medium">
      {subtitle}
    </div>
  );
};

export default AboutTitle;
