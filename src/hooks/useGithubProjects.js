import { useState, useEffect } from "react";

const DEMO_URLS = {
  "Todo-App-MERN": "https://todo-app-mern-liart.vercel.app/",
  "first-contributions": null,
  "ai-hygiene-system": null,
  "cartiq-backend": "https://cartiq-backend.onrender.com/",
  "cartiq-frontend": "https://cartiq-frontend.vercel.app/",
  "My-Portfolio": "https://my-portfolio-abhishek-85.vercel.app/",
  "Plan-AI": "https://plan-ai-tan.vercel.app/",
  "ResumeAI": "https://resumeai-sck8.onrender.com/",
  "Digital-Wishlist-Platform": "https://digital-wishlist-platform.onrender.com/dashboard.html",
};

export function useGithubProjects(username) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          // Fallback if API rate limit exceeded
          setProjects([
            { name: "Portfolio Website", description: "Modern animated portfolio", html_url: "#", full_name: `${username}/portfolio`, category: "Frontend", demo: null },
            { name: "Todo-App-MERN", description: "To Do app using MERN STACK", html_url: `https://github.com/${username}/Todo-App-MERN`, full_name: `${username}/Todo-App-MERN`, category: "Full Stack", demo: "https://todo-app-mern-liart.vercel.app/" },
            { name: "first-contributions", description: "I have made changes in first contribution", html_url: `https://github.com/${username}/first-contributions`, full_name: `${username}/first-contributions`, category: "Full Stack", demo: null },
            { name: "ai-hygiene-system", description: "Full-stack app using Google Gemini AI for skin condition analysis and cleanliness detection.", html_url: `https://github.com/${username}/ai-hygiene-system`, full_name: `${username}/ai-hygiene-system`, category: "Full Stack", demo: null },
            { name: "cartiq-backend", description: "Backend for CartIQ, an intelligent shopping assistant that provides personalized product recommendations and price comparisons.", html_url: `https://github.com/${username}/cartiq-backend`, full_name: `${username}/cartiq-backend`, category: "Full Stack", demo: "https://cartiq-backend.onrender.com/" },
            { name: "cartiq-frontend", description: "Frontend for CartIQ, an intelligent shopping assistant that provides personalized product recommendations and price comparisons.", html_url: `https://github.com/${username}/cartiq-frontend`, full_name: `${username}/cartiq-frontend`, category: "Full Stack", demo: "https://cartiq-frontend.vercel.app/" },
            { name: "My-Portfolio", description: "Modern animated portfolio", html_url: `https://github.com/${username}/My-Portfolio/`, full_name: `${username}/My-Portfolio`, category: "Frontend", demo: "https://my-portfolio-abhishek-85.vercel.app/" },
            { name: "Plan-AI", description: "AI-powered task management app that uses natural language processing to help users organize and prioritize their to-do lists effectively.", html_url: `https://github.com/${username}/Plan-AI`, full_name: `${username}/Plan-AI`, category: "Full Stack", demo: "https://plan-ai-tan.vercel.app/" },
            { name: "ResumeAI", description: "ResumeAI Analyzer is a full-stack web application that uses artificial intelligence to help users create and improve their resumes.", html_url: `https://github.com/${username}/ResumeAI`, full_name: `${username}/ResumeAI`, category: "Full Stack", demo: "https://resumeai-sck8.onrender.com/" },
            { name: "Digital-Wishlist-Platform", description: "Digital Wishlist Platform is a modern e-commerce application that allows users to create and share personalized product wishlists with friends and family.", html_url: `https://github.com/${username}/Digital-Wishlist-Platform`, full_name: `${username}/Digital-Wishlist-Platform`, category: "Full Stack", demo: "https://digital-wishlist-platform.onrender.com/dashboard.html" },
          ]);
          return;
        }

        setProjects(
          data.slice(0, 12).map((p) => ({
            ...p,
            category: "Full Stack",
            demo: DEMO_URLS[p.name] || null,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, [username]);

  return projects;
}
