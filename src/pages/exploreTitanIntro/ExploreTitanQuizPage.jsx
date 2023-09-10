import useSWR from "swr";
import { useState, useEffect } from "react";

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

	useEffect(() => {
		if (!data?.collection?.items) return;

		const shuffledData = shuffleArray([...data.collection.items]);
		const selectedQuestions = shuffledData.slice(0, 6);

		const quizQuestions = selectedQuestions.map((question) => {
			let answers = [];
			const usedTitles = [];

			// selecting 4 options
			for (let i = 0; i < 4; i++) {
				let answer = createAnswer(i === 0, question, shuffledData, usedTitles);
				answers.push(answer);
			}

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

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			{questions.length > 0 && (
				<div>
					<h1>Matching Quiz</h1>
					<p>Question {currentQuestionIndex + 1}:</p>
					<p>
						Choose &quot;{questions[currentQuestionIndex].question}&quot; image from
						below:
					</p>
					<div className="flex gap-2">
						{questions[currentQuestionIndex].answers.map((answer, index) => (
							<img
								key={index}
								src={answer.imageUrl}
								alt={answer.title}
								onClick={() => handleAnswerClick(index)}
								className="pointer-events-auto cursor-pointer w-40 h-40 object-cover"
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
