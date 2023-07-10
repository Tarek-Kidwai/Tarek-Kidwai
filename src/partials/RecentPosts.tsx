import { GradientText, Section } from 'astro-boilerplate-components';

const RecentPosts = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Frontend <GradientText>Skills</GradientText>
        </div>
      </div>
    }
  >
    <ul className="max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
      <li className="flex items-center">
        <svg
          className="mr-2 h-3.5 w-3.5 shrink-0 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        React, Redux
      </li>
      <li className="flex items-center">
        <svg
          className="mr-2 h-3.5 w-3.5 shrink-0 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Bootstrap
      </li>
      <li className="flex items-center">
        <svg
          className="mr-2 h-3.5 w-3.5 shrink-0 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        JavaScript
      </li>
    </ul>
  </Section>
);

export { RecentPosts };
