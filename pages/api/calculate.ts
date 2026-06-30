import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { income, expenses } = req.body;

  const inc = parseFloat(income);
  const exp = parseFloat(expenses);

  if (isNaN(inc) || isNaN(exp) || inc <= 0) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  const savings = inc - exp;
  const ratio = (savings / inc) * 100;

  return res.status(200).json({ savings, ratio });
}
