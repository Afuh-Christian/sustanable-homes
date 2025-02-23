/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";

const InquiryForm = ({product}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted", values);
      resetForm();
    },
  });

  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Send Inquiry</h2>
      <p className="text-gray-600 text-sm mb-4">
        {"Can't find the specific information you're looking for? Have a question? Contact Us"}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Products: </span>
        <a href="#" className="text-blue-600 underline">{product?.header?.title}</a>
      </p>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name: <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label className="block font-medium">Email: <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label className="block font-medium">Phone:</label>
          <input
            type="text"
            name="phone"
            className="w-full p-2 border border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>

        <div>
          <label className="block font-medium">Message: <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="px-6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
