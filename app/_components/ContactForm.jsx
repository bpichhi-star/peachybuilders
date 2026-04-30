"use client";
import { useState } from "react";

/**
 * Wired contact form. Submits to Web3Forms; submissions arrive at Peachybuilders@gmail.com.
 * Required env var: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
 *
 * Required fields: name, email, phone. Message is optional.
 *
 * @param {{source?: string}} props - source identifier (e.g. "kitchens-baths" or "outdoor")
 */
export default function ContactForm({ source = "site" }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.target);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: `New estimate request from ${fd.get("name") || "website visitor"} — ${source}`,
      from_name: "Peachy Builders Website",
      replyto: fd.get("email"),
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message") || "(no message provided)",
      source,
      botcheck: fd.get("botcheck") || "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result?.message || "Something went wrong. Please call us at 323-477-4733.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Couldn't send. Please try again or call us at 323-477-4733.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-white p-7 text-neutral-900">
        <h3 className="text-xl font-semibold">Message Sent</h3>
        <p className="mt-2 text-sm text-neutral-500">
          Thanks — we&apos;ve received your request and will be in touch shortly. For anything urgent, call us at{" "}
          <a href="tel:+13234774733" className="font-medium text-neutral-900 underline underline-offset-4">323-477-4733</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-7 text-neutral-900" noValidate>
      <h3 className="text-xl font-semibold">Request a Free Estimate</h3>
      <p className="mt-2 text-sm text-neutral-500">Tell us about your project and we&apos;ll be in touch shortly.</p>
      <div className="mt-6 space-y-4">
        <input
          className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800 disabled:opacity-60"
          placeholder="Full name"
          autoComplete="name"
          name="name"
          type="text"
          required
          disabled={status === "submitting"}
        />
        <input
          className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800 disabled:opacity-60"
          placeholder="Email address"
          autoComplete="email"
          type="email"
          name="email"
          required
          disabled={status === "submitting"}
        />
        <input
          className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800 disabled:opacity-60"
          placeholder="Phone number"
          autoComplete="tel"
          type="tel"
          name="phone"
          required
          disabled={status === "submitting"}
        />
        <textarea
          className="h-28 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800 disabled:opacity-60"
          placeholder="Tell us about your project (optional)"
          name="message"
          disabled={status === "submitting"}
        />
        {/* Honeypot — hidden from humans, bots fill it */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-stone-50 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Request"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-700" role="alert">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}
