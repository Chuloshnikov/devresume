const FaqCard = ({ data }) => {
    const { question, answer } = data;
    return (
      <div className="lg:col-span-2 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
          <h3 className="text-2xl text-gray-400 pb-2">{question}</h3>
          <p className="text-xl leading-normal">{answer}</p>
        </div>
      </div>
    );
  };

  export default FaqCard;