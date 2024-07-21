import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = <T extends string | string[]>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const dropdownRef = useRef<HTMLElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, []);

  const updateSelectedItem = useCallback((item: T) => {
    setSelectedItem(item);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    toggleDropdown,
    selectedItem,
    dropdownRef,
    updateSelectedItem,
  };
};

export default useDropdown;
