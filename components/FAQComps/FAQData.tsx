import { images } from '@/exports/images';
import {
  AccManage,
  Bills,
  Deposit,
  ExchangeRate,
  FaqIcon1,
  FaqIcon2,
  FaqIcon3,
  FaqIcon4,
  FaqIcon5,
  FaqIcon6,
  FaqIcon7,
  FaqIcon8,
  FaqIcon9,
  GlobalPay,
  LegalIcon,
  MXECard,
  OnboardIcon,
  SavingIcon,
  Withdrawal,
} from '../SVGs/Icons';

export const faqData = [
  {
    id: 1,
    title: 'Onboarding',
    icon: <OnboardIcon />,
    articles: 3,
    authorImages: [images.avatar, images.avatar1, images.avatar2],
    url: 'onboarding',
    questions: [
      { qid: 'question1', qtitle: 'How do I onboard on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 2,
    title: 'Account Management',
    icon: <AccManage />,
    articles: 5,
    authorImages: [images.avatar, images.avatar1, images.avatar2],
    url: 'account-management',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 3,
    title: 'Global Payments',
    icon: <GlobalPay />,
    articles: 5,
    authorImages: [
      images.avatar,
      images.avatar1,
      images.avatar2,
      images.avatar4,
    ],
    url: 'global-payments',
    questions: [
      { qid: 'question1', qtitle: 'What is global payments on MXE?' },
      {
        qid: 'question2',
        qtitle: 'How do I change my phone number on MXE?',
      },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 4,
    title: 'Deposit/Fund Account',
    icon: <Deposit />,
    articles: 6,
    authorImages: [images.avatar, images.avatar1],
    url: 'fund-account',
    questions: [
      { qid: 'question1', qtitle: 'How do I deposite  on MXE?' },
      { qid: 'question2', qtitle: 'How do I fund my account on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 5,
    title: 'Bill Payment',
    icon: <Bills />,
    articles: 8,
    authorImages: [images.avatar, images.avatar1, images.avatar2],
    url: 'bill-payment',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 6,
    title: 'MXE Card',
    icon: <MXECard />,
    articles: 12,
    authorImages: [
      images.avatar,
      images.avatar1,
      images.avatar2,
      images.avatar4,
    ],
    url: 'mxe-card',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 7,
    title: 'Exchange Rate',
    icon: <ExchangeRate />,
    articles: 3,
    authorImages: [images.avatar, images.avatar1, images.avatar2],
    url: 'exchange-rate',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 8,
    title: 'USD Saving',
    icon: <SavingIcon />,
    articles: 8,
    authorImages: [images.avatar3, images.avatar1],
    url: 'usd-saving',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 9,
    title: 'Withdrawals',
    icon: <Withdrawal />,
    articles: 8,
    authorImages: [images.avatar3, images.avatar1],
    url: 'withdrawals',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 10,
    title: 'Legal',
    icon: <LegalIcon />,
    articles: 8,
    authorImages: [images.avatar3, images.avatar1],
    url: 'legal',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
  {
    id: 11,
    title: 'Safety and Security',
    icon: <LegalIcon />,
    articles: 8,
    authorImages: [images.avatar3, images.avatar1],
    url: 'saving-security',
    questions: [
      { qid: 'question1', qtitle: 'How do I change my password on MXE?' },
      { qid: 'question2', qtitle: 'How do I change my phone number on MXE?' },
      {
        qid: 'question3',
        qtitle: 'How do I change my transaction PIN on MXE?',
      },
      { qid: 'question4', qtitle: 'Why should I verify my account?' },
      { qid: 'question5', qtitle: 'How do I verify my account?' },
    ],
  },
];

export const faqDataNew = [
  {
    id: 1,
    title: 'Getting Started',
    icon: <FaqIcon1 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
  {
    id: 2,
    title: 'Community Workshop',
    icon: <FaqIcon2 />,
    subtitle:
      'Collaborative space where individuals come together to share knowledge, skills, and ideas within a specific community or interest group',
  },
  {
    id: 3,
    title: 'Accounts',
    icon: <FaqIcon3 />,
    subtitle:
      'Records within a system that store personal or organizational information, preferences, and activities.',
  },
  {
    id: 4,
    title: 'Send and Receive Feature',
    icon: <FaqIcon4 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
  {
    id: 5,
    title: 'Chargeback',
    icon: <FaqIcon5 />,
    subtitle:
      'Lorem ipsum dolor sit amet consectetur. Morbi tempor metus maecenas suspendisse vitae ut. Ut pretium in sed lorem mattis ut.',
  },
  {
    id: 6,
    title: 'Virtual Cards',
    icon: <FaqIcon6 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
  {
    id: 7,
    title: 'Thirds Party Integrations',
    icon: <FaqIcon7 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
  {
    id: 8,
    title: 'Refunds',
    icon: <FaqIcon8 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
  {
    id: 9,
    title: 'KYC',
    icon: <FaqIcon9 />,
    subtitle:
      'Get realtime updates when users start or end subscriptions, or have low funds in their wallet.',
  },
];
