import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required()
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    }
  });

  return (
    <form className='flex gap-2 flex-col mt-10 mx-auto items-center' onSubmit={formik.handleSubmit}>
      <p className='text-lg text-gradient'>QUIZ</p>
      <input
        className='bg-gray-500 rounded-sm text-white p-1 w-[70%]'
        type='text'
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {(formik.touched.email ?? false) && formik.errors.email != null ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <input
        className='bg-gray-500 rounded-sm text-white p-1 w-[70%]'
        type='password'
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {(formik.touched.password ?? false) && formik.errors.password != null ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button disabled={loading} type='submit' className='background-gradient py-1 px-2 rounded'>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;
