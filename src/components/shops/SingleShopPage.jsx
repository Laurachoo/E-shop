import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import SingleShopCard from './SingleShopCard';

export default function SingleShopPage() {
  const params = useParams();
  console.log('params ===', params);
  const [currentAddObj, setCurrentAddObj] = useState({});

  // 1. gauti posto objekta - useEffektas
  useEffect(() => {
    console.log('pasileido effectas');

    async function getSingleDocumentFromFirebase() {
      const docRef = doc(db, 'skelbimai', params.addId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        // 2. saugom duomenis state
        setCurrentAddObj(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    }
    getSingleDocumentFromFirebase();
  }, [params.addId]);

  // 3. JSXe atvaizduojam duomenis is state
  console.log('po efektu kode');
  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>SingleAddPage</h1>
      <img src={currentAddObj.mainImgUrl} alt='hero' />
      <h2 className='text-2xl font-semibold'>
        Post title: {currentAddObj.title}
      </h2>
      <p>price: {currentAddObj.price?.toFixed(2)} eur</p>
      <SingleShopCard item={currentAddObj} noDelete />
    </div>
  );
}
