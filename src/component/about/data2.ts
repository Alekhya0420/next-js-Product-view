import fone from '../../../public/images/feature/f1.png';
import ftwo from '../../../public/images/feature/f2.png';
import fthree from '../../../public/images/feature/f3.png';
import ffour from '../../../public/images/feature/f4.png';
import ffive from '../../../public/images/feature/f5.png';
import fsix from '../../../public/images/feature/f6.png';
import {StaticImageData} from 'next/image';

interface fetchedItem {
  title: string;
  price: string;
  myimg: StaticImageData;
}

export const myItems: fetchedItem[] = [
  {
    title: 'Item One',
    price: '$10.00',
    myimg: fone,
  },
  {
    title: 'Item Two',
    price: '$15.00',
    myimg: ftwo,
  },
  {
    title: 'Item Three',
    price: '$20.00',
    myimg: fthree,
  },
  {
    title: 'Item Four',
    price: '$25.00',
    myimg: ffour,
  },
  {
    title: 'Item Five',
    price: '$30.00',
    myimg: ffive,
  },
  {
    title: 'Item Six',
    price: '$35.00',
    myimg: fsix,
  },
];
