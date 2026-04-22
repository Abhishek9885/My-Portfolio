import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "99197062-b1e6-4784-b8a7-5a561028434a",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Failed to send message. Please check your internet connection.");
    }
  };

  const inputBase = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(56,189,248,0.2)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#e0eaff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
    fontFamily: "inherit",
  };
  const focusedStyle = { borderColor: "rgba(56,189,248,0.7)", boxShadow: "0 0 0 3px rgba(56,189,248,0.1)" };
  const getStyle = (name) => ({ ...inputBase, ...(focused === name ? focusedStyle : {}) });

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-10 py-20 relative overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[200px] bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div style={{ position: "absolute", bottom: -60, left: "10%", width: 220, height: 220, borderRadius: "50%", background: "rgba(129,140,248,0.06)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", right: "5%", width: 180, height: 180, borderRadius: "50%", background: "rgba(56,189,248,0.05)", filter: "blur(50px)", pointerEvents: "none" }} />

      <div className="text-center mb-14" style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "3.5px", textTransform: "uppercase", color: "#38bdf8", marginBottom: 12 }}>// let's talk</p>
        <h2 className="text-4xl font-bold" style={{ textShadow: "0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15)" }}>Get In Touch</h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">Have a project in mind, want to collaborate, or just say hi? My inbox is always open.</p>
      </div>

      <div style={{
        position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto",
        background: "rgba(255,255,255,0.02)", border: "1px solid rgba(56,189,248,0.12)",
        borderRadius: 24, padding: "40px 36px", backdropFilter: "blur(16px)",
        boxShadow: "0 0 60px rgba(56,189,248,0.05)",
      }}>
        <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)", borderRadius: 99 }} />

        {status === "sent" ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(56,189,248,0.1)", border: "2px solid #38bdf8", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28 }}>✓</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition text-sm">Send Another</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, color: "#4a6580", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", display: "block", marginBottom: 8 }}>Name</label>
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} style={getStyle("name")} required />
              </div>
              <div>
                <label style={{ fontSize: 11, color: "#4a6580", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", display: "block", marginBottom: 8 }}>Email</label>
                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} style={getStyle("email")} required />
              </div>
            </div>
            <div>
              <label style={{ fontSize: 11, color: "#4a6580", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", display: "block", marginBottom: 8 }}>Message</label>
              <textarea name="message" placeholder="Tell me about your project or just say hi..." rows={5} value={formData.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} style={{ ...getStyle("message"), resize: "vertical", minHeight: 130 }} required />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={status === "sending"}
              style={{ width: "100%", padding: "14px", background: status === "sending" ? "rgba(56,189,248,0.3)" : "linear-gradient(90deg,#22d3ee,#3b82f6)", border: "none", borderRadius: 12, color: status === "sending" ? "#a0bdd4" : "#000", fontWeight: 600, fontSize: 15, cursor: status === "sending" ? "not-allowed" : "pointer", letterSpacing: "0.5px", transition: "all 0.3s", boxShadow: status === "sending" ? "none" : "0 0 20px rgba(56,189,248,0.3)" }}>
              {status === "sending" ? "Sending Message..." : "Send Message →"}
            </motion.button>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, paddingTop: 4, flexWrap: "wrap" }}>
              {[
                { href: "mailto:singhabhishek4964@gmail.com", icon: <FaEnvelope />, label: "singhabhishek4964@gmail.com" },
                { href: "https://github.com/Abhishek9885", icon: <FaGithub />, label: "GitHub" },
                { href: "https://www.instagram.com/its_abhishek_singh9885/", icon: <FaInstagram />, label: "Instagram" },
              ].map((l, i) => (
                <a key={i} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "#4a6580", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a6580")}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
}
