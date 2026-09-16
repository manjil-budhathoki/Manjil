import Modal from './Modal';
export default function ResumeModal({ isOpen, onClose }) {
  const url = `${import.meta.env.BASE_URL}Resume.pdf`;
  return <Modal isOpen={isOpen} onClose={onClose} title="Manjil Budhathoki’s résumé"><a className="text-sm underline" href={url} download="Manjil_Budhathoki_Resume.pdf">Download résumé ↗</a><iframe className="resume-frame" src={url} title="Manjil Budhathoki’s résumé" /></Modal>;
}
