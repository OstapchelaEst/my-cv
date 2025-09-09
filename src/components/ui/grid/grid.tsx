import { motion } from 'motion/react'

import { cn } from '@/utils/cn'
import { type PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const Grid = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 2 } }}
      className={cn('absolute z-[1] pointer-events-none', className)}
    >
      {children}

      <svg
        width="945"
        height="1040"
        viewBox="0 0 945 1040"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M944 1.68389L4.12047e-05 1.68385M944 378.876L2.47228e-05 378.876M944 190.28L3.29638e-05 190.28M944 567.472L1.64819e-05 567.472M944 803.216L6.1807e-06 803.216M944 95.9818L3.70842e-05 95.9818M944 473.174L2.06023e-05 473.174M944 284.578L2.88433e-05 284.578M944 661.77L1.23614e-05 661.769M944 897.514L2.06023e-06 897.514M944 48.8329L3.91445e-05 48.8328M944 426.025L2.26626e-05 426.025M944 237.429L3.09035e-05 237.429M944 614.621L1.44216e-05 614.621M944 850.365L4.12047e-06 850.365M944 143.131L3.5024e-05 143.131M944 520.323L1.85421e-05 520.323M944 756.067L8.24094e-06 756.067M944 331.727L2.6783e-05 331.727M944 708.918L1.03012e-05 708.918M944 944.663L0 944.663M1.34661 0V945M378.408 0V945M189.877 0V945M566.939 0V945M802.602 0V945M95.6119 0V945M472.673 0V945M284.143 0V945M661.204 0V945M896.867 0V945M48.4793 0V945M425.541 0V945M237.01 0V945M614.071 0V945M849.735 0V945M142.745 0V945M519.806 0V945M755.469 0V945M331.275 0V945M708.337 0V945M944 0V945"
          stroke="url(#paint1_radial_2_172)"
          strokeOpacity="0.1"
        />

        <defs>
          <filter
            id="filter0_f_2_172"
            x="532"
            y="907"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_2_172"
            />
          </filter>
          <filter
            id="filter1_f_2_172"
            x="436"
            y="493.271"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_2_172"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_172"
            x1="568.771"
            y1="941.771"
            x2="568.771"
            y2="1038.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.144231"
              stopColor="#9A45FF"
            />
            <stop
              offset="0.513413"
              stopColor="#1AFC9C"
            />
            <stop
              offset="0.942308"
              stopColor="#1AFC9C"
              stopOpacity="0"
            />
          </linearGradient>
          <radialGradient
            id="paint1_radial_2_172"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(472 472.5) rotate(90) scale(472.5 472)"
          >
            <stop stopColor="white" />
            <stop
              offset="1"
              stopColor="white"
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient
            id="paint2_linear_2_172"
            x1="472.771"
            y1="530.5"
            x2="472.771"
            y2="433.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.144231"
              stopColor="#9A45FF"
            />
            <stop
              offset="0.513413"
              stopColor="#1AFC9C"
            />
            <stop
              offset="0.942308"
              stopColor="#1AFC9C"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
