import useSWR from "swr";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../../components/loading/Loading";
import MainBackground from "../../components/MainBackground";
import Navbar from "../../components/navbar/Navbar";
import ActionButton from "../../components/buttons/ActionButton";
import ideaImg from "../../assets/images/idea.png";
// import achievement from "../../assets/images/coin-achievement.svg";
import coin from "../../assets/images/coins.png";
import questionBaseImg from "../../assets/images/question-base.png";
import matching from "../../assets/images/matching.svg";
import quiz from "../../assets/images/quiz.svg";
import Overlay from "./../../components/Overlay";
import QuizHintModal from "../../components/modal/QuizHintModal";
import { shuffleArray } from "../../utils/shuffleArray";
import correct from "../../assets/images/correct.svg";
import wrong from "../../assets/images/wrong.svg";
import sadEmoji from "../../assets/images/sad-emoji.png";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const MAX_ALLOWED_ITERATION = 150;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ExploreTitanQuizPage() {
	const { data, error, isLoading } = useSWR(
		"https://images-api.nasa.gov/search?q=titan",
		fetcher
	);

	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [imageClicked, setImageClicked] = useState(false);
	const [modalOpen, setModalOpen] = useState(true);

	useEffect(() => {
		document.querySelector("main").style.overflowY = "auto";

		if (!data?.collection?.items) return;

		const shuffledData = shuffleArray([...data.collection.items]);
		const selectedQuestions = shuffledData.slice(0, 6);

		const quizQuestions = selectedQuestions.map((question) => {
			let answers = [];
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

	if (isLoading) return <Loading />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<MainBackground src="bg-stars-img">
			<section>
				<section className="fixed z-10 top-0 w-full flex flex-col justify-center border-b border-blue-300 bg-stars-img">
					<Navbar />
					<div className="flex justify-center gap-20 w-full py-5">
						<QuizAction nextQuestion={nextQuestion} imageClicked={imageClicked} />
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
							<div
								key={answer?.nasa_id || index}
								className={`${
									imageClicked ? "cursor-not-allowed" : null
								} relative bg-neutral-950 border overflow-hidden group border-cyan-300`}
							>
								<img
									src={answer.imageUrl}
									alt={answer.title}
									onClick={() => handleAnswerClick(index)}
									className={`${
										imageClicked
											? "pointer-events-none"
											: "pointer-events-auto group-hover:scale-110"
									} transition-all h-60 w-full cursor-pointer object-cover`}
								/>
								{showResult &&
									(index === selectedAnswer ? (
										selectedAnswer ===
										questions[currentQuestionIndex].correctIndex ? (
											<ResultIndicatorImg src={correct} />
										) : (
											<>
												<ResultIndicatorImg src={wrong} />
												{genWrongMessage()}
											</>
										)
									) : index === questions[currentQuestionIndex].correctIndex ? (
										<ResultIndicatorImg src={correct} />
									) : null)}
							</div>
						))}
					</div>
				</section>
			</section>
			{modalOpen && (
				<Overlay>
					<QuizHintModal closeModal={handleCloseModal} />
				</Overlay>
			)}
		</MainBackground>
	);
}

function QuizAction({ nextQuestion, imageClicked }) {
	return (
		<div className="flex items-center gap-3">
			<img className="h-[160px]" src={ideaImg} alt="idea" />
			<div>
				<img className="h-8" src={matching} alt="matching" />
				<img className="h-7 mb-2" src={quiz} alt="quiz" />
				<ActionButton
					text="NEXT"
					rounded="rounded-0"
					textSize="text-[12px] font-bold"
					width="w-16"
					height="h-8"
					disabled={!imageClicked}
					onClick={nextQuestion}
				/>
			</div>
		</div>
	);
}

QuizAction.propTypes = {
	nextQuestion: PropTypes.func,
	imageClicked: PropTypes.bool,
};

function QuizQuestion({ questions, currentQuestionIndex }) {
	return (
		<div className="flex gap-3 items-center">
			<div className="relative">
				<img className="h-[120px] w-[600px]" src={questionBaseImg} alt="question" />
				<p className="text-blue-100 text-2xl leading-snug font-normal absolute font-itim top-1/2 left-[88px] -translate-y-[75%]">
					Identify the &quot;{questions[currentQuestionIndex]?.question}&quot;
				</p>
			</div>
		</div>
	);
}

function genWrongMessage() {
	toast.error(
		() => (
			<p className="flex items-center gap-1.5">
				<img className="w-6 h-6" src={sadEmoji} alt="😥" />
				Oops, not quite! Try another!
			</p>
		),
		{ position: "top-right" }
	);
}

QuizQuestion.propTypes = {
	questions: PropTypes.array,
	currentQuestionIndex: PropTypes.number,
};

function Reward() {
	return (
		<p className="text-center flex justify-center pt-5 pb-4 gap-1.5">
			<span className="text-white text-xl font-normal uppercase font-itim">
				Choose the Correct Image and get
			</span>
			<span className="text-amber-200 items-center text-xl font-normal uppercase flex gap-1">
				<img src={coin} className="w-5 h-6" alt="" /> 200
			</span>
		</p>
	);
}

function ResultIndicatorImg({ src }) {
	return (
		<motion.img
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src={src}
		/>
	);
}

ResultIndicatorImg.propTypes = {
	src: PropTypes.string,
};
