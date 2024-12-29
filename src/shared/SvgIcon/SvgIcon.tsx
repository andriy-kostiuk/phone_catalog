/* eslint-disable max-len */
import React from 'react';

type Type =
  | 'arrow'
  | 'heart'
  | 'heart-like'
  | 'cart'
  | 'menu'
  | 'close'
  | 'search'
  | 'home';

interface Props {
  className?: string;
  type: Type;
}

export const SvgIcon: React.FC<Props> = ({ className, type }) => {
  switch (type) {
    case 'arrow':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#0f0f11"
          className={className}
        >
          <path
            fillRule="evenodd"
            d="M3.529 10.471a.667.667 0 0 1
            0-.942l4-4c.26-.26.682-.26.943 0l4 4a.667.667 0
            0 1-.943.942L8 6.943 4.472 10.47a.667.667 0 0 1-.943 0Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'heart':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="#0f0f11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.62852 1.63142C10.1584 1.41184 10.7264 1.29883 11.3 1.29883C11.8737 1.29883 12.4416 1.41184 12.9716 1.63142C13.5015 1.85099 13.983 2.17282 14.3885 2.57852C14.7941 2.98398 15.1158 3.46537 15.3353 3.99519C15.5549 4.52511 15.6679 5.0931 15.6679 5.66671C15.6679 6.24032 15.5549 6.80831 15.3353 7.33824C15.1158 7.86811 14.794 8.34953 14.3884 8.75502C14.3883 8.75506 14.3884 8.75498 14.3884 8.75502L8.49502 14.6484C8.22165 14.9217 7.77844 14.9217 7.50507 14.6484L1.61174 8.75502C0.792668 7.93595 0.33252 6.82505 0.33252 5.66671C0.33252 4.50837 0.792668 3.39747 1.61174 2.5784C2.43081 1.75933 3.54171 1.29918 4.70005 1.29918C5.85839 1.29918 6.96928 1.75933 7.78835 2.5784L8.00005 2.7901L8.21162 2.57852C8.21158 2.57856 8.21166 2.57848 8.21162 2.57852C8.61711 2.17288 9.09865 1.85097 9.62852 1.63142ZM13.3983 3.56824C13.1228 3.29261 12.7957 3.07396 12.4357 2.92479C12.0756 2.77561 11.6898 2.69883 11.3 2.69883C10.9103 2.69883 10.5245 2.77561 10.1644 2.92479C9.80441 3.07396 9.4773 3.29261 9.2018 3.56824L8.49502 4.27502C8.22165 4.54839 7.77844 4.54839 7.50507 4.27502L6.7984 3.56835C6.24189 3.01183 5.48708 2.69918 4.70005 2.69918C3.91301 2.69918 3.15821 3.01183 2.60169 3.56835C2.04517 4.12487 1.73252 4.87967 1.73252 5.66671C1.73252 6.45375 2.04517 7.20855 2.60169 7.76507L8.00005 13.1634L13.3984 7.76507C13.674 7.48957 13.8928 7.16235 14.042 6.80233C14.1911 6.4423 14.2679 6.05642 14.2679 5.66671C14.2679 5.27701 14.1911 4.89112 14.042 4.5311C13.8928 4.17107 13.6739 3.84374 13.3983 3.56824Z"
          />
        </svg>
      );
    case 'heart-like':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3 1.29878C10.7264 1.29878 10.1584 1.4118 9.62852 1.63137C9.09865 1.85092 8.61711 2.17283 8.21162 2.57847L8.00005 2.79005L7.78835 2.57836C6.96928 1.75929 5.85839 1.29914 4.70005 1.29914C3.54171 1.29914 2.43081 1.75929 1.61174 2.57836C0.792668 3.39743 0.33252 4.50833 0.33252 5.66667C0.33252 6.82501 0.792668 7.9359 1.61174 8.75497L7.50507 14.6483C7.77844 14.9217 8.22165 14.9217 8.49502 14.6483L14.3884 8.75497C14.794 8.34949 15.1158 7.86806 15.3353 7.33819C15.5549 6.80827 15.6679 6.24028 15.6679 5.66667C15.6679 5.09305 15.5549 4.52506 15.3353 3.99514C15.1158 3.46532 14.7941 2.98394 14.3885 2.57847C13.983 2.17277 13.5015 1.85094 12.9716 1.63137C12.4416 1.4118 11.8737 1.29878 11.3 1.29878Z"
            fill="#476DF4"
          />
        </svg>
      );
    case 'cart':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46683 0.933323C3.59273 0.765453 3.79032 0.666656 4.00016 0.666656H12.0002C12.21 0.666656 12.4076 0.765453 12.5335 0.933323L14.5335 3.59999C14.62 3.71539 14.6668 3.85574 14.6668 3.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V3.99999C1.3335 3.85574 1.38028 3.71539 1.46683 3.59999L3.46683 0.933323ZM4.3335 1.99999L2.66683 4.22221V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V4.22221L11.6668 1.99999H4.3335Z"
            fill="#0F0F11"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.3335 4.00001C1.3335 3.63182 1.63197 3.33334 2.00016 3.33334H14.0002C14.3684 3.33334 14.6668 3.63182 14.6668 4.00001C14.6668 4.3682 14.3684 4.66668 14.0002 4.66668H2.00016C1.63197 4.66668 1.3335 4.3682 1.3335 4.00001Z"
            fill="#0F0F11"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33341 6C5.7016 6 6.00008 6.29848 6.00008 6.66667C6.00008 7.1971 6.21079 7.70581 6.58587 8.08088C6.96094 8.45595 7.46965 8.66667 8.00008 8.66667C8.53051 8.66667 9.03922 8.45595 9.41429 8.08088C9.78937 7.70581 10.0001 7.1971 10.0001 6.66667C10.0001 6.29848 10.2986 6 10.6667 6C11.0349 6 11.3334 6.29848 11.3334 6.66667C11.3334 7.55072 10.9822 8.39857 10.3571 9.02369C9.73198 9.64881 8.88414 10 8.00008 10C7.11603 10 6.26818 9.64881 5.64306 9.02369C5.01794 8.39857 4.66675 7.55072 4.66675 6.66667C4.66675 6.29848 4.96522 6 5.33341 6Z"
            fill="#0F0F11"
          />
        </svg>
      );

    case 'menu':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5C1 4.08579 1.39175 3.75 1.875 3.75H14.125C14.6082 3.75 15 4.08579 15 4.5C15 4.91421 14.6082 5.25 14.125 5.25H1.875C1.39175 5.25 1 4.91421 1 4.5Z"
            fill="#0F0F11"
          />
          <path
            d="M1 8C1 7.58579 1.39175 7.25 1.875 7.25H14.125C14.6082 7.25 15 7.58579 15 8C15 8.41421 14.6082 8.75 14.125 8.75H1.875C1.39175 8.75 1 8.41421 1 8Z"
            fill="#0F0F11"
          />
          <path
            d="M1.875 10.75C1.39175 10.75 1 11.0858 1 11.5C1 11.9142 1.39175 12.25 1.875 12.25H14.125C14.6082 12.25 15 11.9142 15 11.5C15 11.0858 14.6082 10.75 14.125 10.75H1.875Z"
            fill="#0F0F11"
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4714 4.4714C12.7318 4.21105 12.7318 3.78894 12.4714 3.52859C12.2111 3.26824 11.789 3.26824 11.5286 3.52859L8.00004 7.05719L4.47145 3.52859C4.2111 3.26824 3.78899 3.26824 3.52864 3.52859C3.26829 3.78894 3.26829 4.21105 3.52864 4.4714L7.05723 7.99999L3.52864 11.5286C3.26829 11.7889 3.26829 12.211 3.52864 12.4714C3.78899 12.7317 4.2111 12.7317 4.47145 12.4714L8.00004 8.9428L11.5286 12.4714C11.789 12.7317 12.2111 12.7317 12.4714 12.4714C12.7318 12.211 12.7318 11.7889 12.4714 11.5286L8.94285 7.99999L12.4714 4.4714Z"
            fill="#313237"
          />
        </svg>
      );
    case 'search':
      return (
        <svg
          height="16px"
          width="16px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488.4 488.4"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
            S381.9,104.65,381.9,203.25z"
              />
            </g>
          </g>
        </svg>
      );
    case 'home':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0F0F11"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.59038 0.807088C7.83112 0.619846 8.16823 0.619846 8.40897 0.807088L14.409 5.47375C14.5714 5.60006 14.6663 5.79426 14.6663 5.99999V13.3333C14.6663 13.8638 14.4556 14.3725 14.0806 14.7475C13.7055 15.1226 13.1968 15.3333 12.6663 15.3333H3.33301C2.80257 15.3333 2.29387 15.1226 1.91879 14.7475C1.54372 14.3725 1.33301 13.8638 1.33301 13.3333V5.99999C1.33301 5.79426 1.42799 5.60006 1.59038 5.47375L7.59038 0.807088ZM2.66634 6.32605V13.3333C2.66634 13.5101 2.73658 13.6797 2.8616 13.8047C2.98663 13.9298 3.1562 14 3.33301 14H12.6663C12.8432 14 13.0127 13.9298 13.1377 13.8047C13.2628 13.6797 13.333 13.5101 13.333 13.3333V6.32605L7.99967 2.1779L2.66634 6.32605Z"
            fill="#0F0F11"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33301 8.00001C5.33301 7.63182 5.63148 7.33334 5.99967 7.33334H9.99967C10.3679 7.33334 10.6663 7.63182 10.6663 8.00001V14.6667C10.6663 15.0349 10.3679 15.3333 9.99967 15.3333C9.63148 15.3333 9.33301 15.0349 9.33301 14.6667V8.66668H6.66634V14.6667C6.66634 15.0349 6.36786 15.3333 5.99967 15.3333C5.63148 15.3333 5.33301 15.0349 5.33301 14.6667V8.00001Z"
          />
        </svg>
      );
    default:
      return null;
  }
};