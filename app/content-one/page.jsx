import React from "react";
import Image from "next/image";

function PortfolioProjectPage() {
  return (
    <div className="mt-[100px]">
      {/* Blue Background with Phone Image */}
      <div className="relative bg-[#0078D4] h-[500px] sm:h-[600px] w-full overflow-hidden">
        <Image
          src="/assets/phone1.png"
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Background
            </h3>
            <p className="text-[#464646] text-[18px] leading-relaxed">
              Union Bank’s had a goal to capture the younger demographic on
              their digital channels (from NYSC corpers to working
              professionals). One of the tactics in their strategy was to
              modernise how they offered loans. The bank historically relied{" "}
              <br />
              on a fully manual process, using physical documentation and Excel
              sheets to evaluate loan eligibility and process <br />
              disbursement.
            </p>
            <p className="mt-4 text-[18px] text-[#464646] leading-relaxed">
              Recognising that their consistent and effective, yet unscalable
              manual process was holding them back, the bank aimed to develop a
              digital solution that would streamline loan disbursement.
            </p>
          </div>

          <hr className="border-t border-gray-400" />

          {/* Context */}
          <div>
            <h3 className="text-[#262626] text-[32px] font-bold mb-4">
              Context
            </h3>
            <p className="text-[#464646] text-[18px] leading-relaxed">
              As the sole designer on the project, I was tasked with the
              end-to-end design of the project. From research through UX/UI
              design, prototyping, and testing. I reported to the lead designer
              and Head of Retail Department. I worked closely with key
              stakeholders, especially the retail loans team, to ensure that the
              product not only looked great but solved real business challenges.
            </p>
          </div>
        </div>
      </section>
      {/* Challenges and Considerations Section */}
      {/* Challenges and Considerations Section */}
      <section className="bg-[#EFE5FB] text-black py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="!text-[32px] text-[#101010] sm:text-3xl font-bold mb-4">
            Challenges and Considerations
          </h2>
          <p className="text-[#464646] text-[18px] mb-12 sm:text-base">
            The project presented a few notable challenges and areas to ponder
            about
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
              <img
                src="/assets/flag.png"
                alt="Manual Process Icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-bold text-[#646464] text-[18px] mb-2">
                Manual Process Limitations
              </h3>
              <p className="text-[12px] text-[#464646]">
                Even though the existing eligibility logic was consistent and
                effective, it was labor-intensive and couldn’t scale, as each
                applicant was evaluated one at a time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
              <img
                src="/assets/user-check.png"
                alt="Infrastructure Icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-bold text-[#646464] text-[18px] mb-2">
                Infrastructure
              </h3>
              <p className="text-[12px] text-[#464646]">
                The bank was in the process of modernising its digital systems.
                This meant the solution had to work with legacy limitations
                while being open to future scalability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center">
              <img
                src="/assets/timer.png"
                alt="Automation Icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-bold text-[#646464] text-[18px] mb-2">
                Automation Needs
              </h3>
              <p className="text-[12px] text-[#464646]">
                The internal teams weren’t resistant to change—they simply
                needed a seamless way to automate the current process without
                disrupting existing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-black py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Process and Approach
          </h2>
          <p className="text-gray-700 text-center mb-12 text-sm sm:text-base">
            To build a robust MVP suited for a younger demographic, I structured
            my approach around solid user and stakeholder insights:
          </p>

          {/* User Research and Pain Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-4">
              {/* Box: USER RESEARCH Title */}
              <div className="bg-white border rounded-md p-6">
                <h3 className="text-2xl font-extrabold leading-snug">
                  USER
                  <br />
                  RESEARCH
                </h3>
              </div>

              {/* Box: Paragraph */}
              <div className="bg-white border rounded-md p-6 text-sm text-gray-700">
                <p className="leading-relaxed mb-4">
                  To design a feature that will be suitable for a younger
                  demographic, I took my time to understand what the business
                  had to offer versus what users pain points, preferences, and
                  expectations for a digital loan application experience were.
                </p>
                <p className="leading-relaxed">
                  The insights gathered helped me to better structure my
                  solution to the problem.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#F3EBFD] border rounded-md p-6 text-sm text-gray-800">
              <h3 className="text-xl font-extrabold mb-4">
                Customer Pain Points
              </h3>
              <ol className="list-decimal list-outside pl-5 space-y-4">
                <li>
                  <strong>Lengthy and Cluttered Forms:</strong>{" "}
                  <span className="pl-5 block">
                    Traditional loan applications that require filling out too
                    many fields, often repeating information that’s already on
                    file.
                  </span>
                </li>
                <li>
                  <strong>Confusing Eligibility Criteria:</strong>{" "}
                  <span className="pl-5 block">
                    Applicants don’t usually get the exact requirements for loan
                    approval, leading to uncertainty, hesitation and decline.
                  </span>
                </li>
                <li>
                  <strong>Slow Processing Times:</strong>{" "}
                  <span className="pl-5 block">
                    Most traditional bank issued loans can’t cater to
                    emergencies.
                  </span>
                </li>
                <li>
                  <strong>Lack of Transparency:</strong>{" "}
                  <span className="pl-5 block">
                    The breakdown of fees, costs, and repayment terms are
                    usually vague till it is time to pay.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Loan Flow Image */}
          <div className="bg-gray-100 rounded-lg p-6 mb-12">
            <img
              src="/assets/flow.png"
              alt="Existing Loan Flow Diagram"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Business Expectations */}
          <div className="bg-[#FCFDE8] rounded-lg p-6 max-w-lg text-sm shadow w-[350px]">
            <h3 className="font-bold text-[25px] mb-3">
              Business Expectations
            </h3>
            <ul className="[text-indent:-1.1em] pl-[1.1em] list-decimal list-inside space-y-1 text-[12px] text-[#101010]">
              <li>
                A seamless end-to-end process to replace
                <br /> existing flow.
              </li>
              <li>
                Backoffice tool to manage loan requests <br /> and users.
              </li>
              <li>A scalable option beyond efficient excel.</li>
              <li>More borrowers.</li>
            </ul>
          </div>
        </div>
      </section>

{/* Design Approach Section */}
{/* Design Approach Section */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-8">
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Design Approach</h2>
       <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0] mb-4">
              I drafted a simple, minimalist user flow that enabled customers to
              quickly check their eligibility without being bogged down by
              excessive data entry. The flow was designed to reduce friction and
              deliver a modern, efficient experience.
            </p>
            <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0] mb-4">
              Upon review of the flow with the engineers and product owners, we
              ideated a better and more seamless approach to the process by
              creating a pre-approval system. This meant that the backend team
              would build an engine to automate the approval process from the
              excel sheet and the customers would be notified of their
              eligibility before they even applied.
            </p>
            <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
              This approach would serve as both a marketing effort and process
              starter. With this in mind, I fine-tuned the user flow to cater to
              this, making it far more straightforward.
            </p>
    </div>

    <div>
      <Image
        src="/assets/digital.png"
        alt="Digital application process flow"
        width={1000}
        height={400}
        className="mx-auto w-full h-auto object-contain"
      />
    </div>
  </div>
</section>

{/* Emphasis on Transparency */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Emphasis on Transparency</h2>
    <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
            I chose to prominently present fee structures, and repayment details
            within the application process. This decision was essential to
            create clarity and build trust among users and provide clear
            expectations right from the outset.
          </p>
    <Image
      src="/assets/emphasis.png"
      alt="Loan application screens"
      width={1200}
      height={800}
      className="mx-auto w-full h-auto object-contain"
    />
  </div>
</section>

{/* High Fidelity Designs */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">High Fidelity Designs</h2>
    <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0] mb-6">
            Here’s a preview of how we solved the challenge areas with the
            design:
          </p>

    <ul className="list-disc pl-4 sm:pl-6 space-y-10 sm:space-y-12 text-sm sm:text-base !text-[#A0A0A0]">
      <li> Prompt users from their dashboard to be able to request for loans
              once they have been certified eligible backend. Prompt users from their dashboard...
        <div className="mt-4 sm:mt-6">
          <Image
            src="/assets/fidelity.png"
            alt="High fidelity design - dashboard eligibility"
            width={1200}
            height={800}
            className="mx-auto w-full h-auto object-contain"
          />
        </div>
      </li>

      <li>
        Applying for loans as a youth corper
        <div className="mt-4 sm:mt-6">
          <Image
            src="/assets/youth.png"
            alt="High fidelity design - youth corper flow"
            width={1200}
            height={800}
            className="mx-auto w-full h-auto object-contain"
          />
        </div>
      </li>

      <li>
         The flow that caters to other loan types; with this, we aimed to
              get customers to take loans with us in as quickly as 3-steps.
        <div className="mt-4 sm:mt-6">
          <Image
            src="/assets/carters.png"
            alt="High fidelity design - 3 step loan flow"
            width={1200}
            height={800}
            className="mx-auto w-full h-auto object-contain"
          />
        </div>
      </li>
    </ul>
  </div>
</section>

{/* Testing */}
<section className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-6">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Testing</h2>
       <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
            We had guerrilla tests done with the low fidelity wireframes – to
            validate the plan structured out in the design. Then another round
            of tests with more stakeholders and product owners to review what
            the result looked like. App content/copy recommendations were made
            by the UX writing team of the bank’s communication department, after
            which the final designs were presented to the bank’s management for
            approval and recommendations.
          </p>
  </div>
</section>

{/* Gains */}
<section className="bg-[#111111] text-white py-4 sm:py-4 px-4 sm:px-10">
  <div className="max-w-5xl mx-auto space-y-6">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Gains, learnings and future plans</h2>
     <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
            I had to learn a different approach to get buy-in for my design
            ideas. I was having to deal with industry experts in different
            banking areas, as well as management staff who were not keen on
            taking a lot of risk to give out loans at scale to customers who
            they didn’t deem fit. I leveraged information gained from
            competition, metrics on potential gains from exploring the venture,
            as well as how risk was to be averted with our designed flows to get
            buy in from relevant stakeholders.
          </p>
          <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
            I gained key insights into the lending space – both from the banking
            perspective as well as fintech perspective. It was an interesting
            task to marry all that information to birth ideas that would
            leverage the strengths of both sides.
          </p>
          <p className="text-sm sm:text-base leading-relaxed !text-[#A0A0A0]">
            I had to prototype a lot and make changes on the go as I was working
            with stakeholder feedback to fine-tune my work within a short time,
            before having to present to management. We succeeded in getting
            approval for development. Yay!
          </p>
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

export default PortfolioProjectPage;
