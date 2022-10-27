import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to BetaChat API" });
});

router.post("/error", (req, res) => {
    console.log("API Ran into a Error");
    res.json({ received: true });
});