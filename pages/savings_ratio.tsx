import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Title, ActionIcon, Grid, Text, Button,
  NumberInput, Paper, Stack, Group, Flex,
} from "@mantine/core";
import { PieChart } from "@mantine/charts";
import { MdArrowBack } from "react-icons/md";


export default function Step1() {
  const router = useRouter();
  // NumberInput returns number | string — number when valid, "" when empty
  const [income, setIncome] = useState<number | string>("");
  const [expenses, setExpenses] = useState<number | string>("");
  const [result, setResult] = useState<{ savings: number; ratio: number } | null>(null);


  function handleCalculate() {
    const inc = typeof income === "number" ? income : NaN;
    const exp = typeof expenses === "number" ? expenses : NaN;
    if (isNaN(inc) || isNaN(exp) || inc <= 0) return;
    const savings = inc - exp;
    const ratio = (savings / inc) * 100;
    setResult({ savings, ratio });
  }

  const actionIconProps = {
    size: 40,
    variant: "filled" as const,
    color: "#008970",
    radius: "xl" as const,
    className: "ml-3",
  };

  return (
    <>
      <Head>
        <title>Savings Ratios</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦉</text></svg>" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-start p-6 bg-white">

        <Grid className="w-full max-w-3xl mb-10" align="center">
          <Grid.Col span={4}>
            <ActionIcon {...actionIconProps} onClick={() => router.push("/")} aria-label="Go back">
              <MdArrowBack size={24} />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title size="h2" ta="center">Savings Ratio</Title>
            <Text size="sm" fw={400} c="dimmed" mt={10} ta="center">Calculate your savings ratio and find out if youre saving enough.</Text>
          </Grid.Col>
          <Grid.Col span={4} />
        </Grid>

        {/* Outer card — Paper replaces the raw div */}
        <Paper
          className="w-full max-w-3xl"
          radius="xl"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.6) inset",
            background: "rgba(209,213,219,0.85)",
            overflow: "hidden",
          }}
        >
          {/* Flex replaces the flex flex-col md:flex-row div */}
          <Flex direction={{ base: "column", md: "row" }}>

            {/* Left column — Stack replaces flex flex-col gap-6 */}
            <Stack p={40} gap="md" style={{ flex: 1 }}>

              {/* NumberInput replaces h2 + p + div + input */}
              <NumberInput
                label="How much do you earn each month?"
                description="Enter your take home income, after CPF deduction."
                leftSection="$"
                value={income}
                onChange={setIncome}
                min={0}
                hideControls
                thousandSeparator=","
                inputMode="numeric"
                styles={{
                  label: { fontWeight: 700, color: "#008970", fontSize:14},
                  input: { border: "1.5px solid #5cb8ab", background: "rgba(92,184,171,0.08)",fontSize:16 },
                }}
              />

              <NumberInput
                label="How much do you spend each month?"
                description="Enter your monthly expenses"
                leftSection="$"
                value={expenses}
                onChange={setExpenses}
                min={0}
                hideControls
                thousandSeparator=","
                inputMode="numeric"
                styles={{
                  label: { fontWeight: 700, color: "#008970",fontSize:14 },
                  input: { border: "1.5px solid #5cb8ab", background: "rgba(255,255,255,0.7)",fontSize:16 },
                }}
              />

              {/* Button replaces raw <button> */}
              <Button onClick={handleCalculate} fullWidth color="#008970" size="md">
                Calculate
              </Button>

            </Stack>

            {/* Right column */}
            <Stack
              align="center"
              justify="center"
              gap="md"
              p={32}
              className="w-full md:w-72"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.3)", 
                flex: 1
              }}
            >
              {!result ? (
                // Before calculate — show illustration
                <>
                  <Image
                    src="https://www.moneyowl.com.sg/wp-content/uploads/2025/07/SavingRatios.png"
                    alt="Savings ratio calculator illustration"
                    width={150}
                    height={150}
                    className="h-auto object-contain"
                  />
                  <Text size="sm" ta="center" c="#008970">
                    Just enter the details, and we&apos;ll do the math for you!
                  </Text>
                </>
              ) : (
                // After calculate — show pie chart breakdown
                <>
                  
                  <Text fw={700} c="gray.7" ta="center">Your Breakdown</Text>

                  <PieChart
                    size={180}
                    startAngle={90}
                    endAngle={-270}
                    data={[
                      { name: "Expenses", value: typeof expenses === "number" ? expenses : 0, color: "#f87171" },
                      { name: "Savings", value: result.savings > 0 ? result.savings : 0, color: "#008970" },
                    ]}
                    withTooltip
                    tooltipDataSource="segment"
                  />

                  <Group gap="xl" justify="center">
                    <Stack gap={2} align="center">
                      <Group gap={6}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#008970" }} />
                        <Text size="xs" c="dimmed">Savings</Text>
                      </Group>
                      <Text size="sm" fw={700} c="#008970">${result.savings.toLocaleString("en-SG")}</Text>
                    </Stack>
                    <Stack gap={2} align="center">
                      <Group gap={6}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f87171" }} />
                        <Text size="xs" c="dimmed">Expenses</Text>
                      </Group>
                      <Text size="sm" fw={700} c="#f87171">${(typeof expenses === "number" ? expenses : 0).toLocaleString("en-SG")}</Text>
                    </Stack>
                  </Group>

                  <Paper
                    p="md"
                    radius="md"
                    w="100%"
                    style={{ background: "rgba(92,184,171,0.12)", border: "1px solid #5cb8ab" }}
                  >
                    <Group gap="xl" justify="center">
                      <Stack gap={4} align="center">
                        <Text size="xs" c="dimmed" tt="uppercase" style={{ letterSpacing: "0.05em" }}>
                          Savings Ratio
                        </Text>
                        <Text size="xl" fw={700} c="#008970">
                          {result.ratio.toFixed(1)}%
                        </Text>
                      </Stack>
                    </Group>
                  </Paper>

                  {result.ratio < 20 && (
                    <Paper p="sm" radius="md" w="100%" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid #f87171" }}>
                      <Text size="xs" ta="center" c="#dc2626" fw={500}>
                        Your savings ratio is below 20%. Try to save at least 20% of your income for a healthy financial buffer.
                      </Text>
                    </Paper>
                  )}
                </>
              )}
            </Stack>

          </Flex>
        </Paper>

      </main>
    </>
  );
}
