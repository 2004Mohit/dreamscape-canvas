import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatedAction } from "./AnimatedButton";
import { company } from "@/data/company";

const projectTypes = [
  "Residential Interiors",
  "Modular Kitchen",
  "Wardrobes & Furniture",
  "Commercial Interiors",
  "Renovation / Makeover",
  "Material Supply",
  "Architect Partnership",
] as const;

const budgets = ["Under ₹5 lakh", "₹5–15 lakh", "₹15–30 lakh", "₹30 lakh+", "Not sure yet"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits and + - ( )"),
  email: z.string().trim().email("Please enter a valid email").max(255).or(z.literal("")),
  city: z.string().trim().max(80, "City is too long"),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgets),
  message: z.string().trim().min(10, "Tell us a little more about the space").max(1000, "Message is too long"),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  name: "",
  phone: "",
  email: "",
  city: "Jodhpur",
  projectType: "Residential Interiors",
  budget: "Not sure yet",
  message: "",
};

const fieldClass =
  "min-h-11 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    const text = [
      `New enquiry — ${company.name}`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      d.email ? `Email: ${d.email}` : null,
      d.city ? `City: ${d.city}` : null,
      `Project: ${d.projectType}`,
      `Budget: ${d.budget}`,
      `Details: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    toast.success("Enquiry ready to send — we'll reply shortly.");
  };

  const err = (key: keyof Values) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 text-xs text-destructive">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="label-xs text-muted-foreground">Name*</label>
        <input id="name" name="name" value={values.name} onChange={set("name")} className={`mt-3 ${fieldClass}`}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your full name" />
        {err("name")}
      </div>

      <div>
        <label htmlFor="phone" className="label-xs text-muted-foreground">Phone*</label>
        <input id="phone" name="phone" inputMode="tel" value={values.phone} onChange={set("phone")} className={`mt-3 ${fieldClass}`}
          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="+91 " />
        {err("phone")}
      </div>

      <div>
        <label htmlFor="email" className="label-xs text-muted-foreground">Email</label>
        <input id="email" name="email" type="email" value={values.email} onChange={set("email")} className={`mt-3 ${fieldClass}`}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />
        {err("email")}
      </div>

      <div>
        <label htmlFor="city" className="label-xs text-muted-foreground">City</label>
        <input id="city" name="city" value={values.city} onChange={set("city")} className={`mt-3 ${fieldClass}`} />
        {err("city")}
      </div>

      <div>
        <label htmlFor="projectType" className="label-xs text-muted-foreground">Project type</label>
        <select id="projectType" name="projectType" value={values.projectType} onChange={set("projectType")} className={`mt-3 ${fieldClass}`}>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="label-xs text-muted-foreground">Budget range</label>
        <select id="budget" name="budget" value={values.budget} onChange={set("budget")} className={`mt-3 ${fieldClass}`}>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="label-xs text-muted-foreground">About the space*</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={set("message")}
          className={`mt-3 ${fieldClass}`} maxLength={1000}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Size, rooms, timeline, and anything you already have in mind." />
        {err("message")}
      </div>

      <div className="sm:col-span-2">
        <AnimatedAction type="submit">Send enquiry on WhatsApp</AnimatedAction>
        <p className="mt-4 text-xs text-muted-foreground">
          Prefer email? Write to{" "}
          <a href={company.emailHref} className="text-primary underline-offset-4 hover:underline">{company.email}</a>.
        </p>
      </div>
    </form>
  );
}
