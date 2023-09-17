import useSWR from "swr";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import MainBackground from "../../components/MainBackground";
import Navbar from "../../components/navbar/Navbar";
import Overlay from "./../../components/Overlay";
import QuizHintModal from "../../components/modal/QuizHintModal";
import { shuffleArray } from "../../utils/shuffleArray";
import { toast } from "react-hot-toast";
import sadEmoji from "../../assets/images/sad-emoji.png";
import QuizQuestion from "../../components/titan-quiz/QuizQuestion";
import Reward from "../../components/titan-quiz/Reward";
import QuizAction from "./../../components/titan-quiz/QuizAction";
import QuizAnswerModal from "../../components/modal/QuizAnswerModal";
import Option from "../../components/titan-quiz/Option";
import ChatContainer from "./../../components/chat/ChatContainer";
import { useAudio } from "../../hooks/useAudio";
import quizAudio from "../../assets/audios/many-moons-of-saturn-146147.mp3";
import AudioModal from "../../components/modal/AudioModal";

const MAX_ALLOWED_ITERATION = 150;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ExploreTitanQuizPage() {
	const { data, error, isLoading } = useSWR(
		"https://images-api.nasa.gov/search?q=titan",
		fetcher
	);

	const { play, stop } = useAudio(quizAudio, { loop: true });
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [imageClicked, setImageClicked] = useState(false);
	const [modalOpen, setModalOpen] = useState(true);
	const [correctAnsModalOpen, setCorrectAnsModalOpen] = useState(false);

	useEffect(() => {
		document.querySelector("main").style.overflowY = "auto";

		if (!data?.collection?.items) return;

		const shuffledData = shuffleArray([...data.collection.items]);
		const selectedQuestions = shuffledData.slice(0, 6);

		const quizQuestions = selectedQuestions.map((question) => {
			const answers = [];
			const usedTitles = [];

			// selecting 4 options
			for (let i = 0; i < 8; i++) {
				let answer = createAnswer(i === 0, question, shuffledData, usedTitles);
				answers.push(answer);
			}

			// Shuffle the answers
			const shuffledAnswers = shuffleArray(answers);

			// Find the correct index after shuffling
			const correctIndex = shuffledAnswers.findIndex((answer) => answer.isCorrect);

			return {
				nasa_id: question.data[0]?.nasa_id,
				question: question.data[0]?.title,
				answers: shuffledAnswers,
				correctIndex,
			};
		});

		setQuestions(quizQuestions);

		return () => {
			document.querySelector("main").style.overflowY = "hidden";
		};
	}, [data]);

	useEffect(() => {
		play();
	}, [play]);

	const createAnswer = (isCorrect, question, shuffledData, usedTitles) => {
		if (isCorrect) {
			usedTitles.push(question.data[0]?.title);

			return {
				isCorrect: true,
				imageUrl: question.links[0]?.href,
				title: question.data[0]?.title,
			};
		}

		let count = 0,
			index = 0;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			count++;
			index = Math.floor(Math.random() * 100);
			const title = shuffledData[index].data[0]?.title;
			if (!usedTitles.includes(title)) {
				usedTitles.push(title);
				break;
			}

			if (count >= MAX_ALLOWED_ITERATION) break;
		}

		const randomQuestion = shuffledData[index];

		return {
			isCorrect: false,
			imageUrl: randomQuestion.links[0]?.href,
			title: randomQuestion.data[0]?.title,
		};
	};

	const handleAnswerClick = (answerIndex) => {
		setImageClicked(true);
		setSelectedAnswer(answerIndex);
		setShowResult(true);
		// generate message according to answer
		handleAnswer(answerIndex);
	};

	const handleAnswer = (answerIndex) => {
		answerIndex === questions[currentQuestionIndex].correctIndex
			? handleOpenAnsModal()
			: toast.error(
					() => (
						<p className="flex items-center gap-1.5">
							<img className="w-6 h-6" src={sadEmoji} alt="😥" />
							Oops, not quite! Try another!
						</p>
					),
					{
						position: "top-right",
					}
			  );
	};

	const nextQuestion = () => {
		setImageClicked(false);

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer(null);
			setShowResult(false);
		} else {
			alert("Quiz Completed!");
		}
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleOpenAnsModal = () => {
		setCorrectAnsModalOpen(true);
	};

	const handleCloseAnsModal = () => {
		setCorrectAnsModalOpen(false);
	};

	if (isLoading) return <Loading />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<MainBackground src="bg-stars-img">
			<section>
				<section className="fixed z-10 top-0 w-full flex flex-col justify-center border-b border-blue-300 bg-stars-img">
					<Navbar />
					<div className="flex justify-center gap-20 w-full py-5">
						<QuizAction
							currentQuestionIndex={currentQuestionIndex}
							nextQuestion={nextQuestion}
							imageClicked={imageClicked}
						/>
						<QuizQuestion
							questions={questions}
							currentQuestionIndex={currentQuestionIndex}
						/>
						<span className="w-7 h-7 absolute bottom-4 right-[70px] bg-black border border-cyan-400 text-cyan-500 flex leading-none justify-center items-center">
							{currentQuestionIndex + 1}
						</span>
					</div>
				</section>
				<section className="bg-black mt-[270px]">
					<Reward />
					<div className="grid grid-cols-4 gap-6 px-[70px] py-4">
						{questions[currentQuestionIndex]?.answers?.map((answer, index) => (
							<Option
								key={index}
								imageClicked={imageClicked}
								answer={answer}
								index={index}
								handleAnswerClick={handleAnswerClick}
								showResult={showResult}
								selectedAnswer={selectedAnswer}
								questions={questions}
								currentQuestionIndex={currentQuestionIndex}
							/>
						))}
					</div>
				</section>
			</section>
			{modalOpen && (
				<Overlay>
					<QuizHintModal closeModal={handleCloseModal} />
				</Overlay>
			)}
			{correctAnsModalOpen && (
				<Overlay>
					<QuizAnswerModal
						correctImgInfo={questions[currentQuestionIndex].answers[selectedAnswer]}
						handleCloseAnsModal={handleCloseAnsModal}
					/>
				</Overlay>
			)}
			<ChatContainer />
			<AudioModal audioPlay={play} audioStop={stop} initialPlay={true} />
		</MainBackground>
	);
}
