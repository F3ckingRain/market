import React from 'react';

import styles from './ProductList.module.scss';

interface ProductListProps {
  list?: string[];
}

function ProductList({ list }: ProductListProps) {
  return <div className={styles.list}>{list}</div>;
}

export default ProductList;
