import { useEffect, useState } from 'react';
import styles from './ProductPhotos.module.scss';
import cn from 'classnames';

interface Props {
  photos: string[];
  className?: string;
}

export const ProductPhotos: React.FC<Props> = ({ photos, className }) => {
  const [currentImage, setCurrentImage] = useState(photos[0]);

  useEffect(() => {
    setCurrentImage(photos[0]);
  }, [photos]);

  return (
    <div className={cn(styles['product-photos'], className)}>
      <div className={styles['product-photos__current']}>
        <img
          className={styles['product-photos__img']}
          src={currentImage}
          alt=""
        />
      </div>
      <ul className={styles['product-photos__list']}>
        {photos.map(img => {
          const isActive = img === currentImage;

          return (
            <li
              className={cn(styles['product-photos__item'], {
                [styles['product-photos__item--active']]: isActive,
              })}
              key={img}
              onClick={() => !isActive && setCurrentImage(img)}
            >
              <button className={styles['product-photos__btn']}>
                <img
                  className={styles['product-photos__img']}
                  src={img}
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
