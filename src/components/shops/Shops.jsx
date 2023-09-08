import { useEffect, useState } from 'react';
import AddCardList from './AddCardList';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../store/AuthProvider';
import { toast } from 'react-hot-toast';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export default function Shops() {
  const ctx = useAuth();
  const [addsArr, setAddsArr] = useState([]);
  useEffect(() => {
    getShops();
  }, []);

  async function getShops() {
    const q = query(
      collection(db, 'shops'),
      where('userUid', '==', ctx.userUid)
    );

    const querySnapshot = await getDocs(q);
    const dataBack = [];
    querySnapshot.forEach((doc) => {
      dataBack.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setAddsArr(dataBack);
  }

  function deleteFire(delId) {
    deleteDoc(doc(db, 'shops', delId))
      .then(() => {
        toast.success('Deleted');
        getShops();
      })
      .catch((error) => {
        console.warn('Something went wrong:', error);
        toast.error('Something went wrong');
      });
  }

  return (
    <div>
      <h1>Browse all the shops</h1>
      {addsArr.length != 0 ? (
        <AddCardList list={addsArr} onDelete={deleteFire} />
      ) : (
        <p>No shops in the list</p>
      )}
    </div>
  );
}
