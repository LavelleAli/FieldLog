import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | FieldLog",
  description: "The story behind FieldLog and the people it is built for.",
};

const userStories = [
  {
    role: "Field technician",
    story:
      "As a field technician, I want to log a new equipment issue with the turbine ID, a short summary, its type, priority and notes, so that the problem is recorded the moment I find it and nothing gets lost between shifts. When I save it, the issue should appear on the board as Open with the date it was created.",
  },
  {
    role: "Maintenance supervisor",
    story:
      "As a maintenance supervisor, I want to see how many issues are open, in progress and resolved, and to search and sort the board by date, turbine ID, type or status, so that I can decide which turbines need a crew first. By default the most recently updated issues should be at the top.",
  },
  {
    role: "Technician on a repair",
    story:
      "As a technician working on a repair, I want to change an issue's status and add notes as the work progresses, so that my supervisor and the next shift can see what has been done without having to call me. Every change should update the issue's Updated date.",
  },
];

const About = () => {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-8">
      <h1 className="text-3xl font-bold">About FieldLog</h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-accent">Our Background</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-accent">User Stories</h2>
        <ul className="flex flex-col gap-4">
          {userStories.map((userStory) => (
            <li key={userStory.role} className="rounded-2xl border border-fairwindblue p-4">
              <h3 className="mb-2 text-lg font-semibold">{userStory.role}</h3>
              <p>{userStory.story}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;
