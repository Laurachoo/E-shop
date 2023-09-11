import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import toast from 'react-hot-toast';
import { useAuth } from '../../store/AuthProvider';
import { useNavigate } from 'react-router-dom';
import AddShopStyle from '../addShop/AddShop.module.css';

function CreateAdd() {
  const ctx = useAuth();
  const navigate = useNavigate();
  const initialValues = {
    shopName: '',
    town: '',
    startYear: '',
    description: '',
    imageUrl: '',
  };

  const validationSchema = Yup.object({
    shopName: Yup.string()
      .min(4, 'Shop Name must be at least 4 characters')
      .required('Shop Name is required'),
    town: Yup.string()
      .min(4, 'Town must be at least 4 characters')
      .required('Town is required'),
    startYear: Yup.number()
      .typeError('Please enter a valid number')
      .required('Start Year is required')
      .positive()
      .min(1975, 'Allowed minimum is 1975')
      .max(2025, 'Allowed maximum is 2025'),
    description: Yup.string()
      .min(6, 'Description must be at least 6 characters')
      .max(100, 'Description must be less than 100 characters')
      .required('Description is required'),
    imageUrl: Yup.string()
      .min(5, 'Image URL must be at least 5 characters')
      .required('Image is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newAddObjWithUid = {
        ...values,
        userUid: ctx.userUid,
      };
      console.log('newAddObjWithUid ===', newAddObjWithUid);
      sendDataToFireBase(newAddObjWithUid);
    },
  });

  async function sendDataToFireBase(dataToSend) {
    console.log('creating');
    try {
      const docRef = await addDoc(collection(db, 'shops'), dataToSend);
      console.log('Document written with ID: ', docRef.id);

      toast.success('Add created');
      navigate('/shops', { replace: true });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('something went wrong');
    }
  }

  return (
    <div className={AddShopStyle.container}>
      <h2 className={AddShopStyle.heading}>Create a new shop</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={AddShopStyle.labelAndInput}>
          <label className={AddShopStyle.label} htmlFor='shopName'>
            Shop Name
          </label>
          <input
            className={AddShopStyle.input}
            type='text'
            id='shopName'
            name='shopName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shopName}
          />
          {formik.touched.shopName && formik.errors.shopName && (
            <div className={AddShopStyle.error}>{formik.errors.shopName}</div>
          )}
        </div>
        <div className={AddShopStyle.labelAndInput}>
          <label className={AddShopStyle.label} htmlFor='town'>
            Town
          </label>
          <input
            className={AddShopStyle.input}
            id='town'
            name='town'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
          />
          {formik.touched.town && formik.errors.town && (
            <div className={AddShopStyle.error}>{formik.errors.town}</div>
          )}
        </div>
        <div className={AddShopStyle.labelAndInput}>
          <label className={AddShopStyle.label} htmlFor='startYear'>
            Start Year
          </label>
          <input
            className={AddShopStyle.input}
            id='startYear'
            name='startYear'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
          />
          {formik.touched.startYear && formik.errors.startYear && (
            <div className={AddShopStyle.error}>{formik.errors.startYear}</div>
          )}
        </div>
        <div className={AddShopStyle.labelAndInput}>
          <label className={AddShopStyle.label} htmlFor='description'>
            Description
          </label>
          <textarea
            className={AddShopStyle.inputSpecial}
            type='string'
            id='description'
            name='description'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div className={AddShopStyle.error}>
              {formik.errors.description}
            </div>
          )}
        </div>
        <div className={AddShopStyle.labelAndInput}>
          <label className={AddShopStyle.label} htmlFor='imageUrl'>
            Image
          </label>
          <input
            className={AddShopStyle.input}
            type='text'
            id='imageUrl'
            name='imageUrl'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl && (
            <div className={AddShopStyle.error}>{formik.errors.imageUrl}</div>
          )}
        </div>
        <div>
          <button className={AddShopStyle.button} type='submit'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAdd;
