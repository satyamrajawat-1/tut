import express from "express";
import Subscription from "../models/Subscription.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const subscription = await Subscription.create(req.body);
  res.status(201).json(subscription);
});

// READ
router.get("/", async (req, res) => {
  const subscriptions = await Subscription.find();
  res.json(subscriptions);
});

// UPDATE (toggle month)
router.put("/:id", async (req, res) => {
  const updated = await Subscription.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Subscription.findByIdAndDelete(req.params.id);
  res.json({ message: "Subscription deleted" });
});

export default router;
