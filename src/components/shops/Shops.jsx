import { useEffect, useState } from 'react';
import AddCardList from './AddCardList';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../store/AuthProvider';
import { toast } from 'react-hot-toast';

export default function Shops() {
  const ctx = useAuth();
  // parsisiusti tik to vartotojo duomenis
  const [addsArr, setAddsArr] = useState([]);
  console.log('addsArr ===', addsArr);
  console.log('ctx.userUid ===', ctx.userUid);
  useEffect(() => {
    getShops();
  }, []);

  async function getShops() {
    //
    const q = query(
      collection(db, 'shops'),
      where('userUid', '==', ctx.userUid)
    );

    const querySnapshot = await getDocs(q);
    //
    // const querySnapshot = await getDocs(collection(db, 'skelbimai'));
    const dataBack = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      dataBack.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log('dataBack ===', dataBack);
    // order by in front end
    // dataBack.sort(() => {})
    setAddsArr(dataBack);
  }

  function deleteFire(delId) {
    deleteDoc(doc(db, 'shops', delId))
      .then(() => {
        toast.success('istrinta');
        getShops();
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        toast.error('istrinti nepavyko');
      });
  }

  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>MyAccountPage</h1>
      <p>All the single laddies</p>
      {addsArr.length != 0 ? (
        <AddCardList list={addsArr} onDelete={deleteFire} />
      ) : (
        <p>No shops in the list</p>
      )}
    </div>
  );
}
