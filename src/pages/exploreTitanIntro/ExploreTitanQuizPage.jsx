import useSWR from "swr";
import { useState, useEffect } from "react";

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
	// 	if (data?.collection?.items) {
	// 		const shuffledData = [...data.collection.items];

	// 		for (let i = shuffledData.length - 1; i > 0; i--) {
	// 			const j = Math.floor(Math.random() * (i + 1));
	// 			[shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
	// 		}

	// 		// select 3 random questions
	// 		const selectedQuestions = shuffledData.slice(0, 3);

	// 		// for each question, randomly select one correct image and three unique incorrect images
	// 		const quizQuestions = selectedQuestions.map((question) => {
	// 			const correctIndex = Math.floor(Math.random() * 4);

	// 			const answers = Array.from({ length: 4 }, (_, i) =>
	// 				i === correctIndex
	// 					? {
	// 							isCorrect: true,
	// 							imageUrl: question.links[0]?.href,
	// 							title: question.data[0]?.title,
	// 						}
	// 					: {
	// 							isCorrect: false,
	// 							imageUrl:
	// 								shuffledData[Math.floor(Math.random() * shuffledData.length)]
	// 									.links[0]?.href,
	// 							title: shuffledData[Math.floor(Math.random() * shuffledData.length)]
	// 								.data[0]?.title,
	// 						}
	// 			);

	// 			// Shuffle the answers for each question
	// 			shuffleArray(answers);

	// 			return {
	// 				question: question.data[0]?.title,
	// 				answers: shuffleArray(answers),
	// 				correctIndex,
	// 			};
	// 		});

	// 		setQuestions(quizQuestions);
	// 	}
	// }, [data]);

	useEffect(() => {
		if (!data?.collection?.items) return;

		const shuffledData = shuffleArray([...data.collection.items]);
		const selectedQuestions = shuffledData.slice(0, 3);

		const quizQuestions = selectedQuestions.map((question) => {
			const answers = Array.from(
				{ length: 4 },
				(_, i) => createAnswer(i === 0, question, shuffledData) // Assuming the correct answer is at index 0 before shuffling
			);

			// Shuffle the answers
			const shuffledAnswers = shuffleArray(answers);

			// Find the correct index after shuffling
			const correctIndex = shuffledAnswers.findIndex((answer) => answer.isCorrect);

			return {
				question: question.data[0]?.title,
				answers: shuffledAnswers,
				correctIndex,
			};
		});

		setQuestions(quizQuestions);
	}, [data]);

	const createAnswer = (isCorrect, question, shuffledData) => {
		if (isCorrect) {
			return {
				isCorrect: true,
				imageUrl: question.links[0]?.href,
				title: question.data[0]?.title,
			};
		}

		const randomQuestion = shuffledData[Math.floor(Math.random() * shuffledData.length)];
		return {
			isCorrect: false,
			imageUrl: randomQuestion.links[0]?.href,
			title: randomQuestion.data[0]?.title,
		};
	};

	const handleAnswerClick = (answerIndex) => {
		setSelectedAnswer(answerIndex);
		setShowResult(true);
	};

	const nextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer(null);
			setShowResult(false);
		} else {
			alert("Quiz Completed!");
		}
	};

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	};

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{questions.length > 0 && (
				<div>
					<h1>Matching Quiz</h1>
					<p>Question {currentQuestionIndex + 1}:</p>
					<p>
						Choose &quot;{questions[currentQuestionIndex].question}&quot; image from
						below
					</p>
					<div className="flex gap-2">
						{questions[currentQuestionIndex].answers.map((answer, index) => (
							<img
								key={index}
								src={answer.imageUrl}
								alt={answer.title}
								onClick={() => handleAnswerClick(index)}
								className={`pointer-events-auto cursor-pointer w-40 h-40 object-cover`}
							/>
						))}
					</div>
					{showResult && (
						<div>
							{selectedAnswer === questions[currentQuestionIndex].correctIndex ? (
								"Correct!"
							) : (
								<div>
									<p>Wrong image, correct answer will be:</p>
									<img
										className="w-40 h-40 object-cover"
										src={
											questions[currentQuestionIndex].answers[
												questions[currentQuestionIndex].correctIndex
											].imageUrl
										}
									/>
								</div>
							)}
						</div>
					)}
					<button onClick={nextQuestion}>Next</button>
				</div>
			)}
		</div>
	);
}
