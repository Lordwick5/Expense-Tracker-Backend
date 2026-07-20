import { z } from "zod";
import Expense from "../models/Expense.js";

const expenseInputSchema = z.object({
  item: z.string().min(1, "Item is required"),
  amount: z.number().positive("Amount must be a positive number"),
});

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const addExpense = async (req, res) => {
  const parsed = expenseInputSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const expense = await Expense.create({
      userId: req.user.userId,
      item: parsed.data.item,
      amount: parsed.data.amount,
    });
    return res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateExpense = async (req, res) => {
  const parsed = expenseInputSchema.partial().safeParse(req.body); // partial = allow partial updates

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId }, // ⬅️ ownership check
      parsed.data,
      { new: true },
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    return res.status(200).json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId, // ⬅️ ownership check
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    return res.status(200).json({ message: "Expense deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
