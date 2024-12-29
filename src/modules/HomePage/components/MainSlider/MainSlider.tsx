import cn from 'classnames';
import styles from './MainSlider.module.scss';
import { SvgIcon } from '../../../../shared/SvgIcon';
import { useCallback, useEffect, useRef, useState } from 'react';

const slides = [
  'img/banner-accessories.png',
  'img/banner-phones.png',
  'img/banner-tablets.png',
];

interface Props {
  className: string;
}

export const MainSlider: React.FC<Props> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const changeSlide = useCallback((direction: number) => {
    setCurrentSlide(prev => (prev + direction + slides.length) % slides.length);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => changeSlide(1), 5000);
  }, [changeSlide]);

  const handleNext = () => {
    changeSlide(1);
    resetInterval();
  };

  const handlePrev = () => {
    changeSlide(-1);
    resetInterval();
  };

  const handleDotClick = (index: number, isActive: boolean) => {
    if (!isActive) {
      setCurrentSlide(index);
      resetInterval();
    }
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  return (
    <section className={cn(styles['main-slider'], className)}>
      <div className={styles['main-slider__container']}>
        <button
          onClick={handlePrev}
          className={cn(
            styles['main-slider__controller'],
            styles['main-slider__controller--prev'],
          )}
        >
          <SvgIcon type="arrow" />
        </button>

        <ul className={styles['main-slider__list']}>
          {slides.map(slide => {
            return (
              <li
                className={styles['main-slider__slide']}
                key={slide}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <img
                  className={styles['main-slider__img']}
                  src={slide}
                  alt=""
                />
              </li>
            );
          })}
        </ul>

        <button
          onClick={handleNext}
          className={cn(
            styles['main-slider__controller'],
            styles['main-slider__controller--next'],
          )}
        >
          <SvgIcon type="arrow" />
        </button>
      </div>
      <div className={styles['main-slider__dots']}>
        {slides.map((_, index) => {
          const isActive = index === currentSlide;

          return (
            <button
              key={index}
              onClick={() => handleDotClick(index, isActive)}
              className={cn(styles['main-slider__dot'], {
                [styles['main-slider__dot--active']]: isActive,
              })}
            />
          );
        })}
      </div>
    </section>
  );
};
