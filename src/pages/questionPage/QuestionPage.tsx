import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/footer";
import data from "../../pages/questionPage/data";
import { FaCheckCircle } from "react-icons/fa";

const QuestionPage = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    data.reduce((acc, _, i) => ({ ...acc, [i]: null }), {})
  );

  const checkAnswer = (optionIndex) => {
    setSelectedOption((prev) => ({
      ...prev,
      [index]: prev[index] === optionIndex ? null : optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (selectedOption[index] !== null) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex;
      });
    }
  };

  const handlePreviousQuestion = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const question = data[index];
  const isLastQuestion = index === data.length - 1;

  return (
    <>
      <Nav />
      <div className="relative rounded-3xl overflow-hidden">
        <div className="mt-4 mx-4 sm:mx-8 lg:mx-16 rounded-3xl">
          <div className="flex items-center justify-center">
            <img
              src="src/assets/img/questionBanner.png"
              alt="Banner"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col justify-center bg-[#F5F5F7] w-full sm:w-3/4 lg:w-2/4 rounded-3xl h-auto p-6 sm:p-10">
          {index < data.length ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-semibold text-left mb-4 sm:mb-6">
                {index + 1}. {question.question}
              </h1>
              <ul className="flex flex-col  space-y-4 pl-4 items-center">
                {question.options.map((option, optionIndex) => {
                  const Icon = option.icon;
                  const isSelected = selectedOption[index] === optionIndex;
                  return (
                    <li
                      key={optionIndex}
                      className={`text-lg sm:text-xl pl-4 pt-3 pb-3 pr-3 rounded-md shadow-md w-1/2 flex items-center ${
                        isSelected ? "bg-[#EAFAF1]" : "bg-white"
                      }`}
                      onClick={() => checkAnswer(optionIndex)}
                    >
                      <Icon className="mr-2" />
                      {option.text}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8">
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 mb-4 sm:mb-0 w-full sm:w-1/4"
                  onClick={handlePreviousQuestion}
                  disabled={index === 0}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600  mb-4 sm:mb-0 w-full sm:w-1/4"
                  onClick={handleNextQuestion}
                  disabled={selectedOption[index] === null}
                >
                  {isLastQuestion ? "Finish" : "Next"}
                </button>
              </div>
              <div className="mt-4 text-center text-gray-700">
                {index + 1} of {data.length} questions
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                <FaCheckCircle className="text-green-500 inline-block mr-2" />
                Done!
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-gray-600">
                Please wait for the result
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuestionPage;
