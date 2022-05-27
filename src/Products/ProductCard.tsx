import React, {FC} from 'react';
import {ProductI} from "../DataModel/Product";
import {Link} from "react-router-dom";
import styles from '../app.module.scss';

interface ProductCardProps {
   product: ProductI
}

const ProductCard: FC<ProductCardProps> = ({product}) => {

   return (
      <Link to={product.id} className={styles['product-container']}>
         <img
            src={`/assets/img/products/${product.id}.svg`}
            alt={'ProductCard image'}
            className={styles['product-icon']}
         />
         <div>
            <h2 className={styles['product-name']}>{product.name}</h2>
            <p className={styles['product-price']}>`$ ${product.price}`</p>
         </div>
      </Link>
   );
}

export default ProductCard;