import React from "react";
export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow mt-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About Backlog Boss</h1>
      <p className="mb-4 text-gray-700">
        Team Name: <span className="font-semibold">Pixel Pioneers</span>
      </p>
      <p className="mb-4 text-gray-700">
        We conceptualized Backlog Boss after realizing our gaming libraries were growing faster than we could play.
        Between Steam sales, console exclusives, and indie bundles, our “to-play” lists became overwhelming.
      </p>
      <p className="mb-4 text-gray-700">
        Our solution is a tool that organizes your backlog, tracks your play sessions, and keeps you motivated with
        progress tracking and estimated completion times. Whether you want to beat every RPG you own or finally finish
        that one platformer, Backlog Boss makes it possible.
      </p>
    </div>
  );
}