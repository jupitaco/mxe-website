'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SVGProps, useEffect, useRef } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => {
  //   const svgRef = useRef<SVGSVGElement>(null);

  //   useGSAP(() => {
  //     const path = svgRef.current?.querySelector('path');
  //     console.log('Path element:', path); // Log the path element
  //     const pathLength = path?.getTotalLength();
  //     console.log(pathLength);

  //     const tl = gsap.timeline();

  //     if (path) {
  //       console.log('Path length:', pathLength); // Log the path length
  //       tl.from(path, {
  //         strokeDashoffset: pathLength,
  //         duration: 2,
  //       });
  //     }
  //   }, []);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 149 56'
      fill='none'
      {...props}
      //   ref={svgRef}
    >
      <path
        // strokeDasharray='100'
        // strokeDashoffset='100'
        id='myPth'
        fill='#B7C6FA'
        d='M115.851 47.231c-11.235-1.73-22.59-.303-33.825.736-11.115 1.039-22.207 2.77-33.323 3.549-10.661.735-21.514.735-31.912-3.895-4.112-1.818-19.363-8.872-13.1-21.508 1.96-3.938 4.924-6.145 7.625-7.832 2.702-1.688 5.475-2.856 8.248-4.025 4.494-1.904 8.964-3.851 13.506-5.193 5.426-1.601 10.9-2.77 16.398-3.548C71.126 2.399 93.142 3.697 114.68 8.76c4.375 1.039 8.773 2.034 13.124 3.462 4.087 1.342 8.247 3.073 11.976 6.535 1.745 1.6 3.394 3.591 4.805 6.058 1.458 2.553 2.868 7.227.645 9.823-2.079 2.424-4.828 3.203-7.219 3.895-2.606.692-5.211 1.169-7.817 1.774-2.701.606-5.402 1.212-8.103 1.688-1.817.346-1.889 5.496 0 5.236 5.713-.779 11.402-2.596 17.044-4.284 4.183-1.255 10.996-4.154 9.705-14.454-.956-7.616-5.833-12.42-9.466-15.232-4.088-3.116-8.439-4.717-12.813-5.929C104.329 1.23 81.955-1.28 59.484.625c-11.259.952-22.494 3.159-33.538 7.27-3.586 1.341-7.195 2.856-10.757 4.457-3.227 1.471-6.478 3.202-9.418 6.015C3.285 20.747.703 24.382.129 29.662c-.765 6.967 1.984 12.117 5.164 15.146 4.279 4.068 9.227 6.318 13.936 7.962 5.45 1.904 10.996 2.857 16.566 3.116 11.833.606 23.642-1.341 35.427-2.683 11.856-1.385 23.737-2.12 35.617-3.245 3.036-.303 6.048-.65 9.06-1.125.526-.087.526-1.515-.048-1.602Z'
      />
    </svg>
  );
};

export default LineIcon;
