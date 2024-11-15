import { useState } from 'react';

export const useGlobalHooks = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<{ [key: string | number]: boolean }>(
    {},
  );
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  const getColor = (rating: number, index: number) => {
    if (rating >= index + 1) {
      // Color for rated stars
      return 'rated';
    }
    // Color for unrated stars
    return 'noRating';
  };

  return {
    show,
    setShow,
    getColor,
    loading,
    setLoading,
    open,
    setOpen,
    handleToggle,
    toggle,
    setToggle,
  };
};
