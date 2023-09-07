import ShopsStyle from '../shops/Shops.module.css';
import { useAuth } from '../../store/AuthProvider';
function Shops() {
  let cfx = useAuth();

  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export default Shops;
