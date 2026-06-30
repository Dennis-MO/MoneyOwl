import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { Button, ActionIcon, SimpleGrid } from "@mantine/core";

export default function Home() {

  
  const cardClass = "w-full bg-white rounded-xl shadow flex flex-col overflow-hidden mt-2";

  const cardimage = "w-full h-50 object-contain mb-2";
  const buttonstyle = "m-4 mt-auto bg-teal-500 text-white text-sm rounded-lg px-4 py-2";

  const buttonformat = "border border-teal-600 rounded-xl p-3 px-4 flex items-center justify-between bg-white";

  const buttontitle = "font-bold text-teal-700 uppercase text-xs flex-1 min-w-0";
  const buttonsubtitle = "text-xs text-gray-500 mt-1 flex-1 min-w-0";

  const actionIconProps = {
    size: 24,
    variant: "filled" as const,  
    color: "#008970", 
    radius: "xl" as const,  
    className: "ml-3",
};


  return (
    <>
      <Head>
        <title>MO Tools and Calculators</title>
        <meta name="description" content="Build and plan your retirement income using CPF LIFE Payouts and Cash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.moneyowl.com.sg/wp-content/uploads/2022/05/MO_Favicon.png" />
      </Head>

      {/*BANNER*/}
<div className="relative w-full">
  <img 
    src="https://www.moneyowl.com.sg/wp-content/uploads/2026/06/banner-detailed-buildings-3.png" 
    alt="Banner" 
    className="w-full object-cover h-48" 
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
    <span className="font-extrabold text-xl text-white whitespace-nowrap">Tools &amp; Calculators</span>
    <span className="font-medium text-xs text-white">Explore our free tools to plan your savings, insurance/investments and property.</span>
  </div>
</div>



      {/*3 Cards*/}
      <main
        className="min-h-screen bg-teal-50 flex items-start justify-center p-6 relative overflow-hidden w-full"
>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" className="w-full max-w-4xl">

            {/*First Card*/}
            <div className={cardClass}>
              <img src="https://www.moneyowl.com.sg/wp-content/uploads/2025/07/Header_Budgeting.png" alt="card image" className={cardimage} />
                   <div className="mt-4 flex flex-col gap-4 px-4 pb-4">
                    <div className={buttonformat}>
                      <div>
                      <h3 className={buttontitle}>Emergency Fund</h3>
                        <p className={buttonsubtitle}>How long will your cash last you?</p>
                      </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                      </div>
                    <Link href ="/savings_ratio">
                    <div className={buttonformat}>
                    <div>
                      <h3 className={buttontitle}>Savings Ratio</h3>
                        <p className={buttonsubtitle}>Are you saving enough?</p>
                    </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                  </div>
                  </Link>

                  <div className={buttonformat}>
                    <div>
                      <h3 className={buttontitle}>Savings Goal</h3>
                        <p className={buttonsubtitle}>How much to save up for your future goals?</p>
                    </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                  </div>
                  </div>
                  </div>

            {/*Second Card*/}
            <div className={cardClass}>
              <img src="https://www.moneyowl.com.sg/wp-content/uploads/2025/07/Header_Insurance-Investment.png" alt="card image" className={cardimage} />
                   <div className="mt-4 flex flex-col gap-4 px-4 pb-4">
                    <div className={buttonformat}>
                      <div>
                      <h3 className={buttontitle}>Insurance Calculator</h3>
                        <p className={buttonsubtitle}>Understand your needs. Identify your coverage gaps.</p>
                      </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                      </div>

                    <div className={buttonformat}>
                    <div>
                      <h3 className={buttontitle}>Investment Risk Profiler</h3>
                        <p className={buttonsubtitle}>Discover what kind of investor are you and get portfolio recommendation.</p>
                    </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                  </div>
                  </div>
                  </div>

            {/*Third Card*/}
            <div className={cardClass}>
              <img src="https://www.moneyowl.com.sg/wp-content/uploads/2025/07/Header_Housing.png" alt="card image" className={cardimage} />
                   <div className="mt-4 flex flex-col gap-4 px-4 pb-4">
                    <div className={buttonformat}>
                      <div>
                      <h3 className={buttontitle}>HDB Resale Planner</h3>
                        <p className={buttonsubtitle}>Find your HDB resale grants and plan your finances with confidence.</p>
                      </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                      </div>

                    <div className={buttonformat}>
                    <div>
                      <h3 className={buttontitle}>HDB BTO PLANNER</h3>
                        <p className={buttonsubtitle}>Estimate your eligible grants, loan amount, and maximum BTO price you can afford.</p>
                    </div>
                     <ActionIcon {...actionIconProps} aria-label="Settings">
                      <MdArrowForward size={12} />
                     </ActionIcon>
                  </div>
                  </div>
                  </div>

          </SimpleGrid>
      </main>
    </>
  );
}
