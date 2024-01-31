import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const validateForm = () => {
     let tempErrors = {};
     tempErrors.name = formData.name ? "" : "Name required";
     tempErrors.email = formData.email ? "" : "Email required";
     tempErrors.message = formData.message ? "" : "Message required";
 
     setErrors({
       ...tempErrors
     })
 
     if (tempErrors.name || tempErrors.email || tempErrors.message) {
       return false;
     }
 
     return true;
  };
 
  const handleSubmit = (event) => {
     event.preventDefault();
     if (!validateForm()) {
       alert("Please fill out all fields");
       return;
     }
     // Submit form data here
  };
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact
