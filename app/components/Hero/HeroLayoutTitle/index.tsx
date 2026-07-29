const HeroLayOutTitle = ({ question }: { question: string }) => {
  return (
    <div className="lg:text-4xl sm:text-lg text-indigo-950 text-center justify-center font-medium mt-4">
      {question}
    </div>
  );
};

export default HeroLayOutTitle;
