import React from 'react';

const StartupFaq = () => (
  <section className="space-y-4 w-full md:w-4/5 mx-auto">
    <h1 className="text-2xl md:text-3xl lg:text-5xl text-center my-6 md:my-10 font-bold">
      Frequently Asked Questions
    </h1>
    <details
      className="group rounded-lg bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden border"
      open
    >
      <summary className="flex items-center justify-between cursor-pointer">
        <h2 className="font-semibold text-base md:text-xl lg:text-2xl text-gray-900">
          Q1. What is remostart? How we work?
        </h2>

        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-xs md:text-sm text-gray-700" />
    </details>

    <details className="group rounded-lg bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden border">
      <summary className="flex items-center justify-between cursor-pointer">
        <h2 className="font-semibold text-base md:text-xl lg:text-2xl text-gray-900">Heading 2</h2>

        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-xs md:text-sm text-gray-700" />
    </details>

    <details className="group rounded-lg bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden border">
      <summary className="flex items-center justify-between cursor-pointer">
        <h2 className="font-semibold text-base md:text-xl lg:text-2xl text-gray-900">Heading</h2>

        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-xs md:text-sm text-gray-700" />
    </details>
  </section>
);

export default StartupFaq;
