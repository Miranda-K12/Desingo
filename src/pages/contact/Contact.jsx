import React, { useState } from "react";
import styles from "./Contact.module.css";
import CountryCard from "../../components/sharedComponents/officeInfo/OfficeInfo";
import Button from "../../components/sharedComponents/button/Button";
import CanadaImage from "../../assets/contact/desktop/Canada.png";
import UkImage from "../../assets/contact/desktop/uk.png";
import AustraliaImage from "../../assets/contact/desktop/Australia.png";
import ErrorIcon from "../../assets/contact/desktop/icon-error.svg";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

// Error message component
const ErrorMessage = ({ error }) =>
  error && (
    <div className={styles.errorMessage}>
      <span>{error}</span>
      <img src={ErrorIcon} alt="error" />
    </div>
  );

// Input Field Component
const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}) => {
  const Tag = type === "textarea" ? "textarea" : "input";
  return (
    <div className={styles.inputWrapper}>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ""}`}
        rows={type === "textarea" ? 3 : undefined}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "Can’t be empty";
      }
    });

    if (
      formData.email &&
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setOpenDialog(true);
      resetForm();
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  // Dialog Window
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHero}>
        <div className={styles.contactBox}>
          <h1 className={styles.contactHeader}>Contact</h1>
          <p className={styles.contactText}>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            error={errors.name}
          />
          <InputField
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            error={errors.email}
          />
          <InputField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            error={errors.phone}
          />
          <InputField
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            error={errors.message}
            type="textarea"
          />
          <Button
            bg="#ffffff"
            color="#333136"
            type="submit"
            className={styles.submitButton}
          >
            Submit
          </Button>

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Form Submitted</DialogTitle>
            <DialogContent>
              <p>Your form has been successfully submitted!</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="white">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>

      <div className={styles.countryList}>
        <CountryCard
          imageSrc={CanadaImage}
          title="Canada"
          buttonText="See Location"
        />
        <CountryCard
          imageSrc={AustraliaImage}
          title="Australia"
          buttonText="See Location"
        />
        <CountryCard
          imageSrc={UkImage}
          title="United Kingdom"
          buttonText="See Location"
        />
      </div>
    </div>
  );
}

export default Contact;
