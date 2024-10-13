"use client";
import { useRef, useState } from "react";
import Link from "next/link";

interface DefCardProps {
  term: string;
  definition: (string | { text: string, href: string })[];
  i: number;
}

const DefCard = ({ term, definition, i }: DefCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false)
  const [answerHeight, setAnswerHeight] = useState('0px')

  const handleOpenAnswer = () => {
    const answerEl = answerElRef.current?.children[0].getBoundingClientRect().height ?? 0;
    setIsAnswerOpen(!isAnswerOpen)
    setAnswerHeight(`${answerEl + 20}px`)
  }

  return (
    <div
      key={i}
      className="space-y-3 mt-5 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-2xl text-gray-700 font-medium">
        {term}
        {isAnswerOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div ref={answerElRef} className="duration-300" style={isAnswerOpen ? { height: answerHeight } : { height: '0px' }} >
        <p className="text-gray-500">
          {definition.map((item, k) =>
          (typeof item === 'string' ?
            (<span key={k}>{item}</span>) :
            (<Link key={k} className="text-sky-400 hover:underline" href={item.href}>{item.text}</Link>))
          )}
        </p>
      </div>
    </div>
  )
}

export default DefCard
