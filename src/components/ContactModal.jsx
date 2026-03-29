import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ close, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: "",
  });
const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // 🔥 VALIDATION FIRST
  if (!form.name || !form.email || !form.phone) {
    setError("⚠️ Please fill all mandatory fields");
    return; // ⛔ stop here
  }

  setError(""); // clear error
  setLoading(true);

  emailjs
    .send(
      "service_7jzrm48",
      "template_9qpqxmi",
      form,
      "-3dP-tXXLjRR0c4Tn"
    )
    .then((result) => {
      console.log("SUCCESS:", result.text);

      setLoading(false);
      onSuccess(); // ✅ show success message
      close();     // ✅ close modal
    })
    .catch((error) => {
      console.log("FAILED:", error);

      setLoading(false);
      setError("❌ Failed to send. Please try again");
    });
};

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={close}>✕</button>

        <h2 className="modal-title">Let’s Build Something Powerful </h2>

        <form onSubmit={handleSubmit} className="contact-form">

          {/* ✅ REQUIRED */}
          <input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
          />

          {/* OPTIONAL */}
          <input
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="What do you need?"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactModal;