import { useDisclosure } from "@mantine/hooks";
import { Modal as MantineModal } from "@mantine/core";

type ModalProps = {
  initialOpen?: boolean;
  children?: React.ReactNode;
  title?: string;
  headerClassName?: string;
  bodyClassName?: string;
  radius?: number;
  closeButtonProps?: React.ComponentProps<
    typeof MantineModal
  >["closeButtonProps"];
};

export default function Modal({
  children,
  initialOpen = false,
  title = "",
  headerClassName = "",
  bodyClassName = "",
  radius = 0,
  closeButtonProps = {},
}: ModalProps) {
  const [opened, { close }] = useDisclosure(initialOpen);

  return (
    <MantineModal
      centered
      opened={opened}
      onClose={close}
      title={title}
      radius={radius}
      classNames={{
        header: headerClassName,
        body: bodyClassName,
      }}
      closeButtonProps={closeButtonProps}
    >
      {children}
    </MantineModal>
  );
}
