export interface AppModalProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
