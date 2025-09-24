import React from "react";
import Image from "next/image";

function PortfolioProjectPage2() {
  return (
    <div className="mt-[100px]">
      {/* Blue Background with Phone Image */}
      <div className="relative bg-[#0078D4] h-[500px] sm:h-[600px] w-full overflow-hidden">
        <Image
          src="/assets/uniedu.svg"
          alt="Phone mockup"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Key Takeaways Section */}
      <section className="bg-[#111111] text-white py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          KEY TAKEAWAYS FROM PROJECT
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sector Card */}
          <div className="bg-white text-black rounded-lg p-6 flex mt-3 gap-4 h-[80%]">
            <img src="/assets/flag.png" alt="Sector Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-lg mb-1">Sector</h3>
              <p className="text-[12px] text-[#464646]">Banking - Lending</p>
            </div>
          </div>

          {/* Need Card */}
          <div className="bg-white text-black rounded-lg p-6 flex items-start gap-4">
            <img
              src="/assets/user-check.png"
              alt="Need Icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-bold text-lg mb-1">Need</h3>
              <p className="text-[12px] text-[#464646]">
                An assessment platform that supports different hiring use cases
                in different countries
              </p>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-white text-black rounded-lg p-6 flex items-start gap-4">
            <img
              src="/assets/timer.png"
              alt="Result Icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-bold text-lg mb-1">Result</h3>
              <p className="text-[12px] text-[#464646]">
                Global improvements in time-to-fill, quality-of-hire, and hiring
                success rates
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Background and Context Section */}
      <section className="bg-[#FCFDE8] text-black py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Background */}
          <div>
            <h3 className="text-[#262626] text-[32px] font-bold mb-4">
              Project Overview
            </h3>
            <p className="text-[#464646] text-[18px] leading-relaxed">
            Unify is a mobile-first platform built to centralize academic management for university students. From course registration and fee payments to result checks and lecturer messaging, the app helps students handle their academic responsibilities from anywhere.
             It also caters to lecturers and guardians, fostering a more transparent and connected 
             university experience.
            </p>
          
          </div>

          <hr className="border-t border-gray-400" />

          {/* Context */}
          <div>
            <h3 className="text-[#262626] text-[32px] font-bold mb-4">
              Problem
            </h3>
            <p className="text-[#464646] text-[18px] leading-relaxed">
             Universities were still largely dependent on manual or fragmented systems—long queues
             for payments, in-person course registration, and lack of communication tools between 
             students, faculty, and guardians.
            </p>
          </div>
        </div>
      </section>
      {/* Challenges and Considerations Section */}
      {/* Challenges and Considerations Section */}
     {/* Objectives of the Project Section */}
<section className="bg-[#EFE5FB] text-black py-16 px-6 sm:px-10">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
      Objectives of the Project
    </h2>
    <p className="text-[#464646] text-[16px] sm:text-[18px] mb-12">
      I synced with the team that needed this built and fine-tuned their expectations to
      the following objectives
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
        <img
          src="/assets/icon11.svg"
          alt="Mobile Icon"
          className="w-10 h-10 mb-4"
        />
        <h3 className="font-semibold text-[#101010] text-[16px]">
          Centralize academic activities in one mobile experience
        </h3>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
        <img
          src="/assets/icon22.svg"
          alt="Graduation Icon"
          className="w-10 h-10 mb-4"
        />
        <h3 className="font-semibold text-[#101010] text-[16px]">
          Digitize admission-to-graduation processes
        </h3>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
        <img
          src="/assets/icon33.svg"
          alt="Communication Icon"
          className="w-10 h-10 mb-4"
        />
        <h3 className="font-semibold text-[#101010] text-[16px]">
          Improve student-to-lecturer communication
        </h3>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
        <img
          src="/assets/icon44.svg"
          alt="Platform Icon"
          className="w-10 h-10 mb-4"
        />
        <h3 className="font-semibold text-[#101010] text-[16px]">
          Create a scalable foundation for a university management platform
        </h3>
      </div>
    </div>
  </div>
</section>

     {/* Process and Approach Section */}
{/* Personas Section */}
{/* Personas Section */}
{/* Personas Section */}
<section className="bg-white text-black py-16 px-6 sm:px-10">
  <div className="max-w-5xl mx-auto">
    {/* Main Heading */}
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
      Process and Approach
    </h2>

    {/* Subheading */}
    <h3 className="text-lg sm:text-xl font-semibold mb-4">
      Understanding the users
    </h3>

    {/* Paragraph */}
    <p className="text-gray-800 mb-6 leading-relaxed">
      To be able to create an experience that the users of Unify will love, we sought
      to find out about the people that will be using the platform to understand their
      goals, constraints and expectations – we conducted:
    </p>

    {/* Bullet Points */}
    <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
      <li>Interviews with students from public/private universities.</li>
      <li>Stakeholder discussions on existing processes.</li>
      <li>
        Creation of multiple personas, such as Fresh Applicants, Enrolled Students,
        and Faculty Members.
      </li>
    </ul>

    {/* Closing Line */}
    <p className="text-gray-800 leading-relaxed mb-10">
      The summary of the research led us to create personas of our different user types
    </p>

    {/* Persona Images */}
    <div className="flex flex-col gap-10">
      <img
        src="/assets/bio.svg"
        alt="Persona - Sandra Utako"
        className="rounded-xl w-full h-auto shadow-md"
      />
      <img
        src="/assets/bio2.svg"
        alt="Persona - Prof. John Kitanu"
        className="rounded-xl w-full h-auto shadow-md"
      />
      <img
        src="/assets/bio3.svg"
        alt="Persona - Parent"
        className="rounded-xl w-full h-auto shadow-md"
      />
    </div>
  </div>
</section>




{/* Design Approach Section */}
{/* Design Approach Section */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-8">
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Direction</h2>
       <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0] mb-4">
            We explored on a high level how universities operate today, identifying pain points 
            and building journey maps across stakeholders. Ideation sessions helped us prioritise 
            high-impact features that were both feasible and scalable.

            </p>
            <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0] mb-4">
          
              We selected the following features as core to 
            </p>
        
    </div>

    <div>
      <Image
        src="/assets/feature1.svg"
        alt="Digital application process flow"
        width={1000}
        height={400}
        className="mx-auto w-full h-auto object-contain"
      />
    </div>
  </div>
</section>

{/* Design Process */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Design Process</h2>

    <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-3xl">
      With two designers and tight deadlines, we adopted a parallel design and
      component-building process, which meant:
    </p>

    <ul
      className="
        mt-3 sm:mt-4
        list-disc pl-5
        text-[#A0A0A0] text-sm sm:text-base
        space-y-1.5 sm:space-y-2
        marker:text-[#777] marker:align-middle
      "
    >
      <li>Dividing flows and UI responsibilities.</li>
      <li>Iterating on UI components as they were built.</li>
      <li>Maintaining cohesion through regular design reviews.</li>
    </ul>
  </div>
</section>



{/* Design Decisions */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Design Decisions</h2>

    {/* Onboarding from Day Zero */}
    <Image
      src="/assets/mobile1.svg"
      alt="Onboarding from Day Zero"
      width={1200}
      height={800}
      className="w-full h-auto object-contain rounded-xl"
    />

    {/* Built-in Communication Tools */}
    <Image
      src="/assets/mobile2.svg"
      alt="Built-in Communication Tools"
      width={1200}
      height={800}
      className="w-full h-auto object-contain rounded-xl"
    />

    {/* Course Management System */}
    <Image
      src="/assets/mobile3.svg"
      alt="Course Management System"
      width={1200}
      height={800}
      className="w-full h-auto object-contain rounded-xl"
    />
  </div>
</section>



{/* Testing */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Testing</h2>
    <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
      Due to tight deadlines, we ran quick tests on UI flows internally with engineers
      and product managers. This allowed us to get rapid validation and tweak
      high-priority flows like registration and payments. Add visual: A/B tested
      screens or version comparisons.
    </p>
  </div>
</section>

{/* Gains */}
<section className="bg-[#111111] text-white py-12 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Gains</h2>
    <ul className="list-disc list-inside text-[#A0A0A0] text-sm sm:text-base space-y-1.5 ml-2">
      <li>Proved out a scalable framework for a full University-as-a-Service platform.</li>
      <li>Laid the groundwork for onboarding institutions into a unified academic management system.</li>
      <li>Received positive internal feedback from <em>early user interactions</em> and test sessions.</li>
      <li>I was able to execute a near marathon project with a good design process.</li>
    </ul>
  </div>
</section>

{/* Learnings */}
<section className="bg-[#111111] text-white py-12 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Learnings</h2>
    <ul className="list-disc list-inside text-[#A0A0A0] text-sm sm:text-base space-y-1.5 ml-2">
      <li>Working without a design system made consistency harder; we had to manually sync styles frequently.</li>
      <li>Designing for 3 different personas (students, faculty, guardians) forced us to zoom out and build modular features.</li>
    </ul>
  </div>
</section>

{/* Future Plans */}
<section className="bg-[#111111] text-white py-12 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Future Plans</h2>
    <ul className="list-disc list-inside text-[#A0A0A0] text-sm sm:text-base space-y-1.5 ml-2">
      <li>Broader user testing across multiple schools.</li>
      <li>Exploring integration with national academic records systems.</li>
      <li>Building a robust design system for future iterations.</li>
    </ul>
  </div>
</section>

{/* Project Navigation + Credit */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-8">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <a href="#" className="text-sm text-[#E0E0E0] flex items-center gap-2">
        ← Previous
      </a>
      <Image
        src="/assets/Unify.svg"
        alt="Next Project - Unify"
        width={320}
        height={100}
        className="object-contain w-full sm:w-auto"
      />
    </div>

    <hr className="border-t border-[#333]" />
    <p className="text-center text-xs text-[#A0A0A0]">©2025 Samuel Umoru</p>
  </div>
</section>

    </div>
  );
}

export default PortfolioProjectPage2;
