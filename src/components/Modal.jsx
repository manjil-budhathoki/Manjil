import { useEffect, useRef } from 'react';
export default function Modal({ isOpen, onClose, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    const dialog = ref.current;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [isOpen]);
  return <dialog ref={ref} className="app-dialog" aria-label={title} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-body"><div className="dialog-heading"><strong>{title}</strong><button className="filter-chip" onClick={onClose} aria-label="Close dialog">Close ×</button></div>{isOpen && children}</div>
  </dialog>;
}
