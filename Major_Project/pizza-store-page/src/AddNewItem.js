import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import './addnewitem.css';

function AddNewItem() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .required('Name is required'),
            description: Yup.string()
                .min(10, 'Description must be at least 10 characters')
                .required('Description is required'),
            price: Yup.number()
                .min(0.1, 'Price must be greater than 0')
                .required('Price is required'),
            image: Yup.string()
                .url('Invalid URL format')
                .required('Image URL is required')
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:5000/pizzas', values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/pizzas');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="add-new-item-page">
            <div className="add-new-item-box">
                <h2>Add New Pizza</h2>

                <form className="add-new-item-form" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error-message">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="error-message">{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="error-message">{formik.errors.price}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.image}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <div className="error-message">{formik.errors.image}</div>
                        ) : null}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddNewItem;