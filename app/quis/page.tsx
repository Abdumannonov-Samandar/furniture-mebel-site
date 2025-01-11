'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Volume2, Heart, ArrowLeft, Check, X } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Option {
	id: string
	image: string
	label: string
}

interface QuizStep {
	id: number
	word: string
	question: string
	audio: string
	options: Option[]
	correct: string
}

const quizData: QuizStep[] = [
	{
		id: 1,
		word: 'le chat',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
	{
		id: 2,
		word: '2',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
	{
		id: 3,
		word: '3',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
	{
		id: 4,
		word: '4',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
	{
		id: 5,
		word: '5',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
	{
		id: 6,
		word: '5',
		audio: '/audio/le-chat.mp3',
		question: 'Select the correct image',
		options: [
			{
				id: 'cat',
				image: 'https://picsum.photos/203',
				label: 'the cat',
			},
			{
				id: 'alien',
				image: 'https://picsum.photos/202',
				label: 'the alien',
			},
			{
				id: 'ant',
				image: 'https://picsum.photos/201',
				label: 'the ant',
			},
			{
				id: 'ball',
				image: 'https://picsum.photos/200',
				label: 'the ball',
			},
		],
		correct: 'cat',
	},
]

export default function QuizCard() {
	const [currentStep, setCurrentStep] = useState(0)
	const [selected, setSelected] = useState<string | null>(null)
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState<string | null>(null)
	const [showResult, setShowResult] = useState<'correct' | 'incorrect' | null>(
		null
	)
	const [hearts, setHearts] = useState(5)

	useEffect(() => {
		// Preload audio files
		quizData.forEach(step => {
			const audio = new Audio(step.audio)
			audio.preload = 'auto'
		})
	}, [])

	const handleSelect = (id: string) => {
		setSelected(id)
		setError(null)
		const isCorrect = id === quizData[currentStep].correct
		setShowResult(isCorrect ? 'correct' : 'incorrect')

		if (!isCorrect) {
			setHearts(prev => Math.max(0, prev - 1))
		}
	}

	const handleContinue = () => {
		if (selected) {
			if (selected === quizData[currentStep].correct) {
				setProgress(prev =>
					Math.min(100, Math.round((prev + 100 / quizData.length) * 100) / 100)
				)

				if (currentStep < quizData.length - 1) {
					setCurrentStep(prev => prev + 1)
					setShowResult(null)
				} else {
					setError("Congratulations! You've completed the quiz.")
				}
			} else {
				if (hearts > 1) {
					setError("Oops! That's not correct. Try again!")
				} else {
					setError("You've run out of hearts! Starting over.")
					resetQuiz()
				}
			}
			setSelected(null)
		} else {
			setError('Please select an answer before continuing.')
		}
	}

	const resetQuiz = () => {
		setCurrentStep(0)
		setProgress(0)
		setHearts(5)
		setShowResult(null)
		setSelected(null)
		setError(null)
	}

	const playAudio = () => {
		const audio = new Audio(quizData[currentStep].audio)
		audio.play().catch(e => console.error('Error playing audio:', e))
	}

	return (
		<div className='min-h-screen bg-gradient-to-b from-sky-100 to-blue-100 p-4 flex items-center justify-center'>
			<Card className='w-full max-w-4xl overflow-hidden shadow-lg'>
				<CardContent className='p-6'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className='space-y-6'
					>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-1'>
								<Link href='/' aria-label='Go back to home page'>
									<ArrowLeft className='h-6 w-6 text-gray-200 hover:text-gray-400 transition-all' />
								</Link>
								<Badge
									variant='secondary'
									className='text-xs font-semibold bg-sky-200 text-sky-700'
								>
									NEW WORD
								</Badge>
							</div>

							<div className='flex items-center space-x-2'>
								{[...Array(5)].map((_, index) => (
									<Heart
										key={index}
										className={cn('h-4 w-4', {
											'text-red-500': index < hearts,
											'text-gray-300': index >= hearts,
										})}
										aria-hidden='true'
									/>
								))}
							</div>
						</div>

						<div className='space-y-2'>
							<div className='flex justify-between items-center text-sm text-gray-600'>
								<span>Progress</span>
								<span>{progress}/100 XP</span>
							</div>
							<Progress
								value={progress}
								className={cn('h-3 bg-sky-100', {
									'bg-sky-200': progress > 0,
								})}
								aria-label={`Quiz progress: ${progress}%`}
							/>
						</div>

						<h1 className='text-wrap text-2xl md:text-3xl font-bold text-gray-800'>
							{quizData[currentStep].question}
						</h1>

						<div className='md:flex md:justify-between md:items-center'>
							<motion.div
								className='flex items-center gap-3 bg-white rounded-lg md:w-1/2'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									variant='ghost'
									size='icon'
									className='h-10 w-10 rounded-lg bg-sky-500 border-b-4 border-sky-600 animate-pulse hover:bg-sky-500'
									onClick={playAudio}
									aria-label={`Play audio for ${quizData[currentStep].word}`}
								>
									<Volume2
										className='h-5 w-5 text-sky-100'
										aria-hidden='true'
									/>
								</Button>
								<span className='text-lg font-medium text-gray-800'>
									{quizData[currentStep].word}
								</span>
							</motion.div>

							{/* <div className='hidden md:block text-right'>
								<span className='text-2xl font-bold text-sky-700'>
									{progress}/100
								</span>
								<span className='text-sm text-gray-600 block'>XP</span>
							</div> */}
						</div>

						<div
							className='grid grid-cols-2 md:grid-cols-4 gap-4'
							role='group'
							aria-label='Answer options'
						>
							<AnimatePresence mode='wait'>
								{quizData[currentStep].options.map(option => (
									<motion.div
										key={option.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											variant='outline'
											className={cn(
												'w-full h-auto aspect-square p-4 flex flex-col items-center justify-center gap-2 transition-all duration-200 rounded-lg',
												{
													'border-sky-500 bg-sky-50 border-b-4':
														showResult === 'correct' && selected === option.id,
													'border-red-500 bg-red-50 border-b-4':
														showResult === 'incorrect' &&
														selected === option.id,
													'border-blue-500 bg-blue-50 border-b-4':
														selected === option.id && !showResult,
													'hover:bg-gray-50 border-b-4':
														!selected || selected !== option.id,
												}
											)}
											onClick={() => handleSelect(option.id)}
											aria-pressed={selected === option.id}
										>
											<div className='relative w-full aspect-square'>
												<Image
													src={option.image}
													alt={option.label}
													fill
													sizes='(max-width: 768px) 50vw, 25vw'
													className='rounded-md object-cover'
												/>
											</div>
											<span className='text-base font-medium text-gray-700'>
												{option.label}
											</span>
										</Button>
									</motion.div>
								))}
							</AnimatePresence>
						</div>

						{error && (
							<Alert
								variant={
									error.includes('Congratulations') ? 'default' : 'destructive'
								}
								className={cn({
									'bg-green-50 border-green-200 text-green-800':
										error.includes('Congratulations'),
									'bg-red-50 border-red-200 text-red-800':
										!error.includes('Congratulations'),
								})}
							>
								{error.includes('Congratulations') ? (
									<Check className='h-4 w-4' aria-hidden='true' />
								) : (
									<X className='h-4 w-4' aria-hidden='true' />
								)}

								<AlertTitle>
									{error.includes('Congratulations') ? 'Amazing!' : 'Error'}
								</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}
					</motion.div>
				</CardContent>
				<CardFooter className='p-6 pt-0'>
					<Button
						disabled={!selected}
						className='w-full py-6 text-lg font-semibold bg-sky-600 hover:bg-sky-700 transition-colors duration-200 border-b-4 border-sky-700'
						onClick={handleContinue}
					>
						Continue
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
