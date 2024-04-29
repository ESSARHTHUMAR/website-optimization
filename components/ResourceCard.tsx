import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  image: string;
  views: number;
  url: string;
}

const ResourceCard = ({ id, title, image, views, url }: Props) => {
  return (
    <div>
      {/* <div key={resource?._id}>
        <h1>{resource?.title}</h1>
      </div> */}
      <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/resource/${id}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
                <Image src={image} className="h-full rounded-md object-cover" width={384} height={440} alt={title}  />
            </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
          <div className="flex-center body-medium text-white gap-1.5">
            <Image
                src="/downloads.svg"
                width={20}
                height={20}
                alt="Download"
            />
            {views}
          </div>
          <Link href={`/resource/${url}`} className="flex-center text-gradient_purple-blue body-samibold gap-1.5">
            Download Now
            <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCard;
