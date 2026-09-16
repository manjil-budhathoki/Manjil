import Reading from '../sections/Reading';
import Modal from './Modal';
export default function ReadingModal({ isOpen, onClose }) {
  return <Modal isOpen={isOpen} onClose={onClose} title="Research & learning"><Reading /></Modal>;
}
