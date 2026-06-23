import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Retirement Income Builder</title>
        <meta name="description" content="Build and plan your retirement income using CPF LIFE Payouts and Cash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="shimmer-bg min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      >
        {/* Decorative orbs */}
        <div className="orb-a absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "#7c3aed" }} />
        <div className="orb-b absolute bottom-[-60px] right-[-60px] w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "#e8894a" }} />

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

            {/* Left — content */}
            <div className="flex-1 p-10 flex flex-col justify-center gap-6">
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-wide leading-tight text-gray-600">
                  Retirement Income Builder
                </h1>
                <p className="mt-3 text-sm text-gray-700/70 leading-relaxed">
                  Build and plan your retirement income using CPF LIFE Payouts and Cash
                </p>
              </div>

              <div>
                <p className="text-xs text-white/50 mb-2">Suitable For:</p>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline" style={{ borderColor: "#f4a76a", color: "#f4a76a" }}>
                    AGES UP TO 55
                  </div>
                  <div className="badge badge-outline" style={{ borderColor: "#5cb8ab", color: "#5cb8ab" }}>
                    EMPLOYED PERSONS
                  </div>
                </div>
              </div>

              <button
                className="btn w-full text-white text-base"
                style={{ backgroundColor: "#2d7d6e", borderColor: "#2d7d6e" }}
              >
                Let&apos;s go
              </button>

            </div>

            {/* Right — illustration */}
            <div className="w-full md:w-72 flex items-center justify-center p-6" style={{ background: "rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.3)" }}>
              <Image
                src="https://www.moneyowl.com.sg/wp-content/uploads/2025/10/Image_StartPage2.png"
                alt="Retirement planning illustration"
                width={280}
                height={280}
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
