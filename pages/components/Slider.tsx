import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type PropsType = {
  title?: string;
  catBy?: string;
  animeArr: {
    id: number;
    Anime_Name: string;
    Anime_Img: string;
    Anime_Description: string;
    Studios: string;
    Genre: string;
    Rating: number;
    Views: number;
  }[];
};

function Slider({ animeArr }: PropsType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? animeArr.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === animeArr.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (animeArr.length === 0) {
    return null; // Return null or display a message when animeArr is empty
  }

  const currentAnime = animeArr[currentIndex];

  return (
    <div className="max-w-[1400px] h-[550px] w-full relative group my-8">
      <div
        style={{
          backgroundImage: `url(Uploads/Pictures/${currentAnime.Anime_Img})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500 flex place-items-center"
      >
        <p className="text-gray-100 text-[4rem] ml-24">
          {currentAnime.Anime_Name}
        </p>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center">
        {animeArr.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
