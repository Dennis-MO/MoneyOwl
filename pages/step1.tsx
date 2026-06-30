import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "../context/FormContext";

export default function Step1() {
  const { income, expenses, setIncome, setExpenses } = useForm();
  const [result, setResult] = useState<{ savings: number; ratio: number } | null>(null);

  async function handleCalculate() {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ income, expenses }),
    });
    const data = await response.json();
    setResult(data);
  }

  return (
    <>
      <Head>
        <title>Savings Ratios</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦉</text></svg>" />
      </Head>

      <main className="min-h-screen flex items-center justify-center p-6 bg-white">

        {/* Card */}
        <div
          className="rounded-2xl w-full max-w-3xl overflow-hidden relative z-10 bg-gray-200/85"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          <div className="flex flex-col md:flex-row">

            {/* Left column */}
            <div className="flex-1 p-10 flex flex-col justify-center gap-6">

              {/* Income field */}
              <div className="flex flex-col gap-2">
                <h2 className="text-base font-bold text-teal-brand">
                  How much do you earn each month?
                </h2>
                <p className="text-sm text-gray-500">
                  Enter your monthly gross income, before CPF deduction.
                </p>
                <div className="flex items-center rounded-lg px-4 py-3 gap-2"
                  style={{ border: "1.5px solid #5cb8ab", background: "rgba(92,184,171,0.08)" }}>
                  <span className="text-gray-400 font-medium">$</span>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-700"
                  />
                </div>
              </div>

              {/* Expenses field */}
              <div className="flex flex-col gap-2">
                <h2 className="text-base font-bold text-teal-brand">
                  How much do you spend each month?
                </h2>
                <p className="text-sm text-gray-500">
                  Enter your monthly expenses
                </p>
                <div className="flex items-center rounded-lg px-4 py-3 gap-2"
                  style={{ border: "1.5px solid #5cb8ab", background: "rgba(255,255,255,0.7)" }}>
                  <span className="text-gray-400 font-medium">$</span>
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-700"
                  />
                </div>
              </div>

              {/* Result — shown after Calculate is clicked */}
              {result && (
                <div className="rounded-xl p-4 flex gap-6"
                  style={{ background: "rgba(92,184,171,0.12)", border: "1px solid #5cb8ab" }}>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Monthly Savings</p>
                    <p className="text-2xl font-bold text-teal-brand">
                      ${result.savings.toLocaleString("en-SG")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Savings Ratio</p>
                    <p className="text-2xl font-bold text-teal-brand">
                      {result.ratio.toFixed(1)}%
                    </p>
                  </div>
                </div>
              )}

              {/* Calculate button */}
              <button
                onClick={handleCalculate}
                className="btn w-full text-white text-base bg-teal-brand border-teal-brand"
              >
                Calculate
              </button>

            </div>

            {/* Right column */}
            <div className="w-full md:w-72 flex flex-col items-center justify-center gap-4 p-8"
              style={{ background: "rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.3)" }}>
              <Image
                src="https://www.moneyowl.com.sg/wp-content/uploads/2025/07/SavingRatios.png"
                alt="Savings ratio calculator illustration"
                width={220}
                height={220}
                className="w-full h-auto object-contain"
              />
              <h2 className="text-lg font-bold text-gray-700 text-center">
                Savings Ratio Calculator
              </h2>
              <p className="text-sm text-center text-teal-brand">
                Just enter the details, and we&apos;ll do the math for you!
              </p>
            </div>

          </div>
        </div>

      </main>
    </>
  );
}
