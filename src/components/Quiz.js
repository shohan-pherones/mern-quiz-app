import Questions from "./Questions";

const Quiz = () => {
  const onNext = () => {
    console.log("on next click");
  };

  const onPrev = () => {
    console.log("on prev click");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
