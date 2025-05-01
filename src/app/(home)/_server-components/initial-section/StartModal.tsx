import { ServerDbService } from "@/app/_common/supabase/server/db";
import { Modal } from "@/app/(home)/_client-components";

type StartModalProps = {
  queryString: string;
};

export default async function StartModal({ queryString }: StartModalProps) {
  const dbService = new ServerDbService();
  const { data, error } = await dbService.getPortfolioModalContent(queryString);

  if (error) {
    console.error(error);
    return null;
  }

  await dbService.updatePortfolioViewCount(queryString);

  return (
    <Modal
      initialOpen={true}
      headerClassName="!bg-mika-green-50"
      bodyClassName="bg-mika-green-50"
      closeButtonProps={{
        radius: 0,
        className: "focus-visible:!outline-mika-yellow-50",
      }}
    >
      <div>
        <h6 className="text-sm md:text-3xl font-bold uppercase text-mika-yellow-50 text-center">
          Hello {data?.show_text}&nbsp;!
        </h6>
      </div>
    </Modal>
  );
}
